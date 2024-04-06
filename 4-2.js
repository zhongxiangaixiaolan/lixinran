const app = Vue.createApp({
    data() {
        return {
            newTodo: '',
            newID: 1,
            list: [],
            itemState: "all", // 默认状态为'all'
        }
    },

    computed: {
        total() {
            return this.list.length;
        },
        notDoneCount() {
            return this.list.filter(item => !item.state).length;
        },
        itemArray() {
            switch (this.itemState) {
                case 'all':
                    return this.list;
                case 'isCompleted':
                    return this.list.filter(item => !item.state);
                case 'isActive':
                    return this.list.filter(item => item.state);
                default:
                    return this.list;
            }
        }
    },

    methods: {
        appendItem() {
            if (this.newTodo.trim() !== '') {
                this.list.push({
                    id: this.newID++,
                    text: this.newTodo,
                    state: true // 新添加的状态为 true，表示待完成
                });
            } else {
                alert("请输入待办事项！");
            }
            this.newTodo = '';
        },
        clearDone() {
            this.list = this.list.filter(item => item.state);
        },
        completed(index) {
            this.list[index].state = false; // 完成待办事项，state 设为 false
        },
        all() {
            this.itemState = "all";
        },
        isActive() {
            this.itemState = "isActive";
        },
        isCompleted() {
            this.itemState = "isCompleted";
        },
        delOne(index) {
            this.list.splice(index, 1);
        },
    }
});
app.mount('#app');