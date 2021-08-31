module.exports = {
  Admins: ["ID", "ID"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "...", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/xyz123", //Support Server Link
  Token: process.env.Token || "YOUR_BOT_TOKEN", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "123456789", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "ABCabc", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands", "bot"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "YOUTUBE_COOKIE", //A Secret like a password
  IconURL: "", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2184698945, //Bot Inviting Permissions
  Website: process.env.Website || "https://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

Lavalink: {
id: "INSERT_ID",
host: "LOCALHOST",
port: 123,
pass: "youshallnotpass",
},

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "...", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "...", //Spotify Client Secret
  },
};
