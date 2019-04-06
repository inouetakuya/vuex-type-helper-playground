import { DefineGetters } from 'vuex-type-helper'

export interface CounterState {
  count: number
}

export interface CounterGetters {
  half: number
}

export const state = (): CounterState => ({
  count: 10
})

export const getters: DefineGetters<CounterGetters, CounterState> = {
  half: state => state.count / 2
}
