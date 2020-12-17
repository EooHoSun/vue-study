import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const storage = {
  fetch() {
        const arr = [];
        localStorage.getItem('todoItems') && (arr.push(...JSON.parse(localStorage['todoItems'])));    
        return arr;
    },
    setLocalStorage(state) {
        localStorage.todoItems = JSON.stringify(state.todoItems);
    },
};

export const store = new Vuex.Store({
    state : {
        todoItems: storage.fetch(),
    },
    mutations:{
        addTodo(state, payload){
            const obj = {
                completed:false,
                item : payload
            }
            state.todoItems.push(obj);
            storage.setLocalStorage(state);
        },
        removeTodo(state, payload){
            state.todoItems.splice(+payload,1);
            storage.setLocalStorage(state);
        },
        clearTodo(state){
          state.todoItems = [];
          storage.setLocalStorage(state);
        },
        toggleComplete(state, payload) {
            state.todoItems[payload].completed = !state.todoItems[payload].completed;
            storage.setLocalStorage(state);
        },
    }
});