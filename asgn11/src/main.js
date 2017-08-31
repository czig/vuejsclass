import Vue from 'vue'
import App from './App.vue'

Vue.filter('countLength', function(value) {
    if (value != "") {
        return value + " (" + value.length + ")";
    }
    else {
        return;
    }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
