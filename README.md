# iitp-discord-bot
A discrod bot for IIT Patna community on any discord server.

## Essentials
- test server - https://discord.gg/J4Gb3XH

## Installing
1. `git clone https://github.com/piyushchauhan/iitp-discord-bot.git && cd iitp-discord-bot`
2. `npm install`
3. put the bot token in `config.json`
4. `node .`

## **Task 1**

*Command sytax:* `!verify me` 
Steps

1. [ ] fetch the discord username of the person who sent the message.
2. [ ] query the discord username from google spreadsheet and get the roll number and original name of the person
3. [ ] assign the roles according to the roll number
4. [ ] change the nickname to `{discordUserName} - {originalName}`

## **Task 2**
Perform task 1 when a new user joins the discord server.
