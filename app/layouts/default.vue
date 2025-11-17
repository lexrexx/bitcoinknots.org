<template>
  <div class="main">
    <slot />
  </div>
</template>

<style lang="postcss">
body {
  @apply
  text-black dark:text-white
  bg-brand-500 dark:bg-black
  selection:text-white dark:selection:text-black
  selection:bg-black dark:selection:bg-white;
}

a{
  @apply
  text-white dark:text-brand-500
}
</style>
