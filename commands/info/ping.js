module.exports =({
    name: "ping",
    aliases: ["p"],
    code: `
$title[Pong 🏓]
$addField[Database Ping; $dbping]
$addField[Websocket Ping; $ping]
$color[$getServerVar[colorid]]`
})