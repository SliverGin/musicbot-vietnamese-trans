module.exports = {
  Admins: ["765157350155485226"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "g", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/xyz123", //Support Server Link
  Token: process.env.Token || "ODgxMDkwMDU1NDI1Mzg4NjE0.YSnxDw.c3x_Jux1VhnSbV69niUvCfFcR2E", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "881090055425388614", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "OPRIwf1_lZRZQACQjhj0CLiIdX_cYiSr", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands", "bot"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "VISITOR_INFO1_LIVE=WpqwAyubKMg; PREF=tz=Asia.Saigon; SID=BwgvUByhKkmtZkH8XIQwPrTN0Dy4DVkZVhp0OKFjZLE0ju6x8U0FNDoQy-IJxAuCqjSa0g.; __Secure-1PSID=BwgvUByhKkmtZkH8XIQwPrTN0Dy4DVkZVhp0OKFjZLE0ju6xRrC2emM9t0wl32tQbtMSGA.; __Secure-3PSID=BwgvUByhKkmtZkH8XIQwPrTN0Dy4DVkZVhp0OKFjZLE0ju6xPJI3VasITllAlaoWOKeTwA.; HSID=AlUVdPsNRojN74Ota; SSID=A1odok2GSH8NjvFsd; APISID=G3W-TV9u3vr65ogM/AxvMqRc1RJT0tMF6N; SAPISID=pOQRQdX6c7VVRUE0/AjQwWkVNBmgSOa0Dw; __Secure-1PAPISID=pOQRQdX6c7VVRUE0/AjQwWkVNBmgSOa0Dw; __Secure-3PAPISID=pOQRQdX6c7VVRUE0/AjQwWkVNBmgSOa0Dw; LOGIN_INFO=AFmmF2swRQIhAPMb-1OYgiC27gTUEXtTSETzP9Cf17tsH8_k-Pj2wGa9AiBBcTdAerHvNLFjNNSIMoUc1HwnSAawtLdJwo5OcUl1Wg:QUQ3MjNmd1RzcFR1X0JtdmNlQWJmSlh5RnkwQnA1YTFyZXJvcGRDcWQ1NkpmeG96MkxSQnZneXZ6T2Nvd00wcVNNXzQwWHlkTVowNHNJMG9HejN4dFZwRjZJeHZqMkV4S1FFa1lSY0pabWFUTnRsMDFOcHJ4bUlHcmsyQUxjWFZ2UDVWUXZNUkh5UXVGQUtiUFhQVjFPYzFmMDJqQi1TZmNR; YSC=LkC4WWhgUEI; wide=1; SIDCC=AJi4QfH_qMVPJmlQTiaVjsJ4jh4XaoU1nHVANFYnjJunVizqMjMglYHz5_1EUG8RcSXyfuiCTf0; __Secure-3PSIDCC=AJi4QfEgOV2yfIhMJVl6MIAlMSmz-aovlcNFUyrXSphrDpbHQYci1U_9BrG7zEDZETYG1zZkHjc
", //A Secret like a password
  IconURL: "", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2184698945, //Bot Inviting Permissions
  Website: process.env.Website || "https://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

Lavalink: {
id: "cope.darrennathanael.com",
host: "LOCALHOST",
port: 443,
pass: "whatwasthelastingyousaid",
},

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "...", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "...", //Spotify Client Secret
  },
};
