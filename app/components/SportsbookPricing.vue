<script setup lang="ts">
const props = defineProps<{
  contactEmail: string
}>()

function inquiryLink(subject: string, message: string) {
  const query = new URLSearchParams({ subject, body: message })
  return `mailto:${props.contactEmail}?${query.toString()}`
}

const whiteLabelInquiry = inquiryLink(
  'White-label sportsbook enquiry',
  'Hello, I would like to discuss a white-label sportsbook integration.\n\nOrganisation:\nTarget market:\nPreferred launch timeline:\n'
)

const customBuildInquiry = inquiryLink(
  'Custom sportsbook platform enquiry',
  'Hello, I would like to discuss a custom sportsbook or retail gaming solution.\n\nOrganisation:\nWhat we are looking to build:\nTarget market:\nPreferred timeline:\n'
)
</script>

<template>
  <UPageSection
    id="pricing-inquiry"
    headline="Flexible ways to work together"
    title="Choose a sportsbook solution that fits your business"
    description="Start with a white-label sportsbook or talk with us about a platform built around your operation, retail network or partnership programme."
  >
    <div class="grid gap-5 lg:grid-cols-2">
      <UCard class="flex h-full flex-col ring-1 ring-gray-200 dark:ring-gray-800">
        <div class="flex h-full flex-col gap-6">
          <div>
            <UBadge
              label="White-label sportsbook"
              color="primary"
              variant="subtle"
            />
            <h3 class="mt-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Launch under your brand
            </h3>
            <p class="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
              A ready-made sportsbook platform with integration and commercial terms shaped around your launch.
            </p>
          </div>

          <div class="rounded-xl bg-gray-50 p-4 ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800">
            <p class="text-sm text-gray-500 dark:text-gray-400">
              Integration starting from
            </p>
            <p class="mt-1 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              $4,000
            </p>
            <p class="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
              Plus an agreed percentage share of aggregated profit. The share and its calculation are discussed with you before we begin.
            </p>
          </div>

          <ul class="grid gap-3 text-sm text-gray-700 dark:text-gray-300">
            <li class="flex gap-2">
              <UIcon
                name="i-lucide-check"
                class="mt-0.5 size-4 shrink-0 text-primary"
              />
              Sportsbook experience configured for your brand
            </li>
            <li class="flex gap-2">
              <UIcon
                name="i-lucide-check"
                class="mt-0.5 size-4 shrink-0 text-primary"
              />
              Integration scope and launch plan agreed together
            </li>
            <li class="flex gap-2">
              <UIcon
                name="i-lucide-check"
                class="mt-0.5 size-4 shrink-0 text-primary"
              />
              Commercial model discussed for your market
            </li>
          </ul>

          <div class="mt-auto flex flex-col gap-2">
            <UButton
              class="w-full justify-center"
              :to="whiteLabelInquiry"
              label="Discuss a white-label launch"
              trailing-icon="i-lucide-arrow-up-right"
              size="lg"
            />
            <UButton
              class="w-full justify-center"
              to="/products/white-label-sportsbook"
              variant="ghost"
              color="neutral"
              label="Explore white-label features"
              trailing-icon="i-lucide-arrow-right"
              size="sm"
            />
          </div>
        </div>
      </UCard>

      <UCard class="flex h-full flex-col bg-gray-950 text-white ring-1 ring-gray-800 dark:bg-gray-900">
        <div class="flex h-full flex-col gap-6">
          <div>
            <UBadge
              label="Custom development"
              color="neutral"
              variant="subtle"
            />
            <h3 class="mt-4 text-2xl font-semibold tracking-tight text-white">
              Built around your organisation
            </h3>
            <p class="mt-2 text-sm leading-6 text-gray-300">
              For operators, retailers, public-sector partners and businesses with a specific product or distribution need.
            </p>
          </div>

          <div class="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
            <p class="text-sm text-gray-400">
              Pricing
            </p>
            <p class="mt-1 text-3xl font-bold tracking-tight text-white">
              Custom quote
            </p>
            <p class="mt-2 text-sm leading-6 text-gray-300">
              We’ll scope the requirements, integrations and delivery plan with you before preparing a proposal.
            </p>
          </div>

          <ul class="grid gap-3 text-sm text-gray-200">
            <li class="flex gap-2">
              <UIcon
                name="i-lucide-check"
                class="mt-0.5 size-4 shrink-0 text-primary-300"
              />
              Tailored sportsbook or virtual-gaming workflows
            </li>
            <li class="flex gap-2">
              <UIcon
                name="i-lucide-check"
                class="mt-0.5 size-4 shrink-0 text-primary-300"
              />
              Retail, agent and partner programme requirements
            </li>
            <li class="flex gap-2">
              <UIcon
                name="i-lucide-check"
                class="mt-0.5 size-4 shrink-0 text-primary-300"
              />
              Direct discussion with our team to define the scope
            </li>
          </ul>

          <UButton
            class="mt-auto w-full justify-center"
            color="neutral"
            variant="outline"
            :to="customBuildInquiry"
            label="Discuss a custom build"
            trailing-icon="i-lucide-arrow-up-right"
            size="lg"
          />
        </div>
      </UCard>
    </div>

    <p class="mx-auto mt-5 max-w-3xl text-center text-xs leading-5 text-gray-500 dark:text-gray-400">
      The $4,000 figure is an indicative starting price for integration, not a final quote. Revenue-share terms, scope, third-party costs and any applicable regulatory requirements are agreed individually.
      Contact us at <a
        class="font-medium text-primary underline-offset-4 hover:underline"
        :href="`mailto:${contactEmail}`"
      >{{ contactEmail }}</a> to discuss your project.
    </p>
  </UPageSection>
</template>
