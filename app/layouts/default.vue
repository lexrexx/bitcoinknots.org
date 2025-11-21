<template>
  <div class="main">
    <slot />
  </div>
</template>

<style lang="postcss">
body {
  @apply antialiased
  text-onyx dark:text-vanil
  bg-brand dark:bg-onyx
  selection:text-vanil dark:selection:text-onyx
  selection:bg-onyx dark:selection:bg-vanil;
}

a {
  @apply text-vanil dark:text-brand;
}
</style>
