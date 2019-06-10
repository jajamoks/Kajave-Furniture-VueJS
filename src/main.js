import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Sticky from 'vue-sticky-directive'
import VueZoomer from 'vue-zoomer'
import 'vue-zoomer/dist/vue-zoomer.css'
import Toasted from 'vue-toasted';

Vue.use(Toasted)

import { MdField,MdProgress,MdList,MdMenu} from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false

Vue.use(MdField);
Vue.use(MdProgress);
Vue.use(MdList);
Vue.use(MdMenu);
Vue.use(VueZoomer)

Vue.use(Sticky)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
