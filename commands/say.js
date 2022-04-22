module.exports = {
    name: "say",
    description: "says something",


    async execute(client, message, args) {
        if (!message.member.permissions.has('MANAGE_MESSAGES')) return // if the user running the command doesn't have permissions to mannage messages, stop running the code. ! means no or doesn't in js.

        let textChannel = message.mentions.channels.first() // the first channel that you tag
        if (!args[0]) return message.channel.send(`You didn't specify which channel to say in!`); // args are words or numbers after the command. The first word is args[0], and then args[1], and so on and so on.
        if (!args[1]) return message.channel.send(`You didn't specify anything to say!`);
        if (!message.guild.channels.cache.has(textChannel.id)) return; // here we're checking if the textChannel id provided is in the server where the message is being sent.
        message.delete() // deleting the command message

        msg = args.slice(1).join(" "); // everything including and after args[1]
        textChannel.send(msg) // sending the message in the text channel provided

    }
}