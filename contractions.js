var Discord = require('discord.js');
var auth = require('./contracauth.json');

// Initialize Discord Bot
var bot = new Discord.Client();

bot.login(auth.token);

bot.on('ready', function (evt) 
{
    console.log('Connected');
});

bot.on('message;,message =>
{
  //code to do stuff here
       let phrase = ["phases"]; //list of phases with contractions
       let contraction = ["contractions"]; //list of contrations
       var text = message.content; //make text contain the message contents
       text = text.toLowerCase(); //convert mesage to lowercase for prossessing
       for (var i = 0; i < phrase.length; i++) // for all contractions in data base
       {
           //stuff
           if(text.indexOf(phrase[i] != -1)
           {
              text = text.replace(phrase[i],contraction[i]); //do replacement
              i = i-1; //set loop to do rescan for word in case of multiple aperinces.
           }
           
       }
       message.channel.send(text);
}
var cleanupFn = function cleanup() 
{
    console.log("Logging off");
    bot.destroy();
}

process.on('SIGINT', cleanupFn);
process.on('SIGTERM', cleanupFn);
