<template>
  <div>
    <h1>在asyncData中通过vuex获取数据</h1>
    <ul>
      <li v-for="item in weather.forecast" :key="item.date">
        <h4 class="date">{{item.date}}：</h4>
        <ul>
          <li>
            <b>天气状况：</b><span>{{item.type}}</span> | 
            <b>高温：</b><span>{{item.high}}</span> | 
            <b>低温：</b><span>{{item.low}}</span> | 
            <b>风向：</b><span>{{item.fengxiang}}</span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['weather'])
  },
  asyncData({store}) {
    return store.dispatch('getWeatherData')
  },
}
</script>

<style scoped lang="scss">
ul {
  list-style-type: none;
}
</style>
