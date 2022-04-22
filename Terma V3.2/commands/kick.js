module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    execute(client, message, args){
        if(!message.member.permissions.has(['ADMINISTRATOR', 'KICK_MEMBERS'])) return;
        const target = message.mentions.users.first();
        if(message.author.id = target) return message.channel.send('You can\'t kick yourself!')
        if(!args[1]) return message.channel.send('You need to specify a user to kick! ');
        
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            args.slice(1)
            message.channel.send(`${memberTarget} has been kicked for ${args[1]}!`);
            memberTarget.send(`You were kicked from ${message.guild.name} for ${args[1]}.`)
        }
        }
    }