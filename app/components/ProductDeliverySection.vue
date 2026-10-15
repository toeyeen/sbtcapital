<script setup lang="ts">
type DeliveryStep = {
  title: string
  description: string
}

defineProps<{
  eyebrow?: string
  title: string
  description?: string
  steps: DeliveryStep[]
}>()
</script>

<template>
  <UPageSection
    :headline="eyebrow"
    :title="title"
    :description="description"
  >
    <ol class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <li
        v-for="(step, index) in steps"
        :key="step.title"
        class="relative rounded-2xl bg-gray-50 p-5 ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800"
      >
        <span class="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-sm font-bold text-primary">
          {{ String(index + 1).padStart(2, '0') }}
        </span>
        <h3 class="mt-5 text-base font-semibold text-gray-900 dark:text-white">
          {{ step.title }}
        </h3>
        <p class="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
          {{ step.description }}
        </p>
      </li>
    </ol>
  </UPageSection>
</template>
