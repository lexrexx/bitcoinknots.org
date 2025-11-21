<script setup>
const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  // (Icon) name
  icon: {
    type: String,
    required: true
  },
  collapsed: {
    type: Boolean,
    default: true
  }
})
const emit = defineEmits(['toggle'])
const toggleCollapse = () => {
  emit('toggle', props.id)
}
</script>

<template>
  <div class="flex flex-col mb-2">
    <button
      class="group border-2 border-onyx hover:border-vanil dark:border-vanil dark:hover:border-brand rounded-2xl cursor-pointer"
      @click="toggleCollapse"
    >
      <div class="flex items-center my-2 p-4">
        <AppIcon
          :name="icon"
          class="w-24 h-24 text-onyx dark:group-hover:text-brand dark:text-vanil group-hover:text-vanil"
        />
        <h3
          class="ms-1 font-bold dark:group-hover:text-brand group-hover:text-vanil text-3xl tracking-tight"
        >
          {{ title }}
        </h3>
      </div>
      <div v-if="props.collapsed">
        <slot name="collapseContent" />
      </div>
    </button>
  </div>
</template>
