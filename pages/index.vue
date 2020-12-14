<template>
  <mazur-flex-container class="vertical padded">
    <mazur-space class="big show-on-lg"></mazur-space>
    <mazur-space class="show-on-md"></mazur-space>

    <mazur-flex-area>
      <div style="display: flex">
        <div style="padding-right: 80px" class="show-on-md">
          <mazur-text class="bigger baloo">Marcelina Mazur</mazur-text>
          <mazur-text class="baloo block">
            <span>{{ isEnglish ? 'accounting' : 'księgowość' }}</span>
            <span class="muted">&nbsp; / &nbsp;</span>
            <span>{{
              isEnglish ? 'liturgical music' : 'muzyka liturgiczna'
            }}</span>
          </mazur-text>
          <a target="_blank" href="https://marcelina.mazur.site">
            <mazur-link class="small baloo"
              >{{ isEnglish ? 'meet' : 'poznaj' }} &raquo;</mazur-link
            ></a
          >
        </div>
        <div style="padding-right: 20px" class="hide-on-md">
          <mazur-text class="big baloo">Marcelina Mazur</mazur-text>
          <mazur-text class="smaller baloo block">
            <span>{{ isEnglish ? 'Accounting' : 'księgowość' }}</span>
            <span class="muted">&nbsp;/&nbsp;</span>
            <span>{{
              isEnglish ? 'liturgical music' : 'muzyka liturgiczna'
            }}</span>
          </mazur-text>
          <a target="_blank" href="https://marcelina.mazur.site">
            <mazur-link class="smaller baloo"
              >{{ isEnglish ? 'meet' : 'poznaj' }} &raquo;</mazur-link
            ></a
          >
        </div>
        <mazur-avatar
          style="margin-left: auto; margin-top: 5px"
          :size="90"
          url="https://s.gravatar.com/avatar/75acc8c4cb9708377360b2be5d9083d8?size=256?size=120"
          class="bordered"
        ></mazur-avatar>
      </div>

      <mazur-space></mazur-space>

      <div style="display: flex">
        <div style="padding-right: 80px" class="show-on-md">
          <mazur-text class="bigger baloo">Maciej Mazur</mazur-text>
          <mazur-text class="baloo block">
            <span>{{ isEnglish ? 'software' : 'oprogramowanie' }}</span>
            <span class="muted">&nbsp; / &nbsp;</span>
            <span>{{ isEnglish ? 'design' : 'design' }}</span>
          </mazur-text>
          <a target="_blank" href="https://maciej.mazur.site">
            <mazur-link class="small baloo"
              >{{ isEnglish ? 'meet' : 'poznaj' }} &raquo;</mazur-link
            ></a
          >
        </div>
        <div style="padding-right: 20px" class="hide-on-md">
          <mazur-text class="big baloo">Maciej Mazur</mazur-text>
          <mazur-text class="smaller baloo block">
            <span>{{ isEnglish ? 'software' : 'oprogramowanie' }}</span>
            <span class="muted">&nbsp;/&nbsp;</span>
            <span>{{ isEnglish ? 'design' : 'design' }}</span>
          </mazur-text>
          <a target="_blank" href="https://maciej.mazur.site">
            <mazur-link class="smaller baloo"
              >{{ isEnglish ? 'meet' : 'poznaj' }} &raquo;</mazur-link
            ></a
          >
        </div>
        <mazur-avatar
          style="margin-left: auto; margin-top: 5px"
          :size="90"
          class="bordered"
        ></mazur-avatar>
      </div>

      <mazur-space class="big"></mazur-space>

      <div style="display: flex">
        <div style="padding-right: 80px" class="show-on-md">
          <mazur-text class="bigger baloo">Helena Mazur</mazur-text>
          <mazur-text class="baloo block">
            <span>{{ isEnglish ? 'play' : 'psoty' }}</span>
            <span class="muted">&nbsp; / &nbsp;</span>
            <span>{{
              isEnglish ? 'attention seeking' : 'poszukiwanie uwagi'
            }}</span>
          </mazur-text>
          <a target="_blank" href="https://photos.app.goo.gl/ZBzunxbE2Xnv5SG27">
            <mazur-link class="small baloo"
              >{{ isEnglish ? 'meet' : 'poznaj' }} &raquo;</mazur-link
            ></a
          >
        </div>
        <div style="padding-right: 20px" class="hide-on-md">
          <mazur-text class="big baloo">Helena Mazur</mazur-text>
          <mazur-text class="smaller baloo block">
            <span>{{ isEnglish ? 'play' : 'psoty' }}</span>
            <span class="muted">&nbsp; / &nbsp;</span>
            <span>{{
              isEnglish ? 'attention seeking' : 'poszukiwanie uwagi'
            }}</span>
          </mazur-text>
          <a target="_blank" href="https://photos.app.goo.gl/ZBzunxbE2Xnv5SG27">
            <mazur-link class="smaller baloo"
              >{{ isEnglish ? 'meet' : 'poznaj' }} &raquo;</mazur-link
            ></a
          >
        </div>
        <mazur-avatar
          style="margin-left: auto; margin-top: 5px"
          :size="90"
          url="https://s.gravatar.com/avatar/7817cdf448989cbc0540b023551f547d?s=256?size=88"
          class="bordered"
        ></mazur-avatar>
      </div>
    </mazur-flex-area>

    <mazur-flex-page class="align-center justify-center">
      <mazur-flex-area class="align-center">
        <mazur-space class="big"></mazur-space>
        <mazur-logo class="logo"></mazur-logo>
        <mazur-space class="small"></mazur-space>
        <div class="languages">
          <mazur-text
            class="baloo smaller language"
            :class="{ muted: isPolish }"
            @click.native="setLanguage(false)"
            >PL</mazur-text
          >
          <span>&nbsp;</span>
          <mazur-text
            class="baloo smaller language"
            :class="{ muted: isEnglish }"
            @click.native="setLanguage(true)"
            >EN</mazur-text
          >
        </div>
      </mazur-flex-area>
    </mazur-flex-page>

    <mazur-space></mazur-space>
  </mazur-flex-container>
</template>

<script>
import {
  MazurSpace,
  MazurText,
  MazurAvatar,
  MazurLogo,
  MazurLink,
  MazurFlexContainer,
  MazurFlexArea,
  MazurFlexPage,
} from '@maciejmazur/core-components'

export default {
  components: {
    MazurText,
    MazurSpace,
    MazurAvatar,
    MazurLogo,
    MazurLink,
    MazurFlexContainer,
    MazurFlexArea,
    MazurFlexPage,
  },
  data: () => {
    const language = process.client
      ? navigator.language || window.navigator.userLanguage
      : 'en'

    const isEnglish = language !== 'pl'

    return {
      isEnglish,
    }
  },
  computed: {
    isPolish() {
      return !this.isEnglish
    },
  },
  methods: {
    setLanguage(isEnglish) {
      this.isEnglish = isEnglish
    },
    toggleLanguage() {
      this.isEnglish = !this.isEnglish
    },
  },
}
</script>

<style>
.languages .language {
  cursor: pointer;
}

.languages .language:not(.muted) {
  opacity: 0.25;
}

.languages .language:hover {
  color: #222 !important;
  opacity: 1 !important;
}

.logo {
  width: 96px;
  opacity: 0.125;
}

.footer {
  justify-content: flex-end;
  align-items: center;
}
</style>
