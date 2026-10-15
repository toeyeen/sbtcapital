<script setup lang="ts">
const features = [
  { title: 'Sports data into the product', description: 'Connect third-party sports and odds feeds to the sportsbook experience so event and market information can be presented to customers.', icon: 'i-lucide-radio-tower' },
  { title: 'Integration shaped to your stack', description: 'Feed selection and implementation are scoped around the operator’s product, provider relationships and technical requirements.', icon: 'i-lucide-plug-zap' },
  { title: 'A consistent operator experience', description: 'Bring feed-powered markets into the same branded sportsbook journey as bet placement and account workflows.', icon: 'i-lucide-panels-top-left' }
]

const title = 'Sports data feeds connected to your sportsbook'
const description = 'Integrate third-party sports and odds data into a branded sportsbook platform. SBT Capital works with operators to scope feed providers and connect data to the product experience.'
useSeoMeta({ title: `${title} | SBT Capital`, description, ogTitle: title, ogDescription: description })
</script>

<template>
  <MarketCapabilityPage
    eyebrow="Platform capability / Sports data"
    :title="title"
    :description="description"
    :highlights="['Third-party feed integrations', 'Event and market data in the sportsbook', 'Provider scope aligned to your operation']"
    product-label="Sportsbook data layer"
    visual-subtitle="Feeds connected to the product"
    product-icon="i-lucide-radio-tower"
    :metrics="[{ label: 'Data', value: 'Sports + odds' }, { label: 'Delivery', value: 'Integrated' }, { label: 'Scope', value: 'Provider-led' }]"
    section-eyebrow="Data integrations"
    section-title="From feed provider to customer experience"
    section-description="Data integrations are part of a working sportsbook stack: they connect provider services to the markets customers browse and the operator manages."
    :features="features"
    closing-title="Need a data integration for your sportsbook?"
    closing-description="Let us know which providers and product requirements you are working with. We’ll review the integration scope with your team."
  />
</template>
