<script setup lang="ts">
const features = [
  { title: 'Experience operating in Kenya', description: 'SBT Capital expanded operations into Kenya in 2024, adding East Africa to its growing footprint across the continent.', icon: 'i-lucide-map-pin' },
  { title: 'A connected sportsbook stack', description: 'Combine a branded sportsbook experience with games, payment integrations and operational tools within one platform.', icon: 'i-lucide-panels-top-left' },
  { title: 'Local requirements, clearly scoped', description: 'Market-specific partners, workflows and rollout plans are reviewed with each operator before implementation.', icon: 'i-lucide-list-checks' }
]

const title = 'A sportsbook platform for Kenya and East Africa'
const description = 'SBT Capital expanded into Kenya in 2024. Our platform gives operators a connected foundation for sportsbook, games and retail, with local integrations and rollout requirements scoped to the market.'
useSeoMeta({ title: `${title} | SBT Capital`, description, ogTitle: title, ogDescription: description })
</script>

<template>
  <MarketCapabilityPage
    eyebrow="Markets / Kenya & East Africa"
    :title="title"
    :description="description"
    :highlights="['Operations expanded into Kenya in 2024', 'Sportsbook, games and retail in one platform', 'Local integration scope defined with operators']"
    product-label="Operator platform"
    visual-subtitle="Configured for your market"
    product-icon="i-lucide-globe-2"
    :metrics="[{ label: 'Presence', value: 'Kenya' }, { label: 'Experience', value: 'Since 2024' }, { label: 'Rollout', value: 'Operator-led' }]"
    section-eyebrow="East Africa"
    section-title="Technology that supports the whole operation"
    section-description="The platform connects customer-facing sportsbook experiences with the tools and integrations an operator needs to run its business."
    :features="features"
    closing-title="Exploring a Kenya or East Africa launch?"
    closing-description="Share your target market and operating model with us. We can work through the product scope and the integrations needed for your launch."
  />
</template>
