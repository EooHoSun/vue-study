<template>
    <div class="clearAllContainer">
        <span class="clearAllBtn" @click="clearTodo">clear All</span>
    </div>
</template>

<script>
import {mapMutations} from 'vuex';
export default {
    methods : {
        ...mapMutations(['clearTodo'])
    }
}
</script>

<style scoped>
.clearAllContainer {
    width:8.5rem;
    height:100%;
    line-height:100%;
    background-color:white;
    border-radius:10%;
    margin: 0 auto;
    cursor: pointer;
    vertical-align: middle;
}
.clearAllContainer:hover {
    width:8.5rem;
    height:100%;
    line-height:100%x;
    background-color:black;
    border-radius:10%;
    margin: 0 auto;
    cursor: pointer;
    vertical-align: middle;
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