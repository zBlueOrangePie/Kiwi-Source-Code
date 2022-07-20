module.exports =({ 

name: "beg", 

code: `$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet;$authorID];$random[0;25]];$authorID] 

$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[0;5]];$authorID] 

$title[Beg] 

$thumbnail[$userAvatar[$authorID]] 

$color[RANDOM] 

$description[$username, $randomText[Begging is for the weak so here;Here, take this and go;Here, don't let this be a habit;I take you for a well put together human being, why are you begging?;Why can't you just get a job?] 

] 

$footer[💵 +$$random[0;25] | 🗡 +$random[0;5]xp] 

$globalCooldown[30s;Quit being a begger and try again in %time%]` 

})
