<template>
  <h2
    class="
      col-span-9 col-start-1 text-6xl font-bold leading-[1] tracking-tighter text-onyx
      lg:text-[10rem]
      dark:text-vanil
      "
  >
    {{ props.titleA }}
    <span
      class="
        block
      text-vanil
      dark:text-brand
      "
    > {{ props.titleB }} </span>
  </h2>
</template>

<script setup>
const props = defineProps({
  titleA: {
    type: String,
    required: true,
  },
  titleB: {
    type: String,
    required: true,
  },
})
</script>
