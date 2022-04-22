const Discord = require('discord.js');
const { Message, MessageEmbed} = require('discord.js');

module.exports=  {
    name : 'unmute',
    description : 'Unmutes the mentioned member',
    permissions: ['ADMINISTRATOR', "MUTE_MEMBERS", "KICK_MEMBERS", "MANAGE_MESSAGES"],
    /**
     * @param {Message} message
     */
    execute : async(client, message, args) => {
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        if(!Member) return message.channel.send('Member not found')

        const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted');

        await Member.roles.remove(role)

        message.channel.send(`${Member.displayName} is now unmuted`)
    }
}