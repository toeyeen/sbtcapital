<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  description: string
  highlights: string[]
  ctaLabel: string
  ctaTo: string
  productLabel?: string
  visualSubtitle?: string
  productIcon?: string
  statusLabel?: string
  highlightIcons?: string[]
  metrics?: { label: string, value: string }[]
}>()

const defaultMetrics = [
  { label: 'Channels', value: 'Online + retail' },
  { label: 'Experience', value: 'Your brand' },
  { label: 'Delivery', value: 'Scoped with you' }
]
</script>

<template>
  <section class="relative isolate overflow-hidden bg-brand-50 dark:bg-gray-950">
    <div class="pointer-events-none absolute inset-0 bg-linear-to-br from-brand-200 via-brand-50 to-brand-100 dark:from-brand-950/70 dark:via-gray-950 dark:to-brand-900/40" />
    <div class="pointer-events-none absolute -right-24 -top-32 size-136 rounded-full border border-brand-300/50 dark:border-brand-800/40" />
    <div class="pointer-events-none absolute -right-8 -top-16 size-104 rounded-full border border-brand-300/50 dark:border-brand-800/40" />

    <UPageHero
      :headline="eyebrow"
      :title="title"
      :description="description"
      orientation="horizontal"
      class="relative z-10"
      :ui="{
        container: 'py-20 sm:py-24 lg:py-28',
        headline: 'text-brand-800 dark:text-brand-200',
        title: 'text-gray-950 dark:text-white',
        description: 'text-gray-700 dark:text-gray-300'
      }"
    >
      <template #links>
        <UButton
          :label="ctaLabel"
          :to="ctaTo"
          color="primary"
          size="lg"
          trailing-icon="i-lucide-arrow-right"
        />
      </template>

      <template #default>
        <div class="relative mx-auto w-full max-w-xl overflow-hidden rounded-3xl bg-white/90 p-6 text-gray-950 shadow-2xl shadow-brand-950/10 ring-1 ring-brand-200/80 backdrop-blur-sm sm:p-8 dark:bg-gray-900/90 dark:text-white dark:ring-gray-700">
          <div class="pointer-events-none absolute inset-0 bg-linear-to-br from-brand-100/90 via-transparent to-brand-50/50 dark:from-brand-950/50 dark:to-transparent" />
          <div class="relative">
            <div class="flex items-center justify-between border-b border-brand-200 pb-5 dark:border-gray-700">
              <div class="flex items-center gap-3">
                <span class="flex size-11 items-center justify-center rounded-2xl bg-brand-500 text-white shadow-lg shadow-brand-500/20">
                  <UIcon
                    :name="productIcon ?? 'i-lucide-trophy'"
                    class="size-6"
                  />
                </span>
                <div>
                  <p class="font-semibold">
                    {{ productLabel ?? 'Your sportsbook platform' }}
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    {{ visualSubtitle ?? 'Built around your operation' }}
                  </p>
                </div>
              </div>
              <span class="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-800 ring-1 ring-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-200 dark:ring-emerald-900">
                <span class="size-2 rounded-full bg-emerald-500" />
                {{ statusLabel ?? 'Ready to configure' }}
              </span>
            </div>

            <ul class="mt-6 grid gap-3">
              <li
                v-for="(highlight, index) in highlights"
                :key="highlight"
                class="flex items-center gap-3 rounded-xl bg-white/80 px-4 py-3 ring-1 ring-brand-100 dark:bg-gray-950/70 dark:ring-gray-800"
              >
                <span class="flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand-100 text-brand-800 dark:bg-brand-950 dark:text-brand-200">
                  <UIcon
                    :name="highlightIcons?.[index] ?? (index === 0 ? 'i-lucide-panels-top-left' : index === 1 ? 'i-lucide-plug-zap' : 'i-lucide-store')"
                    class="size-4"
                  />
                </span>
                <span class="text-sm text-gray-800 dark:text-gray-200">
                  {{ highlight }}
                </span>
                <UIcon
                  name="i-lucide-check"
                  class="ml-auto size-4 text-emerald-600 dark:text-emerald-400"
                />
              </li>
            </ul>

            <div class="mt-6 grid grid-cols-3 gap-3">
              <div
                v-for="metric in metrics ?? defaultMetrics"
                :key="metric.label"
                class="rounded-xl bg-brand-50 p-3 ring-1 ring-brand-100 dark:bg-gray-950/70 dark:ring-gray-800"
              >
                <p class="text-[0.65rem] uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  {{ metric.label }}
                </p>
                <p class="mt-1 text-sm font-semibold">
                  {{ metric.value }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </template>
    </UPageHero>
  </section>
</template>
