<script setup lang="ts">
import { KNOWLEDGE_BASE_ARTICLES, KNOWLEDGE_BASE_CATEGORIES, type KnowledgeArticle } from '~/data/knowledge-base'

useHead({
  title: 'Knowledge Base | SBT Capital iGaming & Sportsbook Insights',
  meta: [
    {
      name: 'description',
      content: 'Authoritative guides, technical architectures, regulatory breakdowns, and operational metrics for sports betting and online casino operators from 2022 to 2026.'
    }
  ]
})

const selectedCategory = ref<string>('All Articles')
const selectedYear = ref<string>('All Years')
const searchQuery = ref<string>('')
const currentPage = ref<number>(1)
const postsPerPage = 6

const availableYears = ['All Years', '2026', '2025', '2024', '2023', '2022']

// Reset pagination when filters change
watch([selectedCategory, selectedYear, searchQuery], () => {
  currentPage.value = 1
})

const filteredArticles = computed(() => {
  return KNOWLEDGE_BASE_ARTICLES.filter((article) => {
    // Category match
    const matchesCategory =
      selectedCategory.value === 'All Articles' || article.category === selectedCategory.value

    // Year match
    const matchesYear =
      selectedYear.value === 'All Years' || String(article.year) === selectedYear.value

    // Search query match
    const query = searchQuery.value.trim().toLowerCase()
    const matchesQuery =
      !query ||
      article.title.toLowerCase().includes(query) ||
      article.excerpt.toLowerCase().includes(query) ||
      article.author.name.toLowerCase().includes(query) ||
      article.category.toLowerCase().includes(query)

    return matchesCategory && matchesYear && matchesQuery
  })
})

const totalPages = computed(() => Math.ceil(filteredArticles.value.length / postsPerPage) || 1)

const paginatedArticles = computed(() => {
  const start = (currentPage.value - 1) * postsPerPage
  return filteredArticles.value.slice(start, start + postsPerPage)
})

const featuredArticle = computed(() => {
  return KNOWLEDGE_BASE_ARTICLES.find(a => a.featured) || KNOWLEDGE_BASE_ARTICLES[0]
})

function setPage(page: number) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    if (import.meta.client) {
      window.scrollTo({ top: 380, behavior: 'smooth' })
    }
  }
}
</script>

<template>
  <div class="min-h-screen bg-background">
    <!-- Knowledge Base hero -->
    <section class="relative overflow-hidden bg-brand-50 text-gray-950 py-16 sm:py-20 lg:py-24 border-b border-brand-200 dark:bg-gray-950 dark:text-white dark:border-gray-800">
      <div class="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-brand-200/50 blur-3xl pointer-events-none dark:bg-brand-900/30" />
      <div class="absolute -left-20 -top-20 w-96 h-96 rounded-full bg-brand-100/70 blur-3xl pointer-events-none dark:bg-brand-950/40" />

      <UContainer class="relative z-10">
        <div class="max-w-3xl space-y-6">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 text-xs font-bold uppercase tracking-wider text-brand-800 ring-1 ring-brand-200 dark:bg-gray-900 dark:text-brand-200 dark:ring-gray-700">
            <UIcon name="i-lucide-book-open" class="w-4 h-4 text-brand-700 dark:text-brand-200" />
            <span>SBT Capital Knowledge Base</span>
          </div>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-950 leading-none dark:text-white">
            Knowledge Base
          </h1>

          <p class="text-lg sm:text-xl font-medium text-gray-700 leading-relaxed max-w-2xl dark:text-gray-300">
            As a technology provider powering sportsbooks, retail agency systems, and gaming platforms, SBT Capital has accumulated a wealth of field-tested insights. The guides below collect our most critical research to help operators build resilient, profitable gaming businesses.
          </p>

          <!-- Quick Stats Badge Row -->
          <div class="flex flex-wrap items-center gap-6 pt-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
            <div class="flex items-center gap-2">
              <UIcon name="i-lucide-layers" class="w-4 h-4 text-brand-700 dark:text-brand-200" />
              <span>20 In-Depth Quarterly Guides</span>
            </div>
            <div class="flex items-center gap-2">
              <UIcon name="i-lucide-calendar" class="w-4 h-4 text-brand-700 dark:text-brand-200" />
              <span>5-Year Archive (2022–2026)</span>
            </div>
            <div class="flex items-center gap-2">
              <UIcon name="i-lucide-shield-check" class="w-4 h-4 text-brand-700 dark:text-brand-200" />
              <span>Regulator & Lab Grounded</span>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Navigation / Category Tabs -->
    <section class="sticky top-16 z-30 bg-background/90 backdrop-blur-md border-b border-default">
      <UContainer class="py-4">
        <div class="flex items-center justify-between gap-4 overflow-x-auto no-scrollbar py-1">
          <div class="flex items-center gap-2 shrink-0">
            <button
              v-for="cat in KNOWLEDGE_BASE_CATEGORIES"
              :key="cat"
              type="button"
              :class="[
                'rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap sm:text-sm',
                selectedCategory === cat
                  ? 'border-brand-800 bg-brand-700 text-white shadow-md shadow-brand-900/15'
                  : 'border-default bg-background text-gray-700 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-800 dark:text-gray-200 dark:hover:border-brand-700 dark:hover:bg-brand-950/50 dark:hover:text-brand-100'
              ]"
              @click="selectedCategory = cat"
            >
              {{ cat }}
            </button>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Filter & Search Controls -->
    <section class="py-8 bg-muted/10 border-b border-default/50">
      <UContainer>
        <div class="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <!-- Search Input -->
          <div class="relative flex-1 max-w-lg">
            <UIcon
              name="i-lucide-search"
              class="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none"
            />
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search Knowledge Base by keyword, title, or author..."
              class="w-full pl-11 pr-10 py-2.5 rounded-xl border border-default bg-card text-sm text-highlighted placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
            <button
              v-if="searchQuery"
              type="button"
              aria-label="Clear search"
              class="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-highlighted p-1"
              @click="searchQuery = ''"
            >
              <UIcon name="i-lucide-x" class="w-4 h-4" />
            </button>
          </div>

          <!-- Year Filters and Counter -->
          <div class="flex items-center justify-between sm:justify-end gap-4">
            <div class="flex items-center gap-1.5 overflow-x-auto">
              <span class="text-xs font-semibold uppercase tracking-wider text-muted hidden sm:inline mr-1">Year:</span>
              <button
                v-for="year in availableYears"
                :key="year"
                type="button"
                :class="[
                  'px-2.5 py-1 rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer',
                  selectedYear === year
                    ? 'bg-brand-700 text-white font-bold'
                    : 'bg-muted/20 text-muted hover:text-highlighted'
                ]"
                @click="selectedYear = year"
              >
                {{ year }}
              </button>
            </div>

            <div class="text-xs sm:text-sm font-semibold text-muted shrink-0 pl-2 border-l border-default">
              <span class="text-highlighted font-bold">{{ filteredArticles.length }}</span> Results
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Main Content Articles Area -->
    <section class="py-12 sm:py-16">
      <UContainer>
        <!-- Top Featured Article (Show on page 1 when no search active) -->
        <div
          v-if="currentPage === 1 && !searchQuery && selectedCategory === 'All Articles' && selectedYear === 'All Years' && featuredArticle"
          class="mb-12"
        >
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-xs font-bold uppercase tracking-wider text-muted">Editor's Pick</h2>
          </div>
          <KnowledgeBaseArticleCard :article="featuredArticle" :featured="true" />
        </div>

        <!-- Section Title for Grid -->
        <div class="flex items-center justify-between mb-8 pb-3 border-b border-default">
          <h2 class="text-xl font-bold text-highlighted">
            {{ selectedCategory === 'All Articles' ? 'Latest Publications' : selectedCategory }}
          </h2>
          <span class="text-xs text-muted">Page {{ currentPage }} of {{ totalPages }}</span>
        </div>

        <!-- Empty State -->
        <div
          v-if="paginatedArticles.length === 0"
          class="text-center py-20 px-4 rounded-3xl border border-dashed border-default bg-card/40 my-8"
        >
          <UIcon name="i-lucide-file-question" class="w-12 h-12 text-muted mx-auto mb-4" />
          <h3 class="text-lg font-bold text-highlighted">No articles match your criteria</h3>
          <p class="text-sm text-muted max-w-md mx-auto mt-1 mb-6">
            Try adjusting your search keywords or switching category filters to find the guides you need.
          </p>
          <UButton
            color="primary"
            variant="soft"
            label="Reset Filters"
            @click="selectedCategory = 'All Articles'; selectedYear = 'All Years'; searchQuery = ''"
          />
        </div>

        <!-- Regular Articles 3-Column Grid -->
        <div
          v-else
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <KnowledgeBaseArticleCard
            v-for="article in paginatedArticles"
            :key="article.slug"
            :article="article"
          />
        </div>

        <!-- Pagination Bar -->
        <div
          v-if="totalPages > 1"
          class="mt-14 pt-8 border-t border-default flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <button
            type="button"
            :disabled="currentPage === 1"
            :class="[
              'inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-colors border',
              currentPage === 1
                ? 'opacity-40 border-default text-muted cursor-not-allowed'
                : 'border-default bg-card hover:bg-muted/50 text-highlighted cursor-pointer'
            ]"
            @click="setPage(currentPage - 1)"
          >
            <UIcon name="i-lucide-chevron-left" class="w-4 h-4" />
            <span>Previous Page</span>
          </button>

          <!-- Numeric Pages -->
          <div class="flex items-center gap-1.5">
            <button
              v-for="p in totalPages"
              :key="p"
              type="button"
              :class="[
                'w-9 h-9 rounded-xl text-sm font-bold transition-all cursor-pointer',
                currentPage === p
                  ? 'bg-brand-700 text-white shadow-md shadow-brand-900/15 ring-1 ring-brand-800'
                  : 'text-muted hover:text-highlighted hover:bg-muted/30'
              ]"
              @click="setPage(p)"
            >
              {{ p }}
            </button>
          </div>

          <button
            type="button"
            :disabled="currentPage === totalPages"
            :class="[
              'inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-colors border',
              currentPage === totalPages
                ? 'opacity-40 border-default text-muted cursor-not-allowed'
                : 'border-default bg-card hover:bg-muted/50 text-highlighted cursor-pointer'
            ]"
            @click="setPage(currentPage + 1)"
          >
            <span>Next Page</span>
            <UIcon name="i-lucide-chevron-right" class="w-4 h-4" />
          </button>
        </div>
      </UContainer>
    </section>

    <!-- Industry Report Lead Magnet Banner (Matching SOFTSWISS lead magnet design) -->
    <section class="py-16 bg-muted/20 border-t border-default">
      <UContainer>
        <div class="rounded-3xl border border-default bg-card/80 p-8 sm:p-12 relative overflow-hidden">
          <div class="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div class="lg:col-span-8 space-y-4">
              <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary">
                Annual Technical Report
              </span>
              <h3 class="text-2xl sm:text-3xl font-extrabold text-highlighted">
                2026 African Sportsbook & iGaming Trends
              </h3>
              <p class="text-base text-muted leading-relaxed max-w-2xl">
                Discover architectural benchmarks across vital industry niches: mobile money settlement latency, retail agency float logistics in Nigeria and Kenya, sub-second odds feeds, and responsible gaming mandates.
              </p>
            </div>

            <div class="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <UButton
                to="mailto:hello@sbtcapital.ng?subject=Request%202026%20iGaming%20Trends%20Report"
                color="primary"
                variant="solid"
                size="lg"
                class="justify-center font-bold"
                label="Request Free Report"
                icon="i-lucide-download"
              />
              <UButton
                to="/products/custom-platform-development#project-enquiry"
                color="neutral"
                variant="outline"
                size="lg"
                class="justify-center"
                label="Consult Our Engineering Team"
              />
            </div>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>

