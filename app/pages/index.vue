<template>
  <!-- <NuxtLayout :name="layout"> -->
  <div class="container mx-auto w-full">
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
    <!--  -->
    <!--  -->
    <AppBreakpoints />


    <!-- // MARK: Hero -->
    <section class="my-28 py-8">
      <div class="@container mx-4 grid grid-cols-12 text-left">
        <h1
          class="
          col-span-12
          col-start-1
          text-[11cqw]
          font-bold leading-[1] tracking-tighter
          "
        >
          Bitcoin Is
          <span class="
            block
            text-vanil
            dark:text-brand
          "> Money </span>
        </h1>

        <h2
          class="
            flex
            items-start
            justify-between
            col-span-12
            mb-4
            mt-[4cqw]
            uppercase
            text-[2.5cqw]
            tracking-[.5cqw]
          ">
          <span class="">Take Control</span>
          <span class="
            text-onyx
            dark:text-brand
          ">---></span>
          <span class="">Own Your Node</span>
        </h2>

        <div class="col-span-12 mt-8 w-full text-right">
          <NuxtLink
            to="#Download"
            class=""
          >
            <button
              type="button"
              class="
                --border-4
                rounded-xl
                bg-onyx
                px-10
                py-10
                text-2xl
                font-bold
                uppercase
                tracking-wide
                focus:outline-none focus:ring-4 focus:ring-onyx
                text-vanil
                hover:bg-vanil hover:text-onyx
                dark:bg-brand dark:text-onyx dark:hover:bg-vanil dark:hover:text-onyx
                dark:focus:ring-vanil
              ">
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

    <!-- -->
    <!-- -->
    <!-- -->
    <!-- -->
    <!-- -->
    <!-- -->
    <!-- -->
    <!-- -->
    <!-- -->
    <!-- -->
    <!-- MARK: About -->
    <section
      id="About"
      class="
        mx-4 grid grid-cols-12
        lg:pt-32
      "
    >
      <h2
        class="
          col-span-9 col-start-1 text-6xl font-bold leading-[1] tracking-tighter text-onyx
          lg:text-[10rem]
          dark:text-vanil
        "
      >
        Built for
        <span class="
          text-vanil
          dark:text-brand
        "> Sovereignty </span>
      </h2>

      <p class="col-span-9 col-start-1 mb-12 mt-32 text-4xl leading-normal">
        <!--  eslint-disable-next-line vue/no-parsing-error -->
        <span class="font-bold">Bitcoin <--> Knots </span>is a free and open-source full node
        implementation that empowers you to fully validate the blockchain and enforce Bitcoin's
        rules. It includes advanced features and privacy patches not yet available in other clients,
        giving you greater control over your financial sovereignty.
      </p>

      <div class="col-span-5 me-12 mt-12">
        <h3 class="
          py-4 text-3xl font-bold
          dark:text-brand
        ">
          A Node for the Original Vision
        </h3>
        <p class="py-4 text-xl leading-relaxed">
          In a climate of increasing block space debate and protocol changes that risk altering
          Bitcoin's core value proposition, running a node is more critical than ever.
        </p>
        <p class="
          my-4 border-l-4 border-onyx ps-8 text-xl leading-relaxed
          dark:border-brand
        ">
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
        <h3 class="
          py-4 text-3xl font-bold
          dark:text-brand
        ">
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
    </section>

    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
    <!-- MARK: Features -->
    <section
      id="Features"
      class="mx-4 grid grid-cols-12 pt-32"
    >
      <h2
        class="
          col-span-12 col-start-1 text-[10rem] font-bold leading-[1] tracking-tighter text-onyx
          dark:text-vanil
        "
      >
        Power
        <span class="
          block text-vanil
          dark:text-brand
        "> Features </span>
      </h2>

      <h3 class="tracking-snug col-span-9 mt-24 text-4xl leading-normal">
        Maintains full Bitcoin compatibility, while offering enhanced tools for node sovereignty and
        chain cleanliness.
      </h3>

      <!-- Content -->
      <div class="col-span-12 my-24">
        <div class="grid grid-cols-2 gap-24">
          <div>
            <div class="
              text-onyx
              dark:text-vanil
            ">
              <span class="
                block text-2xl text-vanil
                dark:text-brand
              ">/ A</span>
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
            <div class="
              text-onyx
              dark:text-vanil
            ">
              <span class="
                block text-2xl text-vanil
                dark:text-brand
              ">/ B</span>
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

    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
    <!-- MARK: Download & Verify -->
    <section
      id="Download"
      class="--mb-24 mx-4 pt-32"
    >
      <h2
        class="
          --mx-auto max-w-4xl text-[10rem] font-bold leading-[1] tracking-tighter text-onyx
          dark:text-vanil
        "
      >
        Download
        <span class="
          block text-vanil
          dark:text-brand
        "> & Verify </span>
      </h2>

      <!-- Pre -->
      <div class="mt-24 grid grid-cols-3 items-center gap-4">
        <NuxtLink
          target="blank"
          :to="appConfig.url.gh_notes"
          class="
            text-lg font-bold text-onyx underline
            dark:text-vanil
          "
        >
          Release Notes
        </NuxtLink>

        <div class="col-start-3 flex items-center justify-end">
          <AppVersion
            :to="appConfig.url.gh_repo"
            class="text-lg"
          />
        </div>
      </div>

      <!-- Downloads -->
      <div class="my-6 grid grid-cols-3 gap-4">
        <!-- Linux Downloads -->
        <AppCollapse
          :id="0"
          :collapsed="collapsePanels[0].isVisible"
          title="Linux"
          icon="Linux"
          @toggle="toggleCollapse"
        >
          <template #collapseContent>
            <ul class="collapsed mb-6 mt-4 text-left text-2xl">
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
            <ul class="collapsed mb-6 mt-4 text-left text-2xl">
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
              <ul class="collapsed mb-6 mt-4 text-left text-2xl">
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
              <ul class="collapsed mb-6 mt-4 text-left text-2xl">
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

      <!-- Steps -->
      <div class="mt-24 grid w-full grid-cols-3 items-start justify-between gap-12">
        <div class="">
          <p class="inline-block border-t-4 py-4 text-2xl font-bold tracking-tight">
          Step 1
          </p>
          <p class="py-4 text-xl">
            Download Bitcoin Knots for your operating system by selection an option above.
          </p>
          <p class="
            --absolute inline-block py-4 text-3xl text-onyx
            dark:text-brand
          ">
            --->
          </p>
          <!-- <span class="">Operating System</span> -->
        </div>
        <!-- <p class="text-3xl text-onyx dark:text-brand py-4 --absolute inline-block"> ---</p> -->

        <!-- Step 2 -->
        <div class="col-start-2">
          <p class="inline-block border-t-4 py-4 text-2xl font-bold tracking-tight">
            Step 2
          </p>
          <p class="py-4 text-xl">
            Download the digital fingerprint and signature files provided here.
          </p>

          <!-- <span class="">Operating System</span> -->
          <div class="mb-8 mt-4 flex">
            <NuxtLink
              :to="appConfig.url.fingerprint"
              class="
                me-4 flex items-center rounded-md border-2 border-onyx px-3 py-2 text-lg font-bold
                tracking-tight text-onyx
                hover:border-vanil hover:text-vanil
                dark:border-vanil dark:text-vanil dark:hover:border-brand dark:hover:text-brand
              "
            >
              Fingerprint
            </NuxtLink>
            <NuxtLink
              :to="appConfig.url.signature"
              class="
                me-4 flex items-center rounded-md border-2 border-onyx px-3 py-2 text-lg font-bold
                tracking-tight text-onyx
                hover:border-vanil hover:text-vanil
                dark:border-vanil dark:text-vanil dark:hover:border-brand dark:hover:text-brand
              "
            >
              Signature
            </NuxtLink>
          </div>
          <!-- <span class="text-3xl text-onyx dark:text-brand py-4"><--</span> -->
        </div>

        <!-- Step 3 -->
        <div class="col-start-3">
          <p
            class="
              inline-block border-t-4 py-4 text-2xl font-bold tracking-tight text-vanil
              dark:text-brand
            "
          >
            Verify Your Download
          </p>
          <p class="py-4 text-xl">
            Follow our simple, OS-specific guides to ensure your copy of Bitcoin Knots is authentic
            and secure:
          </p>

          <!-- <span class="">Operating System</span> -->
          <div class="mb-8 mt-4 flex">
            <NuxtLink
              to="pdf/verify/knots-linux.pdf"
              external
              class="
                me-4 flex items-center rounded-md border-2 border-onyx px-3 py-2 text-lg font-bold
                tracking-tight text-onyx
                hover:border-vanil hover:text-vanil
                dark:border-vanil dark:text-vanil dark:hover:border-brand dark:hover:text-brand
              "
            >
              Linux
            </NuxtLink>
            <NuxtLink
              to="/pdf/verify/knots-macos.pdf"
              external
              class="
                me-4 flex items-center rounded-md border-2 border-onyx px-3 py-2 text-lg font-bold
                tracking-tight text-onyx
                hover:border-vanil hover:text-vanil
                dark:border-vanil dark:text-vanil dark:hover:border-brand dark:hover:text-brand
              "
            >
              MacOS
            </NuxtLink>
            <NuxtLink
              to="/pdf/verify/knots-windows.pdf"
              external
              class="
                me-4 flex items-center rounded-md border-2 border-onyx px-3 py-2 text-lg font-bold
                tracking-tight text-onyx
                hover:border-vanil hover:text-vanil
                dark:border-vanil dark:text-vanil dark:hover:border-brand dark:hover:text-brand
              "
            >
              Windows
            </NuxtLink>
          </div>
          <!-- <span class="text-3xl text-onyx dark:text-brand py-4"><-- </span> -->
        </div>
      </div>      
      
    </section>

    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
    <!-- Faq -->
    <section
      id="Faq"
      class="--mb-24 mx-4 pt-32"
    >
      <h2 class="
        text-[10rem] font-bold leading-[1] tracking-tighter text-onyx
        dark:text-vanil
      ">
        Get
        <span class="
          block text-vanil
          dark:text-brand
        "> Answers </span>
      </h2>

      <h3
        class="
          col-span-12 mb-4 mt-20 flex w-full items-start justify-between text-4xl uppercase
          tracking-wider
        "
      >
        <span class="">Common Questions ---> About Knots</span>
        <!-- <span class="text-onyx dark:text-brand">---</span> -->
        <!-- <span class="">About Knots :</span> -->
      </h3>

      <!-- QA -->
      <div class="mt-24 grid grid-cols-4 gap-0">
        <!-- QA #1 -->
        <div
          class="
            qa group cursor-pointer rounded-3xl p-8 text-xl text-onyx
            hover:bg-onyx hover:text-vanil
            dark:text-vanil dark:hover:bg-vanil dark:hover:text-onyx
          "
        >
          <div
            class="
              q mb-8 font-bold opacity-100
              group-hover:text-vanil group-hover:opacity-100
              dark:group-hover:text-onyx
            "
          >
            I already run Bitcoin Core. Why should I consider Bitcoin Knots?
          </div>
          <div class="
            a invisible text-base
            group-hover:visible
          ">
            Think of Bitcoin Knots as "Bitcoin Core with optional extras." If you're happy with
            Core, it's an excellent choice. However, if you need features like Pay-to-Endpoint for
            censorship resistance, early access to privacy patches like Coinswap, or a more
            conservative release cycle, then Knots is for you. It's the power-user's node.
          </div>
        </div>

        <!-- QA #2 -->
        <div
          class="
            qa group cursor-pointer rounded-3xl p-8 text-xl text-onyx
            hover:bg-onyx hover:text-vanil
            dark:text-vanil dark:hover:bg-vanil dark:hover:text-onyx
          "
        >
          <div
            class="
              q mb-8 font-bold opacity-100
              group-hover:text-vanil group-hover:opacity-100
              dark:group-hover:text-onyx
            "
          >
            Is Bitcoin Knots a "hard fork" or an "altcoin"?
          </div>
          <div class="
            a invisible text-base
            group-hover:visible
          ">
            Absolutely not. Bitcoin Knots is a software fork, not a consensus fork. It follows all
            the same rules as Bitcoin Core. You will be running a fully validating Bitcoin node on
            the exact same Bitcoin network. The differences lie in added features, policy patches,
            and release timing.
          </div>
        </div>

        <!-- QA #3 -->
        <div
          class="
            qa group cursor-pointer rounded-3xl p-8 text-xl text-onyx
            hover:bg-onyx hover:text-vanil
            dark:text-vanil dark:hover:bg-vanil dark:hover:text-onyx
          "
        >
          <div
            class="
              q mb-8 font-bold opacity-100
              group-hover:text-vanil group-hover:opacity-100
              dark:group-hover:text-onyx
            "
          >
            Is it safe to run Bitcoin Knots on the main network with real bitcoin?
          </div>
          <div class="
            a invisible text-base
            group-hover:visible
          ">
            Yes. Bitcoin Knots is built for production use on the main Bitcoin network. It is a
            stable, fully-validating node. As with any Bitcoin software, you should always verify
            the digital signatures of the download to ensure you have the authentic version.
          </div>
        </div>

        <!-- QA #4 -->
        <div
          class="
            qa group cursor-pointer rounded-3xl p-8 text-xl text-onyx
            hover:bg-onyx hover:text-vanil
            dark:text-vanil dark:hover:bg-vanil dark:hover:text-onyx
          "
        >
          <div
            class="
              q mb-8 font-bold opacity-100
              group-hover:text-vanil group-hover:opacity-100
              dark:group-hover:text-onyx
            "
          >
            What is the main philosophical difference between Knots and Core?
          </div>
          <div class="
            a invisible text-base
            group-hover:visible
          ">
            Bitcoin Core focuses on being a minimal, consensus-critical base layer for the entire
            network. Bitcoin Knots takes this solid base and integrates additional features and
            policy changes that are deemed useful but may be too experimental, controversial, or
            low-priority for immediate inclusion into Core. Knots serves as a testing ground and
            provides options for users who want more than the baseline.
          </div>
        </div>

        <!-- QA #5 -->
        <div
          class="
            qa group cursor-pointer rounded-3xl p-8 text-xl text-onyx
            hover:bg-onyx hover:text-vanil
            dark:text-vanil dark:hover:bg-vanil dark:hover:text-onyx
          "
        >
          <div
            class="
              q mb-8 font-bold opacity-100
              group-hover:text-vanil group-hover:opacity-100
              dark:group-hover:text-onyx
            "
          >
            I've heard about a debate regarding OP_RETURN and data. What is Bitcoin Knots' stance?
          </div>
          <div class="
            a invisible text-base
            group-hover:visible
          ">
            This is a key differentiator. The Bitcoin Knots client implements a default policy that
            restricts the size of data carriers like OP_RETURN more than Bitcoin Core's default. The
            goal is to conserve block space for financial transactions and reduce blockchain bloat.
            It's important to understand that this is a node policy, not a consensus rule. Other
            nodes on the network may still relay and mine transactions that exceed this limit.
          </div>
        </div>

        <!-- QA #6 -->
        <div
          class="
            qa group cursor-pointer rounded-3xl p-8 text-xl text-onyx
            hover:bg-onyx hover:text-vanil
            dark:text-vanil dark:hover:bg-vanil dark:hover:text-onyx
          "
        >
          <div
            class="
              q mb-8 font-bold opacity-100
              group-hover:text-vanil group-hover:opacity-100
              dark:group-hover:text-onyx
            "
          >
            So, does the OP_RETURN policy mean Knots is incompatible with the network?
          </div>
          <div class="
            a invisible text-base
            group-hover:visible
          ">
            Not at all. Your node will still validate all blocks and transactions that follow the
            consensus rules. The policy only affects which unconfirmed transactions your node will
            willingly relay to its peers. This is similar to how different nodes may have different
            mempool size limits or fee requirements. It's about how you choose to participate in the
            peer-to-peer network.
          </div>
        </div>

        <!-- QA #7 -->
        <div
          class="
            qa group cursor-pointer rounded-3xl p-8 text-xl text-onyx
            hover:bg-onyx hover:text-vanil
            dark:text-vanil dark:hover:bg-vanil dark:hover:text-onyx
          "
        >
          <div
            class="
              q mb-8 font-bold opacity-100
              group-hover:text-vanil group-hover:opacity-100
              dark:group-hover:text-onyx
            "
          >
            Can I run both Bitcoin Core and Bitcoin Knots on the same machine?
          </div>
          <div class="
            a invisible text-base
            group-hover:visible
          ">
            Yes, but you must configure them to use different data directories and ports to avoid
            conflicts. This is an advanced setup and requires carefully editing the bitcoin.conf
            file for one or both instances. We recommend most users run one primary node.
          </div>
        </div>

        <!-- QA #8 -->
        <div
          class="
            qa group cursor-pointer rounded-3xl p-8 text-xl text-onyx
            hover:bg-onyx hover:text-vanil
            dark:text-vanil dark:hover:bg-vanil dark:hover:text-onyx
          "
        >
          <div
            class="
              q mb-8 font-bold opacity-100
              group-hover:text-vanil group-hover:opacity-100
              dark:group-hover:text-onyx
            "
          >
            Where can I get help if I have a problem?
          </div>
          <div class="
            a invisible text-base
            group-hover:visible
          ">
            The best place for community support is the Bitcoin Knots mailing list. For bug reports
            and technical discussions, you can open an issue on the official GitHub repository.
            Remember, this is open-source software; patience and detailed problem reports are
            appreciated.
          </div>
        </div>
      </div>
    </section>

    <!-- -->
    <!-- -->
    <!-- -->
    <!-- -->
    <!-- -->
    <!-- -->
    <!-- -->
    <!-- -->
    <!-- -->
    <!-- -->
    <!-- -->
    <!-- -->
    <!-- Mail -->
    <section
      id="News"
      class="mx-4 mb-24 pt-32"
    >
      <div class="">
        <h2
          class="
            max-w-4xl text-[10rem] font-bold leading-[1] tracking-tighter text-onyx
            dark:text-vanil
          "
        >
          Join the
          <span class="
            block text-vanil
            dark:text-brand
          "> Inner Circle </span>
        </h2>

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
            >bitcoin-knots-announce+subscribe@googlegroups.com</NuxtLink>. You will receive a confirmation email. Simply reply to it to complete your
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
