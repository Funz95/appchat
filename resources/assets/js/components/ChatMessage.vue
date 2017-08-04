<template>
	<div class="chatmessage">
		<small> {{message.user.name}} </small>
		<p> {{message.message}} </p>
	</div>
</template>

<script>
	export default{
		props: ['message']
	}
</script>

<style lang="css">
</style>