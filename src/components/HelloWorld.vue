<template>
  <div class="hello">
    <h1>Fetch Sensor Data</h1>
    <h2 style="text-align: center;">Items</h2>
    <div class="chart-container">
    <div class="chart-row">
      <canvas id="ultrasonicChart"></canvas>
      <canvas id="nutritionChart"></canvas>
    </div>
    <div class="chart-row">
      <canvas id="temperatureChart"></canvas>
      <canvas id="phChart"></canvas>
    </div>
  </div>
    <body>
      <!--<h4 v-for="item in items" :key="item.id">Water Level: {{ latestData.ultrasonic }} Cm</h4>
      <h4 v-for="item in items" :key="item.id">Nutrition: {{ latestData.nutrition }} PPM</h4>
      <h4 v-for="item in items" :key="item.id">Water Temperature: {{ latestData.temperature }} C</h4>
      <h4 v-for="item in items" :key="item.id">Ph: {{ latestData.ph }} </h4>-->
    </body>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';
import axios from '@/axios';

export default {
  data() {
    return {
      items: [],
      chart: null
    }
  },
  methods: {
    getData() {
      axios
      .get("/all")
      .then((response) => {
        this.items = response.data;
        //let latestData = this.items.slice(-1);
        this.updateChart();
      })
      .catch((error) => {
        console.log(error);
      })
    },
    updateChart() {
      // Access the canvas element and create a chart with the fetched data
      let ctx1 = document.getElementById('ultrasonicChart').getContext('2d');
      let ctx2 = document.getElementById('nutritionChart').getContext('2d');
      let ctx3 = document.getElementById('temperatureChart').getContext('2d');
      let ctx4 = document.getElementById('phChart').getContext('2d');

      // Get the latest 10 values from the fetched data
      let latestItems = this.items.slice(-10); // Get the last 10 items
      let labels1 = latestItems.map(item => item.created_at); // Get the created_at values for the labels
      let values1 = latestItems.map(item => item.ultrasonic); // Get the ultrasonic values for the data
      let labels2 = latestItems.map(item => item.created_at); // Get the created_at values for the labels
      let values2 = latestItems.map(item => item.nutrition); // Get the nutrition values for the data
      let labels3 = latestItems.map(item => item.created_at); // Get the created_at values for the labels
      let values3 = latestItems.map(item => item.temperature); // Get the temperature values for the data
      let labels4 = latestItems.map(item => item.created_at); // Get the created_at values for the labels
      let values4 = latestItems.map(item => item.ph); // Get the ph values for the data

      
      if (this.ultrasonicchart) {
        this.ultrasonicchart.destroy(); // Destroy existing Chart instance
      }
      this.ultrasonicchart = new Chart(ctx1, {
        type: 'line', // Set the chart type to bar
        data: {
          labels: labels1, // Set the labels for the x-axis
          datasets: [{
            label: 'Water Level (Cm)', // Set the label for the chart
            data: values1, // Set the data for the y-axis
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Set the background color for the bars
            borderColor: 'rgba(75, 192, 192, 1)', // Set the border color for the bars
            borderWidth: 1 // Set the border width for the bars
          },
          {
            label: 'Nutrition (ppm)', // Set the label for the chart
            data: values2, // Set the data for the y-axis
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Set the background color for the bars
            borderColor: 'rgba(75, 192, 192, 1)', // Set the border color for the bars
            borderWidth: 1 // Set the border width for the bars
          }]
        },
        options: {
          animation: false,
          responsive: true,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });

      if (this.nutritionchart) {
        this.nutritionchart.destroy(); // Destroy existing Chart instance
      }
      this.nutritionchart = new Chart(ctx2, {
        type: 'line', // Set the chart type to bar
        data: {
          labels: labels2, // Set the labels for the x-axis
          datasets: [{
            label: 'Nutrition (ppm)', // Set the label for the chart
            data: values2, // Set the data for the y-axis
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Set the background color for the bars
            borderColor: 'rgba(75, 192, 192, 1)', // Set the border color for the bars
            borderWidth: 1 // Set the border width for the bars
          }]
        },
        options: {
          animation: false,
          responsive: true,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });

      if (this.temperaturechart) {
        this.temperaturechart.destroy(); // Destroy existing Chart instance
      }
      this.temperaturechart = new Chart(ctx3, {
        type: 'line', // Set the chart type to bar
        data: {
          labels: labels3, // Set the labels for the x-axis
          datasets: [{
            label: 'Temperature (C)', // Set the label for the chart
            data: values3, // Set the data for the y-axis
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Set the background color for the bars
            borderColor: 'rgba(75, 192, 192, 1)', // Set the border color for the bars
            borderWidth: 1 // Set the border width for the bars
          }]
        },
        options: {
          animation: false,
          responsive: true,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });

      if (this.phchart) {
        this.phchart.destroy(); // Destroy existing Chart instance
      }
      this.phchart = new Chart(ctx4, {
        type: 'line', // Set the chart type to bar
        data: {
          labels: labels4, // Set the labels for the x-axis
          datasets: [{
            label: 'PH', // Set the label for the chart
            data: values4, // Set the data for the y-axis
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Set the background color for the bars
            borderColor: 'rgba(75, 192, 192, 1)', // Set the border color for the bars
            borderWidth: 1 // Set the border width for the bars
          }]
        },
        options: {
          animation: false,
          responsive: true,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });

    },
  },
  mounted () {
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
}
.chart-container {
  display: flex;
  flex-wrap: wrap;
}

.chart-row {
  width: 50%;
  padding: 10px;
  box-sizing: border-box;
}

canvas {
  width: 100%;
  height: 400px;
}
</style>
