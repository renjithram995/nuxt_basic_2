import Vue from 'vue'

const dateFilter = (dateIsoString) => {
  const options = {
    weekday: 'short',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  }
  return dateIsoString ? new Date(dateIsoString).toLocaleString('en-US', options) : ''
}
Vue.filter('datefilter', dateFilter)
