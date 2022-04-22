module.exports = {
  name: 'ping',
  description: "ping",
  permissions: ["SEND_MESSAGES"],
  execute(client, message, args){
    message.channel.send(`Host ping - **${Date.now() - message.createdTimestamp}** ms`)

  }
}