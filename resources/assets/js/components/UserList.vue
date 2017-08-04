<template>
	<div class="userlist">
		<div class="panel panel-default">
	        <div class="panel-heading">List User</div>
		        <div class="panel-body">
					<span v-for="userlist in userschat"> {{ userlist.name }} </span> 
				</div>
			<div class="panel-footer">	
				<button class="startchat" v-on:click="createchat">Chat</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props:['userschat'],
		
        methods: {
            createchat() {
                //
            }
        },
        // created(){
        // 	Echo.join('chatroom')
        //     	.here((users) => {
        //             this.userschat = users;
        //         })
        //         .joining((user) => {
        //             this.userschat.push(user);
        //         })
        //         .leaving((user) => {
        //             this.userschat= this.userschat.filter(p => p!= user);
        //         });
        // }
	}

</script>

<style lang="css">

</style>