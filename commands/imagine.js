module.exports = {
    name: 'imagine',
    description: "imagine something!",
    execute(message, args){
        let msgContent = 'Imagine ' + args.slice(0).join(" ");
        let nomsgContentResponse = "You did not specify anything for me to say!"
        
        if(!msgContent){
            let nomsgContentEmbed = new Discord.MessageEmbed()
            .setTitle("ERROR")
            .setDescription(nomsgContentResponse)
            .setFooter(`Command requested by ${message.author.tag}`, message.member.user.displayAvatarURL())
            .setColor("RED")
            .setTimestamp();
            message.channel.send(nomsgContentEmbed);
        } else {
        message.channel.send(msgContent)
        }
    }
}