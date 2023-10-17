const db = require("../mongoDB");
const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "pause",
    description: "Pause the currently playing music.",
    permissions: "0x0000000000000800",
    options: [],
    voiceChannel: true,
    run: async (client, interaction) => {
        const queue = client.player.getQueue(interaction.guild.id);

        try {
            if (!queue || !queue.playing) {
                return interaction.reply({ content: '⚠️ No music playing!!', ephemeral: true });
            }

            const success = queue.pause();

            const embed = new EmbedBuilder()
                .setColor('#7645fe')
                .setAuthor({
                    name: 'Song Paused',
                    iconURL: 'https://media.discordapp.net/attachments/1115193942724595804/1163898916723494993/pause-button-6075357-5012992.webp?ex=65414055&is=652ecb55&hm=6a2e3e590d571cd05b357469d56a74a71add139e6817f01f5026c6e0f04e948e&=&width=900&height=900',
                    url: 'https://discord.gg/nhj6yAqUdG'
                })
                .setDescription(success ? '**The music has been Paused. Run `</fast:972289487818334212>` to resume.**' : '❌ Command Error: Unable to pause song')


            return interaction.reply({ embeds: [embed] });
        } catch (e) {
            console.error(e);
        }
    },
};