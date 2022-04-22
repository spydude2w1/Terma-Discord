const Discord = require('discord.js')
const { Message } = require("discord.js");

module.exports = {
    name: 'youtube',
    description: "youtube command",
    permissions: ["SEND_MESSAGES"],
    execute(client, message, args,) {
        const YouTubeEmbed = new Discord.MessageEmbed()
        .setColor('#9467bd')
        .setTitle('YouTube!')
        .setURL('https://youtube.com/spydude2w1')
        .setDescription('https://youtube.com/spydude2w1')
        .setFooter('Requested by ' + message.author.username  + ' | Terma V3.12')

        message.channel.send(YouTubeEmbed);
    }
}