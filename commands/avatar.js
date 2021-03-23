module.exports = {
    name: 'avatar',
    description: "Sends the avatar of the message's author",
    execute(message, args){
        message.reply(message.author.displayAvatarURL());
    }
}