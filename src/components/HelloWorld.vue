<template>
  <div class="hello">
    <h1>{{data.city}}{{ msg }}</h1>
    <span>提示：{{data.ganmao}}</span>
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
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      data: {}
    }
  },
  asyncData({app}) {
    return app.getWeather()
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
a {
  color: #42b983;
}
</style>
