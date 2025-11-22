<template>
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
              :to="appConfig.files.source"
              title="Archive"
              type="TAR"
            />
            <AppCollapsedItem
              :to="appConfig.url.gh_repo"
              title="Github"
              type="REPO"
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
      <p
        class="
            --absolute inline-block py-4 text-3xl text-onyx
            dark:text-brand
          "
      >
        --->
      </p>
    </div>

    <!-- Step 2 -->
    <div class="col-start-2">
      <p class="inline-block border-t-4 py-4 text-2xl font-bold tracking-tight">
        Step 2
      </p>
      <p class="py-4 text-xl">
        Download the digital fingerprint and signature files provided here.
      </p>

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
    </div>
  </div>
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
