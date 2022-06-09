<template>
  <div>
    <header>
      <div class="text-xs font-work pb-1">{{ Math.round(100 * value) }} %</div>
      <div class="h-2 rounded" :class="color"></div>
      <div class="pt-2 text-lg font-work"><slot></slot></div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'SharedPercenter',
  props: {
    value: {
      type: Number,
      default: 0.5,
    },
  },
  computed: {
    color: function () {
      if (this.value > 0.4) {
        return 'bg-gray-700'
      }

      if (this.value > 0.3) {
        return 'bg-gray-600'
      }

      if (this.value > 0.2) {
        return 'bg-gray-500'
      }

      if (this.value > 0.1) {
        return 'bg-gray-300'
      }

      return 'bg-gray-100'
    },
  },
}
</script>
