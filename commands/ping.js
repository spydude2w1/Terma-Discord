module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(message, args){
        const latency = message.createdTimestamp - message.createdTimestamp;
        message.channel.send(`pong! \`${latency}ms\`, yeah this command's broken.`);
    }
}