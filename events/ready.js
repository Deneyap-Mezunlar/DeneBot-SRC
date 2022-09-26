const { MessageEmbed, Client } = require("discord.js");
const os = require("os")
/**
 * Alair alt katman dosyası / ready.js
 * @param {Client} client 
 */
module.exports = async client => {
  console.log(client.guilds.cache.size, "sunucu ve", client.users.cache.size, "kişiyle hazır!");

  setInterval(() => client.user.setPresence({ activities: [{ type: "LISTENING", name: client.guilds.cache.size + " sunucuyla /yardım'ı" }], status: 'dnd' }), 60_000 * 2)

  const embed = new MessageEmbed().setAuthor({ name: client.user.username, iconURL: client.user.avatarURL() })
    .setTitle(`Tekrardan hazır!`).setColor("GREEN").setDescription(`${os.cpus()[0].model} üzerinde, \`${Date.now() - client.ayarlar.start}ms\` içinde hazırlandı!`)

  if (process.platform === "linux")
  await client.wh.kontrolcu.send({ embeds: [embed] })


}
