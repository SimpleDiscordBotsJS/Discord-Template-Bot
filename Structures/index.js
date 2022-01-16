const Discord = require("discord.js"); //Библиотека
const client = new Discord.Client({ intents: 32767 }); //Создание клиента
const Logger = require("../Utilites/Logger"); // Логгер
const { BOT_TOKEN } = require("./config.json"); //Загрузка конфига
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



//===========================================================

//Подключение к боту и вывод ошибки в случае отсутствия токена, или если токен неверен.
client.login(BOT_TOKEN).catch(() => Logger.Error("[BOT] Invalid Bot Login Token."));

//===========================================================

//Завершение работы
process.on("SIGINT", () => {
    Logger.Success("SIGINT detected, exiting...");
    process.exit(0);
})

UpdateCheck.UpdateCheck();