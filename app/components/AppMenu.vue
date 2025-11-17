<template>
  <div
    v-show="menu"
    class="mx-auto px-0 fixed left-0 right-0 top-0 h-[100dvh] z-40 bg-brand-500 dark:bg-black"
  >
    <header
      class="
    bg-brand-500
    dark:bg-black
      h-24
      mx-auto
      fixed
      z-40
      top-0
      inset-x-0
      w-full
      flex
      justify-start
      items-center
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

      <NuxtLink
        to="/"
        class="p-0"
        @click="menu = false"
      >
        <AppLogotype class="h-7 ms-6" />
      </NuxtLink>

      <div class="flex absolute right-0 flex-row gap-1 items-center">
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

    <nav class="pt-32 mx-24 px-2 --font-bold text-3xl tracking-tight overscroll-contain">
      <section class="flex justify-start items-start w-full h-full">
        <ul class="block w-full">
          <li
            v-for="(menuItem, index) in menuItems1"
            :key="index"
            class="py-2 my-0"
          >
            <NuxtLink
              :to="menuItem.url"
              class="flex items-center py-2 ps-2 mx-1 rounded-md group text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5
"
              @click="menu = false"
            >
              <span class="flex-1">{{ menuItem.title }}</span>
              <span class="arrow mx-2 opacity-0 group-hover:opacity-100 rotate-180"> <--- </span>
            </NuxtLink>
          </li>
        </ul>
      </section>

      <section class="flex justify-start items-start w-full h-full">
        <ul class="block w-full">
          <li
            v-for="(menuItem, index) in menuItems2"
            :key="index"
            class="py-2 my-0"
          >
            <NuxtLink
              :to="menuItem.url"
              class="flex items-center justify-between py-2 ps-2 mx-1 rounded-md group text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5
"
              @click="menu = false"
            >
              <span class="">{{ menuItem.title }}</span>
              <span class="arrow mx-2 opacity-0 group-hover:opacity-100 rotate-180"> <--- </span>
            </NuxtLink>
          </li>
        </ul>
      </section>

      <section class="flex justify-start items-start w-full h-full">
        <ul class="block w-full">
          <li
            v-for="(menuItem, index) in menuItems3"
            :key="index"
            class="py-2 my-0"
          >
            <NuxtLink
              :to="menuItem.url"
              class="flex items-center py-2 ps-2 mx-1 rounded-md group text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5
"
              @click="menu = false"
            >
              <span class="flex-1">{{ menuItem.title }}</span>
              <span class="arrow mx-2 opacity-0 group-hover:opacity-100 rotate-180"> <--- </span>
            </NuxtLink>
          </li>
        </ul>
      </section>

      <section class="flex justify-start items-start w-full h-full">
        <ul class="block w-full">
          <li
            v-for="(menuItem, index) in menuItems4"
            :key="index"
            class="py-2 my-0"
          >
            <NuxtLink
              :to="menuItem.url"
              class="flex items-center py-2 ps-2 mx-1 rounded-md group text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5
"
              @click="menu = false"
            >
              <span class="flex-1">{{ menuItem.title }}</span>
              <span class="arrow mx-2 opacity-0 group-hover:opacity-100 rotate-180"> <--- </span>
            </NuxtLink>
          </li>
        </ul>
      </section>
    </nav>
  </div>
</template>

<script setup lang="ts">
const menu = useState('menu', () => false)

// const appConfig = useAppConfig()

// ------------------------------------------------>
// Menu Items

const menuItems1 = ref([
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Features',
    url: '#Features',
    // slug: '',
  },
])

const menuItems2 = ref([
  {
    title: 'Download',
    url: '#Download',
    // slug: '',
  },
  {
    title: 'Verify',
    url: '#Verify',
    // slug: '',
  },
])

const menuItems3 = ref([
  {
    title: 'Documentation',
    url: '#Documentation',
    // slug: 'documentation',
  },
  {
    title: 'Blog',
    url: '#Blog',
    // slug: '',
  },
  // {
  //   title: 'News',
  //   url: '/'
  //   // slug: 'news',
  // },
  // {
  //   title: 'About',
  //   url: '/'
  //   // slug: 'about',
  // }
])

const menuItems4 = ref([
  {
    title: 'Contribute',
    url: '#Contribute',
    // slug: '',
  },
  {
    title: 'FAQ',
    url: '#faq',
    // slug: 'faq',
  },
  // {
  //   title: 'News',
  //   url: '/'
  //   // slug: 'news',
  // },
  // {
  //   title: 'About',
  //   url: '/'
  //   // slug: 'about',
  // }
])

onMounted(() => {
  // Press ESC key to exit modal
  document.body.addEventListener('keyup', (e) => {
    if (e.key === 'Escape' && menu.value == true) {
      menu.value = false
    }
  })
})
</script>

<style lang="postcss" scoped>
.router-link-exact-active {
  @apply
    font-bold
    text-white
    dark:text-brand-500
}

.router-link-exact-active .arrow {
  @apply
    opacity-100
    rotate-0
}
</style>
