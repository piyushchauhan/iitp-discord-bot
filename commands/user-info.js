const {
    getAuthToken,
    getSpreadSheetValues
  } = require('./googleSheetsService.js');

const spreadsheetId = "<put spreadsheet id here>";
const sheetName = "<put sheet name here>";

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
	for(var i in author_detail){
		if (author_detail[i][0] == message.author.username){
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
<<<<<<< HEAD
	execute(message, args) {
		console.log(`${message}\n${args.toString()}`);
		let userName = message.author.tag;
		message.channel.send(`Your username: ${userName}\n`);
		// TODO fetch the roll number from the username and tag
		// var role = message.guild.roles.find(role => role.name === "role-b");
		// message.member.addRole(role);
=======
	execute(message) {
		message.channel.send(`Your username: ${message.author.username}:${message.author.tag}\n
		Your ID: ${message.author.id}`);
		getDetails(message);
>>>>>>> 4282f8f2fa613226e99c179f32d7b381b500cf12
	},
};