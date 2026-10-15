<script setup lang="ts">
import {
  KNOWLEDGE_BASE_ARTICLES,
  getArticleBySlug,
  getRelatedArticles,
  type KnowledgeArticle
} from '~/data/knowledge-base'

const route = useRoute()
const slug = computed(() => String(route.params.slug))

const article = computed<KnowledgeArticle | undefined>(() => {
  return getArticleBySlug(slug.value)
})

// 404 handling
if (!article.value) {
  throw createError({
    statusCode: 404,
    statusMessage: `Knowledge Base article '${slug.value}' not found`
  })
}

useHead(() => ({
  title: `${article.value?.title} | SBT Capital Knowledge Base`,
  meta: [
    { name: 'description', content: article.value?.excerpt },
    { property: 'og:title', content: article.value?.title },
    { property: 'og:description', content: article.value?.excerpt },
    { property: 'og:image', content: article.value?.coverImage },
    { name: 'twitter:card', content: 'summary_large_image' }
  ]
}))

const currentIndex = computed(() => {
  return KNOWLEDGE_BASE_ARTICLES.findIndex(a => a.slug === slug.value)
})

const prevArticle = computed(() => {
  if (currentIndex.value > 0) {
    return KNOWLEDGE_BASE_ARTICLES[currentIndex.value - 1]
  }
  return null
})

const nextArticle = computed(() => {
  if (currentIndex.value < KNOWLEDGE_BASE_ARTICLES.length - 1) {
    return KNOWLEDGE_BASE_ARTICLES[currentIndex.value + 1]
  }
  return null
})

const relatedArticles = computed(() => {
  return getRelatedArticles(slug.value, 3)
})
</script>

<template>
  <div v-if="article" class="min-h-screen bg-background pb-20">
    <!-- Breadcrumb & Top Header -->
    <header class="py-8 sm:py-12 border-b border-default bg-card/30">
      <UContainer>
        <!-- Breadcrumbs -->
        <nav aria-label="Breadcrumb" class="mb-6">
          <ol class="flex flex-wrap items-center gap-2 text-xs text-muted">
            <li>
              <NuxtLink to="/" class="hover:text-highlighted transition-colors flex items-center gap-1">
                <UIcon name="i-lucide-home" class="w-3.5 h-3.5" />
                <span>Home</span>
              </NuxtLink>
            </li>
            <li>
              <UIcon name="i-lucide-chevron-right" class="w-3 h-3 text-muted/60" />
            </li>
            <li>
              <NuxtLink to="/knowledge-base" class="hover:text-highlighted transition-colors font-medium">
                Knowledge Base
              </NuxtLink>
            </li>
            <li>
              <UIcon name="i-lucide-chevron-right" class="w-3 h-3 text-muted/60" />
            </li>
            <li class="text-highlighted font-medium truncate max-w-[200px] sm:max-w-md">
              {{ article.title }}
            </li>
          </ol>
        </nav>

        <!-- Category & Quarter Badges -->
        <div class="flex flex-wrap items-center gap-2.5 mb-4">
          <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
            {{ article.category }}
          </span>
          <span class="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-brand-100 text-brand-800 dark:bg-brand-950 dark:text-brand-200">
            {{ article.quarter }}
          </span>
          <span class="text-xs text-muted">
            Updated: {{ article.date }}
          </span>
          <span class="text-xs text-muted">•</span>
          <span class="text-xs text-muted">
            {{ article.readTime }}
          </span>
        </div>

        <!-- Headline -->
        <h1 class="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-highlighted max-w-4xl leading-tight sm:leading-snug">
          {{ article.title }}
        </h1>

        <!-- Author Byline -->
        <div class="flex items-center gap-3 mt-6 pt-6 border-t border-default/60">
          <img
            :src="article.author.avatar"
            :alt="article.author.name"
            class="w-10 h-10 rounded-full object-cover ring-2 ring-primary/20"
          />
          <div>
            <p class="text-sm font-bold text-highlighted leading-none">{{ article.author.name }}</p>
            <p class="text-xs text-muted mt-1">{{ article.author.role }}</p>
          </div>
        </div>
      </UContainer>
    </header>

    <!-- Main Content Container with Sticky Sidebar -->
    <main class="py-10 sm:py-14">
      <UContainer>
        <!-- Hero Cover Banner -->
        <div class="relative overflow-hidden rounded-3xl aspect-21/9 mb-10 border border-default shadow-xl">
          <img
            :src="article.coverImage"
            :alt="article.title"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <!-- Optional Audio Podcast Player Bar -->
        <div
          v-if="article.audioEmbed"
          class="mb-10 p-4 sm:p-5 rounded-2xl border border-default bg-card/60 backdrop-blur-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-brand-100 text-brand-800 flex items-center justify-center shrink-0 shadow-sm dark:bg-brand-950 dark:text-brand-200">
              <UIcon name="i-lucide-headphones" class="w-5 h-5" />
            </div>
            <div>
              <p class="text-sm font-bold text-highlighted">Listen to Technical Brief</p>
              <p class="text-xs text-muted">Audio narration and executive overview</p>
            </div>
          </div>
          <audio controls class="w-full sm:w-80 h-10 rounded-lg">
            <source src="https://media.blubrry.com/take_it_further/content.blubrry.com/take_it_further/example.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>

        <!-- Two Column Layout: Main Body + Sticky Sidebar -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <!-- Article Body -->
          <article class="lg:col-span-8 space-y-6">
            <!-- Article Content HTML -->
            <div
              class="prose prose-neutral dark:prose-invert max-w-none prose-headings:text-highlighted prose-headings:font-bold prose-headings:scroll-mt-24 prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-table:my-6 prose-th:bg-muted/30 prose-td:border-default prose-th:border-default prose-p:leading-relaxed text-muted prose-p:text-base"
              v-html="article.content"
            />

            <!-- Interactive Article Rating Component -->
            <KnowledgeBaseArticleRating :articleSlug="article.slug" />

            <!-- Social Share Bar Component -->
            <KnowledgeBaseArticleShare :title="article.title" />
          </article>

          <!-- Sidebar -->
          <aside class="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <!-- Author Profile Card -->
            <KnowledgeBaseArticleAuthorBio :author="article.author" />

            <!-- Table of Contents -->
            <KnowledgeBaseArticleTableOfContents :items="article.tableOfContents" />

            <!-- Quick CTA Card -->
            <div class="p-6 rounded-2xl border border-primary/20 bg-primary/5 space-y-4">
              <div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <UIcon name="i-lucide-rocket" class="w-5 h-5" />
              </div>
              <h4 class="text-base font-bold text-highlighted">Launching an iGaming Brand?</h4>
              <p class="text-xs text-muted leading-relaxed">
                Connect with our technical solution architects to discuss turnkey platforms, seamless wallets, and retail agent deployments.
              </p>
              <UButton
                to="/products/white-label-sportsbook"
                color="primary"
                variant="solid"
                size="sm"
                block
                label="Explore White-Label Solution"
              />
            </div>
          </aside>
        </div>
      </UContainer>
    </main>

    <!-- Prev / Next Post Navigation Bar -->
    <section class="py-8 border-y border-default bg-card/20">
      <UContainer>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
          <!-- Prev Link -->
          <div class="text-left">
            <NuxtLink
              v-if="prevArticle"
              :to="`/knowledge-base/${prevArticle.slug}`"
              class="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-muted hover:text-primary transition-colors"
            >
              <UIcon name="i-lucide-arrow-left" class="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span class="truncate max-w-[200px]">Previous: {{ prevArticle.title }}</span>
            </NuxtLink>
          </div>

          <!-- All Articles Link -->
          <div class="text-center">
            <UButton
              to="/knowledge-base"
              color="neutral"
              variant="outline"
              size="sm"
              icon="i-lucide-grid"
              label="All Knowledge Base"
            />
          </div>

          <!-- Next Link -->
          <div class="text-right">
            <NuxtLink
              v-if="nextArticle"
              :to="`/knowledge-base/${nextArticle.slug}`"
              class="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-muted hover:text-primary transition-colors"
            >
              <span class="truncate max-w-[200px]">Next: {{ nextArticle.title }}</span>
              <UIcon name="i-lucide-arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </NuxtLink>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Related / Useful Articles Grid -->
    <section class="py-16">
      <UContainer>
        <div class="flex items-center justify-between mb-8 pb-3 border-b border-default">
          <h2 class="text-2xl font-bold text-highlighted">Useful Related Articles</h2>
          <NuxtLink to="/knowledge-base" class="text-xs font-semibold text-primary hover:underline">
            View All 20 Guides →
          </NuxtLink>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <KnowledgeBaseArticleCard
            v-for="rel in relatedArticles"
            :key="rel.slug"
            :article="rel"
          />
        </div>
      </UContainer>
    </section>
  </div>
</template>

