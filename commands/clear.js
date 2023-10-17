const db = require("../mongoDB");
const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "clear",
    description: "Clears the music queue.",
    permissions: "0x0000000000000800",
    options: [],
    voiceChannel: true,
    run: async (client, interaction) => {
        const queue = client.player.getQueue(interaction.guild.id);

        try {
            if (!queue || !queue.playing) {
                return interaction.reply({ content: '⚠️ No music playing!!', ephemeral: true });
            }

            if (!queue.songs[0]) {
                return interaction.reply({ content: '❌ Queue is empty!!', ephemeral: true });
            }

            await queue.stop(interaction.guild.id);

            const embed = new EmbedBuilder()
                .setColor('#7645fe')
                .setAuthor({
                    name: 'Cleared List',
                    iconURL: 'https://media.discordapp.net/attachments/1115193942724595804/1163898916723494993/pause-button-6075357-5012992.webp?ex=65414055&is=652ecb55&hm=6a2e3e590d571cd05b357469d56a74a71add139e6817f01f5026c6e0f04e948e&=&width=900&height=900',
                    url: 'https://discord.gg/nhj6yAqUdG'
                })
                .setDescription('**Queue has been cleared successfully.**')


            interaction.reply({ embeds: [embed] });
        } catch (e) {
            console.error(e);
        }
    },
};