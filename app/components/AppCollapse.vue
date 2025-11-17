<script setup>
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  // (Icon) name
  icon: {
    type: String,
    required: true,
  },
  collapsed: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits(['toggle'])
const toggleCollapse = () => {
  emit('toggle', props.id)
}
</script>

<template>
  <div class="flex flex-col mb-2">
    <button
      class="group border-2 border-black dark:border-white hover:border-white dark:hover:border-brand-500 rounded-2xl cursor-pointer"
      @click="toggleCollapse"
    >
      <div class="flex items-center my-2 p-4">
        <AppIcon
          :name="icon"
          class="text-black dark:text-white group-hover:text-white dark:group-hover:text-brand-500 w-24 h-24"
        />
        <h3 class="text-3xl font-bold tracking-tight ms-1 group-hover:text-white dark:group-hover:text-brand-500">
          {{ title }}
        </h3>
      </div>
      <div v-if="props.collapsed">
        <slot name="collapseContent" />
      </div>
    </button>
  </div>
</template>
