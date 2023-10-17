const db = require("../mongoDB");
const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "stop",
    description: "Stops the music.",
    permissions: "0x0000000000000800",
    options: [],
    voiceChannel: true,
    run: async (client, interaction) => {
        try {
            const queue = client.player.getQueue(interaction.guild.id);
            if (!queue || !queue.playing) {
                return interaction.reply({ content: '⚠️ No music playing!!', ephemeral: true });
            }

            queue.stop(interaction.guild.id);

            const embed = new EmbedBuilder()
                .setColor('#f1002c')
                .setAuthor({
                    name: 'Music Stopped',
                    iconURL: 'https://media.discordapp.net/attachments/1115193942724595804/1163946274320560201/stop.png?ex=65416c70&is=652ef770&hm=e4d357a97655272b630e2db0a0c170b02826ea16d29f3e65a32dfa856b8f1076&=&width=840&height=840',
                    url: 'https://discord.gg/nhj6yAqUdG'
                })
                .setDescription('**Your current track is stopped.**')


            return interaction.reply({ embeds: [embed] });
        } catch (e) {
            console.error(e);
        }
    },
};
