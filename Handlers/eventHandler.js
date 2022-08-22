async function loadEvents(client) {
    const { Info } = require("../Utilities/Logger");
    const { loadFiles } = require("../Functions/fileLoader");
    const { AsciiTable3 } = require("ascii-table3");
    const table = new AsciiTable3().setHeading("Events", "Status");

    await client.events.clear();

    const Files = await loadFiles("Events");

    Files.forEach((file) => {
        const event = require(file);

        const execute = (...args) => event.execute(...args, client);
        client.events.set(event.name, execute);

        if(event.rest) {
            if(event.once) client.rest.once(event.name, execute);
            else client.rest.on(event.name, execute);
        } else {
            if(event.once) client.once(event.name, execute);
            else client.on(event.name, execute);
        }

        table.addRow(event.name, "✔");
    });

    return Info("\n" + table.toString() + "\nLoaded Events.");
}

module.exports = { loadEvents };