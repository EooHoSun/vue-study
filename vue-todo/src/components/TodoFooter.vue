<template>
    <div class="clearAllContainer">
        <span class="clearAllBtn" v-on:click="clearTodo">clear All</span>
    </div>
</template>

<script>
export default {
    methods : {
        clearTodo : function(){
            localStorage.clear();
            this.$emit("clearTodo");
        }
    }
}
</script>

<style scoped>
.clearAllContainer {
    width:8.5rem;
    height:50px;
    line-height:50px;
    background-color:white;
    border-radius:5px;
    margin: 0 auto;
    cursor: pointer;
}
.clearAllContainer:hover {
    width:8.5rem;
    height:50px;
    line-height:50px;
    background-color:black;
    border-radius:5px;
    margin: 0 auto;
    cursor: pointer;
}
.clearAllBtn:hover{
    color : white;
    display:block;
}
.clearAllBtn {
    color : #e20303;
    display:block;
}
</style>