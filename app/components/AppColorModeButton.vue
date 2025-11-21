<script setup>
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>

<template>
  <ClientOnly>
    <div class="relative flex">
      <button
        :class="{ 'rotate-180': isDark, 'rotate-0': !isDark }"
        class="p-3 transition-transform duration-200 ease-out"
        @click="isDark = !isDark"
      >
        <AppIcon
          name="CustomColorMode"
          class="w-6 h-6 text-onyx hover:text-vanil dark:hover:text-brand dark:text-vanil"
        />
      </button>
    </div>
  </ClientOnly>
</template>
