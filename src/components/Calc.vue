<template>
  <div>
      <button @click="add" type="button" class="btn btn-dark">Counter ++</button>
      <br>
      <br>
      <button @click="sub" type="button" class="btn btn-dark">Counter --</button>

      <br>
      <br>
      <button @click="asyncAdd" type="button" class="btn btn-dark">delay Counter ++</button>

      <br>
      <br>
      <button @click="asyncAdd" type="button" class="btn btn-dark">delay Counter --</button>


      
  </div>
</template>

<script>
export default {
    data () {
        return {
            counter : 0
        }
    },
    methods : {
        add() { 
            // accessing by mutations because it is a sync task
            this.$store.commit('increment');
        },
        sub() {
            // accessing by mutations because it is a sync task
            this.$store.commit('decrement');
        },
        asyncAdd() {
            // accessing by actions because it is a async task
            this.$store.dispatch('asyncIncrement');
        },
        asyncSub() {
            // accessing by actions because it is a async task
            this.$store.dispatch('asyncDecrement');
        }
    }

}
</script>

<style>

</style>