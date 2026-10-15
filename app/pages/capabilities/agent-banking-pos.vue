<script setup lang="ts">
const features = [
  { title: 'Support physical distribution', description: 'Extend an operator’s digital sportsbook with retail and agent workflows through a white-label platform designed for multiple channels.', icon: 'i-lucide-store' },
  { title: 'Connect POS and payment partners', description: 'Plan point-of-sale and payment integrations around the operator’s selected providers and commercial arrangements.', icon: 'i-lucide-credit-card' },
  { title: 'One view of the operation', description: 'Bring customer-facing channels and agent activity into a more coordinated operating model, with implementation scoped to the business.', icon: 'i-lucide-workflow' }
]

const title = 'Connect sportsbook retail, agents and POS workflows'
const description = 'SBT Capital’s white-label platform can support operators combining online sportsbook with retail and agent channels. POS and banking integrations are scoped with the operator and its selected partners.'
useSeoMeta({ title: `${title} | SBT Capital`, description, ogTitle: title, ogDescription: description })
</script>

<template>
  <MarketCapabilityPage
    eyebrow="Platform capability / Retail operations"
    :title="title"
    :description="description"
    :highlights="['White-label agent workflows', 'Retail and online channels connected', 'POS and payment scope aligned to partners']"
    product-label="Retail and agent platform"
    visual-subtitle="Online + physical channels"
    product-icon="i-lucide-store"
    :metrics="[{ label: 'Channels', value: 'Online + retail' }, { label: 'Model', value: 'White-label' }, { label: 'Partners', value: 'Operator-selected' }]"
    section-eyebrow="Retail and agent banking"
    section-title="Make physical channels part of the platform"
    section-description="For operators serving customers online and in person, retail workflows can connect to the same wider sportsbook operation."
    :features="features"
    closing-title="Building an agent or POS channel?"
    closing-description="Talk with us about the operating model, retail footprint and partner systems you want to connect. We’ll help define a sensible implementation scope."
  />
</template>
