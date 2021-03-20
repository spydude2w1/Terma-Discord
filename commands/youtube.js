module.exports = {
    name: 'youtube',
    description: "Sends youtube channel link",
    execute(message, args){
        message.channel.send('https://www.youtube.com/channel/UCNA6VdawDPUHpBYYWzcZ47w');
    }
}