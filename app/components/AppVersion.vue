<template>
  <NuxtLink
    :to="props.to"
    class="flex justify-center items-center m-1 px-2 py-1 border-2 border-onyx dark:border-brand rounded-md font-bold text-2xs text-onyx dark:text-brand tracking-tight"
  >
    v{{ appConfig.vapp }}
  </NuxtLink>
</template>

<script setup>
const appConfig = useAppConfig()

const props = defineProps({
  to: {
    type: String,
    required: true,
  },
})
</script>
