<script setup lang="ts">
const viewport = ref<HTMLDivElement | null>(null)

const technologies = [
  { name: 'Go', icon: 'i-simple-icons-go' },
  { name: 'Apache Kafka', icon: 'i-simple-icons-apachekafka' },
  { name: 'React', icon: 'i-simple-icons-react' },
  { name: 'Vue', icon: 'i-simple-icons-vuedotjs' },
  { name: 'PostgreSQL', icon: 'i-simple-icons-postgresql' },
  { name: 'MongoDB', icon: 'i-simple-icons-mongodb' },
  { name: 'RabbitMQ', icon: 'i-simple-icons-rabbitmq' },
  { name: 'Redis', icon: 'i-simple-icons-redis' },
  { name: 'TypeScript', icon: 'i-simple-icons-typescript' },
  { name: 'ClickHouse', icon: 'i-simple-icons-clickhouse' },
  { name: 'Elasticsearch', icon: 'i-simple-icons-elasticsearch' }
]

function moveCarousel(direction: -1 | 1) {
  viewport.value?.scrollBy({ left: direction * 292, behavior: 'smooth' })
}
</script>

<template>
  <section aria-label="Technology logos" class="stack-showcase w-full min-w-0 max-w-full overflow-hidden">
    <div class="mb-5 flex items-center justify-end gap-2">
      <button
        type="button"
        class="flex size-11 items-center justify-center rounded-full border border-default bg-white text-highlighted transition hover:border-primary hover:text-primary dark:bg-gray-900"
        aria-label="Scroll technology logos left"
        @click="moveCarousel(-1)"
      >
        <UIcon name="i-lucide-arrow-left" class="size-4" />
      </button>
      <button
        type="button"
        class="flex size-11 items-center justify-center rounded-full border border-default bg-white text-highlighted transition hover:border-primary hover:text-primary dark:bg-gray-900"
        aria-label="Scroll technology logos right"
        @click="moveCarousel(1)"
      >
        <UIcon name="i-lucide-arrow-right" class="size-4" />
      </button>
    </div>
    <div
      ref="viewport"
      class="stack-showcase__viewport flex w-full min-w-0 max-w-full snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4"
      tabindex="0"
      aria-label="Scroll through the technologies used at SBT Capital"
    >
      <article
        v-for="technology in technologies"
        :key="technology.name"
        class="flex h-48 w-56 shrink-0 snap-start flex-col items-center justify-center gap-5 rounded-3xl bg-[#f4f4f1] px-6 text-center dark:bg-gray-900 sm:h-56 sm:w-64"
      >
        <UIcon
          :name="technology.icon"
          class="size-14 text-gray-500 dark:text-gray-300"
          aria-hidden="true"
        />
        <h3 class="text-sm font-semibold tracking-wide text-gray-700 dark:text-gray-200">{{ technology.name }}</h3>
      </article>
    </div>
  </section>
</template>

<style scoped>
.stack-showcase__viewport {
  scrollbar-width: none;
}

.stack-showcase__viewport::-webkit-scrollbar {
  display: none;
}
</style>
