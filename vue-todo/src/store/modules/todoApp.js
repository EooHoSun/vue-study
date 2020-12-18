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

const state = {
    todoItems: storage.fetch(),
};

const mutations = {
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
    toggleComplete(state, payload){
        state.todoItems[payload].completed = !state.todoItems[payload].completed;
        storage.setLocalStorage(state);
    },
};

const getters = {
    getTodoItems(state){
        return state.todoItems;
    },
};

export default {
    state,
    getters,
    mutations
};