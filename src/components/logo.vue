<template>
  <svg viewBox="0 0 140 85">
    <polygon
      points="50 0, 100 85, 60 85, 50 68, 40 85, 20 85, 10 68"
      transform="scale(-1, 1) translate(-100, 0)"
      v-bind:fill="colors.secondary"
    />
    <polygon
      points="50 0, 100 85, 60 85, 50 68, 40 85, 20 85, 10 68"
      transform="translate(40, 0)"
      v-bind:fill="colors.primary"
    />
  </svg>
</template>

<script>
export default {
  name: 'SmLogo',
  props: {
    light: {
      type: Boolean,
      default: false,
    },
    muted: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    colors: function () {
      if (this.light) {
        return {
          primary: '#ffffff',
          secondary: '#bbbbbb',
        }
      }

      if (this.muted) {
        return {
          primary: '#d9d9d9',
          secondary: '#f3f3f3',
        }
      }

      return {
        primary: '#000000',
        secondary: '#d9d9d9',
      }
    },
  },
}
</script>
