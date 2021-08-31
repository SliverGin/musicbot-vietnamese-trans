const { MessageEmbed } = require("discord.js");
const { TrackUtils } = require("erela.js");
const levels = {
    none: 0.0,
    low: 0.2,
    medium: 0.3,
    high: 0.35,
};
module.exports = {
    name: "bassboost",
    description: "Bật, tắt, điều chỉnh hiệu ứng âm thanh.",
    usage: "[none|low|medium|high]",
    permissions: {
        channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
        member: [],
    },
    aliases: ["bb", "bass"],
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

        if (!args[0]) return client.sendTime(message.channel, "**Hãy chọn cấp độ hiệu ứng. \nCấp độ :** `none`, `low`, `medium`, `high`."); //if the user do not provide args [arguments]

        let level = "none";
        if (args.length && args[0].toLowerCase() in levels) level = args[0].toLowerCase();

        player.setEQ(...new Array(3).fill(null).map((_, i) => ({ band: i, gain: levels[level] })));

        return client.sendTime(message.channel, `✅ | **Hiệu ứng đã được cài thành** \`${level}\`.`);
    },
    SlashCommand: {
        options: [
            {
                name: "Cấp độ",
                description: `Hãy chọn cấp độ hiệu ứng. Cấp dộ : none, low, medium, high.`,
                value: "[cấp]",
                type: 3,
                required: true,
            },
        ],
        /**
         *
         * @param {import("../structures/DiscordMusicBot")} client
         * @param {import("discord.js").Message} message
         * @param {string[]} args
         * @param {*} param3
         */

        run: async (client, interaction, args, { GuildDB }) => {
            const levels = {
                none: 0.0,
                low: 0.2,
                medium: 0.3,
                high: 0.35,
            };

            let player = await client.Manager.get(interaction.guild_id);
            const guild = client.guilds.cache.get(interaction.guild_id);
            const member = guild.members.cache.get(interaction.member.user.id);
            const voiceChannel = member.voice.channel;
            if (!player) return client.sendTime(interaction, "❌ | **Không có gì đang phát cả.**");
            if (!member.voice.channel) return client.sendTime(interaction, "❌ | **Bạn phải ở trong kênh thoại để sử dụng lệnh !**");
            if (guild.me.voice.channel && !guild.me.voice.channel.equals(voiceChannel)) return client.sendTime(interaction, "❌ | **Bạn phải ở chung kênh thoại với tôi !**");
            if (!args) return client.sendTime(interaction, "**Hãy chọn cấp độ hiệu ứng. \nCấp độ :** `none`, `low`, `medium`, `high`."); //if the user do not provide args [arguments]

            let level = "none";
            if (args.length && args[0].value in levels) level = args[0].value;

            player.setEQ(...new Array(3).fill(null).map((_, i) => ({ band: i, gain: levels[level] })));

            return client.sendTime(interaction, `✅ | **Hiệu ứng đã được cài thành** \`${level}\``);
        },
    },
};
