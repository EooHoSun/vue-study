<template>
  <div>
      <ul>
            <li v-for="todoItem in todoItems" v-bind:key="todoItem" class="shadow">
              {{todoItem}}
              <span class="removeBtn" v-on:click="removeTodo">
                  <i class="fa fa-trash" aria-hidden="true"></i>
              </span>
            </li>
      </ul>
  </div>
</template>

<script>
export default {
    data : function(){
        return {
            todoItems: []
        };
    },
    created: function() {
        console.log('created list');
        localStorage.getItem('todoItems') && (this.todoItems = JSON.parse(localStorage['todoItems']));
        
    },
    methods : {
        removeTodo : function(){
            
        }
    }
}
</script>

<style>
ul{
    list-style-type:none;
    padding-left:0px;
    margin-top:0;
    text-align:left;
}
li{
    display:flex;
    min-height:50px;
    height:50px;
    line-height:50px;
    margin:0.5rem 0;
    padding :0 0.9rem;
    background:white;
    border-radius:5px;
}
.checkBtn{
    line-height:45px;
    color:#62acde;
    margin-right:5px;
}
.checkBtnCompleted{
    color:#b3adad;
}
.removeBtn{
    margin-left:auto;
    color:chocolate;
}
</style>