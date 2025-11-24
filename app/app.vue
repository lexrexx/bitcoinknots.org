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
  title: 'Bitcoin Knots',
  htmlAttrs: {
    lang: 'en',
  },
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

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
