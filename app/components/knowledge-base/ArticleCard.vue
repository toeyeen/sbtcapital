<script setup lang="ts">
import type { KnowledgeArticle } from '~/data/knowledge-base'

defineProps<{
  article: KnowledgeArticle
  featured?: boolean
}>()
</script>

<template>
  <!-- Featured Variant -->
  <article
    v-if="featured"
    class="group relative overflow-hidden rounded-3xl border border-default bg-card/60 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5"
  >
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-0">
      <div class="relative overflow-hidden bg-brand-50 dark:bg-brand-950/40 lg:col-span-7 aspect-16/10 lg:aspect-auto min-h-[300px]">
        <img
          :src="article.coverImage"
          :alt="article.title"
          class="h-full w-full object-contain p-8 sm:p-12 transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div class="absolute top-4 left-4 flex flex-wrap gap-2">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-100 text-brand-800 shadow-sm dark:bg-brand-950 dark:text-brand-200">
            <UIcon name="i-lucide-sparkles" class="w-3.5 h-3.5" />
            Featured Article
          </span>
          <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-neutral-900/80 text-white backdrop-blur-md border border-white/10">
            {{ article.category }}
          </span>
        </div>
      </div>

      <div class="flex flex-col justify-between p-6 sm:p-8 lg:p-10 lg:col-span-5">
        <div class="space-y-4">
          <div class="flex items-center gap-3 text-xs text-muted">
            <span class="font-medium text-highlighted">{{ article.date }}</span>
            <span>•</span>
            <span>{{ article.readTime }}</span>
            <span>•</span>
            <span class="font-mono text-primary font-medium">{{ article.quarter }}</span>
          </div>

          <div class="flex items-center gap-3">
            <img
              :src="article.author.avatar"
              :alt="article.author.name"
              class="w-8 h-8 rounded-full object-cover ring-2 ring-primary/20"
            />
            <div>
              <p class="text-sm font-semibold text-highlighted leading-none">{{ article.author.name }}</p>
              <p class="text-xs text-muted mt-0.5">{{ article.author.role }}</p>
            </div>
          </div>

          <h3 class="text-xl sm:text-2xl font-bold tracking-tight text-highlighted group-hover:text-primary transition-colors duration-200">
            <NuxtLink :to="`/knowledge-base/${article.slug}`" class="focus:outline-none">
              <span class="absolute inset-0 z-10" aria-hidden="true" />
              {{ article.title }}
            </NuxtLink>
          </h3>

          <p class="text-sm sm:text-base text-muted line-clamp-3 leading-relaxed">
            {{ article.excerpt }}
          </p>
        </div>

        <div class="pt-6 mt-6 border-t border-default flex items-center justify-between">
          <span class="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:translate-x-1 transition-transform duration-200">
            Read Comprehensive Guide
            <UIcon name="i-lucide-arrow-right" class="w-4 h-4" />
          </span>
          <UIcon
            v-if="article.audioEmbed"
            name="i-lucide-headphones"
            class="w-5 h-5 text-muted hover:text-primary transition-colors"
            title="Audio Guide Available"
          />
        </div>
      </div>
    </div>
  </article>

  <!-- Regular Grid Variant -->
  <article
    v-else
    class="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-default bg-card/60 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
  >
    <div>
      <div class="relative overflow-hidden aspect-16/10 bg-brand-50 dark:bg-brand-950/40">
        <img
          :src="article.coverImage"
          :alt="article.title"
          class="h-full w-full object-contain p-8 transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div class="absolute top-3 left-3">
          <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-900/85 text-white backdrop-blur-md border border-white/10">
            {{ article.category }}
          </span>
        </div>
        <div class="absolute bottom-3 right-3">
          <span class="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-brand-100 text-brand-800 dark:bg-brand-950 dark:text-brand-200">
            {{ article.quarter }}
          </span>
        </div>
      </div>

      <div class="p-5 sm:p-6 space-y-3">
        <div class="flex items-center justify-between text-xs text-muted">
          <span>{{ article.date }}</span>
          <span>{{ article.readTime }}</span>
        </div>

        <h3 class="text-lg font-bold text-highlighted group-hover:text-primary transition-colors duration-200 line-clamp-2 leading-snug">
          <NuxtLink :to="`/knowledge-base/${article.slug}`" class="focus:outline-none">
            <span class="absolute inset-0 z-10" aria-hidden="true" />
            {{ article.title }}
          </NuxtLink>
        </h3>

        <p class="text-sm text-muted line-clamp-2 leading-relaxed">
          {{ article.excerpt }}
        </p>
      </div>
    </div>

    <div class="p-5 sm:p-6 pt-0 border-t border-default/50 mt-auto flex items-center justify-between">
      <div class="flex items-center gap-2.5">
        <img
          :src="article.author.avatar"
          :alt="article.author.name"
          class="w-6 h-6 rounded-full object-cover ring-1 ring-primary/20"
        />
        <span class="text-xs font-medium text-highlighted truncate max-w-[120px] sm:max-w-[150px]">{{ article.author.name }}</span>
      </div>

      <div class="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200">
        <UIcon name="i-lucide-arrow-up-right" class="w-4 h-4" />
      </div>
    </div>
  </article>
</template>

