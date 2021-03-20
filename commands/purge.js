module.exports = {
    name: 'purge',
    description: "Purge messages!",
   async  execute(message, args) {
        if (!args[0]) return message.reply("Please enter the amount of messages to purge!");
 
        if(isNaN(args[0])) return message.reply("Please type a real number!");
 
        if(args[0] > 100) return message.reply("Please type a number between 1-100");
        
        if(args[0] < 1) return message.reply("You have to delete at least one message!");

        message.channel.send('Hey, please know that you can only delete current messages. Messages under 14 days cannot be deleted.');
 
        await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages)
    });
 
 }
}   