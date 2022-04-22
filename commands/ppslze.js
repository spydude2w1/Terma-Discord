const Discord = require('discord.js')
const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'ppslze',
	description: 'Check your pp slze!',
  permissions: ["SEND_MESSAGES"],
  execute:(client, message, args) => {
    let user = message.mentions.users.first() || message.author; 
    const pepe = "8===================================B"
  
    let embed = new MessageEmbed()
    .setAuthor(`Pp slze Machine  😩`, user.displayAvatarURL({ dynamic: true }))
    .setDescription(`${user}'s pp is **${pepe}** long!`)
    .setTimestamp()
    .setColor('#9467bd')
    .setFooter(client.user.username, client.user.displayAvatarURL({ dynamic: true }));
  
    message.channel.send(embed)
}
};
