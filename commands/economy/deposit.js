module.exports =({	 

name: "deposit",
aliases: ["dep"],
code: `$setGlobalUserVar[Bank;$sum[$getGlobalUserVar[Bank;$authorID];$message];$authorID] 

$setGlobalUserVar[Wallet;$sub[$getGlobalUserVar[Wallet;$authorID];$message];$authorID] 

$title[Deposited] 

$thumbnail[$userAvatar[$authorID]] 

$color[RANDOM] 

$description[ 

$username, you deposited $$numberSeparator[$message] into your bank!] 

$footer[💵 $$numberSeparator[$sub[$getGlobalUserVar[Wallet;$authorID];$message]] | 🏦 $$numberSeparator[$sum[$getGlobalUserVar[Bank;$authorID];$message]] | 📊 $$numberSeparator[$sum[$getGlobalUserVar[Wallet;$authorID];$getGlobalUserVar[Bank;$authorID]]]] 

$onlyIf[$isNumber[$message[1]]==true;That's not a number!] 

$onlyIf[$message<=$getGlobalUserVar[Wallet;$authorID];Cannot deposit more than what's in your wallet!] 

$argsCheck[>1;How much are you depositing? Try this: \`$getServerVar[prefix]dep <amount>\`] 

$onlyIf[$getGlobalUserVar[Wallet;$authorID]>0;There's nothing to deposit!]` 

})
