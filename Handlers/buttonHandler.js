async function loadButtons(client) {
    const { Info } = require("../Utilities/Logger");
    const { loadFiles } = require("../Functions/fileLoader");
    const { AsciiTable3 } = require("ascii-table3");
    const table = new AsciiTable3().setHeading("Buttons", "Status");

    const Files = await loadFiles("Buttons");

    Files.forEach((file) => {
        const button = require(file);
        if(!button.id) return;
        
        client.buttons.set(button.id, button);
        table.addRow(`${button.id}`, "✔");
    });

    return Info("\n" + table.toString() + "\nButtons Loaded.");
}

module.exports = { loadButtons };