const Discord = require('discord.js')
const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'ppsize',
	description: 'Check your pp size!',
  permissions: ["SEND_MESSAGES"],
  execute:(client, message, args) => {
    let user = message.mentions.users.first() || message.author; 
    const pepe = "8" + "=".repeat(Math.floor(Math.random() * 15)) + "D"
  
    let embed = new MessageEmbed()
    .setAuthor(`Pp size machine :flushed:`, user.displayAvatarURL({ dynamic: true }))
    .setDescription(`${user}'s pp is **${pepe}** long!`)
    .setTimestamp()
    .setColor('#9467bd')
    .setFooter(client.user.username, client.user.displayAvatarURL({ dynamic: true }));
  
    message.channel.send(embed)
}
};
