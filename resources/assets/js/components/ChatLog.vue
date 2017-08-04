<template>
	<div class="chatlog">
		<chat-message v-for="message in messages" v-bind:message="message" v-bind:key="message.text"></chat-message>
	</div>
</template>

<script>
	export default{
		props:['messages']
	}
</script>

<style lang="css">
.chatlog .chatmessage:nth-child(even){
	background-color: #ccc;
}
</style>