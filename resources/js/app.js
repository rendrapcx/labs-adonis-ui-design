// import '../css/app.css'
import '../css/tailwind.css'
// import 'chart.js'
// import Chart from 'chart.js/auto';
import showModal from './components/modal'
Alpine.data('showModal', showModal)


import sidebar from './components/sidebar'
Alpine.data('sidebar', sidebar)


import Alpine from 'alpinejs'

window.Alpine = Alpine

Alpine.start()

