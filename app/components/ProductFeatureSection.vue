<script setup lang="ts">
type ProductFeature = {
  title: string
  description: string
  icon: string
}

defineProps<{
  eyebrow?: string
  title: string
  description?: string
  features: ProductFeature[]
  columns?: 2 | 3
}>()
</script>

<template>
  <UPageSection
    :headline="eyebrow"
    :title="title"
    :description="description"
  >
    <UPageGrid :cols="{ sm: 1, md: 2, lg: columns ?? 3 }">
      <UPageCard
        v-for="feature in features"
        :key="feature.title"
        :title="feature.title"
        :description="feature.description"
        :icon="feature.icon"
      />
    </UPageGrid>
  </UPageSection>
</template>
