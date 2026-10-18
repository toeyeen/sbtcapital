<script setup lang="ts">
const teams = [
  { title: 'Engineering & technology', description: 'Build reliable services, integrations and product experiences.', icon: 'i-lucide-code-2' },
  { title: 'Product & design', description: 'Turn operator needs into clear workflows and useful tools.', icon: 'i-lucide-panels-top-left' },
  { title: 'Operations & trading', description: 'Help keep sports and gaming products useful in live markets.', icon: 'i-lucide-chart-no-axes-combined' },
  { title: 'Partnerships & growth', description: 'Work with operators and partners across African markets.', icon: 'i-lucide-handshake' }
]

const title = 'Careers | SBT Capital'
const description = 'Join SBT Capital and help build sportsbook, gaming and retail technology for African markets.'
useSeoMeta({ title, description, ogTitle: title, ogDescription: description })
</script>

<template>
  <UPage>
    <section class="relative isolate overflow-hidden bg-brand-700 text-white">
      <div class="absolute -right-20 -top-28 -z-10 size-[34rem] rounded-full border border-white/10" />
      <div class="absolute -right-4 -top-12 -z-10 size-[22rem] rounded-full border border-white/10" />
      <UContainer class="grid min-h-[29rem] gap-10 py-16 sm:py-20 lg:grid-cols-[1fr_0.7fr] lg:items-center">
        <div class="max-w-3xl">
          <p class="text-xs font-bold uppercase tracking-[0.22em] text-white/65">Careers at SBT Capital</p>
          <h1 class="mt-5 text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">Leave your mark on African technology.</h1>
          <p class="mt-6 max-w-2xl text-lg leading-8 text-white/70">We’re building products for a fast-moving industry and a market we know well. Bring your craft, curiosity and ideas to a team creating what operators here need next.</p>
          <a href="mailto:hello@sbtcapital.ng?subject=Careers%20at%20SBT%20Capital" class="mt-8 inline-flex items-center gap-3 rounded-full bg-brand-coral px-6 py-3 text-sm font-bold text-brand-dark transition hover:bg-[#D93B30]">
            Introduce yourself
            <UIcon name="i-lucide-arrow-right" class="size-4" />
          </a>
        </div>
        <div class="relative hidden min-h-72 items-center justify-center lg:flex" aria-hidden="true">
          <div class="absolute size-64 rounded-full border border-white/15" />
          <div class="absolute size-44 rounded-full border border-white/20" />
          <div class="z-10 flex size-28 items-center justify-center rounded-full bg-brand-coral text-brand-dark text-3xl font-black tracking-tight">SBT</div>
          <span class="absolute left-[18%] top-[12%] size-3 rounded-full bg-brand-orange" />
          <span class="absolute right-[15%] top-[26%] size-2 rounded-full bg-white" />
          <span class="absolute bottom-[12%] left-[35%] size-2 rounded-full bg-white/75" />
          <span class="absolute bottom-[27%] right-[13%] size-3 rounded-full bg-white/60" />
        </div>
      </UContainer>
    </section>

    <UPageSection
      headline="Make a difference"
      title="Good work, with a clear purpose"
      description="We bring together people who want to solve practical problems and make technology work better for businesses across the region."
    >
      <div class="grid gap-x-12 sm:grid-cols-2">
        <article v-for="(team, index) in teams" :key="team.title" class="flex gap-5 border-b border-default py-7 first:pt-0 last:border-0 sm:[&:nth-last-child(2)]:border-0">
          <span class="flex size-12 shrink-0 items-center justify-center rounded-full bg-muted/50 text-primary">
            <UIcon :name="team.icon" class="size-5" />
          </span>
          <div>
            <p class="text-xs font-mono text-muted">0{{ index + 1 }}</p>
            <h2 class="mt-1 text-lg font-bold text-highlighted">{{ team.title }}</h2>
            <p class="mt-2 max-w-md text-sm leading-6 text-muted">{{ team.description }}</p>
          </div>
        </article>
      </div>
    </UPageSection>

    <UContainer class="pb-16 sm:pb-24">
      <section class="grid gap-8 rounded-3xl bg-[#f4f4f1] p-7 dark:bg-gray-900 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p class="text-xs font-bold uppercase tracking-[0.2em] text-primary">Interested in joining?</p>
          <h2 class="mt-3 text-2xl font-bold text-highlighted">Tell us where you can make an impact.</h2>
          <p class="mt-3 max-w-2xl text-sm leading-6 text-muted">Send your CV or LinkedIn profile and a short note about the kind of work you’re looking for. We’ll keep it on hand and get in touch when there’s a suitable opportunity.</p>
        </div>
        <a href="mailto:hello@sbtcapital.ng?subject=Careers%20at%20SBT%20Capital" class="inline-flex items-center justify-center gap-2 rounded-full bg-brand-coral px-6 py-3 text-sm font-bold text-brand-dark transition hover:bg-[#D93B30]">
          Email your profile
          <UIcon name="i-lucide-arrow-up-right" class="size-4" />
        </a>
      </section>
    </UContainer>
  </UPage>
</template>
