<template>
    <div class="hello">
            <h2 style="text-align: center;">Items</h2>
            <body>
            <div class="buttonAll">
                <button id = "buttn1" class="btn" v-on:click="getData1()">alldata</button>
                <button id = "b2" class="btn" v-on:click="getData2()">2 Minutes</button>
                <button id = "b3" class="btn" v-on:click="getData3()">10 Minutes</button>
                <button id = "b4" class="btn" v-on:click="getData4()">1 Hour</button>
            </div>
            </body>
            <div class="table-scroll">
            <table class="items-table">
            <thead>
                <tr>
                <th >Time</th>
                <th >Jarak</th>
                <th >Nutrisi</th>
                <th >Temperature</th>
                <th >ph</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="itm in item1" :key="itm.id">
                <td >{{ itm.created_at }}</td>
                <td >{{ itm.ultrasonic }} cm</td>
                <td >{{ itm.nutrition }} ppm</td>
                <td >{{ itm.temperature }} C</td>
                <td >{{ itm.ph }} </td>
                </tr>
            </tbody>
            </table>
        </div>
        </div>
</template>

<script>
import axios from '@/axios';
export default {
    data() {
        return {
            item: '',
            item1: [],
            buttn1: false,
            b2: false,
        }
    },
    methods: {
        getData() {
            axios
                .get("/")
                .then((response) => {
                    this.item = response.data;
                })
                .catch((error) => {
                    console.log('Kamu salah', error);
                })
        },

        getData1() {
            axios
                .get("/all")
                .then((response) => {
                    this.item1 = response.data;
                })
                .catch((error) => {
                    console.log('Kamu salah', error);
                })
        },
        getData2() {
            axios
                .get("/2minutes")
                .then((response) => {
                    this.item1 = response.data;
                })
                .catch((error) => {
                    console.log('Kamu salah', error);
                })
        },
        getData3() {
            axios
                .get("/10minutes")
                .then((response) => {
                    this.item1 = response.data;
                })
                .catch((error) => {
                    console.log('Kamu salah', error);
                })
        },
        getData4() {
            axios
                .get("/1hour")
                .then((response) => {
                    this.item1 = response.data;
                })
                .catch((error) => {
                    console.log('Kamu salah', error);
                })
        }
    },
    mounted() {
        //this.buttn1 = document.getElementById("buttn1");
        //this.b2 = document.getElementById("b2");
        if (buttn1.clicked == true) {
            this.getData1();
        } else if (b2.clicked == true) {
            this.getData2();
        } else if (b3.clicked == true) {
            this.getData3();
        } else if (b4.clicked == true) {
            this.getData4();
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
    display: column;
    width: 100%;
    margin-top: 20px;
}
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
.buttonAll{
    display: flex;
    justify-content: center;
    align-items: center;
}
.btn{
    background-color: #42b983;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}
.btn:hover{
    background-color: lime;
    cursor: pointer;
}

.items-table {
    margin-top: 10px;
    border-collapse: collapse;
    width: 80%;
    margin-bottom: 1rem;
    margin: 0 auto;
}

h2 {
    margin-bottom: 70px;
}

.table-scroll {
    margin-top: 30px;
    height: 700px;
    overflow: auto;
    align-items: center;
    width: 90%;
}

.items-table th,
.items-table td {
    border: 1px solid #ddd;
    text-align: center;
    padding: 0.5rem;
}

.items-table th {
    background-color: #f2f2f2;
    text-align: center;
    font-weight: bold;
}</style>
