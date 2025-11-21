<template>
  <svg class="fill-current" viewBox="0 0 532 532">
    <use :href="`${props.url}#${props.name}`" />
  </svg>
</template>

<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    default: 'svg/icons.svg' // Path from public directory
  }
})
</script>
