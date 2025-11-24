<template>
  <footer class="max-w-screen">
    <div class="mx-auto">
      <section class="flex justify-between mt-12 p-4 md:p-6 border-onyx/10 dark:border-vanil/10 border-t">
        <!-- <NuxtLink
          to="#Download"
          class="no-underline"
        > -->
        <div>
          <AppVersion to="#Download" />
        </div>
        <!-- </NuxtLink> -->
        <!-- Social -->
        <div class="flex gap-1 md:gap-2">
          <NuxtLink
            :to="appConfig.url.x"
            target="_blank"
            class="flex justify-center items-center w-12 h-12 md:w-14 md:h-14 px-1.5  focus:outline-none focus:ring-2 rounded focus:ring-onyx/100 dark:focus:ring-brand/100 hover:bg-onyx/10 dark:hover:bg-vanil/10"
          >
            <AppIcon
              name="X"
              class="w-8 h-8 md:w-12 md:h-12 text-onyx dark:text-vanil"
            />
          </NuxtLink>
          <NuxtLink
            :to="appConfig.url.discord"
            target="_blank"
            class="flex justify-center items-center w-12 h-12 md:w-14 md:h-14 px-1.5  focus:outline-none focus:ring-2 rounded focus:ring-onyx/100 dark:focus:ring-brand/100 hover:bg-onyx/10 dark:hover:bg-vanil/10"
          >
            <AppIcon
              name="Discord"
              class="text-onyx dark:text-vanil"
            />
          </NuxtLink>
          <NuxtLink
            :to="appConfig.url.telegram"
            target="_blank"
            class="flex justify-center items-center w-12 h-12 md:w-14 md:h-14 px-1.5  focus:outline-none focus:ring-2 rounded focus:ring-onyx/100 dark:focus:ring-brand/100 hover:bg-onyx/10 dark:hover:bg-vanil/10"
          >
            <AppIcon
              name="Telegram"
              class="w-8 h-8 md:w-12 md:h-12 text-onyx dark:text-vanil"
            />
          </NuxtLink>
          <NuxtLink
            :to="appConfig.url.github"
            target="_blank"
            class="flex justify-center items-center w-12 h-12 md:w-14 md:h-14 px-1.5  focus:outline-none focus:ring-2 rounded focus:ring-onyx/100 dark:focus:ring-brand/100 hover:bg-onyx/10 dark:hover:bg-vanil/10"
          >
            <AppIcon
              name="Github"
              class="w-8 h-8 md:w-12 md:h-12 text-onyx dark:text-vanil"
            />
          </NuxtLink>
        </div>
      </section>
    </div>
  </footer>
</template>

<script setup>
const appConfig = useAppConfig()
</script>
