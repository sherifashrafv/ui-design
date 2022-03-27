import Vue from 'vue'
import VueTyperPlugin from 'vue-typer'

// / baseUrl For Axios Get Products
document.documentElement.lang = lang
let lang = localStorage.getItem('lang') || 'en'

Vue.use(VueTyperPlugin)
