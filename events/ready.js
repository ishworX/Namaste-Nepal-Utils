const { ActivityType } = require("discord.js");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v10");
const { AutoPoster } = require("topgg-autoposter");
const config = require("../myconfig.js");

const setDiscordCommands = async (client) => {
    try {
        const rest = new REST({ version: "10" }).setToken(config.TOKEN || process.env.TOKEN);
        await rest.put(Routes.applicationCommands(client.user.id), {
            body: await client.commands,
        });
        console.log('\x1b[36m%s\x1b[0m', '|    ✅ Commands Loaded successfully!');
    } catch (err) {
        console.log('\x1b[36m%s\x1b[0m', '|    ❌ Commands Distracted!');
    }
};

const setActivity = (client) => {
    setInterval(() => client.user.setActivity({
        name: `with Rabbit's PP`,
        type: ActivityType.Streaming
    }), 10000);
    client.errorLog = config.errorLog;
};

const setupBot = (client) => {
    if (config.mongodbURL || process.env.MONGO) {
        setDiscordCommands(client);
        console.log('\x1b[32m%s\x1b[0m', `|    ✅ Logged in as ${client.user.username}`);
        setActivity(client);
    } else {
        console.log('\x1b[36m%s\x1b[0m', `|    ❌ Error MongoDB!`);
    }
    console.log('\x1b[36m%s\x1b[0m', `|    ✅ Activity set successfully!`);
};

module.exports = async (client) => {
    setupBot(client);

    if (client.config.voteManager.status === true && client.config.voteManager.api_key) {
        const ap = AutoPoster(client.config.voteManager.api_key, client);
        ap.on('posted', () => {
        });
    }
};
