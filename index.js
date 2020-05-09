const Discord = require ('discord.js');
const client  = new Discord.Client();;

client.login(process.env.token);

client.on('ready', () => {

  console.log("Systems online");

})

client.on('message', msg => {

  if (msg.content === "testing")
    msg.reply('systems online');

  if (msg.content === "nigga" || msg.content === "Nigga" ||
      msg.content === "nigger" || msg.content === "Nigger" ||
      msg.content === "fag" || msg.content === "Fag" ||
      msg.content === "faggot" || msg.content === "Faggot" ||)
  {
    msg.reply('ok');
  }
})
