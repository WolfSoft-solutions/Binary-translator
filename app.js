const discord = require('discord.js');
const { Client, GatewayIntentBits, Collection } = require('discord.js');
const client = new Client({ intents: [ GatewayIntentBits.Guilds ] });
const config = require('./config.json');
const fs = require('fs');

client.commands = new Collection();
global.client = client;
global.discord = discord;

// Here the code makes a command of every file in each folder in the commands folder
const commandFiles = fs.readdirSync(`./commands/`).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}



const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

// Here the code makes an event of every file in the events folder
for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

client.login(config.token);