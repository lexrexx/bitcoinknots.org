<template>
  <li class="group py-4 overflow-hidden border-b border-onyx/20 dark:border-vanil/10 hover:bg-onyx/5 dark:hover:bg-black/15">
    <button
      class="w-full px-6 py-4 text-left flex justify-between items-center group-hover:text-vanil focus:outline-none"
      :aria-expanded="isOpen"
      :aria-controls="`faq-answer-${uniqueId}`"
      @click="toggleAnswer"
    >
      <span class="text-base sm:text-lg md:text-xl lg:text-xl font-bold text-onyx dark:text-vanil group-hover:text-vanil dark:group-hover:text-brand pr-4 flex-1">
        {{ question }}
      </span>
      <span
        class="flex-shrink-0 w-6 h-6 transition-transform duration-100"
        :class="{ 'rotate-180': isOpen }"
      >
        <svg
          class="w-full h-full text-onyx dark:text-vanil group-hover:text-vanil dark:group-hover:text-brand"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </span>
    </button>

    <Transition
      enter-active-class="transition-all duration-300 ease-in"
      enter-from-class="opacity-0 max-h-0"
      enter-to-class="opacity-100 max-h-96"
      leave-active-class="transition-all duration-300 ease-out"
      leave-from-class="opacity-100 max-h-96"
      leave-to-class="opacity-0 max-h-0"
    >
      <div
        v-if="isOpen"
        :id="`faq-answer-${uniqueId}`"
        class="overflow-hidden"
      >
        <p class="px-6 pb-6 text-gray-600 leading-relaxed">
          {{ answer }}
        </p>
      </div>
    </Transition>
  </li>
</template>

<script setup lang="ts">
interface FAQProps {
  question: string
  answer: string
  initiallyOpen?: boolean
}

const props = withDefaults(defineProps<FAQProps>(), {
  initiallyOpen: false,
})

const isOpen = ref(props.initiallyOpen)

// Generate unique ID for accessibility
const uniqueId = useId()

const toggleAnswer = () => {
  isOpen.value = !isOpen.value
}
</script>
