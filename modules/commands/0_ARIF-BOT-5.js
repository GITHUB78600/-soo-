//@Prem-babu3608
////////////////////////////////////////////////////////
/////// WARNING => JO CREDIT NAME CHANGE KREGA USKA ID BAN KAR DIYA JAYEGA + THIS BOT IS MADE BT PREM BABU
const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "ARIF-BOT-5",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "SAYERI REPLY MR PREM BABU",
  commandCategory: "NO PREFIX",
  usages: "PREM-OR-TAKLA",
  cooldowns: 5,
}
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

var tl = ["जी सर 🥺", "हा बॉस बोलो 🤗", "बॉस क्या हुआ 🤔", "बॉस में मस्ती कर रहा हूँ 🙂", "बॉस खान हुआ 🙄","बॉस मुझे छोड़ कर मत जाओ 🥺", "बॉस मुझे लड़कियां परेशान कर रही हैं 🥺", "जी बॉस 🙂♥️", "मेरा बॉस आ गया 🥺" ] ;
 var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "❤️") || (event.body.toLowerCase() == "🧡") || (event.body.toLowerCase() == "💛") || (event.body.toLowerCase() == "💚")) {
     return api.sendMessage("आपको मुझमें पर दिल आ गया क्या 🥺", threadID);
   };

 if ((event.body.toLowerCase() == "💙") || (event.body.toLowerCase() == "💜") || (event.body.toLowerCase() == "♥️") || (event.body.toLowerCase() == "🖤")) {
     return api.sendMessage("आपको मुझमें पर दिल आ गया क्या 🥺", 
     threadID);
           };
  ////////////////@prem-babu3608/////////////////
   mess = "{name}"

  if (event.body.includes("🫣") == 1 || (event.body.includes("🫣🫣") == 1)) {
    var msg = {
      body: `${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }