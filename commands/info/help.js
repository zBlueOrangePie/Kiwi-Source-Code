module.exports =({
    name: "help",
    aliases: ["h"],
    code: `
<@$authorID> Here Are All Of My Bot Commands
$title[Bot Commands]
$addField[Fun Commands; k!math, k!kickback, k!howgay, k!slap]
$addField[Information Commands; k!info, k!ping, k!help, k!uptime]
$addField[Utility Commands; k!say]
$footer[@Kiwi - Bot]
$color[$getServerVar[colorid]]`
})