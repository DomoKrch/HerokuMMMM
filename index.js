const Discord = require ('discord.js');
const client  = new Discord.Client();;

client.login(process.env.token);

client.on('ready', () => {

  console.log("Systems online");

})

function getRandomInt(max) {

  return Math.floor(Math.random() * Math.floor(max));

}

client.on('message', msg => {

  if (msg.content === "testing")
    msg.reply('systems online');

  if (msg.content === "nigga" || msg.content === "Nigga" ||
      msg.content === "ching chong" || msg.content === "Ching chong" ||
      msg.content === "ching Chong" || msg.content === "Ching Chong" ||
      msg.content === "nigger" || msg.content === "Nigger" ||
      msg.content === "fag" || msg.content === "Fag" ||
      msg.content === "faggot" || msg.content === "Faggot")
  {

    var i = getRandomInt(13);

    switch(i)
    {
      case 0:
        msg.reply('dont go there');
        break;

      case 1:
        msg.reply('that is enough, babe');
        break;

      case 2:
        msg.reply('i just dont understand WhYyYyYy');
        break;

      case 3:
        msg.reply('that is so not watermelon');
        break;

      case 4:
        msg.reply('shut up, you stupid bitch');
        break;

      case 5:
        msg.reply('no.');
        break;

      case 6:
        msg.reply('oh ma gaaaawd');
        break;

      case 7:
        msg.reply('can we be quiet now? Can we do that? Hihihihi okay :)');
        break;

      case 8:
        msg.reply('spiritually, you are an asshole');
        break;

      case 9:
        msg.reply('we can mark this down as a success...spiritually');
        break;

      case 10:
        msg.reply('what comes after go? Away. Do it.');
        break;

      case 11:
        msg.reply('uh oh, de Nicki Mineh aint messin with that');
        break;

      case 12:
        msg.reply("RiSe AnD sHiNe");
        break;

    }

  }
})
