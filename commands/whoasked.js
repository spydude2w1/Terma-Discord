const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "whoasked",
    permissions: ["SEND_MESSAGES"],
    description: "asks who asked that who asked that the person asked",
    execute(client, message, args, Discord) {
        let member = message.mentions.members.first();

        if(member){
            var firstEmbed = new Discord.MessageEmbed()
            .setDescription(`**${member.displayName}**, ${client.user.username} is searching for who asked!
            Now playing: 
            Who Asked (Feat. Nobody Did)
            ──────────────⚪
            ◄◄⠀▐▐⠀►► 3:56 / 𝟹:𝟻𝟼⠀───○ 🔊`);
            message.channel.send(firstEmbed);
        }else{
            var firstEmbed = new Discord.MessageEmbed()
            .setDescription(`Now playing: 
            Who Asked (Feat. Nobody Did)
            ──────────────⚪
            ◄◄⠀▐▐⠀►► 3:56 / 𝟹:𝟻𝟼⠀───○ 🔊`);
            message.channel.send(firstEmbed);
        }
    }
}