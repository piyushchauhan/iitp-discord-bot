module.exports = {
	name: 'user-info',
	description: 'Display info about yourself.',
	execute(message, args) {
		console.log(`${message}\n${args.toString()}`);
		let userName = message.author.tag;
		message.channel.send(`Your username: ${userName}\n`);
		// TODO fetch the roll number from the username and tag
		// var role = message.guild.roles.find(role => role.name === "role-b");
		// message.member.addRole(role);
	},
};