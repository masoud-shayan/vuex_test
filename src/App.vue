<template>
  <div id="app">
    <div class="container">
      <app-first></app-first>
      <br>
      <br>
      <app-second></app-second>
      <br>
      <br>
      <app-calc></app-calc>
      
    </div>
    
  </div>
</template>
<script>
import First from './components/FirstDisplay'
import Second from './components/SecondDisplay'
import Calc from './components/Calc'
export default {
  components : {
    'app-first' :  First,
    'app-second' : Second,
    'app-calc': Calc
  }
  
}
</script>

<style>
.container { 
  border: 1px solid red;
  text-align: center;
}

</style>
