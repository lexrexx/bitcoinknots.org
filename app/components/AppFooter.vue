<template>
  <footer class="max-w-screen">
    <div class="mx-auto --container">
      <section class="flex justify-between mt-12 p-6 border-onyx/10 dark:border-vanil/10 border-t">
        <NuxtLink to="#Download">
          <AppVersion />
        </NuxtLink>
        <!-- Social -->
        <div class="flex">
          <NuxtLink
            :to="appConfig.xUrl"
            target="_blank"
            class="mx-1.5 focus:outline-none focus:ring-2 rounded focus:ring-onyx/100 dark:focus:ring-brand/100 hover:bg-onyx/10 dark:hover:bg-vanil/10"
          >
            <AppIcon
              name="X"
              class="w-12 h-12 text-onyx dark:text-vanil"
            />
          </NuxtLink>
          <NuxtLink
            :to="appConfig.discordUrl"
            target="_blank"
            class="mx-1.5 focus:outline-none focus:ring-2 rounded focus:ring-onyx/100 dark:focus:ring-brand/100 hover:bg-onyx/10 dark:hover:bg-vanil/10"
          >
            <AppIcon
              name="Discord"
              class="w-12 h-12 text-onyx dark:text-vanil"
            />
          </NuxtLink>
          <NuxtLink
            :to="appConfig.telegramUrl"
            target="_blank"
            class="mx-1.5 focus:outline-none focus:ring-2 rounded focus:ring-onyx/100 dark:focus:ring-brand/100 hover:bg-onyx/10 dark:hover:bg-vanil/10"
          >
            <AppIcon
              name="Telegram"
              class="w-12 h-12 text-onyx dark:text-vanil"
            />
          </NuxtLink>
          <NuxtLink
            :to="appConfig.githubUrl"
            target="_blank"
            class="mx-1.5 focus:outline-none focus:ring-2 rounded focus:ring-onyx/100 dark:focus:ring-brand/100 hover:bg-onyx/10 dark:hover:bg-vanil/10"
          >
            <AppIcon
              name="Github"
              class="w-12 h-12 text-onyx dark:text-vanil"
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
