import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export function createStore() {
  return new Vuex.Store({
    state: {
      weather: {}
    },
    getters: {
    },
    mutations: {
      GETWEATHER(state, data) {
        state.weather = data
      }
    },
    actions: {
      getWeatherData({commit}) {
        return new Promise((resolve) => {
          // 这里后面的参数需要转换一下，在express上会报错（：Request path contains unescaped characters） 不能是中文
          axios.get('http://wthrcdn.etouch.cn/weather_mini?city='+encodeURI('南京')).then(res => {
            commit('GETWEATHER', res.data.data)
            resolve()
          })
        })
      }
    },
    modules: {
    }
  })
}
