import { createNamespacedHelpers } from 'vuex'
import { DefineGetters, DefineMutations, DefineActions } from 'vuex-type-helper'

interface State {
  count: number
}

interface Getters {
  half: number
}

interface Mutations {
  increment: {
    amount: number
  }
}

interface Actions {
  incrementAsync: {
    amount: number
    delay: number
  }
}

const state = (): State => ({
  count: 10
})

const getters: DefineGetters<Getters, State> = {
  half: state => state.count / 2
}

const mutations: DefineMutations<Mutations, State> = {
  increment(state, { amount }) {
    state.count += amount
  }
}

const actions: DefineActions<
  Actions,
  State,
  Mutations,
  Getters
> = {
  incrementAsync({ commit }, payload) {
    setTimeout(() => {
      commit('increment', payload)
    }, payload.delay)
  }
}

export const {
  mapState,
  mapGetters,
  mapMutations,
  mapActions
} = createNamespacedHelpers<
  State,
  Getters,
  Mutations,
  Actions
>('counter')
