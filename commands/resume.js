const db = require("../mongoDB");
const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "resume",
    description: "Resumes the paused track.",
    permissions: "0x0000000000000800",
    options: [],
    voiceChannel: true,
    run: async (client, interaction) => {
        const queue = client.player.getQueue(interaction.guild.id);

        try {
            if (!queue) {
                return interaction.reply({ content: '⚠️ Queue is empty!!', ephemeral: true });
            }

            if (!queue.paused) {
                return interaction.reply({ content: '⚠️ No paused music!!', ephemeral: true });
            }

            const success = queue.resume();

            const embed = new EmbedBuilder()
                .setColor('#7645fe')
                .setAuthor({
                    name: 'Song Resumed',
                    iconURL: 'https://discord.com/channels/1114625897245462530/1115193942724595804/1163904549828964412',
                    url: 'https://discord.gg/nhj6yAqUdG'
                })
                .setDescription(success ? '**The music springs back to life!!**' : '❌ Error: Unable to resume song')


            return interaction.reply({ embeds: [embed] });
        } catch (e) {
            console.error(e);
        }
    },
};
