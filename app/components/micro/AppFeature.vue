<template>
  <!-- <li class="grid grid-cols-1 md:grid-cols-[1fr,auto] -ms-4 my-8"> -->
  <li class="flex-row md:flex md:-ms-4 my-8 me-8 xl:me-16">
    <div class="md:inline-bloc -ms-4">
      <AppIcon
        :name="props.icon"
        class="
          h-24 md:h-24 lg:h-20 xl:h-24
        text-vanil
        dark:text-brand
      "
      />
    </div>
    <div class="md:ms-8 lg:ms-4 my-4">
      <h6 class="text-2xl font-bold mb-4">
        {{ props.title }}
      </h6>
      <p class="mb-4 md:mb-2">
        {{ props.body }}
      </p>
    </div>
  </li>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  // (Icon) name
  icon: {
    type: String,
    required: true,
  },
})
</script>
