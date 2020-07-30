const {
	getAuthToken,
	getSpreadSheetValues
} = require('../services/googleSheetsService.js');

const spreadsheetId = "1tLG5wq2MRHDmBVe1FJyTTVO8ABUWy67emr-45--dzbk";
const sheetName = "allStudents";



async function assignRole(branch,gradYear,message) {
	let {cache} = message.guild.roles;
let modRole = cache.find(role => role.name=== "moderator");

	let yearRole = cache.find(role => role.name.includes(gradYear));
	if(!yearRole){
			message.reply("Year role could not be assigned. \
			Please ping"+"<@&"+modRole.id+"> to identify you.")
	}
	else{
		await message.member.roles.add(yearRole);
		message.reply("Year role added");
	}

	let branchRole = cache.find(role => role.name.includes(branch));
	if(!branchRole){
		message.reply("Branch role could not be assigned. \
		Please ping"+"<@&"+modRole.id+"> to identify you.")
	}
	else{
		await message.member.roles.add(branchRole);
		message.reply("Branch role added");
	}
}

async function getDetails(message,username) {
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

  for(var i in author_detail){
    let discordUserNameTag = author_detail[i][0];
    if (discordUserNameTag == message.author.tag) {
      let realName = author_detail[i][1];

			let part = realName.split(" ")
			let q=0, lastName="abc";
			while(part[q]!== undefined){
				lastName = part[q];
				q++;
			}

  //    console.log(`real name ${realName}`);
      let rollNumber = author_detail[i][2];
		//	console.log(`roll no ${rollNumber}`);
			let branch = rollNumber.slice(4,6).toLowerCase();
		//	console.log(`branch ${branch}`);
			let year = rollNumber.slice(0,2);
			let gradYear = parseInt(year);
			gradYear+=4;
		//	console.log(`year ${year}`);
			 try {
  			 if (!message.guild.me.hasPermission('MANAGE_NICKNAMES')) return message.reply('I\'m missing permissions.');
  			 if (message.author.id === message.guild.ownerID) return message.reply('I can\'t change your nickname.');

					 await message.member.setNickname(`${username}-${part[0]} ${lastName}`);
	 				 message.reply("Nickname changed");
 			} catch(err) {
   console.error(err);
 }

			assignRole(branch,gradYear,message);
      // console.log(message.guild.roles);
      return;
    }
  }
  message.reply("User not found");
	return;
}

module.exports = {
  name:'verify',
  description:'Changes nickname and roles',
  execute(message,args){
    username=message.author.tag.split('#')[0];
  //  console.log(`user name is ${username}`);
		if(args[0]==="me"){
			getDetails(message,username);
		}
		else{
			message.reply("The command you are looking for is-!verify me");
		}
  }
}
