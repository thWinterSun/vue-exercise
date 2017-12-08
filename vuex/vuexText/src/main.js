import Vue from 'vue'
import store from './store.js'
import vuex from './vuex.vue'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(vuex)
})
