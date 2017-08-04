<template>
	<div class="chat">
		<div class="chatlog">
			<span v-for="message in messages">
				<div class="chatmessage">
					<small> {{message.user.name}} </small>
					<p> {{message.message}} </p>
				</div>
			</span>
		</div>
		<div class="chatcomposer">
			<input type="text" placeholder="Input Your Message" v-model="MessageText" v-on:keyup.enter="SendMessage">
			<button class="btn btn-primary" v-on:click="SendMessage" >Send</button>
		</div>
	</div>
</template>

<script>
	export default{
		props: ['messages','user'],
		data(){
			return{
				MessageText:''
			}
		},
		methods: {
			SendMessage()
			{
				this.$emit('messagesent',{
					user: this.user,
					message: this.MessageText
					
				});
				this.MessageText="";
			}
		}
	}
</script>

<style lang="css">
.chatcomposer {
	display: flex;
}

.chatcomposer input{
	flex: 1 auto;
}

.chatcomposer button{
	border-radius:0;
}
</style>