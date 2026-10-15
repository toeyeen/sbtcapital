<script setup lang="ts">
import type { TableOfContentItem } from '~/data/knowledge-base'

const props = defineProps<{
  items: TableOfContentItem[]
}>()

const activeId = ref<string>('')

onMounted(() => {
  if (import.meta.client && props.items.length) {
    activeId.value = props.items[0]?.id || ''

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeId.value = entry.target.id
          }
        })
      },
      {
        rootMargin: '-80px 0px -60% 0px',
        threshold: 0.1
      }
    )

    props.items.forEach((item) => {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    })

    onUnmounted(() => {
      observer.disconnect()
    })
  }
})

function scrollTo(id: string) {
  if (import.meta.client) {
    const el = document.getElementById(id)
    if (el) {
      activeId.value = id
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
}
</script>

<template>
  <nav
    v-if="items.length"
    aria-label="Table of contents"
    class="p-5 sm:p-6 rounded-2xl border border-default bg-card/60 backdrop-blur-sm"
  >
    <div class="flex items-center gap-2 mb-4 pb-3 border-b border-default">
      <UIcon name="i-lucide-list-ordered" class="w-4 h-4 text-primary" />
      <span class="text-xs font-bold uppercase tracking-wider text-highlighted">Table of Contents</span>
    </div>

    <ul class="space-y-2 text-sm">
      <li
        v-for="item in items"
        :key="item.id"
        :class="[
          'transition-all duration-150',
          item.level === 3 ? 'pl-4 text-xs' : 'font-medium'
        ]"
      >
        <button
          type="button"
          :class="[
            'text-left transition-colors duration-150 block py-1 cursor-pointer w-full',
            activeId === item.id
              ? 'text-primary font-semibold translate-x-1'
              : 'text-muted hover:text-highlighted'
          ]"
          @click="scrollTo(item.id)"
        >
          <span class="inline-block mr-1.5 opacity-60" v-if="activeId === item.id">•</span>
          {{ item.title }}
        </button>
      </li>
    </ul>
  </nav>
</template>

