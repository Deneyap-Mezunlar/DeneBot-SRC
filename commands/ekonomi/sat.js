const { User, emoji, random } = require("../../util");

module.exports = {

    help: {
        name: ["arduinosat", "sat"],
        description: "Elindeki Arduinoları satarsın",
        usage: 'arduinosat <miktar>'
    },

    async run(client, message, args) {
        const kul = await User(message.author.id,"arduino para");
        let { arduino } = kul;
        if (!arduino) return message.reply('Hiç Arduinon yok ki, B R U H')

        let sayi = parseInt(args[0]);
        if (!sayi) return message.hata(`Satılacak miktarı belirtmelisin. Elinde ${arduino} arduino var.`)

        if (sayi > arduino) return message.reply(`Elinde sadece ${arduino} arduino var ama.`);

        const fiyat = random(500, 1000) * sayi;
        kul.arduino -= sayi;
        kul.para += fiyat;
        await kul.save()
        await message.reply(`**${sayi} Arduino** <:arduino:${emoji.arduino}> satarak **${fiyat} ATC** <:atacoin:${emoji.ata}> kazandın.`);
        await message.react(emoji.arduino);


    }
}