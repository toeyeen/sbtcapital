<script setup lang="ts">
const enquiryLink = computed(() => {
  const query = new URLSearchParams({
    subject: 'White-Label Sportsbook Launch Enquiry',
    body: 'Hello SBT Capital Team,\n\nI would like to discuss launching a white-label sportsbook.\n\nBrand / Organisation Name:\nTarget Market(s):\nPreferred Brand Colors:\nExpected Launch Timeline (e.g. 2-4 weeks):\nPayment Methods Needed (Fiat / Mobile Money / Crypto):\n\nPlease share the proposal and technical onboarding details.\n'
  })

  return `mailto:hello@sbtcapital.ng?${query.toString()}`
})

// Brand Customizer Interactive State
const brandName = ref('ApexBet')
const brandColorPresets = [
  { id: 'sapphire', name: 'Electric Sapphire', primary: '#1A74FF', hover: '#005CE6', accent: '#00C16A', text: '#FFFFFF' },
  { id: 'emerald', name: 'Sahara Emerald', primary: '#00C16A', hover: '#00A155', accent: '#F59E0B', text: '#FFFFFF' },
  { id: 'amber', name: 'Gold Arena', primary: '#F59E0B', hover: '#D97706', accent: '#10B981', text: '#000000' },
  { id: 'crimson', name: 'Velocity Crimson', primary: '#E11D48', hover: '#BE123C', accent: '#38BDF8', text: '#FFFFFF' },
  { id: 'violet', name: 'Volt Ultra', primary: '#8B5CF6', hover: '#7C3AED', accent: '#34D399', text: '#FFFFFF' }
]

const selectedPreset = ref(brandColorPresets[0]!)
const activeDevice = ref<'desktop' | 'mobile'>('desktop')
const selectedOdd = ref<'home' | 'draw' | 'away'>('home')
const betStake = ref(100)

// Simulated Live Odds Animation
const liveOdds = ref({
  home: 2.15,
  draw: 3.40,
  away: 3.85,
  fluctuating: false
})

let oddsInterval: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  oddsInterval = setInterval(() => {
    liveOdds.value.fluctuating = true
    const delta = (Math.random() - 0.48) * 0.1
    liveOdds.value.home = Number(Math.max(1.8, Math.min(2.4, liveOdds.value.home + delta)).toFixed(2))
    setTimeout(() => {
      liveOdds.value.fluctuating = false
    }, 700)
  }, 4500)
})

onBeforeUnmount(() => {
  if (oddsInterval) clearInterval(oddsInterval)
})

const currentBrandColor = computed(() => selectedPreset.value.primary)
const currentAccentColor = computed(() => selectedPreset.value.accent)

const potentialWin = computed(() => {
  const odd = selectedOdd.value === 'home' ? liveOdds.value.home : selectedOdd.value === 'draw' ? liveOdds.value.draw : liveOdds.value.away
  return (betStake.value * odd).toFixed(2)
})

// Comparison Data: Turnkey vs White Label vs Custom Platform
const activeComparisonTab = ref<'white-label' | 'turnkey' | 'custom'>('white-label')

const comparisonModels = [
  {
    id: 'white-label',
    title: 'White Label Sportsbook',
    badge: 'Fastest Launch',
    badgeColor: 'primary',
    tagline: 'We put your brand colors and logo. Zero tech headache.',
    description: 'The operator operates under an all-inclusive framework. SBT Capital manages the technical platform, odds feeds, cashier, hosting, risk management, and regulatory scaffolding. The operator customises brand identity (colors, logo, domain) and focuses on player acquisition and marketing.',
    turnaround: '2–4 Weeks (Fastest: 14 Days)',
    idealFor: 'Operators and entrepreneurs wanting speed-to-market, low CapEx, and fully managed operational infrastructure.'
  },
  {
    id: 'turnkey',
    title: 'Turnkey Sportsbook',
    badge: 'Operator-Licensed',
    badgeColor: 'neutral',
    tagline: 'Operator holds own licence, we power the engine.',
    description: 'In a Turnkey setup, the operator holds their own regulatory gambling licence in their target jurisdictions. SBT Capital provides the complete software platform, event feeds, PAM, and risk tools, while the operator retains full regulatory accountability and proprietary merchant accounts.',
    turnaround: '8–12 Weeks',
    idealFor: 'Established iGaming operators with proprietary licences seeking a high-performance sportsbook software platform.'
  },
  {
    id: 'custom',
    title: 'Custom Platform Development',
    badge: 'Bespoke Engineering',
    badgeColor: 'neutral',
    tagline: 'Engineered from scratch for unique ecosystems.',
    description: 'Custom bespoke platform development designed around unique partner ecosystems, bespoke retail hardware, government lottery networks, or specialized proprietary business workflows. Full modular architecture with dedicated API pipelines.',
    turnaround: '3–6+ Months',
    idealFor: 'Large retail networks, state lotteries, or enterprise groups requiring bespoke features and custom integrations.'
  }
]

const comparisonMatrix = [
  {
    feature: 'Time-to-Market',
    whiteLabel: '2–4 Weeks (As fast as 14 days)',
    turnkey: '2–3 Months',
    custom: '4–6+ Months'
  },
  {
    feature: 'Licensing & Regulatory Framework',
    whiteLabel: 'Provider-supported / Umbrella frameworks',
    turnkey: 'Operator\'s own local/offshore licence',
    custom: 'Operator\'s own bespoke licensing'
  },
  {
    feature: 'Branding & Customization Scope',
    whiteLabel: 'Brand colors, logo, domain & typography',
    turnkey: 'Modular layout, branded UI & custom CSS',
    custom: 'Fully custom UI/UX design & unique workflows'
  },
  {
    feature: 'Odds Feeds & Data Connections',
    whiteLabel: 'Pre-integrated (Sportradar, Genius, BetConstruct)',
    turnkey: 'Choice of integrated providers & bespoke feeds',
    custom: 'Custom feeds, multi-provider aggregation'
  },
  {
    feature: 'Cashier & Payment Gateway',
    whiteLabel: 'Turnkey African APMs, cards, mobile money & crypto',
    turnkey: 'Operator\'s merchant accounts + API connectors',
    custom: 'Custom payment orchestrator & bespoke settlement'
  },
  {
    feature: 'Hosting, Security & Upgrades',
    whiteLabel: '100% managed by SBT Capital (99.99% SLA)',
    turnkey: 'Managed cloud infrastructure with operator access',
    custom: 'Dedicated private cloud or on-prem deployment'
  },
  {
    feature: 'Starting Capital Requirement',
    whiteLabel: 'From $4,000 + profit share model',
    turnkey: 'Mid-range setup + commercial licence fees',
    custom: 'Higher CapEx based on engineering scope'
  }
]

// Package Features List
const packageFeatures = [
  {
    icon: 'i-lucide-radio-tower',
    title: 'Live Odds Feeds & Feed Aggregation',
    description: 'Pre-connected to tier-1 odds feeds including Sportradar, Genius Sports, and BetConstruct. Instant real-time odds across 200+ sports and 2,000+ betting markets.'
  },
  {
    icon: 'i-lucide-activity',
    title: 'In-Play & Pre-Match Live Engine',
    description: 'Over 100,000 live monthly matches. Sub-second bet acceptance, live match visualization, animated match trackers, and dynamic Cash-Out algorithm.'
  },
  {
    icon: 'i-lucide-palette',
    title: 'Rapid Brand Skinning & Custom Domain',
    description: 'We apply your brand colors, primary palette, logos, and custom domain name. Your players experience a cohesive, professional sportsbook that feels entirely yours.'
  },
  {
    icon: 'i-lucide-wallet-cards',
    title: 'Turnkey Multi-Currency Cashier',
    description: 'Pre-integrated local African APMs (Paystack, Flutterwave, Monnify, M-Pesa, USSD), debit cards, and cryptocurrency rails (USDT, BTC, ETH) with automated reconciliation.'
  },
  {
    icon: 'i-lucide-users',
    title: 'Player Account Management (PAM)',
    description: 'Complete back-office suite to manage player registration, multi-tier bonusing, deposit limits, KYC/AML verification, and real-time business intelligence.'
  },
  {
    icon: 'i-lucide-shield-check',
    title: 'Automated Risk Management & Trading',
    description: 'Built-in automated liability monitors, anti-fraud algorithms, abnormal bet detection, configurable profit margins, and automated market suspension.'
  },
  {
    icon: 'i-lucide-smartphone',
    title: 'Mobile-First Responsive Web App',
    description: 'Optimized for mobile browsers and low data bandwidth in emerging markets. Lightning-fast page loads, fluid swipe navigation, and PWA capability.'
  },
  {
    icon: 'i-lucide-server',
    title: 'Enterprise Hosting & 99.99% SLA',
    description: 'High-availability cloud hosting with DDoS mitigation, multi-region failover, protected data storage, and scheduled daily backups to handle peak tournament traffic.'
  },
  {
    icon: 'i-lucide-globe',
    title: 'Regional Localisation & Currencies',
    description: 'Supports regional languages, localized odds formats (Decimal, Fractional, American, Hong Kong), and regional currency formatting directly configured in the admin.'
  }
]

// Compliance Jurisdictions
const jurisdictions = [
  {
    country: 'Nigeria',
    flag: '🇳🇬',
    regulator: 'National Lottery Regulatory Commission',
    acronym: 'NLRC',
    badge: 'Regulated Market'
  },
  {
    country: 'Ghana',
    flag: '🇬🇭',
    regulator: 'Ghana Gaming Commission',
    acronym: 'GGC',
    badge: 'Regulated Market'
  },
  {
    country: 'South Africa',
    flag: '🇿🇦',
    regulator: 'Western Cape Gambling & Racing Board',
    acronym: 'WCGRB',
    badge: 'Provincial Framework'
  },
  {
    country: 'Kenya',
    flag: '🇰🇪',
    regulator: 'Betting Control and Licensing Board',
    acronym: 'BCLB',
    badge: 'East Africa Hub'
  },
  {
    country: 'Brazil',
    flag: '🇧🇷',
    regulator: 'Secretariat of Prizes and Stakes',
    acronym: 'SPA',
    badge: 'Federal Framework'
  },
  {
    country: 'Malta',
    flag: '🇲🇹',
    regulator: 'Malta Gaming Authority Standards',
    acronym: 'MGA',
    badge: 'European Standards'
  },
  {
    country: 'Curacao',
    flag: '🇨🇼',
    regulator: 'Curacao Gaming Authority',
    acronym: 'CGA',
    badge: 'Global Coverage'
  },
  {
    country: 'Anjouan & Tobique',
    flag: '🏝️',
    regulator: 'Offshore Finance Authorities',
    acronym: 'AOFA / TGC',
    badge: 'International'
  }
]

// 4-Week Launch Roadmap
const launchSteps = [
  {
    step: '01',
    phase: 'Days 1–5',
    title: 'Brand Injection & Domain Setup',
    description: 'Supply your brand logo, primary & accent color palette, and custom domain. Our team applies your styling tokens into the responsive sportsbook frontend.'
  },
  {
    step: '02',
    phase: 'Days 6–12',
    title: 'Cashier & Odds Feed Activation',
    description: 'Connect pre-integrated payment gateways (fiat, mobile money, crypto rails), configure default sports feeds, betting margins, and maximum liability limits.'
  },
  {
    step: '03',
    phase: 'Days 13–18',
    title: 'Back-Office QA & Staff Training',
    description: 'Receive sandbox credentials to test the bet slip, cashier deposits, and player management tools. Our technical team conducts hands-on training for your operations staff.'
  },
  {
    step: '04',
    phase: 'Days 19–28',
    title: 'DNS Switch & Public Go-Live',
    description: 'Complete final security and compliance checks, route your live domain to production servers, and open player registrations. 24/7 technical monitoring begins.'
  }
]

// Frequently Asked Questions
const faqs = [
  {
    question: 'How long does it take to launch a white-label sportsbook?',
    answer: 'A standard white-label sportsbook launches within 2 to 4 weeks from agreement signing. Because the core platform, odds feeds, cashier integrations, and player management systems are already built and tested, the onboarding focus is on skinning your brand colors, uploading your logo, connecting payment gateways, and training your team. Our fastest recorded launch went live in just 14 days.'
  },
  {
    question: 'What does SBT Capital handle in the white-label setup?',
    answer: 'SBT Capital manages the complete technology and operational backend: real-time odds feeds, live match trackers, risk management algorithms, player account management (PAM), anti-fraud monitoring, hosting infrastructure with 99.99% uptime, daily database backups, and software updates. Operators focus on brand identity, player acquisition, marketing, and customer support.'
  },
  {
    question: 'How much can I customise the white-label sportsbook for my brand?',
    answer: 'You have full control over the visual identity: your brand name, primary and secondary brand colors, logos, icons, favicon, custom domain name (e.g. yourbrand.com), and promotional banners. The sportsbook interface dynamically skins to your corporate guidelines so your players experience an authentic, proprietary-feeling betting platform.'
  },
  {
    question: 'What sports, leagues, and betting markets are included?',
    answer: 'The white-label solution covers over 200 sports and esports, more than 2,000 unique market types, and upwards of 100,000 live monthly matches. Key coverage includes global football (Premier League, Champions League, La Liga, Serie A, African leagues), basketball (NBA, EuroLeague), tennis, American football, cricket, boxing/MMA, and major esports tournaments (Counter-Strike, Dota 2, League of Legends).'
  },
  {
    question: 'What is the exact difference between White Label and Turnkey?',
    answer: 'The primary difference lies in licensing ownership and operational setup. In a White Label model, setup is fast (2-4 weeks) with minimal customization needed beyond your brand colors and logo, operating with turnkey compliance support and pre-packaged payment rails. In a Turnkey setup, the operator holds their own proprietary gambling licence and customizes specific operational integrations. White Label is the fastest, lowest-overhead way to get to market.'
  },
  {
    question: 'How are payment methods, mobile money, and cryptocurrency handled?',
    answer: 'The platform comes pre-integrated with a multi-currency cashier. For African markets, we support popular local payment methods including Paystack, Flutterwave, Monnify, M-Pesa, Airtel Money, and bank transfers/USSD. For international operations, credit cards, e-wallets, and cryptocurrency rails (USDT TRC20/ERC20, Bitcoin, Ethereum) are fully supported with instant player deposits and managed withdrawals.'
  },
  {
    question: 'How are risk management, liability, and fraud handled?',
    answer: 'Our platform includes an automated trading and risk engine. It automatically monitors wagers in real time, applies player bet limits, flags arbitrage or abnormal betting patterns, and suspends markets when unexpected feed anomalies occur. The software complies with ISO/IEC 27001 data protection standards, GLI-33 specifications, and GDPR guidelines.'
  },
  {
    question: 'What are the commercial terms and starting costs?',
    answer: 'Our white-label integration starts from an indicative fee of $4,000, paired with an agreed percentage share of aggregated Gross Gaming Revenue (GGR). This keeps upfront capital requirements low while aligning our incentives directly with your platform\'s growth and player turnover.'
  }
]

useSeoMeta({
  title: 'White-Label Sportsbook Platform | Rapid 14-Day Launch | SBT Capital',
  description: 'Launch a full-featured, turnkey sportsbook under your brand in 2–4 weeks. We provide tier-1 odds, payments, PAM, and cloud hosting—you supply your brand colors and logo.',
  ogTitle: 'White-Label Sportsbook Solution | SBT Capital',
  ogDescription: 'Ready-to-launch sports betting platform. Zero heavy engineering. Turnkey odds, cashier, and PAM under your brand.'
})
</script>

<template>
  <UPage class="overflow-x-hidden">
    <!-- 1. Hero Section -->
    <section class="relative isolate overflow-hidden bg-brand-50/60 pb-16 pt-12 dark:bg-gray-950 sm:pb-24 sm:pt-20">
      <!-- Glow & mesh backdrop -->
      <div class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-200/50 via-brand-50/30 to-transparent dark:from-brand-900/30 dark:via-gray-950 dark:to-transparent" />
      <div class="pointer-events-none absolute -right-32 -top-24 size-96 rounded-full bg-brand-400/10 blur-3xl dark:bg-brand-500/10" />
      <div class="pointer-events-none absolute -left-32 top-1/2 size-96 rounded-full bg-emerald-400/10 blur-3xl dark:bg-emerald-500/10" />

      <UContainer>
        <div class="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <!-- Hero Left: Copy & Value Proposition -->
          <div class="lg:col-span-7">
            <div class="inline-flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-brand-700 shadow-sm ring-1 ring-brand-200/80 backdrop-blur-sm dark:bg-brand-950/80 dark:text-brand-300 dark:ring-brand-800/80">
              <span class="flex size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Turnkey White-Label Solution</span>
              <span class="text-gray-300 dark:text-gray-700">•</span>
              <span class="text-gray-600 dark:text-gray-400">Launch in 2–4 Weeks</span>
            </div>

            <h1 class="mt-6 text-4xl font-extrabold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl dark:text-white">
              Your Branded Sportsbook,
              <span class="block bg-linear-to-r from-brand-600 via-brand-500 to-emerald-600 bg-clip-text text-transparent dark:from-brand-400 dark:via-brand-300 dark:to-emerald-400">
                Ready in Weeks.
              </span>
            </h1>

            <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              The fastest way to launch an online sports betting business. We handle the complex technical infrastructure—tier-1 odds feeds, real-time in-play engine, multi-currency cashier, and player management.
              <strong class="font-semibold text-gray-900 dark:text-white"> You only provide your brand colors and logo.</strong>
            </p>

            <!-- Highlights Checklist -->
            <ul class="mt-6 grid gap-2.5 sm:grid-cols-2">
              <li class="flex items-center gap-2.5 text-sm font-medium text-gray-700 dark:text-gray-200">
                <UIcon name="i-lucide-check-circle-2" class="size-4.5 shrink-0 text-emerald-500" />
                <span>Zero backend development needed</span>
              </li>
              <li class="flex items-center gap-2.5 text-sm font-medium text-gray-700 dark:text-gray-200">
                <UIcon name="i-lucide-check-circle-2" class="size-4.5 shrink-0 text-emerald-500" />
                <span>200+ sports & 100k+ live monthly events</span>
              </li>
              <li class="flex items-center gap-2.5 text-sm font-medium text-gray-700 dark:text-gray-200">
                <UIcon name="i-lucide-check-circle-2" class="size-4.5 shrink-0 text-emerald-500" />
                <span>African APMs, mobile money & crypto cashier</span>
              </li>
              <li class="flex items-center gap-2.5 text-sm font-medium text-gray-700 dark:text-gray-200">
                <UIcon name="i-lucide-check-circle-2" class="size-4.5 shrink-0 text-emerald-500" />
                <span>Fastest launch delivered in 14 days</span>
              </li>
            </ul>

            <!-- CTAs -->
            <div class="mt-8 flex flex-wrap items-center gap-4">
              <UButton
                :to="enquiryLink"
                label="Get White-Label Proposal"
                color="primary"
                size="xl"
                trailing-icon="i-lucide-arrow-right"
                class="shadow-lg shadow-brand-500/20"
              />
              <UButton
                to="#brand-styler"
                label="Try Live Brand Styler"
                color="neutral"
                variant="outline"
                size="xl"
                leading-icon="i-lucide-palette"
              />
            </div>

            <!-- Fast Stat Cards -->
            <div class="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 border-t border-brand-200/80 pt-8 dark:border-gray-800">
              <div class="rounded-xl bg-white/70 p-3 ring-1 ring-brand-100 dark:bg-gray-900/60 dark:ring-gray-800">
                <p class="text-xs font-medium text-gray-500 dark:text-gray-400">Launch Timeline</p>
                <p class="mt-1 text-xl font-bold text-gray-900 dark:text-white">2–4 Wks</p>
                <p class="text-[0.7rem] text-emerald-600 dark:text-emerald-400 font-medium">Record: 14 Days</p>
              </div>
              <div class="rounded-xl bg-white/70 p-3 ring-1 ring-brand-100 dark:bg-gray-900/60 dark:ring-gray-800">
                <p class="text-xs font-medium text-gray-500 dark:text-gray-400">Live Coverage</p>
                <p class="mt-1 text-xl font-bold text-gray-900 dark:text-white">100K+</p>
                <p class="text-[0.7rem] text-gray-500 dark:text-gray-400">Events / Month</p>
              </div>
              <div class="rounded-xl bg-white/70 p-3 ring-1 ring-brand-100 dark:bg-gray-900/60 dark:ring-gray-800">
                <p class="text-xs font-medium text-gray-500 dark:text-gray-400">Sports & Markets</p>
                <p class="mt-1 text-xl font-bold text-gray-900 dark:text-white">200+</p>
                <p class="text-[0.7rem] text-gray-500 dark:text-gray-400">2,000+ Markets</p>
              </div>
              <div class="rounded-xl bg-white/70 p-3 ring-1 ring-brand-100 dark:bg-gray-900/60 dark:ring-gray-800">
                <p class="text-xs font-medium text-gray-500 dark:text-gray-400">Setup Starting</p>
                <p class="mt-1 text-xl font-bold text-gray-900 dark:text-white">$4,000</p>
                <p class="text-[0.7rem] text-brand-600 dark:text-brand-400 font-medium">+ Profit Share</p>
              </div>
            </div>
          </div>

          <!-- Hero Right: Interactive Quick Preview Teaser Card -->
          <div class="lg:col-span-5">
            <div class="relative mx-auto w-full max-w-md overflow-hidden rounded-3xl bg-gray-950 p-6 text-white shadow-2xl ring-1 ring-gray-800">
              <!-- Top bar: Brand Badge & Live Pill -->
              <div class="flex items-center justify-between border-b border-gray-800 pb-4">
                <div class="flex items-center gap-2.5">
                  <div
                    class="flex size-9 items-center justify-center rounded-xl font-bold text-white shadow-md transition-colors duration-300"
                    :style="{ backgroundColor: currentBrandColor }"
                  >
                    {{ brandName.slice(0, 2).toUpperCase() }}
                  </div>
                  <div>
                    <p class="text-sm font-bold tracking-tight text-white">{{ brandName }}</p>
                    <p class="text-[0.65rem] text-gray-400">White-Label Instance #104</p>
                  </div>
                </div>

                <div class="flex items-center gap-1.5 rounded-full bg-emerald-950/70 px-2.5 py-1 text-xs font-medium text-emerald-400 ring-1 ring-emerald-800">
                  <span class="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>LIVE IN-PLAY</span>
                </div>
              </div>

              <!-- Live Match Simulation -->
              <div class="mt-4 rounded-2xl bg-gray-900/90 p-4 ring-1 ring-gray-800">
                <div class="flex items-center justify-between text-xs text-gray-400">
                  <span class="flex items-center gap-1.5 font-medium">
                    <UIcon name="i-lucide-trophy" class="size-3.5 text-yellow-500" />
                    UEFA Champions League
                  </span>
                  <span class="font-mono text-emerald-400 font-semibold">68' 2nd Half</span>
                </div>

                <div class="mt-3 flex items-center justify-between">
                  <div class="text-left">
                    <p class="text-sm font-bold text-white">Arsenal</p>
                    <p class="text-xs text-gray-400">Home</p>
                  </div>
                  <div class="rounded-lg bg-gray-800 px-3 py-1 font-mono text-base font-bold text-white">
                    2 : 1
                  </div>
                  <div class="text-right">
                    <p class="text-sm font-bold text-white">Bayern Munich</p>
                    <p class="text-xs text-gray-400">Away</p>
                  </div>
                </div>

                <!-- Odds Buttons -->
                <div class="mt-4 grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    class="group relative flex flex-col items-center justify-center rounded-xl border p-2 transition-all"
                    :class="selectedOdd === 'home' ? 'border-transparent text-white ring-2 ring-offset-2 ring-offset-gray-900' : 'border-gray-800 bg-gray-950/80 text-gray-300 hover:border-gray-700'"
                    :style="selectedOdd === 'home' ? { backgroundColor: currentBrandColor, '--tw-ring-color': currentBrandColor } : {}"
                    @click="selectedOdd = 'home'"
                  >
                    <span class="text-[0.65rem] uppercase opacity-75">1 (Home)</span>
                    <span class="mt-0.5 font-mono text-xs font-bold transition-transform" :class="liveOdds.fluctuating ? 'scale-110 text-emerald-300' : ''">
                      {{ liveOdds.home }}
                    </span>
                  </button>

                  <button
                    type="button"
                    class="group relative flex flex-col items-center justify-center rounded-xl border p-2 transition-all"
                    :class="selectedOdd === 'draw' ? 'border-transparent text-white ring-2 ring-offset-2 ring-offset-gray-900' : 'border-gray-800 bg-gray-950/80 text-gray-300 hover:border-gray-700'"
                    :style="selectedOdd === 'draw' ? { backgroundColor: currentBrandColor, '--tw-ring-color': currentBrandColor } : {}"
                    @click="selectedOdd = 'draw'"
                  >
                    <span class="text-[0.65rem] uppercase opacity-75">X (Draw)</span>
                    <span class="mt-0.5 font-mono text-xs font-bold">
                      {{ liveOdds.draw }}
                    </span>
                  </button>

                  <button
                    type="button"
                    class="group relative flex flex-col items-center justify-center rounded-xl border p-2 transition-all"
                    :class="selectedOdd === 'away' ? 'border-transparent text-white ring-2 ring-offset-2 ring-offset-gray-900' : 'border-gray-800 bg-gray-950/80 text-gray-300 hover:border-gray-700'"
                    :style="selectedOdd === 'away' ? { backgroundColor: currentBrandColor, '--tw-ring-color': currentBrandColor } : {}"
                    @click="selectedOdd = 'away'"
                  >
                    <span class="text-[0.65rem] uppercase opacity-75">2 (Away)</span>
                    <span class="mt-0.5 font-mono text-xs font-bold">
                      {{ liveOdds.away }}
                    </span>
                  </button>
                </div>
              </div>

              <!-- Bet slip summary preview -->
              <div class="mt-4 rounded-xl bg-gray-900/60 p-3 ring-1 ring-gray-800/80 text-xs">
                <div class="flex justify-between text-gray-400">
                  <span>Selected Pick:</span>
                  <span class="font-semibold text-white capitalize">{{ selectedOdd }} Win</span>
                </div>
                <div class="mt-1 flex justify-between text-gray-400">
                  <span>Potential Return:</span>
                  <span class="font-mono font-bold text-emerald-400">${{ potentialWin }}</span>
                </div>
              </div>

              <!-- Quick Launch Button -->
              <button
                type="button"
                class="mt-4 w-full rounded-xl py-3 text-center text-xs font-bold text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
                :style="{ backgroundColor: currentBrandColor }"
              >
                Place Bet with {{ brandName }}
              </button>

              <p class="mt-3 text-center text-[0.68rem] text-gray-400">
                Skin dynamically matches your logo, palette & domain.
              </p>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- 2. Interactive "Live Brand Styler & Mockup" Section -->
    <section id="brand-styler" class="py-16 sm:py-24 bg-white dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
      <UContainer>
        <div class="mx-auto max-w-3xl text-center">
          <UBadge label="Zero Tech Friction" color="primary" variant="subtle" size="md" />
          <h2 class="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl dark:text-white">
            See Your Brand Come to Life Instantly
          </h2>
          <p class="mt-3 text-base text-gray-600 dark:text-gray-300">
            This is the essence of white-label: we've engineered the entire platform so you don't have to build anything.
            Pick a color palette or brand name below to see how our turnkey sportsbook adapts in real time.
          </p>
        </div>

        <!-- Customizer Controls Card -->
        <div class="mx-auto mt-10 max-w-4xl rounded-2xl bg-gray-50 p-6 ring-1 ring-gray-200 dark:bg-gray-950 dark:ring-gray-800">
          <div class="grid gap-6 md:grid-cols-12 md:items-center">
            <!-- Brand Name Input -->
            <div class="md:col-span-5">
              <label for="brand-name-input" class="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                Brand / Sportsbook Name
              </label>
              <div class="mt-2 flex rounded-xl shadow-xs ring-1 ring-gray-300 focus-within:ring-2 focus-within:ring-primary dark:ring-gray-700">
                <span class="inline-flex items-center rounded-l-xl border-r border-gray-300 bg-gray-100 px-3 text-xs text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
                  <UIcon name="i-lucide-trophy" class="size-4 text-primary" />
                </span>
                <input
                  id="brand-name-input"
                  v-model="brandName"
                  type="text"
                  maxlength="20"
                  class="block w-full rounded-r-xl border-0 bg-white px-3 py-2 text-sm font-semibold text-gray-900 focus:outline-none dark:bg-gray-900 dark:text-white"
                  placeholder="e.g. ApexBet, SaharaSport"
                >
              </div>
            </div>

            <!-- Color Palette Presets -->
            <div class="md:col-span-7">
              <label class="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                Select Brand Color Theme
              </label>
              <div class="mt-2 flex flex-wrap gap-2.5">
                <button
                  v-for="preset in brandColorPresets"
                  :key="preset.id"
                  type="button"
                  class="group flex items-center gap-2 rounded-xl px-3 py-1.5 text-xs font-semibold transition-all"
                  :class="selectedPreset.id === preset.id ? 'bg-white shadow-md ring-2 dark:bg-gray-800' : 'bg-gray-200/70 hover:bg-white dark:bg-gray-900 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'"
                  :style="selectedPreset.id === preset.id ? { '--tw-ring-color': preset.primary } : {}"
                  @click="selectedPreset = preset"
                >
                  <span class="size-4 rounded-full shadow-xs ring-1 ring-black/10" :style="{ backgroundColor: preset.primary }" />
                  <span>{{ preset.name }}</span>
                </button>
              </div>
            </div>
          </div>

          <!-- Viewport View Switcher -->
          <div class="mt-6 flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-800">
            <span class="text-xs text-gray-500 dark:text-gray-400">
              Interactive Live Preview
            </span>
            <div class="flex items-center gap-1 rounded-lg bg-gray-200/80 p-1 dark:bg-gray-800">
              <button
                type="button"
                class="flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-colors"
                :class="activeDevice === 'desktop' ? 'bg-white text-gray-950 shadow-xs dark:bg-gray-900 dark:text-white' : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'"
                @click="activeDevice = 'desktop'"
              >
                <UIcon name="i-lucide-monitor" class="size-3.5" />
                Desktop
              </button>
              <button
                type="button"
                class="flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-colors"
                :class="activeDevice === 'mobile' ? 'bg-white text-gray-950 shadow-xs dark:bg-gray-900 dark:text-white' : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'"
                @click="activeDevice = 'mobile'"
              >
                <UIcon name="i-lucide-smartphone" class="size-3.5" />
                Mobile
              </button>
            </div>
          </div>
        </div>

        <!-- Rendered Sportsbook UI Showcase Mockup -->
        <div class="mx-auto mt-8 transition-all duration-300" :class="activeDevice === 'mobile' ? 'max-w-sm' : 'max-w-5xl'">
          <div class="overflow-hidden rounded-3xl bg-gray-950 text-white shadow-2xl ring-1 ring-gray-800">
            <!-- Simulated Browser / App Chrome Bar -->
            <div class="flex items-center justify-between border-b border-gray-800 bg-gray-900 px-4 py-2.5">
              <div class="flex items-center gap-2">
                <span class="size-3 rounded-full bg-red-500/80" />
                <span class="size-3 rounded-full bg-yellow-500/80" />
                <span class="size-3 rounded-full bg-green-500/80" />
              </div>
              <div class="flex items-center gap-1.5 rounded-md bg-gray-950 px-3 py-1 font-mono text-[0.7rem] text-gray-400">
                <UIcon name="i-lucide-lock" class="size-3 text-emerald-400" />
                <span>https://www.{{ brandName.toLowerCase().replace(/\s+/g, '') }}.com</span>
              </div>
              <div class="text-[0.65rem] font-medium text-emerald-400">
                99.99% Cloud SLA
              </div>
            </div>

            <!-- Sportsbook Header with Dynamic Brand Styling -->
            <header class="flex items-center justify-between border-b border-gray-800/80 px-4 py-3 sm:px-6">
              <div class="flex items-center gap-3">
                <div
                  class="flex size-9 items-center justify-center rounded-xl font-extrabold text-white shadow-md transition-colors duration-300"
                  :style="{ backgroundColor: currentBrandColor }"
                >
                  {{ brandName.slice(0, 2).toUpperCase() }}
                </div>
                <div>
                  <span class="text-base font-black tracking-wider text-white">{{ brandName }}</span>
                  <span class="ml-2 rounded-sm bg-gray-800 px-1.5 py-0.5 text-[0.6rem] font-bold text-gray-300 uppercase tracking-wider">SPORTSBOOK</span>
                </div>
              </div>

              <!-- Header Quick Actions -->
              <div class="flex items-center gap-3">
                <div class="hidden sm:flex items-center gap-2 text-xs text-gray-400">
                  <span class="rounded bg-gray-800 px-2 py-1 text-gray-300">Balance: <strong>$1,250.00</strong></span>
                </div>
                <button
                  type="button"
                  class="rounded-lg px-3 py-1.5 text-xs font-bold text-white shadow-md transition-all hover:opacity-95"
                  :style="{ backgroundColor: currentBrandColor }"
                >
                  Deposit
                </button>
              </div>
            </header>

            <!-- Sportsbook Sub-navigation -->
            <nav class="flex items-center gap-4 overflow-x-auto border-b border-gray-800/60 bg-gray-900/60 px-4 py-2 text-xs font-semibold text-gray-400 sm:px-6">
              <button type="button" class="flex items-center gap-1.5 font-bold text-white pb-1 border-b-2" :style="{ borderColor: currentBrandColor }">
                <UIcon name="i-lucide-flame" class="size-3.5 text-red-400" />
                Live In-Play (42)
              </button>
              <button type="button" class="hover:text-white transition-colors">Today's Matches</button>
              <button type="button" class="hover:text-white transition-colors">Premier League</button>
              <button type="button" class="hover:text-white transition-colors">La Liga</button>
              <button type="button" class="hover:text-white transition-colors">NBA</button>
              <button type="button" class="hover:text-white transition-colors">Virtuals</button>
            </nav>

            <!-- Main Interactive Sportsbook Body -->
            <div class="grid p-4 sm:p-6" :class="activeDevice === 'desktop' ? 'lg:grid-cols-12 lg:gap-6' : 'grid-cols-1 gap-4'">
              <!-- Left Column: Match Events -->
              <div :class="activeDevice === 'desktop' ? 'lg:col-span-8' : 'col-span-1'">
                <div class="mb-3 flex items-center justify-between">
                  <span class="text-xs font-bold text-gray-400 uppercase tracking-wider">Featured Live Fixtures</span>
                  <span class="flex items-center gap-1 text-[0.7rem] text-emerald-400">
                    <span class="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Sub-second live updates
                  </span>
                </div>

                <!-- Match 1: Main Interactive Match -->
                <div class="rounded-2xl bg-gray-900 p-4 ring-1 ring-gray-800 transition-all hover:ring-gray-700">
                  <div class="flex items-center justify-between border-b border-gray-800 pb-2 text-xs">
                    <span class="font-medium text-gray-400">Football • UEFA Champions League</span>
                    <span class="font-mono text-emerald-400 font-bold">74' In-Play</span>
                  </div>

                  <div class="my-3 flex items-center justify-between">
                    <div class="flex items-center gap-2">
                      <span class="size-6 rounded-full bg-red-600/20 text-red-400 flex items-center justify-center text-[0.65rem] font-bold">ARS</span>
                      <span class="text-sm font-bold text-white">Arsenal</span>
                    </div>
                    <span class="rounded bg-gray-800 px-2.5 py-0.5 font-mono text-sm font-extrabold text-white">2 - 1</span>
                    <div class="flex items-center gap-2">
                      <span class="text-sm font-bold text-white">Bayern Munich</span>
                      <span class="size-6 rounded-full bg-red-700/20 text-red-300 flex items-center justify-center text-[0.65rem] font-bold">BAY</span>
                    </div>
                  </div>

                  <!-- 1X2 Odds Button Row -->
                  <div class="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      class="flex items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold transition-all"
                      :class="selectedOdd === 'home' ? 'text-white shadow-md' : 'bg-gray-950 text-gray-300 hover:bg-gray-800'"
                      :style="selectedOdd === 'home' ? { backgroundColor: currentBrandColor } : {}"
                      @click="selectedOdd = 'home'"
                    >
                      <span class="text-gray-400">1</span>
                      <span class="font-mono font-bold">{{ liveOdds.home }}</span>
                    </button>

                    <button
                      type="button"
                      class="flex items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold transition-all"
                      :class="selectedOdd === 'draw' ? 'text-white shadow-md' : 'bg-gray-950 text-gray-300 hover:bg-gray-800'"
                      :style="selectedOdd === 'draw' ? { backgroundColor: currentBrandColor } : {}"
                      @click="selectedOdd = 'draw'"
                    >
                      <span class="text-gray-400">X</span>
                      <span class="font-mono font-bold">{{ liveOdds.draw }}</span>
                    </button>

                    <button
                      type="button"
                      class="flex items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold transition-all"
                      :class="selectedOdd === 'away' ? 'text-white shadow-md' : 'bg-gray-950 text-gray-300 hover:bg-gray-800'"
                      :style="selectedOdd === 'away' ? { backgroundColor: currentBrandColor } : {}"
                      @click="selectedOdd = 'away'"
                    >
                      <span class="text-gray-400">2</span>
                      <span class="font-mono font-bold">{{ liveOdds.away }}</span>
                    </button>
                  </div>
                </div>

                <!-- Match 2: Real Madrid vs Man City -->
                <div class="mt-3 rounded-2xl bg-gray-900 p-4 ring-1 ring-gray-800 opacity-90">
                  <div class="flex items-center justify-between border-b border-gray-800 pb-2 text-xs">
                    <span class="font-medium text-gray-400">Football • UEFA Champions League</span>
                    <span class="font-mono text-emerald-400 font-bold">52' In-Play</span>
                  </div>

                  <div class="my-3 flex items-center justify-between">
                    <span class="text-sm font-bold text-white">Real Madrid</span>
                    <span class="rounded bg-gray-800 px-2.5 py-0.5 font-mono text-sm font-extrabold text-white">1 - 1</span>
                    <span class="text-sm font-bold text-white">Manchester City</span>
                  </div>

                  <div class="grid grid-cols-3 gap-2 text-xs">
                    <div class="flex items-center justify-between rounded-xl bg-gray-950 px-3 py-2 text-gray-300">
                      <span class="text-gray-400">1</span>
                      <span class="font-mono font-bold">2.60</span>
                    </div>
                    <div class="flex items-center justify-between rounded-xl bg-gray-950 px-3 py-2 text-gray-300">
                      <span class="text-gray-400">X</span>
                      <span class="font-mono font-bold">3.10</span>
                    </div>
                    <div class="flex items-center justify-between rounded-xl bg-gray-950 px-3 py-2 text-gray-300">
                      <span class="text-gray-400">2</span>
                      <span class="font-mono font-bold">2.45</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Right Column: Interactive Bet Slip Widget -->
              <div :class="activeDevice === 'desktop' ? 'lg:col-span-4' : 'col-span-1'">
                <div class="rounded-2xl bg-gray-900 p-4 ring-1 ring-gray-800">
                  <div class="flex items-center justify-between border-b border-gray-800 pb-3">
                    <div class="flex items-center gap-1.5">
                      <UIcon name="i-lucide-receipt" class="size-4 text-primary" />
                      <span class="text-sm font-bold text-white">Bet Slip</span>
                    </div>
                    <span class="rounded-full bg-gray-800 px-2 py-0.5 text-[0.65rem] font-bold text-gray-300">1 Selection</span>
                  </div>

                  <!-- Slip Item -->
                  <div class="mt-3 rounded-xl bg-gray-950 p-3 ring-1 ring-gray-800/80">
                    <div class="flex justify-between text-xs">
                      <span class="font-bold text-white">Arsenal vs Bayern Munich</span>
                      <button type="button" class="text-gray-500 hover:text-red-400">
                        <UIcon name="i-lucide-x" class="size-3.5" />
                      </button>
                    </div>
                    <p class="mt-1 text-[0.7rem] text-gray-400">Match Winner: <strong class="text-white capitalize">{{ selectedOdd }}</strong></p>

                    <div class="mt-2 flex items-center justify-between border-t border-gray-900 pt-2 text-xs">
                      <span class="text-gray-400">Odds:</span>
                      <span class="font-mono font-bold text-white" :style="{ color: currentBrandColor }">
                        {{ selectedOdd === 'home' ? liveOdds.home : selectedOdd === 'draw' ? liveOdds.draw : liveOdds.away }}
                      </span>
                    </div>
                  </div>

                  <!-- Stake Controls -->
                  <div class="mt-3">
                    <label class="block text-[0.7rem] font-medium text-gray-400">Stake Amount ($)</label>
                    <div class="mt-1 flex items-center gap-2">
                      <input
                        v-model.number="betStake"
                        type="number"
                        min="1"
                        class="w-full rounded-lg bg-gray-950 px-3 py-1.5 font-mono text-sm font-bold text-white ring-1 ring-gray-800 focus:outline-none"
                      >
                      <div class="flex gap-1">
                        <button type="button" class="rounded bg-gray-800 px-2 py-1 text-[0.7rem] text-gray-300 hover:bg-gray-700" @click="betStake = 25">$25</button>
                        <button type="button" class="rounded bg-gray-800 px-2 py-1 text-[0.7rem] text-gray-300 hover:bg-gray-700" @click="betStake = 100">$100</button>
                      </div>
                    </div>
                  </div>

                  <!-- Return preview -->
                  <div class="mt-3 flex items-center justify-between rounded-xl bg-gray-950/80 p-2.5 text-xs">
                    <span class="text-gray-400">Potential Return:</span>
                    <span class="font-mono text-sm font-black text-emerald-400">${{ potentialWin }}</span>
                  </div>

                  <!-- Primary CTA -->
                  <button
                    type="button"
                    class="mt-3 w-full rounded-xl py-3 text-center text-xs font-bold text-white shadow-lg transition-transform hover:scale-[1.02]"
                    :style="{ backgroundColor: currentBrandColor }"
                  >
                    Place Bet on {{ brandName }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- 3. The 3 Main Turnkey Advantages (From Concept) -->
    <section class="py-16 sm:py-24 bg-gray-50 dark:bg-gray-950">
      <UContainer>
        <div class="mx-auto max-w-3xl text-center">
          <UBadge label="Built for Velocity" color="primary" variant="subtle" size="md" />
          <h2 class="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl dark:text-white">
            Why Operators Choose White-Label
          </h2>
          <p class="mt-3 text-base text-gray-600 dark:text-gray-300">
            Building a sportsbook from scratch takes millions in capital and over a year of development. Our white-label solution gives you institutional-grade betting technology on day one.
          </p>
        </div>

        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <!-- Advantage 1 -->
          <div class="relative rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-md dark:bg-gray-900 dark:ring-gray-800">
            <span class="flex size-12 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-600 dark:bg-brand-500/20 dark:text-brand-300">
              <UIcon name="i-lucide-rocket" class="size-6" />
            </span>
            <h3 class="mt-6 text-xl font-bold text-gray-900 dark:text-white">
              Speed to Market
            </h3>
            <p class="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
              Go live in just 2–4 weeks with all third-party integrations (Sportradar feeds, payment gateways, KYC, back office) already connected and production-tested.
            </p>
            <div class="mt-5 flex items-center gap-1.5 text-xs font-semibold text-brand-600 dark:text-brand-400">
              <UIcon name="i-lucide-clock" class="size-4" />
              <span>Fastest launch: 14 business days</span>
            </div>
          </div>

          <!-- Advantage 2 -->
          <div class="relative rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-md dark:bg-gray-900 dark:ring-gray-800">
            <span class="flex size-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-300">
              <UIcon name="i-lucide-zap" class="size-6" />
            </span>
            <h3 class="mt-6 text-xl font-bold text-gray-900 dark:text-white">
              Innovation & Real-Time Tech
            </h3>
            <p class="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
              Sub-second odds refresh, in-play cash-out algorithms, and high-performance mobile-first frontends engineered for low latency even on congested networks.
            </p>
            <div class="mt-5 flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <UIcon name="i-lucide-activity" class="size-4" />
              <span>100,000+ monthly live events</span>
            </div>
          </div>

          <!-- Advantage 3 -->
          <div class="relative rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-md dark:bg-gray-900 dark:ring-gray-800">
            <span class="flex size-12 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-600 dark:bg-violet-500/20 dark:text-violet-300">
              <UIcon name="i-lucide-shield-check" class="size-6" />
            </span>
            <h3 class="mt-6 text-xl font-bold text-gray-900 dark:text-white">
              Institutional Security & Trust
            </h3>
            <p class="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
              Automated anti-fraud mechanisms, automated player bet-limits, GDPR-compliant data security, and certification aligned with GLI-33 and ISO/IEC 27001 standards.
            </p>
            <div class="mt-5 flex items-center gap-1.5 text-xs font-semibold text-violet-600 dark:text-violet-400">
              <UIcon name="i-lucide-award" class="size-4" />
              <span>GLI-33 & ISO/IEC 27001 aligned</span>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- 4. Key Features Grid (Odds, In-play, PAM, Mobile, Risk, Cashier) -->
    <section class="py-16 sm:py-24 bg-white dark:bg-gray-900">
      <UContainer>
        <div class="mx-auto max-w-3xl text-center">
          <UBadge label="Full Stack Architecture" color="primary" variant="subtle" size="md" />
          <h2 class="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl dark:text-white">
            Key Features of the White-Label Sportsbook
          </h2>
          <p class="mt-3 text-base text-gray-600 dark:text-gray-300">
            Everything your players and operations team need to run a modern, high-volume sportsbook without technical friction.
          </p>
        </div>

        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="feature in packageFeatures"
            :key="feature.title"
            class="group rounded-2xl border border-gray-200/80 bg-gray-50/50 p-6 transition-all hover:bg-white hover:shadow-lg dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-900"
          >
            <span class="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
              <UIcon :name="feature.icon" class="size-5" />
            </span>
            <h3 class="mt-5 text-base font-bold text-gray-900 dark:text-white">
              {{ feature.title }}
            </h3>
            <p class="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- 5. Turnkey vs White Label vs Custom Platform Comparison (Concept Highlight) -->
    <section class="py-16 sm:py-24 bg-brand-50/50 dark:bg-gray-950 border-y border-gray-200 dark:border-gray-800">
      <UContainer>
        <div class="mx-auto max-w-3xl text-center">
          <UBadge label="Solution Architecture" color="primary" variant="subtle" size="md" />
          <h2 class="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl dark:text-white">
            White Label vs. Turnkey vs. Custom Development
          </h2>
          <p class="mt-3 text-base text-gray-600 dark:text-gray-300">
            Understanding the distinction between models helps you choose the right approach for your market, capital, and licensing readiness.
          </p>
        </div>

        <!-- Interactive Comparison Selector Tabs -->
        <div class="mt-10 flex justify-center">
          <div class="inline-flex rounded-2xl bg-gray-200/70 p-1.5 dark:bg-gray-900">
            <button
              v-for="model in comparisonModels"
              :key="model.id"
              type="button"
              class="rounded-xl px-4 py-2.5 text-xs font-bold transition-all sm:text-sm"
              :class="activeComparisonTab === model.id ? 'bg-white text-gray-950 shadow-md dark:bg-gray-800 dark:text-white' : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'"
              @click="activeComparisonTab = model.id as any"
            >
              {{ model.title }}
            </button>
          </div>
        </div>

        <!-- Active Model Highlight Card -->
        <div class="mx-auto mt-8 max-w-4xl">
          <div
            v-for="model in comparisonModels"
            v-show="activeComparisonTab === model.id"
            :key="model.id"
            class="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800 sm:p-8"
          >
            <div class="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-5 dark:border-gray-800">
              <div>
                <span class="text-xs font-bold uppercase tracking-wider text-primary">
                  {{ model.tagline }}
                </span>
                <h3 class="mt-1 text-2xl font-extrabold text-gray-950 dark:text-white">
                  {{ model.title }}
                </h3>
              </div>
              <UBadge :label="model.badge" color="primary" variant="subtle" size="lg" />
            </div>

            <p class="mt-5 text-base leading-7 text-gray-700 dark:text-gray-300">
              {{ model.description }}
            </p>

            <div class="mt-6 grid gap-4 rounded-2xl bg-gray-50 p-4 sm:grid-cols-2 dark:bg-gray-950">
              <div>
                <p class="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Launch Timeline</p>
                <p class="mt-1 text-base font-bold text-gray-900 dark:text-white">{{ model.turnaround }}</p>
              </div>
              <div>
                <p class="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Ideal For</p>
                <p class="mt-1 text-sm font-medium text-gray-800 dark:text-gray-200">{{ model.idealFor }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Full Comparison Table -->
        <div class="mx-auto mt-12 max-w-5xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div class="overflow-x-auto">
            <table class="w-full text-left text-sm">
              <thead class="border-b border-gray-200 bg-gray-50 text-xs font-bold uppercase tracking-wider text-gray-600 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-400">
                <tr>
                  <th class="px-6 py-4">Capability</th>
                  <th class="px-6 py-4 text-primary bg-primary/5">White Label (Fastest)</th>
                  <th class="px-6 py-4">Turnkey</th>
                  <th class="px-6 py-4">Custom Platform</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100 dark:divide-gray-800">
                <tr v-for="row in comparisonMatrix" :key="row.feature" class="hover:bg-gray-50/50 dark:hover:bg-gray-950/50">
                  <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">{{ row.feature }}</td>
                  <td class="px-6 py-4 font-medium text-primary bg-primary/5 dark:text-brand-300">{{ row.whiteLabel }}</td>
                  <td class="px-6 py-4 text-gray-600 dark:text-gray-300">{{ row.turnkey }}</td>
                  <td class="px-6 py-4 text-gray-600 dark:text-gray-300">{{ row.custom }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- 6. Regulatory Compliance & Jurisdictions (From Concept) -->
    <section class="py-16 sm:py-24 bg-white dark:bg-gray-900">
      <UContainer>
        <div class="mx-auto max-w-3xl text-center">
          <UBadge label="Global & Regional Coverage" color="primary" variant="subtle" size="md" />
          <h2 class="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl dark:text-white">
            Built for Regulated & Emerging Markets
          </h2>
          <p class="mt-3 text-base text-gray-600 dark:text-gray-300">
            Our platform supports compliance adaptation across key regulatory frameworks, enabling audit-ready operations worldwide.
          </p>
        </div>

        <!-- Jurisdictions Grid -->
        <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="jurisdiction in jurisdictions"
            :key="jurisdiction.country"
            class="flex flex-col justify-between rounded-2xl border border-gray-200 bg-gray-50/50 p-5 transition-all hover:bg-white hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-900"
          >
            <div>
              <div class="flex items-center justify-between">
                <span class="text-3xl">{{ jurisdiction.flag }}</span>
                <span class="rounded-full bg-primary/10 px-2.5 py-0.5 text-[0.65rem] font-bold text-primary">
                  {{ jurisdiction.badge }}
                </span>
              </div>
              <h3 class="mt-4 text-base font-bold text-gray-900 dark:text-white">
                {{ jurisdiction.country }}
              </h3>
              <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">
                {{ jurisdiction.regulator }}
              </p>
            </div>
            <div class="mt-4 border-t border-gray-200/60 pt-3 dark:border-gray-800">
              <span class="font-mono text-xs font-semibold text-gray-700 dark:text-gray-300">{{ jurisdiction.acronym }}</span>
            </div>
          </div>
        </div>

        <!-- Certifications Bar -->
        <div class="mt-10 flex flex-wrap items-center justify-center gap-6 rounded-2xl bg-gray-50 p-6 ring-1 ring-gray-200 dark:bg-gray-950 dark:ring-gray-800">
          <div class="flex items-center gap-2 text-xs font-semibold text-gray-700 dark:text-gray-300">
            <UIcon name="i-lucide-shield-check" class="size-5 text-emerald-500" />
            <span>GLI-33 Platform Standard Aligned</span>
          </div>
          <div class="flex items-center gap-2 text-xs font-semibold text-gray-700 dark:text-gray-300">
            <UIcon name="i-lucide-lock" class="size-5 text-primary" />
            <span>ISO/IEC 27001 Information Security</span>
          </div>
          <div class="flex items-center gap-2 text-xs font-semibold text-gray-700 dark:text-gray-300">
            <UIcon name="i-lucide-file-text" class="size-5 text-brand-600 dark:text-brand-400" />
            <span>GDPR Data Protection Compliant</span>
          </div>
          <div class="flex items-center gap-2 text-xs font-semibold text-gray-700 dark:text-gray-300">
            <UIcon name="i-lucide-user-check" class="size-5 text-amber-500" />
            <span>KYC & Responsible Gaming Tools</span>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- 7. Delivery Roadmap: 4 Weeks to Go-Live -->
    <section class="py-16 sm:py-24 bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <UContainer>
        <div class="mx-auto max-w-3xl text-center">
          <UBadge label="Launch Schedule" color="primary" variant="subtle" size="md" />
          <h2 class="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl dark:text-white">
            The 4-Week Rapid Launch Process
          </h2>
          <p class="mt-3 text-base text-gray-600 dark:text-gray-300">
            A battle-tested onboarding schedule that takes you from signing to live wagering in less than a month.
          </p>
        </div>

        <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="step in launchSteps"
            :key="step.step"
            class="relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800"
          >
            <div class="flex items-center justify-between">
              <span class="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-sm font-extrabold text-primary">
                {{ step.step }}
              </span>
              <span class="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-bold text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                {{ step.phase }}
              </span>
            </div>
            <h3 class="mt-5 text-base font-bold text-gray-900 dark:text-white">
              {{ step.title }}
            </h3>
            <p class="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
              {{ step.description }}
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- 8. Frequently Asked Questions (From Concept) -->
    <section class="py-16 sm:py-24 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <UContainer>
        <div class="mx-auto max-w-3xl text-center">
          <UBadge label="Everything You Need to Know" color="primary" variant="subtle" size="md" />
          <h2 class="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl dark:text-white">
            Frequently Asked Questions
          </h2>
          <p class="mt-3 text-base text-gray-600 dark:text-gray-300">
            Answers to common questions about launching a white-label sportsbook with SBT Capital.
          </p>
        </div>

        <div class="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <details
            v-for="faq in faqs"
            :key="faq.question"
            class="group border-b border-gray-200 last:border-b-0 dark:border-gray-800"
          >
            <summary class="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-gray-900 hover:bg-gray-50 focus-visible:outline-none dark:text-white dark:hover:bg-gray-900">
              <span class="text-base font-bold">{{ faq.question }}</span>
              <span class="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-200 group-open:rotate-45">
                <UIcon name="i-lucide-plus" class="size-4" />
              </span>
            </summary>
            <div class="px-6 pb-6 pt-1 text-sm leading-7 text-gray-600 dark:text-gray-300">
              {{ faq.answer }}
            </div>
          </details>
        </div>
      </UContainer>
    </section>

    <!-- 9. Final CTA -->
    <section class="relative isolate overflow-hidden bg-brand-600 py-16 sm:py-24 text-white dark:bg-brand-950">
      <div class="pointer-events-none absolute inset-0 -z-10 bg-linear-to-br from-brand-700 via-brand-600 to-indigo-800 dark:from-gray-950 dark:via-brand-950 dark:to-gray-900" />
      <UContainer>
        <div class="mx-auto max-w-3xl text-center">
          <UBadge label="Launch in 2–4 Weeks" color="neutral" variant="subtle" size="md" class="bg-white/20 text-white" />
          <h2 class="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl text-white">
            Ready to Launch Your Sportsbook?
          </h2>
          <p class="mt-4 text-lg text-brand-100 dark:text-gray-300">
            Start under your brand with our white-label solution. Indicative integration starts from $4,000 plus an agreed profit share model. We’ll guide you from brand setup to your first live bet.
          </p>
          <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
            <UButton
              :to="enquiryLink"
              label="Request White-Label Proposal"
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
