const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription(
      "Replies with Pong! 🏓 And will also show the latency of the bot."
    ),
  async execute(interaction) {
    await interaction.reply(
      `Pong! 🏓 Latency: ${interaction.client.ws.ping}ms`
    );
  },
};
