const fs = require('fs');
const { client } = require('nuggies/src/classes/giveaways');

module.exports = (client, Discord) =>{
    const load_dir = (dirs) =>{ 
        const events_files = fs.readdirSync(`./events/${dirs}`).filter(file => file.endsWith('.js'));

        for(const file of events_files){
            const events = require(`../events/${dirs}/${file}`);
            const event_name = file.split('.')[0];
            client.on(event_name, events.bind(null, Discord, client));
            
        }
    }

    ['client', 'guild'].forEach(e => load_dir(e));
}