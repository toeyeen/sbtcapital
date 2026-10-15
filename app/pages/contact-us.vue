<script setup lang="ts">
const form = reactive({
  name: '',
  email: '',
  company: '',
  market: '',
  interest: '',
  message: ''
})

const emailClientNotice = ref(false)

function submitEnquiry() {
  const body = [
    `Name: ${form.name}`,
    `Email: ${form.email}`,
    `Company: ${form.company || 'Not provided'}`,
    `Market: ${form.market || 'Not provided'}`,
    `Area of interest: ${form.interest || 'Not provided'}`,
    '',
    form.message
  ].join('\n')

  const subject = encodeURIComponent(`Website enquiry from ${form.name}`)
  window.location.href = `mailto:hello@sbtcapital.ng?subject=${subject}&body=${encodeURIComponent(body)}`
  emailClientNotice.value = true
}

const title = 'Contact SBT Capital'
const description = 'Talk with SBT Capital about sportsbook platforms, integrations, payments, gaming and retail agent technology.'
useSeoMeta({ title, description, ogTitle: title, ogDescription: description })
</script>

<template>
  <UPage>
    <section class="bg-primary text-white">
      <UContainer class="py-16 sm:py-20">
        <p class="text-xs font-bold uppercase tracking-[0.22em] text-white/70">Contact SBT Capital</p>
        <div class="mt-5 grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-end">
          <h1 class="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">Let's talk about what you're building.</h1>
          <p class="max-w-xl text-base leading-7 text-white/80">Tell us about your business, market or project. Our team will get back to you at the email address you provide.</p>
        </div>
      </UContainer>
    </section>

    <UContainer class="grid gap-12 py-12 sm:py-16 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
      <aside class="space-y-8">
        <div>
          <p class="text-xs font-bold uppercase tracking-[0.18em] text-primary">Direct contact</p>
          <h2 class="mt-3 text-2xl font-bold text-highlighted">We'd like to hear from you.</h2>
          <p class="mt-3 leading-7 text-muted">For new projects, partnership discussions or general enquiries, send us a note and we’ll connect you with the right person.</p>
        </div>
        <div class="border-t border-default pt-5">
          <p class="text-sm text-muted">Email our team</p>
          <a href="mailto:hello@sbtcapital.ng" class="mt-2 inline-flex items-center gap-2 text-lg font-bold text-highlighted hover:text-primary">
            hello@sbtcapital.ng
            <UIcon name="i-lucide-arrow-up-right" class="size-4" />
          </a>
        </div>
        <div class="border-t border-default pt-5">
          <p class="text-sm text-muted">What we work on</p>
          <ul class="mt-3 space-y-3 text-sm font-medium text-highlighted">
            <li class="flex items-center gap-3"><UIcon name="i-lucide-check" class="size-4 text-primary" /> Sportsbook and gaming platforms</li>
            <li class="flex items-center gap-3"><UIcon name="i-lucide-check" class="size-4 text-primary" /> Payments and game integrations</li>
            <li class="flex items-center gap-3"><UIcon name="i-lucide-check" class="size-4 text-primary" /> Retail and agent networks</li>
          </ul>
        </div>
      </aside>

      <form class="space-y-6" @submit.prevent="submitEnquiry">
        <div class="grid gap-5 sm:grid-cols-2">
          <UFormField label="Your name" name="name" required>
            <UInput v-model="form.name" autocomplete="name" placeholder="Full name" required size="lg" class="w-full" />
          </UFormField>
          <UFormField label="Work email" name="email" required>
            <UInput v-model="form.email" type="email" autocomplete="email" placeholder="you@company.com" required size="lg" class="w-full" />
          </UFormField>
          <UFormField label="Company" name="company">
            <UInput v-model="form.company" autocomplete="organization" placeholder="Company name" size="lg" class="w-full" />
          </UFormField>
          <UFormField label="Target market" name="market">
            <UInput v-model="form.market" placeholder="e.g. Nigeria, Ghana, Kenya" size="lg" class="w-full" />
          </UFormField>
        </div>

        <UFormField label="What would you like to discuss?" name="interest">
          <USelect
            v-model="form.interest"
            :items="['Sportsbook platform', 'Games and integrations', 'Payments', 'Retail and agent system', 'Partnership', 'Other']"
            placeholder="Choose an area"
            size="lg"
            class="w-full"
          />
        </UFormField>

        <UFormField label="Tell us a little about your project" name="message" required>
          <UTextarea v-model="form.message" placeholder="What are you looking to build or solve?" :rows="6" required class="w-full" />
        </UFormField>

        <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p class="max-w-md text-xs leading-5 text-muted">Submitting opens a new message in your email app addressed to hello@sbtcapital.ng. You can review it and send it from there.</p>
          <UButton type="submit" size="lg" trailing-icon="i-lucide-arrow-right" label="Continue by email" />
        </div>
        <p v-if="emailClientNotice" role="status" class="text-sm font-medium text-primary">Your email app should open with your enquiry ready to send. If it doesn’t, email hello@sbtcapital.ng directly.</p>
      </form>
    </UContainer>
  </UPage>
</template>
