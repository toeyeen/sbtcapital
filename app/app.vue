<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'shortcut icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

const footerColumns = [
  {
    label: 'Products',
    children: [
      { label: 'White-Label Sportsbook', to: '/products/white-label-sportsbook' },
      { label: 'Sportsbook Integrations', to: '/products/sportsbook-integrations' },
      { label: 'Virtual Games for Retail', to: '/products/virtual-games-retail' },
      { label: 'Custom Platform Development', to: '/products/custom-platform-development' }
    ]
  },
  {
    label: 'Partners',
    children: [
      { label: 'Sportsbook Operators', to: '/partners/sportsbook-operators' },
      { label: 'Retail & Agent Networks', to: '/partners/retail-agent-networks' },
      { label: 'Gaming & Data Providers', to: '/partners/gaming-data-providers' },
      { label: 'Public-Sector Solutions', to: '/partners/sportsbook-operators#public-sector' }
    ]
  },
  {
    label: 'Markets & Coverage',
    children: [
      { label: 'Nigeria & West Africa', to: '/markets/nigeria-west-africa' },
      { label: 'Kenya & East Africa', to: '/markets/kenya-east-africa' },
      { label: 'Tier-1 Data Feeds', to: '/capabilities/tier-1-data-feeds' },
      { label: 'Agent Banking & POS', to: '/capabilities/agent-banking-pos' }
    ]
  },
  {
    label: 'Company',
    children: [
      { label: 'What we do', to: '/company/what-we-do' },
      { label: 'Technology Stack', to: '/company/technology-stack' },
      { label: 'Knowledge Base', to: '/knowledge-base' },
      { label: 'Careers', to: '/careers' },
      { label: 'Contact us', to: '/contact-us' }
    ]
  }
]

const title = 'SBT Capital | Premier Sportsbook, Virtual Gaming & Retail Solutions'
const description = 'SBT Capital builds turnkey and white-label sportsbook platforms, gaming and payment integrations, sports data connections, and retail agent technology for operators across Africa.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://sbtcapital.ng/og-image.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp>
    <SportsbookNavigation />

    <UMain>
      <NuxtPage />
    </UMain>

    <!-- Use SBT Capital Logo -->
    <!-- <USeparator icon="i-simple-icons-nuxtdotjs" /> -->

    <UFooter class="border-t border-white/10 bg-brand-700 text-white">
      <template #top>
        <UContainer>
          <nav
            aria-label="Footer navigation"
            class="w-full"
          >
            <ul class="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
              <li
                v-for="column in footerColumns"
                :key="column.label"
                class="space-y-4"
              >
                <h2 class="text-lg font-semibold text-white">
                  {{ column.label }}
                </h2>
                <ul class="space-y-3">
                  <li
                    v-for="link in column.children"
                    :key="link.label"
                  >
                    <NuxtLink
                      :to="link.to"
                      class="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {{ link.label }}
                    </NuxtLink>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </UContainer>
      </template>

      <template #left>
        <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <AppLogo variant="white" />
          <p class="text-sm text-white/60">
            © {{ new Date().getFullYear() }} SBT Capital. All rights reserved.
          </p>
        </div>
      </template>

      <template #right>
        <UColorModeButton class="text-white hover:bg-white/10" />
      </template>
    </UFooter>
  </UApp>
</template>
