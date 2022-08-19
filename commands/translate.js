const { SlashCommandBuilder } = require('discord.js');
const config = require("../config.json");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("translate")
    .setDescription("Translates text to binary code or binary code to text!")
    .addStringOption(option => option.setName(`choice`).setRequired(true).setDescription("The choice of the command. Either 'text' or 'binary'.").addChoices({name: `Text to binary`, value: `text`}, {name: `Binary to text`, value: `binary`}))
    .addStringOption(option => option.setName(`text`).setRequired(true).setDescription("The text to be translated.")),
  async execute(interaction) {
    const text2 = interaction.options.getString("text");
    const choice = interaction.options.getString("choice");

    let args = text2.split(' ');
    let text = args.join(' ');   
    function binaryAgent(str) {
        var newBin = str.split(" ");
        var binCode = [];
        
        for (i = 0; i < newBin.length; i++) {
            binCode.push(String.fromCharCode(parseInt(newBin[i], 2)));
          }
        return binCode.join("");
    }
    if (choice == "binary") {
        if (!/^[0-1- ]+$/.test(text)) return interaction.reply({content: `"${text}" is not binary code...`})
        interaction.reply({content: `${binaryAgent(text)}`});
    } else if (choice == "text") {
        let binary = await text.split('').map(c => c.charCodeAt(0).toString(2)).join(' ')
        console.log(binary)
        interaction.reply({content: `${binary}`});
    }
  },
};