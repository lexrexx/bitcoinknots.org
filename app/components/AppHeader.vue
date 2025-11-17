<template>
  <header
    class="
    bg-brand-500
      --container
      h-24
      mx-auto
      fixed
      z-40
      top-0
      inset-x-0
      w-full
      flex
      --gap-1
      justify-start
      items-center
      backdrop-filter
      backdrop-blur-[10px]
      [@supports(backdrop-filter:blur(0px))]:bg-brand-500/70
      [@supports(backdrop-filter:blur(0px))]:dark:bg-black/80
  "
  >
    <!-- <span class="block w-[1px] h-24 bg-black/10 dark:bg-white/10" /> -->

    <NuxtLink
      to="/"
      class="w-24 h-24 --bg-red-300 flex items-center justify-center bg-white dark:bg-brand-500 border-r border-black/10 dark:border-white/10"
      @click="menu = false"
    >
      <AppLogomark class="w-14 h-14 text-black" />
    </NuxtLink>

    <!-- <span class="block w-[1px] p-0 h-24 bg-black/10 dark:bg-white/10" /> -->

    <NuxtLink
      to="/"
      class="p-0"
      @click="menu = false"
    >
      <AppLogotype class="h-7 ms-6" />
    </NuxtLink>

    <!-- <h1 class="mx-4 text-4xl font-black tracking-[-0.2rem]">Knots</h1> -->
    <div class="flex absolute right-0 flex-row gap-1 items-center">
      <NuxtLink
        to="#Download"
        class="
          text-black dark:text-brand-500
          --bg-black --dark:bg-white --bg-brand-500 --hover:bg-brand-400
          border-2 border-black dark:border-brand-500
          --hover:bg-brand-500
          focus:ring-4
          focus:ring-brand-200/80
          font-bold
          rounded-lg
          text-sm
          tracking-wider
          uppercase
          px-5
          py-5
          me-4
          focus:outline-none
        "
      >
        Download
      </NuxtLink>

      <AppColorModeButton />

      <div
        class="justify-self-start py-3 cursor-pointer ps-3.5 pe-6"
        @click="menu = !menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-8 h-8"
        >
          <path
            fill-rule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
  </header>
</template>

<script setup lang="js">
const menu = useState('menu', () => false)
</script>
