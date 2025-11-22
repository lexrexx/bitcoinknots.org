<template>
  <NuxtRouteAnnouncer />
  <AppHeader />
  <AppMenu />
  <NuxtLayout>
    <PageContainer>
      <NuxtPage />
    </PageContainer>
  </NuxtLayout>
  <AppFooter />
</template>

<script setup>
import AppMenu from './components/macro/AppMenu.vue'
import AppFooter from './components/macro/AppFooter.vue'
import AppHeader from './components/macro/AppHeader.vue'
import PageContainer from './components/macro/PageContainer.vue'

// const menu = useMenu()
// const nuxtApp = useNuxtApp()

// nuxtApp.hook("page:finish", () => {
//    window.scrollTo(0, 0)
// })

useSeoMeta({
  title: 'Bitcoin Knots',
  description: '',
  ogTitle: '',
  ogDescription: '',
  ogType: 'website',
  ogUrl: 'https://bitcoinknots.org',
  ogImage: '/og-image.webp',
  twitterTitle: '',
  twitterDescription: '',
  twitterCard: 'summary_large_image',
  twitterSite: 'https://bitcoinknots.org',
  twitterCreator: '@bitcoinknots',
})

useHead({
  title: '',
  link: [
    { rel: 'apple-touch-icon', sizes: '180x180', href: './apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '96x96', href: './favicon-96x96.png' },
    { rel: 'icon', type: 'image/svg+xml', href: './favicon.svg' },
    { rel: 'shortcut icon', href: './favicon.ico' },
    { name: 'apple-mobile-web-app-title', content: 'Bitcoin Knots' },
    { rel: 'manifest', href: '/site.webmanifest' },
  ],
})
</script>

<style lang="postcss">
html {
  scroll-behavior: smooth;
}
</style>
