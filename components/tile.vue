<template>
  <div class="tile">
    <div class="tile-small">
      <mazur-tile>
        <mazur-avatar :size="88" :url="avatar" class="bordered"></mazur-avatar>
        <i v-if="icon" class="fas fa-baby-carriage icon"></i>
        <div style="margin-left: -1px; margin-top: -3px">
          <mazur-text class="big normal block" style="margin-left: -1.5px">{{
            name
          }}</mazur-text>
          <mazur-space class="smallest negative"></mazur-space>
          <mazur-text class="smaller muted montserrat block">Mazur</mazur-text>
        </div>
        <mazur-space class="smallest"></mazur-space>
        <span v-for="(element, index) in about" :key="index">
          <mazur-text v-if="index != 0" class="smaller nunito muted">
            /</mazur-text
          >
          <mazur-text class="smaller nunito">{{ element }}</mazur-text>
        </span>
        <mazur-space class="blank"></mazur-space>
        <a v-if="link" v-bind:href="link" target="_blank">
          <mazur-link class="smaller"
            >{{ isEnglish ? 'meet' : 'poznaj' }} »</mazur-link
          >
        </a>
      </mazur-tile>
    </div>
    <div class="tile-large">
      <mazur-tile>
        <mazur-avatar :size="120" :url="avatar" class="bordered"></mazur-avatar>
        <mazur-space class="smallest"></mazur-space>
        <i v-if="icon" class="fas fa-baby-carriage icon"></i>
        <div style="margin-left: -1px; margin-top: -3px">
          <mazur-text class="big normal block" style="margin-left: -1.5px"
            >{{ name }} Mazur</mazur-text
          >
        </div>
        <mazur-space class="smaller"></mazur-space>
        <span v-for="(element, index) in about" :key="index">
          <mazur-text v-if="index != 0" class="small muted separator">
            /</mazur-text
          >
          <mazur-text class="small">{{ element }}</mazur-text>
        </span>
        <mazur-space class="small"></mazur-space>
        <a v-if="link" v-bind:href="link" target="_blank">
          <mazur-link class="small"
            >{{ isEnglish ? 'meet' : 'poznaj' }} »</mazur-link
          >
        </a>
      </mazur-tile>
    </div>
  </div>
</template>

<script>
import {
  MazurTile,
  MazurText,
  MazurSpace,
  MazurLink,
  MazurAvatar,
} from '@maciejmazur/core-components'

export default {
  components: {
    MazurTile,
    MazurText,
    MazurSpace,
    MazurLink,
    MazurAvatar,
  },
  props: {
    avatar: { type: String, default: null },
    name: { type: String, default: null },
    about: { type: Array, default: () => [] },
    icon: { type: String, default: null },
    link: { type: String, default: null },
    isEnglish: { type: Boolean, default: false },
  },
}
</script>

<style scoped>
.tile-small {
  margin-top: 0;
  width: 340px;
}

.tile-small .icon {
  float: right;
  margin-top: 4px;
  margin-right: 4px;
}

.tile-small .mazur-tile {
  padding: 20px;
  min-height: 115px;
  position: relative;
  padding-left: 115px;
}

.tile-small .mazur-avatar {
  position: absolute;
  top: 16px;
  left: 16px;
}

.tile-large {
  padding-top: 60px;
  width: 510px;
  position: relative;
}

.tile-large .mazur-tile {
  height: 200px;
  padding-top: 70px;
  padding-left: 10px;
  text-align: center;
}

.tile-large .separator {
  padding: 0 10px;
}

.tile-large .mazur-avatar {
  position: absolute;
  top: 60px;
  left: 50%;
  margin: -59px 0 0 -59px;
}

@media (max-width: 1200px) {
  .tile-large {
    display: none;
  }
}

@media (min-width: 1201px) {
  .tile-small {
    display: none;
  }

  .small .tile-small {
    display: block;
  }

  .small .tile-large {
    display: none;
  }
}

/* .tile.small .mazur-tile {
  width: 300px;
} */

/* .tile {
  margin: 10px;
  padding-top: 60px;
}

.tile .mazur-tile {
  padding: 20px;
  width: 340px;
  position: relative;
  padding-top: 75px;
  text-align: center;
}

.tile .mazur-avatar {
  position: absolute;
  top: 0;
  left: 50%;
  margin: -59px 0 0 -59px;
}

.tile.small .mazur-tile {
  width: 300px;
} */
</style>
