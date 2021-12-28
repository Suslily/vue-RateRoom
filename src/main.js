import Vue from 'vue'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

import moment from "moment";

export const filDate = value => {
  if (value === "") {
    return "";
  }
  return moment.unix(value).format("YYYY/MM/DD HH:mm");
};

export default {
  install(vue) {
    vue.filter("filDate", filDate);

    vue.prototype.$customFilter = {
      filDate
    };
  }
};