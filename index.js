const Discord = require ('discord.js');
const client  = new Discord.Client();;

client.login(process.env.token);

client.on('ready', () => {

  console.log("Systems online");

})
