<script setup lang="ts">
const enquiryLink = computed(() => {
  const query = new URLSearchParams({
    subject: 'Gaming & Data Providers Aggregation Enquiry',
    body: 'Hello SBT Capital Partnerships Team,\n\nI would like to explore integrating game content or sports data feeds.\n\nOrganisation / Brand:\nInterested Providers (Elbet / Vermantia / NSoft / BetGames.TV / Sportradar / BetGenius / Stats Perform):\nGame Categories (Virtual Sports / Numbers & Keno / Live TV / Fast Games / Odds Feeds):\nTarget Markets:\nOperation Channels (Online / Retail POS / Both):\n\nPlease share your game catalogue and commercial terms.\n'
  })

  return `mailto:hello@sbtcapital.ng?${query.toString()}`
})

// Category Filter State
const selectedCategory = ref<string>('all')

const categories = [
  { id: 'all', label: 'All Providers' },
  { id: 'virtual-sports', label: 'Virtual Sports' },
  { id: 'numbers-keno', label: 'Numbers & Keno' },
  { id: 'live-tv', label: 'Live Draw & TV Games' },
  { id: 'data-feeds', label: 'Sports Data & Odds Feeds' },
  { id: 'table-casual', label: 'Roulette & Table' }
]

// Partner Providers Data
const partners = [
  {
    id: 'elbet',
    name: 'Elbet',
    categoryIds: ['virtual-sports', 'numbers-keno', 'table-casual'],
    categoryLabels: ['Virtual Sports', 'Numbers & Keno', 'Roulette & Table'],
    website: 'https://elbet.com',
    logoText: 'ELBET',
    badgeColor: 'primary',
    cryptoFriendly: true,
    retailReady: true,
    tagline: 'High-frequency virtual sports and draw games for retail & web',
    description: 'Pioneer in retail and online virtual games across Europe and Africa. Features ultra-popular fast-paced games designed for rapid sessions, low data consumption, and proven player retention.',
    flagshipGames: ['Virtual Football League', 'Lucky Greek (Keno)', 'Greyhounds & Horses', 'Bingo Roulette', 'Penalty Shootout'],
    highlights: ['Retail terminal ready', 'TV screen broadcast channels', 'Low-bandwidth African mode']
  },
  {
    id: 'betgames',
    name: 'BetGames.TV',
    categoryIds: ['live-tv', 'numbers-keno', 'table-casual'],
    categoryLabels: ['Live Draw & TV Games', 'Numbers & Keno', 'Table'],
    website: 'https://betgames.tv',
    logoText: 'BETGAMES',
    badgeColor: 'emerald',
    cryptoFriendly: true,
    retailReady: true,
    tagline: 'Broadcast-quality 24/7 non-stop live lottery and card games',
    description: 'World-renowned live entertainment provider combining traditional lottery formats and card games with low-stakes micro-betting. Live video feeds streamed directly to mobile, web, and shop displays.',
    flagshipGames: ['Wheel of Fortune', 'Lucky 7 (7/42)', 'Lucky 5 (5/36)', 'Lucky 6', 'Bet on Poker', 'War of Bets'],
    highlights: ['24/7 live dealers', 'High-speed 1-minute round frequency', 'Multi-currency & crypto support']
  },
  {
    id: 'nsoft',
    name: 'NSoft',
    categoryIds: ['numbers-keno', 'virtual-sports', 'table-casual'],
    categoryLabels: ['Numbers & Keno', 'Virtual Sports', 'Draw Games'],
    website: 'https://nsoft.com',
    logoText: 'NSOFT',
    badgeColor: 'amber',
    cryptoFriendly: true,
    retailReady: true,
    tagline: 'The iconic creator of Lucky Six and high-volume retail wagering',
    description: 'Industry-standard provider of retail betting software and engaging number draw games. Powering thousands of betting shops across Eastern Europe, Africa, and Latin America with extreme reliability.',
    flagshipGames: ['Lucky Six', 'Next Six', 'Roulette', 'Virtual Greyhound Races', 'Virtual Motorcycle Speedway'],
    highlights: ['Iconic retail brand', 'Barcode bet slip scanning', 'Multi-screen terminal integration']
  },
  {
    id: 'vermantia',
    name: 'Vermantia',
    categoryIds: ['virtual-sports', 'live-tv'],
    categoryLabels: ['Virtual Sports', 'Live Racing', 'HD Streams'],
    website: 'https://vermantia.com',
    logoText: 'VERMANTIA',
    badgeColor: 'violet',
    cryptoFriendly: true,
    retailReady: true,
    tagline: 'Omni-channel virtual sports, greyhound & horse racing delivery',
    description: 'Specializes in premium virtual sports broadcasting, live racing channels, and complete retail display management. Delivers hyper-realistic 3D graphics and synchronized audio for physical venues and mobile bettors.',
    flagshipGames: ['Custom Football Leagues', 'Trotting & Flat Horse Races', 'Greyhounds', 'Table Tennis Virtuals'],
    highlights: ['Satellite & low-latency IP broadcast', 'Localised audio commentary', 'Omni-channel distribution']
  },
  {
    id: 'sportradar',
    name: 'Sportradar',
    categoryIds: ['data-feeds'],
    categoryLabels: ['Sports Data Feeds', 'In-Play Odds', 'Risk Management'],
    website: 'https://sportradar.com',
    logoText: 'SPORTRADAR',
    badgeColor: 'primary',
    cryptoFriendly: true,
    retailReady: true,
    tagline: 'The world\'s leading sports data intelligence & Betradar feeds',
    description: 'Official data partner to UEFA, NBA, NHL, and FIFA. Delivers real-time odds, pre-match fixtures, match visualizers, and automated risk management across 900,000+ matches annually.',
    flagshipGames: ['Betradar In-Play Odds', 'Live Match Tracker LMT', 'Simulated Reality League (SRL)', 'MTS Risk Management'],
    highlights: ['900,000+ matches/yr', '350+ sports leagues', 'Official sports data rights']
  },
  {
    id: 'genius-sports',
    name: 'Genius Sports (BetGenius)',
    categoryIds: ['data-feeds'],
    categoryLabels: ['Sports Data Feeds', 'Bet Builder', 'Official Feeds'],
    website: 'https://geniussports.com',
    logoText: 'GENIUS SPORTS',
    badgeColor: 'emerald',
    cryptoFriendly: true,
    retailReady: true,
    tagline: 'Official Premier League, NFL, and FIBA sub-second data engine',
    description: 'Powering the world\'s most popular sportsbooks with official stadium-fed data. Features industry-leading Bet Builder technology, player props, and automated margin-optimized pricing.',
    flagshipGames: ['Premier League Fast-Data', 'NFL Live Feeds', 'Same Game Parlay (Bet Builder)', 'Automated Trading Engine'],
    highlights: ['Sub-second latency', 'Official NFL & EPL feeds', 'High-margin bet builders']
  },
  {
    id: 'stats-perform',
    name: 'Stats Perform (Opta)',
    categoryIds: ['data-feeds'],
    categoryLabels: ['Sports Data Feeds', 'Player Props', 'Opta AI'],
    website: 'https://statsperform.com',
    logoText: 'STATS PERFORM',
    badgeColor: 'rose',
    cryptoFriendly: true,
    retailReady: true,
    tagline: 'Opta-powered AI sports analytics, micro-markets & live audio/video',
    description: 'The global leader in sports AI data. Powers next-generation player prop betting, micro-markets (e.g. shots on target, tackles, passes), and deep analytical content that drives punter retention.',
    flagshipGames: ['Opta Player Stats Feeds', 'Micro-Market Pricing', 'RunningBall Fast Odds', 'Live Video Streaming'],
    highlights: ['Opta-certified stats', 'Deep player prop markets', 'Expected goals (xG) models']
  },
  {
    id: 'oddin',
    name: 'Oddin.gg',
    categoryIds: ['data-feeds'],
    categoryLabels: ['Sports Data Feeds', 'Esports Odds', 'Live Streams'],
    website: 'https://oddin.gg',
    logoText: 'ODDIN.GG',
    badgeColor: 'violet',
    cryptoFriendly: true,
    retailReady: true,
    tagline: 'Number-one esports betting odds feed with 24/7 in-play trading',
    description: 'The definitive B2B esports betting feed provider. Covering Counter-Strike 2, Dota 2, League of Legends, Valorant, and mobile esports with highest in-play uptime and official integrity partnerships.',
    flagshipGames: ['CS2 Live Odds', 'Dota 2 In-Play', 'League of Legends Feeds', 'Esports Bet Builder'],
    highlights: ['90%+ in-play uptime', '24/7 continuous events', 'Esports integrity network']
  }
]

// Filtered Partners
const filteredPartners = computed(() => {
  if (selectedCategory.value === 'all') return partners
  return partners.filter(p => p.categoryIds.includes(selectedCategory.value))
})

// Testimonials Data
const testimonials = [
  {
    quote: 'SBT Capital\'s integration of Elbet and BetGames.TV transformed our retail gaming shops in Nigeria. Players love the fast-round Keno and Wheel of Fortune sessions between live weekend matches.',
    author: 'Adewale Ojo',
    role: 'Head of Operations, Leading Nigerian Retail Network'
  },
  {
    quote: 'Connecting Sportradar and Genius Sports through SBT Capital\'s unified pipeline reduced our latency by 60% and gave our bookmakers automated risk tools to manage big match liabilities.',
    author: 'Kofi Mensah',
    role: 'Director of Trading, West African Sportsbook Brand'
  },
  {
    quote: 'The ability to offer NSoft\'s Lucky Six alongside official Premier League live betting under one seamless wallet has driven our highest player retention numbers to date.',
    author: 'Mamadou Diallo',
    role: 'COO, Multi-Jurisdiction Gaming Operator'
  }
]

useSeoMeta({
  title: 'Content & Data Partners | Elbet, Vermantia, NSoft, Sportradar | SBT Capital',
  description: 'Explore our authorised gaming and sports data partners: Elbet, Vermantia, NSoft, BetGames.TV, Sportradar, BetGenius, and Stats Perform.',
  ogTitle: 'Gaming & Data Providers | SBT Capital',
  ogDescription: 'Pre-aggregated virtual games, live draws, and tier-1 sports data feeds.'
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
            <span>Authorised Content & Data Aggregator</span>
            <span class="text-gray-300 dark:text-gray-700">•</span>
            <span class="text-gray-600 dark:text-gray-400">One Unified API</span>
          </div>

          <h1 class="mt-6 text-4xl font-extrabold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl dark:text-white">
            Gaming & Sports Data
            <span class="block bg-linear-to-r from-brand-600 via-brand-500 to-emerald-600 bg-clip-text text-transparent dark:from-brand-400 dark:via-brand-300 dark:to-emerald-400">
              Provider Ecosystem.
            </span>
          </h1>

          <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            SBT Capital partners with world-renowned game studios and official sports data providers as an authorized aggregator.
            Offer the most captivating virtual sports, live lottery draws, and betting odds from <strong>Elbet, Vermantia, NSoft, and BetGames.TV</strong>, alongside official stadium data feeds from <strong>Sportradar, BetGenius, and Stats Perform</strong>.
          </p>

          <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
            <UButton
              :to="enquiryLink"
              label="Request Content Catalogue"
              color="primary"
              size="xl"
              trailing-icon="i-lucide-arrow-right"
              class="shadow-lg shadow-brand-500/20"
            />
            <UButton
              to="#partners-filter"
              label="Explore Provider Portfolio"
              color="neutral"
              variant="outline"
              size="xl"
              leading-icon="i-lucide-grid"
            />
          </div>
        </div>
      </UContainer>
    </section>

    <!-- 2. Filterable Partners Section -->
    <section id="partners-filter" class="py-16 sm:py-24 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <UContainer>
        <!-- Category Filter Pills -->
        <div class="flex flex-col items-center justify-between gap-4 border-b border-gray-200 pb-6 sm:flex-row dark:border-gray-800">
          <div class="flex flex-wrap items-center gap-2">
            <button
              v-for="cat in categories"
              :key="cat.id"
              type="button"
              class="rounded-xl px-4 py-2 text-xs font-bold transition-all sm:text-sm"
              :class="selectedCategory === cat.id ? 'bg-primary text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'"
              @click="selectedCategory = cat.id"
            >
              {{ cat.label }}
            </button>
          </div>

          <div class="text-xs font-semibold text-gray-500 dark:text-gray-400">
            Showing <strong class="text-gray-900 dark:text-white">{{ filteredPartners.length }}</strong> Featured Providers
          </div>
        </div>

        <!-- Provider Cards Grid -->
        <div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <article
            v-for="partner in filteredPartners"
            :key="partner.id"
            class="group flex flex-col justify-between rounded-3xl border border-gray-200 bg-gray-50/50 p-6 transition-all hover:bg-white hover:shadow-xl dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-900"
          >
            <div>
              <!-- Header with logo badge and features -->
              <div class="flex items-center justify-between border-b border-gray-200/80 pb-4 dark:border-gray-800">
                <div class="rounded-xl bg-gray-950 px-3 py-1.5 font-mono text-xs font-black tracking-wider text-white shadow-xs">
                  {{ partner.logoText }}
                </div>
                <div class="flex items-center gap-1.5">
                  <span
                    v-if="partner.cryptoFriendly"
                    class="flex size-7 items-center justify-center rounded-lg bg-brand-sky/10 text-brand-link"
                    title="Crypto Friendly"
                  >
                    <UIcon name="i-lucide-coins" class="size-4" />
                  </span>
                  <span
                    v-if="partner.retailReady"
                    class="flex size-7 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                    title="Retail Terminal Ready"
                  >
                    <UIcon name="i-lucide-store" class="size-4" />
                  </span>
                </div>
              </div>

              <!-- Content -->
              <h3 class="mt-5 text-xl font-extrabold text-gray-950 dark:text-white">
                {{ partner.name }}
              </h3>
              <p class="mt-1 text-xs font-semibold text-primary">
                {{ partner.tagline }}
              </p>
              <p class="mt-3 text-xs leading-5 text-gray-600 dark:text-gray-400">
                {{ partner.description }}
              </p>

              <!-- Category Pills -->
              <div class="mt-4 flex flex-wrap gap-1.5">
                <span
                  v-for="catLabel in partner.categoryLabels"
                  :key="catLabel"
                  class="rounded-md bg-white px-2 py-0.5 text-[0.65rem] font-bold text-gray-700 ring-1 ring-gray-200 dark:bg-gray-900 dark:text-gray-300 dark:ring-gray-800"
                >
                  {{ catLabel }}
                </span>
              </div>

              <!-- Flagship Games -->
              <div class="mt-5 rounded-xl bg-white p-3 ring-1 ring-gray-200/80 dark:bg-gray-900 dark:ring-gray-800">
                <p class="text-[0.65rem] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Popular Titles / Feeds</p>
                <ul class="mt-1.5 space-y-1 text-xs text-gray-700 dark:text-gray-300">
                  <li v-for="game in partner.flagshipGames.slice(0, 3)" :key="game" class="flex items-center gap-1.5">
                    <span class="size-1 rounded-full bg-primary" />
                    <span>{{ game }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="mt-6 border-t border-gray-200/60 pt-4 dark:border-gray-800">
              <UButton
                :to="enquiryLink"
                label="Integrate Provider"
                color="neutral"
                variant="outline"
                size="sm"
                trailing-icon="i-lucide-arrow-up-right"
                class="w-full justify-center text-xs"
              />
            </div>
          </article>
        </div>
      </UContainer>
    </section>

    <!-- 3. Facts & Figures Grid (from Concept) -->
    <section class="py-16 sm:py-24 bg-gray-50 dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
      <UContainer>
        <div class="grid items-center gap-12 lg:grid-cols-12">
          <div class="lg:col-span-5">
            <UBadge label="Proven Industry Track Record" color="primary" variant="subtle" size="md" />
            <h2 class="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl dark:text-white">
              Facts & Figures
            </h2>
            <p class="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
              High-speed performance, extreme stability during peak tournament periods, and optimal pricing make SBT Capital the partner of choice for gaming operators scaling across emerging and regulated markets.
            </p>
            <div class="mt-6">
              <UButton
                :to="enquiryLink"
                label="Partner with SBT Capital"
                color="primary"
                size="lg"
                trailing-icon="i-lucide-arrow-right"
              />
            </div>
          </div>

          <div class="lg:col-span-7">
            <div class="grid grid-cols-2 gap-4">
              <div class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800">
                <p class="text-3xl font-extrabold text-primary sm:text-4xl">15+ Years</p>
                <p class="mt-2 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Combined iGaming Experience</p>
              </div>

              <div class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800">
                <p class="text-3xl font-extrabold text-emerald-600 sm:text-4xl dark:text-emerald-400">40,000+</p>
                <p class="mt-2 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Casino & Virtual Titles Available</p>
              </div>

              <div class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800">
                <p class="text-3xl font-extrabold text-brand-coral sm:text-4xl">300+</p>
                <p class="mt-2 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Global Sports Leagues Covered</p>
              </div>

              <div class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800">
                <p class="text-3xl font-extrabold text-violet-600 sm:text-4xl dark:text-violet-400">#1</p>
                <p class="mt-2 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Pan-African Retail Aggregator</p>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- 4. What Our Partners Say (Testimonials from Concept) -->
    <section class="py-16 sm:py-24 bg-white dark:bg-gray-900">
      <UContainer>
        <div class="mx-auto max-w-3xl text-center">
          <UBadge label="Operator Endorsements" color="primary" variant="subtle" size="md" />
          <h2 class="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl dark:text-white">
            What Our Partners Say
          </h2>
          <p class="mt-3 text-base text-gray-600 dark:text-gray-300">
            Hear feedback from sportsbook and gaming leaders operating our partner integrations.
          </p>
        </div>

        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <div
            v-for="t in testimonials"
            :key="t.author"
            class="rounded-3xl border border-gray-200 bg-gray-50/50 p-6 flex flex-col justify-between dark:border-gray-800 dark:bg-gray-950"
          >
            <p class="text-sm leading-6 text-gray-700 italic dark:text-gray-300">
              "{{ t.quote }}"
            </p>
            <div class="mt-6 border-t border-gray-200 pt-4 dark:border-gray-800">
              <p class="font-bold text-gray-900 dark:text-white text-sm">{{ t.author }}</p>
              <p class="text-xs text-gray-500 dark:text-gray-400">{{ t.role }}</p>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- 5. Final CTA -->
    <section class="relative isolate overflow-hidden bg-brand-600 py-16 sm:py-24 text-white dark:bg-brand-950">
      <div class="pointer-events-none absolute inset-0 -z-10 bg-linear-to-br from-brand-700 via-brand-600 to-indigo-800 dark:from-gray-950 dark:via-brand-950 dark:to-gray-900" />
      <UContainer>
        <div class="mx-auto max-w-3xl text-center">
          <UBadge label="One Contract, All Providers" color="neutral" variant="subtle" size="md" class="bg-white/20 text-white" />
          <h2 class="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl text-white">
            Ready to Connect Our Gaming Portfolio?
          </h2>
          <p class="mt-4 text-lg text-brand-100 dark:text-gray-300">
            Get instant access to Elbet, Vermantia, NSoft, BetGames.TV, and live odds from Sportradar and Genius Sports with a single commercial agreement.
          </p>
          <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
            <UButton
              :to="enquiryLink"
              label="Contact Content Partnerships"
              color="neutral"
              variant="solid"
              size="xl"
              trailing-icon="i-lucide-arrow-right"
              class="bg-white text-gray-950 hover:bg-gray-100 shadow-xl"
            />
            <UButton
              to="mailto:hello@sbtcapital.ng"
              label="Email hello@sbtcapital.ng"
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

