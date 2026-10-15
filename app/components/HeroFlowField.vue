<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const canvas = ref<HTMLCanvasElement | null>(null)

let context: CanvasRenderingContext2D | null = null
let animationFrame = 0
let resizeObserver: ResizeObserver | undefined
let visibilityObserver: IntersectionObserver | undefined
let colorObserver: MutationObserver | undefined
let motionPreference: MediaQueryList | undefined
let isVisible = true
let reducedMotion = false
let lastFrame = 0
let width = 0
let height = 0
let pixelRatio = 1

function render(time: number) {
  if (!canvas.value || !context)
    return

  context.clearRect(0, 0, width, height)

  const isDark = document.documentElement.classList.contains('dark')
  const color = isDark ? '128, 178, 255' : '26, 116, 255'
  const step = Math.max(20, Math.sqrt((width * height) / 3000))
  const phase = reducedMotion ? 0 : time / 7000

  for (let x = step / 2; x < width; x += step) {
    for (let y = step / 2; y < height; y += step) {
      const wave = Math.sin(x / 185 + Math.sin(y / 260 + phase) * 0.8 + phase)
        * Math.cos(y / 205 - x / 430 - phase * 0.65)
      const drift = reducedMotion ? 0 : wave * 1.8
      const opacity = 0.13 + (Math.sin(x * 12.9898 + y * 78.233) * 0.5 + 0.5) * 0.2
      const radius = 0.8 + (Math.sin(x / 110 + y / 95 + phase) + 1) * 0.35

      context.beginPath()
      context.arc(x + drift, y + drift * 0.55, radius, 0, Math.PI * 2)
      context.fillStyle = `rgba(${color}, ${opacity})`
      context.fill()
    }
  }
}

function animate(time: number) {
  if (!isVisible || reducedMotion || document.hidden) {
    animationFrame = 0
    return
  }

  if (time - lastFrame >= 1000 / 24) {
    render(time)
    lastFrame = time
  }

  animationFrame = window.requestAnimationFrame(animate)
}

function startAnimation() {
  if (!animationFrame && isVisible && !reducedMotion && !document.hidden)
    animationFrame = window.requestAnimationFrame(animate)
}

function stopAnimation() {
  if (animationFrame) {
    window.cancelAnimationFrame(animationFrame)
    animationFrame = 0
  }
}

function resizeCanvas() {
  if (!canvas.value)
    return

  const bounds = canvas.value.getBoundingClientRect()
  width = bounds.width
  height = bounds.height
  pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5)

  canvas.value.width = Math.round(width * pixelRatio)
  canvas.value.height = Math.round(height * pixelRatio)
  context = canvas.value.getContext('2d')

  if (!context)
    return

  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
  render(performance.now())
  startAnimation()
}

function handleMotionPreference(event: MediaQueryListEvent) {
  reducedMotion = event.matches
  stopAnimation()
  render(performance.now())
  startAnimation()
}

function handleVisibilityChange() {
  if (document.hidden)
    stopAnimation()
  else
    startAnimation()
}

onMounted(() => {
  if (!canvas.value)
    return

  motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
  reducedMotion = motionPreference.matches
  motionPreference.addEventListener('change', handleMotionPreference)

  resizeObserver = new ResizeObserver(resizeCanvas)
  resizeObserver.observe(canvas.value)

  visibilityObserver = new IntersectionObserver(([entry]) => {
    isVisible = entry?.isIntersecting ?? false
    if (isVisible)
      startAnimation()
    else
      stopAnimation()
  })
  visibilityObserver.observe(canvas.value)

  colorObserver = new MutationObserver(() => render(performance.now()))
  colorObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

  document.addEventListener('visibilitychange', handleVisibilityChange)
  resizeCanvas()
})

onBeforeUnmount(() => {
  stopAnimation()
  resizeObserver?.disconnect()
  visibilityObserver?.disconnect()
  colorObserver?.disconnect()
  motionPreference?.removeEventListener('change', handleMotionPreference)
  document.removeEventListener('visibilitychange', handleVisibilityChange)
})
</script>

<template>
  <canvas
    ref="canvas"
    class="pointer-events-none absolute inset-0 z-0 size-full"
    aria-hidden="true"
  />
</template>
