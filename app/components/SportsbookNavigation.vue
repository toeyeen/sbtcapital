<script setup lang="ts">
type MenuLink = {
  label: string
  description: string
  icon: string
  to: string
}

type MenuGroup = {
  label: string
  summary: string
  ctaLabel?: string
  ctaTo?: string
  links: MenuLink[]
}

const isScrolled = ref(false)
const scrollProgress = ref(0)
const isSearchOpen = ref(false)
const searchQuery = ref('')
const isMobileMenuOpen = ref(false)
const activeMenu = ref<string | null>(null)
const openMobileAccordion = ref<string | null>('Products')
const menuGroups: MenuGroup[] = [
  {
    label: 'Products',
    summary: 'Modular sports betting and gaming software engineering for operators building for scale and regulated compliance.',
    ctaLabel: 'Explore Platform Delivery',
    ctaTo: '/products/custom-platform-development',
    links: [
      {
        label: 'White-label sportsbook',
        description: 'Launch a branded sportsbook with an integration plan shaped around your market.',
        icon: 'i-lucide-trophy',
        to: '/products/white-label-sportsbook'
      },
      {
        label: 'Sportsbook integrations',
        description: 'Connect live events, odds and betting journeys to your product.',
        icon: 'i-lucide-plug-zap',
        to: '/products/sportsbook-integrations'
      },
      {
        label: 'Virtual games for retail',
        description: 'Explore aggregated virtual sports, draw games and retail agent workflows.',
        icon: 'i-lucide-gamepad-2',
        to: '/products/virtual-games-retail'
      },
      {
        label: 'Custom platform development',
        description: 'Shape a tailored platform around your workflows and partner ecosystem.',
        icon: 'i-lucide-panels-top-left',
        to: '/products/custom-platform-development'
      }
    ]
  },
  {
    label: 'Partners',
    summary: 'We collaborate with operators, retail networks, content studios, and public sector regulators throughout the gaming ecosystem.',
    ctaLabel: 'Become a Partner',
    ctaTo: '/partners/sportsbook-operators',
    links: [
      {
        label: 'Sportsbook operators',
        description: 'Technology and integration conversations for new or growing operators.',
        icon: 'i-lucide-trophy',
        to: '/partners/sportsbook-operators'
      },
      {
        label: 'Retail and agent networks',
        description: 'Connect physical distribution and digital services in one experience.',
        icon: 'i-lucide-store',
        to: '/partners/retail-agent-networks'
      },
      {
        label: 'Gaming and data providers',
        description: 'Explore integrations with content, event and platform providers.',
        icon: 'i-lucide-puzzle',
        to: '/partners/gaming-data-providers'
      },
      {
        label: 'Public-sector organisations',
        description: 'Discuss programmes and digital services with government partners.',
        icon: 'i-lucide-landmark',
        to: '/partners/sportsbook-operators#public-sector'
      }
    ]
  },
  {
    label: 'Knowledge Base',
    summary: 'Comprehensive archive of technical guides, iGaming mathematics, operational KPIs, and licensing breakdowns spanning 2022 to 2026.',
    ctaLabel: 'View All 20 Guides',
    ctaTo: '/knowledge-base',
    links: []
  },
  {
    label: 'Company',
    summary: 'A technology business focused on practical sportsbook products, low-latency architecture, and market-led partnerships.',
    ctaLabel: 'Contact Leadership',
    ctaTo: '/contact-us',
    links: [
      {
        label: 'What we do',
        description: 'Learn about our story, milestones and work across African markets.',
        icon: 'i-lucide-building-2',
        to: '/company/what-we-do'
      },
      {
        label: 'Technology stack',
        description: 'Explore the languages, data stores and messaging tools behind our platform.',
        icon: 'i-lucide-cpu',
        to: '/company/technology-stack'
      },
      {
        label: 'Careers',
        description: 'Explore ways to contribute to products built for African markets.',
        icon: 'i-lucide-users',
        to: '/careers'
      },
      {
        label: 'Contact us',
        description: 'Tell us what you are looking to launch or integrate.',
        icon: 'i-lucide-mail',
        to: '/contact-us'
      }
    ]
  }
]

function handleScroll() {
  if (!import.meta.client) return
  const scrolled = window.scrollY
  isScrolled.value = scrolled > 15

  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
  if (scrollHeight > 0) {
    const progress = (scrolled / scrollHeight) * 100
    scrollProgress.value = Math.min(Math.max(progress, 0), 100)
  }
}

function closeMenu() {
  activeMenu.value = null
}

function toggleMenu(label: string) {
  activeMenu.value = activeMenu.value === label ? null : label
}

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (isMobileMenuOpen.value) {
    activeMenu.value = null
    isSearchOpen.value = false
  }
}

function toggleSearch() {
  isSearchOpen.value = !isSearchOpen.value
  if (isSearchOpen.value) {
    activeMenu.value = null
  }
}

function handleSearchSubmit() {
  if (!searchQuery.value.trim()) return
  const q = encodeURIComponent(searchQuery.value.trim())
  isSearchOpen.value = false
  isMobileMenuOpen.value = false
  navigateTo(`/knowledge-base?search=${q}`)
}

function handleGlobalKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    closeMenu()
    isSearchOpen.value = false
    isMobileMenuOpen.value = false
  }
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault()
    toggleSearch()
  }
}

onMounted(() => {
  if (import.meta.client) {
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('keydown', handleGlobalKeydown)
    handleScroll()
  }
})

onBeforeUnmount(() => {
  if (import.meta.client) {
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('keydown', handleGlobalKeydown)
  }
})
</script>

<template>
  <header
    :class="[
      'sticky top-0 z-50 w-full transition-all duration-300',
      isScrolled
        ? 'bg-brand-500 shadow-md shadow-black/20 border-b border-white/10'
        : 'bg-brand-500 border-b border-white/10'
    ]"
  >
    <!-- Top Horizontal Reading Progress Scrollbar -->
    <div class="horizontal-scrollbar absolute top-0 left-0 w-full h-[3px] bg-transparent overflow-hidden pointer-events-none">
      <div
        class="horizontal-scrollbar__progress h-full bg-brand-coral transition-all duration-100 ease-out"
        :style="{ width: `${scrollProgress}%` }"
      />
    </div>

    <!-- Main Navigation Bar Wrapper -->
    <div class="wrapper max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-18 sm:h-20 gap-4">

        <!-- Mobile Burger Menu Button (Visible on mobile/tablet) -->
        <button
          type="button"
          id="burger-menu"
          class="lg:hidden inline-flex items-center gap-2 p-2 rounded-xl text-white hover:bg-white/10 transition-colors focus:outline-none cursor-pointer"
          :aria-expanded="isMobileMenuOpen"
          aria-label="Toggle Navigation Menu"
          @click="toggleMobileMenu"
        >
          <span class="flex flex-col justify-center gap-1.25 w-5 h-5">
            <span
              class="w-5 h-0.5 bg-current rounded-full transition-transform duration-200"
              :class="isMobileMenuOpen ? 'rotate-45 translate-y-1.75' : ''"
            />
            <span
              class="w-3.5 h-0.5 bg-current rounded-full transition-opacity duration-200"
              :class="isMobileMenuOpen ? 'opacity-0' : ''"
            />
            <span
              class="w-5 h-0.5 bg-current rounded-full transition-transform duration-200"
              :class="isMobileMenuOpen ? '-rotate-45 -translate-y-1.75' : ''"
            />
          </span>
          <span class="burger-text text-xs font-bold uppercase tracking-wider text-white">MENU</span>
        </button>

        <!-- Header Left: Logo -->
        <div class="header-left flex items-center gap-3 sm:gap-4 shrink-0">
          <NuxtLink
            to="/"
            class="flex items-center focus-visible:outline-2 focus-visible:outline-primary rounded-lg"
            aria-label="SBT Capital Home"
            @click="closeMenu"
          >
            <AppLogo variant="on-dark" class="w-auto h-7 sm:h-8 shrink-0" />
          </NuxtLink>

        </div>

        <!-- Header Center: Desktop Navigation & Slide-Out Search Bar -->
        <div class="header-center menu-wrapper flex-1 min-h-14 flex items-center justify-center relative px-2">
          
          <!-- Slide-out Quick Search Overlay (Shown when isSearchOpen is true) -->
          <Transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="opacity-0 -translate-y-2 scale-98"
            enter-to-class="opacity-100 translate-y-0 scale-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="opacity-100 translate-y-0 scale-100"
            leave-to-class="opacity-0 -translate-y-2 scale-98"
          >
            <div
              v-if="isSearchOpen"
              class="header-search-bar absolute inset-0 z-30 flex min-h-14 items-center bg-background border border-primary/40 rounded-2xl px-3 py-2 shadow-lg shadow-primary/10"
            >
              <UIcon name="i-lucide-search" class="w-4 h-4 text-primary ml-2 shrink-0" />
              <input
                v-model="searchQuery"
                type="text"
                placeholder="What's on your mind? (Search products, turnkey, RNG, integrations...)"
                class="w-full min-w-0 bg-transparent px-3 py-3 text-sm text-highlighted placeholder:text-muted focus:outline-none"
                autofocus
                @keydown.enter="handleSearchSubmit"
              />
              <button
                type="button"
                class="px-3.5 py-1.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:bg-primary/90 transition-colors cursor-pointer shrink-0"
                @click="handleSearchSubmit"
              >
                Search
              </button>
              <button
                type="button"
                class="p-2 text-muted hover:text-highlighted transition-colors ml-1 cursor-pointer shrink-0"
                aria-label="Close Search"
                @click="isSearchOpen = false"
              >
                <UIcon name="i-lucide-x" class="w-4 h-4" />
              </button>
            </div>
          </Transition>

          <!-- Desktop Nav Menu Items (Shown when search not open) -->
          <nav
            v-show="!isSearchOpen"
            class="header_menu hidden lg:flex items-center gap-1 xl:gap-2"
          >
            <div
              v-for="group in menuGroups"
              :key="group.label"
              class="relative"
            >
              <NuxtLink
                v-if="group.label === 'Knowledge Base'"
                to="/knowledge-base"
                class="inline-flex items-center px-3.5 py-2 rounded-xl text-sm font-semibold text-white/80 hover:text-white hover:bg-white/10 transition-all"
                @click="closeMenu"
              >
                {{ group.label }}
              </NuxtLink>
              <button
                v-else
                type="button"
                class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer"
                :class="[
                  activeMenu === group.label
                    ? 'bg-white/10 text-white'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                ]"
                @click="toggleMenu(group.label)"
              >
                <span>{{ group.label }}</span>
                <UIcon
                  name="i-lucide-chevron-down"
                  class="w-3.5 h-3.5 transition-transform duration-200"
                  :class="activeMenu === group.label ? 'rotate-180 text-brand-coral' : 'text-white/60'"
                />
              </button>

              <!-- Mega-Menu Dropdown Panel -->
              <Transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="opacity-0 translate-y-2 scale-98"
                enter-to-class="opacity-100 translate-y-0 scale-100"
                leave-active-class="transition duration-150 ease-in"
                leave-from-class="opacity-100 translate-y-0 scale-100"
                leave-to-class="opacity-0 translate-y-2 scale-98"
              >
                <div
                  v-if="activeMenu === group.label && group.label !== 'Knowledge Base'"
                  class="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[min(94vw,52rem)] rounded-3xl bg-white dark:bg-gray-950 border border-default shadow-2xl p-6 sm:p-8 z-50 overflow-hidden"
                >
                  <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
                    <!-- Left Column: Summary & Call to Action -->
                    <div class="lg:col-span-4 flex flex-col justify-between p-5 rounded-2xl bg-muted/20 border border-default/50 space-y-4">
                      <div>
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-primary/10 text-primary">
                          {{ group.label }}
                        </span>
                        <h4 class="text-base font-bold text-highlighted mt-2">
                          {{ group.label === 'Products' ? 'Engineered for Growth' : group.label === 'Partners' ? 'Ecosystem Collaboration' : group.label === 'Knowledge Base' ? 'Research & Intelligence' : 'Enterprise Technology' }}
                        </h4>
                        <p class="text-xs text-muted leading-relaxed mt-2">
                          {{ group.summary }}
                        </p>
                      </div>

                      <NuxtLink
                        v-if="group.ctaTo"
                        :to="group.ctaTo"
                        class="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline pt-2"
                        @click="closeMenu"
                      >
                        <span>{{ group.ctaLabel || 'Learn More' }}</span>
                        <UIcon name="i-lucide-arrow-right" class="w-3.5 h-3.5" />
                      </NuxtLink>
                    </div>

                    <!-- Right Column: 2x2 Rich Links Grid -->
                    <div class="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <NuxtLink
                        v-for="link in group.links"
                        :key="link.label"
                        :to="link.to"
                        class="group p-3.5 rounded-2xl border border-transparent hover:border-primary/30 hover:bg-muted/30 transition-all flex items-start gap-3.5"
                        @click="closeMenu"
                      >
                        <div class="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                          <UIcon :name="link.icon" class="w-4.5 h-4.5" />
                        </div>
                        <div>
                          <p class="text-sm font-bold text-highlighted group-hover:text-primary transition-colors leading-tight">
                            {{ link.label }}
                          </p>
                          <p class="text-xs text-muted leading-relaxed mt-1 line-clamp-2">
                            {{ link.description }}
                          </p>
                        </div>
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>
          </nav>
        </div>

        <!-- Header Right: Search Button, Dark Mode, and Contact Us CTA -->
        <div class="header-right flex items-center gap-2.5 sm:gap-3 shrink-0">
          
          <!-- Search Magnifying Glass Trigger -->
          <button
            type="button"
            class="header-btn-search w-9 h-9 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white/80 hover:text-white hover:border-white/50 hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Search"
            title="Search (Cmd+K)"
            @click="toggleSearch"
          >
            <UIcon name="i-lucide-search" class="w-4 h-4" />
          </button>

          <!-- Color Mode Switcher -->
          <UColorModeButton class="text-white hover:bg-white/10" />

          <!-- Capsule "CONTACT US" CTA Button (Matching SOFTSWISS design) -->
          <NuxtLink
            to="/contact-us"
            id="button-contact-us-main-top"
            class="relative inline-flex items-center justify-center px-4 sm:px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider text-brand-dark bg-brand-coral hover:bg-[#D93B30] shadow-md shadow-black/20 transition-all duration-200 hover:scale-102 focus:outline-none"
            @click="closeMenu"
          >
            <span>CONTACT US</span>
          </NuxtLink>
        </div>

      </div>
    </div>

    <!-- Mobile Drawer Overlay -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="isMobileMenuOpen"
        class="lg:hidden border-b border-default bg-background px-4 sm:px-6 py-6 max-h-[85vh] overflow-y-auto space-y-6 shadow-2xl"
      >
        <!-- Mobile Search Input -->
        <div class="relative">
          <UIcon name="i-lucide-search" class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" />
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search products or knowledge base..."
            class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-default bg-card text-sm text-highlighted placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/50"
            @keydown.enter="handleSearchSubmit"
          />
        </div>

        <!-- Mobile Menu Accordion Groups -->
        <div class="space-y-3">
          <div
            v-for="group in menuGroups"
            :key="group.label"
            class="border border-default/70 rounded-2xl overflow-hidden bg-background"
          >
            <button
              type="button"
              v-if="group.label !== 'Knowledge Base'"
              class="w-full flex items-center justify-between p-4 text-left font-bold text-sm text-highlighted cursor-pointer"
              @click="openMobileAccordion = openMobileAccordion === group.label ? null : group.label"
            >
              <span>{{ group.label }}</span>
              <UIcon
                name="i-lucide-chevron-down"
                class="w-4 h-4 transition-transform text-muted"
                :class="openMobileAccordion === group.label ? 'rotate-180 text-primary' : ''"
              />
            </button>
            <NuxtLink
              v-else
              to="/knowledge-base"
              class="w-full flex items-center justify-between p-4 text-left font-bold text-sm text-highlighted"
              @click="isMobileMenuOpen = false"
            >
              Knowledge Base
              <UIcon name="i-lucide-arrow-right" class="w-4 h-4 text-primary" />
            </NuxtLink>

            <!-- Accordion Content -->
            <div
              v-if="group.label !== 'Knowledge Base'"
              v-show="openMobileAccordion === group.label"
              class="px-4 pb-4 pt-1 border-t border-default/40 space-y-2 bg-muted/10"
            >
              <NuxtLink
                v-for="link in group.links"
                :key="link.label"
                :to="link.to"
                class="flex items-center gap-3 p-2.5 rounded-xl hover:bg-muted/40 transition-colors"
                @click="isMobileMenuOpen = false"
              >
                <div class="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <UIcon :name="link.icon" class="w-3.5 h-3.5" />
                </div>
                <div class="flex-1">
                  <p class="text-xs font-bold text-highlighted">{{ link.label }}</p>
                  <p class="text-[11px] text-muted line-clamp-1">{{ link.description }}</p>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Mobile CTA and Region Options -->
        <div class="pt-4 border-t border-default space-y-4">
          <NuxtLink
            to="/contact-us"
            class="w-full flex items-center justify-center py-3 rounded-full font-bold text-xs uppercase tracking-wider text-brand-dark bg-brand-coral hover:bg-[#D93B30] transition-colors"
            @click="isMobileMenuOpen = false"
          >
            <span>DISCUSS A PROJECT</span>
          </NuxtLink>

          <div class="flex items-center justify-between text-xs text-muted pt-2">
            <span>Operating Across 8 African Markets</span>
            <span class="font-mono font-bold text-primary">NG • KE • GH • UG</span>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>
