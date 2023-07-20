const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("server-info")
    .setDescription("Shows information about the server."),
  async execute(interaction) {
    const embed = new EmbedBuilder().setTitle(interaction.guild.name).addFields(
      { name: "Server ID", value: interaction.guild.id.toString() },
      { name: "Member Count", value: interaction.guild.memberCount.toString() },
      {
        name: "Explicit Content Filter",
        value: interaction.guild.explicitContentFilter.toString(),
      },
      {
        name: "Preferred Locale",
        value: interaction.guild.preferredLocale.toString(),
      },
      {
        name: "Verification Level",
        value: interaction.guild.verificationLevel.toString(),
      },
      { name: "AFK Timeout", value: interaction.guild.afkTimeout.toString() },
      {
        name: "Roles",
        value: interaction.guild.roles.cache
          .map((role) => role.name.toString())
          .join(", "),
      }
    );

    await interaction.reply({ embeds: [embed] });
  },
};
