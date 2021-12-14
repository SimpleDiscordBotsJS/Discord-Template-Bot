const Discord = require("discord.js"); //Библиотека
const client = new Discord.Client({ intents: 32767 }); //Создание клиента
const config = require("./config.json"); //Загрузка конфига

client.commands = new Discord.Collection()

require("./Handlers/Events")(client);
require("./Handlers/Commands")(client);

//===========================================================

//===========================================================



//===========================================================

client.login(config.BOT_TOKEN); //Подключение к боту