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

p {
  @apply
    py-2 md:py-4
    text-base sm:text-base md:text-lg lg:text-xl
    leading-relaxed lg:leading-normal
}
</style>
