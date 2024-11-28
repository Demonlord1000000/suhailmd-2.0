const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "true" || "mongodb+srv://DemonLord:P5AjyY6kqfYjc1NP@cluster0.ksaua.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "917760846236";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_15_11_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxODksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjEzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTc5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTcwLFxuICAgICAgICA5MixcbiAgICAgICAgOTksXG4gICAgICAgIDEwMixcbiAgICAgICAgODMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTczLFxuICAgICAgICAxMjksXG4gICAgICAgIDEwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTksXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzLFxuICAgICAgICA1MixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNyxcbiAgICAgICAgOTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODUsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODksXG4gICAgICAgIDIxMixcbiAgICAgICAgNDgsXG4gICAgICAgIDUyLFxuICAgICAgICA1NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDg3LFxuICAgICAgICA2NixcbiAgICAgICAgMTU5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjYsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE0MixcbiAgICAgICAgNDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTYwLFxuICAgICAgICA1NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA0OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTUsXG4gICAgICAgIDkxLFxuICAgICAgICA0MixcbiAgICAgICAgNzMsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjksXG4gICAgICAgIDgxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODQsXG4gICAgICAgIDUzLFxuICAgICAgICAxODQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDksXG4gICAgICAgIDQwLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzksXG4gICAgICAgIDEwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTM5LFxuICAgICAgICA0NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDksXG4gICAgICAgIDUyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNCxcbiAgICAgICAgNDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTYyLFxuICAgICAgICA1NSxcbiAgICAgICAgMjE5LFxuICAgICAgICA1MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwMixcbiAgICAgICAgMzksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxODcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNSxcbiAgICAgICAgMTUyLFxuICAgICAgICA4NSxcbiAgICAgICAgNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODMsXG4gICAgICAgIDc3LFxuICAgICAgICA1NixcbiAgICAgICAgMjIyLFxuICAgICAgICA0MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDksXG4gICAgICAgIDU1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMSxcbiAgICAgICAgNixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0LFxuICAgICAgICA4MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDksXG4gICAgICAgIDgxLFxuICAgICAgICA4MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI3LFxuICBcImFkdlNlY3JldEtleVwiOiBcInhXNnM2TUxKZkhvM0dKK0NLeDF4eG9DcW1IQkIweVZRNUFna0g5eUl5cWc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE3NzYwODQ2MjM2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2MDFCQUNBNjA3NzU4RjJGODA5NTAwOThGNjkwQUM1MVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzI3NjM3NDRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTc3NjA4NDYyMzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkY5Nzk5NUI0NjRDQ0ExMjE5MjU0MTg3QjUyMDE3QTBCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMjc2Mzc0NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJsYmFXWW03V1FKYVJnZ3RSVnhUcF9BXCIsXG4gIFwicGhvbmVJZFwiOiBcImM1MDY2NGRkLWI1NWYtNDU3Zi1hMTEwLWNlMjEzZmEzYTU3NFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTQsXG4gICAgICAxMjUsXG4gICAgICA3MCxcbiAgICAgIDExOSxcbiAgICAgIDYyLFxuICAgICAgNjAsXG4gICAgICA2LFxuICAgICAgMTc1LFxuICAgICAgMjMzLFxuICAgICAgMTkzLFxuICAgICAgMTQzLFxuICAgICAgNzIsXG4gICAgICAzMixcbiAgICAgIDE4MSxcbiAgICAgIDIxLFxuICAgICAgMjQ1LFxuICAgICAgMjA2LFxuICAgICAgNDYsXG4gICAgICAyNixcbiAgICAgIDE1OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTMsXG4gICAgICAyMjQsXG4gICAgICAyNTAsXG4gICAgICAxODcsXG4gICAgICAxNTMsXG4gICAgICA0OCxcbiAgICAgIDE5NyxcbiAgICAgIDUzLFxuICAgICAgODQsXG4gICAgICAyMDksXG4gICAgICA4NCxcbiAgICAgIDc5LFxuICAgICAgODAsXG4gICAgICAxMzksXG4gICAgICA0MCxcbiAgICAgIDAsXG4gICAgICA3MCxcbiAgICAgIDIwNSxcbiAgICAgIDI0LFxuICAgICAgMjI2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjZOQlhNRUg5XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTc3NjA4NDYyMzY6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE3MjM3MDQyNTgzOTY0OToxM0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwnZSH8J2UovCdlKrwnZSs8J2Uq8OXzZzDl/CdlI/wnZSs8J2Ur/CdlKEg8J+YiFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BYMjA4MEZFTlhBbjdvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZlVGMVNOQnQzSHpHR3ZFSUZqaVV2Ykl5bTFGZkF0V0g1cGt2ZEo1ZjVnWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJadzVnbndQbVgvSHMvMXNObEMydXh0TUhhRmY4NWRBdGNVLzJzYnZPYnRGMVlRN3hFZVh1TDJaT1U3TkZIOFJZTGdSVWVuTjh1clptQy9sUzBrd0hCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJjSHl0STNXbDlRUkttY2RqRUFtTHloR3NRbk9QVStKclFreC9UVzlYTHROc1BVdDN1cUVqZW96b2FVSy9MeVI1dndPc2dtcGlpVFJUWExwdUlVMHpodz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTc3NjA4NDYyMzY6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjc2MzczOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUg0L1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSDQvLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "/",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Demon-MD",
  ownername:process.env.OWNER_NAME|| "Demon Lord",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
