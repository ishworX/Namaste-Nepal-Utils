const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');
const db = require("../mongoDB");
module.exports = {
    name: "skip",
    description: "Plays the next song from the queue.",
    permissions: "0x0000000000000800",
    options: [{
        name: "number",
        description: "Enter how many songs you want to skip.",
        type: ApplicationCommandOptionType.Number,
        required: false
    }],
    voiceChannel: true,
    run: async (client, interaction) => {

        try {

            const queue = client.player.getQueue(interaction.guild.id);
            if (!queue || !queue.playing) return interaction.reply({ content: '⚠️ No music playing!!', ephemeral: true }).catch(e => { })

            let number = interaction.options.getNumber('number');
            if (number) {
                if (!queue.songs.length > number) return interaction.reply({ content: '⚠️ Exceeded current no of songs', ephemeral: true }).catch(e => { })
                if (isNaN(number)) return interaction.reply({ content: '⚠️ Invalid Number', ephemeral: true }).catch(e => { })
                if (1 > number) return interaction.reply({ content: '⚠️ Invalid Number', ephemeral: true }).catch(e => { })

                try {
                    let old = queue.songs[0];
                    await client.player.jump(interaction, number).then(song => {
                        return interaction.reply({ content: `⏯️ Skipped : **${old.name}**` }).catch(e => { })
                    })
                } catch (e) {
                    return interaction.reply({ content: '❌ Queue is empty!!', ephemeral: true }).catch(e => { })
                }
            } else {
                try {
                    const queue = client.player.getQueue(interaction.guild.id);
                    if (!queue || !queue.playing) {
                        return interaction.reply({ content: '⚠️ No music playing!!', ephemeral: true });
                    }

                    let old = queue.songs[0];
                    const success = await queue.skip();

                    const embed = new EmbedBuilder()
                        .setColor('#7645fe')
                        .setAuthor({
                            name: 'Song Skipped',
                            iconURL: 'https://media.discordapp.net/attachments/1115193942724595804/1163918237197684836/71cb0a67bedfcd01f65a3127d424b1b6-removebg-preview.png?ex=65415254&is=652edd54&hm=2d2edb36fb66bd0472f10e9befa9314302495cb044e9ade97dfdba3e9edb9aba&=&width=1070&height=840',
                            url: 'https://discord.gg/nhj6yAqUdG'
                        })
                        .setDescription(success ? ` **SKIPPED** : **${old.name}**` : '❌ Queue is empty!')
                        .setTimestamp();

                    return interaction.reply({ embeds: [embed] });
                } catch (e) {
                    return interaction.reply({ content: '❌ Queue is empty!!', ephemeral: true }).catch(e => { })
                }
            }

        } catch (e) {
            console.error(e);
        }
    },
};