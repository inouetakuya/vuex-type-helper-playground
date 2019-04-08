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

export interface Actions {
  incrementAsync: {
    amount: number
    delay: number
  }
}

export const state = (): State => ({
  count: 10
})

export const getters: DefineGetters<Getters, State> = {
  half: state => state.count / 2
}

export const mutations: DefineMutations<Mutations, State> = {
  increment(state, { amount }) {
    state.count += amount
  }
}

export const actions: DefineActions<
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
