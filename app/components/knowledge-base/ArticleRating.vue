<script setup lang="ts">
const props = defineProps<{
  articleSlug: string
}>()

const ratingOptions = [
  { id: 'needs-improvement', label: 'Needs improvement', value: 0 },
  { id: 'engaging', label: 'Engaging', value: 1 },
  { id: 'informative', label: 'Informative', value: 2 },
  { id: 'excellent', label: 'Excellent', value: 3 }
]

const currentRating = ref<number | null>(null)
const hasVoted = ref(false)
const showThanks = ref(false)

const storageKey = computed(() => `sbt-article-rating_${props.articleSlug}`)

onMounted(() => {
  if (import.meta.client) {
    const saved = localStorage.getItem(storageKey.value)
    if (saved !== null) {
      currentRating.value = Number(saved)
      hasVoted.value = true
    }
  }
})

function submitRating(val: number) {
  if (hasVoted.value) return
  currentRating.value = val
  hasVoted.value = true
  showThanks.value = true

  if (import.meta.client) {
    localStorage.setItem(storageKey.value, String(val))
  }
}
</script>

<template>
  <div class="my-10 p-6 sm:p-8 rounded-2xl border border-default bg-card/50 backdrop-blur-sm text-center">
    <h3 class="text-base sm:text-lg font-bold text-highlighted mb-4">
      How do you like this article?
    </h3>

    <div class="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
      <button
        v-for="opt in ratingOptions"
        :key="opt.id"
        type="button"
        :disabled="hasVoted"
        :class="[
          'px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border cursor-pointer',
          currentRating === opt.value
            ? 'bg-primary text-primary-foreground border-primary shadow-md scale-105'
            : hasVoted
              ? 'bg-muted/30 text-muted border-default opacity-50 cursor-not-allowed'
              : 'bg-background hover:bg-primary/10 hover:border-primary/50 text-highlighted border-default'
        ]"
        @click="submitRating(opt.value)"
      >
        {{ opt.label }}
      </button>
    </div>

    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
    >
      <div v-if="hasVoted" class="mt-4 text-sm font-medium text-emerald-500 flex items-center justify-center gap-1.5">
        <UIcon name="i-lucide-check-circle" class="w-4 h-4" />
        <span>Thanks for your feedback!</span>
      </div>
    </Transition>
  </div>
</template>

