const Discord = require('discord.js');

module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    permissions: ["ADMINISTRATOR", "BAN_MEMBERS"],
    execute(client, message, args){
        if(!message.member.permissions.has(['ADMINISTRATOR', "BAN_MEMBERS"])) return message.channel.send('You do not have permissions to use this command')
        const target = message.mentions.users.first();
        if(message.author.id = target) return message.channel.send('You can\'t ban yourself!')
        if (!message.mentions.users.first()){
            message.channel.send(`You didn't mention a user to ban!`)
        }
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send("User has been banned from the server.");
        }
    }
}