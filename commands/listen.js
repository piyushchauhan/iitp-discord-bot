const Discord = require("discord.js");
const { GoogleSpreadsheet } = require("google-spreadsheet");
const { google } = require("googleapis");
const sheets = google.sheets("v4");
const {
  getAuthToken,
  getSpreadSheetValues,
} = require("../services/googleSheetsService.js");
const spreadsheetId = "1tLG5wq2MRHDmBVe1FJyTTVO8ABUWy67emr-45--dzbk";
const sheetName = "allStudents";

async function Listen(message) {
  var author_detail = null;
  var roll;

  try {
    const auth = await getAuthToken();
    const details = await getSpreadSheetValues({
      spreadsheetId,
      sheetName,
      auth,
    });
    author_detail = details.data.values;
  } catch (error) {
    console.log(error);
  }
  message.channel.send("i am listening");
  let filter = (m) => {
    var res = m.content.split(" ");
    let i = 0;
    while (res[i] !== undefined) {
      // Check for roll number with a format in the message
      if (/^\d{4}[a-z]{2,3}\d{2}$/i.test(res[i])) {
        roll = res[i];
        return true && !m.author.bot;
      }
      i++;
    }
    return false;
  };
  let collector = new Discord.MessageCollector(message.channel, filter);
  collector.on("collect", async (message, col) => {
    console.log(`Collected roll ${roll}`);
    roll = roll.toUpperCase();
    let flag = 0;
    for (var i in author_detail) {
      if (roll === author_detail[i][2]) {
        console.log(author_detail[i][1]);
        console.log(author_detail[i][0]);
        author_detail[i][0] = message.author.username;
        flag = 1;
        message.channel.send(
          `Discord username added to spreadsheet for ${author_detail[i][2]}`
        );
        break;
      }
    }
    if (flag === 1) {
      const auth = await getAuthToken();
      try {
        const res = await sheets.spreadsheets.values.update({
          spreadsheetId,
          range: sheetName,
          valueInputOption: "USER_ENTERED",
          resource: { values: author_detail },
          auth,
        });
      } catch (error) {
        // Permission error may occur
        console.log(error);
      }
    }
    if (flag !== 1) {
      message.channel.send(
        `Roll number ${roll} not found in spreadsheet ${message.author}`
      );
    }
  });
}
module.exports = {
  name: "listen",
  description: "Add user to spreadsheet by taking Roll-No.",
  execute(message, args) {
    Listen(message);
  },
};
