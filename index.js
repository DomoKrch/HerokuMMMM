const Discord = require ('discord.js');
const client  = new Discord.Client();;

client.login(process.env.token);

client.on('ready', () => {

  console.log("Systems online");

})

client.on('message', msg => {

  if (msg.content === "testing")
    msg.reply('Systems online. You did not crash me this time. Good job');

})
