module.exports = {
  name: 'interactionCreate',
  async execute(interaction) {
    if (!interaction.isChatInputCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) return;

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
      const errorchan = client.users.cache.get("271285474516140033");
      const embed = new discord.EmbedBuilder()
        .setTitle(`⚠️ERROR⚠️`)
        .setDescription(`error:\n\`\`\`${error}\`\`\``)
        .addFields({ name: `User`, value: interaction.member })
        .setColor("#FFCE30")
      errorchan.send({ embeds: [embed] })
      return interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
    console.log(`${interaction.user.tag} in #${interaction.channel.name ? interaction.channel.name : 'DM'} triggered an interaction. (${interaction.commandName})`);
  },
};