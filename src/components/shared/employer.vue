<template>
  <div class="text-gray-700">
    <section class="flex">
      <header class="flex flex-col items-center h-auto">
        <div
          class="rounded-full border border-gray-700 text-gray-700 flex"
          style="min-width: 100px; min-height: 100px"
        >
          <img
            v-if="iconUrl"
            :src="require(`~/assets/${iconUrl}`)"
            class="m-auto w-16 max-h-16"
          />
          <i v-if="!iconUrl" class="m-auto text-2xl" :class="iconClass"></i>
        </div>
        <div class="mt-5 w-1 flex-grow rounded bg-gray-500"></div>
      </header>
      <main class="ml-10 pt-8 mt-0.5">
        <div class="text-2xl font-varela">{{ name }}</div>
        <section class="pb-4 text-gray-400 font-work text-xs">
          <div class="flex" v-for="role in roles" :key="role.name">
            <div class="col-span-7 w-48">{{ role.name }}</div>
            <div class="text-gray-300">
              <span>{{ role.from }}</span>
              <span v-if="role.to">- {{ role.to }}</span>
              <span v-if="!role.to">+</span>
            </div>
          </div>
        </section>
        <div
          class="text-xs font-work text-gray-400"
          :class="role ? 'pb-0.5' : 'pb-4'"
        >
          {{ timeline }}
        </div>
        <div v-if="role" class="text-xs font-work text-gray-400 pb-4">
          {{ role }}
        </div>
        <div class="text-gray-400 font-work">
          <slot></slot>
        </div>
      </main>
    </section>
  </div>
</template>

<script>
export default {
  name: 'SharedEmployer',
  props: {
    name: {
      required: true,
      type: String,
    },
    roles: {
      required: true,
      type: Array,
    },
    icon: {
      default: 'handshake',
      type: String,
    },
    iconUrl: {
      default: null,
      type: String,
    },
  },
  computed: {
    iconClass: function () {
      return `fas fa-${this.icon}`
    },
  },
}
</script>
