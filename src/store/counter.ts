import { createNamespacedHelpers } from 'vuex'
import { DefineGetters, DefineMutations, DefineActions } from 'vuex-type-helper'

export interface CounterState {
  count: number
}

export interface CounterGetters {
  half: number
}

export interface CounterMutations {
  increment: {
    amount: number
  }
}

export interface CounterActions {
  incrementAsync: {
    amount: number
    delay: number
  }
}

export const state = (): CounterState => ({
  count: 10
})

export const getters: DefineGetters<CounterGetters, CounterState> = {
  half: state => state.count / 2
}

export const mutations: DefineMutations<CounterMutations, CounterState> = {
  increment(state, { amount }) {
    state.count += amount
  }
}

export const actions: DefineActions<
  CounterActions,
  CounterState,
  CounterMutations,
  CounterGetters
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
  CounterState,
  CounterGetters,
  CounterMutations,
  CounterActions
>('counter')
