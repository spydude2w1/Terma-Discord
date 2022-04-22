const Discord = require('discord.js')
const { Message } = require("discord.js");

module.exports = {
    name: 'help',
    description: "help command",
    permissions: ["SEND_MESSAGES"],
    execute(client, message, args,) {
        const HelpEmbed = new Discord.MessageEmbed()
            .setColor('#9467bd')
            .setTitle('Commands')
            .setURL('https://bit.ly/InviteTerma')
            .setDescription('V3.12 Commands! | Terma')
            .addFields(
                { name: '<a:fun:869887100860903434> Fun', value: '`ppsize, imagine, avatar, meme, weather, say, whoasked, emojify, hangman, tictactoe, trivia, 8ball `' },
                { name: '<:mod:869893957289648128> Moderation', value: '`Ban, Kick, Mute, Unmute, Tempmute, Purge`' },
                { name: '🛠️ Utility', value: '`ping, youtube, version, suggestions, invite, say, firstmessage, position, afk`' }

            )
            .setFooter('Requested by ' + message.author.username + ' | Terma V3.12')

        message.channel.send(HelpEmbed);

    }
}