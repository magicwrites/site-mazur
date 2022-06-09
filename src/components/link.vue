<template>
  <figure
    class="flex items-center justify-between px-4 py-2 sm-link cursor-pointer"
  >
    <section class="flex flex-col transition">
      <div class="font-varela" style="margin-left: -0.5px">
        <slot></slot>
      </div>
      <div class="text-sm font-work flex">
        <template v-for="(item, i) in items">
          <span :key="i + '-name'" class="text-gray-400">{{ item }}</span>
          <span
            v-if="i !== items.length - 1"
            :key="i + '-dash'"
            class="px-1 text-gray-200"
            >/</span
          >
        </template>
      </div>
    </section>
    <div
      class="flex items-center justify-center w-10 h-10 bg-gray-50 text-gray-300 rounded-full overflow-hidden transition sm-link-icon"
    >
      <i class="fas fa-arrow-right"></i>
    </div>
  </figure>
</template>

<script>
export default {
  name: 'SmLink',
  props: {
    icon: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>
@media (min-width: 1280px) {
  .sm-link:hover .sm-link-icon {
    background: rgba(55, 65, 81, var(--tw-text-opacity));
    color: white;
  }
}
</style>
