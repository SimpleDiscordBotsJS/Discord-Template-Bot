const Discord = require("discord.js"); //Библиотека
const client = new Discord.Client({ intents: 32767 }); //Создание клиента
const config = require("./config.json"); //Загрузка конфига

client.commands = new Discord.Collection()

require("./Handlers/Events")(client);
require("./Handlers/Commands")(client);

//===========================================================

//===========================================================



//===========================================================

//Подключение к боту и вывод ошибки в случае отсутствия токена, или если токен неверен.
client.login(config.BOT_TOKEN).catch(() => Console.error("[BOT] Invalid Bot Login Token."));