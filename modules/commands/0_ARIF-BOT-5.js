//@Arif-babu
////////////////////////////////////////////////////////
/////// WARNING => JO CREDIT NAME CHANGE KREGA USKA ID BAN KAR DIYA JAYEGA + THIS BOT IS MADE BT ARIF BABU
const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "ARIF-BOT-5",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "ARIF BABU",
  description: "SAYERI REPLY MR ARIF BABU",
  commandCategory: "NO PREFIX",
  usages: "ARIF BABU",
  cooldowns: 5,
}
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["🐱BOT BABU♥️"] ;
 var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "❤️") || (event.body.toLowerCase() == "❤️❤️") || (event.body.toLowerCase() == "❤️❤️❤️") || (event.body.toLowerCase() == "❤️❤️❤️❤️")) {
     return api.sendMessage("❤️🤍💚", threadID);
   };
  ////////////////@prem-babu3608/////////////////
   mess = "{name}"

  if (event.body.includes("/") == 1 || (event.body.includes("?") == 1)) {
    var msg = {
      body: `🌺${rand} \n\n   ❁ ══════ ❃ आरिफ बाबू ❃ ══════ ❁🌹`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }