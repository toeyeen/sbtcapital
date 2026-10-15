<script setup lang="ts">
const enquiryLink = computed(() => {
  const query = new URLSearchParams({
    subject: 'Sportsbook Operator Partnership Enquiry',
    body: 'Hello SBT Capital Partnerships Team,\n\nI would like to discuss a sportsbook operator partnership.\n\nBrand / Organisation Name:\nTarget Market(s):\nCurrent Status (New Launch / Migrating Platform / Adding Feeds):\nProducts of Interest (Full Sportsbook / Retail Agent System / Odds Feeds / Virtual Games):\nEstimated Monthly Turnover / Player Base:\n\nPlease connect me with your partnership directors.\n'
  })

  return `mailto:hello@sbtcapital.ng?${query.toString()}`
})

// Active Solution Filter
const activeFilter = ref<string>('all')

const solutionFilters = [
  { id: 'all', label: 'All Partners' },
  { id: 'sportsbook', label: 'Sportsbook Platform' },
  { id: 'retail', label: 'Retail & Agent Network' },
  { id: 'aggregator', label: 'Game Aggregator' },
  { id: 'data', label: 'Tier-1 Data Partners' }
]

// Operators & Partners List
const operators = [
  {
    id: 'yangasport',
    name: 'YangaSport',
    category: 'sportsbook',
    badge: 'Sportsbook Platform',
    launched: 'November 2022',
    region: 'Nigeria (Online & Retail)',
    description: 'High-growth Nigerian sports betting brand operating online wagering, mobile agent networks, and high-frequency virtual sports across major Nigerian states.'
  },
  {
    id: 'starbet',
    name: 'StarBet Nigeria',
    category: 'sportsbook',
    badge: 'Sportsbook Platform',
    launched: 'July 2021',
    region: 'Nigeria',
    description: 'Premier Nigerian sports betting and casino operator with hundreds of physical retail betting shops, live betting terminals, and rapid online cashier processing.'
  },
  {
    id: 'lottu',
    name: 'Lottu',
    category: 'sportsbook',
    badge: 'Sportsbook',
    launched: 'August 2025',
    region: 'Emerging Markets',
    description: 'Next-generation sports betting and numbers brand built on our low-latency mobile-first interface, offering thousands of daily in-play markets.'
  },
  {
    id: 'receba',
    name: 'Receba',
    category: 'sportsbook',
    badge: 'Sportsbook',
    launched: 'April 2026',
    region: 'Latin America',
    description: 'Fast-scaling LatAm sports betting operator utilizing our turnkey odds feeds, Portuguese localization, and automated risk profiling.'
  },
  {
    id: 'bet7k',
    name: 'Bet7K',
    category: 'aggregator',
    badge: 'Game Aggregator',
    launched: 'June 2023',
    region: 'International',
    description: 'Flagship gaming brand offering thousands of aggregated casino slots alongside live sports betting under a unified player wallet balance.'
  },
  {
    id: 'jabulabets',
    name: 'Jabula Bets',
    category: 'sportsbook',
    badge: 'Casino & Sportsbook',
    launched: 'October 2025',
    region: 'South Africa',
    description: 'Licensed South African operator delivering regulated sports fixtures, horseracing, and instant virtual games compliant with WCGRB guidelines.'
  },
  {
    id: 'tonybet',
    name: 'Tonybet',
    category: 'aggregator',
    badge: 'Game Aggregator',
    launched: 'February 2021',
    region: 'Europe & LatAm',
    description: 'Global iGaming powerhouse using our unified aggregation architecture to deliver localized sports fixtures, esports, and casino gaming.'
  },
  {
    id: 'betibet',
    name: 'Betibet',
    category: 'sportsbook',
    badge: 'Sportsbook',
    launched: 'June 2022',
    region: 'Global',
    description: 'High-volume international sportsbook platform processing over 100,000 live monthly events across football, basketball, and esports.'
  },
  {
    id: 'mzansibet',
    name: 'Mzansibet',
    category: 'retail',
    badge: 'Retail & Sportsbook',
    launched: 'February 2025',
    region: 'South Africa',
    description: 'Omni-channel betting operator combining physical terminal retail shops with online sports betting powered by SBT Capital technology.'
  },
  {
    id: 'ogunstate',
    name: 'Ogun State Gaming Board',
    category: 'retail',
    badge: 'Public-Sector Partner',
    launched: 'Strategic Partner',
    region: 'Nigeria',
    description: 'Collaborative gaming regulatory and technology framework supporting regulated lottery, retail agent networks, and responsible gaming initiatives.'
  },
  {
    id: 'sportradar-partner',
    name: 'Sportradar',
    category: 'data',
    badge: 'Tier-1 Data Partner',
    launched: 'Strategic Partner',
    region: 'Global',
    description: 'Official sports data rights and Betradar live trading engine providing real-time odds, live match trackers, and automated market monitoring.'
  },
  {
    id: 'genius-partner',
    name: 'Genius Sports (BetGenius)',
    category: 'data',
    badge: 'Official Data Partner',
    launched: 'Strategic Partner',
    region: 'Global',
    description: 'Official Premier League, NFL, and FIBA sub-second sports data feed partner, powering Bet Builder algorithms and in-play micro-markets.'
  },
  {
    id: 'statsperform-partner',
    name: 'Stats Perform',
    category: 'data',
    badge: 'Opta AI Partner',
    launched: 'Strategic Partner',
    region: 'Global',
    description: 'World-renowned Opta sports analytics and live streaming provider, delivering deep player performance data, xG metrics, and micro-bets.'
  }
]

const filteredOperators = computed(() => {
  if (activeFilter.value === 'all') return operators
  return operators.filter(op => op.category === activeFilter.value)
})

// Endorsements Data
const partnerReviews = [
  {
    quote: 'SBT Capital has been instrumental in scaling our sportsbook operations across Africa. Their technical responsiveness, zero-downtime architecture, and deep familiarity with local African agency operations set them apart.',
    author: 'Shuki Barak',
    title: 'Senior iGaming Advisory'
  },
  {
    quote: 'The integration of official feeds from Sportradar and BetGenius through SBT Capital gave our trading desk the competitive edge we needed during peak tournament events like AFCON and the Champions League.',
    author: 'Alex Uritu',
    title: 'Chief Marketing & Growth Officer'
  },
  {
    quote: 'We have been continuously impressed with the stability of their seamless wallet and the offline resilience of their retail shop terminals. It gave our investors complete confidence to expand into new territories.',
    author: 'Nick Garner',
    title: 'iGaming Entrepreneur & Operator'
  }
]

useSeoMeta({
  title: 'Sportsbook Operator Partners | SBT Capital',
  description: 'Discover the leading sportsbook operators and tier-1 technology partners scaling with SBT Capital. Powered by Sportradar, BetGenius, and Stats Perform.',
  ogTitle: 'Sportsbook Operators & Business Partners | SBT Capital',
  ogDescription: 'Strategic technology engine for ambitious sportsbook operators across Africa and globally.'
})
</script>

<template>
  <UPage class="overflow-x-hidden">
    <!-- 1. Hero Section -->
    <section class="relative isolate overflow-hidden bg-brand-50/60 pb-16 pt-12 dark:bg-gray-950 sm:pb-24 sm:pt-20">
      <div class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-200/50 via-brand-50/30 to-transparent dark:from-brand-900/30 dark:via-gray-950 dark:to-transparent" />
      <div class="pointer-events-none absolute -right-32 -top-24 size-96 rounded-full bg-brand-400/10 blur-3xl dark:bg-brand-500/10" />

      <UContainer>
        <div class="mx-auto max-w-4xl text-center">
          <div class="inline-flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-brand-700 shadow-sm ring-1 ring-brand-200/80 backdrop-blur-sm dark:bg-brand-950/80 dark:text-brand-300 dark:ring-brand-800/80">
            <span class="flex size-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Operator & Industry Partners</span>
            <span class="text-gray-300 dark:text-gray-700">•</span>
            <span class="text-gray-600 dark:text-gray-400">Scale with Confidence</span>
          </div>

          <h1 class="mt-6 text-4xl font-extrabold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl dark:text-white">
            Trusted by Leading
            <span class="block bg-linear-to-r from-brand-600 via-brand-500 to-emerald-600 bg-clip-text text-transparent dark:from-brand-400 dark:via-brand-300 dark:to-emerald-400">
              Sportsbook Operators.
            </span>
          </h1>

          <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Our mission is to be the strategic technology backbone that helps iGaming operators grow with certainty.
            We provide robust betting software, turnkey odds feeds, retail agency infrastructure, and dedicated client service—backed by tier-1 global data leaders including <strong>Sportradar, BetGenius, and Stats Perform</strong>.
          </p>

          <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
            <UButton
              :to="enquiryLink"
              label="Discuss Operator Partnership"
              color="primary"
              size="xl"
              trailing-icon="i-lucide-arrow-right"
              class="shadow-lg shadow-brand-500/20"
            />
            <UButton
              to="#operators-list"
              label="View Partners Directory"
              color="neutral"
              variant="outline"
              size="xl"
              leading-icon="i-lucide-users"
            />
          </div>
        </div>
      </UContainer>
    </section>

    <!-- 2. Official Technology Feeds Showcase (Sportradar, BetGenius, Stats Perform) -->
    <section class="py-12 bg-gray-950 text-white border-b border-gray-800">
      <UContainer>
        <div class="text-center">
          <p class="text-xs font-bold uppercase tracking-widest text-emerald-400">
            Institutional Data & Feed Backbone
          </p>
          <h2 class="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Powered by Global Sports Data Leaders
          </h2>
          <p class="mx-auto mt-2 max-w-2xl text-xs text-gray-400">
            Every operator on our platform benefits from pre-integrated official feeds from the most reputable sports data companies in the world.
          </p>
        </div>

        <div class="mt-8 grid gap-4 md:grid-cols-3">
          <div class="rounded-2xl border border-gray-800 bg-gray-900/80 p-5">
            <div class="flex items-center justify-between">
              <span class="font-mono text-base font-extrabold text-white">SPORTRADAR</span>
              <span class="rounded bg-primary/20 px-2 py-0.5 text-[0.65rem] font-bold text-primary-300">Official Partner</span>
            </div>
            <p class="mt-3 text-xs leading-5 text-gray-400">
              Coverage across 900,000+ matches annually. Pre-match, in-play odds, live match visualizers, and Betradar automated risk algorithms.
            </p>
          </div>

          <div class="rounded-2xl border border-gray-800 bg-gray-900/80 p-5">
            <div class="flex items-center justify-between">
              <span class="font-mono text-base font-extrabold text-white">GENIUS SPORTS</span>
              <span class="rounded bg-emerald-500/20 px-2 py-0.5 text-[0.65rem] font-bold text-emerald-300">Official Partner</span>
            </div>
            <p class="mt-3 text-xs leading-5 text-gray-400">
              Official data partner to Premier League, NFL, and FIBA. Sub-second stadium tracking and industry-leading Bet Builder engines.
            </p>
          </div>

          <div class="rounded-2xl border border-gray-800 bg-gray-900/80 p-5">
            <div class="flex items-center justify-between">
              <span class="font-mono text-base font-extrabold text-white">STATS PERFORM</span>
              <span class="rounded bg-violet-500/20 px-2 py-0.5 text-[0.65rem] font-bold text-violet-300">Opta AI Partner</span>
            </div>
            <p class="mt-3 text-xs leading-5 text-gray-400">
              Opta-certified player performance analytics, player prop markets, expected goals (xG), and live sports video streaming.
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- 3. Filterable Operator Cards (from Concept) -->
    <section id="operators-list" class="py-16 sm:py-24 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <UContainer>
        <div class="flex flex-col items-center justify-between gap-4 border-b border-gray-200 pb-6 sm:flex-row dark:border-gray-800">
          <div class="flex flex-wrap items-center gap-2">
            <button
              v-for="filter in solutionFilters"
              :key="filter.id"
              type="button"
              class="rounded-xl px-4 py-2 text-xs font-bold transition-all sm:text-sm"
              :class="activeFilter === filter.id ? 'bg-primary text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'"
              @click="activeFilter = filter.id"
            >
              {{ filter.label }}
            </button>
          </div>

          <div class="text-xs font-semibold text-gray-500 dark:text-gray-400">
            Showing <strong class="text-gray-900 dark:text-white">{{ filteredOperators.length }}</strong> Partners
          </div>
        </div>

        <!-- Operator Cards Grid -->
        <div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="op in filteredOperators"
            :key="op.id"
            class="group flex flex-col justify-between rounded-3xl border border-gray-200 bg-gray-50/50 p-6 transition-all hover:bg-white hover:shadow-xl dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-900"
          >
            <div>
              <div class="flex items-center justify-between border-b border-gray-200/80 pb-4 dark:border-gray-800">
                <span class="rounded-lg bg-gray-950 px-3 py-1 font-mono text-xs font-bold text-white">
                  {{ op.name }}
                </span>
                <UBadge :label="op.badge" color="primary" variant="subtle" size="sm" />
              </div>

              <div class="mt-4 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>{{ op.region }}</span>
                <span class="font-medium text-emerald-600 dark:text-emerald-400">{{ op.launched }}</span>
              </div>

              <h3 class="mt-3 text-lg font-bold text-gray-900 dark:text-white">
                {{ op.name }}
              </h3>
              <p class="mt-2 text-xs leading-5 text-gray-600 dark:text-gray-400">
                {{ op.description }}
              </p>
            </div>

            <div class="mt-6 border-t border-gray-200/60 pt-4 dark:border-gray-800">
              <UButton
                :to="enquiryLink"
                label="Partner Discussion"
                color="neutral"
                variant="outline"
                size="sm"
                trailing-icon="i-lucide-arrow-right"
                class="w-full justify-center text-xs"
              />
            </div>
          </article>
        </div>
      </UContainer>
    </section>

    <!-- 4. Facts & Figures -->
    <section class="py-16 sm:py-24 bg-gray-50 dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
      <UContainer>
        <div class="mx-auto max-w-3xl text-center">
          <UBadge label="Industry Scale" color="primary" variant="subtle" size="md" />
          <h2 class="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl dark:text-white">
            Built for High-Volume Operators
          </h2>
          <p class="mt-3 text-base text-gray-600 dark:text-gray-300">
            Performance metrics that give sportsbook operators the stability to run uninterrupted during peak sporting events.
          </p>
        </div>

        <div class="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          <div class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800 text-center">
            <p class="text-3xl font-extrabold text-primary sm:text-4xl">100K+</p>
            <p class="mt-2 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Monthly In-Play Events</p>
          </div>
          <div class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800 text-center">
            <p class="text-3xl font-extrabold text-emerald-600 sm:text-4xl dark:text-emerald-400">200+</p>
            <p class="mt-2 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Sports & Esports Covered</p>
          </div>
          <div class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800 text-center">
            <p class="text-3xl font-extrabold text-amber-500 sm:text-4xl">99.99%</p>
            <p class="mt-2 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">High Availability SLA</p>
          </div>
          <div class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800 text-center">
            <p class="text-3xl font-extrabold text-violet-600 sm:text-4xl dark:text-violet-400">&lt; 85ms</p>
            <p class="mt-2 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Average Odds Latency</p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- 5. What Our Partners Say (Reviews Slider from Concept) -->
    <section class="py-16 sm:py-24 bg-white dark:bg-gray-900">
      <UContainer>
        <div class="mx-auto max-w-3xl text-center">
          <UBadge label="Testimonials" color="primary" variant="subtle" size="md" />
          <h2 class="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl dark:text-white">
            What Our Partners Say
          </h2>
          <p class="mt-3 text-base text-gray-600 dark:text-gray-300">
            Hear back from executive teams operating sportsbooks on our platform.
          </p>
        </div>

        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <div
            v-for="review in partnerReviews"
            :key="review.author"
            class="rounded-3xl border border-gray-200 bg-gray-50/50 p-6 flex flex-col justify-between dark:border-gray-800 dark:bg-gray-950"
          >
            <p class="text-sm leading-6 text-gray-700 italic dark:text-gray-300">
              "{{ review.quote }}"
            </p>
            <div class="mt-6 border-t border-gray-200 pt-4 dark:border-gray-800">
              <p class="font-bold text-gray-900 dark:text-white text-sm">{{ review.author }}</p>
              <p class="text-xs text-gray-500 dark:text-gray-400">{{ review.title }}</p>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- 6. Final CTA -->
    <section class="relative isolate overflow-hidden bg-brand-600 py-16 sm:py-24 text-white dark:bg-brand-950">
      <div class="pointer-events-none absolute inset-0 -z-10 bg-linear-to-br from-brand-700 via-brand-600 to-indigo-800 dark:from-gray-950 dark:via-brand-950 dark:to-gray-900" />
      <UContainer>
        <div class="mx-auto max-w-3xl text-center">
          <UBadge label="Partner with Us" color="neutral" variant="subtle" size="md" class="bg-white/20 text-white" />
          <h2 class="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl text-white">
            Ready to Scale Your Sportsbook Brand?
          </h2>
          <p class="mt-4 text-lg text-brand-100 dark:text-gray-300">
            Join a network of thriving operators. We provide the technology, feed liquidity, and operational support to scale your business.
          </p>
          <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
            <UButton
              :to="enquiryLink"
              label="Join Our Operator Network"
              color="neutral"
              variant="solid"
              size="xl"
              trailing-icon="i-lucide-arrow-right"
              class="bg-white text-gray-950 hover:bg-gray-100 shadow-xl"
            />
            <UButton
              to="mailto:hello@sbtcapital.ng"
              label="Contact hello@sbtcapital.ng"
              color="neutral"
              variant="outline"
              size="xl"
              leading-icon="i-lucide-mail"
              class="border-white/30 text-white hover:bg-white/10"
            />
          </div>
        </div>
      </UContainer>
    </section>
  </UPage>
</template>

