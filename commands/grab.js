const { MessageEmbed } = require("discord.js");
const prettyMilliseconds = require("pretty-ms");

module.exports = {
  name: "grab",
  description: "Lưu bài nhạc đang phát vào tin nhắn riêng của tôi và bạn.",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["save"],
/**
*
* @param {import("../structures/DiscordMusicBot")} client
* @param {import("discord.js").Message} message
* @param {string[]} args
* @param {*} param3
*/
run: async (client, message, args, { GuildDB }) => {
  let player = await client.Manager.get(message.guild.id);
  if (!player) return client.sendTime(message.channel, "❌ | **Không có gì đang phát cả.**");
  if (!message.member.voice.channel) return client.sendTime(message.channel, "❌ | **Bạn phải ở trong kênh thoại để sử dụng lệnh !**");
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return client.sendTime(message.channel, "❌ | **Bạn phải ở chung kênh thoại với tôi !**");
   message.author.send(new MessageEmbed()
   .setAuthor(`Bài Đã Lưu`, client.user.displayAvatarURL({
    dynamic: true
  }))
  .setThumbnail(`https://img.youtube.com/vi/${player.queue.current.identifier}/mqdefault.jpg`)
  .setURL(player.queue.current.uri)
  .setColor("RANDOM")
  .setTitle(`**${player.queue.current.title}**`)
  .addField(`⌛ Thời lượng : `, `\`${prettyMilliseconds(player.queue.current.duration, {colonNotation: true})}\``, true)
  .addField(`🎵 Tác giả : `, `\`${player.queue.current.author}\``, true)
  .addField(`▶ Phát lại :`, `\`${GuildDB ? GuildDB.prefix : client.config.DefaultPrefix
  }play ${player.queue.current.uri}\``)
  .addField(`🔎 Được lưu ở :`, `<#${message.channel.id}>`)
  .setFooter(`Yêu cầu bởi ${player.queue.current.requester.tag}`, player.queue.current.requester.displayAvatarURL({
    dynamic: true
  }))
    ).catch(e=>{
      return message.channel.send("**❌ | Không thể gửi tin nhắn riêng cho bạn. Hãy bật Tin Nhắn Trực Tiếp lên.**")
    })    

    client.sendTime(message.channel, "✅ | **Kiểm tra tin nhắn !**")
  },
  SlashCommand: {
/**
*
* @param {import("../structures/DiscordMusicBot")} client
* @param {import("discord.js").Message} message
* @param {string[]} args
* @param {*} param3
*/
  run: async (client, interaction, args, { GuildDB }) => {
    const guild = client.guilds.cache.get(interaction.guild_id);
    const user = client.users.cache.get(interaction.member.user.id);
    const member = guild.members.cache.get(interaction.member.user.id);
    let player = await client.Manager.get(interaction.guild_id);
    if (!player) return client.sendTime(interaction, "❌ | **Không có gì đang phát cả.**");
    if (!member.voice.channel) return client.sendTime(interaction, "❌ | **Bạn phải ở trong kênh thoại để sử dụng lệnh !**");
    if (guild.me.voice.channel && !guild.me.voice.channel.equals(member.voice.channel)) return client.sendTime(interaction, "❌ | **Bạn phải ở chung kênh thoại với tôi !**");
    try{
    let embed = new MessageEmbed()
      .setAuthor(`Bài Đã Lưu`, client.user.displayAvatarURL())
      .setThumbnail(`https://img.youtube.com/vi/${player.queue.current.identifier}/mqdefault.jpg`)
      .setURL(player.queue.current.uri)
      .setColor("RANDOM")
      .setTimestamp()
      .setTitle(`**${player.queue.current.title}**`)
      .addField(`⌛ Thời lượng : `, `\`${prettyMilliseconds(player.queue.current.duration, {colonNotation: true})}\``, true)
      .addField(`🎵 Tác giả : `, `\`${player.queue.current.author}\``, true)
      .addField(`▶ Phát lại :`, `\`${GuildDB ? GuildDB.prefix : client.config.DefaultPrefix
        }play ${player.queue.current.uri}\``)
      .addField(`🔎 Được lưu ở :`, `<#${interaction.channel_id}>`)
      .setFooter(`Requested by: ${player.queue.current.requester.tag}`, player.queue.current.requester.displayAvatarURL({
        dynamic: true
      }))
      user.send(embed);
    }catch(e) {
      return client.sendTime(interaction, "**:x: Your DMs are disabled**")
    }

    client.sendTime(interaction, "✅ | **Check your DMs!**")
  },
  },
};
