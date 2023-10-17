const db = require("../mongoDB");
const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "resume",
    description: "Resumes the paused track.",
    permissions: "0x0000000000000800",
    options: [],
    voiceChannel: true,
    run: async (client, interaction, song) => {
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
                    iconURL: 'https://media.discordapp.net/attachments/1115193942724595804/1163905398542172200/resume.png?ex=6541465f&is=652ed15f&hm=bfe9d181f509ddc90150a88133e04be5e649b99787f12ef97bed2b96d4db4b3e&=&width=840&height=840',
                    url: 'https://discord.gg/nhj6yAqUdG'
                })
                .setDescription(success ? `Your music is resumed!` : '❌ Error: Unable to resume song')


            return interaction.reply({ embeds: [embed] });
        } catch (e) {
            console.error(e);
        }
    },
};
