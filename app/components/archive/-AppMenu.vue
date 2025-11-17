<template>
  <div
    v-show="menu"
    class="--container mx-auto px-0 fixed left-0 right-0 top-0 h-[100dvh] z-40"
  >
    <nav
      class="
      h-full
      ---ms-[1px]
      bg-brand
      dark:bg-black
      --pt-20
      ps-0
      pb-2
      backdrop-filter
      backdrop-blur-[10px]
      [@supports(backdrop-filter:blur(0px))]:bg-brand-500/90
      [@supports(backdrop-filter:blur(0px))]:dark:bg-black/90
    "
    >
      <!-- <div class="flex"> -->

      <div class="grid overscroll-contain grid-cols-1 gap-2 --mt-12 sm:grid-cols-2 lg:grid-cols-4 px-28 --font-bold text-md w-12/12 mx-auto">
        <section class="flex justify-start items-start w-full h-full">
          <ul class="block mt-4 w-full tracking-wide">
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
                <span class="mx-2 opacity-0 group-hover:opacity-100" />
              </NuxtLink>
            </li>
          </ul>
        </section>

        <section class="flex justify-start items-start w-full h-full">
          <ul class="block mt-4 w-full tracking-wide">
            <li
              v-for="(menuItem, index) in menuItems2"
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
                <span class="mx-2 opacity-0 group-hover:opacity-100" />
              </NuxtLink>
            </li>
          </ul>
        </section>

        <section class="flex justify-start items-start w-full h-full">
          <ul class="block mt-4 w-full tracking-wide">
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
                <span class="mx-2 opacity-0 group-hover:opacity-100" />
              </NuxtLink>
            </li>
          </ul>
        </section>

        <section class="flex justify-start items-start w-full h-full">
          <ul class="block mt-4 w-full tracking-wide">
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
                <span class="mx-2 opacity-0 group-hover:opacity-100" />
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
