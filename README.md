# IIT Patna Discord Bot

A discord bot for IIT Patna community on any discord server.

## Essentials

- test discord server (Communication channel) - https://discord.gg/BpBPWjz

## Installing

_NOTE_ make sure that you have node js installed in your system. If not follow the these installation instructions https://discordjs.guide/preparations/

1. Fork the repository, clone the forked repo and switch to its directory - `git clone https://github.com/<your github username>/iitp-discord-bot.git && cd iitp-discord-bot`
2. Install npm packages - `npm install`
3. Put the bot token in `configs/config.json`. For security purpose the bot token is not put in the file. Contact [@piyushchauhan](https://github.com/piyushchauhan) to get the bot token.
4. Download the `google-sheets.json` key in `configs/` folder and make sure that `keyFile:'configs/google-sheets.json'` is set in `services/googleSheetsService.js`
5. Run the node server by running `node .`

Now the bot is up and running
     
## How to test the bot?

- Go to the test server.
- Make sure the bot is online and the node server is running.
- Send the message(`!ping`) in the `#testing` channel of the [test discord server](https://discord.gg/BpBPWjz). the bot will pick the message and accordingly do actions based on the code.

## How to contribute?
1. Join the discord server mentioned above.
2. Follow the installation instructions above.
3. If you face any diffuculty feel free to send a message on general channel of the discord server.
4. After installation, and successfull testing, you can look into the issues that interest you and add a comment on that issue saying that you want to work on it.
5. If you are confirmed to work on the issue, you can for start working on it. Finally after the issue/feature requirements are complete then you can create a PR targeting `dev` branc. Mentioning the changes you made and the issue you are solving in the PR.
6. Your PR will be reviewed. If the changes made are appropriate then it will be merged in the `dev` branch.

## Tutorials

- [Git and Github Basics](https://youtu.be/xuB1Id2Wxak)
- [Discord JS Basics](https://www.youtube.com/watch?v=j_sD9udZnCk)
- [Commands](https://www.youtube.com/watch?v=nTGtiCC3iQM)
- [Command Handler](https://www.youtube.com/watch?v=AUOb9_aAk7U)
