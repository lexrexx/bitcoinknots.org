<template>
  <header
    class="
      h-20 md:h-24
      mx-auto
      fixed
      z-40
      top-0
      inset-x-0
      w-full
      flex
      justify-start
      items-center
      bg-brand-500
      dark:bg-black
      backdrop-filter
      backdrop-blur-[10px]
      [@supports(backdrop-filter:blur(0px))]:bg-brand-500/70
      [@supports(backdrop-filter:blur(0px))]:dark:bg-black/80
    "
  >
    <NuxtLink
      to="/"
      class="
        flex
        items-center
        justify-center
        w-20 md:w-24
        h-20 md:h-24
        border-r
        border-black/10
        dark:border-white/10
        bg-white
        dark:bg-brand-500
      "
      @click="menu = false"
    >
      <AppLogomark
        class="
          w-12 md:w-14
          h-12 md:h-14
          text-black
        "
      />
    </NuxtLink>

    <NuxtLink
      to="/"
      class="p-0"
      @click="menu = false"
    >
      <AppLogotype
        class="
          h-6 md:h-7
          ms-6
        "
      />
    </NuxtLink>

    <div class="flex absolute right-0 flex-row gap-1 items-center">
      <NuxtLink
        to="#Download"
        class="
          text-black dark:text-brand-500
          border-2 border-black dark:border-brand-500 hover:border-white hover:text-white
          focus:ring-4 focus:ring-black dark:focus:ring-brand-500
          font-bold
          rounded-lg
          text-xs md:text-sm
          tracking-wider
          uppercase
          p-4 md:p-5
          me-2 md:me-4
          focus:outline-none
        "
      >
        Download
      </NuxtLink>

      <AppColorModeButton />

      <div
        class="justify-self-start py-3 cursor-pointer ps-2 md:ps-3.5 pe-4 md:pe-6 hover:text-white dark:hover:text-brand-500"
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
