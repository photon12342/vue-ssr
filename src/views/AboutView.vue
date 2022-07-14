<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="getWeather">获取天气数据</button>
    <ul>
      <li v-for="item in data.forecast" :key="item.date">
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
import axios from 'axios';

export default {
  data() {
    return {
      data: {}
    }
  },
  methods: {
    getWeather() {
      axios.get('http://wthrcdn.etouch.cn/weather_mini?city=南京').then(res => {
        this.data = res.data.data
      })
    }
  }
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
  margin-bottom: 20px;
}
li {
  margin: 0 10px;
}
</style>
