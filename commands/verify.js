const {
	getAuthToken,
	getSpreadSheetValues
} = require('../services/googleSheetsService.js');

const spreadsheetId = "1tLG5wq2MRHDmBVe1FJyTTVO8ABUWy67emr-45--dzbk";
const sheetName = "allStudents";

const g21_role = "737980519014203412"
const g22_role = "737981925523718155"
const g23_role = "737982002862489641"
const g24_role = "737982086723534849"

const cs_role = "735080031461572648"
const ee_role = "735081111977328660"
const me_role = "737978500170121256"
const cb_role = "737979875989913651"
const ce_role = "737980018545786983"
const mm_role = "737980217871695924"

async function assignRole(branch,year,message) {
	if(year === "17"){
		await message.member.roles.add(g21_role);
		message.reply(`Year role added`)
	}
	else if(year === "18"){
		await message.member.roles.add(g22_role);
		message.reply(`Year role added`)
	}
	else if(year === "19"){
		await message.member.roles.add(g23_role);
		message.reply(`Year role added`)
	}
	else if(year === "20"){
		message.member.roles.add(g24_role);
		message.reply(`Year role added`)
	}
	else{
		message.channel.send("Year role could not be assigned. \
		Please ping @moderator to identify you.")
	}
	if(branch === "cs"){
		message.member.roles.add(cs_role);
		message.reply(`Branch role added`)

	}
	else if(branch === "ee"){
		message.member.roles.add(ee_role);
		message.reply(`Branch role added`)
	}
	else if(branch === "me"){
		await message.member.roles.add(me_role);
		message.reply(`Branch role added`)

	}
	else if(branch === "cb"){
		message.member.roles.add(cb_role);
		message.reply(`Branch role added`)

	}
	else if(branch === "ce"){
		message.member.roles.add(ce_role);
		message.reply(`Branch role added`)

	}
	else if(branch === "mm"){
		message.member.roles.add(mm_role);
		message.reply(`Branch role added`)

	}
	else{
		message.channel.send("Branch role could not be assigned. \
		Please ping @moderator to identify you.")
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

  //    console.log(`real name ${realName}`);
      let rollNumber = author_detail[i][2];
		//	console.log(`roll no ${rollNumber}`);
			let branch = rollNumber.slice(4,6).toLowerCase();
		//	console.log(`branch ${branch}`);
			let year = rollNumber.slice(0,2);
		//	console.log(`year ${year}`);
			 try {
  			 if (!message.guild.me.hasPermission('MANAGE_NICKNAMES')) return message.reply('I\'m missing permissions.');
  			 if (message.author.id === message.guild.ownerID) return message.reply('I can\'t change your nickname.');

  			await message.member.setNickname(`${username}-${part[0]}`);
				message.reply("Nickname changed");
 			} catch(err) {
   console.error(err);
 }

			assignRole(branch,year,message);
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
