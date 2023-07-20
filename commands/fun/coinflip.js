const { SlashCommandBuilder } = require("discord.js");
const User = require("../../models/User");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("coinflip")
    .setDescription("Play a game of coinflip with the bot.")
    .addStringOption((option) =>
      option
        .setName("side")
        .setDescription("The side you want to bet on.")
        .setRequired(true)
        .addChoices(
          { name: "Heads", value: "heads" },
          { name: "Tails", value: "tails" }
        )
    ),

  async execute(interaction) {
    const side = interaction.options.getString("side");
    const result = Math.random() < 0.5 ? "heads" : "tails";

    if (side === result) {
      await interaction.reply(`You win! It was ${result} 🎉`);

      User.findOneAndUpdate(
        { username: interaction.user.username },
        {
          $inc: {
            coinsFlipped: 1,
            flipsWon: 1,
          },
        },
        { upsert: true }
      ).exec();
    } else {
      await interaction.reply(`You lose! It was ${result} 😢`);

      User.findOneAndUpdate(
        { username: interaction.user.username },
        {
          $inc: {
            coinsFlipped: 1,
            flipsLost: 1,
          },
        },
        { upsert: true }
      ).exec();
    }
  },
};
