const Discord = require("discord.js"); // Библиотека
const client = new Discord.Client({ intents: 32767 }); // Создание клиента
const Logger = require("../Utilites/Logger"); // Логгер
const { BOT_TOKEN } = require("./config.json"); // Загрузка конфига
const { promisify } = require("util");
const { glob } = require("glob");
const PG = promisify(glob);
const Ascii = require("ascii-table");

//===========================================================

client.commands = new Discord.Collection();

["Events", "Commands"].forEach(handler => {
    require(`./Handlers/${handler}`)(client, PG, Ascii);
});

//===========================================================

client.on("error", (error) => { Logger.Error(error) });
client.on("warn", (error) => { Logger.Warning(error) });
// client.on("debug", (message) => { Logger.Debug(message) }); // Debug

//===========================================================

// Анти-краш и прочее...
process.on("unhandledRejection", (reason, p) => {
    Logger.Warning('=== unhandled Rejection ==='.toUpperCase());
    Logger.Warning('Reason: ' + reason.stack ? String(reason.stack) : String(reason));
    Logger.Warning('==========================='.toUpperCase());
});

process.on("uncaughtException", (err, origin) => {
    Logger.Error('=== uncaught Exception ==='.toUpperCase());
    Logger.Error('Exception: ' + err.stack ? err.stack : err);
    Logger.Error('==========================='.toUpperCase());
});

process.on('uncaughtExceptionMonitor', (err, origin) => {
    Logger.Error('=== uncaught Exception Monitor ==='.toUpperCase());
});

process.on('beforeExit', (code) => {
    Logger.Warning('======= before Exit ======='.toUpperCase());
    Logger.Warning('Code: ' + code);
    Logger.Warning('==========================='.toUpperCase());
});

process.on('exit', (code) => {
    Logger.Warning('========== exit =========='.toUpperCase());
    Logger.Warning('Code: ' + code);
    Logger.Warning('=========================='.toUpperCase());
});

process.on('multipleResolves', (type, promise, reason) => {
    Logger.Warning('==== multiple Resolves ===='.toUpperCase());
    Logger.Warning(type); Logger.Warning(promise); Logger.Warning(reason);
    Logger.Warning('==========================='.toUpperCase());
});

//===========================================================

//Подключение к боту и вывод ошибки в случае отсутствия токена, или если токен неверен.
client.login(BOT_TOKEN).catch(() => Logger.Error("[BOT] Invalid Bot Login Token."));

//===========================================================

//Завершение работы
process.on("SIGINT", () => { Logger.Success("SIGINT detected, exiting..."); process.exit(0); });