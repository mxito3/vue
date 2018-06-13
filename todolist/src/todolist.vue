<template>
  <div>
    <input type="" name="" v-model="task" class="item">
    <button @click="handleClick">提交</button>
    <ul>
      <Task v-for="(item,index) of list" :key="index" :content="item" :index="index"
      @del="deleteOn"/>
    </ul>
  </div>
</template>
<script>
import taskOne from './components/task.vue'

export default {
  data (){
    return {
      task:'',
      list:[]
    }
  },
    methods:{
      handleClick(){
        this.list.push(this.task)
        this.task=''
      },
      deleteOn(index){
        this.list.splice(index,1)
      }
    },
    components:
    {
      'Task':taskOne
    }
}
</script>

<style>

</style>
