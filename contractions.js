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
}
var cleanupFn = function cleanup() 
{
    console.log("Logging off");
    bot.destroy();
}

process.on('SIGINT', cleanupFn);
process.on('SIGTERM', cleanupFn);
