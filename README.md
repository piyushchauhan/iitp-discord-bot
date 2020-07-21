# IIT Patna Discord Bot

A discord bot for IIT Patna community on any discord server.

## Essentials

- test server - https://discord.gg/BpBPWjz

## Installing

_NOTE_ make sure that you have node js installed in your system. If not follow the these installation instructions https://discordjs.guide/preparations/

1. Clone the repository and switch to its directory - `git clone https://github.com/piyushchauhan/iitp-discord-bot.git && cd iitp-discord-bot`
2. Install npm packages - `npm install`
3. Put the bot token in `config.json`. For security purpose the bot token is not put in the file. Contact @piyushchauhan to get the bot token.
4. Run the node server - `node .`

Now the bot is up and running

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
       
ALWAYS set the environment variable repeatedly before running `node .`        
      
## How to test the bot?

- Go to the test server.
- Make sure the bot is online and the node server is running.
- Send the message(`!ping`) in the `#testing` channel of the [test discord server](https://discord.gg/BpBPWjz). the bot will pick the message and accordingly do actions based on the code.



## Tutorials

- [Git and Github Basics](https://youtu.be/xuB1Id2Wxak)
- [Discord JS Basics](https://www.youtube.com/watch?v=j_sD9udZnCk)
- [Commands](https://www.youtube.com/watch?v=nTGtiCC3iQM)
- [Command Handler](https://www.youtube.com/watch?v=AUOb9_aAk7U)
