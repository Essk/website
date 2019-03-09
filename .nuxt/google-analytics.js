import Vue from 'vue'
import VueAnalytics from 'vue-analytics'

export default async function ({ app: { router } }) {
  const options = {"dev":true,"debug":{},"id":"UA-65309624-3"}

  Vue.use(VueAnalytics, {...{ router }, ...options})
}
