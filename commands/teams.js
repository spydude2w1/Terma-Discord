const Discord = require('discord.js')
const { Message } = require("discord.js");

module.exports = {
    name: 'teams',
    description: "teams command",
    permissions: ["SEND_MESSAGES"],
    execute(client, message, args,) {
        message.delete();
        const TeamsEmbed = new Discord.MessageEmbed()
        .setColor('#9467bd')
        .setTitle('Teams for APL Season 2')
        .setURL('https://bit.ly/InviteTerma')
        .setDescription('All Teams full! The stakes are high!')
        .setImage('https://cdn.discordapp.com/attachments/843084362986553354/871002808772599818/APl_Bracket1.png')
        .addFields(
            {name: 'Team 1', value: '<a:yes:869601406309527592> - `!ce#0002 & Thomas Shelby#7018`'},
            {name: 'Team 2', value: '<a:yes:869601406309527592> - `TheNameIsZak#7769 & Ay00b.#0001`'},
            {name: 'Team 3', value: '<a:yes:869601406309527592> - `Kata#7771 & Fumi#6094`'},
            {name: 'Team 4', value: '<a:yes:869601406309527592> - `macaimer & Srintic#6008`'},
            {name: 'Team 5', value: '<a:yes:869601406309527592> - `mess#2269 & Poptoptarts 1029#4436`'},
            {name: 'Team 6', value: '<a:yes:869601406309527592> - `Sam_TBP#0001 & My_Bugsy#3900`'},
            {name: 'Team 7', value: '<a:yes:869601406309527592> - `Tanush#0129 & PabIo#6942`'},
            {name: 'Team 8', value: '<a:yes:869601406309527592> - `ramster#1853 & Skidd#0446`'},
        )
        .setFooter('Requested by ' + message.author.username  + ' | Terma V3.12')

        message.channel.send(TeamsEmbed);
    }
}