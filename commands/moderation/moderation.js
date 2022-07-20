module.exports = [({
    name:"ban",
 	category: "Moderation",
 	usage: "ban <@user> or <id>",
 	code: `$deletecommand
$color[RANDOM] 
$author[🛠️ Banned successfully]
$addField[About:;
Reason:
> $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;A reason wasn't provided.];false;$messageSlice[1]]
Date:
> $day $month $year
]
$addField[User information;
$userTag[$findUser[$message[1]]] - $findUser[$message[1]]]
$addField[Moderator;
$userTag - $authorID]
$thumbnail[$userAvatar[$findUser[$message[1]]]]
$ban[$findUser[$message[1]];$userTag: $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;A reason wasn't provided.];false;$messageSlice[1]];7]
$if[$memberExists[$findUser[$message[1]]]==true]
$onlyIf[$rolePosition[$highestRole[$findUser[$message[1]]]]>$rolePosition[$highestRole];⛔ - To use this you need to have a higher rank than the mentioned user.]
$onlyIf[$findUser[$message[1]]!=$authorID;**⛔ - You can't ban yourself (Or else, I couldn't find that user)**]
$onlyIf[$findUser[$message[1]]!=$clientID;**⛔ - I can't ban myself, that's illegal**]
$onlyIf[$findUser[$message[1]]!=$ownerID;**⛔ - I can't ban the owner of the server**]
$elseIf[$memberExists[$findUser[$message[1]]]==false]
$onlyIf[$findUser[$message[1]]!=$authorID;**⛔ - You can't ban yourself (Or else, I couldn't find that user)**]
$endelseIf
$endif
$onlyIf[$isBanned[$findUser[$message[1]]]==false;**⛔ - This user has already been banned on this server**]
$onlyIf[$message!=;**⛔ - Please specify the user you want to ban. Correct usage:** \`$getServerVar[prefix]ban <@User> [Reason\\]\`]
$onlyPerms[ban;**⛔ - To use this you require the \`BAN_MEMBERS\` permission**]
$onlyBotPerms[ban;**⛔ - I don't have enough perms to execute this command. Permissions missing:** \`BAN_MEMBERS\`]`
}), ({
    name: "unban",
 	category: "Moderation",
 	description: "Use this command to unban a user",
 	usage: "unban <id>",
 	code: `$unban[$message[1];By $userTag[$authorID] Reason: $sliceMessage[1]]
$username[$message[1]] **has been unbanned ✅**
$onlyBotPerms[ban;**⛔ I don't have ban perms]
$argsCheck[>1;**⛔ Please Provide User ID To Unban**]
$onlyPerms[ban;**⛔ You need ban permission**]
$suppressErrors[**⛔ I can't find that user**]`
}), ({
    name: "kick",
    category: "Moderation",
 	code: `
$kick[$mentioned[1]]
$description[$customEmoji[greencheck]**$username[$mentioned[1]]** has been Kicked
**📖Reason-** $nomentionMessage]
$color[RANDOM]
$sendDM[$mentioned[1];You were kicked from the server: $serverName[$guildID]] 
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1]]];That user is higher or same as me on role position]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];That user is higher than you on role position.]
$onlyIf[$mentioned[1]!=$authorID;You can't Kick yourself :3 ]
$onlyIf[$mentioned[1]!=;You must mention someone.]
$onlyPerms[kick;{title:Missing Permissions}{color:RANDOM}{description:You don't have \`kick\` permissions to use this command}]
$suppressErrors[x Something Error | Try Again Later]`
 }), ({
  	name: "setmute",
    category: "Moderation",
  	aliases: ["setmuterole"],
  	code: `
$color[GREEN]
$title[Done]
$description[Set <@&$findRole[$message[1]]> as a mute role]
$setServerVar[muted;$findRole[$message[1]]]
$onlyIf[$roleExists[$findRole[$message[1]]]==true;{description:This role doesn't exist}{color:RED}]
$onlyIf[$message[1]!=;{title:Error:Too few arguments given}
{field:**Usage**:\`setmute <role | roleID>\`}{color:RED}]
$onlyPerms[admin;Missing permission:\`admin\`]
$onlyBotPerms[admin;Missing permission:\`admin\`]
$suppressErrors` 
}), ({
    name: "mute",
    category: "Moderation",
  	code: `
$giveRoles[$findMember[$message[1]];$getServerVar[muted]]
$title[Done]
$description[$username[$findMember[$message[1]]] has been muted]
$addField[Reason;$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;$customEmoji[fail] No reason given];false;$messageSlice[1]]]
$color[GREEN]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findMember[$message[1];no]]];This user has a role equal to or higher than me]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findMember[$message[1];no]]];{description:This user has a role equal to or higher than you}{color:RED}]
$onlyIf[$findMember[$message[1];no]!=$authorID;{description:You can't mute yourself}{color:RED}]
$onlyIf[$message[1]!=;{title:Error}{field:**Usage**:\`mute <member | userID>\`}{color:RED}]
$onlyIf[$getServerVar[muted]!=;{description:Mute role role has not been configured, type \`$getServerVar[prefix]setmute\` to set it}{color:RED}]
$onlyPerms[mutemembers;Missing permission:\`mutemembers\`]
$onlyBotPerms[mutemembers;Missing permission:\`mutemembers\`]
$suppressErrors`
}), ({
    name: "tempmute",
    category: "Moderation",
  	code: `
$channelSendMessage[$channelID;{description:$username[$findMember[$message[1]]] was unmuted}
{field:Reason:Tempmute finished}{color:GREEN}]
$takeRoles[$findMember[$message[1]];$getServerVar[muted]]
$wait[$message[2]]
$giveRoles[$findMember[$message[1]];$getServerVar[muted]]
$channelSendMessage[$channelID;{description:$username[$findMember[$message[1]]] has been muted for \`$message[2]\`}
{field:Reason:$replaceText[$replaceText[$checkCondition[$messageSlice[2]==];true;$customEmoji[fail] No reason given];false;$messageSlice[2]]}{color:GREEN}]
 
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findMember[$message[1];no]]];This user has a role equal to or higher than me]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findMember[$message[1];no]]];{description:This user has a role equal to or higher than you}{color:RED}]
 
$onlyIf[$checkContains[$message[2];h;m;s]==true;{description:Put a valid time (h,m,s)}{color:RED}]
$onlyIf[$findMember[$message[1]]!=$authorID;]
$onlyIf[$message[2]!=;{title:Error}{field:**Usage**:\`tempmute <member | userID> <time>\`}{color:RED}]
$onlyIf[$getServerVar[muted]!=;{description:Mute role role has not been configured, type \`$getServerVar[prefix]setmute\` to set it}{color:RED}]
$onlyPerms[mutemembers;Missing permission:\`mutemembers\`]
$onlyBotPerms[mutemembers;Missing permission:\`mutemembers\`]
$suppressErrors`
}), ({
    name: "unmute",
    category: "Moderation",
  	code: `
$takeRoles[$findMember[$message[1]];$getServerVar[muted]]
$title[Done]
$description[$username[$findMember[$message[1]]] has been unmuted]
$color[GREEN]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findMember[$message[1];no]]];This user has a role equal to or higher than me]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findMember[$message[1];no]]];{description:This user has a role equal to or higher than you}{color:RED}]
$onlyIf[$findMember[$message[1];no]!=$authorID;{description:You can't unmute yourself}{color:RED}]
$onlyIf[$message[1]!=;{title:Error}{field:**Usage**:\`unmute <member | userID>\`}{color:RED}]
$onlyIf[$getServerVar[muted]!=;{description:Mute role role has not been configured, type \`$getServerVar[prefix]setmute\` to set it}{color:RED}]
$onlyPerms[mutemembers;Missing permission:\`mutemembers\`]
$onlyBotPerms[mutemembers;Missing permission:\`mutemembers\`]
$suppressErrors`
}), ({
    name: "giverole",
    category: "Moderation",
	code: `$color[RANDOM]
$giveRoles[$mentioned[1];$mentionedRoles[1]]
$title[Role given to $username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]]
$description[**$username** has given <@&$mentionedRoles[1]> **role to** $username[$mentioned[1;yes]]]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];**⛔ That user is higher than me on role position**]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];**⛔ That user is higher/equal than you on role position**]
$onlyIf[$mentionedRoles[1]!=;⛔ **Mention a role**]
$onlyIf[$mentioned[1]!=;**⛔ You must mention someone**]
$onlyBotPerms[manageroles;⛔ **I don't have** \`MANAGAGE_ROLES\` perms]
$onlyPerms[manageroles;⛔ **You don't have** \`MANAGAGE_ROLES\` perms]`
}), ({
    name: "temprole",
    category: "Moderation",
  	code: `
$channelSendMessage[$channelID;<@$mentioned[1]>, I removed the $roleName[$findRole[$message[2]]] role, time's up]
$takeRoles[$mentioned[1];$findRole[$message[2]]]
$wait[$replaceText[$replaceText[$checkCondition[$message[3]==];true;24d];false;$message[3]]]
$channelSendMessage[$channelID;{description::white_check_mark: | $username[$mentioned[1]]#$discriminator[$mentioned[1]] has been given the $roleName[$findRole[$message[2]]] role. For \`$replaceText[$replaceText[$checkCondition[$message[3]==];true;undefined time];false;$message[3]]\`}{color:RANDOM}]
$giveRoles[$mentioned[1];$findRole[$message[2]]]
$suppressErrors[{title:An error occured}{description:Looks like I can't find the role}{color:RED}]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1]]];That user is higher than me on role position]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];That user is higher than you on role position.]
$argsCheck[>3;Incorrect arguments. Example: temprole @user @role]
$onlyPerms[manageroles;{title:Missing Permissions}{color:RANDOM}{description:You don't have \`MANAGE_ROLES\` permissions to use this command}]`
}), ({
    name: "removerole",
    category: "Moderation",
	code: `$color[RANDOM]
$takeRoles[$mentioned[1];$mentionedRoles[1]]
$title[Removed role to $username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]]
$description[**$username** has taken <@&$mentionedRoles[1]> **role to** $username[$mentioned[1;yes]]]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];**⛔ That user is higher than me on role position**]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];**⛔ That user is higher/equal than you on role position**]
$onlyIf[$mentionedRoles[1]!=;⛔ **Mention a role**]
$onlyIf[$mentioned[1]!=;**⛔ You must mention someone**]
$onlyBotPerms[manageroles;⛔ **I don't have** \`MANAGAGE_ROLES\` perms]
$onlyPerms[manageroles;⛔ **You don't have** \`MANAGAGE_ROLES\` perms]`
}), ({
   name:"purge",
	aliases: 'clear',
	category: "Moderation",
	usage: "purge <number>",
	code: `$author[Purged messages!]
$title[$usertag]
$description[<@$authorid>, I successfully purged $replacetext[$replacetext[$checkcondition[$splittext[1]==$message];true;all($message/$message)];false;$splittext[1]/$message] messages!]
$footer[Thanks for using me!;$authoravatar]
$thumbnail[$useravatar[$clientid]]
$color[RANDOM]
$textsplit[$clear[$message;everyone;$channelid;yes]; ]
$onlybotperms[managemessages;I dont have manage messages permissions!]
$onlyperms[managemessages;You dont have manage messages permissions!]
$onlyif[$isnumber[$message]==true;Enter a valid no.of messages to purge!]
$deleteIn[3s]
$deletecommand`
})]  
