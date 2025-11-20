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
        <h1 class="col-span-9 col-start-1 font-bold lg:text-[16rem] xl:text[13rem] text-8xl md:text-9xl leading-[1] tracking-tighter">
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
                --border-4
                focus:outline-none
                focus:ring-4
                bg-onyx
                dark:bg-brand
                hover:bg-vanil
                dark:hover:bg-vanil
                focus:ring-onyx
                dark:focus:ring-vanil
                text-vanil
                dark:text-onyx
                hover:text-onyx
                dark:hover:text-onyx
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
    <!-- About -->
    <section
      id="About"
      class="mx-4 grid grid-cols-12 pt-32"
    >
      <h2 class="col-span-9 font-bold col-start-1 text-[10rem] text-onyx dark:text-vanil leading-[1] tracking-tighter">
        Built for
        <span class="text-vanil dark:text-brand">
          Sovereignty
        </span>
      </h2>

      <p class="col-span-12 col-start-1 mt-32 mb-12 text-4xl leading-normal">
        <span class="font-bold">Bitcoin <--> Knots </span>is a free and open-source full node implementation that empowers you to fully validate the blockchain and enforce Bitcoin's rules. It includes advanced features and privacy patches not yet available in other clients, giving you greater control over your financial sovereignty.
      </p>
    </section>

    <!-- Next Section -->
    <!-- Features -->
    <section
      id="Features"
      class="mx-4 grid grid-cols-12 pt-32"
    >

      <h2 class="col-span-12 font-bold col-start-1 text-[10rem] text-onyx dark:text-vanil leading-[1] tracking-tighter">
        Power  
        <span class="block text-vanil dark:text-brand">
          Features
        </span>
      </h2>

        <h3 class="mt-24 col-span-9 text-4xl leading-normal tracking-snug">
          Maintains full Bitcoin compatibility, while offering enhanced tools for node sovereignty and chain cleanliness.
        </h3>


      <!-- Content -->
      <div class="col-span-12 my-24">
        <div class="gap-24 grid grid-cols-2">
          <div>
            <div class=" text-onyx dark:text-vanil">
              <span class="block text-vanil dark:text-brand text-2xl">/ A</span>
              <h5 class="mb-16 mt-8 font-bold text-4xl tracking-tight">
                Advanced Features
                <span class="block mt-12 font-normal text-vanil dark:text-brand">---></span>
              </h5>
            </div>
            <ul class="text-xl mx-8">


              <li class="grid grid-cols-[1fr, auto]">
                <!-- <span class="inline-block bg-onyx rounded-2xl"> -->
                <AppIcon
                  name="Network"
                  class="-ms-6 w-24 h-24 text-vanil dark:text-brand"
                />
                <!-- </span> -->
                
                <h6 class="ms-8 font-bold text-2xl">
                  Pay-to-Endpoint
                </h6>
                <p class="col-start-2 ms-8 -mt-8 pb-24">
                  Go beyond basic payments. This feature helps protect against network-level censorship by allowing payments to be sent directly to a node's IP address, strengthening Bitcoin's peer-to-peer ethos.
                </p>
              </li>



              <li class="grid grid-cols-[1fr, auto]">
                <AppIcon
                  name="Incognito"
                  class="-ms-6 w-24 h-24 text-vanil dark:text-brand"
                />
                <h6 class="ms-8 font-bold text-2xl">
                  Coinswap Implementation
                </h6>
                <p class="col-start-2 ms-8 -mt-8 pb-24">
                  Enhance your privacy on-chain. Coinswap is a trustless protocol for obfuscating the trail of your coins, making chain analysis more difficult. Knots brings this powerful feature directly to your node.</p>
              </li>
              <li class="grid grid-cols-[1fr, auto]">
                <AppIcon
                  name="Sliders"
                  class="-ms-6 w-24 h-24 text-vanil dark:text-brand"
                />
                <h6 class="ms-8 font-bold text-2xl">
                  RPC & Config Enhancements
                </h6>
                <p class="col-start-2 ms-8 -mt-8 pb-24">
                  Unlock greater control for advanced users and developers. Knots includes additional Remote Procedure Call (RPC) commands and configuration options, giving you finer-grained control over your node's behavior.</p>
              </li>
            </ul>
          </div>

          <div>
            <div class=" text-onyx dark:text-vanil">
              <span class="block text-vanil dark:text-brand text-2xl">/ B</span>
              <h5 class="mb-16 mt-8 font-bold text-4xl tracking-tight">
                Core Experience
                <span class="block mt-12 font-normal text-vanil dark:text-brand">---></span>
              </h5>
            </div>
            <ul class="text-xl">
              <li class="grid grid-cols-[1fr, auto]">
                <AppIcon
                  name="Checkmark"
                  class="-ms-6 w-24 h-24 text-vanil dark:text-brand"
                />
                <h6 class="ms-8 font-bold text-2xl">
                  Bitcoin Core Compatibility
                </h6>
                <p class="col-start-2 ms-8 -mt-8 pb-24">
                  The solid foundation you trust. Bitcoin Knots is a full-node implementation that validates all consensus rules, ensuring complete compatibility and security of the Bitcoin network.</p>
              </li>
              <li class="grid grid-cols-[1fr, auto]">
                <AppIcon
                  name="GUI"
                  class="-ms-6 w-24 h-24 text-vanil dark:text-brand"
                />
                <h6 class="ms-8 font-bold text-2xl">
                  Graphical User Interface (GUI) Patches
                </h6>
                <p class="col-start-2 ms-8 -mt-8 pb-24">
                  A more informative and usable node experience. The Knots GUI includes various community-developed patches that add helpful information and tools not found in the standard interface.</p>
              </li>
              <li class="grid grid-cols-[1fr, auto]">
                <AppIcon
                  name="Clock"
                  class="-ms-6 w-24 h-24 text-vanil dark:text-brand"
                />
                <h6 class="ms-8 font-bold text-2xl">
                  Conservative Release Cycle
                </h6>
                <p class="col-start-2 ms-8 -mt-8 pb-24">
                  Stability for the long haul. Knots often incorporates features from Bitcoin Core after they have undergone extensive testing, offering a robust and reliable node option for production environments.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Next Section -->
    <!-- Download & Verify -->
    <section
      id="Download"
      class="mx-4 --mb-24 pt-32"
    >
      <h2 class="--mx-auto max-w-4xl font-bold text-[10rem] text-onyx dark:text-vanil leading-[1] tracking-tighter">
        Download
        <span class="block text-vanil dark:text-brand">
          & Verify
        </span>
      </h2>

      <!-- Steps -->
      <div class="grid grid-cols-3 gap-12 justify-between items-start w-full mt-24">
        <div class="">
          <p class="text-2xl font-bold tracking-tight py-4">
            Step 1
          </p>
          <p class="text-xl py-4">
            Download Bitcoin Knots for your operating system by selection an option below:
          </p>
          <p class="text-3xl text-onyx dark:text-brand py-4 --absolute inline-block">
            --->
          </p>
          <!-- <span class="">Operating System</span> -->
        </div>
        <!-- <p class="text-3xl text-onyx dark:text-brand py-4 --absolute inline-block"> ---</p> -->

        <!-- Step 2 -->
        <div class="col-start-2">
          <p class="text-2xl font-bold tracking-tight py-4">
            Step 2
          </p>
          <p class="text-xl py-4">
            Download the digital signature and fingerprint files provided here:
          </p>

          <!-- <span class="">Operating System</span> -->
          <div class="flex mt-4 mb-8">
            <NuxtLink
              :to="appConfig.url.fingerprint"
              class="items-center flex me-4 px-3 py-3 border-2 border-onyx dark:border-vanil rounded-md font-bold text-lg text-onyx dark:text-vanil hover:text-vanil dark:hover:text-brand hover:border-vanil dark:hover:border-brand tracking-tight"
            >
              Fingerprint
            </NuxtLink>
            <NuxtLink
              :to="appConfig.url.signature"
              class="items-center flex me-4 px-3 py-3 border-2 border-onyx dark:border-vanil rounded-md font-bold text-lg text-onyx dark:text-vanil hover:text-vanil dark:hover:text-brand hover:border-vanil dark:hover:border-brand tracking-tight"
            >
              Signature
            </NuxtLink>
          </div>
          <!-- <span class="text-3xl text-onyx dark:text-brand py-4"><--</span> -->
        </div>

        <!-- Step 3 -->
        <div class="col-start-3">
          <p class="text-2xl font-bold tracking-tight py-4 text-vanil dark:text-brand">
            Verify Your Download
          </p>
          <p class="text-xl py-4">
            Follow our simple, OS-specific guides to ensure your copy of Bitcoin Knots is authentic and secure.
          </p>

          <!-- <span class="">Operating System</span> -->
          <div class="flex mt-4 mb-8">
            <NuxtLink
              to="/pdf/verify/knots-linux.pdf"
              target="blank"
              class="items-center flex me-4 px-3 py-3 border-2 border-onyx dark:border-vanil rounded-md font-bold text-lg text-onyx dark:text-vanil hover:text-vanil dark:hover:text-brand hover:border-vanil dark:hover:border-brand tracking-tight"
            >
              Linux
            </NuxtLink>
            <NuxtLink
              to="/pdf/verify/knots-macos.pdf"
              target="blank"
              class="items-center flex me-4 px-3 py-3 border-2 border-onyx dark:border-vanil rounded-md font-bold text-lg text-onyx dark:text-vanil hover:text-vanil dark:hover:text-brand hover:border-vanil dark:hover:border-brand tracking-tight"
            >
              MacOS
            </NuxtLink>
            <NuxtLink
              to="/pdf/verify/knots-windows.pdf"
              target="blank"
              class="items-center flex me-4 px-3 py-3 border-2 border-onyx dark:border-vanil rounded-md font-bold text-lg text-onyx dark:text-vanil hover:text-vanil dark:hover:text-brand hover:border-vanil dark:hover:border-brand tracking-tight"
            >
              Windows
            </NuxtLink>
          </div>
          <!-- <span class="text-3xl text-onyx dark:text-brand py-4"><-- </span> -->
        </div>
      </div>

      <!-- Pre -->
      <div class="gap-4 grid grid-cols-3 mt-12 items-center">
        <NuxtLink
          target="blank"
          :to="appConfig.url.gh_notes"
          class="font-bold text-onyx dark:text-vanil text-lg underline"
        >
          Release Notes
        </NuxtLink>

        <div class="flex justify-end items-center col-start-3">
          <AppVersion
            :to="appConfig.url.gh_repo"
            class="text-lg"
          />
        </div>
      </div>

      <!-- Downloads -->
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
              <AppCollapsedItem
                :to="appConfig.files.x86"
                title="x86-64"
              />
              <AppCollapsedItem
                :to="appConfig.files.aarch64"
                title="aarch64"
              />
              <AppCollapsedItem
                :to="appConfig.files.ppc64_be"
                title="ppc64 BE"
              />
              <AppCollapsedItem
                :to="appConfig.files.ppc64_le"
                title="ppc64 LE"
              />
              <AppCollapsedItem
                :to="appConfig.files.riscv64"
                title="riscv64"
              />
              <AppCollapsedItem
                :to="appConfig.files.arm"
                title="arm"
              />
              <AppCollapsedItem
                :to="appConfig.url.ubuntu"
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
                :to="appConfig.files.intel_app"
                title="Intel Mac"
                type="App"
              />
              <AppCollapsedItem
                :to="appConfig.files.intel"
                title="Intel Mac"
                type="Terminal"
              />
              <AppCollapsedItem
                :to="appConfig.files.apple_app"
                title="Apple Silicon"
                type="App"
              />
              <AppCollapsedItem
                :to="appConfig.files.apple"
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
                  :to="appConfig.files.windows_exe"
                  title="Install"
                  type="EXE"
                />
                <AppCollapsedItem
                  :to="appConfig.files.windows"
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
                  :to="appConfig.url.gh_repo"
                  title="Github"
                  type="REPO"
                />
                <AppCollapsedItem
                  :to="appConfig.files.source"
                  title="Archive"
                  type="TAR"
                />
              </ul>
            </template>
          </AppCollapse>
        </div>
      </div>
    </section>

    <!-- Next Section -->
    <!-- Faq -->
    <section
      id="Faq"
      class="mx-4 --mb-24 pt-32"
    >
      <h2 class="font-bold text-[10rem] text-onyx dark:text-vanil leading-[1] tracking-tighter">
        Get
        <span class="block text-vanil dark:text-brand">
          Answers
        </span>
      </h2>

      <h3 class="col-span-12 flex justify-between items-start w-full mt-20 mb-4 text-4xl uppercase tracking-wider">
        <span class="">Common Questions ---> About Knots</span>
        <!-- <span class="text-onyx dark:text-brand">---</span> -->
        <!-- <span class="">About Knots :</span> -->
      </h3>

      <!-- QA -->
      <div class="grid grid-cols-4 gap-0 mt-24">
        <!-- QA #1 -->
        <div class="qa group text-xl p-8 rounded-3xl text-onyx dark:text-vanil hover:text-vanil dark:hover:text-onyx hover:bg-onyx dark:hover:bg-vanil cursor-pointer">
          <div class="q mb-8 font-bold opacity-100 group-hover:opacity-100 group-hover:text-vanil dark:group-hover:text-onyx">
            I already run Bitcoin Core. Why should I consider Bitcoin Knots?
          </div>
          <div class="a text-base invisible group-hover:visible">
            Think of Bitcoin Knots as "Bitcoin Core with optional extras." If you're happy with Core, it's an excellent choice. However, if you need features like Pay-to-Endpoint for censorship resistance, early access to privacy patches like Coinswap, or a more conservative release cycle, then Knots is for you. It's the power-user's node.
          </div>
        </div>

        <!-- QA #2 -->
        <div class="qa group text-xl p-8 rounded-3xl text-onyx dark:text-vanil hover:text-vanil dark:hover:text-onyx hover:bg-onyx dark:hover:bg-vanil cursor-pointer">
          <div class="q mb-8 font-bold opacity-100 group-hover:opacity-100 group-hover:text-vanil dark:group-hover:text-onyx">
            Is Bitcoin Knots a "hard fork" or an "altcoin"?
          </div>
          <div class="a text-base invisible group-hover:visible">
            Absolutely not. Bitcoin Knots is a software fork, not a consensus fork. It follows all the same rules as Bitcoin Core. You will be running a fully validating Bitcoin node on the exact same Bitcoin network. The differences lie in added features, policy patches, and release timing.
          </div>
        </div>

        <!-- QA #3 -->
        <div class="qa group text-xl p-8 rounded-3xl text-onyx dark:text-vanil hover:text-vanil dark:hover:text-onyx hover:bg-onyx dark:hover:bg-vanil cursor-pointer">
          <div class="q mb-8 font-bold opacity-100 group-hover:opacity-100 group-hover:text-vanil dark:group-hover:text-onyx">
            Is it safe to run Bitcoin Knots on the main network with real bitcoin?
          </div>
          <div class="a text-base invisible group-hover:visible">
            Yes. Bitcoin Knots is built for production use on the main Bitcoin network. It is a stable, fully-validating node. As with any Bitcoin software, you should always verify the digital signatures of the download to ensure you have the authentic version.
          </div>
        </div>

        <!-- QA #4 -->
        <div class="qa group text-xl p-8 rounded-3xl text-onyx dark:text-vanil hover:text-vanil dark:hover:text-onyx hover:bg-onyx dark:hover:bg-vanil cursor-pointer">
          <div class="q mb-8 font-bold opacity-100 group-hover:opacity-100 group-hover:text-vanil dark:group-hover:text-onyx">
            What is the main philosophical difference between Knots and Core?
          </div>
          <div class="a text-base invisible group-hover:visible">
            Bitcoin Core focuses on being a minimal, consensus-critical base layer for the entire network. Bitcoin Knots takes this solid base and integrates additional features and policy changes that are deemed useful but may be too experimental, controversial, or low-priority for immediate inclusion into Core. Knots serves as a testing ground and provides options for users who want more than the baseline.
          </div>
        </div>

        <!-- QA #5 -->
        <div class="qa group text-xl p-8 rounded-3xl text-onyx dark:text-vanil hover:text-vanil dark:hover:text-onyx hover:bg-onyx dark:hover:bg-vanil cursor-pointer">
          <div class="q mb-8 font-bold opacity-100 group-hover:opacity-100 group-hover:text-vanil dark:group-hover:text-onyx">
            I've heard about a debate regarding OP_RETURN and data. What is Bitcoin Knots' stance?
          </div>
          <div class="a text-base invisible group-hover:visible">
            This is a key differentiator. The Bitcoin Knots client implements a default policy that restricts the size of data carriers like OP_RETURN more than Bitcoin Core's default. The goal is to conserve block space for financial transactions and reduce blockchain bloat. It's important to understand that this is a node policy, not a consensus rule. Other nodes on the network may still relay and mine transactions that exceed this limit.
          </div>
        </div>

        <!-- QA #6 -->
        <div class="qa group text-xl p-8 rounded-3xl text-onyx dark:text-vanil hover:text-vanil dark:hover:text-onyx hover:bg-onyx dark:hover:bg-vanil cursor-pointer">
          <div class="q mb-8 font-bold opacity-100 group-hover:opacity-100 group-hover:text-vanil dark:group-hover:text-onyx">
            So, does the OP_RETURN policy mean Knots is incompatible with the network?
          </div>
          <div class="a text-base invisible group-hover:visible">
            Not at all. Your node will still validate all blocks and transactions that follow the consensus rules. The policy only affects which unconfirmed transactions your node will willingly relay to its peers. This is similar to how different nodes may have different mempool size limits or fee requirements. It's about how you choose to participate in the peer-to-peer network.
          </div>
        </div>

        <!-- QA #7 -->
        <div class="qa group text-xl p-8 rounded-3xl text-onyx dark:text-vanil hover:text-vanil dark:hover:text-onyx hover:bg-onyx dark:hover:bg-vanil cursor-pointer">
          <div class="q mb-8 font-bold opacity-100 group-hover:opacity-100 group-hover:text-vanil dark:group-hover:text-onyx">
            Can I run both Bitcoin Core and Bitcoin Knots on the same machine?
          </div>
          <div class="a text-base invisible group-hover:visible">
            Yes, but you must configure them to use different data directories and ports to avoid conflicts. This is an advanced setup and requires carefully editing the bitcoin.conf file for one or both instances. We recommend most users run one primary node.
          </div>
        </div>

        <!-- QA #8 -->
        <div class="qa group text-xl p-8 rounded-3xl text-onyx dark:text-vanil hover:text-vanil dark:hover:text-onyx hover:bg-onyx dark:hover:bg-vanil cursor-pointer">
          <div class="q mb-8 font-bold opacity-100 group-hover:opacity-100 group-hover:text-vanil dark:group-hover:text-onyx">
            Where can I get help if I have a problem?
          </div>
          <div class="a text-base invisible group-hover:visible">
            The best place for community support is the Bitcoin Knots mailing list. For bug reports and technical discussions, you can open an issue on the official GitHub repository. Remember, this is open-source software; patience and detailed problem reports are appreciated.
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
              :to="appConfig.url.group_mailto"
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
              :to="appConfig.url.group"
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
const appConfig = useAppConfig()

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
