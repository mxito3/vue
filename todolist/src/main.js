import Vue from 'vue'
import todolist from './todolist.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(todolist)
}).$mount('#app')
