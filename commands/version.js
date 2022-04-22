module.exports = {
    name: 'version',
    description: "The bots version",
    permissions: ["SEND_MESSAGES"],
    execute(client, message, args) {
        message.channel.send(`Bot Version - V3.12 | Public Beta-Release!
Creator : spydude2w1`);
    }
}