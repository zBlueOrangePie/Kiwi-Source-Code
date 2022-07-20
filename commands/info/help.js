module.exports =({
    name: "help",
    aliases: ["h"],
    code: `
<@$authorID> Here Are All Of My Bot Commands
$title[Bot Commands]
$addField[Fun Commands; k!calculator, k!kickback, k!howgay, k!slap]
$addField[Information Commands; k!info, k!ping, k!help, k!uptime k!commandinfo]
$addField[Utility Commands; k!say]
$addField[Moderation Commands;k!ban, k!kick, k!unban, k!mute, k!unmute, k!tempban, k!setmute, k!purge, k!removerole, k!giverole, k!temprole]
$addField[Economy Commands;k!balance, k!deposit, k!withdraw, k!work, k!beg]
$footer[@Kiwi - Bot]
$color[$getServerVar[colorid]]`
})
