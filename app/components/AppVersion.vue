<template>
  <span class="font-mono text-2xs tracking-tight m-1 border-2 border-black dark:border-brand-500 rounded-md flex px-2 py-1 text-black dark:text-brand-500 font-bold justify-center items-center">
    v{{ appConfig.vapp }}
  </span>
</template>

<script setup>
const appConfig = useAppConfig()
</script>
