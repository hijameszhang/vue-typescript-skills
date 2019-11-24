import { Module, VuexModule } from 'vuex-module-decorators'
import store from './index'

@Module({ dynamic: true, store, name: 'mymod' })
export default class MyModule extends VuexModule {
  someField: string = 'somedata'
}
