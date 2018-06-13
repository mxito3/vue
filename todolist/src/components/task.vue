<template>
  <li @click="deleteOne">{{content}}</li>
</template>

<script>
export default {
  props:['content','index'],
  methods:
  {
    deleteOne ()
    {
      this.$emit('del',this.index)
    }
  }
}
</script>

<style scoped>

</style>
