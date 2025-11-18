<template>
  <!-- <NuxtLayout :name="layout"> -->
  <div class="mx-auto w-full container">
    <!-- Squared -->
    <!-- <div class="gap-8 grid grid-cols-12 mt-28">

      <div class="col-span-4">
        <div class="block bg-onyx pb-full rounded-3xl w-full">
          <div class="flex w-full h-full">
            <h1 class="absolute m-10 font-bold text-9xl leading-[1] tracking-tighter">
              Bitcoin Is
              <span class="block text-vanil dark:text-vanil">
                Money
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div class="col-span-5">
        <div class="block bg-onyx pb-full rounded-3xl w-full">
          <div class="flex w-full h-full">
            <h1 class="absolute text-vanil m-10 font-bold text-9xl leading-[1] tracking-tighter">
              Bitcoin Is
              <span class="block text-brand dark:text-vanil">
                Money
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div> -->
    <!-- Next Section -->
    <!-- Hero -->
    <section class="my-28 py-8">
      <div class="ms-4 text-left grid grid-cols-12">
        <h1 class="col-span-9 col-start-1 font-bold lg:text-[12rem] xl:text[13rem] text-8xl md:text-9xl leading-[1] tracking-tighter">
          Bitcoin Is
          <span class="block text-vanil dark:text-brand">
            Money
          </span>
        </h1>

        <h2 class="col-span-12 flex justify-between items-end w-full mt-24 mb-4 text-4xl uppercase tracking-wider">
          <span class="">Take Control</span>
          <!-- <span class="dark:text-brand">---</span> -->
          <span class="text-vanil dark:text-brand">---></span>
          <span class="">Own Your Node</span>
          <NuxtLink to="#Download" class="">
            <button
              type="button"
              class="
                px-10
                py-10
                rounded-xl
                border-4
                focus:outline-none
                focus:ring-4
                border-onyx
                hover:border-vanil
                dark:border-brand
                dark:hover:border-vanil
                focus:ring-onyx
                dark:focus:ring-vanil
                text-onyx
                hover:text-vanil
                dark:text-brand
                dark:hover:text-vanil
                font-bold
                text-2xl
                uppercase
                tracking-wide
              "
            >
              Get Bitcoin Knots
            </button>
          </NuxtLink>
        </h2>

        <!-- <h2 class="col-span-12 text-right mt-28 mb-4 text-5xl uppercase tracking-wider">
          Take Control --- Own Your Node
        </h2> -->

        <div class="col-span-12 text-right mt-8 w-full">
          <!-- <NuxtLink to="#Features">
            <button
              type="button"
              class="me-6 px-10 py-8 border-2 border-onyx hover:border-vanil dark:border-vanil dark:hover:border-brand rounded-lg focus:outline-none focus:ring-4 focus:ring-onyx/80 dark:focus:ring-brand/80 font-bold text-onyx hover:text-vanil dark:hover:text-brand dark:text-vanil text-xl uppercase tracking-wide"
            >
              Learn More
            </button>
          </NuxtLink> -->

          <!-- <span class="text-4xl uppercase tracking-wider">---</span> -->
          
          <!-- <NuxtLink to="#Download" class="">
            <button
              type="button"
              class="--bg-vanil border-4 border-onyx dark:bg-brand px-10 py-8 rounded-lg focus:outline-none focus:ring-4 focus:ring-vanil/80 dark:focus:ring-onyx/80 font-bold text-onyx dark:text-onyx text-2xl uppercase tracking-wide"
            >
              Get Bitcoin Knots
            </button>
          </NuxtLink> -->
        </div>
      </div>
    </section>

    <!-- Next Section -->
    <!-- Features -->
    <section
      id="Features"
      class="mx-4 mb-24 pt-32"
    >
      <!-- <section class="bg-brand/100 mt-28 py-24 rounded-2xl"> -->

      <div class="--ms-16 text-left">
        <h2 class="max-w-4xl font-bold text-[10rem] text-onyx dark:text-vanil leading-[1] tracking-tighter">
          Built for
          <span class="text-vanil dark:text-brand">
            Sovereignty
          </span>
        </h2>

        <p class="mt-32 mb-12 max-w-5xl text-3xl leading-normal">
          <span class="font-bold">Bitcoin Knots</span> is a full node implementation that empowers you to fully validate the blockchain and enforce Bitcoin's rules. It includes advanced features and privacy patches not yet available in other clients, giving you greater control over your financial sovereignty.
        </p>
        <p class="mt-12 mb-32 font-bold text-vanil text-3xl leading-normal">
          Join the experts and take your node to the next level.
        </p>

        <!-- Content -->
        <div class="gap-8 grid grid-cols-2 pt-12">
          <div>
            <div class="bg-onyx dark:bg-vanil p-8 rounded-2xl text-vanil dark:text-onyx">
              <span class="block text-brand text-2xl">/ A</span>
              <h5 class="inline-block mt-12 pb-2 font-bold text-4xl">
                Advanced Features
              </h5>
            </div>
            <ul class="text-xl">
              <li class="mt-4 p-8 rounded-2xl w-full">
                <!-- <span class="inline-block bg-onyx rounded-2xl"> -->
                <AppIcon
                  name="Network"
                  class="-ms-6 w-32 h-32 text-vanil dark:text-brand"
                />
                <!-- </span> -->
                <h6 class="my-4 font-bold text-2xl">
                  Pay-to-Endpoint
                </h6>
                <p>Go beyond basic payments. This feature helps protect against network-level censorship by allowing payments to be sent directly to a node's IP address, strengthening Bitcoin's peer-to-peer ethos.</p>
              </li>
              <li class="mt-4 p-8 rounded-2xl w-full">
                <AppIcon
                  name="Incognito"
                  class="-ms-6 w-32 h-32 text-vanil dark:text-brand"
                />
                <h6 class="my-4 font-bold text-2xl">
                  Coinswap Implementation
                </h6>
                <p>Enhance your privacy on-chain. Coinswap is a trustless protocol for obfuscating the trail of your coins, making chain analysis more difficult. Knots brings this powerful feature directly to your node.</p>
              </li>
              <li class="mt-4 p-8 rounded-2xl w-full">
                <AppIcon
                  name="Sliders"
                  class="-ms-6 w-32 h-32 text-vanil dark:text-brand"
                />
                <h6 class="my-4 font-bold text-2xl">
                  RPC & Config Enhancements
                </h6>
                <p>Unlock greater control for advanced users and developers. Knots includes additional Remote Procedure Call (RPC) commands and configuration options, giving you finer-grained control over your node's behavior.</p>
              </li>
            </ul>
          </div>

          <div>
            <div class="bg-vanil dark:bg-brand p-8 rounded-2xl text-onyx">
              <span class="block text-brand dark:text-vanil text-2xl">/ B</span>
              <h5 class="inline-block mt-12 pb-2 font-bold text-4xl">
                Core Experience
              </h5>
            </div>
            <ul class="text-xl">
              <li class="mt-4 p-8 rounded-2xl w-full">
                <AppIcon
                  name="Checkmark"
                  class="-ms-6 w-32 h-32 text-vanil dark:text-brand"
                />
                <h6 class="my-4 font-bold text-2xl">
                  Bitcoin Core Compatibility
                </h6>
                <p>The solid foundation you trust. Bitcoin Knots is a full-node implementation that validates all consensus rules, ensuring complete compatibility and security of the Bitcoin network.</p>
              </li>
              <li class="mt-4 p-8 rounded-2xl w-full">
                <AppIcon
                  name="GUI"
                  class="-ms-6 w-32 h-32 text-vanil dark:text-brand"
                />
                <h6 class="my-4 font-bold text-2xl">
                  Graphical User Interface (GUI) Patches
                </h6>
                <p>A more informative and usable node experience. The Knots GUI includes various community-developed patches that add helpful information and tools not found in the standard interface.</p>
              </li>
              <li class="mt-4 p-8 rounded-2xl w-full">
                <AppIcon
                  name="Clock"
                  class="-ms-6 w-32 h-32 text-vanil dark:text-brand"
                />
                <h6 class="my-4 font-bold text-2xl">
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
      class="mx-4 mb-24 pt-32"
    >
      <div class="--ms-16 text-left">
        <h2 class="--mx-auto max-w-4xl font-bold text-[10rem] text-onyx dark:text-vanil leading-[1] tracking-tighter">
          Download
          <span class="text-vanil dark:text-brand">
            Knots
          </span>
        </h2>

        <h2 class="mt-24 text-3xl uppercase tracking-wider">
          ---> Choose Your Flavor
        </h2>

        <!-- Pre -->
        <div class="gap-4 grid grid-cols-3 mt-20">
          <NuxtLink
            to="#"
            class="font-bold text-onyx dark:text-vanil text-lg"
          >Release Notes</NuxtLink>
          <NuxtLink
            to="#"
            class="text-vanil dark:text-brand text-lg"
          >+ Fingerprint</NuxtLink>
          <div class="flex place-content-between w-full">
            <NuxtLink
              to="#"
              class="text-vanil dark:text-brand text-lg"
            >+ Signature</NuxtLink>
            <NuxtLink
              to="#"
              class="-mt-3 text-onyx dark:text-vanil text-lg"
            >
              <AppVersion />
            </NuxtLink>
          </div>
        </div>

        <div class="gap-4 grid grid-cols-3 my-6">
          <!-- Linux Downloads -->
          <AppCollapse
            :id="0"
            :collapsed="collapsePanels[0].isVisible"
            title="Linux"
            icon="Linux"
            @toggle="toggleCollapse"
          >
            <template #collapseContent>
              <ul class="mt-4 mb-6 text-2xl text-left collapsed">
                <AppCollapsedItem title="x86-64" />
                <AppCollapsedItem title="aarch64" />
                <AppCollapsedItem title="ppc64 BE" />
                <AppCollapsedItem title="ppc64 LE" />
                <AppCollapsedItem title="riscv64" />
                <AppCollapsedItem title="arm" />
                <AppCollapsedItem
                  title="Ubuntu PPA"
                  class="pb-4 border-none"
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
              <ul class="mt-4 mb-6 text-2xl text-left collapsed">
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
                  class="pb-4 border-none"
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
                <ul class="mt-4 mb-6 text-2xl text-left collapsed">
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
                <ul class="mt-4 mb-6 text-2xl text-left collapsed">
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
      class="mx-4 mb-24 pt-32"
    >
      <div class="">
        <h2 class="max-w-4xl font-bold text-[10rem] text-onyx dark:text-vanil leading-[1] tracking-tighter">
          Join the
          <span class="text-vanil dark:text-brand">
            Inner Circle
          </span>
        </h2>

        <h3 class="mt-12 max-w-5xl text-4xl --uppercase leading-normal tracking-snug">
          Get release announcements and critical security advisories directly from the lead maintainer ---> Luke Dashjr.
        </h3>

        <p class="my-12 font-bold text-3xl tracking-tight">
          Choose your preferred way to subscribe:
        </p>
      </div>

      <div class="gap-12 grid grid-cols-2 my-6 text-lg">
        <div class="">
          <div class="">
            <AppIcon
              name="Email"
              class="-ms-3 w-24 h-24 text-vanil dark:text-brand"
            />
          </div>
          <h4 class="my-4 font-bold text-2xl">
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
              class="-ms-5 w-24 h-24 text-vanil dark:text-brand"
            />
          </div>
          <h4 class="my-4 font-bold text-2xl">
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
