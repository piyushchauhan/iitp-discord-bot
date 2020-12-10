const { MessageEmbed } = require('discord.js')

module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message, args) {
		let messageEmbed = new MessageEmbed()
		.setColor('#FFD300')
		.setTitle('Pong');
		message.channel.send({embed: messageEmbed});
	},
};