<script setup lang="ts">
type PageFeature = { title: string, description: string, icon: string }

defineProps<{
  eyebrow: string
  title: string
  description: string
  highlights: string[]
  productLabel: string
  visualSubtitle: string
  productIcon: string
  metrics: { label: string, value: string }[]
  sectionEyebrow: string
  sectionTitle: string
  sectionDescription: string
  features: PageFeature[]
  closingTitle: string
  closingDescription: string
}>()
</script>

<template>
  <UPage>
    <ProductHeroSection
      :eyebrow="eyebrow"
      :title="title"
      :description="description"
      :highlights="highlights"
      cta-label="Discuss your market"
      cta-to="/contact-us"
      :product-label="productLabel"
      :visual-subtitle="visualSubtitle"
      :product-icon="productIcon"
      status-label="Built around your operation"
      :metrics="metrics"
    />

    <ProductFeatureSection
      :eyebrow="sectionEyebrow"
      :title="sectionTitle"
      :description="sectionDescription"
      :features="features"
    />

    <section class="border-t border-default bg-muted/30">
      <UContainer class="grid gap-6 py-14 sm:py-18 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h2 class="text-2xl font-bold tracking-tight text-highlighted sm:text-3xl">{{ closingTitle }}</h2>
          <p class="mt-3 max-w-3xl leading-7 text-muted">{{ closingDescription }}</p>
        </div>
        <UButton to="/contact-us" label="Talk to our team" trailing-icon="i-lucide-arrow-right" size="lg" />
      </UContainer>
    </section>
  </UPage>
</template>
