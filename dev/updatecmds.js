module.exports =({

    name: 'update',

    aliases: ['refreshcmds', 'updcmd', 'reload', 'reloadcmds',],

    code: `$onlyForIDs[$getVar[devid];Only Bot Developers Can Use This Cmd]

$updateCommands

$onlyIf[$isBot[$authorID]!=true] $title[Successfully Reloaded The Cmds]`

})