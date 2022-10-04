const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("A help command :)"),
  async execute(interaction) {

    const embed = new EmbedBuilder()
      .setTitle("Need help?")
      .setDescription("This bot was purely made to convert binary code into text and the other way around.\n\nHere's the list of all the commands i can do:\n\n1001001 100000 1101000 1101111 1110000 1100101 100000 1111001 1101111 1110101 100000 1101100 1101001 1101011 1100101 100000 1110100 1101000 1100101 100000 1100010 1101111 1110100")
      .addFields(
        { name: 'Commands', value: '`/translate`\n`/help`\n`/stats`' },
        { name: '\u200B', value: '\u200B' },
        { name: 'Created by', value: '**Commander R#9371** (<@271285474516140033>) | **The Lost Pack Development**' },
      )
      .setColor("#FFCE30")
      .setFooter({ text: `Requested by: ${interaction.user.tag}`, iconURL: `${interaction.user.avatarURL({ dynamic: true })}` });


    const row = new discord.ActionRowBuilder()
      .addComponents(
        new discord.ButtonBuilder()
          .setLabel('Support')
          .setURL(config.support)
          .setStyle(5),
      )
      .addComponents(
        new discord.ButtonBuilder()
          .setLabel('Invite me!')
          .setURL(config.invite)
          .setStyle(5),
      )

    interaction.reply({ embeds: [embed], components: [row] });
  },
};