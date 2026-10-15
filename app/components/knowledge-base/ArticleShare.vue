<script setup lang="ts">
const props = defineProps<{
  title: string
  url?: string
}>()

const copied = ref(false)
const fullUrl = computed(() => {
  if (props.url) return props.url
  if (import.meta.client) {
    return window.location.href
  }
  return 'https://sbtcapital.ng/knowledge-base'
})

const shareLinks = computed(() => [
  {
    name: 'X (Twitter)',
    icon: 'i-simple-icons-x',
    href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(props.title)}&url=${encodeURIComponent(fullUrl.value)}`
  },
  {
    name: 'LinkedIn',
    icon: 'i-simple-icons-linkedin',
    href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl.value)}`
  },
  {
    name: 'Facebook',
    icon: 'i-simple-icons-facebook',
    href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl.value)}`
  }
])

async function copyToClipboard() {
  if (import.meta.client && navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(fullUrl.value)
      copied.value = true
      setTimeout(() => {
        copied.value = false
      }, 3000)
    } catch {
      // Fallback
    }
  }
}
</script>

<template>
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-6 border-y border-default my-8">
    <div class="flex items-center gap-2">
      <UIcon name="i-lucide-share-2" class="w-4 h-4 text-primary" />
      <span class="text-sm font-semibold text-highlighted uppercase tracking-wider">Share This Article</span>
    </div>

    <div class="flex items-center gap-2">
      <a
        v-for="link in shareLinks"
        :key="link.name"
        :href="link.href"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="`Share on ${link.name}`"
        class="w-9 h-9 rounded-full border border-default bg-card/60 flex items-center justify-center text-muted hover:text-highlighted hover:border-primary/50 hover:bg-primary/10 transition-colors"
      >
        <UIcon :name="link.icon" class="w-4 h-4" />
      </a>

      <!-- Copy Link Button -->
      <button
        type="button"
        @click="copyToClipboard"
        class="relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-default bg-card/60 text-xs font-semibold text-muted hover:text-highlighted hover:border-primary/50 transition-colors cursor-pointer"
      >
        <UIcon :name="copied ? 'i-lucide-check' : 'i-lucide-link'" class="w-3.5 h-3.5 text-primary" />
        <span>{{ copied ? 'Link Copied!' : 'Copy Link' }}</span>
      </button>
    </div>
  </div>
</template>

