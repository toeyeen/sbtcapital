<script setup lang="ts">
const enquiryLink = computed(() => {
  const query = new URLSearchParams({
    subject: 'Custom sportsbook platform discussion',
    body: 'Hello, I would like to discuss a custom sportsbook platform.\n\nOrganisation:\nTarget market:\nKey requirements:\nPreferred timeline:\n'
  })

  return `mailto:hello@sbtcapital.ng?${query.toString()}`
})

const heroHighlights = [
  'A branded sportsbook experience',
  'Integrations scoped to your ecosystem',
  'Options for online and retail operations'
]

const platformBenefits = [
  {
    title: 'Your brand and customer journey',
    description: 'Shape the look, language and key flows around your operator, audience and local market.',
    icon: 'i-lucide-panels-top-left'
  },
  {
    title: 'Integration-led architecture',
    description: 'Plan connections to odds, payments, identity, game content and other providers around your requirements.',
    icon: 'i-lucide-plug-zap'
  },
  {
    title: 'Online and retail workflows',
    description: 'Bring digital experiences and agent or retail operations into a platform plan that fits your distribution model.',
    icon: 'i-lucide-store'
  },
  {
    title: 'Operational visibility',
    description: 'Define the back-office views, reporting and controls your team needs for day-to-day operations.',
    icon: 'i-lucide-chart-no-axes-combined'
  },
  {
    title: 'A modular product scope',
    description: 'Prioritise the capabilities needed for launch and plan future additions without overbuilding at the start.',
    icon: 'i-lucide-blocks'
  },
  {
    title: 'Partner-ready delivery',
    description: 'Coordinate technical requirements with operators, retailers, providers and non-technology partners.',
    icon: 'i-lucide-handshake'
  }
]

const includedCapabilities = [
  {
    title: 'Sports data and market connections',
    description: 'Plan event, market and odds-feed integrations with the providers selected for your business.',
    icon: 'i-lucide-radio-tower'
  },
  {
    title: 'Branded frontend experience',
    description: 'Design responsive player journeys for the devices and channels your customers use.',
    icon: 'i-lucide-smartphone'
  },
  {
    title: 'Payments and player services',
    description: 'Scope integrations for payments, identity checks and account services based on market availability.',
    icon: 'i-lucide-wallet-cards'
  },
  {
    title: 'Retail and agent tools',
    description: 'Explore role-based workflows for locations, agents and partners where a retail channel is part of the model.',
    icon: 'i-lucide-store'
  }
]

const packageSlides = [
  {
    eyebrow: 'Payments and settlement',
    title: 'Make the cashier fit your market',
    description: 'Plan deposit, withdrawal and settlement journeys around the payment providers and operating model available in your target market.',
    icon: 'i-lucide-wallet-cards',
    details: [
      'Map payment providers during discovery',
      'Design clear deposit and withdrawal flows',
      'Confirm currencies and settlement needs'
    ]
  },
  {
    eyebrow: 'Market connections',
    title: 'Connect the sports content you need',
    description: 'Assess event, market and odds-feed requirements with the providers that fit your product, commercial model and target territory.',
    icon: 'i-lucide-radio-tower',
    details: [
      'Define sports and event coverage',
      'Review provider and data dependencies',
      'Plan pre-match and in-play journeys'
    ]
  },
  {
    eyebrow: 'Frontend and brand',
    title: 'Create a player experience that feels like yours',
    description: 'Choose a tailored branded interface or discuss a more bespoke frontend that supports the customer journey you want to offer.',
    icon: 'i-lucide-panels-top-left',
    details: [
      'Shape brand, layout and navigation',
      'Design responsive mobile-first flows',
      'Align the frontend scope to your product'
    ]
  },
  {
    eyebrow: 'Hosting and operations',
    title: 'Plan for stable, secure operations',
    description: 'Discuss hosting, monitoring, backup and security requirements as part of the solution architecture and delivery scope.',
    icon: 'i-lucide-shield-check',
    details: [
      'Agree environment and hosting needs',
      'Identify monitoring and support expectations',
      'Review security and data responsibilities'
    ]
  },
  {
    eyebrow: 'Localisation and channels',
    title: 'Adapt the product for your audience',
    description: 'Consider the language, currency, retail workflows and partner requirements relevant to each market you plan to serve.',
    icon: 'i-lucide-globe-2',
    details: [
      'Plan language and currency needs',
      'Consider retail and agent workflows',
      'Coordinate requirements across partners'
    ]
  }
]

const deliverySteps = [
  {
    title: 'Discover and scope',
    description: 'Align on your market, operating model, users, integrations and launch priorities.'
  },
  {
    title: 'Design the solution',
    description: 'Agree the product architecture, delivery phases, responsibilities and commercial proposal.'
  },
  {
    title: 'Build and integrate',
    description: 'Configure and develop the agreed experience, connecting the selected providers and workflows.'
  },
  {
    title: 'Test and prepare launch',
    description: 'Validate the agreed journeys with your team and plan release, operations and ongoing improvements.'
  }
]

const questions = [
  {
    question: 'Is this a ready-made white-label product or a custom build?',
    answer: 'We can discuss a white-label integration or a more tailored platform scope. The right approach depends on your brand, operating model, integrations and target market; we will clarify that during discovery.'
  },
  {
    question: 'Can the platform support both online and retail operations?',
    answer: 'Online and retail workflows can be included in the solution discussion. The final capabilities and integrations depend on the requirements, available providers and agreed scope.'
  },
  {
    question: 'How much does a custom platform cost?',
    answer: 'Custom work is quoted after discussing the requirements, integrations and delivery phases. For a white-label integration, the homepage lists an indicative starting price of $4,000; revenue-share and other commercial terms are agreed individually.'
  },
  {
    question: 'Does SBT Capital provide a gambling licence?',
    answer: 'This page describes software and integration services, not legal or licensing advice. Licensing responsibility and market eligibility must be confirmed with the relevant regulators and professional advisers for each jurisdiction.'
  },
  {
    question: 'How do we get started?',
    answer: 'Send us a short description of your organisation, target market, launch goals and any required integrations. Our team can then arrange a discussion and recommend next steps.'
  }
]

useSeoMeta({
  title: 'Custom Sportsbook Platform Development | SBT Capital',
  description: 'Plan a sportsbook platform around your brand, operating model and market. Discuss custom development and integrations with SBT Capital.'
})
</script>

<template>
  <UPage>
    <ProductHeroSection
      eyebrow="Custom sportsbook platform development"
      title="A sportsbook platform shaped around your market"
      description="Bring your product vision, operating model and partner ecosystem together. We work with you to scope the sportsbook experience and integrations that make sense for your business."
      :highlights="heroHighlights"
      cta-label="Discuss your platform"
      :cta-to="enquiryLink"
    />

    <ProductFeatureSection
      eyebrow="Designed around the operation"
      title="Technology that fits the way you want to work"
      description="Start with the needs of your players, teams and partners. Then define a practical platform scope around them."
      :features="platformBenefits"
    />

    <ProductCarouselSection
      eyebrow="A considered launch package"
      title="What could be included in your sportsbook platform"
      description="Explore the areas we can shape together. The final package, service levels and third-party integrations are confirmed in your project proposal."
      :slides="packageSlides"
    />

    <ProductFeatureSection
      eyebrow="Platform building blocks"
      title="Bring the right capabilities together"
      description="A modular product plan keeps the initial scope focused while leaving room to extend as your operation grows."
      :features="includedCapabilities"
      :columns="2"
    />

    <ProductDeliverySection
      eyebrow="From idea to launch plan"
      title="A clear path from requirements to release"
      description="The delivery approach is phased so priorities, dependencies and decisions stay visible throughout the project."
      :steps="deliverySteps"
    />

    <ProductFaqSection
      title="Questions about a custom sportsbook platform?"
      description="Discuss scope, integrations and the right commercial approach with our team."
      :questions="questions"
    />

    <UPageCTA
      id="project-enquiry"
      title="Tell us what you want to build"
      description="Share your target market, operating model and must-have integrations. We’ll arrange a conversation about the right next steps."
      align="center"
    >
      <template #links>
        <UButton
          :to="enquiryLink"
          label="Discuss your platform"
          color="primary"
          size="lg"
          trailing-icon="i-lucide-arrow-up-right"
        />
      </template>
    </UPageCTA>
  </UPage>
</template>
