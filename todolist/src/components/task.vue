<template>
  <li @click="deleteOne" class="item">{{content}}</li>
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
.item
{
  color: red;
}
</style>
