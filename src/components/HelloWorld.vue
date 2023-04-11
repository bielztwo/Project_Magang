<!-- eslint-disable no-undef -->
<template>
  <div class="hello">
    <h1>Fetch Sensor Data</h1>
    <h2 style="text-align: center;">Items</h2>
    <body>
      <h4 v-for="items in item" :key="items.id">Water Level: {{ items.ultrasonic }} Cm</h4>
      <h4 v-for="items in item" :key="items.id">Nutrition: {{ items.nutrition }} PPM</h4>
      <h4 v-for="items in item" :key="items.id">Water Temperature: {{ items.temperature }} C</h4>
      <h4 v-for="items in item" :key="items.id">Ph: {{ items.ph }} </h4>
    </body>
</div>
</template>

<script>
import axios from '@/axios';
export default {
  data(){
    return{
      item:'',
    }
  },
  methods:{
    getData(){
      axios
      .get("/")
      .then((response) =>{
        this.item = response.data;
      })
      .catch((error)=>{
        console.log('Kamu salah',error);
      })
    },
  },
  mounted() {
    setInterval(this.getData, 2000);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h4 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

h2{
  margin-bottom: 70px;
}
.hello{
  padding: 50px;
  text-align: center;
  justify-content: center;
  width: calc(100% - 300px);
  display: column;
}

</style>
