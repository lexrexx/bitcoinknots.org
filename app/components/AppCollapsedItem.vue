<template>
  <li
    class="--hover:bg-onyx/5 --dark:hover:bg-vanil/5 px-8 py-6 border-onyx/10 dark:border-vanil/10 border-b w-full dark:group-hover:text-brand group-hover:text-vanil"
  >
    <p class="flex justify-between items-center">
      <span class="title">{{ props.title }}</span>
      <span class="bg-onyx/10 dark:bg-vanil/10 p-1 rounded font-bold text-onyx dark:group-hover:text-onyx dark:text-onyx group-hover:text-brand text-xs uppercase tracking-wide btn">{{ props.type }}</span>
    </p>
  </li>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  // (Icon) name
  type: {
    type: String,
    required: false,
    default: 'tar',
  },
})
</script>

<style lang="postcss" scoped>
li:hover .title {
  @apply
  text-onyx
  dark:text-vanil
}
li:hover .btn {
  @apply
  bg-onyx
  dark:bg-vanil
}
</style>
