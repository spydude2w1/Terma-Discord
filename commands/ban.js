module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send("User has been banned from the server. Please don't follow his/her action(s), you might get banned too!");
        }else{
            message.channel.send(`You coudn't ban that member!`);
        }
    }
}