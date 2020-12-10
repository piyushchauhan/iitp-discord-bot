const Canvas = require('canvas');
const Discord = require('discord.js');

// Pass the entire Canvas object because you'll need to access its width, as well its context
const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');

	// Declare a base size of the font
	let fontSize = 70;

	do {
		// Assign the font to the context and decrement it so it can be measured again
		ctx.font = `${fontSize -= 10}px Uni Sans`;
		// Compare pixel width of the text to the canvas minus the approximate avatar size
	} while (ctx.measureText(text).width > canvas.width - 300);

	// Return the result to use in the actual canvas
	return ctx.font;
};

module.exports = {
    name: 'welcome-test',
    description: 'Welcome Greeting',
    async execute (message, args) {
        const member = message.guild.member(message.author);
        const canvas = Canvas.createCanvas(900, 500);
        const ctx = canvas.getContext('2d');

        Canvas.registerFont('./UniSans.otf', {family: 'Uni Sans'})

        const num = Math.floor(Math.random() * 10) + 1;

        const background = await Canvas.loadImage(`./background.jpg`);
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);


        // Slightly smaller text placed above the member's display name
        ctx.font = '50px Uni Sans';
        ctx.fillStyle = '#fff';
        ctx.shadowBlur = 4;
        const wide = ctx.measureText('Welcome').width;
        ctx.fillText('Welcome', canvas.width / 2 - wide / 2, canvas.height - 150);

        // Add an exclamation point here and below
        ctx.font = applyText(canvas, `${member.displayName}!`);
        ctx.fillStyle = '#ffffff';
        ctx.shadowBlur = 4;
        ctx.fillText(`${member.displayName}`, canvas.width / 2 - ctx.measureText(`${member.displayName}`).width / 2, canvas.height - 85);

        ctx.beginPath();
        ctx.arc(canvas.width / 2, 150, 100, 0, Math.PI * 2, true);
        ctx.lineWidth = 15;
        ctx.strokeStyle = '#ffffff';
        ctx.stroke();
        ctx.closePath();
        ctx.clip();

        ctx.arc()

        const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
        ctx.drawImage(avatar, (0.5 + (canvas.width / 2 - 100)) | 0, (0.5 + 50) | 0, 200, 200);

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
        message.channel.send(attachment);
    },
};