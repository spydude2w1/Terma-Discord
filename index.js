const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();
const { MessageEmbed, permissions } = require('discord.js');
const db = require('quick.db');
const fs = require('fs');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord)
})

client.once('ready', () => {
    client.user.setActivity('ENTER HELP COMMAND WITH PREFIX HERE! ', { type: 'LISTENING' })
  .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
  .catch(console.error);
});
// Example of Rich presence 
//    client.user.setActivity('t.help || Invite Me! https://bit.ly/InviteTerma', { type: 'LISTENING' })

client.on('messageDelete', (message) => {
    if (message.author.bot) return;

    if (message.mentions.members.first() && !message.mentions.members.first().user.bot && message.mentions.members.first().user.id !== message.author.id) {

        const embed = new Discord.MessageEmbed()
            .setTitle('Ghost ping clown detected 🤡')
            .setThumbnail(message.author.displayAvatarURL({
                dynamic: true
            }))
            .setColor('WHITE')
            .addField('Clown', message.author)
            .addField('Message', message.content);

        message.channel.send(embed)
    }
})

client.on('message', async(message) => {
    if(!message.guild || message.author.bot || message.member.permissions.has(['MANAGE_MESSAGES'])) return;
    let invs = [];
    await message.guild.fetchInvites().then(inv => {
        inv.forEach(invites => {
            invs.push(invites.code);
        });
    });
    if(message.guild.fetchVanityData.code) invs.push(message.guild.fetchVanityData.code)

    for(let i of ['discord.gg/', 'discord.com/invite/']) {
        if(message.content.includes(i)) {
            if(!invs.length) {
                message.delete();
                return message.reply(
                    new MessageEmbed()
                    .setDescription(`<a:no:869601437620002867> **You're not allowed to send Invites!**`)
                    .setColor('RED')
                    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                    .setTimestamp()
                )
            }
             
            let args = message.content.split(i);
            args.shift();
            args[0].split(/ +/);

            for(let arg of args) {
                if(!invs.includes(arg)) {
                    message.delete();
                    return message.reply(
                        new MessageEmbed()
                        .setDescription(`<a:no:869601437620002867> **You're not allowed to send Invites!**`)
                        .setColor('RED')
                        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                        .setTimestamp()
                    )
                }
            }
        }
    }
})

client.on('messageReactionAdd', async(reaction, user) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;
    if(reaction.message.id === '870255432122372096'){
        if(reaction.emoji.name === ':white_check_mark:') {
            await reaction.message.guild.members.cache.get(user.id).roles.add('869054792935297105', '843056472497848320')
            user.send('You\'re now verified in the **APL Tournament Discord**')
        }
    }
})

client.login(process.env.DS_TOKEN_VAR1);