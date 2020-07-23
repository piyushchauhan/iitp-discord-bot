# IIT Patna Discord Bot

A discord bot for IIT Patna community on any discord server.

## Essentials

- test server - https://discord.gg/BpBPWjz

## Installing

_NOTE_ make sure that you have node js installed in your system. If not follow the these installation instructions https://discordjs.guide/preparations/

1. Clone the repository and switch to its directory - `git clone https://github.com/piyushchauhan/iitp-discord-bot.git && cd iitp-discord-bot`
2. Install npm packages - `npm install`
3. Put the bot token in `configs/config.json`. For security purpose the bot token is not put in the file. Contact @piyushchauhan to get the bot token.
4. Download the `google-sheets.json` key in `configs/` folder and make sure that `keyFile:'configs/google-sheets.json'` is set in `services/googleSheetsService.js`
5. Run the node server by running `node .`

Now the bot is up and running
     
## How to test the bot?

- Go to the test server.
- Make sure the bot is online and the node server is running.
- Send the message(`!ping`) in the `#testing` channel of the [test discord server](https://discord.gg/BpBPWjz). the bot will pick the message and accordingly do actions based on the code.



## Tutorials

- [Git and Github Basics](https://youtu.be/xuB1Id2Wxak)
- [Discord JS Basics](https://www.youtube.com/watch?v=j_sD9udZnCk)
- [Commands](https://www.youtube.com/watch?v=nTGtiCC3iQM)
- [Command Handler](https://www.youtube.com/watch?v=AUOb9_aAk7U)
