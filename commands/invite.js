module.exports = {
    name: 'invite',
    description: "Sends the invite link to the bot!",
    execute(message, args){
        message.channel.send(`http://bit.ly/InviteTerma
I heard that you wanted to invite me :>`);
    }
}