const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "ارسل";
client.on("message", message => {

            if (message.content.startsWith(prefix + ":")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'online').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : ارسلت ي الذيب لـ`); 
 message.delete(); 
};     
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : N45`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : N45 ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Powerd by N45`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});



client.login("NTcxMTEwNTYxMjM3MTcyMjI0.XMasYA.uV61dVAPeJGRSx2edaLN8OJ5iHw");