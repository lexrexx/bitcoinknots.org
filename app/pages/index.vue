<template>
  <!-- <NuxtLayout :name="layout"> -->
  <div class="container w-full mx-auto">
    <!-- Squared -->
    <!-- <div class="grid grid-cols-12 gap-8 mt-28">
      <div class="col-span-4">
        <div class="w-full pb-full bg-brand-500 block rounded-3xl">
          <div class="w-full h-full flex">
            <h1 class="absolute text-9xl font-bold tracking-tighter leading-[1] m-10">
              Bitcoin Is
              <span class="block text-white dark:text-white">
                Money
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div class="col-span-5">
        <div class="w-full pb-full bg-brand-500 block rounded-3xl">
          <div class="w-full h-full flex">
            <h1 class="absolute text-9xl font-bold tracking-tighter leading-[1] m-10">
              Bitcoin Is
              <span class="block text-white dark:text-white">
                Money
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div> -->
    <!-- Next Section -->
    <!-- Hero -->
    <section class="my-28 py-12 --rounded-2xl --bg-brand-500/100">
      <div class="ms-16 text-left">
        <h1 class="text-[11rem] font-bold tracking-tighter max-w-4xl leading-[1]">
          Bitcoin Is
          <span class="text-white dark:text-brand-500">
            Money
          </span>
        </h1>

        <h2 class="text-3xl tracking-wider uppercase mt-28 mb-4">
          Take Control ---> Own Your Node
        </h2>

        <NuxtLink to="#Features">
          <button
            type="button"
            class="
              text-black dark:text-white
              --hover:bg-white/90 --dark:hover:bg-black/90
              focus:ring-4
              focus:ring-black/80 dark:focus:ring-brand-500/80
              font-bold
              rounded-lg
              text-xl
              uppercase
              border-2
              border-black dark:border-white
              px-10
              py-8
              mt-12
              me-6
              focus:outline-none
              tracking-wide
            "
          >
            Learn More
          </button>
        </NuxtLink>

        <NuxtLink to="#Download">
          <button
            type="button"
            class="
              text-black dark:text-black
              bg-white dark:bg-brand-500
              --hover:bg-white/90 --dark:hover:bg-black/90
              focus:ring-4
              focus:ring-white/80 dark:focus:ring-black/80
              font-bold
              rounded-lg
              text-xl
              uppercase
              px-10
              py-8
              mt-12
              focus:outline-none
              tracking-wide
            "
          >
            Get Knots Now
          </button>
        </NuxtLink>
      </div>
    </section>

    <!-- Next Section -->
    <!-- Features -->
    <section
      id="Features"
      class="mx-4 pt-32 mb-24"
    >
      <!-- <section class="mt-28 py-24 rounded-2xl bg-brand-500/100"> -->

      <div class="--ms-16 text-left">
        <h2 class="text-black dark:text-white text-[10rem] font-bold tracking-tighter max-w-4xl leading-[1]">
          Built for
          <span class="text-white dark:text-brand-500">
            Sovereignty
          </span>
        </h2>

        <p class="text-3xl leading-normal mt-32 mb-12 max-w-5xl">
          <span class="font-bold">Bitcoin Knots</span> is a full node implementation that empowers you to fully validate the blockchain and enforce Bitcoin's rules. It includes advanced features and privacy patches not yet available in other clients, giving you greater control over your financial sovereignty.
        </p>
        <p class="text-3xl leading-normal mt-12 mb-32 font-bold text-white">
          Join the experts and take your node to the next level.
        </p>

        <!-- Content -->
        <div class="grid grid-cols-2 gap-8 pt-12">
          <div>
            <div class="p-8 text-white dark:text-black bg-black dark:bg-white rounded-2xl">
              <span class="text-2xl text-brand-500 block">/ A</span>
              <h5 class="mt-12 pb-2 inline-block text-4xl font-bold">
                Advanced Features
              </h5>
            </div>
            <ul class="text-xl">
              <li class="w-full rounded-2xl mt-4 p-8">
                <!-- <span class="bg-black rounded-2xl inline-block"> -->
                <AppIcon
                  name="Network"
                  class="-ms-6 h-32 w-32 text-white dark:text-brand-500"
                />
                <!-- </span> -->
                <h6 class="text-2xl font-bold my-4">
                  Pay-to-Endpoint
                </h6>
                <p>Go beyond basic payments. This feature helps protect against network-level censorship by allowing payments to be sent directly to a node's IP address, strengthening Bitcoin's peer-to-peer ethos.</p>
              </li>
              <li class="w-full rounded-2xl mt-4 p-8">
                <AppIcon
                  name="Incognito"
                  class="-ms-6 h-32 w-32 text-white dark:text-brand-500"
                />
                <h6 class="text-2xl font-bold my-4">
                  Coinswap Implementation
                </h6>
                <p>Enhance your privacy on-chain. Coinswap is a trustless protocol for obfuscating the trail of your coins, making chain analysis more difficult. Knots brings this powerful feature directly to your node.</p>
              </li>
              <li class="w-full rounded-2xl mt-4 p-8">
                <AppIcon
                  name="Sliders"
                  class="-ms-6 h-32 w-32 text-white dark:text-brand-500"
                />
                <h6 class="text-2xl font-bold my-4">
                  RPC & Config Enhancements
                </h6>
                <p>Unlock greater control for advanced users and developers. Knots includes additional Remote Procedure Call (RPC) commands and configuration options, giving you finer-grained control over your node's behavior.</p>
              </li>
            </ul>
          </div>

          <div>
            <div class="p-8 text-black bg-white dark:bg-brand-500 rounded-2xl">
              <span class="text-2xl text-brand-500 block dark:text-white">/ B</span>
              <h5 class="mt-12 pb-2 inline-block text-4xl font-bold">
                Core Experience
              </h5>
            </div>
            <ul class="text-xl">
              <li class="w-full rounded-2xl mt-4 p-8">
                <AppIcon
                  name="Checkmark"
                  class="-ms-6 h-32 w-32 text-white dark:text-brand-500"
                />
                <h6 class="text-2xl font-bold my-4">
                  Bitcoin Core Compatibility
                </h6>
                <p>The solid foundation you trust. Bitcoin Knots is a full-node implementation that validates all consensus rules, ensuring complete compatibility and security of the Bitcoin network.</p>
              </li>
              <li class="w-full rounded-2xl mt-4 p-8">
                <AppIcon
                  name="GUI"
                  class="-ms-6 h-32 w-32 text-white dark:text-brand-500"
                />
                <h6 class="text-2xl font-bold my-4">
                  Graphical User Interface (GUI) Patches
                </h6>
                <p>A more informative and usable node experience. The Knots GUI includes various community-developed patches that add helpful information and tools not found in the standard interface.</p>
              </li>
              <li class="w-full rounded-2xl mt-4 p-8">
                <AppIcon
                  name="Clock"
                  class="-ms-6 h-32 w-32 text-white dark:text-brand-500"
                />
                <h6 class="text-2xl font-bold my-4">
                  Conservative Release Cycle
                </h6>
                <p>Stability for the long haul. Knots often incorporates features from Bitcoin Core after they have undergone extensive testing, offering a robust and reliable node option for production environments.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Next Section -->
    <!-- Download -->
    <section
      id="Download"
      class="mx-4 pt-32 mb-24"
    >
      <div class="--ms-16 text-left">
        <h2 class="text-black dark:text-white text-[10rem] font-bold tracking-tighter max-w-4xl leading-[1] --mx-auto">
          Download
          <span class="text-white dark:text-brand-500">
            Knots
          </span>
        </h2>

        <h2 class="text-3xl tracking-wider uppercase mt-24">
          ---> Choose Your Flavor
        </h2>

        <!-- Pre -->
        <div class="grid grid-cols-3 gap-4 mt-20">
          <NuxtLink
            to="#"
            class="text-lg font-bold text-black dark:text-white"
          >Release Notes</NuxtLink>
          <NuxtLink
            to="#"
            class="text-lg text-white"
          >+ Fingerprint</NuxtLink>
          <div class="flex w-full place-content-between">
            <NuxtLink
              to="#"
              class="text-lg text-white"
            >+ Signature</NuxtLink>
            <NuxtLink
              to="#"
              class="text-lg text-black dark:text-white -mt-3"
            >
              <AppVersion />
            </NuxtLink>
          </div>
        </div>

        <div class="grid grid-cols-3 gap-4 my-6">
          <!-- Linux Downloads -->
          <AppCollapse
            :id="0"
            :collapsed="collapsePanels[0].isVisible"
            title="Linux"
            icon="Linux"
            @toggle="toggleCollapse"
          >
            <template #collapseContent>
              <ul class="collapsed text-2xl text-left mt-4 mb-6">
                <AppCollapsedItem title="x86-64" />
                <AppCollapsedItem title="aarch64" />
                <AppCollapsedItem title="ppc64 BE" />
                <AppCollapsedItem title="ppc64 LE" />
                <AppCollapsedItem title="riscv64" />
                <AppCollapsedItem title="arm" />
                <AppCollapsedItem
                  title="Ubuntu PPA"
                  class="border-none pb-4"
                />
              </ul>
            </template>
          </AppCollapse>

          <!-- MacOS Downloads -->
          <AppCollapse
            :id="1"
            :collapsed="collapsePanels[1].isVisible"
            title="MacOS"
            icon="Apple"
            @toggle="toggleCollapse"
          >
            <template #collapseContent>
              <ul class="collapsed text-2xl text-left mt-4 mb-6">
                <AppCollapsedItem
                  title="Intel Mac"
                  type="App"
                />
                <AppCollapsedItem
                  title="Intel Mac"
                  type="Terminal"
                />
                <AppCollapsedItem
                  title="Apple Silicon"
                  type="App"
                />
                <AppCollapsedItem
                  title="Apple Silicon"
                  type="Terminal"
                  class="border-none pb-4"
                />
              </ul>
            </template>
          </AppCollapse>

          <!-- Windows Downloads -->
          <div class="">
            <AppCollapse
              :id="2"
              :collapsed="collapsePanels[2].isVisible"
              title="Windows"
              icon="Windows"
              @toggle="toggleCollapse"
            >
              <template #collapseContent>
                <ul class="collapsed text-2xl text-left mt-4 mb-6">
                  <AppCollapsedItem
                    title="Install"
                    type="EXE"
                  />
                  <AppCollapsedItem
                    title="Portable"
                    type="ZIP"
                  />
                </ul>
              </template>
            </AppCollapse>

            <!-- Source Code Downloads -->
            <AppCollapse
              :id="3"
              :collapsed="collapsePanels[3].isVisible"
              title="Source Code"
              icon="Github"
              class="col-start-3 mt-4"
              @toggle="toggleCollapse"
            >
              <template #collapseContent>
                <ul class="collapsed text-2xl text-left mt-4 mb-6">
                  <AppCollapsedItem
                    title="Github"
                    type="REPO"
                  />
                  <AppCollapsedItem
                    title="Archive"
                    type="TAR"
                  />
                </ul>
              </template>
            </AppCollapse>
          </div>
        </div>
      </div>
    </section>

    <!-- Next Section -->
    <!-- Mail -->
    <section
      id="Mail"
      class="mx-4 pt-32 mb-24"
    >
      <div class="">
        <h2 class="text-black dark:text-white text-[10rem] font-bold tracking-tighter max-w-4xl leading-[1]">
          Join the
          <span class="text-white dark:text-brand-500">
            Inner Circle
          </span>
        </h2>

        <h3 class="text-4xl tracking-snug leading-normal --uppercase mt-12 max-w-5xl">
          Get release announcements and critical security advisories directly from the lead maintainer ---> Luke Dashjr.
        </h3>

        <p class="text-3xl font-bold tracking-tight my-12">
          Choose your preferred way to subscribe:
        </p>
      </div>

      <div class="grid grid-cols-2 gap-12 my-6 text-lg">
        <div class="">
          <div class="">
            <AppIcon
              name="Email"
              class="text-white dark:text-brand-500 w-24 h-24 -ms-3"
            />
          </div>
          <h4 class="my-4 text-2xl font-bold">
            Subscribe with any Email Address
          </h4>
          <p class="">
            This is the simplest method and doesn't require a Google account. Just send a blank email to <NuxtLink
              to="mailto:bitcoin-knots-announce+subscribe@googlegroups.com"
              class="font-bold"
            >bitcoin-knots-announce+subscribe@googlegroups.com</NuxtLink>. You will receive a confirmation email. Simply reply to it to complete your subscription.
          </p>
        </div>

        <div class="">
          <div class="">
            <AppIcon
              name="G"
              class="text-white dark:text-brand-500 w-24 h-24 -ms-5"
            />
          </div>
          <h4 class="my-4 text-2xl font-bold">
            Subscribe with a Google Account
          </h4>
          <p>
            If you prefer to manage subscriptions through Google Groups. <NuxtLink
              to="https://groups.google.com/g/bitcoin-knots-announce"
              class="font-bold"
            >Click here to visit the Google Groups page</NuxtLink> and click the <span class="italic">"Join Group"</span> button.
          </p>
        </div>
      </div>
    </section>
  </div>
  <!-- </NuxtLayout> -->
</template>

<script setup>
const collapsePanels = ref([
  { id: 0, isVisible: false },
  { id: 1, isVisible: false },
  { id: 2, isVisible: false },
  { id: 3, isVisible: false },
])

const openCollapse = (id) => {
  collapsePanels.value.forEach((el, index) => {
    if (id === index) {
      el.isVisible = !el.isVisible
    }
  })
}

const toggleCollapse = (id) => {
  openCollapse(id)
}
</script>
