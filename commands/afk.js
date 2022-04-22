
//requiring the package
const db = require('quick.db')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name : 'afk',
    description : 'Makes you go afk!! *real* ',
    permissions : ['SEND_MESSAGES'],
    execute : async(client, message, args) => {
        const content = args.join(" ")
        await db.set(`afk-${message.author.id}+${message.guild.id}`, content)
        const embed = new MessageEmbed()
        .setDescription(`You have been set to afk\n**Reason :** ${content}`)
        .setColor("GREEN")
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic : true }))
        message.channel.send(embed)
        
        if(db.has(`afk-${message.author.id}+${message.guild.id}`)) {
            const info = db.get(`afk-${message.author.id}+${message.guild.id}`)
            await db.delete(`afk-${message.author.id}+${message.guild.id}`)
            message.reply(`Your afk status have been removed (${info})`)
        }
        
        if(message.mentions.members.first()) {
            if(db.has(`afk-${message.mentions.members.first().id}+${message.guild.id}`)) {
                message.channel.send(message.mentions.members.first().user.tag + ":" + db.get(`afk-${message.mentions.members.first().id}+${message.guild.id}`))
            }else return;
        }else;
        
    }
}