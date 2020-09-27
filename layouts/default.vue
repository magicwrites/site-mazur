<template>
  <div class="center" v-bind:class="size">
    <nuxt />
  </div>
</template>

<script>
import '@maciejmazur/core-components/dist/core-components.css'

export default {
  data: () => {
    return {
      size: 'xs',
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    getSize(innerWidth) {
      if (innerWidth < 360) {
        return 'viewport-xs'
      }

      if (innerWidth < 800) {
        return 'viewport-sm'
      }

      if (innerWidth < 1200) {
        return 'viewport-md'
      }

      return 'viewport-lg'
    },
    handleResize() {
      this.size = this.getSize(window.innerWidth)
    },
  },
}
</script>

<style>
html {
  background: #222;
}

html,
body {
  margin: 0;
  padding: 0;
}

body {
  min-width: 360px;
  min-height: 100vh;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

.center {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* TODO: move this changes to the @maciemazur/core-components */

body *::selection {
  color: white;
  background: #222;
}

.muted {
  opacity: 0.5;
}

@media (min-width: 361px) {
  .hide-on-xs {
    display: none;
  }
}

@media (min-width: 801px) {
  .hide-on-md {
    display: none;
  }
}

@media (min-width: 1201px) {
  .hide-on-lg {
    display: none;
  }
}

@media (max-width: 600px) {
  .show-on-sm {
    display: none;
  }
}

@media (max-width: 800px) {
  .show-on-md {
    display: none;
  }
}

@media (max-width: 1200px) {
  .show-on-lg {
    display: none;
  }
}
</style>
