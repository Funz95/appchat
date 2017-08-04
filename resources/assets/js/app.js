
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', require('./components/Example.vue'));
// Vue.component('chat-message', require('./components/ChatMessage.vue'));
// Vue.component('chat-log', require('./components/ChatLog.vue'));
Vue.component('chat-composer', require('./components/ChatComposer.vue'));
Vue.component('user-list', require('./components/UserList.vue'));
// Vue.component('new-chat',require('./components/NewChat.vue'));


const app = new Vue({
    el: '#app',
    data:{
    	messages:[],
        userschat:[]
    },
    methods:{
    	addMessage(message){
    		this.messages.push(message);
    		
    		axios.post('/messages',message).then(response => {
                //
    		});
   		}
	},
    created(){
            axios.get('/messages').then(response => {
                this.messages = response.data;
            });

            Echo.join('chatroom')
            .here((users) => {
                    this.userschat = users;
                })
                .joining((user) => {
                    this.userschat.push(user);
                })
                .leaving((user) => {
                    this.userschat= this.userschat.filter(p => p!= user);
                })
            	.listen('MessageSent',(e)=>{
            		//event hndler
            		this.messages.push({
            			user : e.user,
            		 	message : e.message.message
            		 });
            	});	
    }
});
