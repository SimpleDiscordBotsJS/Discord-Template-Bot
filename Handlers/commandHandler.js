async function loadCommands(client) {
    const { Info } = require("../Utilities/Logger");
    const { loadFiles } = require("../Functions/fileLoader");
    const { AsciiTable3 } = require("ascii-table3");
    const table = new AsciiTable3().setHeading("Commands", "Status");

    await client.commands.clear();

    let commandsArray = [];

    const Files = await loadFiles("Commands");

    Files.forEach((file) => {
        const command = require(file);
        client.commands.set(command.data.name, command);

        commandsArray.push(command.data.toJSON());

        table.adRow(command.data.name, "✔");
    });

    client.application.commands.set(commandsArray);

    return Info("\n" + table.toString() + "\nCommands Loaded.");
}

module.exports = { loadCommands };