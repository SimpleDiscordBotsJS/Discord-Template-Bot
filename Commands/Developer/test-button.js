const { SlashCommandBuilder, 
    ChatInputCommandInteraction, 
    EmbedBuilder, ActionRowBuilder, 
    ButtonBuilder, 
    ButtonStyle, 
    PermissionFlagsBits
} = require("discord.js");

module.exports = {
    developer: true,
    data: new SlashCommandBuilder()
    .setName("button-test").setNameLocalizations({
        "ru": "текст-кнопок"
    }).setDescription("Test the button handler.").setDescriptionLocalizations({ 
        "ru": "Протестировать обработчик кнопки."
    }).setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    /**
     * @param {ChatInputCommandInteraction} interaction 
     */
    execute(interaction) {
        const Row = new ActionRowBuilder()
            .addComponents( new ButtonBuilder()
            .setCustomId("TestButton")
            .setLabel("Test Button")
            .setStyle(ButtonStyle.Primary) 
        );

        interaction.reply({ embeds: [ new EmbedBuilder()
            .setDescription(`✅ | Test Button Handler`)
            .setColor(`#00d26a`) ], components: [Row], ephemeral: true
        });
    }
}