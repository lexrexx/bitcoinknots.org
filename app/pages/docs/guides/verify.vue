<template>
  <div class="mx-auto w-full --overflow-hidden min-h-screen ">
    <section class="grid grid-cols-12 py-28 mx-4 gap-4 ">
      <div
        class=" col-span-2 --border-r --border-onyx/10 --dark:border-vanil/10 overflow-y-scroll max-h-[calc(100dvh-112px)] sticky top-28"
      >
        <NuxtLink
          to="/"
          class="
            mt-1
            font-bold
            leading-[1]
            tracking-tighter
            text-sm
            text-onyx
            dark:text-vanil
            hover:text-brand
          "
        >
          <!-- eslint-disable-next-line vue/no-parsing-error -->
          <span class="me-2"> <--- </span>
          <span class="">Back</span>
        </NuxtLink>
      </div>
      <div
        class=" col-span-7 min-h-screen"
      >
        <div class="text-sm tracking-tight mb-4">
          Docs / Guides / Verify
        </div>
        <h1
          class="
            font-bold
            leading-[1]
            tracking-tight
            text-2xl
            md:text-3xl
            lg:text-4xl
            2xl:text-3xl
          "
        >
          <span
            class="
              block
            text-onyx
            dark:text-vanil
            --text-brand
            py-8
            --border-t w-full --border-onyx/10
            text-5xl
          "
          > Verify Your Download </span>
        </h1>
        <h2 class="text-2xl mt-4 mb-12 tracking-tight">
          A step-by-step guide to cryptographically verifying your
          <NuxtLink
            to="/#Download"
            class="font-bold"
          >
            Bitcoin Knots software.
          </NuxtLink>
        </h2>
        <p class="text-base p-4 border-l-8 border-brand my-4">
          This guide will walk you through the process of verifying the authenticity and integrity of your Bitcoin Knots download. Follow the steps below to ensure your copy is legitimate and has not been tampered with. This is a critical security practice.
        </p>

        <p class="text-lg">
          Protecting your node starts with verifying your software. This process uses cryptographic signatures to prove the files you downloaded are the exact ones released by the Bitcoin Knots maintainers.
        </p>

        <h3 class="pt-8 pb-4 text-3xl font-bold tracking-tight --text-brand">
          <span class="text-brand me-2">#</span> Prerequisites:
        </h3>

        <p>
          Ensure you have the following ready before starting the platform-specific steps below:
        </p>

        <ul class="text-base list-inside list-disc ms-4 leading-loose">
          <li class="">
            The <NuxtLink to="/#Download">Bitcoin Knots Installer</NuxtLink> you downloaded.
          </li>

          <li class="">
            The Corresponding
            <NuxtLink
              :to="appConfig.url.signature"
              target="_blank"
            >
              Signature File
            </NuxtLink>
            (.asc/.sig) downloaded from the same source.
          </li>

          <li class="">
            The
            <NuxtLink
              :to="appConfig.url.fingerprint"
              target="_blank"
            >
              Fingerprint File
            </NuxtLink>
            (.sha256/.sha256sum) to verify the download's integrity.
          </li>

          <li class="">
            A Terminal/Command Line with
            <NuxtLink
              to="https://gnupg.org/"
              target="_blank"
            >
              GnuPG (GPG)
            </NuxtLink>
            installed and configured.
          </li>
        </ul>
        <p class="p-4 rounded-lg border border-onyx dark:border-vanil my-8 text-base font-bold">
          Having these items ready will make the verification process smooth and quick.
        </p>
        <h3 class="pt-8 pb-4 text-3xl font-bold tracking-tight --text-brand">
          <span class="text-brand me-2">#</span> Linux Guide
        </h3>
        <h3 class="pt-8 pb-4 text-3xl font-bold tracking-tight --text-brand">
          <span class="text-brand me-2">#</span> MacOS Guide
        </h3>        <h3 class="pt-8 pb-4 text-3xl font-bold tracking-tight --text-brand">
          <span class="text-brand me-2">#</span> Windows Guide
        </h3>
      </div>
      <!-- TOC -->
      <div
        class="col-span-2 col-start-11 max-h-[calc(100dvh-112px)] sticky top-28"
      >
        <nav class="">
          <span class="text-sm font-bold">On This Page:</span>
          <ul class="text-sm my-4">
            <li class="mb-2 text-brand font-bold">
              Verify Your Download
            </li>
            <li class="my-2">
              Prerequisites
            </li>
            <li class="my-2">
              Linux Guide
            </li>
            <li class="my-2">
              MacOS Guide
            </li>
            <li class="my-2">
              Windows Guide
            </li>
          </ul>
        </nav>
      </div>
    </section>
  </div>
</template>

<script setup>
// const layout = 'default'
const appConfig = useAppConfig()
</script>
