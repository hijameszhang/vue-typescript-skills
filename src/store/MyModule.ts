import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
import store from './index'

@Module({ dynamic: true, store, name: 'mymod' })
export default class MyModule extends VuexModule {
  someField: string = 'somedata'
  wheels:number = 10

  get field () {
    return this.someField
  }

  @Mutation
  puncture (n: number) {
    this.wheels = this.wheels - n
  }

  @Action
  async fetchNewWheels (wheelStore: string) {
    this.context.commit('puncture', 3)
  }
}
