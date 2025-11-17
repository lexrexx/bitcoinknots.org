<template>
  <li
    class="
    w-full
    py-6
    px-8
    border-b
    --hover:bg-black/5 --dark:hover:bg-white/5
    border-black/10
    dark:border-white/10
    group-hover:text-white
    dark:group-hover:text-brand-500
  "
  >
    <p class="flex items-center justify-between">
      <span class="title">{{ props.title }}</span>
      <span class="btn text-xs uppercase font-bold tracking-wide p-1 rounded text-black group-hover:text-brand-500 dark:text-black bg-black/10 dark:bg-white/10 dark:group-hover:text-black">{{ props.type }}</span>
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
  text-black
  dark:text-white
}
li:hover .btn {
  @apply
  bg-black
  dark:bg-white
}
</style>
