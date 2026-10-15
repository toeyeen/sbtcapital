<script setup lang="ts">
import { computed, ref } from 'vue'

type SdkLanguage = 'JavaScript' | 'Python' | 'PHP' | 'Go'

type SdkProduct = {
  id: string
  label: string
  description: string
  icon: string
  code: Record<SdkLanguage, string>
}

const props = defineProps<{
  products: SdkProduct[]
}>()

const languages: { label: SdkLanguage, icon: string }[] = [
  { label: 'JavaScript', icon: 'i-lucide-braces' },
  { label: 'Python', icon: 'i-lucide-code-xml' },
  { label: 'PHP', icon: 'i-lucide-code-xml' },
  { label: 'Go', icon: 'i-lucide-code-xml' }
]

const activeProductId = ref(props.products[0]?.id ?? '')
const activeLanguage = ref<SdkLanguage>('JavaScript')
const copied = ref(false)

const activeProduct = computed(() => props.products.find(product => product.id === activeProductId.value) ?? props.products[0])
const activeCode = computed(() => activeProduct.value?.code[activeLanguage.value] ?? '')

async function copyCode() {
  try {
    await navigator.clipboard.writeText(activeCode.value)
    copied.value = true
    window.setTimeout(() => {
      copied.value = false
    }, 1800)
  } catch {
    copied.value = false
  }
}
</script>

<template>
  <div class="relative isolate overflow-hidden rounded-2xl bg-gray-50 p-5 shadow-sm ring-1 ring-gray-200 dark:bg-gray-950 dark:ring-gray-800 sm:p-8">
    <div class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-primary-500/10 via-transparent to-transparent" />

    <div class="flex flex-col gap-6">
      <div class="grid gap-3 sm:grid-cols-2">
        <button
          v-for="product in products"
          :key="product.id"
          type="button"
          class="group flex min-w-0 items-center justify-between gap-4 rounded-xl px-4 py-4 text-left shadow-sm ring-1 transition duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          :class="activeProductId === product.id
            ? 'bg-white text-gray-950 ring-primary-400 dark:bg-gray-900 dark:text-white dark:ring-primary-500'
            : 'bg-gray-100/80 text-gray-700 ring-gray-200 hover:bg-white dark:bg-gray-900/60 dark:text-gray-300 dark:ring-gray-800 dark:hover:bg-gray-900'"
          :aria-pressed="activeProductId === product.id"
          @click="activeProductId = product.id"
        >
          <span class="flex min-w-0 items-center gap-3">
            <span class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary-500/10 text-primary-600 dark:text-primary-400">
              <UIcon
                :name="product.icon"
                class="size-5"
              />
            </span>
            <span class="min-w-0">
              <span class="block font-semibold">{{ product.label }}</span>
              <span class="mt-1 block text-xs leading-5 text-gray-500 dark:text-gray-400">{{ product.description }}</span>
            </span>
          </span>
          <UIcon
            name="i-lucide-arrow-right"
            class="size-4 shrink-0 text-primary-600 transition-transform group-hover:translate-x-1 dark:text-primary-400"
          />
        </button>
      </div>

      <div class="overflow-hidden rounded-xl bg-gray-900 ring-1 ring-gray-800 dark:bg-gray-950">
        <div class="flex flex-wrap items-center justify-between gap-3 border-b border-gray-800 px-4 py-3 sm:px-5">
          <div
            class="flex flex-wrap gap-2"
            aria-label="Choose a programming language"
          >
            <button
              v-for="language in languages"
              :key="language.label"
              type="button"
              class="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:text-sm"
              :class="activeLanguage === language.label
                ? 'bg-gray-700 text-white'
                : 'text-gray-400 hover:bg-gray-800 hover:text-white'"
              :aria-pressed="activeLanguage === language.label"
              @click="activeLanguage = language.label"
            >
              <UIcon
                :name="language.icon"
                class="size-4"
              />
              {{ language.label }}
            </button>
          </div>
          <UButton
            size="xs"
            color="neutral"
            variant="ghost"
            :icon="copied ? 'i-lucide-check' : 'i-lucide-copy'"
            :label="copied ? 'Copied' : 'Copy code'"
            @click="copyCode"
          />
        </div>

        <pre class="overflow-x-auto p-5 text-left font-mono text-xs leading-6 text-gray-200 sm:p-6 sm:text-sm"><code>{{ activeCode }}</code></pre>
        <div class="flex flex-wrap items-center justify-between gap-2 border-t border-gray-800 px-4 py-3 text-xs text-gray-400 sm:px-5">
          <span><span class="mr-2 inline-block size-2 rounded-full bg-emerald-400" />Plug-and-play integration example</span>
          <span>{{ activeProduct?.label }} · {{ activeLanguage }}</span>
        </div>
      </div>

      <p class="text-xs leading-5 text-gray-500 dark:text-gray-400">
        SDK names and code are illustrative examples to show how an integration could work; availability and endpoints will depend on your project.
      </p>
    </div>
  </div>
</template>
