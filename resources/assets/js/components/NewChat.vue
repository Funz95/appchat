<template>
	<div class="newchat">
		<chat-message v-for="message in messages" v-bind:message="message" v-bind:key="message.text"></chat-message>
		<chat-composer v-for="chat in chats" v-bind:chat="chat" v.bind:key="chat.id"></chat-composer>
		<chat-composer v-on:messagesent="addMessage" :messages="messages" :user="{{ Auth::user() }}"></chat-composer>
	</div>
</template>

<script>
	export default{
		props:['messages']
	}
</script>

<style lang="css">

</style>