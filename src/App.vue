<template>
  <div class="app">
    <!-- SideBar -->
    <Sidebar />
    <router-view />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Sidebar from './components/Sidebar.vue'

export default {
  name: 'App',
  components: { 
    Sidebar,
    HelloWorld
  }
}
</script>

<style lang="scss">
.app {
  display: flex;
}
  main{
    flex: 1 1 0;
    padding: 1rem;
  }

    @media (max-width: 1024px){
      main{
          padding-left: 6rem;
      }
    }
::root{
  --primary-color: #2c3e50;
  --secondary-color: #2c3e50;
  --sidebar-width: 300px
  --grey: grey;
  --dark:var(--dark)
  --light:var(--light)
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
body{
  background-image: linear-gradient(180deg,#FAEDCD,#E9EDC9,#CCD5AE);
}
button{
  cursor: pointer;
  appearance: none;
  border-radius: 10%;
  margin: 5px;
  border: none;
  outline: 1px solid;
  background: #edc4b3;
}
</style>
