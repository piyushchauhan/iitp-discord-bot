const {
    getAuthToken,
    getSpreadSheetValues
  } = require('../services/googleSheetsService.js');

const spreadsheetId = "1tLG5wq2MRHDmBVe1FJyTTVO8ABUWy67emr-45--dzbk";
const sheetName = "allStudents";

async function getDetails(message){
	var author_detail = null;
	try{
		const auth = await getAuthToken();
		const details = await getSpreadSheetValues({
			spreadsheetId,
			sheetName,
			auth
		});
		author_detail = details.data.values;
	}
	catch (error) {
		console.log(error);
	};
	console.log(`Finding match for ${message.author.tag}`);
	for(var i in author_detail){
		if (author_detail[i][0] == message.author.tag){
			message.channel.send(`Your Name is ${author_detail[i][1]}`);
			message.channel.send(`Your Roll No is ${author_detail[i][2]}`);
			return;
		}
	};
	message.channel.send("no rollno found in database");
	return;
}

module.exports = {
	name: 'user-info',
	description: 'Display info about yourself.',
	execute(message, args) {
		console.log(`${message}\n${args.toString()}`);
		let userName = message.author.tag;
		message.channel.send(`Your username: ${userName}\n`);
		// TODO fetch the roll number from the username and tag
		getDetails(message);
		// var role = message.guild.roles.find(role => role.name === "role-b");
		// message.member.addRole(role);
	},
};