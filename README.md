# IIT Patna Discord Bot

A discord bot for IIT Patna community on any discord server.

## Essentials

- test server - https://discord.gg/J4Gb3XH

## Installing

_NOTE_ make sure that you have node js installed in your system. If not follow the these installation instructions https://discordjs.guide/preparations/

1. Clone the repository and switch to its directory - `git clone https://github.com/piyushchauhan/iitp-discord-bot.git && cd iitp-discord-bot`
2. Install npm packages - `npm install`
3. Put the bot token in `config.json`
4. Run the node server - `node .`
   Now the bot is up and running
 
## Setting up google sheets functionality

1.Update spreadsheet ID and Sheet name in user-info.js file   
2.Make a new project at https://console.developers.google.com   
3.Enable the Google Sheets Api for the corresponding project    
4.Make a new service account in the same project    
5.Generate a new key for that service account and save it in your computer     
6.Set the environment variable GOOGLE_APPLICATION_CREDENTIALS=[PATH] (Replace PATH with path to the downloaded key file)     
&nbsp;&nbsp;&nbsp;For Linux/Mac: ```export GOOGLE_APPLICATION_CREDENTIALS="[PATH]"```    
&nbsp;&nbsp;&nbsp;For Windows(PowerShell): ```$env:GOOGLE_APPLICATION_CREDENTIALS="[PATH]"```    
&nbsp;&nbsp;&nbsp;For Windows(CMD): ```set GOOGLE_APPLICATION_CREDENTIALS=[PATH]```     
7.Share the Google sheet to the email address mentioned in the service account homepage without notifying it(It does not have a mailbox)     
8.Run `node .` and type command `!user-info` in testing server to get your roll number and name according to the linked spreadsheet in the chat      
       
ALWAYS set the environment variable repeatedly before running `Node .`        
      
## How to test the bot?

- Go to the test server.
- Make sure the bot is online and the node server is running.
- Send the message on the server. the bot will pick the message and accordingly do actions based on the code.

## **Task 1**

_Command sytax:_ `!verify me`
Steps

1. [ ] fetch the discord username of the person who sent the message.
2. [ ] query the discord username from google spreadsheet and get the roll number and original name of the person
3. [ ] assign the roles according to the roll number
4. [ ] change the nickname to `{discordUserName} - {originalName}`

## **Task 2**

Perform task 1 when a new user joins the discord server.

## Tutorials

- [Discord JS Basics](https://www.youtube.com/watch?v=j_sD9udZnCk)
- [Commands](https://www.youtube.com/watch?v=nTGtiCC3iQM)
- [Command Handler](https://www.youtube.com/watch?v=AUOb9_aAk7U)
