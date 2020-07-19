# IIT Patna Discord Bot

A discord bot for IIT Patna community on any discord server.

## Essentials

- test server - https://discord.gg/J4Gb3XH

## Installing

_NOTE_ make sure that you have node js installed in your system. If not follow the these installation instructions https://discordjs.guide/preparations/

1. Clone the repository and switch to its directory - `git clone https://github.com/piyushchauhan/iitp-discord-bot.git && cd iitp-discord-bot`
2. Install npm packages - `npm install`
3. Put the bot token in `config.json`. For security purpose the bot token is not put in the file. Contact @piyushchauhan to get the bot token.
4. Run the node server - `node .`

Now the bot is up and running

## How to test the bot?

- Go to the test server.
- Make sure the bot is online and the node server is running.
- Send the message(`!ping`) in the `#testing` channel of the [test discord server](https://discord.gg/J4Gb3XH). the bot will pick the message and accordingly do actions based on the code.

## **Task 1**

_Command sytax:_ `!verify me`
Steps

1. [ ] fetch the discord username of the person who sent the message.
2. [ ] query the discord username from google spreadsheet and get the roll number and real name of the person
3. [ ] assign the roles according to the roll number
4. [ ] change the nickname to `{discordUserName} - {realName}`

## **Task 2**

Perform task 1 when a new user joins the discord server.

## Tutorials

- [Git and Github Basics](https://youtu.be/xuB1Id2Wxak)
- [Discord JS Basics](https://www.youtube.com/watch?v=j_sD9udZnCk)
- [Commands](https://www.youtube.com/watch?v=nTGtiCC3iQM)
- [Command Handler](https://www.youtube.com/watch?v=AUOb9_aAk7U)
