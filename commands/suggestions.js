const Discord = require('discord.js')
const { Message } = require("discord.js");

module.exports = {
    name: 'suggestions',
    description: 'creates a suggestion!',
    permissions: ["SEND_MESSAGES"],
    execute(message, args, cmd, client){
        const channel = message.guild.channels.cache.find(c => c.name === 'suggestions');
        if(!channel) return message.channel.send('#suggestions doesn\'t exist!');

        let messageArgs = args.join(' ');
        const embed = new Discord.MessageEmbed()
        .setColor('0aaef5')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(messageArgs);

        channel.send(embed).then((msg) =>{
            msg.react('👍');
            msg.react('👎');
            message.delete();
        }).catch((err)=>{
            throw err;
        });
    }
}