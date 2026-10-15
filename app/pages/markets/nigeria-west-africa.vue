<script setup lang="ts">
const features = [
  { title: 'A platform shaped by local context', description: 'SBT Capital was founded in Nigeria to build iGaming technology with a closer understanding of African operators and their customers.', icon: 'i-lucide-map-pin' },
  { title: 'One connected operation', description: 'Bring sportsbook, games, payments and retail workflows together under an operator’s brand, with the scope agreed for each launch.', icon: 'i-lucide-panels-top-left' },
  { title: 'Plan each market deliberately', description: 'For expansion across West Africa, work with our team to scope local requirements, partners and operational needs market by market.', icon: 'i-lucide-route' }
]

const title = 'Sportsbook technology built with Nigeria in mind'
const description = 'SBT Capital is a Nigerian-founded iGaming technology company. We build sportsbook and retail capabilities for operators who want a platform partner that understands the region and can plan expansion around local needs.'
useSeoMeta({ title: `${title} | SBT Capital`, description, ogTitle: title, ogDescription: description })
</script>

<template>
  <MarketCapabilityPage
    eyebrow="Markets / Nigeria & West Africa"
    :title="title"
    :description="description"
    :highlights="['Nigerian-founded platform partner', 'Sportsbook, payments and retail workflows', 'Expansion scoped market by market']"
    product-label="A platform for local operators"
    visual-subtitle="Sportsbook · games · retail"
    product-icon="i-lucide-map"
    :metrics="[{ label: 'Origin', value: 'Nigeria' }, { label: 'Platform', value: 'White-label' }, { label: 'Expansion', value: 'By market' }]"
    section-eyebrow="Designed for the way operators work"
    section-title="Connect the pieces of your operation"
    section-description="A sportsbook launch depends on more than the front end. SBT Capital brings the core product together and works with each operator to define integrations and rollout needs."
    :features="features"
    closing-title="Planning a launch in Nigeria or West Africa?"
    closing-description="Tell us about your target market, operating model and launch goals. We’ll discuss a practical platform scope with your team."
  />
</template>
