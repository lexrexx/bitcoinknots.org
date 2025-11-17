<template>
  <span class="flex justify-center items-center m-1 px-2 py-1 border-2 border-onyx dark:border-brand rounded-md font-bold text-2xs text-onyx dark:text-brand tracking-tight">
    v{{ appConfig.vapp }}
  </span>
</template>

<script setup>
const appConfig = useAppConfig()
</script>
