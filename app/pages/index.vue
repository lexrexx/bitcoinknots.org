<template>
  <!-- <NuxtLayout :name="layout"> -->
  <!-- <AppBreakpoints /> -->
  <div class="container mx-auto w-full overflow-hidden">
    <!-- MARK: Hero -->
    <AppHero />

    <!-- MARK: About -->
    <!-- <section
      id="About"
      class="
        mx-4 grid grid-cols-12
        lg:pt-32
      "
    > -->
    <AppGridSection>
      <AppTitle
        title-a="Built for"
        title-b="Sovereignty"
      />

      <p class="col-span-9 col-start-1 mb-12 mt-32 text-4xl leading-normal">
        <!--  eslint-disable-next-line vue/no-parsing-error -->
        <span class="font-bold">Bitcoin <--> Knots </span>is a free and open-source full node
        implementation that empowers you to fully validate the blockchain and enforce Bitcoin's
        rules. It includes advanced features and privacy patches not yet available in other clients,
        giving you greater control over your financial sovereignty.
      </p>

      <div class="col-span-5 me-12 mt-12">
        <h3
          class="
          py-4 text-3xl font-bold
          dark:text-brand
        "
        >
          A Node for the Original Vision
        </h3>
        <p class="py-4 text-xl leading-relaxed">
          In a climate of increasing block space debate and protocol changes that risk altering
          Bitcoin's core value proposition, running a node is more critical than ever.
        </p>
        <p
          class="
          my-4 border-l-4 border-onyx ps-8 text-xl leading-relaxed
          dark:border-brand
        "
        >
          Bitcoin Knots is built for those who believe in a conservative approach to consensus and a
          clear separation between monetary layer and application layer.
        </p>
        <p class="py-4 text-xl leading-relaxed">
          It implements default policies that prioritize financial transactions, helping to
          safeguard the chain from bloat and ensure it remains accessible for its primary purpose:
          peer-to-peer electronic cash.
        </p>
      </div>

      <div class="col-span-5 me-12 mt-12">
        <h3
          class="
          py-4 text-3xl font-bold
          dark:text-brand
        "
        >
          Your Voice in the Consensus
        </h3>
        <p class="py-4 text-xl leading-relaxed">
          While other clients may follow a path of increasing permissiveness, Knots provides a
          technical implementation for a different viewpoint.
        </p>
        <p class="py-4 text-xl leading-relaxed">
          By choosing Knots, you are not just running a node, you are casting a vote for a specific
          vision of Bitcoin's future. You are taking a stand for a scalable, efficient, and
          sovereign monetary network, directly enforcing your preferred rules on the network you
          help secure.
        </p>
      </div>
      <div class="py-28 col-span-5 text-9xl text-vanil dark:text-brand font-bold flex justify-start items-center">
        --->
      </div>
      <div
        id="Knots"
        class="py-28 col-span-7 col-start-6"
      >
        <AppLogotype class="w-full" />
      </div>
    </AppGridSection>

    <!-- MARK: Features -->
    <section
      id="Features"
      class="mx-4 grid grid-cols-12 pt-32"
    >
      <AppTitle
        title-a="Power"
        title-b="Features"
      />

      <h3 class="tracking-snug col-span-9 mt-24 text-4xl leading-normal">
        Maintains full Bitcoin compatibility, while offering enhanced tools for node sovereignty and
        chain cleanliness.
      </h3>

      <!-- Content -->
      <div class="col-span-12 my-24">
        <div class="grid grid-cols-2 gap-24">
          <div>
            <div
              class="
              text-onyx
              dark:text-vanil
            "
            >
              <span
                class="
                block text-2xl text-vanil
                dark:text-brand
              "
              >/ A</span>
              <h5 class="mb-32 mt-8 text-5xl font-bold tracking-tight">
                Advanced Features
              </h5>
            </div>
            <ul class="mx-8 text-xl">
              <li class="grid-cols-[1fr, auto] grid">
                <!-- <span class="inline-block bg-onyx rounded-2xl"> -->
                <AppIcon
                  name="Network"
                  class="
                    -ms-6 h-24 w-24 text-vanil
                    dark:text-brand
                  "
                />
                <!-- </span> -->

                <h6 class="ms-8 text-2xl font-bold">
                  Pay-to-Endpoint
                </h6>
                <p class="col-start-2 -mt-8 ms-8 pb-24">
                  Go beyond basic payments. This feature helps protect against network-level
                  censorship by allowing payments to be sent directly to a node's IP address,
                  strengthening Bitcoin's peer-to-peer ethos.
                </p>
              </li>

              <li class="grid-cols-[1fr, auto] grid">
                <AppIcon
                  name="Incognito"
                  class="
                    -ms-6 h-24 w-24 text-vanil
                    dark:text-brand
                  "
                />
                <h6 class="ms-8 text-2xl font-bold">
                  Coinswap Implementation
                </h6>
                <p class="col-start-2 -mt-8 ms-8 pb-24">
                  Enhance your privacy on-chain. Coinswap is a trustless protocol for obfuscating
                  the trail of your coins, making chain analysis more difficult. Knots brings this
                  powerful feature directly to your node.
                </p>
              </li>
              <li class="grid-cols-[1fr, auto] grid">
                <AppIcon
                  name="Sliders"
                  class="
                    -ms-6 h-24 w-24 text-vanil
                    dark:text-brand
                  "
                />
                <h6 class="ms-8 text-2xl font-bold">
                  RPC & Config Enhancements
                </h6>
                <p class="col-start-2 -mt-8 ms-8 pb-24">
                  Unlock greater control for advanced users and developers. Knots includes
                  additional Remote Procedure Call (RPC) commands and configuration options, giving
                  you finer-grained control over your node's behavior.
                </p>
              </li>
            </ul>
          </div>

          <div>
            <div
              class="
              text-onyx
              dark:text-vanil
            "
            >
              <span
                class="
                block text-2xl text-vanil
                dark:text-brand
              "
              >/ B</span>
              <h5 class="mb-32 mt-8 text-5xl font-bold tracking-tight">
                Core Experience
              </h5>
            </div>
            <ul class="text-xl">
              <li class="grid-cols-[1fr, auto] grid">
                <AppIcon
                  name="Checkmark"
                  class="
                    -ms-6 h-24 w-24 text-vanil
                    dark:text-brand
                  "
                />
                <h6 class="ms-8 text-2xl font-bold">
                  Bitcoin Core Compatibility
                </h6>
                <p class="col-start-2 -mt-8 ms-8 pb-24">
                  The solid foundation you trust. Bitcoin Knots is a full-node implementation that
                  validates all consensus rules, ensuring complete compatibility and security of the
                  Bitcoin network.
                </p>
              </li>
              <li class="grid-cols-[1fr, auto] grid">
                <AppIcon
                  name="GUI"
                  class="
                    -ms-6 h-24 w-24 text-vanil
                    dark:text-brand
                  "
                />
                <h6 class="ms-8 text-2xl font-bold">
                  Graphical User Interface (GUI) Patches
                </h6>
                <p class="col-start-2 -mt-8 ms-8 pb-24">
                  A more informative and usable node experience. The Knots GUI includes various
                  community-developed patches that add helpful information and tools not found in
                  the standard interface.
                </p>
              </li>
              <li class="grid-cols-[1fr, auto] grid">
                <AppIcon
                  name="Clock"
                  class="
                    -ms-6 h-24 w-24 text-vanil
                    dark:text-brand
                  "
                />
                <h6 class="ms-8 text-2xl font-bold">
                  Conservative Release Cycle
                </h6>
                <p class="col-start-2 -mt-8 ms-8 pb-24">
                  Stability for the long haul. Knots often incorporates features from Bitcoin Core
                  after they have undergone extensive testing, offering a robust and reliable node
                  option for production environments.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Download & Verify -->
    <!-- Download & Verify -->
    <!-- Download & Verify -->
    <!-- Download & Verify -->
    <!-- Download & Verify -->
    <!-- Download & Verify -->
    <!-- Download & Verify -->
    <!-- Download & Verify -->
    <!-- Download & Verify -->
    <!-- Download & Verify -->
    <!-- Download & Verify -->
    <!-- Download & Verify -->
    <!-- Download & Verify -->
    <!-- Download & Verify -->
    <!-- Download & Verify -->
    <!-- Download & Verify -->
    <!-- Download & Verify -->
    <!-- Download & Verify -->
    <!-- Download & Verify -->
    <!-- Download & Verify -->
    <!-- Download & Verify -->
    <!-- Download & Verify -->
    <!-- Download & Verify -->
    <section
      id="Download"
      class="--mb-24 mx-4 pt-32"
    >
      <AppTitle
        title-a="Download"
        title-b="& Verify"
      />

      <AppDownloadVerify />

      <AppBrandCollage class="mt-24" />
    </section>

    <!-- MARK: Faq -->
    <section
      id="Faq"
      class="--mb-24 mx-4 pt-32"
    >
      <AppTitle
        title-a="Get"
        title-b="Answers"
      />

      <h3
        class="
          col-span-12 mb-4 mt-20 flex w-full items-start justify-between text-4xl uppercase
          tracking-wider
        "
      >
        <span class="">Common Questions ---> About Knots</span>
      </h3>

      <!-- QA -->
      <AppFaq class="mt-24" />
    </section>

    <!-- Mail -->
    <section
      id="News"
      class="mx-4 mb-24 pt-32"
    >
      <div class="">
        <AppTitle
          title-a="Stay In"
          title-b="The Loop"
        />

        <h3 class="--uppercase tracking-snug mt-12 max-w-5xl text-4xl leading-normal">
          Get release announcements and critical security advisories directly from the lead
          maintainer ---> Luke Dashjr.
        </h3>

        <p class="my-12 text-3xl font-bold tracking-tight">
          Choose your preferred way to subscribe:
        </p>
      </div>

      <div class="my-6 grid grid-cols-2 gap-12 text-lg">
        <div class="">
          <div class="">
            <AppIcon
              name="Email"
              class="
                -ms-3 h-24 w-24 text-vanil
                dark:text-brand
              "
            />
          </div>
          <h4 class="my-4 text-2xl font-bold">
            Subscribe with any Email Address
          </h4>
          <p class="">
            This is the simplest method and doesn't require a Google account. Just send a blank
            email to
            <NuxtLink
              :to="appConfig.url.group_mailto"
              class="font-bold"
            >
              bitcoin-knots-announce+subscribe@googlegroups.com
            </NuxtLink>. You will receive a confirmation email. Simply reply to it to complete your
            subscription.
          </p>
        </div>

        <div class="">
          <div class="">
            <AppIcon
              name="G"
              class="
                -ms-5 h-24 w-24 text-vanil
                dark:text-brand
              "
            />
          </div>
          <h4 class="my-4 text-2xl font-bold">
            Subscribe with a Google Account
          </h4>
          <p>
            If you prefer to manage subscriptions through Google Groups.
            <NuxtLink
              :to="appConfig.url.group"
              class="font-bold"
            >Click here to visit the Google Groups page</NuxtLink>
            and click the <span class="italic">"Join Group"</span> button.
          </p>
        </div>
      </div>
    </section>
  </div>
  <!-- </NuxtLayout> -->
</template>

<script setup>
const appConfig = useAppConfig()
</script>
