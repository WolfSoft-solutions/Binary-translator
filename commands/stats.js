const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const moment = require('moment');
module.exports = {
    data: new SlashCommandBuilder()
        .setName("stats")
        .setDescription("Shows the stats of the bot"),
    async execute(interaction) {

        const d = moment.duration(client.uptime);
        const days = (d.days() == 1) ? `${d.days()} day` : `${d.days()} days`;
        const hours = (d.hours() == 1) ? `${d.hours()} hour` : `${d.hours()} hours`;
        const minutes = (d.minutes() == 1) ? `${d.minutes()} minute` : `${d.minutes()} minutes`;
        const seconds = (d.seconds() == 1) ? `${d.seconds()} second` : `${d.seconds()} seconds`;
        const date = moment().subtract(d, 'ms').format('dddd, MMMM Do YYYY');
        
        const embed = new EmbedBuilder()
            .addFields({name: `Uptime:`, value: `\`\`\`prolog\n${days}, ${hours}, ${minutes}, and ${seconds}\`\`\``})
            .addFields({name: 'Last restart:', value: date, inline: true})
            .addFields({name: 'Date Launched:', value: `${moment.utc(client.user.createdTimestamp).fromNow()}`, inline: true})
            .addFields({name: `Owner Info:`, value: `Username: \`Commander R\`\nDev group: \`The Lost Pack Development\``, inline: true})
            .addFields({name: `Server count:`, value: `${client.guilds.cache.size}`, inline: true})
            .addFields({name: `User count:`, value: `${client.users.cache.size}`, inline: true})
            .addFields({name: `Commands count:`, value: `${client.commands.size}`, inline: true})
            .setColor("#FFCE30")

        interaction.reply({embeds: [embed]})
    },
};