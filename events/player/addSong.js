const db = require("../../mongoDB");
const { EmbedBuilder } = require("discord.js");

module.exports = async (client, queue, song) => {
    if (queue) {
        if (!client.config.opt.loopMessage && queue?.repeatMode !== 0) return;
        if (queue?.textChannel) {
            const embed = new EmbedBuilder()
                .setAuthor({
                    name: 'Song added to the queue.',
                    iconURL: 'https://media.discordapp.net/attachments/1115193942724595804/1163919889107525662/queue..png?ex=654153de&is=652edede&hm=bc41a5b7c52bed5d7df71f5892288028eaa623296c2bce35fd1907f3694fd14c&=&width=802&height=840',
                    url: 'https://discord.gg/nhj6yAqUdG'
                })
                .setDescription(`**${song.name}** \n\n Requested by <@${song.user.id}> `)
                .setColor('#7645fe')
                .setFooter({ text: `Use </queue:1163921548546150530> for more Information` });
            queue?.textChannel?.send({ embeds: [embed] }).catch(e => { });
        }
    }
}
