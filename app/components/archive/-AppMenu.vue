<template>
  <div
    v-show="menu"
    class="top-0 right-0 left-0 z-40 fixed mx-auto px-0 h-[100dvh] --container"
  >
    <nav
      class="bg-brand dark:bg-onyx [@supports(backdrop-filter:blur(0px))]:bg-brand/90 [@supports(backdrop-filter:blur(0px))]:dark:bg-onyx/90 backdrop-filter backdrop-blur-[10px] ---ms-[1px] ps-0 --pt-20 pb-2 h-full"
    >
      <!-- <div class="flex"> -->

      <div class="gap-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto --mt-12 px-28 w-12/12 overscroll-contain --font-bold text-md">
        <section class="flex justify-start items-start w-full h-full">
          <ul class="block mt-4 w-full tracking-wide">
            <li
              v-for="(menuItem, index) in menuItems1"
              :key="index"
              class="my-0 py-2"
            >
              <NuxtLink
                :to="menuItem.url"
                class="group flex items-center hover:bg-onyx/5 dark:hover:bg-vanil/5 mx-1 py-2 ps-2 rounded-md text-onyx dark:text-vanil"
                @click="menu = false"
              >
                <span class="flex-1">{{ menuItem.title }}</span>
                <span class="opacity-0 group-hover:opacity-100 mx-2" />
              </NuxtLink>
            </li>
          </ul>
        </section>

        <section class="flex justify-start items-start w-full h-full">
          <ul class="block mt-4 w-full tracking-wide">
            <li
              v-for="(menuItem, index) in menuItems2"
              :key="index"
              class="my-0 py-2"
            >
              <NuxtLink
                :to="menuItem.url"
                class="group flex items-center hover:bg-onyx/5 dark:hover:bg-vanil/5 mx-1 py-2 ps-2 rounded-md text-onyx dark:text-vanil"
                @click="menu = false"
              >
                <span class="flex-1">{{ menuItem.title }}</span>
                <span class="opacity-0 group-hover:opacity-100 mx-2" />
              </NuxtLink>
            </li>
          </ul>
        </section>

        <section class="flex justify-start items-start w-full h-full">
          <ul class="block mt-4 w-full tracking-wide">
            <li
              v-for="(menuItem, index) in menuItems3"
              :key="index"
              class="my-0 py-2"
            >
              <NuxtLink
                :to="menuItem.url"
                class="group flex items-center hover:bg-onyx/5 dark:hover:bg-vanil/5 mx-1 py-2 ps-2 rounded-md text-onyx dark:text-vanil"
                @click="menu = false"
              >
                <span class="flex-1">{{ menuItem.title }}</span>
                <span class="opacity-0 group-hover:opacity-100 mx-2" />
              </NuxtLink>
            </li>
          </ul>
        </section>

        <section class="flex justify-start items-start w-full h-full">
          <ul class="block mt-4 w-full tracking-wide">
            <li
              v-for="(menuItem, index) in menuItems4"
              :key="index"
              class="my-0 py-2"
            >
              <NuxtLink
                :to="menuItem.url"
                class="group flex items-center hover:bg-onyx/5 dark:hover:bg-vanil/5 mx-1 py-2 ps-2 rounded-md text-onyx dark:text-vanil"
                @click="menu = false"
              >
                <span class="flex-1">{{ menuItem.title }}</span>
                <span class="opacity-0 group-hover:opacity-100 mx-2" />
              </NuxtLink>
            </li>
          </ul>
        </section>
      </div>

      <!-- </div> -->
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
}
</style>
