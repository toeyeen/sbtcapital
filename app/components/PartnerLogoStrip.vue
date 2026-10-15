<script setup lang="ts">
type PartnerBrand = {
  name: string
  descriptor?: string
  icon?: string
  wordmarkClass?: string
  logoUrl?: string
  logoClass?: string
}

defineProps<{
  title: string
  partners: PartnerBrand[]
}>()
</script>

<template>
  <section class="mx-auto mt-16 flex w-full max-w-5xl flex-col items-center gap-7 px-4 text-center sm:mt-24 sm:gap-9">
    <h2 class="text-sm font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">
      {{ title }}
    </h2>

    <ul class="grid w-full grid-cols-3 items-center gap-x-3 gap-y-7 sm:gap-x-6">
      <li
        v-for="partner in partners"
        :key="partner.name"
        class="flex min-h-14 items-center justify-center"
        :aria-label="partner.name"
      >
        <div class="flex min-h-14 w-full flex-col items-center justify-center gap-2 text-gray-600 transition-colors hover:text-gray-950 dark:text-gray-400 dark:hover:text-white">
          <img
            v-if="partner.logoUrl"
            :src="partner.logoUrl"
            :alt="`${partner.name} logo`"
            class="max-h-12 max-w-36 object-contain"
            :class="partner.logoClass"
            loading="lazy"
            decoding="async"
          >
          <UIcon
            v-else
            :name="partner.icon"
            class="size-6 shrink-0 text-primary"
            aria-hidden="true"
          />
          <span
            v-if="!partner.logoUrl"
            class="text-center text-base font-extrabold tracking-tight sm:text-lg"
            :class="partner.wordmarkClass"
          >{{ partner.name }}</span>
          <span
            v-if="partner.descriptor"
            class="text-center text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-gray-500 dark:text-gray-500"
          >{{ partner.descriptor }}</span>
        </div>
      </li>
    </ul>
  </section>
</template>
