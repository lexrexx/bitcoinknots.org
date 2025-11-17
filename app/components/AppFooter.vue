<template>
  <footer class="max-w-screen">
    <div class="--container mx-auto">
      <section class="mt-12 border-t border-black/10 dark:border-white/10 flex justify-between p-6 ">
        <NuxtLink to="#Download">
          <AppVersion />
        </NuxtLink>
        <!-- Social -->
        <div class="flex">
          <NuxtLink
            :to="appConfig.xUrl"
            target="_blank"
            class="mx-2"
          >
            <AppIcon
              name="X"
              class="text-black dark:text-white w-12 h-12"
            />
          </NuxtLink>
          <NuxtLink
            :to="appConfig.discordUrl"
            target="_blank"
            class="mx-2"
          >
            <AppIcon
              name="Discord"
              class="text-black dark:text-white w-12 h-12"
            />
          </NuxtLink>
          <NuxtLink
            :to="appConfig.telegramUrl"
            target="_blank"
            class="mx-2"
          >
            <AppIcon
              name="Telegram"
              class="text-black dark:text-white w-12 h-12"
            />
          </NuxtLink>
          <NuxtLink
            :to="appConfig.githubUrl"
            target="_blank"
            class="mx-2"
          >
            <AppIcon
              name="Github"
              class="text-black dark:text-white w-12 h-12"
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
