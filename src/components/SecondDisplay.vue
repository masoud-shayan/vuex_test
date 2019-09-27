<template>
  <div>
      <h3>second counter is : {{ counter }}</h3>

  </div>
</template>

<script>
export default {
     computed : {
        counter() {
           return this.$store.getters.displayCounter;
        } 
    }

}
</script>

<style>

</style>