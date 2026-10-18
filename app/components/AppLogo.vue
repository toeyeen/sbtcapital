<script setup lang="ts">
const props = withDefaults(defineProps<{ variant?: 'color' | 'on-dark' | 'white' | 'navy', markOnly?: boolean }>(), {
  variant: 'color',
  markOnly: false
})

</script>

<template>
  <span class="inline-flex items-center whitespace-nowrap">
    <img
      :src="markOnly ? '/sbt-capital-logo.png' : '/sbt_logo_subtle.svg'"
      :alt="markOnly ? 'SBT Capital' : 'SBT'"
      :class="[
        markOnly ? 'size-24 sm:size-28' : 'h-8 w-auto shrink-0',
        !markOnly && (variant === 'white' || variant === 'on-dark') ? 'brightness-0 invert' : ''
      ]"
    />
  </span>
</template>
