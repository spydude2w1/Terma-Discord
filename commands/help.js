const Discord = require('discord.js')
const { Message } = require("discord.js");

module.exports = {
    name: 'help',
    description: "help command",
    execute(message, args,) {
        const HelpEmbed = new Discord.MessageEmbed()
        .setColor('#9467bd')
        .setTitle('Commands')
        .setURL('https://sites.google.com/view/termabot/commands')
        .setDescription('Commands list V2 - Not All Commands may appear')
        .addFields(
            {name: 'Fun', value: 'imagine, memes, ping, avatar'},
            {name: 'Moderation', value: 'Ban, Kick, Mute, Unmute, Purge'},
            {name: 'Misc', value: 'Version, Youtube, Invite'},
            {name: 'Util', value: 'Suggestions, Help'},
            {name: 'Prefix', value: 't.'},
        )
        .setFooter('All these commands may not work as this is the Private Pre-Alpha Release of the bot!')

        message.channel.send(HelpEmbed);
    }
}