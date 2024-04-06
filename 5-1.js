const app = Vue.createApp({
    data() {
        return {
            messages: [ // 存放所有消息的数组，以下是两个示例消息
                { by: 'girl', text: '【你好吗？】', time: '上午 9:00:00 AM' },
                { by: 'boy', text: '【我很好，谢谢！我们去看电影吧。】', time: '上午 9:01:00 AM' }
            ]
        };
    }
});

// 女生组件定义
app.component('girl', {
    props: ['messages'],
    data() {
        return {
            inputMessage: ''
        }
    },
    template: `
                <div class="girl">
                    <img src="女生.png" alt="Girl" />
                    <h4>我是女生</h4>
                    <input type="text" v-model="inputMessage">
                    <button @click="sendMessage">发送消息</button>
                </div>
                 <div v-for="msg in messages" class="dialog" v-bind:style="{ color: msg.by === 'girl' ? 'green' : 'black' }">
                {{ msg.time }} {{ msg.text }}
            </div>
                `,
    methods: {
        sendMessage() {
            let currentTime = new Date();
            const hours = currentTime.getHours();
            const timeOfDay = hours < 12 ? '上午' : '下午';
            const time = `${timeOfDay} ${currentTime.toLocaleTimeString('en-US', { hour12: true })}`;

            this.messages.push({
                by: 'girl',
                text: `【${this.inputMessage}】`,
                time: time
            });

            this.inputMessage = '';
        }
    }
});

// 男生组件定义
app.component('boy', {
    props: ['messages'],
    data() {
        return {
            inputMessage: ''
        }
    },
    template: `
                <div class="boy">
                    <img src="男生.png" alt="Boy" />
                    <h4>我是男生</h4>
                    <input type="text" v-model="inputMessage">
                    <button @click="sendMessage">发送消息</button>
                </div>
                 <div v-for="msg in messages" class="dialog" v-bind:style="{ color: msg.by === 'boy' ? 'green' : 'black' }">
                {{ msg.time }} {{ msg.text }}
            </div>
                `,
    methods: {
        sendMessage() {
            let currentTime = new Date();
            const hours = currentTime.getHours();
            const timeOfDay = hours < 12 ? '上午' : '下午';
            const time = `${timeOfDay} ${currentTime.toLocaleTimeString('en-US', { hour12: true })}`;

            this.messages.push({
                by: 'boy',
                text: `【${this.inputMessage}】`,
                time: time
            });

            this.inputMessage = '';
        }
    }
});

// 挂载Vue应用
app.mount('#app');