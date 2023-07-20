const { Events } = require("discord.js");
const User = require("../models/User");

module.exports = {
  name: Events.GuildMemberAdd,
  async execute(member) {
    await User.findOneAndUpdate(
      { username: member.user.username },
      {},
      { upsert: true }
    ).exec();
  },
};
