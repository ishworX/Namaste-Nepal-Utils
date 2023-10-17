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
                .setColor('#const db = require("../mongoDB");
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
                            .setColor('#3498db')
                            .setAuthor({
                                name: 'Cleared List',
                                iconURL: 'https://media.discordapp.net/attachments/1115193942724595804/1163919889107525662/queue..png?ex=654153de&is=652edede&hm=bc41a5b7c52bed5d7df71f5892288028eaa623296c2bce35fd1907f3694fd14c&=&width=802&height=840',
                                url: 'https://discord.gg/nhj6yAqUdG'
                            })
                            .setDescription('**Queue cleared! Be Ready for a new musical journey.**')


                        interaction.reply({ embeds: [embed] });
                    } catch (e) {
                        console.error(e);
                    }
                },
            }; ')
                .setAuthor({
                    name: 'Cleared List',
                    iconURL: 'https://media.discordapp.net/attachments/1115193942724595804/1163919889107525662/queue..png?ex=654153de&is=652edede&hm=bc41a5b7c52bed5d7df71f5892288028eaa623296c2bce35fd1907f3694fd14c&=&width=802&height=840',
                    url: 'https://discord.gg/nhj6yAqUdG'
                })
                .setDescription('**Queue has been cleared successfully.! **')


            interaction.reply({ embeds: [embed] });
        } catch (e) {
            console.error(e);
        }
    },
};