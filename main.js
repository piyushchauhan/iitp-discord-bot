const fs = require('fs');
const Discord = require('discord.js');
const Canvas = require('canvas');
const client = new Discord.Client();
const console = require("./theme.js");
const { prefix, token } = require('./configs/config.json');

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Ready!');

    client.user.setPresence({ activity: { name: 'with discord.js' }, status: "idle" })
        .then(console.log)
        .catch(console.error);
    console.log.header("Bot is Up!");
});

// Create an event listener for new guild members
client.on('guildMemberAdd', async member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;

    // Canvas 
    const canvas = Canvas.createCanvas(900, 500);
    const ctx = canvas.getContext('2d');

    Canvas.registerFont('./UniSans.otf', { family: 'Uni Sans' })

    const num = Math.floor(Math.random() * 10) + 1;

    const background = await Canvas.loadImage(`./background.jpg`);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);


    // Slightly smaller text placed above the member's display name
    ctx.font = '50px Uni Sans';
    ctx.fillStyle = '#fff';
    ctx.shadowBlur = 4;
    const wide = ctx.measureText('Welcome').width;
    ctx.fillText('Welcome', canvas.width / 2 - wide / 2, canvas.height - 145);

    // Add an exclamation point here and below
    ctx.font = applyText(canvas, `${member.displayName}!`);
    ctx.fillStyle = '#ffffff';
    ctx.shadowBlur = 4;
    ctx.fillText(`${member.displayName}`, canvas.width / 2 - ctx.measureText(`${member.displayName}`).width / 2, canvas.height - 80);

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
    channel.send(attachment);
});

// Utility function for making the text responsive
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

client.on('message', message => {
    console.log.message("Message String", message.toString());
    console.log.message("\tSentBy", message.author.toString());

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (message.channel.type === 'dm' || message.channel.name !== 'testing') {
        message.reply('Hello there');
        return;
    }


    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
});

client.login(token)
    .catch(error => console.log.error("Error in Logging in.\nDid you provide valid bot token?"))
