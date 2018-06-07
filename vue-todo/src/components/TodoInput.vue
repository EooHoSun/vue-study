<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
        <span class="addContainer" v-on:click="addTodo">
            <i class="fas fa-plus addBtn"></i>
        </span>

        <!-- 하나의 템플릿 안에 하나의 루트 엘리먼트만 요구. 나머지는 하위로. -->
        <Modal v-if="showModal" @close="showModal = false">
            <!--
            you can use custom content here to overwrite
            default content
            -->
            <!-- slot: 특정 컴포넌트의 일부 UI 기능 재사용 -->
            <h3 slot="header">
                경고!
                <i class="closeModalBtn fas fa-times" @click="showModal=false"></i>
            </h3>
            <div slot="body">
                아무 것도 입력하지 않으셨습니다.
            </div>
        </Modal>
    </div>
</template>

<script>
import Modal from './common/Modal.vue'

export default {
    data() {
        return {
            newTodoItem: "",
            showModal: false
        }
    },
    methods: {
        addTodo() {
            if(this.newTodoItem !== "") {
                //this.$emit('addTodoItem', this.newTodoItem)
                this.$store.commit('addOneItem', this.newTodoItem)
                this.claerInput()
            } else {
                this.showModal = !this.showModal
            }
        },
        claerInput() {
            this.newTodoItem = ''
        }
    },
    components: {
        Modal: Modal
    }
}
</script>

<style scoped>
.closeModalBtn {
    color: #42b983;
}
</style>
