<script setup lang="ts">
import { computed, ref } from 'vue'

type CarouselSlide = {
  eyebrow: string
  title: string
  description: string
  icon: string
  details: string[]
}

const props = defineProps<{
  eyebrow?: string
  title: string
  description?: string
  slides: CarouselSlide[]
}>()

const activeIndex = ref(0)
const activeSlide = computed(() => props.slides[activeIndex.value])
const slideCount = computed(() => props.slides.length)

function showSlide(index: number) {
  if (!slideCount.value)
    return

  activeIndex.value = (index + slideCount.value) % slideCount.value
}
</script>

<template>
  <UPageSection
    :headline="eyebrow"
    :title="title"
    :description="description"
  >
    <section
      v-if="activeSlide"
      class="relative isolate overflow-hidden rounded-3xl bg-brand-50 ring-1 ring-brand-200 dark:bg-gray-950 dark:ring-gray-800"
      aria-roledescription="carousel"
      aria-label="Sportsbook platform capabilities"
    >
      <div class="pointer-events-none absolute inset-0 -z-10 bg-linear-to-br from-brand-200/60 via-transparent to-brand-100/40 dark:from-brand-950/40 dark:to-gray-950" />

      <div class="grid min-h-112 lg:grid-cols-2">
        <div class="flex flex-col p-6 sm:p-9 lg:p-12">
          <div class="flex items-center gap-3">
            <span class="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-800 ring-1 ring-brand-200 dark:bg-brand-950/60 dark:text-brand-200 dark:ring-brand-900">
              {{ activeSlide.eyebrow }}
            </span>
            <span class="text-xs font-medium tabular-nums text-gray-500 dark:text-gray-400">
              {{ String(activeIndex + 1).padStart(2, '0') }} / {{ String(slideCount).padStart(2, '0') }}
            </span>
          </div>

          <div
            class="my-auto py-9"
            aria-live="polite"
            aria-atomic="true"
          >
            <h3 class="max-w-xl text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl dark:text-white">
              {{ activeSlide.title }}
            </h3>
            <p class="mt-4 max-w-xl text-base leading-7 text-gray-700 dark:text-gray-300">
              {{ activeSlide.description }}
            </p>
            <ul class="mt-6 grid gap-3">
              <li
                v-for="detail in activeSlide.details"
                :key="detail"
                class="flex items-start gap-2.5 text-sm font-medium text-gray-800 dark:text-gray-200"
              >
                <UIcon
                  name="i-lucide-check"
                  class="mt-0.5 size-4 shrink-0 text-brand-700 dark:text-brand-300"
                  aria-hidden="true"
                />
                {{ detail }}
              </li>
            </ul>
          </div>

          <div class="flex flex-wrap items-center justify-between gap-4 border-t border-brand-200 pt-5 dark:border-gray-800">
            <div
              class="flex items-center gap-2"
              role="group"
              aria-label="Choose a platform capability"
            >
              <button
                v-for="(slide, index) in slides"
                :key="slide.title"
                type="button"
                class="h-2.5 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                :class="activeIndex === index ? 'w-8 bg-brand-700 dark:bg-brand-300' : 'w-2.5 bg-brand-300 hover:bg-brand-500 dark:bg-gray-700 dark:hover:bg-brand-700'"
                :aria-label="`Show ${slide.title}`"
                :aria-current="activeIndex === index ? 'true' : undefined"
                @click="showSlide(index)"
              />
            </div>

            <div class="flex items-center gap-2">
              <UButton
                color="neutral"
                variant="outline"
                size="sm"
                icon="i-lucide-arrow-left"
                aria-label="Previous capability"
                @click="showSlide(activeIndex - 1)"
              />
              <UButton
                color="neutral"
                variant="outline"
                size="sm"
                icon="i-lucide-arrow-right"
                aria-label="Next capability"
                @click="showSlide(activeIndex + 1)"
              />
            </div>
          </div>
        </div>

        <div class="relative flex min-h-72 items-center justify-center overflow-hidden bg-brand-100/80 p-6 dark:bg-gray-900 sm:p-10">
          <div class="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full border border-brand-300/70 dark:border-brand-800/70" />
          <div class="pointer-events-none absolute -right-5 -top-5 size-44 rounded-full border border-brand-300/60 dark:border-brand-800/60" />
          <div class="pointer-events-none absolute -bottom-24 -left-16 size-72 rounded-full bg-brand-300/25 blur-2xl dark:bg-brand-900/20" />

          <div
            class="relative w-full max-w-md"
            aria-hidden="true"
          >
            <div class="rounded-3xl bg-white p-5 shadow-xl shadow-brand-950/10 ring-1 ring-brand-200 sm:p-7 dark:bg-gray-950 dark:ring-gray-800">
              <div class="flex items-center justify-between border-b border-gray-100 pb-4 dark:border-gray-800">
                <div class="flex items-center gap-3">
                  <span class="flex size-11 items-center justify-center rounded-2xl bg-brand-100 text-brand-800 dark:bg-brand-950 dark:text-brand-200">
                    <UIcon
                      :name="activeSlide.icon"
                      class="size-5"
                    />
                  </span>
                  <div>
                    <p class="text-sm font-semibold text-gray-950 dark:text-white">
                      {{ activeSlide.eyebrow }}
                    </p>
                    <p class="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                      Platform module
                    </p>
                  </div>
                </div>
                <span class="flex size-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                  <UIcon
                    name="i-lucide-check"
                    class="size-4"
                  />
                </span>
              </div>

              <div class="mt-5 rounded-2xl bg-gray-50 p-4 dark:bg-gray-900">
                <div class="mb-4 flex items-center justify-between">
                  <span class="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Configured for your operation</span>
                  <UIcon
                    name="i-lucide-sliders-horizontal"
                    class="size-4 text-brand-700 dark:text-brand-300"
                  />
                </div>
                <div class="grid gap-2.5">
                  <div
                    v-for="(detail, index) in activeSlide.details"
                    :key="detail"
                    class="flex items-center gap-3 rounded-xl bg-white px-3 py-3 ring-1 ring-gray-100 dark:bg-gray-950 dark:ring-gray-800"
                  >
                    <span class="flex size-7 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-xs font-bold text-brand-800 dark:bg-brand-950 dark:text-brand-200">
                      {{ String(index + 1).padStart(2, '0') }}
                    </span>
                    <span class="min-w-0 flex-1 text-xs font-medium text-gray-700 dark:text-gray-300">{{ detail }}</span>
                    <UIcon
                      name="i-lucide-check"
                      class="size-4 shrink-0 text-emerald-500"
                    />
                  </div>
                </div>
              </div>

              <div class="mt-4 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>Scope confirmed together</span>
                <span class="flex items-center gap-1.5"><span class="size-1.5 rounded-full bg-brand-500" /> Modular</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </UPageSection>
</template>
