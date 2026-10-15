<script setup lang="ts">
const milestones = [
  {
    year: '2019',
    title: 'The idea takes shape',
    description: 'SBT Capital was officially registered in Nigeria. This was the beginning of the company and the idea to build iGaming technology for a market we knew firsthand.'
  },
  {
    year: '2021',
    title: 'The build begins',
    description: 'Our first year was dedicated to building the platform and bringing the right people together.'
  },
  {
    year: '2022',
    title: 'First partners, 60+ games',
    description: 'We signed our first deal with YangaBet, followed by StarBet and Truewave. By Q4, more than 60 games were integrated.'
  },
  {
    year: '2023',
    title: 'Payments connected',
    description: 'Major payment fintech companies were integrated into the platform.'
  },
  {
    year: '2024',
    title: 'Ghana and Kenya',
    description: 'We expanded operations into two more major African markets.'
  },
  {
    year: '2025',
    title: 'More clients, stronger retail',
    description: 'We grew our client base, integrated BetGames and completed a white-label agent system adapted to different market standards.'
  },
  {
    year: '2026',
    title: 'Across more of Africa',
    description: 'We continued to bring clients in additional African countries onto the platform.'
  }
]

const title = 'About SBT Capital | What We Do'
const description = 'Why SBT Capital was founded, how local iGaming experience shaped the company, and the milestones behind its growth.'
useSeoMeta({ title, description, ogTitle: title, ogDescription: description })
</script>

<template>
  <UPage>
    <section class="relative isolate overflow-hidden bg-primary text-white">
      <div class="absolute inset-y-0 right-0 -z-10 hidden w-[38%] bg-brand-600 lg:block" />
      <UContainer class="py-16 sm:py-20 lg:py-24">
        <div class="grid gap-12 lg:grid-cols-[1fr_0.56fr] lg:items-center">
          <div class="max-w-3xl">
            <p class="mb-6 text-xs font-bold uppercase tracking-[0.22em] text-white/70">About SBT Capital</p>
            <h1 class="text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">Built here, for the market we know best.</h1>
            <p class="mt-7 max-w-2xl text-lg leading-8 text-white/80">
              We are a Nigerian-owned technology company building sportsbook, gaming and retail products for operators across Africa. We started with a simple belief: the people who understand this market should help shape the technology serving it.
            </p>
          </div>

          <div class="relative flex min-h-64 items-center justify-center lg:min-h-80">
            <div class="absolute size-64 rounded-full border border-white/15 sm:size-72" />
            <div class="absolute size-48 rounded-full border border-white/20 sm:size-56" />
            <div class="relative z-10 flex size-36 flex-col items-center justify-center rounded-full bg-white text-brand-600 shadow-2xl sm:size-40">
              <span class="text-4xl font-black tracking-tight">SBT</span>
              <span class="mt-1 text-[10px] font-bold uppercase tracking-[0.22em]">Capital</span>
            </div>
            <span class="absolute left-[13%] top-[18%] size-3 rounded-full bg-white" />
            <span class="absolute right-[10%] top-[31%] size-2 rounded-full bg-white/60" />
            <span class="absolute bottom-[13%] left-[28%] size-2 rounded-full bg-white/75" />
            <span class="absolute bottom-[21%] right-[16%] size-3 rounded-full bg-white" />
          </div>
        </div>

        <div class="mt-12 grid grid-cols-3 border-t border-white/25 pt-6 sm:mt-16 sm:pt-8">
          <div class="pr-3 sm:pr-6">
            <p class="text-2xl font-bold sm:text-3xl">2019</p>
            <p class="mt-1 text-xs text-white/70 sm:text-sm">Idea born & company registered</p>
          </div>
          <div class="border-l border-white/25 px-4 sm:px-8">
            <p class="text-2xl font-bold sm:text-3xl">60+</p>
            <p class="mt-1 text-xs text-white/70 sm:text-sm">Games integrated in 2022</p>
          </div>
          <div class="border-l border-white/25 pl-4 sm:pl-8">
            <p class="text-2xl font-bold sm:text-3xl">Africa</p>
            <p class="mt-1 text-xs text-white/70 sm:text-sm">A growing client footprint</p>
          </div>
        </div>
      </UContainer>
    </section>

    <UContainer class="grid gap-12 py-14 sm:py-20 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
      <aside class="lg:sticky lg:top-28 lg:self-start">
        <p class="text-xs font-bold uppercase tracking-[0.18em] text-primary">Our journey</p>
        <h2 class="mt-3 text-3xl font-bold leading-tight text-highlighted">From a 2019 idea to a platform built for our market.</h2>
        <ol class="mt-8 border-l border-gray-200 dark:border-gray-800">
          <li v-for="milestone in milestones" :key="milestone.year" class="relative pb-6 pl-6 last:pb-0">
            <span class="absolute -left-[0.3rem] top-1 size-2 rounded-full bg-primary ring-4 ring-white dark:ring-gray-950" />
            <p class="font-mono text-sm font-bold text-primary">{{ milestone.year }}</p>
            <p class="mt-1 text-sm font-semibold text-highlighted">{{ milestone.title }}</p>
          </li>
        </ol>
      </aside>

      <article class="max-w-3xl">
        <p class="text-2xl font-semibold leading-snug text-highlighted sm:text-3xl">We saw a strong African iGaming market, but the technology companies serving it were based far away.</p>
        <div class="mt-7 space-y-5 text-base leading-8 text-muted">
          <p>Before SBT Capital, our CEO and CTO had each worked as business development managers for international iGaming providers. They got to know the industry from the provider side. They saw the opportunity in Nigeria and across Africa, and also saw what was missing: no Nigerian-owned platform company was building around the region’s day-to-day realities.</p>
          <p>They understood that local knowledge mattered. Payments, retail distribution, operator relationships and the way customers engage with sports all shape what a platform needs to do. The idea was to bring together experienced people and build a product for the market they knew firsthand.</p>
          <p>In 2021, we focused on the build. A year later, YangaBet became our first deal. StarBet and Truewave followed, and by the last quarter of 2022 we had integrated more than 60 games. Since then, we have connected major payment fintechs, expanded into Ghana and Kenya, and continued bringing more African operators onto the platform.</p>
        </div>

        <div class="mt-10 border-l-4 border-primary bg-brand-50 px-6 py-6 dark:bg-brand-950/30 sm:px-8">
          <p class="text-xs font-bold uppercase tracking-[0.18em] text-primary">What we do today</p>
          <p class="mt-3 text-lg font-semibold leading-7 text-highlighted">We bring sportsbook technology, games, payment connections and white-label agent tools together for operators serving African markets.</p>
          <NuxtLink to="/company/technology-stack" class="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline">
            Explore our technology stack
            <UIcon name="i-lucide-arrow-right" class="size-4" />
          </NuxtLink>
        </div>
      </article>
    </UContainer>

    <UContainer class="pb-14 sm:pb-20">
      <div class="flex flex-col gap-5 border-t border-default pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p class="max-w-2xl text-sm leading-6 text-muted">The milestones are part of a bigger effort: build practical technology with the people and operating context of this region in mind.</p>
        <NuxtLink to="/contact-us" class="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-highlighted hover:text-primary">
          Talk with our team
          <UIcon name="i-lucide-arrow-right" class="size-4" />
        </NuxtLink>
      </div>
    </UContainer>
  </UPage>
</template>
