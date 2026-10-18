<script setup lang="ts">
const enquiryLink = computed(() => {
  const query = new URLSearchParams({
    subject: 'African Retail & Agent Network Partnership',
    body: 'Hello SBT Capital Retail Team,\n\nI am looking to explore retail distribution and agent network operations in Africa.\n\nOrganisation / Brand:\nTarget Territory(ies) (Nigeria / Ghana / Kenya / Rwanda / Uganda / Tanzania / Sierra Leone / Benin Republic):\nCurrent Retail Footprint (New Operation / Existing Shops / Expanding Network):\nPreferred Payment Gateways (OPay / Paystack / M-Pesa / Mobile Money / Flutterwave):\nEstimated Terminals / Agent Scale:\n\nPlease connect me with your retail operations directors.\n'
  })

  return `mailto:hello@sbtcapital.ng?${query.toString()}`
})

// Active African Market Selector
const activeMarket = ref<string>('nigeria')

const africanMarkets = [
  {
    id: 'nigeria',
    name: 'Nigeria',
    flag: '🇳🇬',
    hubs: 'Lagos, Ibadan, Kano, Abuja, Port Harcourt, Aba',
    regulator: 'NLRC & State Gaming Boards (e.g. Ogun State)',
    summary: 'The largest and most competitive retail betting market in Africa, powered by dense street agent networks and neighbourhood betting shop franchises.',
    agencyHighlights: [
      'High-velocity street agents with handheld Android POS terminals',
      'Super-agent regional distribution with multi-tier commissions',
      'Instant thermal ticket generation and cash payout validation'
    ],
    gateways: ['OPay (Agent Cash-In & POS)', 'Paystack', 'Monnify', 'PalmPay', 'Direct NIP Bank Transfer & USSD']
  },
  {
    id: 'ghana',
    name: 'Ghana',
    flag: '🇬🇭',
    hubs: 'Accra, Kumasi, Takoradi, Tamale',
    regulator: 'Ghana Gaming Commission (GGC)',
    summary: 'A mature, highly enthusiastic sports betting landscape where mobile money drives both online deposits and retail counter bet placement.',
    agencyHighlights: [
      'Shop franchisee models with dedicated TV displays for virtuals',
      'High penetration of automated Mobile Money counter payouts',
      'Rapid adoption of fast-round virtual draw games (Keno & Lucky 6)'
    ],
    gateways: ['MTN Mobile Money (MoMo)', 'Vodafone Cash (Telecel)', 'AirtelTigo Money', 'Paystack Ghana']
  },
  {
    id: 'kenya',
    name: 'Kenya',
    flag: '🇰🇪',
    hubs: 'Nairobi, Mombasa, Kisumu, Eldoret',
    regulator: 'Betting Control and Licensing Board (BCLB)',
    summary: 'The East African sports betting epicenter, famous for instantaneous mobile payments and tech-savvy punters playing virtuals and football fixtures.',
    agencyHighlights: [
      'Direct integration with local MPESA agency counters',
      'Live in-play betting terminals with real-time odds tracking',
      'High player loyalty driven by instant mobile winnings withdrawal'
    ],
    gateways: ['Safaricom M-Pesa (STK Push & B2C)', 'Airtel Money Kenya', 'Pesapal']
  },
  {
    id: 'rwanda',
    name: 'Rwanda',
    flag: '🇷🇼',
    hubs: 'Kigali, Huye, Rubavu, Musanze',
    regulator: 'Ministry of Trade and Industry (MINICOM)',
    summary: 'A well-organized, rapidly modernizing market with clear regulatory frameworks and strong smartphone & mobile money adoption in retail centers.',
    agencyHighlights: [
      'Clean, branded retail gaming centers in key urban districts',
      'Cashless-ready counters utilizing instant MTN MoMo push',
      'Reliable agent commissions tracked automatically in back office'
    ],
    gateways: ['MTN MoMo Rwanda', 'Airtel Money Rwanda']
  },
  {
    id: 'uganda',
    name: 'Uganda',
    flag: '🇺🇬',
    hubs: 'Kampala, Entebbe, Jinja, Gulu, Mbarara',
    regulator: 'National Lotteries and Gaming Regulatory Board (NLGRB)',
    summary: 'A high-turnover sports and virtual betting market with extensive shop networks across urban centers and regional trading towns.',
    agencyHighlights: [
      'Dense community retail shops with multi-screen virtual racing',
      'Master agent network distributing float to community sub-agents',
      'Seamless multi-currency cross-border accounting'
    ],
    gateways: ['MTN Mobile Money Uganda', 'Airtel Money Uganda', 'Flutterwave Uganda']
  },
  {
    id: 'tanzania',
    name: 'Tanzania',
    flag: '🇹🇿',
    hubs: 'Dar es Salaam, Arusha, Mwanza, Dodoma',
    regulator: 'Gaming Board of Tanzania (GBT)',
    summary: 'One of East Africa\'s fastest-growing betting territories with passionate football culture and strong mobile financial services integration.',
    agencyHighlights: [
      'High-traffic coastal and urban retail betting outlets',
      'Automated integration with local telco mobile money agents',
      'Popular demand for virtual leagues and live in-play wagering'
    ],
    gateways: ['M-Pesa Tanzania (Vodacom)', 'Tigo Pesa', 'Airtel Money', 'Halopesa']
  },
  {
    id: 'sierraleone',
    name: 'Sierra Leone',
    flag: '🇸🇱',
    hubs: 'Freetown, Bo, Kenema, Makeni',
    regulator: 'National Revenue Authority & Lotteries Commission',
    summary: 'A passionate betting market with massive retail appetite for daily football accumulator slips and fast draw lotteries.',
    agencyHighlights: [
      'Extensive retail kiosk and street agent network',
      'Low-bandwidth offline-resilient POS terminals',
      'Daily physical cash reconciliation and agent float support'
    ],
    gateways: ['Orange Money Sierra Leone', 'Africell Money', 'Cash-in-Shop Desks']
  },
  {
    id: 'benin',
    name: 'Benin Republic',
    flag: '🇧🇯',
    hubs: 'Cotonou, Porto-Novo, Parakou, Abomey',
    regulator: 'Loterie Nationale du Bénin (LNB)',
    summary: 'A key Francophone West African gateway with rapid adoption of sports betting agencies and mobile money transactions.',
    agencyHighlights: [
      'Francophone localized interfaces and French odds terminology',
      'Cross-border regional agent coordination with Nigerian corridor',
      'High-frequency virtual sports and draw games at neighborhood counters'
    ],
    gateways: ['MTN MoMo Bénin', 'Moov Money Bénin', 'Flutterwave']
  }
]

// Current selected market object
const currentMarket = computed(() => {
  return africanMarkets.find(m => m.id === activeMarket.value) || africanMarkets[0]!
})

// Agency System Core Skills
const agencySkills = [
  {
    icon: 'i-lucide-network',
    title: 'Multi-Tier Agency Hierarchy',
    description: 'We structure and manage the entire chain: Master Agents, Super Agents, Shop Owners, Counter Tellers, and Street Mobile Agents—with automated real-time commission splits and risk controls.'
  },
  {
    icon: 'i-lucide-wallet-cards',
    title: 'Agent Float & Digital Wallets',
    description: 'Automated credit lines, instant mobile cash-in top-ups, daily end-of-day float balancing, and pin-protected winning ticket validation to prevent cashier theft.'
  },
  {
    icon: 'i-lucide-printer',
    title: 'Offline-Resilient POS & Hardware',
    description: 'Handheld Android POS terminals and PC cashier stations with 2-second thermal ticket printing, QR code verification, and offline queuing when mobile connectivity dips.'
  },
  {
    icon: 'i-lucide-shield-check',
    title: 'Cash Logistics & Auditing',
    description: 'Battle-tested protocols for cash-in-transit, shop auditing, counterfeit prevention, float reconciliation, and automated dispute resolution across retail chains.'
  },
  {
    icon: 'i-lucide-tv',
    title: 'Multi-Screen Virtual Broadcasting',
    description: 'Turn retail spaces into gaming destinations with synced TV feeds showing Elbet virtual football, Vermantia racing, NSoft Lucky Six, and live BetGames.TV lottery draws.'
  },
  {
    icon: 'i-lucide-chart-no-axes-combined',
    title: 'Granular Shop & Agent Analytics',
    description: 'Real-time back-office reporting breaking down GGR, turnover, payout ratios, ticket frequency, and agent productivity by territory, city, shop, and teller.'
  }
]

// Payment Partners Grid
const paymentPartners = [
  {
    name: 'OPay',
    logo: 'OPAY',
    region: 'Nigeria',
    type: 'Agent POS & Digital Banking',
    description: 'Nigeria\'s largest agency banking network. Powers instant retail counter deposits, cash-in/cash-out, and handheld smart POS terminals.'
  },
  {
    name: 'Paystack',
    logo: 'PAYSTACK',
    region: 'Pan-African (NG, GH, KE, ZA)',
    type: 'Cards, Virtual Accounts & Transfers',
    description: 'Stripe company powering automated bank transfers, instant virtual account generation, and card transactions across major African markets.'
  },
  {
    name: 'Safaricom M-Pesa',
    logo: 'M-PESA',
    region: 'Kenya & Tanzania',
    type: 'Mobile Money Dominance',
    description: 'The standard for East African transactions. Direct STK push on mobile and B2C instant winnings withdrawal straight to punters\' mobile wallets.'
  },
  {
    name: 'Flutterwave',
    logo: 'FLUTTERWAVE',
    region: 'Pan-African (15+ Countries)',
    type: 'Cross-Border Payment Rails',
    description: 'Multi-currency orchestrator supporting local bank accounts, Mobile Money (MTN, Vodafone, Airtel), and international settlement.'
  },
  {
    name: 'MTN Mobile Money',
    logo: 'MOMO',
    region: 'Ghana, Uganda, Rwanda, Benin',
    type: 'Telco Mobile Money',
    description: 'The ubiquitous mobile money channel across West and Central Africa, enabling instant player top-ups without requiring a commercial bank account.'
  },
  {
    name: 'Airtel Money',
    logo: 'AIRTEL',
    region: 'Kenya, Uganda, Tanzania, Rwanda',
    type: 'Telco Mobile Money',
    description: 'High-penetration mobile wallet across East Africa providing reliable instant payment callbacks and automated merchant reconciliation.'
  }
]

useSeoMeta({
  title: 'Pan-African Retail & Agent Networks | SBT Capital',
  description: 'Deep in-house retail betting and agency expertise across Nigeria, Ghana, Kenya, Rwanda, Uganda, Tanzania, Sierra Leone, and Benin. Integrated with OPay, Paystack, and M-Pesa.',
  ogTitle: 'Pan-African Retail Betting & Agency Networks | SBT Capital',
  ogDescription: 'Established retail distribution, agency hierarchies, and local payment gateways across 8 African markets.'
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
            <span>In-House Pan-African Retail Strength</span>
            <span class="text-gray-300 dark:text-gray-700">•</span>
            <span class="text-gray-600 dark:text-gray-400">8 African Territories</span>
          </div>

          <h1 class="mt-6 text-4xl font-extrabold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl dark:text-white">
            Pan-African Retail
            <span class="block bg-linear-to-r from-brand-600 via-brand-500 to-emerald-600 bg-clip-text text-transparent dark:from-brand-400 dark:via-brand-300 dark:to-emerald-400">
              Distribution & Agency Networks.
            </span>
          </h1>

          <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            While digital betting continues to grow, <strong>retail remains the heartbeat and cash engine of African sports betting</strong>.
            SBT Capital brings established ground networks across <strong>Nigeria, Ghana, Kenya, Rwanda, Uganda, Tanzania, Sierra Leone, and Benin Republic</strong>.
            We understand the agency system intimately—from super-agent float management and teller thermal slip printing to native integrations with <strong>OPay, Paystack, M-Pesa, and Mobile Money</strong>.
          </p>

          <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
            <UButton
              :to="enquiryLink"
              label="Discuss Retail & Agency Expansion"
              color="primary"
              size="xl"
              trailing-icon="i-lucide-arrow-right"
              class="shadow-lg shadow-brand-500/20"
            />
            <UButton
              to="#territories"
              label="Explore African Markets"
              color="neutral"
              variant="outline"
              size="xl"
              leading-icon="i-lucide-globe"
            />
          </div>
        </div>
      </UContainer>
    </section>

    <!-- 2. Interactive African Markets Network Explorer -->
    <section id="territories" class="py-16 sm:py-24 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <UContainer>
        <div class="mx-auto max-w-3xl text-center">
          <UBadge label="Established Footprint" color="primary" variant="subtle" size="md" />
          <h2 class="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl dark:text-white">
            Our Ground Networks Across Africa
          </h2>
          <p class="mt-3 text-base text-gray-600 dark:text-gray-300">
            Click any country to explore our on-the-ground agent distribution, regional hubs, regulatory landscape, and integrated payment rails.
          </p>
        </div>

        <!-- Country Selector Grid -->
        <div class="mt-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
          <button
            v-for="market in africanMarkets"
            :key="market.id"
            type="button"
            class="flex flex-col items-center justify-center rounded-2xl p-3 text-center transition-all border"
            :class="activeMarket === market.id ? 'border-primary bg-primary/5 text-primary shadow-sm dark:bg-primary/10' : 'border-gray-200 bg-gray-50 hover:bg-white dark:border-gray-800 dark:bg-gray-950 text-gray-700 dark:text-gray-300'"
            @click="activeMarket = market.id"
          >
            <span class="text-3xl">{{ market.flag }}</span>
            <span class="mt-2 text-xs font-bold">{{ market.name }}</span>
          </button>
        </div>

        <!-- Selected Territory Showcase Card -->
        <div class="mx-auto mt-8 max-w-4xl">
          <div class="rounded-3xl border border-gray-200 bg-gray-50/70 p-6 shadow-xl dark:border-gray-800 dark:bg-gray-950 sm:p-8">
            <div class="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 pb-5 dark:border-gray-800">
              <div class="flex items-center gap-3">
                <span class="text-4xl">{{ currentMarket.flag }}</span>
                <div>
                  <h3 class="text-2xl font-extrabold text-gray-950 dark:text-white">
                    {{ currentMarket.name }} Retail Market
                  </h3>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    Regulator: {{ currentMarket.regulator }}
                  </p>
                </div>
              </div>
              <UBadge label="Active SBT Network" color="primary" variant="subtle" size="lg" />
            </div>

            <p class="mt-5 text-sm leading-6 text-gray-700 dark:text-gray-300">
              {{ currentMarket.summary }}
            </p>

            <div class="mt-6 grid gap-6 md:grid-cols-2">
              <!-- Regional Hubs & Operational Skill -->
              <div class="rounded-2xl bg-white p-5 ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800">
                <p class="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Key Urban & Regional Hubs</p>
                <p class="mt-1 font-semibold text-gray-900 dark:text-white text-sm">{{ currentMarket.hubs }}</p>

                <p class="mt-4 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Agency Structure Highlights</p>
                <ul class="mt-2 space-y-2 text-xs text-gray-700 dark:text-gray-300">
                  <li v-for="point in currentMarket.agencyHighlights" :key="point" class="flex items-start gap-2">
                    <UIcon name="i-lucide-check-circle-2" class="size-4 shrink-0 text-emerald-500 mt-0.5" />
                    <span>{{ point }}</span>
                  </li>
                </ul>
              </div>

              <!-- Local Payment Rails -->
              <div class="rounded-2xl bg-white p-5 ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800">
                <p class="text-xs font-bold uppercase tracking-wider text-primary">Integrated Local Payment Gateways</p>
                <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  Direct connections to dominant mobile money, banking, and cash-in channels:
                </p>
                <div class="mt-3 flex flex-wrap gap-2">
                  <span
                    v-for="gw in currentMarket.gateways"
                    :key="gw"
                    class="rounded-lg bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-800 ring-1 ring-brand-200 dark:bg-brand-950 dark:text-brand-300 dark:ring-brand-900"
                  >
                    {{ gw }}
                  </span>
                </div>
              </div>
            </div>

            <div class="mt-6 border-t border-gray-200 pt-5 dark:border-gray-800 flex justify-end">
              <UButton
                :to="enquiryLink"
                :label="`Launch in ${currentMarket.name}`"
                color="primary"
                size="md"
                trailing-icon="i-lucide-arrow-right"
              />
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- 3. The Core In-House Skill: Mastery of the Agency System -->
    <section class="py-16 sm:py-24 bg-gray-50 dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
      <UContainer>
        <div class="mx-auto max-w-3xl text-center">
          <UBadge label="Proprietary In-House Expertise" color="primary" variant="subtle" size="md" />
          <h2 class="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl dark:text-white">
            We Master the African Agency System
          </h2>
          <p class="mt-3 text-base text-gray-600 dark:text-gray-300">
            Running retail in Africa requires more than software; it requires operational knowledge of agent psychology, float reconciliation, and offline resilience.
          </p>
        </div>

        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="skill in agencySkills"
            :key="skill.title"
            class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-md dark:bg-gray-900 dark:ring-gray-800"
          >
            <span class="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <UIcon :name="skill.icon" class="size-5" />
            </span>
            <h3 class="mt-5 text-base font-bold text-gray-900 dark:text-white">
              {{ skill.title }}
            </h3>
            <p class="mt-2 text-xs leading-6 text-gray-600 dark:text-gray-400">
              {{ skill.description }}
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- 4. Local Payment Gateways Showcase (OPay, Paystack, M-Pesa, Flutterwave, MoMo) -->
    <section class="py-16 sm:py-24 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <UContainer>
        <div class="mx-auto max-w-3xl text-center">
          <UBadge label="Integrated Cashier Rails" color="primary" variant="subtle" size="md" />
          <h2 class="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl dark:text-white">
            Pre-Integrated African Payment Gateways
          </h2>
          <p class="mt-3 text-base text-gray-600 dark:text-gray-300">
            Connect to the exact payment gateways punters and agents use every day across the continent.
          </p>
        </div>

        <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="gateway in paymentPartners"
            :key="gateway.name"
            class="rounded-2xl border border-gray-200 bg-gray-50/50 p-6 dark:border-gray-800 dark:bg-gray-950"
          >
            <div class="flex items-center justify-between border-b border-gray-200/80 pb-3 dark:border-gray-800">
              <span class="font-mono text-xs font-black tracking-wider text-primary">
                {{ gateway.logo }}
              </span>
              <span class="rounded bg-gray-200 px-2 py-0.5 text-[0.65rem] font-bold text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                {{ gateway.region }}
              </span>
            </div>
            <h3 class="mt-4 text-base font-bold text-gray-900 dark:text-white">
              {{ gateway.name }}
            </h3>
            <p class="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              {{ gateway.type }}
            </p>
            <p class="mt-2 text-xs leading-5 text-gray-600 dark:text-gray-400">
              {{ gateway.description }}
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- 5. Network Metrics & Statistics -->
    <section class="py-16 sm:py-24 bg-gray-50 dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
      <UContainer>
        <div class="grid grid-cols-2 gap-4 lg:grid-cols-4 text-center">
          <div class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800">
            <p class="text-3xl font-extrabold text-primary sm:text-4xl">8</p>
            <p class="mt-2 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">African Markets Covered</p>
          </div>
          <div class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800">
            <p class="text-3xl font-extrabold text-emerald-600 sm:text-4xl dark:text-emerald-400">5,000+</p>
            <p class="mt-2 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Active POS & Terminal Outlets</p>
          </div>
          <div class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800">
            <p class="text-3xl font-extrabold text-brand-coral sm:text-4xl">&lt; 2s</p>
            <p class="mt-2 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Thermal Ticket Print Speed</p>
          </div>
          <div class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800">
            <p class="text-3xl font-extrabold text-violet-600 sm:text-4xl dark:text-violet-400">99.9%</p>
            <p class="mt-2 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Offline-Resilient Sync</p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- 6. Final CTA -->
    <section class="relative isolate overflow-hidden bg-brand-600 py-16 sm:py-24 text-white dark:bg-brand-950">
      <div class="pointer-events-none absolute inset-0 -z-10 bg-linear-to-br from-brand-700 via-brand-600 to-indigo-800 dark:from-gray-950 dark:via-brand-950 dark:to-gray-900" />
      <UContainer>
        <div class="mx-auto max-w-3xl text-center">
          <UBadge label="Expand Across Africa" color="neutral" variant="subtle" size="md" class="bg-white/20 text-white" />
          <h2 class="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl text-white">
            Expand Your Retail & Agent Footprint
          </h2>
          <p class="mt-4 text-lg text-brand-100 dark:text-gray-300">
            Leverage our in-house ground expertise, terminal software, and payment gateway partnerships to launch and scale profitable agency operations across Africa.
          </p>
          <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
            <UButton
              :to="enquiryLink"
              label="Talk to Our African Retail Team"
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

