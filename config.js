module.exports = {
    TOKEN: "MTEwODc5MzU3OTI2ODIzMTE3MA.Gdd5TD.cyt6vGgYiszD0oXsmEd-24G05otm9cVR1g6hAQ",
    ownerID: ["1055655980521767023", "209329206729900032", ""],
    botInvite: "",
    supportServer: "1114625897245462530",
    mongodbURL: "",
    status: 'BOT is Oline',
    commandsDir: './commands',
    language: "en",
    embedColor: "00fbff",
    errorLog: "",


    sponsor: {
        status: true,
        url: "https://www.whoisrabbit.com",
    },

    voteManager: {
        status: false,
        api_key: "",
        vote_commands: ["back", "channel", "clear", "dj", "filter", "loop", "now-playing", "pause", "play", "playlist", "queue", "resume", "save", "search", "skip", "stop", "time", "volume"],
        vote_url: "",
    },

    shardManager: {
        shardStatus: false
    },

    playlistSettings: {
        maxPlaylist: 10,
        maxMusic: 75,
    },

    opt: {
        DJ: {
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume', 'shuffle']
        },

        voiceConfig: {
            leaveOnFinish: false,
            leaveOnStop: false,
            leaveOnEmpty: {
                status: true,
                cooldown: 10000000,
            },

        },

        maxVol: 150,

    }
}
