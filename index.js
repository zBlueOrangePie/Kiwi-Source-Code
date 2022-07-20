const aoijs = require("aoi.js")
const dotenv = require("dotenv")
const keepAlive = require("./keepAlive.js")
const express = require("express")

dotenv.config()
const bot = new aoijs.Bot({
    token: process.env.token,
    prefix: "k!",
    intents: "all",
})

bot.onMessage()

const loader = new aoijs.LoadCommands(bot)

bot.command({

    name: "<@996996881911644160>",

    nonPrefixed: "true",

    code: `Hey <@$authorID> My Prefix Is k! To See All Of My Commands Type k!help`

})

loader.load(bot.cmd, "./commands/")

bot.readyCommand({
    channel: "$getServerVar[globallogsid]",
    code: `$log[Sucess! Logined As $userTag[$clientID]]
$title[Im Now Back Online]
$addField[Delay Ping; $ping]
$addField[Wake Up;<@896709705248960512>]`
})

bot.status({
    text: "k!help | Kiwi",
    type: "WATCHING",
    status: "dnd",
    time: "12"
})

bot.variables(require(variables.js))
