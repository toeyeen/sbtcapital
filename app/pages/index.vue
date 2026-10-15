<script setup lang="ts">
const stats = [
  {
    eyebrow: 'Game aggregation',
    value: '60+',
    title: 'Games integrated by Q4 2022',
    description: 'A growing catalogue connected to operator platforms.'
  },
  {
    eyebrow: 'Regional growth',
    value: '2',
    title: 'New markets in 2024',
    description: 'Operations expanded into Ghana and Kenya.'
  },
  {
    eyebrow: 'Payment connectivity',
    value: '2023',
    title: 'Major fintech integrations',
    description: 'Payment partners connected into the platform.'
  }
]

const previewTabs = [
  { label: 'API response', icon: 'i-lucide-braces', slot: 'response' },
  { label: 'Endpoints', icon: 'i-lucide-list', slot: 'endpoints' }
]

const brandSearch = ref('')
const selectedBrand = ref('YangaBet')
const platformBrands = [
  { name: 'YangaBet', market: 'Nigeria', key: 'yangabet' },
  { name: 'StarBet', market: 'Nigeria', key: 'starbet' },
  { name: 'Truewave', market: 'Africa', key: 'truewave' }
]

const filteredPlatformBrands = computed(() => {
  const query = brandSearch.value.trim().toLowerCase()
  return platformBrands.filter(brand => brand.name.toLowerCase().includes(query))
})

const sportsbookResponse = computed(() => ({
  data: {
    operator: selectedBrand.value,
    market: platformBrands.find(brand => brand.name === selectedBrand.value)?.market ?? 'Africa',
    sport: 'football',
    event: {
      id: 'evt_2026_1048',
      competition: 'Premier League',
      home: 'Arsenal',
      away: 'Chelsea',
      status: 'upcoming',
      startTime: '2026-10-18T16:30:00Z',
      markets: [
        {
          name: 'Match Result',
          selections: [
            { name: 'Arsenal', decimalOdds: 2.1 },
            { name: 'Draw', decimalOdds: 3.45 },
            { name: 'Chelsea', decimalOdds: 3.2 }
          ]
        },
        {
          name: 'Both Teams to Score',
          selections: [
            { name: 'Yes', decimalOdds: 1.72 },
            { name: 'No', decimalOdds: 2.05 }
          ]
        }
      ]
    }
  },
  meta: { requestId: 'req_demo_8f31', source: 'mock-sdk-preview' }
}))

const apiEndpoints = [
  { method: 'GET', path: '/v1/operators/{operator}/events?sport=football', note: 'Fixtures and live event data' },
  { method: 'GET', path: '/v1/markets/{eventId}', note: 'Markets, selections and prices' },
  { method: 'POST', path: '/v1/bets', note: 'Submit a bet slip' },
  { method: 'POST', path: '/v1/games/{gameId}/sessions', note: 'Create a virtual game session' }
]

const partnerBrands = [
  { name: 'YangaBet', wordmarkClass: 'italic' },
  { name: 'StarBet', wordmarkClass: 'tracking-wide' },
  { name: 'Truewave', wordmarkClass: 'lowercase' }
]

const sdkProducts = [
  {
    id: 'sportsbook',
    label: 'Sportsbook API',
    description: 'Connect live events, odds and bet slips to your sportsbook.',
    icon: 'i-lucide-trophy',
    code: {
      JavaScript: `import { createSportsbookClient } from '@truewave/sportsbook-sdk'

const sportsbook = createSportsbookClient({ apiKey: process.env.TRUEWAVE_API_KEY })
const { events } = await sportsbook.events.list({ sport: 'football', region: 'ng', live: true })

console.log(events)`,
      Python: `from truewave_sportsbook import SportsbookClient

sportsbook = SportsbookClient(api_key=os.environ['TRUEWAVE_API_KEY'])
events = sportsbook.events.list(sport='football', region='ng', live=True)

print(events)`,
      PHP: `use Truewave\\Sportsbook\\Client;

$sportsbook = new Client(apiKey: getenv('TRUEWAVE_API_KEY'));
$events = $sportsbook->events->list(sport: 'football', region: 'ng', live: true);

print_r($events);`,
      Go: `client := sportsbook.NewClient(os.Getenv("TRUEWAVE_API_KEY"))

events, err := client.Events.List(ctx, &sportsbook.EventParams{
    Sport: "football", Region: "ng", Live: true,
})
if err != nil {
    log.Fatal(err)
}

fmt.Println(events)`
    }
  },
  {
    id: 'virtual-games',
    label: 'Virtual Games API',
    description: 'Embed virtual games and create player sessions in your retail platform.',
    icon: 'i-lucide-gamepad-2',
    code: {
      JavaScript: `import { createVirtualGamesClient } from '@truewave/virtual-games-sdk'

const games = createVirtualGamesClient({ apiKey: process.env.TRUEWAVE_API_KEY })
const { items } = await games.catalog.list({ category: 'virtual-sports' })
const session = await games.sessions.create({ gameId: items[0].id, playerId: 'player_123' })

console.log(session.launchUrl)`,
      Python: `from truewave_virtual_games import VirtualGamesClient

games = VirtualGamesClient(api_key=os.environ['TRUEWAVE_API_KEY'])
catalog = games.catalog.list(category='virtual-sports')
session = games.sessions.create(game_id=catalog.items[0].id, player_id='player_123')

print(session.launch_url)`,
      PHP: `use Truewave\\VirtualGames\\Client;

$games = new Client(apiKey: getenv('TRUEWAVE_API_KEY'));
$catalog = $games->catalog->list(category: 'virtual-sports');
$session = $games->sessions->create(gameId: $catalog->items[0]->id, playerId: 'player_123');

echo $session->launchUrl;`,
      Go: `client := virtualgames.NewClient(os.Getenv("TRUEWAVE_API_KEY"))

catalog, err := client.Catalog.List(ctx, "virtual-sports")
if err != nil {
    log.Fatal(err)
}
session, err := client.Sessions.Create(ctx, catalog.Items[0].ID, "player_123")
if err != nil {
    log.Fatal(err)
}

fmt.Println(session.LaunchURL)`
    }
  }
]
</script>

<template>
  <UPage>
    <!-- 1. Hero Section -->
    <div class="relative isolate overflow-hidden">
      <HeroFlowField />
      <UPageHero
        title="A sportsbook platform built for the market it serves."
        description="Bring sportsbook, virtual games, payments and retail together in one adaptable platform. Launch with local insight, connected technology and a team that understands African operators."
        orientation="horizontal"
        class="relative z-10"
      >
        <template #headline>
          <UBadge
            variant="subtle"
            color="primary"
            label="Sportsbook · Games · Payments · Retail"
          />
        </template>

        <template #links>
          <UButton
            to="/products/white-label-sportsbook"
            label="Explore the sportsbook"
            color="primary"
            size="lg"
            trailing-icon="i-lucide-arrow-right"
          />
          <UButton
            to="/contact-us"
            label="Talk to our team"
            color="neutral"
            variant="outline"
            size="lg"
            leading-icon="i-lucide-headphones"
          />
        </template>

        <!-- Code / JSON Preview Box on the Right -->
        <template #default>
          <div class="group relative w-full rounded-2xl p-px shadow-xl shadow-blue-900/15">
            <div class="pointer-events-none absolute -inset-px rounded-2xl bg-linear-to-r from-brand-300 via-brand-500 to-cyan-400 opacity-35 blur-xl transition-opacity group-hover:opacity-50" />
            <UCard class="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-950">
              <div class="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 pb-4 dark:border-gray-800">
                <div>
                  <p class="text-sm font-bold text-highlighted">Sportsbook API explorer</p>
                  <p class="mt-1 font-mono text-[11px] text-muted">GET&nbsp; /v1/operators/{operator}/events</p>
                </div>
                <span class="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 text-[11px] font-bold text-green-800 dark:bg-green-950 dark:text-green-300">
                  <span class="size-1.5 rounded-full bg-green-500" />
                  MOCK SANDBOX
                </span>
              </div>
              <UTabs
                :items="previewTabs"
                class="mt-3 w-full"
              >
                <template #response>
                  <div class="h-64 overflow-auto rounded-xl bg-[#101b2d] p-4 dark:bg-black sm:h-72">
                    <pre class="text-left font-mono text-[11px] leading-5 text-blue-100 sm:text-xs"><code>{{ JSON.stringify(sportsbookResponse, null, 2) }}</code></pre>
                  </div>
                </template>
                <template #endpoints>
                  <ul class="h-64 space-y-2 overflow-auto rounded-xl bg-[#101b2d] p-4 dark:bg-black sm:h-72">
                    <li v-for="endpoint in apiEndpoints" :key="endpoint.path" class="rounded-lg border border-white/10 p-3">
                      <div class="flex items-center gap-3 font-mono text-[11px]">
                        <span class="font-bold text-green-300">{{ endpoint.method }}</span>
                        <span class="break-all text-blue-100">{{ endpoint.path }}</span>
                      </div>
                      <p class="mt-1 text-xs text-gray-400">{{ endpoint.note }}</p>
                    </li>
                  </ul>
                </template>
              </UTabs>
              <div class="mt-3">
                <p class="mb-2 text-[11px] font-bold uppercase tracking-wider text-muted">Search connected operator brands</p>
                <UInput
                  v-model="brandSearch"
                  class="w-full"
                  placeholder="Try YangaBet, StarBet or Truewave"
                  icon="i-lucide-search"
                />
                <div class="mt-2 flex flex-wrap gap-2">
                  <button
                    v-for="brand in filteredPlatformBrands"
                    :key="brand.key"
                    type="button"
                    class="rounded-full border px-3 py-1.5 text-xs font-semibold transition"
                    :class="selectedBrand === brand.name ? 'border-primary bg-primary/10 text-primary' : 'border-default text-muted hover:border-primary/50 hover:text-highlighted'"
                    @click="selectedBrand = brand.name"
                  >
                    {{ brand.name }}
                    <span class="ml-1 font-normal opacity-70">{{ brand.market }}</span>
                  </button>
                  <span v-if="filteredPlatformBrands.length === 0" class="py-1 text-xs text-muted">No matching demo brands.</span>
                </div>
              </div>
              <NuxtLink to="/knowledge-base" class="mt-4 inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline">
                Read integration guides
                <UIcon name="i-lucide-arrow-right" class="size-3.5" />
              </NuxtLink>
            </UCard>
          </div>
        </template>
      </UPageHero>
    </div>

    <!-- 2. Sportsbook operators and industry partner names -->
    <PartnerLogoStrip
      id="partners"
      title="Supporting operators and partners across the sports betting ecosystem"
      :partners="partnerBrands"
    />

    <!-- 3. Key Metrics & Statistics -->
    <UPageSection class="py-12">
      <div class="rounded-2xl bg-linear-to-b from-brand-50 to-white p-4 shadow-sm shadow-brand-500/10 ring-1 ring-brand-100 lg:rounded-3xl lg:p-7 dark:from-brand-950/30 dark:to-gray-900/10 dark:ring-brand-900">
        <div class="flex flex-col divide-y divide-brand-100 lg:flex-row lg:divide-x lg:divide-y-0 dark:divide-brand-950">
          <div
            v-for="stat in stats"
            :key="stat.value"
            class="flex flex-1 flex-col items-center gap-y-4 p-6 text-center lg:p-10 lg:py-0"
          >
            <p class="text-primary font-mono text-sm uppercase tracking-tight">
              {{ stat.eyebrow }}
            </p>
            <p class="text-pretty text-3xl font-semibold tracking-tight sm:text-4xl lg:scale-110 dark:text-white">
              {{ stat.value }}
            </p>
            <p class="font-medium tracking-tight text-gray-700 dark:text-gray-300">
              {{ stat.title }}
            </p>
            <p class="text-gray-600 text-sm dark:text-gray-400">
              {{ stat.description }}
            </p>
          </div>
        </div>
      </div>
    </UPageSection>

    <!-- 4. Enrichment Features Section -->
    <UPageSection
      title="Build SaaS products made for the markets you serve"
      description="From sports and aggregated casino products to retail agent systems built for African markets, we help businesses turn complex ideas into scalable digital experiences."
      headline="SaaS product development"
      orientation="horizontal"
      :features="[
        {
          title: 'Sports & Gaming Platforms',
          description: 'Integrated sports and aggregated casino products',
          icon: 'i-lucide-globe'
        },
        {
          title: 'Retail Agent Systems',
          description: 'Purpose-built platforms for African retail markets',
          icon: 'i-lucide-store'
        },
        {
          title: 'Market-led SaaS',
          description: 'Scalable software shaped by local market expertise',
          icon: 'i-lucide-share-2'
        }
      ]"
    >
      <div class="rounded-2xl bg-brand-50 p-7 dark:bg-brand-950/30">
        <p class="text-xs font-bold uppercase tracking-[0.18em] text-primary">Built around operator needs</p>
        <p class="mt-4 text-2xl font-semibold leading-snug text-highlighted">One connected platform for sportsbook, games, payments and retail.</p>
        <NuxtLink to="/company/what-we-do" class="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline">
          Meet SBT Capital
          <UIcon name="i-lucide-arrow-right" class="size-4" />
        </NuxtLink>
      </div>
    </UPageSection>

    <!-- 5. Search Features Section -->
    <UPageSection
      title="Find the events, games and integrations you need"
      description="Build a connected sportsbook experience with event data, markets, virtual games, payments and operator integrations available through one platform."
      headline="One connected ecosystem"
      orientation="horizontal"
      reverse
    >
      <UPageGrid :cols="2">
        <UPageCard
          title="Sports and market data"
          description="Connect fixtures, in-play events, competitions and bet markets for your target regions."
          icon="i-lucide-trophy"
        />
        <UPageCard
          title="Games and integrations"
          description="Bring virtual games, payment providers and platform partners into a consistent operator experience."
          icon="i-lucide-plug-zap"
        />
      </UPageGrid>
    </UPageSection>

    <!-- 6. Reusable SDK showcase for our sports and retail gaming APIs -->
    <UPageSection
      id="products"
      headline="Plug-and-play APIs"
      title="Launch sports and virtual gaming experiences faster"
      description="Choose an integration and explore a simple SDK flow. These examples show how our sports betting and retail virtual games APIs can fit into your product."
    >
      <SdkShowcase :products="sdkProducts" />
    </UPageSection>

    <!-- 7. Sportsbook platform value propositions -->
    <UPageSection
      id="company"
      headline="One platform, many kinds of partners"
      title="Everything you need to run and grow a sportsbook business"
      description="We bring sportsbook operations, retail distribution and partner collaboration together in one adaptable SaaS platform—built for specialist operators and organisations beyond the software industry."
    >
      <UPageGrid :cols="{ sm: 1, md: 2, lg: 3 }">
        <UPageCard
          title="A sportsbook, ready to make your own"
          description="Launch with the core sportsbook experience in place, then tailor the brand, markets and customer journey to your business."
          icon="i-lucide-trophy"
        />
        <UPageCard
          title="Online and retail, working together"
          description="Support digital customers and physical agent networks with a consistent operating experience across channels."
          icon="i-lucide-store"
        />
        <UPageCard
          title="Tools for day-to-day operations"
          description="Bring player journeys, bet activity and operational workflows into one platform so teams can manage the business more effectively."
          icon="i-lucide-layout-dashboard"
        />
        <UPageCard
          title="Built for partnerships beyond tech"
          description="Work with retailers, payment providers, sponsors and public-sector organisations. The platform can support initiatives with partners such as Ogun State Government."
          icon="i-lucide-handshake"
        />
        <UPageCard
          title="Integrations that fit your ecosystem"
          description="Connect the services your operation depends on, from payments and identity checks to game and data providers."
          icon="i-lucide-plug-zap"
        />
        <UPageCard
          title="A platform that can grow with you"
          description="Start with the capabilities you need today and expand into new channels, partner programmes and markets over time."
          icon="i-lucide-chart-no-axes-combined"
        />
      </UPageGrid>
    </UPageSection>

    <!-- 8. White-label and custom sportsbook project enquiries -->
    <SportsbookPricing contact-email="hello@sbtcapital.ng" />
  </UPage>
</template>
