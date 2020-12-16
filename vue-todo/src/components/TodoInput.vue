<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem">
    <span class="addContainer">
      <i class="fa fa-plus addBtn" v-on:click="addTodo"></i>
    </span>
  </div>
</template>

<script>
const addArr = (str, ele)=>{
  return JSON.stringify(JSON.parse(str).concat(ele));
};
export default {
  data : function(){
    return {
      newTodoItem : ''
    };
  },
  methods:{
    addTodo : function() {
      localStorage.getItem('todoItems') ? localStorage.setItem('todoItems',addArr(localStorage.getItem('todoItems')),this.newTodoItem) : localStorage.setItem('todoItems',JSON.stringify([this.newTodoItem]));
      this.clearInput();
    },
    clearInput : function() {
      this.newTodoItem = '';
    }
  }
}
</script>

<style scoped>
input:focus{
  outline:none;
}
.inputBox{
  background:white;
  height:50px;
  line-height: 50px;
  border-radius : 5px;
}
.inputBox input{
  border-style:none;
  font-size:0.5rem;
}
.addContainer{
  float:right;
  background:linear-gradient(to right, #6478FB, #8763FB);
  width : 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color:white;
  vertical-align: middle;
  cursor: pointer;
}
 .shadow {
   box-shadow : 5px 10px 10px rgba(0,0,0,0.03);
 }
</style>