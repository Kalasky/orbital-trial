const { SlashCommandBuilder } = require("discord.js");
const User = require("../../models/User");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("leaderboard")
    .addStringOption((option) =>
      option
        .setName("type")
        .setDescription("The type of leaderboard you want to see.")
        .setRequired(true)
        .addChoices({ name: "Coinflip", value: "coinflip" })
    )
    .setDescription("Shows the coinflip leaderboard."),
  async execute(interaction) {
    const users = await User.find({}).sort({ coinsFlipped: -1 }).limit(10);
    const leaderboard = users
      .map((user) => `${user.username} - ${user.coinsFlipped} coins flipped`)
      .join("\n");

    await interaction.reply(`**Coinflip Leaderboard (Top 10)**:\n\n${leaderboard}`);
  },
};
