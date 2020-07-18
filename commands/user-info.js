module.exports = {
	name: 'user-info',
	description: 'Display info about yourself.',
	execute(message) {
		message.channel.send(`Your username: ${message.author.username}:${message.author.tag}\n
		Your ID: ${message.author.id}`);
		// TODO fetch the roll number from the username and tag
	},
};