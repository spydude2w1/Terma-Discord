module.exports = {
    name: 'help',
    description: "this is a help command!",
    execute(message, args){
        message.channel.send('```Prefix - $ , Commands - ban, kick, purge, mute, unmute, ping, youtube, version, invite``` **To enable the mute command, you must have a role Named `Member` & `Muted` or this plugin will not work!**');
    }
  }