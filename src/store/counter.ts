import { createNamespacedHelpers } from 'vuex'
import { DefineGetters, DefineMutations, DefineActions } from 'vuex-type-helper'

interface CounterState {
  count: number
}

interface CounterGetters {
  half: number
}

interface CounterMutations {
  increment: {
    amount: number
  }
}

interface CounterActions {
  incrementAsync: {
    amount: number
    delay: number
  }
}

const state = (): CounterState => ({
  count: 10
})

const getters: DefineGetters<CounterGetters, CounterState> = {
  half: state => state.count / 2
}

const mutations: DefineMutations<CounterMutations, CounterState> = {
  increment(state, { amount }) {
    state.count += amount
  }
}

const actions: DefineActions<
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
