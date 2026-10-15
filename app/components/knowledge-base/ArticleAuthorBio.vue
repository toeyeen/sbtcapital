<script setup lang="ts">
import type { AuthorInfo } from '~/data/knowledge-base'

defineProps<{
  author: AuthorInfo
}>()
</script>

<template>
  <div class="p-5 sm:p-6 rounded-2xl border border-default bg-card/60 backdrop-blur-sm">
    <div class="flex items-center justify-between mb-4 pb-3 border-b border-default">
      <span class="text-xs font-bold uppercase tracking-wider text-muted">Written By</span>
      <a
        v-if="author.linkedin"
        :href="author.linkedin"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Author LinkedIn profile"
        class="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
      >
        <UIcon name="i-simple-icons-linkedin" class="w-3.5 h-3.5" />
      </a>
    </div>

    <div class="flex items-center gap-3 mb-3">
      <img
        :src="author.avatar"
        :alt="author.name"
        class="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20 shrink-0"
      />
      <div>
        <h4 class="font-bold text-highlighted text-sm sm:text-base leading-tight">{{ author.name }}</h4>
        <p class="text-xs text-primary font-medium mt-0.5">{{ author.role }}</p>
      </div>
    </div>

    <p v-if="author.bio" class="text-xs text-muted leading-relaxed">
      {{ author.bio }}
    </p>
  </div>
</template>

