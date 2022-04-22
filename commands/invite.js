module.exports = {
    name: 'invite',
    description: "Sends the invite link to the bot!",
    permissions: ["SEND_MESSAGES"],
    execute(client, message, args) {
        message.channel.send(`http://bit.ly/InviteTerma`);

    }
}