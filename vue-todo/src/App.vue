<template>
  <div id="app">
    <TodoHeader id="todo-header"/>
    <TodoInput  id="todo-input"/>
    <TodoList   id="todo-list""/>
    <TodoFooter id="todo-footer"/>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

const Todo = {
  components : {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  },
};

export default Todo;
</script>

<style>
 body{
   text-align : center;
   background-color:#F6F6F6;
   max-height: 500px;
 }
 input{
   border-style : groove;
   width : 200px;
 }
 button{
   border-style : groove;
 }
 .shadow {
   box-shadow : 5px 10px 10px rgba(0,0,0,0.03);
 }

</style>
 