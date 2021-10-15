import Vue from 'vue'
import VueFormulate from '@braid/vue-formulate'

Vue.use(VueFormulate, {
  classes: {
    input: 'input',
    errors: 'flex items-center h-5 mt-1 text-red-400 label',
  },
})
