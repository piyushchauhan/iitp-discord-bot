const {
  getAuthToken,
  getSpreadSheetValues,
} = require("../services/googleSheetsService.js");

const spreadsheetId = "1tLG5wq2MRHDmBVe1FJyTTVO8ABUWy67emr-45--dzbk";
const sheetName = "allStudents";

async function scrapRolls(message) {
  console.log(message.channel.name);
  console.log(message.author);
  const messages = await message.channel.messages.fetch({ limit: 50 });
  messages.each((message) => {
    if (!message.author.bot && message.content[0] !== "!") {
      console.log(message.content);
    }
    // console.log(message.content);
  });
}

module.exports = {
  name: "scrap-rolls",
  description: "Add user to spreadsheet by taking Roll-No.",
  execute(message, args) {
    scrapRolls(message);
  },
};
