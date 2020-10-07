const Discord = require("discord.js");
const client = new Discord.Client();
const ms = require('ms')

const prefix = "y!"

client.on('ready', () => {
    client.user.setActivity(` y!help | Currently in ${client.guilds.cache.size} Servers | I also have ${client.users.cache.size} users`);
    console.log('I am online')
});

client.on('message', message => {
    if(message.content === "y!ping") {
        message.channel.send(`Pong! Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`)
    }
});

client.on('message', message => {
    if(message.content === "y!embedtest" || message.content === "y!et") {
        const embed = new Discord.MessageEmbed()
        .setTitle('Embed')
        .setDescription('Embeds are working fine')
        .setTimestamp()
        .setImage('https://i.imgur.com/xL5FJ7b.jpg')
        message.channel.send(embed);
    }
})


client.login('BOT TOKEN')
