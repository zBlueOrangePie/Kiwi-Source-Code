module.exports =({
    name: "uptime",
    aliases: ["time", "up", "u"],
    code: `
$title[Uptime]
$addField[Im Now Online For Over; $uptime]
$color[$getServerVar[colorid]]`
})