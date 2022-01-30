import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import common from './modules/common'
import tour from './modules/tour'
import admin from './modules/admin'
import ticket from './modules/ticket'

Vue.use(Vuex)
const store = () => {
  return new Vuex.Store({
    modules: {
      user,
      common,
      tour,
      admin,
      ticket
    },
  })
}

export default store
