<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" class="" @keyup="keyPrss">
    <span class="addContainer">
      <i class="fa fa-plus addBtn" @click="addTodo"></i>
    </span>
    <Modal v-if="showModal" @close="showModal = false" @click="showModal=false">
        <h4 slot="header">경고</h4>
        <span slot="body">할 일을 적어주세요</span>
    </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue';
export default {
  data : function(){
    return {
      newTodoItem : '',
      showModal : false
    };
  },
  methods:{
    addTodo() {
      if(this.newTodoItem){
        const str = this.newTodoItem;
        this.clearInput();
        this.$store.commit("addTodo", str);
      } else {
        this.showModal = true;
      }
    },
    clearInput() {
      this.newTodoItem = '';
    },
    keyPrss(e){
      e.key === "Enter" && this.addTodo();
    }
  },
  components:{Modal}
}
</script>

<style scoped>
input:focus{
  outline:none;
}
.inputBox{
  background:white;
  height:100%;
  border-radius : 10%;
  vertical-align: middle;
}
.inputBox input{
  border-style:none;
  font-size:0.5rem;
  height : 0.8em%;
  width : 80%;
}
.addContainer{
  float:right;
  background:linear-gradient(to right, #6478FB, #8763FB);
  width : 15%;
  height:100%;
  border-radius: 0 5% 5% 0;
  vertical-align: middle;
  ;
}
.addBtn {
  color:white;
  vertical-align: middle;
  cursor: pointer;
  font-size: 1rem;
}
.shadow {
  box-shadow : 5px 10px 10px rgba(0,0,0,0.03);
}
</style>