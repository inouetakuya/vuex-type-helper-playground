<template>
  <section class="container">
    <div>
      <logo />

      <h1 class="title">
        vuex-type-helper-playground
      </h1>

      <h2 class="subtitle">
        Counter: <span class="count">{{ half }}</span>
      </h2>

      <div class="links">
        <button class="button--green" @click="increment">
          Increment
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import * as counter from '~/store/counter'
import Logo from '~/components/Logo.vue'

@Component({
  components: {
    Logo
  },
  computed: {
    ...counter.mapGetters(['half'])
  },
  methods: {
    ...counter.mapActions(['incrementAsync'])
  }
})
export default class IndexPage extends Vue {
  incrementAsync: (payload: any) => void

  increment(): void {
    this.incrementAsync({ amount: 1, delay: 1000 })
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
