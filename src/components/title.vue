<template>
  <div class="flex flex-col text-center text-gray-700">
    <span class="sm-title uppercase text-7xl xl:text-8xl font-dosis"
      ><slot></slot
    ></span>
    <span
      v-if="subtitle"
      class="sm-subtitle xl:text-left pt-8 xl:pt-2 text-xl font-work"
      >{{ subtitle }}</span
    >
  </div>
</template>

<script>
export default {
  name: 'SmTitle',
  props: {
    subtitle: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.sm-title {
  margin-left: -4.5px;
}

@media (min-width: 1280px) {
  .sm-title {
    margin-left: -6px;
  }

  .sm-subtitle {
    margin-left: -1px;
  }
}
</style>
