<script setup lang="ts">
const stackGroups = [
  { number: '01', title: 'Build', tools: 'Go, TypeScript, React and Vue', description: 'The languages and interfaces behind reliable services and clear product experiences.' },
  { number: '02', title: 'Connect', tools: 'Kafka and RabbitMQ', description: 'Event streaming and messaging for systems that need to share information.' },
  { number: '03', title: 'Store', tools: 'PostgreSQL, MongoDB and Redis', description: 'Structured records, flexible data and fast access where the product needs it.' },
  { number: '04', title: 'Understand', tools: 'ClickHouse and Elasticsearch', description: 'Analytics and search capabilities for operational data and discovery.' }
]

const title = 'Technology Stack | SBT Capital'
const description = 'Explore the technologies SBT Capital uses across sports betting, payments, gaming, and retail agent platforms.'
useSeoMeta({ title, description, ogTitle: title, ogDescription: description })
</script>

<template>
  <UPage>
    <section class="relative isolate overflow-hidden bg-primary text-white">
      <div class="absolute inset-y-0 right-0 -z-10 hidden w-[42%] bg-brand-600 lg:block" />
      <UContainer class="grid min-h-[31rem] gap-10 py-16 sm:py-20 lg:grid-cols-[1fr_0.72fr] lg:items-center lg:py-24">
        <div class="max-w-3xl">
          <p class="mb-6 text-xs font-bold uppercase tracking-[0.22em] text-white/70">Technology stack</p>
          <h1 class="text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            The right tools for work that matters.
          </h1>
          <p class="mt-7 max-w-2xl text-lg leading-8 text-white/80">
            A dependable platform is built from many parts working well together. These are the core technologies our team uses to build products, connect partners and help operators grow.
          </p>
          <NuxtLink
            to="/contact-us"
            class="mt-9 inline-flex items-center gap-3 border-b border-white/60 pb-2 text-sm font-bold transition hover:border-white"
          >
            Talk to our team
            <UIcon name="i-lucide-arrow-up-right" class="size-4" />
          </NuxtLink>
        </div>

        <div class="relative flex min-h-64 items-center justify-center lg:min-h-[27rem]">
          <svg viewBox="0 0 460 420" fill="none" class="w-full max-w-[27rem]" aria-hidden="true">
            <path d="M56 210h348M230 38v344M108 88l244 244M352 88 108 332" stroke="white" stroke-opacity=".16" />
            <circle cx="230" cy="210" r="154" stroke="white" stroke-opacity=".25" />
            <circle cx="230" cy="210" r="112" stroke="white" stroke-opacity=".2" />
            <circle cx="230" cy="210" r="68" fill="#fff" />
            <text x="230" y="203" text-anchor="middle" fill="#005ce6" font-size="13" font-weight="700" letter-spacing="2">SBT</text>
            <text x="230" y="227" text-anchor="middle" fill="#005ce6" font-size="11" font-weight="600">PLATFORM</text>
            <circle cx="230" cy="56" r="8" fill="#fff" />
            <circle cx="384" cy="210" r="8" fill="#fff" />
            <circle cx="230" cy="364" r="8" fill="#fff" />
            <circle cx="76" cy="210" r="8" fill="#fff" />
            <circle cx="121" cy="101" r="6" fill="#fff" fill-opacity=".65" />
            <circle cx="339" cy="101" r="6" fill="#fff" fill-opacity=".65" />
            <circle cx="339" cy="319" r="6" fill="#fff" fill-opacity=".65" />
            <circle cx="121" cy="319" r="6" fill="#fff" fill-opacity=".65" />
          </svg>
          <span class="absolute left-[8%] top-[22%] text-xs font-bold tracking-wide text-white/80">SERVICES</span>
          <span class="absolute right-[2%] top-[34%] text-xs font-bold tracking-wide text-white/80">DATA</span>
          <span class="absolute bottom-[14%] right-[18%] text-xs font-bold tracking-wide text-white/80">PRODUCT</span>
        </div>
      </UContainer>
    </section>

    <UPageSection
      headline="The tools behind the platform"
      title="A stack built to work together"
      description="Swipe, scroll or use the arrows to explore the technologies in our toolkit."
      class="min-w-0 overflow-hidden"
    >
      <TechnologyStackCarousel />
    </UPageSection>

    <UPageSection class="border-t border-default bg-[#fafaf8] dark:bg-gray-950">
      <div class="grid gap-x-12 md:grid-cols-2">
        <article
          v-for="group in stackGroups"
          :key="group.number"
          class="grid grid-cols-[3.5rem_1fr] gap-5 border-b border-gray-200 py-8 first:pt-0 last:border-0 dark:border-gray-800 md:even:pl-8"
        >
          <span class="pt-1 font-mono text-sm text-primary">{{ group.number }}</span>
          <div>
            <h2 class="text-xl font-bold text-highlighted">{{ group.title }}</h2>
            <p class="mt-2 font-semibold text-gray-700 dark:text-gray-200">{{ group.tools }}</p>
            <p class="mt-2 max-w-lg text-sm leading-6 text-muted">{{ group.description }}</p>
          </div>
        </article>
      </div>
    </UPageSection>
  </UPage>
</template>
