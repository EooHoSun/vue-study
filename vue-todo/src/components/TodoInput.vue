<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" class="">
    <span class="addContainer">
      <i class="fa fa-plus addBtn" v-on:click="addTodo"></i>
    </span>
  </div>
</template>

<script>
export default {
  data : function(){
    return {
      newTodoItem : ''
    };
  },
  methods:{
    addTodo : function() {
      const obj = {
        completed : false,
        item : this.newTodoItem
      };
      if(localStorage.getItem('todoItems')) {
        const list = JSON.parse(localStorage.getItem('todoItems')).concat(obj);
        localStorage.setItem('todoItems',JSON.stringify(list));
      } else {
        localStorage.setItem('todoItems',JSON.stringify([obj]));
      }

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
  height : 80%;
  width : 30rem;
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