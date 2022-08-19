const { ActivityType } = require('discord.js');
const activities = []

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);

		// sets the activity of the bot
		client.user.setPresence({ status: 'online', activity: activities[0] });

		let activity = 0;

		setInterval(() => {
            activities[0] = { name: `/translate`, type: ActivityType.Listening };
			activities[1] = { name: `over all the zero's and one's`, type: ActivityType.Watching };
			if (activity > 1) activity = 0;
			client.user.setActivity(activities[activity]);
			activity++;
		}, 10000);
	},
};