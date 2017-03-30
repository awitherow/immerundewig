// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './ImmerUndEwig'
import smoothScroll from 'smooth-scroll'

smoothScroll.init({
  selector: '[data-scroll]',
  speed: 1000,
  offset: 25
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
