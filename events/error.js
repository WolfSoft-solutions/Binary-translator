module.exports = {
	name: 'error',
	execute(error) {
		console.log(`${error}`);
        const errorchan = client.users.cache.get("271285474516140033");
        const embed = new discord.EmbedBuilder()
            .setTitle(`⚠️ERROR EVENT⚠️`)
            .setDescription(`error:\n\`\`\`${error}\`\`\``)
            .setColor("#FFCE30")
        errorchan.send({embeds: [embed]})
	},
};