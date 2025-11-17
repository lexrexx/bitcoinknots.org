<script setup>
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  },
})
</script>

<template>
  <!-- <ClientOnly> -->
  <div class="flex relative">
    <button
      :class="{ 'rotate-[180deg]': isDark, 'rotate-0': !isDark }"
      class="transition-transform duration-200 ease-out p-3"
      @click="isDark = !isDark"
    >
      <AppIcon
        name="CustomColorMode"
        class="w-6 h-6 text-black dark:text-white"
      />
    </button>
  </div>
  <!-- </ClientOnly> -->
</template>
