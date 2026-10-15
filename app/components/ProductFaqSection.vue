<script setup lang="ts">
type ProductQuestion = {
  question: string
  answer: string
}

defineProps<{
  title?: string
  description?: string
  questions: ProductQuestion[]
}>()
</script>

<template>
  <UPageSection
    :title="title ?? 'Frequently asked questions'"
    :description="description"
  >
    <div class="mx-auto box-border w-full min-w-0 max-w-3xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm shadow-gray-950/5 dark:border-gray-800 dark:bg-gray-950">
      <details
        v-for="item in questions"
        :key="item.question"
        class="group box-border w-full min-w-0 border-b border-gray-200 last:border-b-0 dark:border-gray-800"
      >
        <summary class="flex w-full min-w-0 cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-left font-semibold text-gray-900 marker:hidden transition-colors hover:bg-primary-50/60 focus-visible:outline-2 focus-visible:outline-primary sm:px-6 dark:text-white dark:hover:bg-primary-950/30 [&::-webkit-details-marker]:hidden">
          <span class="min-w-0 flex-1 wrap-break-word">{{ item.question }}</span>
          <span class="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-700 ring-1 ring-primary-100 transition-colors group-open:bg-primary group-open:text-white group-open:ring-primary dark:bg-primary-950/60 dark:text-primary-300 dark:ring-primary-900 dark:group-open:text-white">
            <UIcon
              name="i-lucide-plus"
              class="size-4 transition-transform duration-200 group-open:rotate-45"
              aria-hidden="true"
            />
          </span>
        </summary>
        <div class="box-border w-full min-w-0 px-5 pb-5 sm:px-6 sm:pb-6">
          <p class="max-w-none wrap-break-word text-sm leading-7 text-gray-600 dark:text-gray-300">
            {{ item.answer }}
          </p>
        </div>
      </details>
    </div>
  </UPageSection>
</template>
