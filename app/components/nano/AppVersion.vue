<template>
  <NuxtLink
    :to="props.to"
    class="
      flex
      justify-center
      items-center
      m-1
      px-2
      py-1
      border-2
      rounded-md
      font-bold
      text-sm md:text-base lg:text-lg
      tracking-tight
      text-onyx dark:text-brand hover:text-vanil
      border-onyx dark:border-brand hover:border-vanil
    "
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
