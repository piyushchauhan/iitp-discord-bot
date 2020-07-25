const {
	getAuthToken,
	getSpreadSheetValues
} = require('../services/googleSheetsService.js');

// Id of the spreadsheet file (it is in the url of the google sheet)
const spreadsheetId = "1tLG5wq2MRHDmBVe1FJyTTVO8ABUWy67emr-45--dzbk";
const sheetName = "allStudents";


function convertCaseName(realname){
	let name = realname.split(' ');
	let newName = [];

	function convert(item){
	  item = item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
	  newName.push(item);
	}

	name.forEach(convert);
	return newName.join(' ')
}


async function getDetails(message) {
	var author_detail = null;
	try {
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
	for (var i in author_detail) {
		
		let discordUserNameTag = author_detail[i][0];
		if (discordUserNameTag == message.author.tag) {
			let realName = author_detail[i][1];
			realName = convertCaseName(realName);
			let rollNumber = author_detail[i][2];
			var house = author_detail[i][4];

			if (house === 'A') {
				house = 'Auriga';
			} else if (house === 'C') {
				house = 'Cassiopeia';
			} else if (house === 'P') {
				house = 'Pegasus';
			} else if (house === 'D') {
				house = 'Darco';
			}

			message.channel.send(`Your Name is ${realName}\nYour Roll No is ${rollNumber}\nYour house is ${house}`);
			// TODO Do not print the roll number
			// TODO Assign a role based on the roll number like give `role-a` if rollNumber starts with 1901
			return;
		}
	};
	message.reply("Sorry we couldn't find you in our database. \
	Please ping @moderator to identify you.");
	return;
}

module.exports = {
	name: 'user-info',
	description: 'Display info about yourself.',
	execute(message, args) {
		console.log(`${message}\n${args.toString()}`);
		let userName = message.author.tag;
		// TODO Check for mentions in this command
		// If someone runs !user-info @dhushyanth in the message 
		// then identify the mentioned user and fetch the 
		// roll number of that user
		message.channel.send(`Your username: ${userName}\n`);
		getDetails(message);
		// var role = message.guild.roles.find(role => role.name === "role-b");
		// message.member.addRole(role);
	},
};
