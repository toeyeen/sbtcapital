<script setup lang="ts">
const enquiryLink = computed(() => {
  const query = new URLSearchParams({
    subject: 'Sportsbook Integration Enquiry',
    body: 'Hello SBT Capital Integration Team,\n\nI would like to explore integrating the Sportsbook into our platform.\n\nOrganisation / Brand:\nCurrent Tech Stack / Platform:\nPreferred Integration Type (Sportsbook API / Sportsbook iFrame / Game Aggregator API / Game Aggregator iFrame):\nTarget Markets:\nDesired Odds Feeds & Content:\nExpected Launch Timeline:\n\nPlease share your API documentation and sandbox access.\n'
  })

  return `mailto:hello@sbtcapital.ng?${query.toString()}`
})

// Active Capability Tab
const activeCapability = ref<'sportsbook-api' | 'sportsbook-iframe' | 'aggregator-api' | 'aggregator-iframe'>('sportsbook-api')

// Code Language Tab for API Playground
const activeLang = ref<'javascript' | 'python' | 'php' | 'go'>('javascript')

const codeSnippets = {
  javascript: `// Initialize SBT Capital Sportsbook API Client
import { createSportsbookClient } from '@sbtcapital/sportsbook-sdk'

const sportsbook = createSportsbookClient({
  apiKey: process.env.SBT_API_KEY,
  environment: 'production',
  region: 'africa-central'
})

// 1. Fetch live in-play football matches
const { fixtures } = await sportsbook.live.getFixtures({
  sport: 'football',
  markets: ['1X2', 'OVER_UNDER', 'BTTS']
})

// 2. Place bet on behalf of authenticated player
const betSlip = await sportsbook.bets.place({
  playerId: 'usr_8920147',
  selections: [
    { eventId: 'evt_arsenal_bayern', marketId: '1X2', outcome: 'HOME', odds: 2.15 }
  ],
  stake: 50.00,
  currency: 'USD'
})

console.log('Bet placed successfully:', betSlip.ticketNumber)`,

  python: `# SBT Capital Sportsbook Python SDK
from sbtcapital_sportsbook import SportsbookClient
import os

client = SportsbookClient(
    api_key=os.environ['SBT_API_KEY'],
    environment='production'
)

# 1. Fetch live in-play football fixtures
live_matches = client.live.get_fixtures(
    sport='football',
    markets=['1X2', 'OVER_UNDER']
)

# 2. Accept player wager
bet = client.bets.place(
    player_id='usr_8920147',
    selections=[{
        'event_id': 'evt_arsenal_bayern',
        'market_id': '1X2',
        'outcome': 'HOME',
        'odds': 2.15
    }],
    stake=50.00,
    currency='USD'
)

print(f"Bet accepted: {bet.ticket_number}")`,

  php: `<?php
// SBT Capital Sportsbook PHP Client
use SBTCapital\\Sportsbook\\Client;

$sportsbook = new Client(
    apiKey: getenv('SBT_API_KEY'),
    environment: 'production'
);

// 1. Query real-time live events
$events = $sportsbook->live->getFixtures([
    'sport' => 'football',
    'markets' => ['1X2', 'HANDICAP']
]);

// 2. Validate and submit wager
$betSlip = $sportsbook->bets->place([
    'playerId' => 'usr_8920147',
    'selections' => [
        [
            'eventId' => 'evt_arsenal_bayern',
            'marketId' => '1X2',
            'outcome' => 'HOME',
            'odds' => 2.15
        ]
    ],
    'stake' => 50.00,
    'currency' => 'USD'
]);

echo "Bet Ticket: " . $betSlip->ticketNumber;`,

  go: `package main

import (
    "context"
    "fmt"
    "os"
    "github.com/sbtcapital/sportsbook-go"
)

func main() {
    client := sportsbook.NewClient(sportsbook.Config{
        APIKey: os.Getenv("SBT_API_KEY"),
    })

    // 1. Fetch live match stream
    ctx := context.Background()
    fixtures, err := client.Live.GetFixtures(ctx, "football")
    if err != nil {
        panic(err)
    }

    // 2. Submit player bet slip
    ticket, err := client.Bets.Place(ctx, sportsbook.BetRequest{
        PlayerID: "usr_8920147",
        Stake:    50.00,
        Currency: "USD",
        Selections: []sportsbook.Selection{
            {EventID: "evt_arsenal_bayern", MarketID: "1X2", Outcome: "HOME", Odds: 2.15},
        },
    })
    if err != nil {
        panic(err)
    }

    fmt.Println("Wager registered:", ticket.TicketNumber)
}`
}

const copied = ref(false)
function copyCode() {
  navigator.clipboard.writeText(codeSnippets[activeLang.value])
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}

// Integration Modes Detailed Data (from Concept)
const integrationCapabilities = [
  {
    id: 'sportsbook-api',
    tabLabel: 'Sportsbook: API',
    title: 'Sportsbook API Integration',
    badge: 'Maximum Control',
    tagline: 'Direct REST & WebSocket API for full frontend freedom',
    description: 'The preferred choice for operators wanting complete UX autonomy. Connect our high-volume betting engine into your existing player portal, native mobile apps, or custom frontend. You retain full control over UI layouts, styling, navigation, and user journey while SBT Capital powers real-time odds, risk management, and bet settlement.',
    bullets: [
      'Full headless integration: design your own proprietary frontend or adopt our React/Vue components',
      'Unified REST endpoints and persistent WebSockets for sub-second live odds streaming',
      'Shared or external wallet support with real-time balance reconciliation',
      'Complete access to bonus tools: free bets, accumulator boosts, and cash-out algorithms'
    ],
    idealFor: 'Operators with dedicated frontend developers who want a bespoke look and seamless casino-sports cross-sell.'
  },
  {
    id: 'sportsbook-iframe',
    tabLabel: 'Sportsbook: iFrame',
    title: 'Sportsbook iFrame Integration',
    badge: 'Fastest Launch',
    tagline: 'Plug-and-play embedded sportsbook widget',
    description: 'Add a full-featured sportsbook as a responsive embedded module on your brand website. Perfect for existing online casino operators who want to add sports betting without building a new frontend from scratch. The iFrame automatically adjusts to desktop, tablet, and mobile screens while syncing with your main website session.',
    bullets: [
      'Fastest time-to-market: launch sports betting in days with minimal dev investment',
      'Pre-styled UI with best UX/UI betting practices, match trackers, and bet slips',
      'Bi-directional postMessage communication for seamless session and wallet events',
      'Configurable theme styles, fonts, and brand colors to match your casino portal'
    ],
    idealFor: 'Established online casinos and gaming operators looking to quickly add sports betting to their existing portal.'
  },
  {
    id: 'aggregator-api',
    tabLabel: 'Game Aggregator: API',
    title: 'Game Aggregator API Integration',
    badge: 'All-in-One Powerhouse',
    tagline: 'One single integration combining Sportsbook & 40,000+ Games',
    description: 'A revolutionary approach in iGaming. Connect once to SBT Capital\'s unified aggregator to unlock both the complete Sportsbook engine and thousands of casino games, virtual sports, crash games, and live dealers from top studios (Elbet, Vermantia, NSoft, BetGames.TV, and more).',
    bullets: [
      'Two flagship products in a single automated API integration',
      'Massive content library: sports betting alongside 40,000+ slots, crash, and virtual games',
      'Unified back office with consolidated GGR reporting, player history, and bonusing',
      'Full technical support from our dedicated integration and operations teams'
    ],
    idealFor: 'Entrepreneurs and expanding iGaming operators seeking an end-to-end casino + sports betting portfolio through one pipeline.'
  },
  {
    id: 'aggregator-iframe',
    tabLabel: 'Game Aggregator: iFrame',
    title: 'Game Aggregator iFrame Integration',
    badge: 'Ultimate Versatility',
    tagline: 'Sportsbook displayed as a dedicated page or standalone lobby game',
    description: 'Offers two flexible display modes: embed the Sportsbook within a designated sports page on your website, or launch it directly as a standalone game tile within your casino lobby portfolio. Players enjoy seamless gameplay and shared wallet balance without navigating away.',
    bullets: [
      'Two display options: dedicated website page or launcher game tile in your lobby',
      'Includes Jackpot Aggregator support for cross-product local and global jackpots',
      'Full bonus capabilities: tournaments, cash drops, and personalized player promotions',
      'Plug-and-play setup requiring minimal engineering overhead'
    ],
    idealFor: 'Casino operators wanting to present sports betting as an exciting game tile within their existing gaming catalog.'
  }
]

// Leading Data & Feed Providers
const dataProviders = [
  {
    name: 'Sportradar',
    type: 'Official Live Odds & Trading',
    coverage: '900,000+ matches annually across 350+ leagues',
    badge: 'Tier-1 Partner'
  },
  {
    name: 'Genius Sports (BetGenius)',
    type: 'Official NFL, Premier League & FIBA Data',
    coverage: 'Sub-second in-play pricing & Bet Builder',
    badge: 'Official Data'
  },
  {
    name: 'Stats Perform',
    type: 'Opta Live Data & Micro-Markets',
    coverage: 'Deep player props, live tracking & statistics',
    badge: 'Opta Powered'
  },
  {
    name: 'Oddin.gg',
    type: 'Esports Betting Odds & Streams',
    coverage: 'CS2, Dota 2, LoL, Valorant with 24/7 in-play',
    badge: 'Esports Leader'
  }
]

// Key Architectural Benefits
const integrationBenefits = [
  {
    icon: 'i-lucide-wallet',
    title: 'Seamless Cross-Platform Wallet',
    description: 'Whether your casino runs on our platform or a third-party engine, our integration provides a seamless single wallet so players bet on sports and casino games using one unified balance.'
  },
  {
    icon: 'i-lucide-flame',
    title: 'Unique Gamification & Bonus Engine',
    description: 'Boost player lifetime value with customizable bonus mechanics: accumulator boosts, risk-free bets, cashout tools, and shared jackpots via the Jackpot Aggregator.'
  },
  {
    icon: 'i-lucide-sliders',
    title: 'Customisation & Back-Office CMS',
    description: 'Manage all projects centrally. The intuitive CMS lets your marketing and operations teams manage banners, featured matches, odds boosts, and promotional pages without developer intervention.'
  },
  {
    icon: 'i-lucide-shield-alert',
    title: 'Real-Time Risk Management & Anti-Fraud',
    description: 'Our in-house trading algorithms and dedicated risk team monitor bet velocity, identify arbitrage patterns, and safeguard your bookmaking margins 24/7.'
  },
  {
    icon: 'i-lucide-coins',
    title: 'Crypto & Multi-Currency Processing',
    description: 'Integrated multi-currency support enables instant deposits and payouts across local African fiat rails (OPay, Paystack, M-Pesa, Flutterwave) and major cryptocurrencies (USDT, BTC, ETH).'
  },
  {
    icon: 'i-lucide-award',
    title: 'ISO 27001 & GLI-33 Certified',
    description: 'Platform operates under strict ISO/IEC 27001 Information Security Management standards, GLI-33 compliance alignment, and full GDPR customer data protection.'
  }
]

// 4-Step Technical Launch Timeline
const timelineSteps = [
  {
    num: '01',
    phase: 'Day 1–2',
    title: 'API Access & Sandbox Setup',
    description: 'Receive API credentials, webhook endpoints, and staging environment tokens with full Swagger/Postman documentation.'
  },
  {
    num: '02',
    phase: 'Day 3–7',
    title: 'Seamless Wallet & Callback Sync',
    description: 'Implement our standard debit/credit wallet callbacks to ensure atomic transactions, instant settlement, and rollback protection.'
  },
  {
    num: '03',
    phase: 'Day 8–11',
    title: 'Frontend Embed & Event Mapping',
    description: 'Embed the iFrame or bind your custom UI to our WebSocket feeds. Configure brand colors, leagues, and default betting margins.'
  },
  {
    num: '04',
    phase: 'Day 12–14',
    title: 'Compliance Validation & Go-Live',
    description: 'Run automated end-to-end simulation tests, verify risk management limits, and push DNS to production with 24/7 live monitoring.'
  }
]

// Frequently Asked Questions
const faqs = [
  {
    question: 'How fast can we integrate the Sportsbook into our existing business?',
    answer: 'Integration speed depends on the method chosen. With the Sportsbook iFrame or Game Aggregator iFrame, operators can launch within 3 to 7 days. For a custom API integration with headless frontend binding, typical deployment takes 10 to 14 days. Our engineering team provides dedicated technical onboarding, sample code in 4 languages, and real-time Slack/Teams support to ensure rapid delivery.'
  },
  {
    question: 'How does the Seamless Wallet work between Casino and Sportsbook?',
    answer: 'The platform uses atomic server-to-server callbacks (debit, credit, rollback) to communicate with your player account management (PAM) system. When a player wagers on sports, a synchronous debit request checks balance and reserves the stake. On settlement or cash-out, a credit request immediately tops up their balance. Players never need to transfer funds between casino and sports accounts.'
  },
  {
    question: 'Can we use our own odds feeds or do you provide them?',
    answer: 'SBT Capital supplies pre-integrated, market-leading odds feeds from Sportradar, Genius Sports, Stats Perform, and Oddin.gg covering 200+ sports, 2,000+ betting markets, and 100,000+ live monthly matches. All feed licensing, latency optimization, and trading margin configurations are fully managed by us.'
  },
  {
    question: 'What is the difference between Sportsbook API and Game Aggregator API?',
    answer: 'The Sportsbook API gives you a dedicated direct pipeline to the sports betting engine (events, markets, bet slips, live odds). The Game Aggregator API gives you both the Sportsbook and an aggregated portfolio of over 40,000 casino games, virtual sports (Elbet, Vermantia, NSoft), and live draw games (BetGames.TV) through one unified integration.'
  },
  {
    question: 'Do we need a full in-house team of developers to integrate?',
    answer: 'If you choose the iFrame option, you only need minimal frontend markup (adding an iframe container and authentication token). If you choose the API integration, having frontend or backend developers will let you take advantage of full customizability. Our technical team assists throughout both routes.'
  },
  {
    question: 'How are risk management and fraudulent bets prevented?',
    answer: 'Our proprietary risk engine automatically tracks liabilities across all markets. It flags suspicious syndicate betting, enforces player stake limits, suspends odds during volatile match moments, and protects operators against market arbitrage.'
  }
]

useSeoMeta({
  title: 'Sportsbook Integration Solutions | API & iFrame | SBT Capital',
  description: 'Integrate a high-performance sportsbook into your existing casino or platform via unified API, iFrame, or Game Aggregator pipeline. Powered by Sportradar, BetGenius, and Stats Perform.',
  ogTitle: 'Sportsbook Integration | SBT Capital',
  ogDescription: 'Seamless wallet, real-time odds, and cross-product iGaming integration.'
})
</script>

<template>
  <UPage class="overflow-x-hidden">
    <!-- 1. Hero Section -->
    <section class="relative isolate overflow-hidden bg-brand-50/60 pb-16 pt-12 dark:bg-gray-950 sm:pb-24 sm:pt-20">
      <div class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-200/50 via-brand-50/30 to-transparent dark:from-brand-900/30 dark:via-gray-950 dark:to-transparent" />
      <div class="pointer-events-none absolute -right-32 -top-24 size-96 rounded-full bg-brand-400/10 blur-3xl dark:bg-brand-500/10" />

      <UContainer>
        <div class="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <!-- Hero Left -->
          <div class="lg:col-span-7">
            <div class="inline-flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-brand-700 shadow-sm ring-1 ring-brand-200/80 backdrop-blur-sm dark:bg-brand-950/80 dark:text-brand-300 dark:ring-brand-800/80">
              <span class="flex size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Cross-Platform iGaming Integration</span>
              <span class="text-gray-300 dark:text-gray-700">•</span>
              <span class="text-gray-600 dark:text-gray-400">API & iFrame</span>
            </div>

            <h1 class="mt-6 text-4xl font-extrabold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl dark:text-white">
              Seamless Sportsbook Integration
              <span class="block bg-linear-to-r from-brand-600 via-brand-500 to-emerald-600 bg-clip-text text-transparent dark:from-brand-400 dark:via-brand-300 dark:to-emerald-400">
                For Modern iGaming Brands.
              </span>
            </h1>

            <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Casinos and sports betting complement each other. Maximize your player lifetime value and cross-product revenue with our turnkey Sportsbook integration.
              Whether you need a full-control <strong>REST/WebSocket API</strong>, a responsive <strong>iFrame</strong>, or a dual <strong>Game Aggregator</strong> connection, our team provides complete technical onboarding.
            </p>

            <!-- Highlights Checklist -->
            <ul class="mt-6 grid gap-2.5 sm:grid-cols-2">
              <li class="flex items-center gap-2.5 text-sm font-medium text-gray-700 dark:text-gray-200">
                <UIcon name="i-lucide-check-circle-2" class="size-4.5 shrink-0 text-emerald-500" />
                <span>Single shared wallet across casino & sports</span>
              </li>
              <li class="flex items-center gap-2.5 text-sm font-medium text-gray-700 dark:text-gray-200">
                <UIcon name="i-lucide-check-circle-2" class="size-4.5 shrink-0 text-emerald-500" />
                <span>Sub-second live odds from Sportradar & Genius</span>
              </li>
              <li class="flex items-center gap-2.5 text-sm font-medium text-gray-700 dark:text-gray-200">
                <UIcon name="i-lucide-check-circle-2" class="size-4.5 shrink-0 text-emerald-500" />
                <span>4 flexible setup methods: API or iFrame</span>
              </li>
              <li class="flex items-center gap-2.5 text-sm font-medium text-gray-700 dark:text-gray-200">
                <UIcon name="i-lucide-check-circle-2" class="size-4.5 shrink-0 text-emerald-500" />
                <span>Fastest integration delivered in under 24 hours</span>
              </li>
            </ul>

            <!-- Action CTAs -->
            <div class="mt-8 flex flex-wrap items-center gap-4">
              <UButton
                :to="enquiryLink"
                label="Get Integration Quote"
                color="primary"
                size="xl"
                trailing-icon="i-lucide-arrow-right"
                class="shadow-lg shadow-brand-500/20"
              />
              <UButton
                to="#capabilities"
                label="Explore Integration Options"
                color="neutral"
                variant="outline"
                size="xl"
                leading-icon="i-lucide-layers"
              />
            </div>
          </div>

          <!-- Hero Right: Interactive SDK Code Preview -->
          <div class="lg:col-span-5">
            <div class="relative mx-auto w-full max-w-lg overflow-hidden rounded-3xl bg-gray-950 text-white shadow-2xl ring-1 ring-gray-800">
              <!-- Top bar with language tabs -->
              <div class="flex items-center justify-between border-b border-gray-800 bg-gray-900/80 px-4 py-3">
                <div class="flex items-center gap-1.5">
                  <span class="size-3 rounded-full bg-red-500/80" />
                  <span class="size-3 rounded-full bg-yellow-500/80" />
                  <span class="size-3 rounded-full bg-green-500/80" />
                  <span class="ml-2 font-mono text-xs font-semibold text-gray-300">Sportsbook API</span>
                </div>

                <div class="flex items-center gap-1 rounded-lg bg-gray-950 p-1">
                  <button
                    type="button"
                    class="rounded px-2 py-0.5 text-[0.68rem] font-medium transition-colors"
                    :class="activeLang === 'javascript' ? 'bg-primary text-white font-bold' : 'text-gray-400 hover:text-white'"
                    @click="activeLang = 'javascript'"
                  >
                    Node.js
                  </button>
                  <button
                    type="button"
                    class="rounded px-2 py-0.5 text-[0.68rem] font-medium transition-colors"
                    :class="activeLang === 'python' ? 'bg-primary text-white font-bold' : 'text-gray-400 hover:text-white'"
                    @click="activeLang = 'python'"
                  >
                    Python
                  </button>
                  <button
                    type="button"
                    class="rounded px-2 py-0.5 text-[0.68rem] font-medium transition-colors"
                    :class="activeLang === 'php' ? 'bg-primary text-white font-bold' : 'text-gray-400 hover:text-white'"
                    @click="activeLang = 'php'"
                  >
                    PHP
                  </button>
                  <button
                    type="button"
                    class="rounded px-2 py-0.5 text-[0.68rem] font-medium transition-colors"
                    :class="activeLang === 'go' ? 'bg-primary text-white font-bold' : 'text-gray-400 hover:text-white'"
                    @click="activeLang = 'go'"
                  >
                    Go
                  </button>
                </div>
              </div>

              <!-- Code Box -->
              <div class="relative p-4 font-mono text-xs leading-relaxed text-gray-300 overflow-x-auto max-h-88">
                <button
                  type="button"
                  class="absolute right-3 top-3 flex items-center gap-1 rounded-md bg-gray-800/80 px-2 py-1 text-[0.65rem] font-semibold text-gray-300 hover:bg-gray-700 transition-colors"
                  @click="copyCode"
                >
                  <UIcon :name="copied ? 'i-lucide-check' : 'i-lucide-copy'" class="size-3 text-emerald-400" />
                  <span>{{ copied ? 'Copied' : 'Copy' }}</span>
                </button>
                <pre><code>{{ codeSnippets[activeLang] }}</code></pre>
              </div>

              <!-- Footer info bar -->
              <div class="flex items-center justify-between border-t border-gray-800 bg-gray-900/50 px-4 py-2.5 text-[0.7rem] text-gray-400">
                <span class="flex items-center gap-1 text-emerald-400 font-semibold">
                  <span class="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  REST + WebSocket v2.4 Live
                </span>
                <span>Latency &lt; 85ms</span>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- 2. Main Advantages (Expertise, Innovation, Security) -->
    <section class="py-16 sm:py-20 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <UContainer>
        <div class="grid gap-6 md:grid-cols-3">
          <div class="rounded-2xl border border-gray-200/80 bg-gray-50/50 p-6 transition-all hover:bg-white hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-900">
            <span class="flex size-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:bg-brand-500/20 dark:text-brand-300">
              <UIcon name="i-lucide-compass" class="size-5" />
            </span>
            <h3 class="mt-4 text-lg font-bold text-gray-900 dark:text-white">Expertise</h3>
            <p class="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
              Guidance and hands-on technical support during every step of sandbox onboarding, wallet certification, and live deployment.
            </p>
          </div>

          <div class="rounded-2xl border border-gray-200/80 bg-gray-50/50 p-6 transition-all hover:bg-white hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-900">
            <span class="flex size-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-300">
              <UIcon name="i-lucide-eye" class="size-5" />
            </span>
            <h3 class="mt-4 text-lg font-bold text-gray-900 dark:text-white">Innovation</h3>
            <p class="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
              Integrated cross-product architecture designed specifically for iGaming cross-selling between casino players and sports bettors.
            </p>
          </div>

          <div class="rounded-2xl border border-gray-200/80 bg-gray-50/50 p-6 transition-all hover:bg-white hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-900">
            <span class="flex size-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600 dark:bg-violet-500/20 dark:text-violet-300">
              <UIcon name="i-lucide-shield-check" class="size-5" />
            </span>
            <h3 class="mt-4 text-lg font-bold text-gray-900 dark:text-white">Security & Feeds</h3>
            <p class="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
              Dedicated automated risk management services, fraud prevention, and real-time betting odds feeds from market leaders.
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- 3. Leading Odds Feeds Partners (Sportradar, BetGenius, Stats Perform, Oddin) -->
    <section class="py-12 bg-gray-50 dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
      <UContainer>
        <div class="text-center">
          <p class="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Pre-Integrated Official Data Feeds & Trading Partners
          </p>
        </div>
        <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="provider in dataProviders"
            :key="provider.name"
            class="rounded-xl border border-gray-200 bg-white p-4 shadow-xs dark:border-gray-800 dark:bg-gray-900"
          >
            <div class="flex items-center justify-between">
              <h4 class="font-bold text-gray-900 dark:text-white">{{ provider.name }}</h4>
              <UBadge :label="provider.badge" color="primary" variant="subtle" size="sm" />
            </div>
            <p class="mt-2 text-xs font-semibold text-primary">{{ provider.type }}</p>
            <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">{{ provider.coverage }}</p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- 4. Interactive 4-Way Integration Capabilities Tabs -->
    <section id="capabilities" class="py-16 sm:py-24 bg-white dark:bg-gray-900">
      <UContainer>
        <div class="mx-auto max-w-3xl text-center">
          <UBadge label="Integration Capabilities" color="primary" variant="subtle" size="md" />
          <h2 class="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl dark:text-white">
            Choose Your Ideal Integration Approach
          </h2>
          <p class="mt-3 text-base text-gray-600 dark:text-gray-300">
            We provide two main products (Sportsbook Standalone or Game Aggregator), each with two set-up options (API or iFrame). Check out the right fit for your technology stack.
          </p>
        </div>

        <!-- Capability Tabs Selector -->
        <div class="mt-10 flex justify-center">
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 rounded-2xl bg-gray-100 p-1.5 dark:bg-gray-800">
            <button
              v-for="cap in integrationCapabilities"
              :key="cap.id"
              type="button"
              class="rounded-xl px-4 py-2.5 text-xs font-bold transition-all sm:text-sm text-center"
              :class="activeCapability === cap.id ? 'bg-white text-gray-950 shadow-md dark:bg-gray-900 dark:text-white' : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'"
              @click="activeCapability = cap.id as any"
            >
              {{ cap.tabLabel }}
            </button>
          </div>
        </div>

        <!-- Active Capability Showcase Card -->
        <div class="mx-auto mt-8 max-w-4xl">
          <div
            v-for="cap in integrationCapabilities"
            v-show="activeCapability === cap.id"
            :key="cap.id"
            class="rounded-3xl border border-gray-200 bg-gray-50/70 p-6 shadow-xl dark:border-gray-800 dark:bg-gray-950 sm:p-8"
          >
            <div class="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 pb-5 dark:border-gray-800">
              <div>
                <span class="text-xs font-bold uppercase tracking-wider text-primary">
                  {{ cap.tagline }}
                </span>
                <h3 class="mt-1 text-2xl font-extrabold text-gray-950 dark:text-white">
                  {{ cap.title }}
                </h3>
              </div>
              <UBadge :label="cap.badge" color="primary" variant="subtle" size="lg" />
            </div>

            <p class="mt-5 text-base leading-7 text-gray-700 dark:text-gray-300">
              {{ cap.description }}
            </p>

            <!-- Feature Bullets -->
            <div class="mt-6 rounded-2xl bg-white p-5 ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800">
              <h4 class="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Key Capabilities</h4>
              <ul class="mt-3 grid gap-2.5 sm:grid-cols-2">
                <li v-for="bullet in cap.bullets" :key="bullet" class="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <UIcon name="i-lucide-check" class="mt-0.5 size-4 shrink-0 text-emerald-500" />
                  <span>{{ bullet }}</span>
                </li>
              </ul>
            </div>

            <div class="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-gray-200 pt-5 dark:border-gray-800">
              <div class="text-xs text-gray-600 dark:text-gray-400">
                <strong class="text-gray-900 dark:text-white">Ideal For:</strong> {{ cap.idealFor }}
              </div>
              <UButton
                :to="enquiryLink"
                label="Request Documentation & Sandbox Keys"
                color="primary"
                size="md"
                trailing-icon="i-lucide-arrow-right"
              />
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- 5. Platform Advantages (Seamless Wallet, Bonusing, CMS, Risk, Crypto) -->
    <section class="py-16 sm:py-24 bg-gray-50 dark:bg-gray-950 border-y border-gray-200 dark:border-gray-800">
      <UContainer>
        <div class="mx-auto max-w-3xl text-center">
          <UBadge label="Architectural Excellence" color="primary" variant="subtle" size="md" />
          <h2 class="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl dark:text-white">
            Why Integrate SBT Capital Sportsbook?
          </h2>
          <p class="mt-3 text-base text-gray-600 dark:text-gray-300">
            Engineered to remove operational bottlenecks, empower your marketing team, and keep transactions frictionless.
          </p>
        </div>

        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="benefit in integrationBenefits"
            :key="benefit.title"
            class="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-md dark:bg-gray-900 dark:ring-gray-800"
          >
            <span class="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <UIcon :name="benefit.icon" class="size-5" />
            </span>
            <h3 class="mt-5 text-base font-bold text-gray-900 dark:text-white">
              {{ benefit.title }}
            </h3>
            <p class="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
              {{ benefit.description }}
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- 6. 14-Day Rapid Integration Timeline -->
    <section class="py-16 sm:py-24 bg-white dark:bg-gray-900">
      <UContainer>
        <div class="mx-auto max-w-3xl text-center">
          <UBadge label="Integration Roadmap" color="primary" variant="subtle" size="md" />
          <h2 class="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl dark:text-white">
            How We Get You Live in 14 Days
          </h2>
          <p class="mt-3 text-base text-gray-600 dark:text-gray-300">
            A battle-tested integration pipeline with dedicated engineering support.
          </p>
        </div>

        <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="step in timelineSteps"
            :key="step.num"
            class="relative rounded-2xl border border-gray-200 bg-gray-50/50 p-6 dark:border-gray-800 dark:bg-gray-950"
          >
            <div class="flex items-center justify-between">
              <span class="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-sm font-extrabold text-primary">
                {{ step.num }}
              </span>
              <span class="rounded-full bg-gray-200/80 px-2.5 py-1 text-xs font-bold text-gray-700 dark:bg-gray-800 dark:text-gray-300">
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

    <!-- 7. FAQ -->
    <section class="py-16 sm:py-24 bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <UContainer>
        <div class="mx-auto max-w-3xl text-center">
          <UBadge label="Technical Questions" color="primary" variant="subtle" size="md" />
          <h2 class="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl dark:text-white">
            Frequently Asked Questions
          </h2>
          <p class="mt-3 text-base text-gray-600 dark:text-gray-300">
            Got questions about our API, iFrame, or seamless wallet? Here are answers.
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

    <!-- 8. CTA Section -->
    <section class="relative isolate overflow-hidden bg-brand-600 py-16 sm:py-24 text-white dark:bg-brand-950">
      <div class="pointer-events-none absolute inset-0 -z-10 bg-linear-to-br from-brand-700 via-brand-600 to-indigo-800 dark:from-gray-950 dark:via-brand-950 dark:to-gray-900" />
      <UContainer>
        <div class="mx-auto max-w-3xl text-center">
          <UBadge label="Start Integration" color="neutral" variant="subtle" size="md" class="bg-white/20 text-white" />
          <h2 class="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl text-white">
            Ready to Connect the Sportsbook?
          </h2>
          <p class="mt-4 text-lg text-brand-100 dark:text-gray-300">
            Request our Swagger documentation, Postman collection, and staging sandbox tokens to test our feeds and seamless wallet integration today.
          </p>
          <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
            <UButton
              :to="enquiryLink"
              label="Request Sandbox Credentials"
              color="neutral"
              variant="solid"
              size="xl"
              trailing-icon="i-lucide-arrow-right"
              class="bg-white text-gray-950 hover:bg-gray-100 shadow-xl"
            />
            <UButton
              to="mailto:hello@sbtcapital.ng"
              label="Contact Integration Team"
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

