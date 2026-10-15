<script setup lang="ts">
const enquiryLink = computed(() => {
  const query = new URLSearchParams({
    subject: 'Retail virtual games platform enquiry',
    body: 'Hello, I would like to discuss a retail virtual games platform.\n\nOrganisation:\nTarget market:\nRetail locations / agent network:\nGame formats of interest:\nPreferred timeline:\n'
  })

  return `mailto:hello@sbtcapital.ng?${query.toString()}`
})

const heroHighlights = [
  'Multiple virtual and instant-play formats',
  'Retail terminal and agent workflows',
  'One integration plan for your operation'
]

const heroIcons = [
  'i-lucide-gamepad-2',
  'i-lucide-monitor-play',
  'i-lucide-plug-zap'
]

const heroMetrics = [
  { label: 'Designed for', value: 'Retail + online' },
  { label: 'Game mix', value: 'Configurable' },
  { label: 'Integration', value: 'Scoped together' }
]

const platformFeatures = [
  {
    title: 'Virtual sports and racing',
    description: 'Bring scheduled, repeatable virtual events such as football, racing and other simulated sports into a retail gaming offer.',
    icon: 'i-lucide-trophy'
  },
  {
    title: 'Number games and Keno-style draws',
    description: 'Explore draw-based formats with configurable rounds, clear result presentation and workflows designed for quick retail sessions.',
    icon: 'i-lucide-dices'
  },
  {
    title: 'Fast-play and instant formats',
    description: 'Add short-session games where available, with clear game rules, round status and results visible to players and agents.',
    icon: 'i-lucide-zap'
  },
  {
    title: 'Retail-first operations',
    description: 'Plan for terminals, agent-assisted play, location-level operations and practical workflows for busy physical venues.',
    icon: 'i-lucide-store'
  },
  {
    title: 'Centralised catalogue and configuration',
    description: 'Organise the available game catalogue, activation rules and market configuration through an agreed operational workflow.',
    icon: 'i-lucide-layout-dashboard'
  },
  {
    title: 'Reporting and settlement visibility',
    description: 'Define the transaction, round and location reporting teams need to reconcile activity and understand operations.',
    icon: 'i-lucide-chart-no-axes-combined'
  }
]

const experienceSlides = [
  {
    eyebrow: 'Virtual sports',
    title: 'Bring the next event closer',
    description: 'Offer compact virtual sports sessions that can complement live fixtures and keep retail screens active between major events.',
    icon: 'i-lucide-trophy',
    details: [
      'Football, racing and other simulated event formats',
      'Clear event countdowns and result presentation',
      'Designed for repeatable, short retail sessions'
    ]
  },
  {
    eyebrow: 'Number games and Keno-style play',
    title: 'Simple draw-based play for retail',
    description: 'Support quick number-selection and draw experiences, with rules and round information presented clearly at the counter or on a terminal.',
    icon: 'i-lucide-dices',
    details: [
      'Configurable draw and round cadence',
      'Easy-to-follow selection and result flow',
      'Potential Keno-style catalogue options, subject to provider availability'
    ]
  },
  {
    eyebrow: 'Instant games',
    title: 'Add variety between scheduled events',
    description: 'Where available, short-session and instant-play formats can broaden the catalogue while keeping game discovery straightforward for players.',
    icon: 'i-lucide-zap',
    details: [
      'Quick entry into clearly explained games',
      'Round status and results surfaced promptly',
      'Catalogue can be tailored to market and venue'
    ]
  },
  {
    eyebrow: 'Retail operations',
    title: 'Make the experience work at the counter',
    description: 'Consider the full retail journey—from agent-assisted ticket creation and payment through to confirmation, settlement and daily reporting.',
    icon: 'i-lucide-store',
    details: [
      'Terminal and agent workflow requirements',
      'Location-aware roles and operational views',
      'Settlement and reporting needs agreed in scope'
    ]
  }
]

const implementationSteps = [
  {
    title: 'Map the retail model',
    description: 'Define locations, agent roles, player journeys, payment flows and operational responsibilities.'
  },
  {
    title: 'Curate the content scope',
    description: 'Select relevant game categories and confirm provider availability, territory rights and commercial terms.'
  },
  {
    title: 'Plan integrations',
    description: 'Agree how terminals, platform services, game providers, payments and reporting will connect.'
  },
  {
    title: 'Test venue workflows',
    description: 'Validate game sessions, transactions, results and operational procedures before a planned rollout.'
  }
]

const questions = [
  {
    question: 'What kinds of games can a retail virtual games catalogue include?',
    answer: 'Depending on supplier availability and market rights, a catalogue may include virtual sports, racing, number games, Keno-style draws and other fast-play formats. The available selection is confirmed during discovery.'
  },
  {
    question: 'Can we include games such as Lucky 6 or NSoft Keno?',
    answer: 'Those are examples of third-party products and formats that may be relevant to a retail catalogue. Their inclusion is not guaranteed: it depends on supplier agreements, territory, licensing, technical compatibility and commercial terms. Mentioning a brand here does not imply an existing partnership or endorsement.'
  },
  {
    question: 'Can the platform support terminals and agent-assisted play?',
    answer: 'Retail terminal and agent-assisted workflows can be included in the project scope. The specific devices, ticket flows, user roles and integrations need to be assessed for your locations and market.'
  },
  {
    question: 'Can retail and online channels share one catalogue?',
    answer: 'A shared catalogue can be explored where providers and market rules allow it. Availability, presentation and configuration may differ by channel, provider and jurisdiction.'
  },
  {
    question: 'How is pricing determined?',
    answer: 'Pricing depends on the number of integrations, game providers, retail devices, locations and operational requirements. We prepare a proposal after understanding the scope and third-party costs.'
  }
]

useSeoMeta({
  title: 'Retail Virtual Games Platform | SBT Capital',
  description: 'Explore a retail virtual games platform concept for virtual sports, draw-based games and agent workflows. Discuss integrations and content availability with SBT Capital.'
})
</script>

<template>
  <UPage>
    <ProductHeroSection
      eyebrow="Retail virtual games platform"
      title="A richer virtual games experience for retail"
      description="Bring virtual sports, draw-based games and fast-play formats together with the terminal, agent and operational workflows your retail network needs."
      product-label="Retail games platform"
      visual-subtitle="Content and workflows, connected"
      product-icon="i-lucide-gamepad-2"
      status-label="Scope your catalogue"
      :highlights="heroHighlights"
      :highlight-icons="heroIcons"
      :metrics="heroMetrics"
      cta-label="Discuss retail games"
      :cta-to="enquiryLink"
    />

    <ProductFeatureSection
      eyebrow="Game formats and operations"
      title="One retail offer, multiple ways to play"
      description="Build a catalogue around the play styles, session lengths and venue workflows that suit your audience."
      :features="platformFeatures"
    />

    <ProductCarouselSection
      eyebrow="Built for retail play"
      title="Explore the experiences your catalogue could bring together"
      description="Move through example content categories and retail workflows. Actual titles, suppliers and market availability are confirmed during commercial and technical scoping."
      :slides="experienceSlides"
    />

    <ProductDeliverySection
      eyebrow="A practical rollout"
      title="From catalogue planning to venue testing"
      description="Align content, technology and day-to-day operations before extending the experience across your retail network."
      :steps="implementationSteps"
    />

    <p class="mx-auto max-w-4xl px-4 pb-8 text-center text-xs leading-5 text-gray-500 dark:text-gray-400">
      Lucky 6 and NSoft Keno are referenced only as examples of third-party game products or formats. No partnership, endorsement or guaranteed availability is implied. All content is subject to provider agreements, territory rights, technical validation and applicable regulatory approvals.
    </p>

    <ProductFaqSection
      title="Questions about retail virtual games?"
      description="Talk with us about game categories, retail workflows, integrations and market requirements."
      :questions="questions"
    />

    <UPageCTA
      id="retail-games-enquiry"
      title="Build a retail games offer for your market"
      description="Tell us about your locations, audience, target territory and game formats. We’ll discuss the technical and commercial options with you."
      align="center"
    >
      <template #links>
        <UButton
          :to="enquiryLink"
          label="Discuss retail games"
          color="primary"
          size="lg"
          trailing-icon="i-lucide-arrow-up-right"
        />
      </template>
    </UPageCTA>
  </UPage>
</template>
