const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();
 
const prefix = process.env.UNIVERSALPRFX_VAR;
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Terma V1.2 is online! CMD_13. ENV PROTECTED');
    client.user.setActivity('t.help | bit.ly/InviteTerma ', { type: 'WATCHING' })
  .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
  .catch(console.error);
});
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if(command === 'kick'){
        client.commands.get('kick').execute(message, args);
    } else if(command === 'youtube'){
        client.commands.get('youtube').execute(message, args);
    } else if(command === 'ban'){
        client.commands.get('ban').execute(message, args);
    } else if(command === 'purge'){
        client.commands.get('purge').execute(message, args);
    } else if(command === 'mute'){
        client.commands.get('mute').execute(message, args);
    } else if(command === 'unmute'){
        client.commands.get('unmute').execute(message, args);
    } else if(command === 'invite'){
        client.commands.get('invite').execute(message, args);
    } else if(command === 'version'){
        client.commands.get('version').execute(message, args);
    } else if(command === 'help'){
        client.commands.get('help').execute(message, args);
    } else if(command === 'avatar'){
        client.commands.get('avatar').execute(message, args);
    } else if(command === 'suggestions'){
        client.commands.get('suggestions').execute(message, args);
    } else if(command === 'server'){
        client.commands.get('server').execute(message, args);
    } else if(command === 'imagine'){
        client.commands.get('imagine').execute(message, args);
    } else if(command === 'memes'){
        client.commands.get('memes').execute(message, args);
    } else if(command === 'minigame'){
        client.commands.get('minigame').execute(message, args);
    }
    
});

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

client.login(process.env.DS_TOKEN_VAR1);