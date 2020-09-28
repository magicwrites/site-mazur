<template>
  <div class="homepage">
    <div class="header">
      <div class="toast" style="opacity: 0">
        <mazur-text class="smaller block white nunito hide-on-lg"
          >&nbsp;</mazur-text
        >
      </div>
      <div class="logo-centerer">
        <mazur-space class="big show-on-md"></mazur-space>
        <!-- <logo v-bind:reversed="true"></logo> -->
        <mazur-logo v-bind:reversed="true"></mazur-logo>
        <mazur-space></mazur-space>
        <mazur-space class="hide-on-lg show-on-md"></mazur-space>
      </div>
    </div>
    <div class="contents">
      <div class="content">
        <mazur-space class="smaller hide-on-md"></mazur-space>
        <tile
          name="Marcelina"
          avatar="https://www.linkpicture.com/q/her-perkoza.png"
          link="https://marcelina.mazur.site"
          :size="110"
          :isEnglish="isEnglish"
          :about="
            isEnglish
              ? ['accounting', 'liturgical music']
              : ['księgowość', 'muzyka liturgiczna']
          "
        ></tile>
        <mazur-space class="smaller hide-on-lg"></mazur-space>
        <tile
          name="Maciej"
          avatar="https://s.gravatar.com/avatar/d68f29b47d8ba2af9ca67fc723fe6907"
          link="https://maciej.mazur.site"
          :size="110"
          :isEnglish="isEnglish"
          :about="
            isEnglish ? ['software', 'design'] : ['oprogramowanie', 'design']
          "
        ></tile>
      </div>
      <mazur-space></mazur-space>
      <div class="content">
        <tile
          class="small"
          name="Helena"
          icon="fas fa-baby"
          avatar="https://s.gravatar.com/avatar/7817cdf448989cbc0540b023551f547d?s=120"
          link="https://photos.app.goo.gl/ZBzunxbE2Xnv5SG27"
          :isEnglish="isEnglish"
          :about="
            isEnglish
              ? ['growing', 'attention seeking']
              : ['jedzenie', 'poszukiwanie uwagi']
          "
        ></tile>
      </div>
    </div>
    <div class="expand footer">
      <mazur-space class="small hide-on-lg"></mazur-space>
      <div class="toast">
        <mazur-text class="smaller block white nunito"
          >{{ isEnglish ? 'Przełączyć na' : 'Would you rather' }}
          <mazur-link class="smaller" v-on:click.native="toggleLanguage">{{
            isEnglish ? 'Język Polski' : 'switch to English'
          }}</mazur-link
          >?</mazur-text
        >
      </div>
      <!-- <mazur-space class="smaller hide-on-xs"></mazur-space> -->
    </div>
  </div>
</template>

<script>
import {
  MazurSpace,
  MazurText,
  MazurLink,
  MazurLogo,
} from '@maciejmazur/core-components'
// import Logo from '~/components/logo'
import Tile from '~/components/tile'

export default {
  components: {
    Tile, // Logo,
    MazurLink,
    MazurSpace,
    MazurText,
    MazurLogo,
  },
  data: () => {
    const language = process.client
      ? navigator.language || window.navigator.userLanguage
      : 'en'

    return {
      isEnglish: language !== 'pl',
    }
  },
  methods: {
    toggleLanguage() {
      console.log('toggle!')
      this.isEnglish = !this.isEnglish
    },
  },
}
</script>

<style>
.homepage {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.header {
  display: flex;
  flex-direction: column;
}

.expand {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.footer {
  justify-content: flex-end;
  align-items: center;
}

.toast {
  padding: 15px 0;
}

.white {
  color: white;
}

.mazur-logo {
  height: 100px;
}

.logo-centerer {
  margin: 0 auto;
  /* position: absolute;
  left: 50%;
  margin-left: -75px;
  transform: translateY(100px); */
}

@media (min-width: 801px) {
  .contents {
    min-width: 690px;
    display: flex;
    flex-direction: column;
  }

  .content {
    min-width: 690px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}

@media (min-width: 1201px) {
  .contents,
  .content {
    min-width: 1060px;
  }

  .content:nth-child(3) {
    justify-content: center;
  }
}
</style>
