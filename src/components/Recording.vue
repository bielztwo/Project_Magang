<template>
    <div class="hello">
        <h1>Record Data</h1>
        <div class="top">

        </div>
        <div class="mid">
            <div class="left">
                <form class="form" @submit.prevent="submitForm">
                    <div class="line1">
                        <div class="twr1">
                            <label id="lbl">Tower</label>
                            <select v-model="choose.tower">
                                <option v-for="tower in towers">{{ tower }}</option>
                            </select>
                        </div>
                        <div class="twr2">
                            <label id="lbl">Direction</label>
                            <select v-model="choose.twrDirection">
                                <option v-for="twrDirection in twrDirections">{{ twrDirection }}</option>
                            </select>
                        </div>
                        <div class="twr3">
                            <label id="lbl">Column</label>
                            <input type="number" v-model="choose.column">
                        </div>
                    </div>
                    <div class="line2">
                        <div class="namatanaman">
                                    <label id="lbl">Nama Tanaman</label> 
                                    <input type="text" v-model="choose.nmTanaman" placeholder="Ex: Selada Lettuca">
                            </div>
                        <div class="produsen">
                                <label id="lbl">Produsen</label> 
                                <input type="text" v-model="choose.produsen" placeholder="Ex: PT.Garuda Seeds">
                        </div>
                    </div>
                    <div class="line3">
                        <div class="exp">
                                    <label id="lbl">Expired Bibit</label>
                                    <input type="date" v-model="choose.exp"/>
                            </div>
                        <div class="strpenyemaian">
                                <label id="lbl">Start Penyemaian</label>
                                <input type="date" v-model="choose.strpenyemaian">
                        </div>
                    </div>
                    <div class="line4">
                        <div class="tglpemindahan">
                                    <label id="lbl">Tanggal Pemindahan</label>
                                    <input type="date" v-model="choose.tglpemindahan">
                            </div>
                        <div class="tglkematian">
                                <label id="lbl">Tanggal Kematian</label>
                                <input type="date" v-model="choose.tglkematian">
                        </div>
                        <div class="tglpanen">
                                <label id="lbl">Tanggal Panen</label>
                                <input type="date" v-model="choose.tglpanen">
                        </div>
                    </div>
                    <button class="button" type="submit">Submit</button>
                </form>
            </div>
            <div class="right">
                <h3>Preview Data Input</h3>
                <p>Tower : {{ choose.tower }}-{{ choose.twrDirection }}-{{choose.column}}</p>
                <p>Nama Tanaman : {{ choose.nmTanaman }}</p>
                <p>Produsen : {{ choose.produsen }}</p>
                <p>Expired : {{ choose.exp }}</p>
                <p>Start Penyemaian : {{ choose.strpenyemaian }}</p>
                <p>Tanggal Pemindahan : {{ choose.tglpemindahan }}</p>
                <p>Tanggal Kematian : {{ choose.tglkematian }}</p>
                <p>Tanggal Panen : {{ choose.tglpanen }}</p>
        </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            choose:{
                tower:"",
                twrDirection:"",
                column:"",
                nmTanaman:"",
                produsen:"",
                exp:"",
                strpenyemaian:"",
                tglkematian:"",
                tglpemindahan:"",
                tglpanen:"",
            },
            towers:['Tower A', 'Tower B', 'Tower C', 'Tower D'],
            twrDirections:['Utara', 'Barat', 'Selatan', 'Timur'],
        };
    },
    computed:{
        towerinput(){
            return `${this.tower}-${this.twrDirections}-${this.column}`;
        },
    },
    methods:{
        submitForm(){
            const formData = {
                towerinput:this.towerInput,
                namaTanaman: this.nmTanaman,
                produsen: this.produsen,
                exp: this.exp,
                strpenyemaian: this.strpenyemaian,
                tglkematian: this.tglkematian,
                tglpemindahan: this.tglpemindahan,
                tglpanen: this.tglpanen,
            };
            this.submitData(formData);
        },
        submitData(formData) {
            axios
            .post('/submit',formData)
            .then((response)=>{
                console.log('Data Submitted Succesfully!');
            })
            .catch((error)=>{
                console.log('Error submitting data',error);
            });
        },
    },
}
</script>

<style scoped>
    h1{
        align-content: center;
        align-items: center;
        justify-content: center;
        margin-bottom: 50px;
        margin-top: 80px;
        display: flex;
        font-size: 30px;
    }
    h3{
        margin-bottom: 10px;
    }
    p{
        margin-bottom: 7px;
    }
    .hello{
        display: flex;
        flex-direction: column;
    }
    .mid{
        display: flex;
    }
    .right,.left{
        padding: 50px;
    }
    .left{
        width: 60%;
    }
    .right{
        width: 40%;
    }
    .twr1,.twr2,.twr3{
        display: inline;
        margin-left: 25px;
        margin-top: 25px;
        margin-right: 25px;
        margin-bottom: 10px;
    }
    .twr3{
        width: 25%;
    }
    .line1,.line2,.line3,.line4{
        display: flex;
    }
    .produsen,.namatanaman{
        display: inline;
        margin-left: 25px;
        margin-top: 25px;
        margin-right: 25px;
        margin-bottom: 10px;
    }
    .exp,.strpenyemaian,.tglpemindahan,.tglkematian,.tglpanen{
        display: inline;
        margin-left: 25px;
        margin-top: 25px;
        margin-right: 25px;
        margin-bottom: 10px;
    }
    input[type="text"]{
        border: 0;
        padding: 10px;
        margin-top: 10px;
        box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.6);
        border-radius: 8px;
    }
    input[type="number"]{
        border: 0;
        padding: 10px;
        margin-top: 10px;
        box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.6);
        border-radius: 8px;
    }
    select{
        padding: 10px;
        margin-top: 10px;
        border: 0;
        box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.6);
        border-radius: 8px;
    }
    input[type="date"]{
        padding: 10px;
        margin-top: 10px;
        border: 0;
        box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.6);
        border-radius: 8px;
    }
    .button{
        align-items: center;
        margin-top: 100px;
        margin-left: 25px;
        justify-content: center;
        width: 30%;
        height: 40px;
        top: 50%;
        background-color: black;
        color: white;
        border: none;
        border-radius: 10px;
        box-shadow: 0 0 2px 2px rgb(0,0,0);
    }
    .button:hover{
        background-color: #002ead;
        transition: 0.7s;
    }
    .button:focus{
        outline-color: transparent;
        outline-style: solid;
        box-shadow: 0 0 0 4px #5a01a7;
        transition: 0.7s;
    }
    .button:focus{
        background-color: #ffbf00;
    }
</style>