<html>
	<head>
		<meta charset="utf-8">
		<meta name="csrf-token" content="{{csrf_token()}}">
		<title>Chatroom</title>
		<link href="css/app.css" rel="stylesheet">
	</head>
	<body>
	<div id=app>
		<h1>Chat room </h1>
		<user-list :userschat="userschat"></user-list>
		<!-- <new-chat ></new-chat>-->
		<chat-composer v-on:messagesent="addMessage" :messages="messages" :user="{{ Auth::user() }}"></chat-composer>
	</div>
		<script src="js/app.js" charset="utf-8"></script>
	</body>
</html>
