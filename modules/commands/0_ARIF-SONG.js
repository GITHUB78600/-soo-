module.exports.config = {
	name: "song",
	version: "2.0.4",
	hasPermssion: 0,
	credits: "ARIF-BABU",
	description: "Play a song",
	commandCategory: "utility",
	usages: "[title]",
	usePrefix: false,
	cooldowns: 20,
	dependencies: {
		"fs-extra": "",
		"request": "",
		"axios": "",
		"@distube/ytdl-core": "",
		"yt-search": ""
	}
};
 
module.exports.run = async ({ api, event }) => {
	const axios = require("axios");
	const fs = require("fs-extra");
	const ytdl = require("@distube/ytdl-core");
	const yts = require("yt-search");
 
	// Extract song name from the message
	const input = event.body;
	const args = input.split(" ").slice(1); // This skips the command itself
	const songName = args.join(" "); // Joins the remaining parts as the song name
 
	// Check if song name is provided
	if (!songName) {
		return api.sendMessage("बाबू गाना नाम तो लिखो ऐसे song chal pyar karegi", event.threadID);
	}
 
	try {
		api.sendMessage(`दो minute रुको आपको "${songName}" भेज रहा हूं।🥰...`, event.threadID);
 
		// Search for the song on YouTube
		const searchResults = await yts(songName);
		if (!searchResults.videos.length) {
			return api.sendMessage("Error: Invalid request.", event.threadID, event.messageID);
		}
 
		const video = searchResults.videos[0];
		const videoUrl = video.url;
 
		// Download the audio stream
		const stream = ytdl(videoUrl, { filter: "audioonly" });
 
		const fileName = `${event.senderID}.mp3`;
		const filePath = __dirname + `/cache/${fileName}`;
 
		stream.pipe(fs.createWriteStream(filePath));
 
		stream.on('end', () => {
			console.info('[DOWNLOADER] Downloaded');
 
			// Check if the file size is greater than 25MB
			if (fs.statSync(filePath).size > 26214400) {
				fs.unlinkSync(filePath);
				return api.sendMessage('[ERR] The file could not be sent because it is larger than 25MB.', event.threadID);
			}
 
			// Send the file as an attachment
			const message = {
				body: `[ARIF-PROJECT]\n\nHere's your music, enjoy!🥰\n\nTitle: ${video.title}\nArtist: ${video.author.name}`,
				attachment: fs.createReadStream(filePath)
			};
 
			api.sendMessage(message, event.threadID, () => {
				fs.unlinkSync(filePath); // Delete the file after sending
			});
		});
	} catch (error) {
		console.error('[ERROR]', error);
		api.sendMessage('An error occurred while processing the command.', event.threadID);
	}
};