const { Warning, Error, Success } = require("./Utilities/Logger");
const { Client, GatewayIntentBits, Partials, Collection } = require("discord.js");
const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;

const client = new Client({ 
    intents: [Guilds, GuildMembers, GuildMessages],
    partials: [User, Message, GuildMember, ThreadMember] 
});

//===========================================================
client.config = require("./config.json");

client.events = new Collection();
client.buttons = new Collection();
client.commands = new Collection();

//===========================================================
const { loadEvents } = require("./Handlers/eventHandler");
loadEvents(client);

const { loadButtons } = require("./Handlers/buttonHandler");
loadButtons(client);

//===========================================================
/*
// Anti-Crash and more...
process.on("unhandledRejection", (reason, p) => { Warning(
    '=== [ Unhandled Rejection/Catch ] ==='.toUpperCase(),
    'Reason: ' + reason.stack ? String(reason.stack) : String(reason),
    '====================================='.toUpperCase());
});

process.on("uncaughtException", (err, origin) => { Error(
    '=== [ Uncaught Exception ] ==='.toUpperCase(),
    'Exception: ' + err.stack ? err.stack : err,
    '=============================='.toUpperCase());
});

process.on('uncaughtExceptionMonitor', (err, origin) => { Error(
    '=== [ Uncaught Exception Monitor ] ==='.toUpperCase(),
    err, origin,
    '======================================'.toUpperCase());
});

process.on('beforeExit', (code) => { Warning(
    '======= [ Before Exit ] ======='.toUpperCase(),
    'Code: ' + code,
    '==============================='.toUpperCase());
});

process.on('warning', (code) => { Warning(
    '========= [ Warning ] ========='.toUpperCase(),
    'Code: ' + code,
    '==============================='.toUpperCase());
});

process.on('exit', (code) => { Warning(
    '========== [ Exit ] =========='.toUpperCase(), 
    'Code: ' + code,
    '=============================='.toUpperCase());
});

process.on('multipleResolves', (type, promise, reason) => { Warning(
    '==== [ Multiple Resolves ] ===='.toUpperCase(),
    type, promise, reason,
    '==============================='.toUpperCase());
});
*/
//===========================================================


client.login(client.config.BOT_TOKEN).then(() => {
        Success("[BOT] Signed.")
    }).catch(() => {
        Error("[BOT] Invalid Bot Login Token.");
        process.exit();
    }
);

//===========================================================


process.on("SIGINT", () => { 
    Success("SIGINT detected, exiting..."); 
    process.exit(); 
});