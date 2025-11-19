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

        <h2 class="col-span-12 flex justify-between items-start w-full mt-24 mb-4 text-5xl uppercase tracking-wider">
          <span class="">Take Control</span>
          <span class="text-onyx dark:text-brand">---></span>
          <span class="">Own Your Node</span>
        </h2>

        <!-- <h2 class="col-span-12 text-right mt-28 mb-4 text-5xl uppercase tracking-wider">
          Take Control --- Own Your Node
        </h2> -->

        <div class="col-span-12 text-right mt-8 w-full">
          <NuxtLink
            to="#Download"
            class=""
          >
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
      class="mx-4 grid grid-cols-12 pt-32"
    >
      <h2 class="col-span-9 font-bold col-start-1 text-[10rem] text-onyx dark:text-vanil leading-[1] tracking-tighter">
        Built for
        <span class="text-vanil dark:text-brand">
          Sovereignty
        </span>
      </h2>

      <!-- <h3 class="col-span-12 flex justify-between items-start w-full mt-20 mb-4 text-4xl uppercase tracking-wider">
        <span class="">Bitcoin</span>
        <span class="text-onyx dark:text-brand">---</span>
        <span class="">Knots</span>
      </h3> -->

      <p class="col-span-12 col-start-1 mt-32 mb-12 text-4xl leading-normal">
        <span class="font-bold">Bitcoin <--> Knots </span>is a full node implementation that empowers you to fully validate the blockchain and enforce Bitcoin's rules. It includes advanced features and privacy patches not yet available in other clients, giving you greater control over your financial sovereignty.
      </p>

      <!-- <h2 class="col-span-12 flex justify-between items-start w-full my-24 text-5xl uppercase tracking-wider">
        <span class="">Be a Sovereign</span>
        <span class="text-onyx dark:text-brand rotate-180"><--- </span>
        <span class="">Node Operator</span>
      </h2> -->

      <!-- <p class="col-span-12 text-3xl uppercase tracking-wider my-12">Be a Sovereign --- Node Operator</p> -->

      <!-- <p class="col-span-12 col-start-1 mt-12 mb-32 font-bold text-onyx text-4xl leading-tight">
          Join the experts and take your node to the next level:
        </p> -->

      <!-- Content -->
      <div class="col-span-12 my-24">
        <div class="gap-8 grid grid-cols-2">
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
          <span class="block text-vanil dark:text-brand">
            & Verify
          </span>
        </h2>

        <h3 class="col-span-12 flex justify-between items-start w-full mt-20 mb-4 text-4xl uppercase tracking-wider">
          <span class="">Choose Your</span>
          <span class="text-onyx dark:text-brand">---></span>
          <span class="">Operating System :</span>
        </h3>

        <!-- Pre -->
        <div class="gap-4 grid grid-cols-3 mt-20 items-center">
          <div class="col-start-1 flex place-content-between w-full">
            <div class="flex">
              <NuxtLink
                to="#"
                class="items-center flex m-1 px-2 py-1 border-2 border-onyx dark:border-brand rounded-md font-bold text-2xs text-onyx dark:text-brand tracking-tight"
              >
                Fingerprint
              </NuxtLink>
              <NuxtLink
                to="#"
                class="items-center flex m-1 px-2 py-1 border-2 border-onyx dark:border-brand rounded-md font-bold text-2xs text-onyx dark:text-brand tracking-tight"
              >
                Signature
              </NuxtLink>
            </div>
          </div>
          <div class="flex justify-between items-center col-start-3">
            <NuxtLink
              target="blank"
              to="https://github.com/bitcoinknots/bitcoin/releases"
              class="font-bold text-onyx dark:text-vanil text-lg underline"
            >
              Release Notes
            <!-- <span class="inline-block -rotate-45 relative -top-1.5 -left-1.5 text-sm">➔</span> -->
            </NuxtLink>

            <AppVersion
              to="#Download"
              class="text-lg"
            />
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
    <!-- Faq -->
    <section
      id="Faq"
      class="mx-4 mb-24 pt-32"
    >
      <h2 class="font-bold text-[10rem] text-onyx dark:text-vanil leading-[1] tracking-tighter">
        Get
        <span class="block text-vanil dark:text-brand">
          Answers
        </span>
      </h2>

      <h3 class="col-span-12 flex justify-between items-start w-full mt-20 mb-4 text-4xl uppercase tracking-wider">
        <span class="">To Common Questions</span>
        <span class="text-onyx dark:text-brand">---></span>
        <span class="">About Knots :</span>
      </h3>

      <!-- <h3 class="text-4xl font-bold tracking-tight">
          To common questions about Bitcoin Knots.
        </h3> -->

      <div class="grid grid-cols-3 gap-12 mt-24">
        <div class="qa text-2xl">
          <div class="q py-4 font-bold">
            I already run Bitcoin Core. Why should I consider Bitcoin Knots?
          </div>
          <div class="a py-4 text-xl">
            Think of Bitcoin Knots as "Bitcoin Core with optional extras." If you're happy with Core, it's an excellent choice. However, if you need features like Pay-to-Endpoint for censorship resistance, early access to privacy patches like Coinswap, or a more conservative release cycle, then Knots is for you. It's the power-user's node.
          </div>
        </div>

        <div class="qa text-2xl">
          <div class="q py-4 font-bold">
            Is Bitcoin Knots a "hard fork" or an "altcoin"?
          </div>
          <div class="a py-4 text-xl">
            Absolutely not. Bitcoin Knots is a software fork, not a consensus fork. It follows all the same rules as Bitcoin Core. You will be running a fully validating Bitcoin node on the exact same Bitcoin network. The differences lie in added features, policy patches, and release timing.
          </div>

        </div>
        <div class="qa text-2xl">
          <div class="q py-4 font-bold">
            Is it safe to run Bitcoin Knots on the main network with real bitcoin?
          </div>
          <div class="a py-4 text-xl">
            Yes. Bitcoin Knots is built for production use on the main Bitcoin network. It is a stable, fully-validating node. As with any Bitcoin software, you should always verify the digital signatures of the download to ensure you have the authentic version.
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
          <span class="block text-vanil dark:text-brand">
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
