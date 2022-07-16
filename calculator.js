module.exports = ({

    name: 'calculator',

    aliases: ['calc', 'c'],

    code: `

**Calculating...**

$editIn[2s;

\`\`\`$math[$replaceText[$message; ;]]\`\`\`]

$onlyIf[$message!=;**Write Something!**]`

})