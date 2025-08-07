/*

 * Created By maourafaXD
 * Base : Dpt Dr Pengikut Ceha
 * Whatsapp : 6285789987714
 * Chanel : https://whatsapp.com/channel/0029Vb7gTNO5a2450z5MnD0k
 
*/

// ───────────────────────────────────────────────────────────────────────────────乂 🥀 SETTINGS MODULE ───────────────────────────────────────────────────────────────乂 \\
require("./config")
const fs = require('fs')
const util = require('util')
const cheerio = require ('cheerio')
const axios = require('axios')
const { exec } = require("child_process")
const FormData = require('form-data');
const form = new FormData();
const moment = require("moment-timezone")
const chalk = require("chalk");
const { fileTypeFromBuffer } = require('file-type')
const yts = require('yt-search');
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const path = require('path')
const didyoumean = require('didyoumean');
const similarity = require('similarity')
const { Sticker } = require('wa-sticker-formatter')
    const {
    igdl: igdl,
    youtube: youtube,
    ttdl: ttdl
} = require("btch-downloader");
const yy1 = "`"
const yy2 = "```"
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
const { makeWASocket, makeCacheableSignalKeyStore, downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, generateWAMessageContent, generateWAMessage, makeInMemoryStore, prepareWAMessageMedia, generateWAMessageFromContent, MediaType, areJidsSameUser, WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, GroupMetadata, initInMemoryKeyStore, getContentType, MiscMessageGenerationOptions, useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, WALocationMessage, ReconnectMode, WAContextInfo, proto, WAGroupMetadata, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediaConnInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, processTime, Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, GroupSettingChange, DisconnectReason, WASocket, getStream, WAProto, isBaileys, PHONENUMBER_MCC, AnyMessageContent, useMultiFileAuthState, fetchLatestBaileysVersion, templateMessage, InteractiveMessage, Header } = require('@fizzxydev/baileys-pro')

module.exports = conn = async (conn, m, chatUpdate, store) => {
    try {
    const from = m.key.remoteJid
        const body = (
            m.mtype === "conversation" ? m.message.conversation :
            m.mtype === "imageMessage" ? m.message.imageMessage.caption :
            m.mtype === "videoMessage" ? m.message.videoMessage.caption :
            m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
            m.mtype === "reactionMessage" ? '' : // tambahkan ini
            m.mtype === "conversation" ? m.message.conversation :
            m.mtype === "imageMessage" ? m.message.imageMessage.caption :
            m.mtype === "videoMessage" ? m.message.videoMessage.caption :
            m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
            m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
            m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
            m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
            m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :
            m.mtype === "templateButtonReplyMessage" ? m.msg.selectedId :
            m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : "");


// ───────────────────────────────────────────────────────────────────────────────乂 🥀 SETTINGS ALL FILE ───────────────────────────────────────────────────────────────乂 \\
// FIL CONST
const {
getRegisteredRandomId, 
addRegisteredUser, 
createSerial, 
checkRegisteredUser 
} = require('./lib/register.js')

const {
    kapital,
    levelUp,
    profileMenu,
    profileMenu50
} = require('./lib/scraper.js')

const {
bytesToSize,
checkBandwidth, 
formatSize, 
tanggal,
getBuffer, 
isUrl, 
sleep,
fetchJson, 
jsonformat, 
nganuin, 
runtime, 
shorturl, 
formatp, 
color, 
capital,
toIDR,
toRupiah, 
getRandom,
clockString,
getGroupAdmins
} = require("./lib/myfunc");

const { addSaldo, minSaldo, cekSaldo, cekKoinPerak } = require("./lib/deposit")
const antilink = JSON.parse(fs.readFileSync("./database/antilink.json"));
const antilink2 = JSON.parse(fs.readFileSync("./database/antilink2.json"));
const prem = require("./lib/premium");

// FILE LET
let premium = JSON.parse(fs.readFileSync('./database/premium.json'));
let permintaan = fs.existsSync('./database/permintaan.json') ? JSON.parse(fs.readFileSync('./database/permintaan.json')) : {};
let depositPath = "./lib/deposit/"


// ───────────────────────────────────────────────────────────────────────────────乂 🥀 SETTINGS REPLY ───────────────────────────────────────────────────────────────乂 \\
const budy = (typeof m.text === 'string') ? m.text : '';
const prefixRegex = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.';
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''//Kalau mau Single prefix Lu ganti pake ini = const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const sender = m.key.fromMe ? (conn.user.id.split(':')[0]+'@s.whatsapp.net' || conn.user.id) : (m.key.participant || m.key.remoteJid)
const botNumber = await conn.decodeJid(conn.user.id)
const senderNumber = sender.split('@')[0]
const isCreator = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const pushname = m.pushName || `${senderNumber}`
const welcm = m.isGroup ? wlcm.includes(from) : true
const welcmm = m.isGroup ? wlcmm.includes(from) : true
const isBot = botNumber.includes(senderNumber)
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted);
const isMedia = /image|video|sticker|audio/.test(mime);
const groupMetadata = m.isGroup ? await conn.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isRegistered = checkRegisteredUser(m.sender)
const ments = (text) => {return text.match('@') ? [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : []}
const froms = m.quoted ? m.quoted.sender : text ? (text.replace(/[^0-9]/g, '') ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false) : false;
const fileFix = './database/fixes.json';
if (!fs.existsSync(fileFix)) fs.writeFileSync(fileFix, '{}');
let fixes = JSON.parse(fs.readFileSync(fileFix));
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
deviceinfo = /^3A/.test(m.id) ? 'ios' : m.id.startsWith('3EB') ? 'web' : /^.{21}/.test(m.id) ? 'android' : /^.{18}/.test(m.id) ? 'desktop' : 'unknown';
const full_args = body.replace(command, '').slice(1).trim()
const isPrem = isCreator ? true : prem.checkPremiumUser(m.sender, premium)


// ───────────────────────────────────────────────────────────────────────────────乂 🥀 ALL FUNCTION ───────────────────────────────────────────────────────────────乂 \\
let d = new Date
let gmt = new Date(0).getTime() - new Date("1 Januari 2024").getTime()
let weton = ["Pahing", "Pon","Wage","Kliwon","Legi"][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString("id", { weekday: "short" })
let calender = d.toLocaleDateString("id", {
day: "numeric",
month: "long",
year: "numeric"
})
let today = new Date().toLocaleDateString();

function randomNomor(min, max = null){
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}
}

const prefixOperator = {
  telkomsel: ['0811', '0812', '0813', '0821', '0822', '0852', '0853', '0823'],
  indosat: ['0814', '0815', '0816', '0855', '0856', '0857', '0858'],
  xl: ['0817', '0818', '0819', '0859', '0877', '0878'],
  axis: ['0838', '0831', '0832', '0833'],
  tri: ['0895', '0896', '0897', '0898', '0899'],
  smartfren: ['0881', '0882', '0883', '0884', '0885', '0886', '0887', '0888', '0889'],
  byu: ['0851']
};

function detectOperator(nomor) {
  const prefix = nomor.slice(0, 4);
  for (let [operator, daftar] of Object.entries(prefixOperator)) {
    if (daftar.includes(prefix)) {
      return operator.charAt(0).toUpperCase() + operator.slice(1);
    }
  }
  return 'Tidak diketahui';
}

global.botWarnings = global.botWarnings || {}
global.antibotGroups = global.antibotGroups || {}
function getTextFromMsg(msg) {
  try {
    return (
      msg?.conversation ||
      msg?.extendedTextMessage?.text ||
      msg?.imageMessage?.caption ||
      msg?.videoMessage?.caption ||
      msg?.documentMessage?.caption ||
      msg?.buttonsMessage?.contentText ||
      msg?.templateMessage?.hydratedTemplate?.hydratedContentText ||
      msg?.listMessage?.description ||
      msg?.viewOnceMessage?.message?.conversation ||
      ''
    ).toLowerCase()
  } catch {
    return ''
  }
}
if (
  m.isGroup &&
  !isCreator &&
  !isCreator &&
  global.antibotGroups[m.chat]
) {
  const groupId = m.chat
  const sender = m.sender
  const pushName = m.pushName?.toLowerCase() || ''
  const textMsg = getTextFromMsg(m.message)
  const ctx =
    m.message?.extendedTextMessage?.contextInfo ||
    m.message?.imageMessage?.contextInfo ||
    m.message?.videoMessage?.contextInfo ||
    m.message?.documentMessage?.contextInfo ||
    m.message?.buttonsMessage?.contextInfo ||
    m.message?.templateMessage?.contextInfo ||
    {}
  let isPossibleBot =
    pushName.match(/botz|bot|wa bot|whatsapp bot/) ||
    textMsg.match(/hallo pengguna|silakan tekan tombol|permintaan anda sedang diproses/i) ||
    textMsg.match(/hello user|please wait|click the button|your request is being processed/i) ||
    ctx.externalAdReply != null ||
    ctx.forwardedNewsletterMessageInfo != null
  if (isPossibleBot) {
    global.botWarnings[groupId] = global.botWarnings[groupId] || {}
    global.botWarnings[groupId][sender] = (global.botWarnings[groupId][sender] || 0) + 1
    const warnCount = global.botWarnings[groupId][sender]
    if (warnCount <= 2) { // max warn ubah ae
      await conn.sendMessage(groupId, {
        text: `⚠️ *Antibot aktif!*\nBot tidak diizinkan di grup ini!\nPeringatan ke-${warnCount}/3`,
        mentions: [sender]
      })
      await conn.sendMessage(groupId, { delete: m.key }).catch(() => {})
    } else {
      await conn.sendMessage(groupId, {
        text: `Bot @${sender.split('@')[0]} telah dikeluarkan dari grup karena melanggar aturan.`,
        mentions: [sender]
      })
      await conn.groupParticipantsUpdate(groupId, [sender], 'remove').catch(() =>
        conn.sendMessage(groupId, { text: '⚠️ Gagal kick bot. Mungkin bot bukan admin.' })
      )
      delete global.botWarnings[groupId][sender]
    }
  }
}

async function dellCase(filePath, caseNameToRemove) {
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    console.error('Terjadi kesalahan:', err);
                    return;
                }

                const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
                const modifiedData = data.replace(regex, '');

                fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
                    if (err) {
                        console.error('Terjadi kesalahan saat menulis file:', err);
                        return;
                    }

                    console.log(`Teks dari case '${caseNameToRemove}' telah dihapus dari file.`);
                });
            });
        }


const sewaFile = './database/sewa.json'
if (!fs.existsSync(sewaFile)) fs.writeFileSync(sewaFile, '[]')

const durationMap = {
  jam: 60 * 60 * 1000,
  hari: 24 * 60 * 60 * 1000,
  bulan: 30 * 24 * 60 * 60 * 1000,
  tahun: 365 * 24 * 60 * 60 * 1000,
  permanen: 0
}

function loadSewa() {
  return JSON.parse(fs.readFileSync(sewaFile))
}

function saveSewa(data) {
  fs.writeFileSync(sewaFile, JSON.stringify(data, null, 2))
}

function getRemainingTime(expired) {
  const now = Date.now()
  if (expired === 'permanen') return 'permanen'
  if (now > expired) return 'expired'

  const sisa = expired - now
  const jam = Math.floor(sisa / (60 * 60 * 1000))
  const menit = Math.floor((sisa % (60 * 60 * 1000)) / (60 * 1000))
  return `${jam} jam ${menit} menit`
}

// Fungsi untuk cek dan keluar dari grup jika masa sewa habis
async function checkSewaExpiration() {
  const data = loadSewa()

  data.forEach(async (item, index) => {
    if (item.expired === 'permanen') return // Skip permanen
    if (Date.now() > item.expired) {
      try {
        await conn.groupLeave(item.jid) // Keluar dari grup
        data.splice(index, 1) // Hapus data sewa
        saveSewa(data) // Simpan data terbaru
        console.log(`Bot telah keluar dari grup ${item.jid} karena masa sewa habis.`)
      } catch (error) {
        console.error(`Gagal keluar dari grup ${item.jid}:`, error)
      }
    }
  })
}
// Set interval untuk cek setiap 5 menit
setInterval(checkSewaExpiration, 5 * 60 * 1000) // Cek setiap 5 menit

if (!global.public) {
if (!m.key.fromMe && !isCreator) return
}

const STORE_FILE = path.join(__dirname, './database/store.json');
let storeDB = fs.existsSync(STORE_FILE) ? JSON.parse(fs.readFileSync(STORE_FILE)) : {};

async function saveStore() {
  fs.writeFileSync(STORE_FILE, JSON.stringify(storeDB, null, 2));
}

const { textunbanv1, textunbanv2, textunbanv3, textunbanv4, textunbanv5, textunbanv6, textunbanv7, textunbanv8, textunbanv9, textunbanv10, textunbanv11, textunbanv12, textunbanv13, textunbanv14, textunbanv15, textunbanv16, textunbanv17, textunbanv18, textunbanv19, textunbanv20, textunbanv21 } = require('./system/metthod/textunban.js')
const { textunbanpremv1, textunbanpremv2, textunbanpremv3 } = require('./system/metthod/textunbanprem.js')

    const isUserRegistered = (userId) => {
            const data = fs.readFileSync('./system/RPG/join.json', 'utf8');
            const users = JSON.parse(data);
            return users.some(user => user.id === userId);
        };
    const ckusrjoin = m.sender
const JSON_FILE_PATH = './system/RPG/gacha_result.json';

 async function spinItem(chatId) {
    const items = ['*Mahkota Tuan Buas 👑*', '*Gacha 1x Token 🎟*', '*Emoji Respec++ 😎*', '*Logamon Chip [ More Power Rpg 🔓 ]*', '*Rebootmon Chip [ Super Power Rpg 🔓 ]*'];
    const randomIndex = Math.floor(Math.random() * items.length);
    const selectedItem = items[randomIndex];
    let gachaResults = [];
    try {
        gachaResults = JSON.parse(fs.readFileSync(JSON_FILE_PATH, 'utf-8'));
    } catch (error) {
        console.error('Error reading JSON file:', error);
    }
gachaResults.push({ chatId, item: selectedItem });
    try {
        fs.writeFileSync(JSON_FILE_PATH, JSON.stringify(gachaResults, null, 2));
        console.log('Gacha result saved to JSON file');
    } catch (error) {
        console.error('Error writing JSON file:', error);
    }
    const hasilgacha = `Selamat! Anda mendapatkan: ${selectedItem}\nJika Mendapatkan Item Yang Sama\nAnda Tidak akan Mempunyai nya lebih, Maksimal 1`;
    await reply(hasilgacha)
}

let guilds = {};
let userGuilds = {};
let battleRequests = {};

const guildsPath = './system/RPG/Guilds.json';
const userGuildsPath = './system/RPG/UserGuilds.json';

// Load data from JSON file
const loadData = (path, defaultValue) => {
    if (fs.existsSync(path)) {
        try {
            return JSON.parse(fs.readFileSync(path, 'utf-8'));
        } catch (err) {
            console.error('Error reading JSON file:', err);
            return defaultValue;
        }
    }
    return defaultValue;
};
//GUILD RPG
const pathh = './system/RPG/guilds.json';
const userPath = './system/RPG/userss.json';

// Load guilds data & sv

if (fs.existsSync(pathh)) {
    guilds = JSON.parse(fs.readFileSync(pathh, 'utf-8'));
}


let users = {};
if (fs.existsSync(userPath)) {
    users = JSON.parse(fs.readFileSync(userPath, 'utf-8'));
}

const saveGuilds = () => {
    fs.writeFileSync(pathh, JSON.stringify(guilds, null, 2));
};


const saveUsers = () => {
    fs.writeFileSync(userPath, JSON.stringify(users, null, 2));
};

    
const createGuild = (guildName, creatorId) => {
    if (guilds[guildName]) {
        return reply(`Guild dengan nama ${guildName} sudah ada.`);
    }

    if (users[creatorId] && users[creatorId].guild) {
        return reply(`Anda sudah menjadi anggota guild: ${users[creatorId].guild}`);
    }

    guilds[guildName] = { leader: creatorId, members: [] };
    users[creatorId] = { guild: guildName, role: 'leader' };

    saveGuilds();
    saveUsers();

    return reply(`Guild ${guildName} berhasil dibuat!`);
};

    const listGuilds = () => {
    const guildNames = Object.keys(guilds);
    if (guildNames.length === 0) {
        return reply("Tidak ada guild yang tersedia.");
    }
    return reply(`Daftar guild yang tersedia:\n- ${guildNames.join('\n- ')}`);
};
    
const getGuildInfo = (guildName) => {
    const guild = guilds[guildName];
    if (!guild) {
        return reply(`Guild dengan nama ${guildName} tidak ditemukan.`);
    }

    const leader = guild.leader;
    const members = guild.members;

    let info = `*${m2}< G U I L D - I N F O >${m2}* 

*Name: ${guildName}*\nLeader: ${leader}\n\nMembers:\n`;
    members.forEach((member, index) => {
        info += `\n${index + 1}. ${member}`;
    });

    return reply(info);
};

    
const joinGuild = (guildName, userId) => {
    const guild = guilds[guildName];
    if (!guild) {
        return reply(`Guild dengan nama ${guildName} tidak ditemukan.`);
    }

    if (users[userId] && users[userId].guild) {
        return reply(`Anda sudah menjadi anggota guild: ${users[userId].guild}`);
    }

    guild.members.push(userId);
    users[userId] = { guild: guildName, role: 'member' };

    saveGuilds();
    saveUsers();

    return reply(`Anda berhasil bergabung dengan guild ${guildName}!`);
};

const deleteGuild = (guildName, userId) => {
    const guild = guilds[guildName];
    if (!guild) {
        return reply(`Guild dengan nama ${guildName} tidak ditemukan.`);
    }

    if (guild.leader !== userId) {
        return reply(`Anda tidak memiliki izin untuk menghapus guild ini.`);
    }

    guild.members.forEach(member => {
        delete users[member];
    });

    delete users[guild.leader];
    delete guilds[guildName];

    saveGuilds();
    saveUsers();

    return reply(`Guild ${guildName} berhasil dihapus!`);
};

    const leaveGuild = (userId) => {
    const user = users[userId];
    if (!user || !user.guild) {
        return reply(`Anda tidak berada dalam guild manapun.`);
    }

    const guildName = user.guild;
    const guild = guilds[guildName];

    if (user.role === 'leader') {
        return reply(`Sebagai leader, Anda tidak bisa keluar dari guild. Anda harus menghapus guild.`);
    }

    guild.members = guild.members.filter(member => member !== userId);
    delete users[userId];

    saveGuilds();
    saveUsers();

    return reply(`Anda telah keluar dari guild ${guildName}.`);
};            

function getRandomFile(ext) {
return `${Math.floor(Math.random() * 10000)}${ext}`;
}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

function monospace(string) {
return '```' + string + '```'
}

   async function tiktokSearchVideo(query) {
  return new Promise(async (resolve, reject) => {
    axios("https://tikwm.com/api/feed/search", {
      headers: {
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        cookie: "current_language=en",
        "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36",
      },
      data: {
        keywords: query,
        count: 12,
        cursor: 0,
        web: 1,
        hd: 1,
      },
      method: "POST",
    }).then((res) => {
      resolve(res.data.data);
    });
  });
}

        const totalFitur = () =>{
            var mytext = fs.readFileSync("./case.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
        
if (global.autoread) {
    // Membaca pesan
    conn.readMessages([m.key]);

    // Mengecek apakah pesan datang dari grup
    if (m.key.remoteJid.endsWith('@g.us')) {
        // Mengirim status online jika pesan datang dari grup
        conn.sendPresenceUpdate('available', m.key.remoteJid);
    } else {
        // Mengirim status online jika pesan datang dari kontak pribadi
        conn.sendPresenceUpdate('available', m.key.remoteJid);
    }
}
        
            function handleFeatureToggle(feature, command) {
    if (!m.isGroup) return reply(mess.group);
    if (!isBotAdmins) return reply(mess.botAdmin);
    if (!isAdmins && !isCreator) return reply(mess.admin);
    if (args.length < 1) return reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan');

    if (args[0] === 'on') {
        db.data.chats[from][feature] = true;
        return reply(`${command} is enabled`);
    } else if (args[0] === 'off') {
        db.data.chats[from][feature] = false;
        return reply(`${command} is disabled`);
    }
    }
        
        if (isCmd && autotyping) {
if (command) { conn.readMessages([m.key])}
conn.sendPresenceUpdate('composing', from)
}

const lastGreet = global.lastGreet || (global.lastGreet = {});
// Ambil daftar JID owner
const ownerJidList = global.owner.map(x => (typeof x === 'object' ? x[0] : x)).map(n => `${n}@s.whatsapp.net`);
if (m.isGroup && ownerJidList.includes(m.sender)) {
  const now = Date.now();
  const key = `${m.chat}_${m.sender}`;
  const lastTime = lastGreet[key];
  if (lastTime !== undefined && now - lastTime > 30 * 60 * 1000) {
    conn.sendMessage(m.chat, {
      text: 'Halo Owner, selamat datang kembali 👑',
    }, { quoted: m }); // pakai reply ke pesan owner
  }
  // Update waktu terakhir muncul owner
  lastGreet[key] = now;
}

if ((from in tebakgambar2)) {
let { soal, jawaban, hadiah, waktu } = tebakgambar2[from]
if (budy.toLowerCase() == "nyerah") {
reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${tebakgambar2[from].jawaban}*`);
delete tebakgambar2[from]
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await reply(`*JAWABAN BENAR*\n\n*Penebak :* ${pushname}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 150`);
conn.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})
users.exp += 150
clearTimeout(waktu);
delete tebakgambar2[from];
} else conn.sendMessage(sender, {react: {text: '❌', key: m.key}})
}

// GAME TEBAK ANIME BY SURYA
if ((from in tebakanime)) {
let { soal, jawaban, hadiah, waktu } = tebakanime[from]
if (budy.toLowerCase() == "nyerah") {
reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete tebakanime[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await reply(`*JAWABAN BENAR*\n\n*Penebak :* ${pushname}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`);
users.exp += 200
conn.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})
clearTimeout(waktu);
delete tebakanime[from];
} else conn.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME TEBAK LAGU BY SURYA
if ((from in tebaklagu)) {
let { soal, jawaban, hadiah, waktu } = tebaklagu[from]
if (body.toLowerCase().includes(jawaban)) {
await reply(`Selamat Jawaban Kamu Benar🥳\n\nJawaban: ${jawaban}\nHadiah: $${hadiah} exp`);
users.exp += hadiah
clearTimeout(waktu);
delete tebaklagu[from];
}
}

// GAME KUIS BY SURYA
if ((from in kuis)) {
let { soal, jawaban, hadiah, waktu } = kuis[from]
if (body.toLowerCase().includes(jawaban)) {
await reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} exp`);
users.exp += hadiah
clearTimeout(waktu);
delete kuis[from];
}
}

// GAME SIAPAKAH AKU BY SURYA
if ((from in siapakahaku)) {
let { soal, jawaban, hadiah, waktu } = siapakahaku[from]
if (body.toLowerCase().includes(jawaban)) {
await reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} exp`);
users.exp += hadiah
clearTimeout(waktu);
delete siapakahaku[from];
}
}

// GAME TEBAK KALIMAT BY SURYA
if ((from in tebakkalimat)) {
let { soal, jawaban, hadiah, waktu } = tebakkalimat[from]
if (body.toLowerCase().includes(jawaban)) {
await reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} exp`);
users.exp += hadiah
clearTimeout(waktu);
delete tebakkalimat[from];
}
}

// GAME TEBAK KATA BY SURYA
if ((from in tebakkata)) {
let { soal, jawaban, hadiah, waktu } = tebakkata[from]
if (body.toLowerCase().includes(jawaban)) {
await reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} exp`);
users.exp += hadiah
clearTimeout(waktu);
delete tebakkata[from];
}
}

// GAME TEBAK LIRIK BY SURYA
if ((from in tebaklirik)) {
let { soal, jawaban, hadiah, waktu } = tebaklirik[from]
if (body.toLowerCase().includes(jawaban)) {
await reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} exp`);
users.exp += hadiah
clearTimeout(waktu);
delete tebaklirik[from];
}
}

// GAME TEBAK KIMIA BY SURYA
if ((from in tebakkimia)) {
let { soal, jawaban, hadiah, waktu } = tebakkimia[from]
if (body.toLowerCase().includes(jawaban)) {
await reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} exp`);
users.exp += hadiah
clearTimeout(waktu);
delete tebakkimia[from];
}
}

// GAME TEBAK BENDERA BY SURYA
if ((from in tebakbendera)) {
let { soal, jawaban, hadiah, waktu } = tebakbendera[from]
if (body.toLowerCase().includes(jawaban)) {
await reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan: ${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} exp`);
users.exp += hadiah
clearTimeout(waktu);
delete tebakbendera[from];
}
}

// GAME ASAH OTAK BY SURYA
if ((from in asahotak)) {
let { soal, jawaban, hadiah, waktu } = asahotak[from]
if (body.toLowerCase().includes(jawaban)) {
await reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} exp`);
users.exp += hadiah
clearTimeout(waktu);
delete asahotak[from];
}
}

// GAME SUSUN KATA BY SURYA
if ((from in susunkata)) {
let { soal, jawaban, hadiah, waktu } = susunkata[from]
if (body.toLowerCase().includes(jawaban)) {
await reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} exp`);
users.exp += hadiah
clearTimeout(waktu);
delete susunkata[from];
}
}

// GAME CAK LONTONG BY SURYA
if ((from in caklontong)) {
let { soal, jawaban, hadiah, waktu } = caklontong[from]
if (body.toLowerCase().includes(jawaban)) {
await reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} exp`);
users.exp += hadiah
clearTimeout(waktu);
delete caklontong[from];
}
}

// GAME KUIS MATH BY SURYA
if ((from in kuismath)) {
let { soal, jawaban, hadiah, waktu } = kuismath[from]
if (body.includes(jawaban)) {
reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan: ${soal}\nJawaban: ${jawaban}\nHadiah: $${hadiah} exp`);
users.exp += hadiah
clearTimeout(waktu);
delete kuismath[from];
}
}

// GAME FAMILY 100 BY SURYA
if ((from in family100)) {
let { soal, jawaban, hadiah, waktu } = family100[from]
for (let i of jawaban){
if (body.toLowerCase().includes(i)) {
let anu = jawaban.indexOf(i)
jawaban.splice(anu, 1)
await reply(`*GAME FAMILY 100*\n\nJawaban kamu benar!\nJawaban: ${i}\nHadiah: $${hadiah}\n\n${jawaban.length < 1 ? 'Selamat semua jawaban sudah tertebak!\ningin bermain lagi? kirim '+prefix+'family100' : 'Jawaban yang belum tertebak: '+jawaban.length}`)
users.exp += hadiah
}
}
if (jawaban.length < 1){
clearTimeout(waktu);
delete family100[from];
}
}



// FUNCTION PETAK BOMB BY SURYA
let pilih = "✅️", bomb = "💥";
if (sender in petakbom) {
if (!/^[1-9]|10$/i.test(body) && !commandnya) return !0;
if (petakbom[sender].petak[parseInt(body) - 1] === 1) return !0;
if (petakbom[sender].petak[parseInt(body) - 1] === 2) {
petakbom[sender].board[parseInt(body) - 1] = bomb;
petakbom[sender].pick++;
conn.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
petakbom[sender].bomb--;
petakbom[sender].nyawa.pop();

let brd = petakbom[sender].board;
if (petakbom[sender].nyawa.length < 1) {
let bombend = `*GAME TELAH BERAKHIR*\nKamu terkena bomb\n\n ${brd.join("")}\n\n*Terpilih :* ${petakbom[sender].pick}\n*Pengurangan Saldo :* Rp. 100`;
conn.sendMessage(m.chat, {
text: bombend,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: `© 2024 | B O M B`,
body: '',
thumbnailUrl: "https://telegra.ph/file/287cbe90fe5263682121d.jpg",
sourceUrl: hariini,
mediaType: 1,
renderLargerThumbnail: true
}}
})
conn.sendMessage(m.chat, {react: {text: '😂', key: m.key}})
users.exp -= 100
delete petakbom[sender];
} else await reply(`*PILIH ANGKA*\n\nKamu terkena bomb\n ${brd.join("")}\n\nTerpilih: ${petakbom[sender].pick}\nSisa nyawa: ${petakbom[sender].nyawa}`);
return !0;
}
if (petakbom[sender].petak[parseInt(body) - 1] === 0) {
petakbom[sender].petak[parseInt(body) - 1] = 1;
petakbom[sender].board[parseInt(body) - 1] = pilih;
petakbom[sender].pick++;
petakbom[sender].lolos--;
let brd = petakbom[sender].board;
if (petakbom[sender].lolos < 1) {
await reply(`*KAMU HEBAT ಠ⁠ᴥ⁠ಠ*\n\n${brd.join("")}\n\n*Terpilih :* ${petakbom[sender].pick}\n*Sisa nyawa :* ${petakbom[sender].nyawa}\n*Bomb :* ${petakbom[sender].bomb}\n*Hadiah Saldo :* Rp. 250`);
conn.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})
users.hadiah += 250
delete petakbom[sender];
} else reply(`*PILIH ANGKA*\n\n${brd.join("")}\n\nTerpilih : ${petakbom[sender].pick}\nSisa nyawa : ${petakbom[sender].nyawa}\nBomb : ${petakbom[sender].bomb}`)
}
}

// FUNCTION SUIT PVP POLLING BY DARWIN
let roof = Object.values(suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(sender))
if (roof) {
let win = ''
let tie = false
if (sender == roof.p2 && /^(acc(ept)?|y|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(body) && m.isGroup && roof.status == 'wait') {
if (/^(gamau|nanti|ga(k.)?bisa)/i.test(body)) {
users.exp -= 1000
pokl = `@${roof.p2.split('@')[0]} menolak suit, suit dibatalkan\nDan player dikenakan sanksi -1000 exp karna menolak ajakan pemain`
await conn.sendText(from, pokl, m)
delete suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = from
clearTimeout(roof.waktu)

teksbbb = `AYO PILIH SUIT MU`
ggy = `Suit telah dikirimkan ke chat

@${roof.p.split('@')[0]} dan @${roof.p2.split('@')[0]}

Silahkan pilih suit di chat masing"
klik wa.me/${botNumber.split('@')[0]}`
await conn.sendText(from, ggy, m)
if (!roof.pilih) await conn.sendPoll(roof.p, teksbbb, [`batu`,`kertas`,`gunting`, ])
if (!roof.pilih2) await conn.sendPoll(roof.p2, teksbbb, [`batu`,`kertas`,`gunting`, ])
roof.waktu_milih = setTimeout(async() => {
if (!roof.pilih && !roof.pilih2) await conn.sendMessage(from, {text: `Kedua pemain tidak niat main,\nSuit dibatalkan`})
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
users.exp -= 1000
sffp = `@${(roof.pilih ? roof.p2 : roof.p).split('@')[0]} tidak memilih suit, game berakhir\nDan Player dikenakan sanksi -1000 exp karna menolak ajakan pemain`
await conn.sendText(from, sffp, m)
}
delete suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = sender == roof.p
let jwb2 = sender == roof.p2
let g = /.gunting/i
let b = /.batu/i
let k = /.kertas/i
let reg = /^(.gunting|.batu|.kertas)/i
if (jwb && reg.test(body) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(body.toLowerCase())[0]
roof.text = body
await conn.sendMessage(from, {text: `Kamu telah memilih ${body} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`}, {quoted:m})
if (!roof.pilih2) await conn.sendMessage(roof.p2, {text: '_Lawan sudah memilih_\nSekarang giliran kamu'})
}
if (jwb2 && reg.test(body) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(body.toLowerCase())[0]
roof.text2 = body

tyu = `Kamu telah memilih ${body} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`
await conn.sendMessage(from, {text: tyu}, {quoted:m})

if (!roof.pilih) await conn.sendMessage(roof.p, {text: '_Lawan sudah memilih_\nSekarang giliran kamu'})
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
await conn.sendText(roof.asal, `${tie ? '*HASIL SERI*\n\n' : ''}@${roof.p.split('@')[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ' Menang' : ' Kalah'}\n@${roof.p2.split('@')[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ' Menang' : ' Kalah'}${tie ? '' : '\n\nHadiah : '+roof.hadiah+' exp'}`, f1('HASIL SUIT PVP', null))
if (roof.p == win) {
roof.p == win ? global.db.data.users[roof.p].exp += roof.hadiah : global.db.data.users[roof.p].exp -= roof.hadiah
} else if (roof.p2 == win) {
roof.p2 == win ? global.db.data.users[roof.p2].exp += roof.hadiah : global.db.data.users[roof.p2].exp -= roof.hadiah
}
delete suit[roof.id]
}
}

// FUNCTION TICTACTOE BY SURYA
const isTicTacToe = (from, _dir) => {
let status = false
Object.keys(_dir).forEach((i) => {
if (_dir[i].id === from) {
status = true
}
})
return status
}

const getPosTic = (from, _dir) => {
let position = null
Object.keys(_dir).forEach((i) => {
if (_dir[i].id === from) {
position = i
}
})
if (position !== null) {
return position
}
}

const KeisiSemua = (tic) => {
let status = true
for (let i of tic){
if (i !== '❌' && i !== '⭕'){
status = false
}
}
return status
}

const cekIsi = (nomor, tic) => {
let status = false
if (tic[nomor] === '❌' || tic[nomor] === '⭕'){
status = true
}
return status
}

const cekTicTac = (tic) => {
let status = false
if (tic[0] === '❌' && tic[1] === '❌' && tic[2] === '❌' || tic[0] === '⭕' && tic[1]=== '⭕' && tic[2] === '⭕'){
status = true
} else if (tic[3] === '❌' && tic[4] === '❌' && tic[5] === '❌' || tic[3] === '⭕' && tic[4] === '⭕' && tic[5] === '⭕'){
status = true
} else if (tic[6] === '❌' && tic[7] === '❌' && tic[8] === '❌' || tic[6] === '⭕' && tic[7] === '⭕' && tic[8] === '⭕'){
status = true
} else if (tic[0] === '❌' && tic[3] === '❌' && tic[6] === '❌' || tic[0] === '⭕' && tic[3] === '⭕' && tic[6] === '⭕'){
status = true
} else if (tic[1] === '❌' && tic[4] === '❌' && tic[7] === '❌' || tic[1] === '⭕' && tic[4] === '⭕' && tic[7] === '⭕'){
status = true
} else if (tic[2] === '❌' && tic[5] === '❌' && tic[8] === '❌' || tic[2] === '⭕' && tic[5] === '⭕' && tic[8] === '⭕'){
status = true
} else if (tic[0] === '❌' && tic[4] === '❌' && tic[8] === '❌' || tic[0] === '⭕' && tic[4] === '⭕' && tic[8] === '⭕'){
status = true
} else if (tic[2] === '❌' && tic[4] === '❌' && tic[6] === '❌' || tic[2] === '⭕' && tic[4] === '⭕' && tic[6] === '⭕'){
status = true
}
return status 
}

if (isTicTacToe(from, tictactoe)) {
try {
// TicTacToe
if (isTicTacToe(from, tictactoe)){
let nomor = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let posi = tictactoe[from]
let anu = posi.TicTacToe
if (posi.status === null){
if (sender === posi.ditantang){
if (body.toLowerCase() === 'y'){
the = `@${posi.ditantang.split('@')[0]} menerima tantangan

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Giliran @${posi.penantang.split('@')[0]}`
conn.sendText(from, the, m)

tictactoe[from].status = true
} else if (body.toLowerCase() === 'n'){
users.exp -= 1000
the1 = `@${posi.ditantang.split('@')[0]} menolak, game dibatalkan\nDan Player dikenakan sanksi -1000 exp karna menolak ajakan pemain`
conn.sendText(from, the1, m)
delete tictactoe[from];
}
}
} else if (posi.status === true){
if (sender === posi.penantang){
for (let i of nomor){
if (Number(body) === i){
if (cekIsi(Number(body) - 1, anu)) return reply(`Nomor tersebut sudah terisi`)
tictactoe[from].TicTacToe[Number(body) - 1] = '❌'
if (cekTicTac(tictactoe[from].TicTacToe)){
the2 = `@${posi.penantang.split('@')[0]} Menang

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Hadiah : ${posi.hadiah} exp
Ingin bermain lagi? ${prefix}tictactoe`
conn.sendText(from, the2, m)
global.db.data.users[posi.penantang].exp += posi.hadiah
global.db.data.users[posi.ditantang].exp -= posi.hadiah
delete tictactoe[from];
} else if (KeisiSemua(anu)) {
the3 = `*HASIL SERI*

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Ingin bermain lagi? ${prefix}tictactoe`
conn.sendText(from, the3, m)

delete tictactoe[from];
} else {
the4 = `@${posi.penantang.split('@')[0]} telah mengisi

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Giliran @${posi.ditantang.split('@')[0]}`
conn.sendText(from, the4, m)

tictactoe[from].status = false
}
}
}
}
} else if (posi.status === false){
if (sender === posi.ditantang){
for (let i of nomor){
if (Number(body) === i){
if (cekIsi(Number(body) - 1, anu)) return reply(`Nomor tersebut sudah terisi`)
tictactoe[from].TicTacToe[Number(body) - 1] = '⭕' 
if (cekTicTac(anu)){
the5 = `@${posi.ditantang.split('@')[0]} Menang

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Hadiah : ${posi.hadiah} exp
Ingin bermain lagi? ${prefix}tictactoe`
conn.sendText(from, the5, m)
global.db.data.users[posi.ditantang].exp += posi.hadiah
global.db.data.users[posi.penantang].exp -= posi.hadiah
delete tictactoe[from];
} else if (KeisiSemua(anu)) {
the6 = `Hasil Seri

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Ingin bermain lagi? ${prefix}tictactoe`
conn.sendText(from, the6, m)

delete tictactoe[from];
} else {
the7 = `@${posi.ditantang.split('@')[0]} telah mengisi

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Giliran @${posi.penantang.split('@')[0]}`
conn.sendText(from, the7, m)

tictactoe[from].status = true
}
}
}
}
}
}
} catch (err){
console.log(chalk.redBright('[ ERROR TICTACTOE ]'), err)
}
}

async function Uguu(buffer, filename) {
  const form = new FormData()
  form.append('files[]', buffer, { filename })
 
  const { data } = await axios.post('https://uguu.se/upload.php', form, {
    headers: form.getHeaders(),
  })
 
  if (data.files && data.files[0]) {
    return data.files[0].url
  } else {
    throw new Error('Upload gagal.')
  }
}


// ───────────────────────────────────────────────────────────────────────────────乂 🥀 SETTINGS REPLY CMD ───────────────────────────────────────────────────────────────乂 \\
async function reply(txt) {
const maouvpn = {      
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: `𝙈𝘼𝙊𝙐𝙍𝘼𝙁𝘼 𝙑𝙋𝙉-𝙏𝙐𝙉𝙉𝙀𝙇 𝙋𝙍𝙀𝙈𝙄𝙐𝙈`,
newsletterJid: `120363328148463101@newsletter`,
},
externalAdReply: {  
showAdAttribution: true,
title: `- maourafa AI`,
body: '',
thumbnailUrl: `https://files.catbox.moe/b2a5ky.jpg`,
sourceUrl: global.website,
},
},
text: txt,
}
return conn.sendMessage(m.chat, maouvpn, {
quoted: m,
})
}

const reply2 = (teks) => {
conn.sendMessage(from, { text : teks }, { quoted : m })
}

const example = (teks) => {
return `\n *Contoh Penggunaan :*\n Ketik *${prefix+command}* ${teks}\n`
}

async function daftar(teks) {
  const nedd = {
    text: teks,
    contextInfo: {
      mentionedJid: m.mentionedJid ? m.mentionedJid : [m.sender],
      forwardingScore: 9999999,
      isForwarded: true,
      businessMessageForwardInfo: {
        businessOwnerJid: `${global.owner}@s.whatsapp.net`
      },
      externalAdReply: {
        showAdAttribution: true,
        containsAutoReply: true,
        title: 'ɴᴏᴛ ᴀᴄᴄᴇs!!',
        mediaType: 1, // 1 = photo, 2 = video
        thumbnail: null, // jangan pakai thumbnail kecil
        mediaUrl: 'https://img12.pixhost.to/images/1490/584818417_6726.jpg', // ganti dengan URL gambar langsung (bukan thumbnail)
        sourceUrl: 'https://www.youtube.com/@maourafa',
        renderLargerThumbnail: true // inilah yang bikin besar
      }
    }
  }
  return await conn.sendMessage(m.chat, nedd, { quoted: m.quoted ? m.quoted : m })
}

const qtext = {
	key: { remoteJid: "status@broadcast", participant: "0@s.whatsapp.net" },
	message: { "extendedTextMessage": { "text": "MAOURAFA" } }
}

const qloc = {
	key: { participant: '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },
	message: { locationMessage: { name: `WhatsApp Bot 2025`, jpegThumbnail: "" } }
}

const qlocJpm = {
	key: { participant: '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },
	message: { locationMessage: { name: `MAOURAFA`, jpegThumbnail: "" } }
}

const qtoko = {
	key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },
	message: {
		"productMessage": {
			"product": {
				"productImage": { "mimetype": "image/jpeg", "jpegThumbnail": "" },
				"title": `Payment By maourafa`,
				"description": null,
				"currencyCode": "IDR",
				"priceAmount1000": "999999999999999",
				"retailerId": `Powered By maourafa`,
				"productImageCount": 1
			},
			"businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}

const qlive = {
	key: { participant: '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },
	message: { liveLocationMessage: { caption: `©maou`, jpegThumbnail: "" } }
}


// ───────────────────────────────────────────────────────────────────────────────乂 🥀 SETTINGS CONSOLE CMD ───────────────────────────────────────────────────────────────乂 \\
if (m.message) {
    const time = chalk.yellow(new Date().toLocaleString());
    const msgType = chalk.cyan(budy || m.mtype);
    const sender = `${chalk.green(pushname)} ${chalk.gray(`<${m.sender}>`)}`;
    const location = m.isGroup
        ? `${chalk.blue('Group:')} ${chalk.yellow(groupName)} ${chalk.gray(`(${m.chat})`)}`
        : chalk.blue('Private Chat');

    console.log(
`${chalk.white('┌' + '─'.repeat(15) + '[ NEW MESSAGE ]' + '─'.repeat(16) + '┐')}
📅 ↳ ${time}
💬 ↳ ${msgType}
🙋 ↳ ${sender}
📍 ↳ ${location}
${chalk.white('└' + '─'.repeat(50) + '┘')}`
    );
}


// ───────────────────────────────────────────────────────────────────────────────乂 🥀 SETTINGS DATABASE ───────────────────────────────────────────────────────────────乂 \\
try {
ppuser = await conn.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isPrem ? 1000 : 30
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.money)) user.money = 0
if (!isNumber(user.chip)) user.chip = 0
if (!isNumber(user.atm)) user.atm = 0
if (!isNumber(user.fullatm)) user.fullatm = 0
if (!isNumber(user.bank)) user.bank = 0
if (!isNumber(user.health)) user.health = 100
if (!isNumber(user.potion)) user.potion = 0
if (!isNumber(user.trash)) user.trash = 0
if (!isNumber(user.wood)) user.wood = 0
if (!isNumber(user.rock)) user.rock = 0
if (!isNumber(user.string)) user.string = 0
if (!isNumber(user.petfood)) user.petfood = 0
if (!isNumber(user.emerald)) user.emerald = 0
if (!isNumber(user.diamond)) user.diamond = 0
if (!isNumber(user.gold)) user.gold = 0
if (!isNumber(user.botol)) user.botol = 0
if (!isNumber(user.kardus)) user.kardus = 0
if (!isNumber(user.kaleng)) user.kaleng = 0
if (!isNumber(user.gelas)) user.gelas = 0
if (!isNumber(user.plastik)) user.plastik = 0
if (!isNumber(user.iron)) user.iron = 0
if (!isNumber(user.common)) user.common = 0
if (!isNumber(user.uncommon)) user.uncommon = 0
if (!isNumber(user.mythic)) user.mythic = 0
if (!isNumber(user.legendary)) user.legendary = 0
if (!isNumber(user.umpan)) user.umpan = 0
if (!isNumber(user.pet)) user.pet = 0
if (!isNumber(user.paus)) user.paus = 0
if (!isNumber(user.kepiting)) user.kepiting = 0
if (!isNumber(user.gurita)) user.gurita = 0
if (!isNumber(user.cumi)) user.cumi = 0
if (!isNumber(user.buntal)) user.buntal = 0
if (!isNumber(user.dory)) user.dory = 0
if (!isNumber(user.lumba)) user.lumba = 0
if (!isNumber(user.lobster)) user.lobster = 0
if (!isNumber(user.hiu)) user.hiu = 0
if (!isNumber(user.udang)) user.udang = 0
if (!isNumber(user.orca)) user.orca = 0
if (!isNumber(user.banteng)) user.banteng = 0
if (!isNumber(user.gajah)) user.gajah = 0
if (!isNumber(user.harimau)) user.harimau = 0
if (!isNumber(user.kambing)) user.kambing = 0
if (!isNumber(user.panda)) user.panda = 0
if (!isNumber(user.buaya)) user.buaya = 0
if (!isNumber(user.kerbau)) user.kerbau = 0
if (!isNumber(user.sapi)) user.sapi = 0
if (!isNumber(user.monyet)) user.monyet = 0
if (!isNumber(user.babihutan)) user.babihutan = 0
if (!isNumber(user.babi)) user.babi = 0
if (!isNumber(user.ayam)) user.ayam = 0
if (!isNumber(user.lastadventure)) user.lastadventure = 0
if (!isNumber(user.lastkill)) user.lastkill = 0
if (!isNumber(user.lastmisi)) user.lastmisi = 0
if (!isNumber(user.lastdungeon)) user.lastdungeon = 0
if (!isNumber(user.lastwar)) user.lastwar = 0
if (!isNumber(user.lastsda)) user.lastsda = 0
if (!isNumber(user.lastduel)) user.lastduel = 0
if (!isNumber(user.lastmining)) user.lastmining = 0
if (!isNumber(user.lasthunt)) user.lasthunt = 0
if (!isNumber(user.lastgift)) user.lastgift = 0
if (!isNumber(user.lastberkebon)) user.lastberkebon = 0
if (!isNumber(user.lastdagang)) user.lastdagang = 0
if (!isNumber(user.lasthourly)) user.lasthourly = 0
if (!isNumber(user.lastbansos)) user.lastbansos = 0
if (!isNumber(user.lastrampok)) user.lastrampok = 0
if (!isNumber(user.lastclaim)) user.lastclaim = 0
if (!isNumber(user.lastnebang)) user.lastnebang = 0
if (!isNumber(user.lastweekly)) user.lastweekly = 0
if (!isNumber(user.lastmonthly)) user.lastmonthly = 0
if (!isNumber(user.apel)) user.apel = 0
if (!isNumber(user.anggur)) user.anggur = 0
if (!isNumber(user.jeruk)) user.jeruk = 0
if (!isNumber(user.mangga)) user.mangga = 0
if (!isNumber(user.pisang)) user.pisang = 0
if (!isNumber(user.makanan)) user.makanan = 0
if (!isNumber(user.bibitanggur)) user.bibitanggur = 0
if (!isNumber(user.bibitpisang)) user.bibitpisang = 0
if (!isNumber(user.bibitapel)) user.bibitapel = 0
if (!isNumber(user.bibitmangga)) user.bibitmangga = 0
if (!isNumber(user.bibitjeruk)) user.bibitjeruk = 0
if (!isNumber(user.horse)) user.horse = 0
if (!isNumber(user.exp)) user.exp = 0
if (!isNumber(user.horseexp)) user.horseexp = 0
if (!isNumber(user.cat)) user.cat = 0
if (!isNumber(user.catexp)) user.catexp = 0
if (!isNumber(user.fox)) user.fox = 0
if (!isNumber(user.foxhexp)) user.foxexp = 0
if (!isNumber(user.dog)) user.foxexp = 0
if (!isNumber(user.dogexp)) user.dogexp = 0
if (!isNumber(user.robo)) user.robo = 0
if (!isNumber(user.roboexp)) user.roboexp = 0
if (!isNumber(user.horselastfeed)) user.horselastfeed = 0
if (!isNumber(user.catlastfeed)) user.catlastfeed = 0
if (!isNumber(user.robolastfeed)) user.robolastfeed = 0
if (!isNumber(user.foxlastfeed)) user.foxlastfeed = 0
if (!isNumber(user.doglastfeed)) user.doglastfeed = 0
if (!isNumber(user.robo)) user.robo = 0
if (!isNumber(user.robodurability)) user.robodurability = 0
if (!isNumber(user.armor)) user.armor = 0
if (!isNumber(user.armordurability)) user.armordurability = 0
if (!isNumber(user.sword)) user.sword = 0
if (!isNumber(user.sworddurability)) user.sworddurability = 0
if (!isNumber(user.pickaxe)) user.pickaxe = 0
if (!isNumber(user.pickaxedurability)) user.pickaxedurability = 0
if (!isNumber(user.fishingrod)) user.fishingrod = 0
if (!isNumber(user.fishingroddurability)) user.fishingroddurability = 0
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!isNumber(user.level)) user.level = 0
if (!isNumber(user.rank)) user.rank = 700
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
money: 30000,
exp: 0,
limit: 50,
freelimit: 0,
lastclaim: 0,
skata: 0,
registered: false,
name: m.name,
pc: 0,
joinlimit: 1,
age: -1,
regTime: -1,
unreg: false,
afk: -1,
afkReason: '',
banned: false,
bannedTime: 0,
warning: 0,
level: 0,
rokets: 0,
role: 'Beginner',
skill: '',
ojekk: 0,
WarnReason: '',
chip: 0,
bank: 0,
atm: 0,
fullatm: 0,
health: 100,
potion: 10,
trash: 0,
rank: 700,
wood: 0,
rock: 0,
string: 0,
emerald: 0,
diamond: 0,
gold: 0,
iron: 0,
common: 0,
uncommon: 0,
mythic: 0,
legendary: 0,
umpan: 0,
pet: 0,
horse: 0,
horseexp: 0,
horselastfeed: 0,
cat: 0,
catexp: 0,
catlastfeed: 0,
fox: 0,
foxexp: 0,
foxlastfeed: 0,
robo: 0,
roboexp: 0,
robolastfeed: 0,
dog: 0,
dogexp: 0,
doglastfeed: 0,
paus: 0,
kepiting: 0,
gurita: 0,
cumi: 0,
buntal: 0,
dory: 0,
lumba: 0,
lobster: 0,
hiu: 0,
udang: 0,
ikan: 0,
orca: 0,
banteng: 0,
harimau: 0,
gajah: 0,
kambing: 0,
buaya: 0,
kerbau: 0,
sapi: 0,
monyet: 0,
babi: 0,
ayam: 0,
armor: 0,
armordurability: 0,
sword: 0,
sworddurability: 0,
pickaxe: 0,
pickaxedurability: 0,
fishingrod: 0,
fishingroddurability: 0,
robo: 0,
robodurability: 0,
apel: 20,
pisang: 0,
anggur: 0,
mangga: 0,
jeruk: 0,
lastadventure: 0,
lastkill: 0,
lastmisi: 0,
lastdungeon: 0,
lastwar: 0,
lastsda: 0,
lastduel: 0,
lastmining: 0,
lasthunt: 0,
lastgift: 0,
lastberkebon: 0,
lastdagang: 0,
lasthourly: 0,
lastbansos: 0,
lastrampok: 0,
lastclaim: 0,
lastnebang: 0,
lastweekly: 0,
lastmonthly: 0
}
} catch (err) {
console.log(err)
}

let chats = global.db.data.chats[from]
               if (typeof chats !== 'object') global.db.data.chats[from] = {}
               if (chats) {
		       	  if (!('antitagsw' in chats)) chats.antitagsw = false
                  if (!('antipromotion' in chats)) chats.antipromotion = false 
                  if (!('antilink)' in chats)) chats.antilink = false
               } else global.db.data.chats[from] = {
                  antitagsw: false,
                  antilink: false,
                  antipromotion: false,                        
               }
               
let setting = global.db.data.settings[botNumber]
if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
if (setting) {
 if (!('autoread' in setting)) setting.autoread = true
} else global.db.data.settings[botNumber] = {
 autoread: true,
}

if (db.data.chats[m.chat].antipromotion) {
if (budy.match(`Buy|Promo|Sell|tiktok booster|ml booster|bgmi selling|selling uc|selling diamonds|selling coin|selling id|selling account|selling ids|buy account|sell account|buy id|sell id|instagram followers|tiktok followers|buy panel|sell panel|sell bug bot|buy bug bot|buy bot bug|sell bot bug|adminpanel5kpm|open jasa push member grup|yangmaubuypanelpm|admin panel 10k pm|Hanya menyediakan Jasa Push Member Grup|admin panel 5k pm|yang mau beli panel murah pm|list harga panel by|list harga vps|LIST HARGA VPS|OPEN JASA PUSH MEMBER GRUP|READY|Redy|LIST HARGA PANEL BY|list harga panel|menyediakan|MENYEDIAKAN|OPEN MURBUG|open|OPEN|PANEL READY|PANEL|PANNEL READY|panel|panel ready|pannel ready minat pm|mau panel pm|MAU PANNEL PM|Admin panel ready|ADMIN PANEL READY|Chat aja om ready selalu|OPEN JASA INSTALL|open jasa installMENYEDIAKAN JASA INSTALL|menyediakan jasa install`)) {
if (!isBotAdmins) return
if(isCreator) return
if (isAdmins) return
conn.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
conn.sendMessage(from, {text:`\`\`\`「 Promotion Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a promotion message and successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
}
}

if (db.data.chats[m.chat].antitagsw) {
    if (m.mtype === "groupStatusMentionMessage") {
        if (!(m.key.fromMe || isAdmins || isCreator)) {
            reply(`*[ DETECK ]*\n${pushname} Terdeteksi Tag Status WhatsApp di grup, pesan akan dihapus`);

            try {
                await conn.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: false,
                        id: m.key.id,
                        participant: m.key.participant || m.participant || m.key.remoteJid
                    }
                });
            } catch (e) {
                console.error('Gagal menghapus pesan tag status:', e);
            }
        }
    }
}

if (antilink.includes(m.chat)) {
      if (!isBotAdmins) return;
      if (!isAdmins && !isCreator && !m.fromMe) {
        var link =
          /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi;
        if (link.test(m.text)) {
          var gclink =
            `https://chat.whatsapp.com/` + (await conn.groupInviteCode(m.chat));
          var isLinkThisGc = new RegExp(gclink, "i");
          var isgclink = isLinkThisGc.test(m.text);
          if (isgclink) return;
          let delet = m.key.participant;
          let bang = m.key.id;
          await conn.sendMessage(
            m.chat,
            {
              text: `@${
                m.sender.split("@")[0]
              } Terdeteksi Share Link Maaf Akab di kick`,
              contextInfo: {
                mentionedJid: [m.sender],
                externalAdReply: {
                  thumbnail: fs.readFileSync("./media/warning.jpg"),
                  title: "｢ LINK DETECTED ｣",
                  previewType: "PHOTO",
                },
              },
            },
            { quoted: m }
          );
          await conn.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromMe: false,
              id: bang,
              participant: delet,
            },
          });
          await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove");
        }
      }
    }

    if (antilink2.includes(m.chat)) {
      if (!isBotAdmins) return;
      if (!isAdmins && !isCreator && !m.fromMe) {
        var link =
          /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi;
        if (link.test(m.text)) {
          var gclink =
            `https://chat.whatsapp.com/` + (await conn.groupInviteCode(m.chat));
          var isLinkThisGc = new RegExp(gclink, "i");
          var isgclink = isLinkThisGc.test(m.text);
          if (isgclink) return;
          let delet = m.key.participant;
          let bang = m.key.id;
          await conn.sendMessage(
            m.chat,
            {
              text: `@${
                m.sender.split("@")[0]
              } Telah Mengirim Link Group Maaf Pesan Akan Di Hapus`,
              contextInfo: {
                mentionedJid: [m.sender],
                externalAdReply: {
                  thumbnail: fs.readFileSync("./media/warning.jpg"),
                  title: "｢ DETECK !!｣",
                  previewType: "PHOTO",
                },
              },
            },
            { quoted: m }
          );
          await conn.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromMe: false,
              id: bang,
              participant: delet,
            },
          });
        }
      }
    }

        if (db.data.users[m.sender].exp > 200) {
            try {
                var ppuser = await conn.profilePictureUrl(m.sender, 'image');
            } catch (err) {
                ppuser = 'https://files.catbox.moe/nwvkbt.png';
            }

            let ppnyauser = ppuser;

            let background = "https://telegra.ph/file/ce0d92af0f361dd51a6ea.png";
            let avatar = ppnyauser;

            db.data.users[m.sender].exp = 0;
            db.data.users[m.sender].level += 1;
            await sleep(1000);

            const options = {
                backgroundURL: background,
                avatarURL: avatar,
                fromLevel: `${db.data.users[m.sender].level - 1}`,
                toLevel: `${db.data.users[m.sender].level}`,
                name: db.data.users[m.sender].nama
            };

            const buffz = await levelUp(options);

            let caption = `*🎉 C O N G R A T S 🎉*\n\n*${db.data.users[m.sender].level - 1}* ➔ *${db.data.users[m.sender].level}*\n\n• 🧬 Level Sebelumnya : ${db.data.users[m.sender].level - 1}\n• 🧬 Level Baru : ${db.data.users[m.sender].level}\n• Pada Jam : ${new Date().toLocaleString("id-ID")}\n\n*Pesan:*\nSelamat Ya Kak 🥇\nHebat Levelmu Naik`;

            await conn.sendMessage(m.chat, {
                image: buffz,
                caption: caption
            }, {
                quoted: m
            });
        }
        
                if (db.data.users[m.sender].rank < 1) {
            db.data.users[m.sender].rank = 0;
        }

        function pangkat(rankid) {
            var levelRole = db.data.users[rankid].rank
            var rankid = 1
            var role = {
                rank: 'Bronze I',
                name: 'Bronze',
                id: 1
            }
            if (levelRole <= 300) {
                role = {
                    rank: 'Bronze I',
                    name: 'Bronze',
                    id: 1
                }
            } else if (levelRole <= 500) {
                role = {
                    rank: 'Bronze II',
                    name: 'Bronze',
                    id: 2
                }
            } else if (levelRole <= 700) {
                role = {
                    rank: 'Bronze III',
                    name: 'Bronze',
                    id: 3
                }
            } else if (levelRole <= 900) {
                role = {
                    rank: 'Silver I',
                    name: 'Silver',
                    id: 1
                }
            } else if (levelRole <= 1200) {
                role = {
                    rank: 'Silver II',
                    name: 'Silver',
                    id: 2
                }
            } else if (levelRole <= 1500) {
                role = {
                    rank: 'Silver III',
                    name: 'Silver',
                    id: 3
                }
            } else if (levelRole <= 1600) {
                role = {
                    rank: 'Gold I',
                    name: 'Gold',
                    id: 1
                }
            } else if (levelRole <= 1725) {
                role = {
                    rank: 'Gold II',
                    name: 'Gold',
                    id: 2
                }
            } else if (levelRole <= 1850) {
                role = {
                    rank: 'Gold III',
                    name: 'Gold',
                    id: 3
                }
            } else if (levelRole <= 1975) {
                role = {
                    rank: 'Gold IV',
                    name: 'Gold',
                    id: 4
                }
            } else if (levelRole <= 2100) {
                role = {
                    rank: 'Platinum I',
                    name: 'Platinum',
                    id: 1
                }
            } else if (levelRole <= 2225) {
                role = {
                    rank: 'Platinum II',
                    name: 'Platinum',
                    id: 2
                }
            } else if (levelRole <= 2350) {
                role = {
                    rank: 'Platinum III',
                    name: 'Platinum',
                    id: 3
                }
            } else if (levelRole <= 2475) {
                role = {
                    rank: 'Platinum IV',
                    name: 'Platinum',
                    id: 4
                }
            } else if (levelRole <= 2600) {
                role = {
                    rank: 'Diamond I',
                    name: 'Diamond',
                    id: 1
                }
            } else if (levelRole <= 2750) {
                role = {
                    rank: 'Diamond II',
                    name: 'Diamond',
                    id: 2
                }
            } else if (levelRole <= 2900) {
                role = {
                    rank: 'Diamond III',
                    name: 'Diamond',
                    id: 3
                }
            } else if (levelRole <= 3050) {
                role = {
                    rank: 'Diamond IV',
                    name: 'Diamond',
                    id: 4
                }
            } else if (levelRole <= 3200) {
                role = {
                    rank: 'Heroic',
                    name: 'Heroic',
                    id: 0
                }
            } else if (levelRole <= 3500) {
                role = {
                    rank: 'Heroic ✩',
                    name: 'Heroic',
                    id: 1
                }
            } else if (levelRole <= 4000) {
                role = {
                    rank: 'Heroic ✩✩',
                    name: 'Heroic',
                    id: 2
                }
            } else if (levelRole <= 4350) {
                role = {
                    rank: 'Heroic ✩✩✩',
                    name: 'Heroic',
                    id: 3
                }
            } else if (levelRole <= 5050) {
                role = {
                    rank: 'Master ✯',
                    name: 'Master',
                    id: 1
                }
            } else if (levelRole <= 5400) {
                role = {
                    rank: 'Master ✯✯',
                    name: 'Master',
                    id: 2
                }
            } else if (levelRole <= 6500) {
                role = {
                    rank: 'Master ✯✯✯',
                    name: 'Master',
                    id: 3
                }
            } else if (levelRole <= 7150) {
                role = {
                    rank: 'GrandMaster',
                    name: 'GrandMaster',
                    id: 0
                }
            } else if (levelRole <= 7700) {
                role = {
                    rank: 'GrandMaster ✩',
                    name: 'GrandMaster',
                    id: 1
                }
            } else if (levelRole <= 9100) {
                role = {
                    rank: 'GrandMaster ✩✩',
                    name: 'GrandMaster',
                    id: 2
                }
            } else if (levelRole <= 10800) {
                role = {
                    rank: 'GrandMaster ✩✩✩',
                    name: 'GrandMaster',
                    id: 3
                }
            } else if (levelRole <= 20000) {
                role = {
                    rank: 'GrandMaster ✩✩✩✩',
                    name: 'GrandMaster',
                    id: 4
                }
            }
            return role
        }


// ───────────────────────────────────────────────────────────────────────────────乂 🥀 SETTINGS DOIYOUMEAN ───────────────────────────────────────────────────────────────乂 \\
if (prefix && command) {
let caseNames = getCaseNames();
function getCaseNames() {
const fs = require('fs');
try {
const data = fs.readFileSync('case.js', 'utf8');
const casePattern = /case\s+'([^']+)'/g;
const matches = data.match(casePattern);
if (matches) {
const caseNames = matches.map(match => match.replace(/case\s+'([^']+)'/, '$1'));
return caseNames;
} else {
return [];
} } catch (err) {
console.log('Terjadi kesalahan:', err);
return [];
}}
let noPrefix = command
let mean = didyoumean(noPrefix, caseNames);
let sim = similarity(noPrefix, mean);
let similarityPercentage = parseInt(sim * 100);
if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
let response = `ᴍᴀᴀғ, ᴄᴏᴍᴍᴀɴᴅ ʏᴀɴɢ ᴀɴᴅᴀ ʙᴇʀɪᴋᴀɴ ᴛɪᴅᴀᴋ ᴀᴅᴀ ᴀᴛᴀᴜ sᴀʟᴀʜ, ᴀᴘᴀᴋᴀʜ ɪɴɪ ʏᴀɴɢ ᴅɪ ᴍᴀᴋsᴜᴅ? :\n\n•> ${prefix+mean}\n•> Kemiripan: ${similarityPercentage}%`

// Ganti reply dengan kirim button + gambar
const buttons = [
  { buttonId: prefix + mean, buttonText: { displayText: prefix + mean }, type: 1 }
];

const buttonMessage = {
  image: { url: 'https://cloudkuimages.guru/uploads/images/6816373d3e940.jpg' }, // Ganti sesuai kebutuhan
  caption: response,
  footer: 'ᴊɪᴋᴀ ʙᴇɴᴀʀ sɪʟᴀʜᴋᴀɴ ᴛᴇᴋᴀɴ ᴛᴏᴍʙᴏʟ ᴅɪ ʙᴀᴡᴀʜ',
  buttons: buttons,
  headerType: 4
};

await conn.sendMessage(m.chat, buttonMessage, { quoted: m });
}}
        
        
// ───────────────────────────────────────────────────────────────────────────────乂 🥀 BATAS ───────────────────────────────────────────────────────────────乂 \\      
switch (command) {
case "menu": {
if (!isRegistered) return daftar(mess.notregist)
let menu = `Hii ${pushname}\nsᴀʏᴀ ᴀᴅᴀʟᴀʜ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ ʙᴇʀʙᴀsɪs ɴᴏᴅᴇ ᴊs, ʏᴀɴɢ ᴅɪ ʙᴜᴀᴛ ᴏʟᴇʜ 𝙈𝘼𝙊𝙐𝙍𝘼𝙁𝘼`
conn.sendMessage(m.chat, {
  footer: `𝙈𝘼𝙊𝙐𝙍𝘼𝙁𝘼`,
  buttons: [
    {
      buttonId: 'action',
      buttonText: { displayText: 'ini pesan interactiveMeta' },
      type: 4,
      nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Click To List',
          sections: [
            {
              title: 'INFORMATION',
              rows: [
                {
                  title: 'Script 📥',
                  description: 'Display Script maourafa',
                  id: '.sc'
                },
                {
                  title: 'Donasi 💳',
                  description: 'Mendukung Perkembangan',
                  id: '.donasi'
                }
              ]
            },
            {
              title: 'LIST MENU',
              highlight_label: 'Recomend',
              rows: [
                {
                  title: 'AllMenu ⚡',
                  description: 'Menampilkan Allmenu',
                  id: '.menuall'
                },
                {
                  title: 'MainMenu 🚂',
                  description: 'Menampilkan Main Menu',
                  id: '.menumain'
                },
                {
                  title: 'MakerMenu 🗺',
                  description: 'Menampilkan Maker Menu',
                  id: '.menumaker'
                }, 
                {
                  title: 'ConvertMenu 🚀',
                  description: 'Menampilkan main Menu',
                  id: '.menuconvert'
                }, 
                {
                  title: 'TolsMenu 🔗',
                  description: 'Menampilkan Tols Menu',
                  id: '.menutols'
                }, 
                {
                  title: 'SearchMenu 📡',
                  description: 'Menampilkan Search Menu',
                  id: '.menusearch'
                }, 
                {
                  title: 'DownloadMenu 📥',
                  description: 'Menampilkan Download Menu',
                  id: '.menudownload'
                }, 
                {
                  title: 'GroupMenu 🗝',
                  description: 'Menampilkan Group Menu',
                  id: '.menugroup'
                }, 
                {
                  title: 'PanelMenu 🕹',
                  description: 'Menampilkan Panel Menu',
                  id: '.menupanel'
                }, 
                {
                  title: 'RpgMenu 🎮',
                  description: 'Menampilkan Rpg Menu',
                  id: '.menurpg'
                }, 
                {
                  title: 'FunMenu 📽',
                  description: 'Menampilkan Fun Menu',
                  id: '.menufun'
                }, 
                {
                  title: 'PrimbonMenu ♓',
                  description: 'Menampilkan Primbon Menu',
                  id: '.menuprimbon'
                }, 
                {
                  title: 'GameMenu 🎮',
                  description: 'Menampilkan Menu Menu',
                  id: '.menugame'     
                }, 
                {
                  title: 'QuotesMenu 🩷',
                  description: 'Menampilkan Quotes Menu',
                  id: '.menuquotes'
                }, 
                {
                  title: 'AnimeMenu 😍',
                  description: 'Menampilkan Anime Menu',
                  id: '.menuanime'
                }, 
                {
                  title: 'RandomMenu 🛬',
                  description: 'Menampilkan Random Menu',
                  id: '.menurandom'
                }, 
                {
                  title: 'AiMenu 🤖',
                  description: 'Menampilkan Ai Menu',
                  id: '.menuai'
                },
                {
                  title: 'UnbanMenu 👿',
                  description: 'Menampilkan Textunban Menu',
                  id: '.unbanmenu'
                },               
                {
                  title: 'AnonyMenu 💾',
                  description: 'Menampilkan Anonim Menu',
                  id: '.mano'
                }, 
                {
                  title: 'StoreMenu 💳',
                  description: 'Menampilkan Store Menu',
                  id: '.mst'
                },
                {
                  title: 'SoundMenu 🎤',
                  description: 'Menampilkan Sound Menu',
                  id: '.smenu'
                },
                {
                  title: 'NsfwMenu 1⃣8⃣',
                  description: 'Menampilkan Nsfw Menu',
                  id: '.mnsfw'
                }
              ]
            }
          ]
        })
      }
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: { url: 'https://img12.pixhost.to/images/1260/581261850_rulzz-official.jpg' },
  caption: menu,
  contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    mentionedJid: [sender],
    forwardedNewsletterMessageInfo: {
      newsletterName: '— maourafa AI WhatsApp Bot',
      newsletterJid: '120363328148463101@newsletter'
    },
    externalAdReply: {
      title: 'maourafa - AI',
      body: 'By maourafa',
      thumbnailUrl: 'https://files.catbox.moe/4n96c1.jpg',
      sourceUrl: '',
      mediaType: 1,
      renderLargerThumbnail: false
    }
  }
}, { quoted: m });
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'allmenu': case 'allcmd': case 'menuall': {
if (!isRegistered) return daftar(mess.notregist)
let limitz = db.data.users[m.sender].limit;
let kontol = `So Hello ${pushname}\nɪ ᴀᴍ maouvpn, ᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ʙᴀꜱᴇᴅ ᴏɴ ɴᴏᴅᴇᴊꜱ ᴊᴀᴠᴀ ꜱᴄʀɪᴘᴛ. ɪ ᴡᴀꜱ ᴄʀᴇᴀᴛᴇᴅ ʙᴀꜱᴇᴅ ᴏɴ ᴄᴏᴅᴇ, ᴀɴᴅ ᴛʜᴇ ᴘᴇʀꜱᴏɴ ᴡʜᴏ ᴄʀᴇᴀᴛᴇᴅ ᴍᴇ ɪꜱ 𝙈𝘼𝙊𝙐𝙍𝘼𝙁𝘼. ᴛᴏ ᴜꜱᴇ ᴛʜᴇ ʙᴏᴛ, ᴡᴇ ʜᴏᴘᴇ ᴛʜᴀᴛ ᴜꜱᴇʀꜱ ᴅᴏ ɴᴏᴛ ꜱᴘᴀᴍ.

${yy1}[ maouvpn INFO ]${yy1}
┌  ◦ ɴᴀᴍᴇ ʙᴏᴛ : ${global.namabot}
│  ◦ ᴠᴇʀsɪᴏɴ : ${global.version}
│  ◦ ʙᴀɪʟᴇʏs : ${global.baileys}
│  ◦ ᴄʀᴇᴀᴛᴏʀ : ${global.ownerName}
└  ◦ ғʀᴇғɪx : [ . ]

${yy1}[ USERS INFO ]${yy1}
┌  ◦ sᴛᴀᴛᴜs : ${isCreator ? 'ᴏᴡɴᴇʀ' : isPrem ? 'ᴘʀᴇᴍɪᴜᴍ' : 'ғʀᴇᴇ'}
│  ◦ ɴᴏᴍᴏʀ :  @${m?.sender.split('@')[0]}
│  ◦ ɴᴀᴍᴇ : ${pushname}
└  ◦ ʟɪᴍɪᴛ : ${limitz}
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
⏤͟͟͞͞──────────────────
*<> [ OWNER - MENU ] <>*
─────────────────͟͟͞͞⏤
        乂 ᴀᴅᴅᴄᴀsᴇ
        乂 ʀᴇᴀᴄᴛᴄʜ
        乂 ᴀᴅᴅᴘʀᴇᴍ
        乂 ᴅᴇʟᴘʀᴇᴍ
        乂 ᴀᴍʙɪʟᴄᴏᴅᴇ
        乂 sᴇᴛᴄᴏᴅᴇ
        乂 ɢᴇᴛғɪʟᴇ
        乂 sᴇᴛғɪʟᴇ
        乂 ʟᴇᴀᴠᴇ
        乂 ᴊᴏɪɴ
        乂 ᴄʀᴇᴀᴛᴇɢᴄ
        乂 ᴀᴅᴅsᴇᴡᴀ
        乂 ʟɪsᴛsᴇᴡᴀ
        乂 ᴄᴇᴋsᴇᴡᴀ
        乂 sᴇʟғ
        乂 ᴘᴜʙʟɪᴄ
        乂 ᴜɴʙʟᴏᴄᴋ
        乂 ʙʟᴏᴄᴋ
        乂 ʟɪsᴛʙʟᴏᴄᴋ
        乂 ʙᴀʟᴀsɴɢʟ
        乂 ɢᴇᴛᴄᴏɴғɪɢ
        乂 sᴘᴀᴍɴɢʟ
        乂 sᴇᴛᴄᴏɴғɪɢ
        
⏤͟͟͞͞──────────────────
*<> [ MAIN - MENU ] <>*
─────────────────͟͟͞͞⏤
        乂 ᴅᴀғᴛᴀʀ
        乂 ᴜᴘᴄʜ-ᴇʟɪᴛᴇ
        乂 ᴄʜᴀᴛ
        乂 ᴘᴇsᴀɴ
        乂 ᴛᴏᴛᴀʟғɪᴛᴜʀ
        乂 ᴏᴡɴᴇʀ
        乂 ɴɢʟ
        乂 ᴍʏɪᴘ
        乂 ʟɪsᴛᴀᴘɪsᴄ

⏤͟͟͞͞──────────────────
*<> [ STORE - MENU ] <>*
─────────────────͟͟͞͞⏤        
        乂 ᴀᴅᴅʟɪsᴛ
        乂 ᴅᴇʟʟɪsᴛ       
        乂 ʟɪsᴛ
        乂 ᴅᴏɴᴇ
        乂 ᴘʀᴏsᴇs
        乂 ʙᴀᴛᴀʟ
        乂 ᴀᴄᴄ
        乂 ᴍɪɴsᴀʟᴅᴏ
        乂 ᴋɪʀɪᴍ
        乂 ᴅᴇᴘᴏsɪᴛ

⏤͟͟͞͞──────────────────
*<> [ MAKER - MENU ] <>*
─────────────────͟͟͞͞⏤
        乂 ᴄᴋᴛᴘ
        乂 ᴘᴏʀɴʜᴜʙ
        乂 ʟᴏɢᴏʙᴀ
        乂 ɴɪᴋᴀʜɪɴᴡᴀɪғᴜ
        乂 ᴍʏᴘᴀᴄᴀʀ
        乂 ᴄᴇʀᴀɪ
        乂 ᴄʀᴏᴛ
        乂 ɢʟɪᴛᴄʜᴛᴇxᴛ
        乂 ᴡʀɪᴛᴇᴛᴇxᴛ
        乂 ᴀᴅᴠᴀɴᴄᴇᴅɢʟᴏᴡ
        乂 ᴛʏᴘᴏɢʀᴀᴘʜʏᴛᴇxᴛ	
        乂 ᴘɪxᴇʟɢʟɪᴛᴄʜ
        乂 ɴᴇᴏɴɢʟɪᴛᴄʜ
        乂 ꜰʟᴀɢᴛᴇxᴛ
        乂 ꜰʟᴀɢ3ᴅᴛᴇxᴛ
        乂 ᴅᴇʟᴇᴛɪɴɢᴛᴇxᴛ
        乂 ʙʟᴀᴄᴋᴘɪɴᴋꜱᴛʏʟᴇ
        乂 ɢʟᴏᴡɪɴɢᴛᴇxᴛ
        乂 ᴜɴᴅᴇʀᴡᴀᴛᴇʀᴛᴇxᴛ
        乂 ʟᴏɢᴏᴍᴀᴋᴇʀ
        乂 ᴄᴀʀᴛᴏᴏɴꜱᴛʏʟᴇ
        乂 ᴘᴀᴘᴇʀᴄᴜᴛꜱᴛʏʟᴇ
        乂 ᴡᴀᴛᴇʀᴄᴏʟᴏʀᴛᴇxᴛ
        乂 ᴇꜰꜰᴇᴄᴛᴄʟᴏᴜᴅꜱ
        乂 ʙʟᴀᴄᴋᴘɪɴᴋʟᴏɢᴏ
        乂 ɢʀᴀᴅɪᴇɴᴛᴛᴇxᴛ
        乂 ꜱᴜᴍᴍᴇʀʙᴇᴀᴄʜ
        乂 ʟᴜxᴜʀʏɢᴏʟᴅ
        乂 ᴍᴜʟᴛɪᴄᴏʟᴏʀᴇᴅɴᴇᴏɴ
        乂 ꜱᴀɴᴅꜱᴜᴍᴍᴇʀ
        乂 ɢᴀʟᴀxʏᴡᴀʟʟᴘᴀᴘᴇʀ
        乂 1917ꜱᴛʏʟᴇ
        乂 ᴍᴀᴋɪɴɢɴᴇᴏɴ
        乂 ʀᴏʏᴀʟᴛᴇxᴛ
        乂 ꜰʀᴇᴇᴄʀᴇᴀᴛᴇ	
        乂 ɢᴀʟᴀxʏꜱᴛʏʟᴇ	
        乂 ʟɪɢʜᴛᴇꜰꜰᴇᴄᴛꜱ
        
⏤͟͟͞͞──────────────────
*<> [ CONVERT - MENU ] <>*
─────────────────͟͟͞͞⏤
        乂 sᴍᴇᴍᴇ
        乂 sᴛɪᴄᴋᴇʀ
        乂 ʙʀᴀᴛ
        乂 ʙʀᴀᴛᴠɪᴅ
        乂 ʜʏᴛᴀᴍ
        乂 ғᴜʀʏʙʀᴀᴛ
        乂 ʀᴇᴍᴏᴠᴇʙɢ
        乂 ʜᴅ
        乂 ᴛᴏᴜʀʟ
        乂 ᴛᴏɪᴍɢ
        乂 ᴄᴏʟᴏʀɪᴢᴇ
        乂 ɪǫᴄ
        乂 ǫᴄ
        乂 ᴜᴘᴘᴀsᴛᴇʙɪɴ
        乂 ᴡᴍ
        乂 ᴇᴍᴏᴊɪᴍɪx
        乂 ᴀɴɪᴍʙʀᴀᴛ
        乂 ᴛᴏᴀɴɪᴍᴇ
        乂 ᴛᴏʜɪᴊᴀʙ

⏤͟͟͞͞──────────────────
*<> [ MENU - AI ] <>*
─────────────────͟͟͞͞⏤        
        乂 ᴀɪɴsғᴡ
        乂 ᴅᴇᴇᴘɪᴍɢ
        乂 ᴛᴇʟᴜsᴜʀɪɪᴍɢ
        乂 ᴀɪᴇᴅɪᴛ
        乂 maouᴀɪ

⏤͟͟͞͞──────────────────
*<> [ TXTUNBAN - MENU ] <>*
─────────────────͟͟͞͞⏤
        乂 ᴛᴇxᴛᴜɴʙᴀɴᴠ1 
        乂 ᴛᴇxᴛᴜɴʙᴀɴᴠ2 
        乂 ᴛᴇxᴛᴜɴʙᴀɴᴠ3 
        乂 ᴛᴇxᴛᴜɴʙᴀɴᴠ4 
        乂 ᴛᴇxᴛᴜɴʙᴀɴᴠ5 
        乂 ᴛᴇxᴛᴜɴʙᴀɴᴠ6 
        乂 ᴛᴇxᴛᴜɴʙᴀɴᴠ7 
        乂 ᴛᴇxᴛᴜɴʙᴀɴᴠ8 
        乂 ᴛᴇxᴛᴜɴʙᴀɴᴠ9 
        乂 ᴛᴇxᴛᴜɴʙᴀɴᴠ10 
        乂 ᴛᴇxᴛᴜɴʙᴀɴᴠ11 
        乂 ᴛᴇxᴛᴜɴʙᴀɴᴠ12 
        乂 ᴛᴇxᴛᴜɴʙᴀɴᴠ13 
        乂 ᴛᴇxᴛᴜɴʙᴀɴᴠ14 
        乂 ᴛᴇxᴛᴜɴʙᴀɴᴠ15 
        乂 ᴛᴇxᴛᴜɴʙᴀɴᴠ16 
        乂 ᴛᴇxᴛᴜɴʙᴀɴᴠ17 
        乂 ᴛᴇxᴛᴜɴʙᴀɴᴠ18  
        乂 ᴛᴇxᴛᴜɴʙᴀɴᴠ19 
        乂 ᴛᴇxᴛᴜɴʙᴀɴᴠ20 
        乂 ᴛᴇxᴛᴜɴʙᴀɴᴠ21 
        乂 ᴛᴇxᴛᴜɴʙᴀɴᴘʀᴇᴍᴠ1 
        乂 ᴛᴇxᴛᴜɴʙᴀɴᴘʀᴇᴍᴠ2 
        乂 ᴛᴇxᴛᴜɴʙᴀɴᴘʀᴇᴍᴠ3

⏤͟͟͞͞──────────────────
*<> [ TOOLS - MENU ] <>*
─────────────────͟͟͞͞⏤
        乂 ᴛᴛsʙᴀ
        乂 ɴᴜʟɪs
        乂 ᴏᴄ
        乂 ʀᴠᴏ
        乂 ɴᴇᴍᴇs
        乂 ssᴡᴇʙ
        乂 ɪɢsᴛᴀʟᴋ
        乂 sᴛᴀʟᴋᴄʜ
        乂 ʏᴛsᴛᴀʟᴋ
        乂 ᴛᴇʟᴇsᴛᴀʟᴋ
        乂 ғᴀᴋᴇᴛɪᴋᴛᴏᴋ
        乂 sᴛᴀʟᴋᴛɪᴋᴛᴏᴋ
               
⏤͟͟͞͞──────────────────
*<> [ SEARCH - MENU ] <>*
─────────────────͟͟͞͞⏤
        乂 ᴘʟᴀʏsᴘᴏᴄʜ
        乂 ᴘʟᴀʏᴄʜ
        乂 ᴘʟᴀʏs
        乂 ᴍʟʙʙ
        乂 ᴛɪᴋᴛᴏᴋsᴇᴀʀᴄʜ
        乂 ᴋᴏᴍɪᴋs
        乂 ᴘɪɴ
        乂 ᴏᴛᴀᴋᴜᴅᴇsᴜ
        乂 sᴘᴏᴛɪғʏsʀᴄ
        乂 ɢᴏᴏɢʟᴇsᴇᴀʀᴄʜ
        乂 ʏᴛᴍᴘ𝟺
        乂 ɴᴀsᴀ
        乂 ᴋᴏᴍᴘᴀs
        乂 ʙɪʟɪʙɪʟɪ
        乂 ʏᴛᴍᴘ𝟹
        乂 ʏᴛs
        乂 ᴘʟᴀʏ
        乂 ɪɴғᴏɢᴇᴍᴘᴀ
        乂 ᴅᴏɴɢᴇɴɢ
        乂 ᴄᴜᴀᴄᴀ
        乂 ᴘʟᴀʏsᴛᴏʀᴇ

⏤͟͟͞͞──────────────────
*<> [ DOWNLOAD - MENU ] <>*
─────────────────͟͟͞͞⏤
        乂 ᴍᴇᴅɪᴀғɪʀᴇ
        乂 ᴛɪᴋᴛᴏᴋ
        乂 ɪɢᴅʟ
        乂 ɢɪᴛᴄʟᴏɴᴇ
        乂 ʏᴛs
        乂 ʏᴛᴍᴘ𝟹
        乂 ʏᴛᴍᴘ𝟺
        乂 ᴘʟᴀʏ
        乂 ᴘᴀsᴛᴇʙɪɴ
        乂 ғʙ
        
⏤͟͟͞͞──────────────────
*<> [ GROUP - MENU ] <>*
─────────────────͟͟͞͞⏤
        乂 ᴀɴᴛɪᴘʀᴏᴍᴏᴛɪᴏɴ
        乂 ᴀɴᴛɪᴛᴀɢsᴡ
        乂 ᴛᴏᴛᴀɢ
        乂 ᴛᴀɢᴀʟʟ
        乂 ᴋɪᴄᴋ
        乂 ᴀᴅᴅ
        乂 ʟɪɴᴋɢᴄ
        乂 sᴇɴᴅʟɪɴᴋɢᴄ
        乂 ᴘʀᴏᴍᴏᴛᴇ
        乂 ᴅᴇᴍᴏᴛᴇ
        乂 ʜɪᴅᴇᴛᴀɢ
        乂 ᴀɴᴛɪʟɪɴᴋ
        乂 ᴀɴᴛɪʟɪɴᴋᴠ𝟸
        乂 ᴏᴘᴇɴᴛɪᴍʀ
        乂 ᴄʟᴏsᴇᴛɪᴍᴇ
        乂 ᴄᴇᴋᴀsᴀʟᴍᴇᴍʙᴇʀ
        
⏤͟͟͞͞──────────────────
*<> [ CPANEL - MENU ] <>*
─────────────────͟͟͞͞⏤
        乂 𝟷ɢʙ
        乂 𝟸ɢʙ
        乂 𝟹ɢʙ
        乂 𝟺ɢʙ
        乂 𝟻ɢʙ
        乂 𝟼ɢʙ
        乂 𝟽ɢʙ
        乂 𝟾ɢʙ
        乂 𝟿ɢʙ
        乂 𝟷𝟶ɢʙ
        乂 ᴜɴʟɪ
        
⏤͟͟͞͞──────────────────
*<> [ SOUND - MENU ] <>*
─────────────────͟͟͞͞⏤            
        乂 ʙᴀꜱꜱ
        乂 ʙʟᴏᴡɴ
        乂 ᴅᴇᴇᴘ
        乂 ᴇᴀʀʀᴀᴘᴇ
        乂 ꜰᴀꜱᴛ
        乂 ꜰᴀᴛᴍ
        乂 ɴɪɢʜᴛᴄᴏʀᴇ
        乂 ʀᴇᴠᴇʀꜱᴇ
        乂 ʀᴏʙᴏᴛ
        乂 ꜱʟᴏᴡ
        乂 ꜱᴍᴏᴏᴛʜ
        乂 ꜱQᴜɪʀʀᴇʟ
        乂 ᴍᴀɴɢᴋᴀɴᴇ𝟷 - ᴍᴀɴɢᴋᴀɴᴇ𝟻𝟺
        乂 sɪᴜᴜ
        乂 ᴀɴᴊᴀʏ
        乂 ᴏᴍᴀɢᴀ
        乂 ᴋᴀᴍᴜ-ɴᴀɴʏᴀ
        乂 ᴀᴄᴜᴍᴀʟᴀᴋᴀ
        乂 ғᴀʀʜᴀɴ-ᴋᴇʙᴀʙ
        乂 ʀᴇᴢᴀ-ᴋᴇᴄᴀᴘ

⏤͟͟͞͞──────────────────
*<> [ ANONIM - MENU ] <>*
─────────────────͟͟͞͞⏤        
        乂 ᴍᴇɴғᴇs
        乂 ʙᴀʟᴀsᴍᴇɴғᴇs
        乂 ᴄᴇᴋʀᴇᴘᴏʀᴛs
        乂 ᴅᴇʟʀᴇᴘᴏʀᴛs
        乂 ʀᴇᴘᴏʀᴛs
        乂 ʀᴇᴘʟʏ
        乂 ʀᴇᴘᴏʀᴛ
        乂 ᴄᴇᴋsᴀʀᴀɴ
        乂 sᴀʀᴀɴ
        乂 ɴɢʟ

⏤͟͟͞͞──────────────────
*<> [ NSFW - MENU ] <>*
─────────────────͟͟͞͞⏤        
        乂 ᴛʀᴀᴘ
        乂 ᴀʜᴇɢᴀᴏ
        乂 ᴀɴɪᴍᴇꜱᴘᴀɴᴋ
        乂 ᴍɪʟꜰ
        乂 ʜᴇɴᴛᴀɪ-ᴡᴀɪꜰᴜ
        乂 ʜᴇɴᴛᴀɪ-ɴᴇᴋᴏ
        乂 ᴀꜱꜱ
        乂 ʙᴅꜱᴍ
        乂 ʙʟᴏᴡᴊᴏʙ
        乂 ᴄᴜᴄᴋᴏʟᴅ
        乂 ᴄᴜᴍ
        乂 ᴇʙᴀ
        乂 ᴇʀᴏ
        乂 ꜰᴇɴᴅᴏᴍ
        乂 ꜰᴏᴏᴛ
        乂 ɢᴀɴɢʙᴀɴɢ
        乂 ɢʟᴀꜱꜱᴇꜱ 
        乂 ᴊᴀʜʏ
        乂 ᴍᴀɴɢᴀ
        乂 ᴍᴀꜱᴛᴜʀʙᴀᴛɪᴏɴ 
        乂 ɴᴇᴋᴏ-ʜᴇɴᴛᴀɪ
        乂 ɴᴇᴋᴏ-ʜᴇɴᴛᴀɪ2
        乂 ɴꜱꜰᴡʟᴏʟɪ
        乂 ᴏʀɢʏ
        乂 ᴘᴀɴᴛɪᴇꜱ
        乂 ᴘᴜꜱʏ
        乂 ᴛᴇɴᴛᴀᴄʟᴇꜱ
        乂 ᴛʜɪɢʜꜱ
        乂 ʏᴜʀɪ
        乂 ᴢᴇᴛᴛᴀɪ
        乂 ɢɪꜰʙʟᴏᴡᴊᴏʙ
        乂 ɢɪꜰʜᴇɴᴛᴀɪ
        乂 ꜰᴏᴏᴛ
        
⏤͟͟͞͞──────────────────
*<> [ RPG - MENU ] <>*
─────────────────͟͟͞͞⏤
        乂 ᴍʏɢᴜɪʟᴅ
        乂 ɢᴜɪʟᴅɪɴꜰᴏ
        乂 ᴅᴇʟɢᴜɪʟᴅ
        乂 ᴊᴏɪɴɢᴜɪʟᴅ
        乂 ᴄʀᴇᴀᴛᴇɢᴜɪʟᴅ
        乂 ʟɪꜱᴛɢᴜɪʟᴅ
        乂 ᴋᴇʀᴊᴀ 
        乂 ʙᴀɴᴋᴄᴇᴋ
        乂 ᴍᴀʟɪɴɢ
        乂 ʙᴀɴᴋɴᴀʙᴜɴɢ
        乂 ʙᴀɴᴋᴛᴀʀɪᴋ
        乂 ʙᴇʀᴋᴇʙᴏɴ
        乂 ᴄʀᴀꜰᴛɪɴɢ
        乂 ʙᴇᴛ
        乂 ʙᴏɴᴜꜱ
        乂 ʙᴜᴀʜ
        乂 ɴᴇʙᴀɴɢ
        乂 ʙᴇᴋᴇʀᴊᴀ
        乂 ʙᴀɴꜱᴏꜱ
        乂 ᴛᴀxʏ
        乂 ᴍᴜʟᴜɴɢ
        乂 ʙᴇʀʙᴜʀᴜ
        乂 ᴘᴏʟɪꜱɪ
        乂 ʙᴇʀᴅᴀɢᴀɴɢ
        乂 ʀᴀᴍᴘᴏᴋ
        乂 ʙᴜɴᴜʜ
        乂 ᴄᴏʟʟᴇᴄᴛ
        乂 ᴍᴀɴᴄɪɴɢ
        乂 ʀᴇᴘᴀɪʀ
        乂 ꜰᴇᴇᴅ
        乂 ꜰɪɢʜᴛ
        乂 ɢᴀᴊɪᴀɴ
        乂 ᴜᴘɢʀᴀᴅᴇ
        乂 ᴛʀᴀɴꜱꜰᴇʀ
        乂 ꜱʜᴏᴘ
        乂 ꜱᴇʟᴇᴄᴛꜱᴋɪʟʟ
        乂 ꜱᴀᴍᴘᴀʜ
        乂 ʀᴏᴋᴇᴛ
        乂 ᴏᴊᴇᴋ
        乂 ɴɢᴜʟɪ
        乂 ᴘᴀꜱᴀʀ
        乂 ʀᴏʙ
        乂 ʀᴇꜰᴇʀᴀʟ
        乂 ᴘᴇᴛꜱʜᴏᴘ
        乂 ᴋᴏʟᴀᴍ
        乂 ᴋᴏʙᴏʏ
        乂 ʟᴇᴀᴅᴇʀʙᴏᴀʀᴅ

⏤͟͟͞͞──────────────────
*<> [ FUN - MENU ] <>*
─────────────────͟͟͞͞⏤
        乂 ᴀᴘᴀᴋᴀʜ 
        乂 ʙᴀɢᴀɪᴍᴀɴᴀᴋᴀʜ  
        乂 ᴋᴀᴘᴀɴᴋᴀʜ 
        乂 ʙɪꜱᴀᴋᴀʜ 
        乂 ꜱᴀɴɢᴇᴄᴇᴋ 
        乂 ᴄᴀɴᴛɪᴋᴄᴇᴋ 
        乂 ɢᴀɴᴛᴇɴɢᴄᴇᴋ 
        乂 ᴊᴏᴍᴏᴋᴄᴇᴋ 
        乂 ᴡᴀɴɢʏ 
        乂 ʀᴀᴛᴇ
        乂 ᴛᴏʟᴏʟ
        乂 ɢᴏʙʟᴏɢ
        乂 ɢᴏʙʟᴏᴋ
        乂 ɪᴅɪᴏᴛ
        乂 ɢᴀʏ
        乂 ᴊᴏᴍᴏᴋ
        乂 ʙᴀᴊɪɴɢᴀɴ
        乂 ᴍᴜɴᴀꜰɪᴋ
        乂 ᴋᴏɴᴛᴏʟ
        乂 ʏᴀᴛɪᴍ
        乂 ᴘᴏᴋᴇ
        乂 ᴘᴇᴍʙᴏᴋᴇᴘ
        乂 ʜɪᴛᴀᴍ
        乂 ᴊᴀᴡᴀ
        乂 ᴡɪʙᴜ
        乂 ꜱᴛʀᴇꜱꜱ
        乂 ᴍɪꜱᴋɪɴ
        乂 ᴄᴀɴᴛɪᴋ
        乂 ᴍᴀɴɪꜱ
        乂 ʙᴀʙɪ
        乂 ɢᴀɴᴛᴇɴɢ
        乂 ᴄɪɴᴀ
        乂 ᴀᴛʜᴇɪꜱ
        乂 ᴘᴀᴘᴜᴀ
        乂 ɴɪɢɢᴀ
        乂 ᴘᴇɴɢᴇɴᴛᴏᴛ
        乂 ꜱᴇᴋꜱɪ
        乂 ᴋᴀᴡᴀɪ
        乂 ᴛᴇʀᴄɪɴᴅᴏ
        乂 ꜰᴇᴍʙᴏᴋᴇꜰ
        乂 ᴘᴇɴɢᴏᴄᴏᴋ
        乂 ᴄᴀʙᴜʟ
        乂 ꜰᴜᴄᴋʙᴏʏ
        乂 ᴘʟᴀʏʙᴏʏ
        乂 ꜱᴀɴɢᴇ
        乂 ꜱᴀɴɢᴇᴀɴ
        乂 ʜᴏᴛ
        乂 ᴀᴘᴀᴋᴀʜ
        乂 ʙᴀɢᴀɪᴍᴀɴᴀ
        乂 ʙɪsᴀᴋᴀʜ
        乂 ɢᴀɴᴛᴇɴɢᴄᴇᴋ
        乂 ᴄᴀɴᴛɪᴋᴄᴇᴋ
        乂 ʜɪᴛᴀᴍᴄᴇᴋ
        乂 ᴋᴀᴘᴀɴᴋᴀʜ
        乂 ᴍᴀʀᴀʜɪʀɪᴘᴇʀ
        乂 ᴡᴀɴɢʏ
        乂 sᴀɴɢᴇᴄᴇᴋ
        
⏤͟͟͞͞──────────────────
*<> [ PRIMBON - MENU ] <>*
─────────────────͟͟͞͞⏤
        乂 ᴀʀᴛɪᴍɪᴍᴘɪ
        乂 ᴀʀᴛɪɴᴀᴍᴀ
        乂 ʀᴀᴍᴀʟᴊᴏᴅᴏʜ
        乂 ʀᴀᴍᴀʟᴊᴏᴅᴏʜʙᴀʟɪ
        乂 ꜱᴜᴀᴍɪɪꜱᴛʀɪ
        乂 ʀᴀᴍᴀʟᴄɪɴᴛᴀ
        乂 ᴄᴏᴄᴏᴋɴᴀᴍᴀ
        乂 ᴘᴀꜱᴀɴɢᴀɴ
        乂 ᴊᴀᴅɪᴀɴɴɪᴋᴀʜ
        乂 ꜱɪꜰᴀᴛᴜꜱᴀʜᴀ
        乂 ʀᴇᴢᴇᴋɪ
        乂 ᴘᴇᴋᴇʀᴊᴀᴀɴ
        乂 ɴᴀꜱɪʙ
        乂 ᴘᴇɴʏᴀᴋɪᴛ
        乂 ᴛᴀʀᴏᴛ
        乂 ꜰᴇɴɢꜱʜᴜɪ
        乂 ʜᴀʀɪʙᴀɪᴋ
        乂 ʜᴀʀɪꜱᴀɴɢᴀʀ
        乂 ʜᴀʀɪꜱɪᴀʟ
        乂 ɴᴀɢᴀʜᴀʀɪ
        乂 ᴀʀᴀʜʀᴇᴢᴇᴋɪ
        乂 ᴘᴇʀᴜɴᴛᴜɴɢᴀɴ
        乂 ᴡᴇᴛᴏɴ
        乂 ᴋᴀʀᴀᴋᴛᴇʀ
        乂 ᴋᴇʙᴇʀᴜɴᴛᴜɴɢᴀɴ
        乂 ᴍᴇᴍᴀɴᴄɪɴɢ
        乂 ᴍᴀꜱᴀꜱᴜʙᴜʀ
        乂 ᴢᴏᴅɪᴀᴋ
        乂 ꜱʜɪᴏ        
        
⏤͟͟͞͞──────────────────
*<> [ GAME - MENU ] <>*
─────────────────͟͟͞͞⏤
        乂 ᴄᴀsɪɴᴏ
        乂 sᴜɪᴛ 
        乂 ᴛɪᴄᴛᴀᴄᴛᴏᴇ
        乂 ᴅᴇʟᴛᴛᴛ
        乂 ᴘᴇᴛᴀᴋʙᴏᴍ
        乂 ᴅᴇʟᴘᴇᴛᴀᴋʙᴏᴍ
        乂 ᴛᴇʙᴀᴋɢᴀᴍʙᴀʀ
        乂 ᴛᴇʙᴀᴋᴀɴɪᴍᴇ
        乂 ᴛᴇʙᴀᴋᴋᴀʙᴜᴘᴀᴛᴇɴ
        乂 ᴛᴇʙᴀᴋʟᴀɢᴜ
        乂 ᴋᴜɪs
        乂 ᴛᴇʙᴀᴋᴋᴀʟɪᴍᴀᴛ
        乂 ᴛᴇʙᴀᴋᴋᴀᴛᴀ
        乂 ᴛᴇʙᴀᴋʟɪʀɪᴋ
        乂 ᴛᴇʙᴀᴋᴋɪᴍɪᴀ
        乂 ᴛᴇʙᴀᴋʙᴇɴᴅᴇʀᴀ
        乂 sᴜsᴜɴᴋᴀᴛᴀ
        乂 ᴀsᴀʜᴏᴛᴀᴋ
        乂 sɪᴀᴘᴀᴋᴀʜᴀᴋᴜ
        乂 ᴄᴀᴋʟᴏɴᴛᴏɴɢ
        乂 ᴍᴀᴛʜ ᴍᴏᴅᴇ
        乂 ғᴀᴍɪʟʏ100

⏤͟͟͞͞──────────────────
*<> [ QUOTES - MENU ] <>*
─────────────────͟͟͞͞⏤
        乂 ǫᴜᴏᴛᴇsᴀɴɪᴍᴇ
        乂 ǫᴜᴏᴛᴇsʙᴀᴄᴏᴛ
        乂 ǫᴜᴏᴛᴇsʙᴜᴄɪɴ
        乂 ǫᴜᴏᴛᴇsᴍᴏᴛɪᴠᴀsɪ
        乂 ǫᴜᴏᴛᴇsɢᴀʟᴀᴜ
        乂 ǫᴜᴏᴛᴇsɢᴏᴍʙᴀʟ
        乂 ǫᴜᴏᴛᴇsʜᴀᴄᴋᴇʀ
        乂 ǫᴜᴏᴛᴇsʙɪᴊᴀᴋ
        
⏤͟͟͞͞──────────────────
*<> [ ANIME - MENU ] <>*
─────────────────͟͟͞͞⏤
        乂 ʀᴀɴᴅᴏᴍʙᴀ
        乂 ʀᴀɴᴅᴏᴍ-ᴀɴɪᴍᴇ
        乂 ᴀɴɪᴍᴇᴀᴡᴏᴏ
        乂 ᴀɴɪᴍᴇᴍᴇɢᴜᴍɪɴ
        乂 ᴀɴɪᴍᴇꜱʜɪɴᴏʙᴜ
        乂 ᴀɴɪᴍᴇʜᴀɴᴅʜᴏʟᴅ
        乂 ᴀɴɪᴍᴇʜɪɢʜꜰɪᴠᴇ
        乂 ᴀɴɪᴍᴇᴄʀɪɴɢᴇ
        乂 ᴀɴɪᴍᴇᴅᴀɴᴄᴇ
        乂 ᴀɴɪᴍᴇʜᴀᴘᴘʏ
        乂 ᴀɴɪᴍᴇɢʟᴏᴍᴘ
        乂 ᴀɴɪᴍᴇꜱᴍᴜɢ
        乂 ᴀɴɪᴍᴇʙʟᴜꜱʜ
        乂 ᴀɴɪᴍᴇᴡᴀᴠᴇ
        乂 ᴀɴɪᴍᴇꜱᴍɪʟᴇ
        乂 ᴀɴɪᴍᴇᴘᴏᴋᴇ
        乂 ᴀɴɪᴍᴇᴡɪɴᴋ 
        乂 ᴀɴɪᴍᴇʙᴏɴᴋ
        乂 ᴀɴɪᴍᴇʙᴜʟʟʏ
        乂 ᴀɴɪᴍᴇʏᴇᴇᴛ
        乂 ᴀɴɪᴍᴇʙɪᴛᴇ
        乂 ᴀɴɪᴍᴇʟɪᴄᴋ
        乂 ᴀɴɪᴍᴇᴋɪʟʟ
        乂 ᴀɴɪᴍᴇᴄʀʏ
        乂 ᴀɴɪᴍᴇᴡʟᴘ
        乂 ᴀɴɪᴍᴇᴋɪꜱꜱ
        乂 ᴀɴɪᴍᴇʜᴜɢ
        乂 ᴄᴏᴜᴘʟᴇᴘᴘ 
        乂 ᴀɴɪᴍᴇɴᴇᴋᴏ
        乂 ᴀɴɪᴍᴇᴘᴀᴛ
        乂 ᴀɴɪᴍᴇꜱʟᴀᴘ
        乂 ᴀɴɪᴍᴇᴄᴜᴅᴅʟᴇ
        乂 ᴀɴɪᴍᴇᴡᴀɪꜰᴜ
        乂 ᴀɴɪᴍᴇɴᴏᴍ
        乂 ᴀɴɪᴍᴇꜰᴏxɢɪʀʟ
        乂 ᴀɴɪᴍᴇᴛɪᴄᴋʟᴇ 
        乂 ᴀɴɪᴍᴇɢᴇᴄɢ          
        乂 ᴅᴏɢᴡᴏᴏꜰ           
        乂 8ʙᴀʟʟᴘᴏᴏʟ            
        乂 ɢᴏᴏꜱᴇʙɪʀᴅ 
        乂 ᴀɴɪᴍᴇꜰᴇᴇᴅ            
        乂 ᴀɴɪᴍᴇᴀᴠᴀᴛᴀʀ            
        乂 ʟɪᴢᴀʀᴅᴘɪᴄ            
        乂 ᴄᴀᴛᴍᴇᴏᴡ   

⏤͟͟͞͞──────────────────
*<> [ RANDOM - MENU ] <>*
─────────────────͟͟͞͞⏤        
        乂 ᴍᴀʟᴀʏ
        乂 ᴋᴏʀᴇᴀɴ
        乂 ɪɴᴅᴏ
        乂 ᴊᴀᴘᴀɴᴇꜱᴇ
        乂 ᴀɴᴛɪᴡᴏʀᴋ
        乂 ʜɪᴊᴀʙ
        乂 ʙʟᴀᴄᴋᴘɪɴᴋ2
        乂 ᴀᴇꜱᴛʜᴇᴛɪᴄ
        乂 ᴠɪᴇᴛɴᴀᴍᴇꜱᴇ
        乂 ᴅᴏɢɢᴏ
        乂 ᴄᴀᴛ
        乂 ᴊᴜꜱᴛɪɴᴀ
        乂 ʀᴀɴᴅᴏᴍɢɪʀʟ
        乂 ʀᴀɴᴅᴏᴍʙᴏʏ
        乂 ᴛʜᴀɪ
        乂 ɴᴏᴛɴᴏᴛ 
        乂 ᴋᴘᴏᴘ
        乂 ᴋᴀʏᴇꜱ
        乂 ᴄᴏꜱᴘʟᴀʏ
        乂 ʙɪᴋᴇ
        乂 ʙᴏɴᴇᴋᴀ`
conn.sendMessage(m.chat, {
        text: kontol,
        contextInfo: {
            externalAdReply: {
                title: `魔王ｍａｏｕｒａｆａ|ᵇᵒᵗ`,
                body: `ｍａｏｕｒａｆａ`,
                thumbnailUrl: `https://i.ibb.co/QFm6DBsw/Untitled4-20250601175921.png`,
                sourceUrl: global.yt,
                mediaType: 1,
                renderLargerThumbnail: true
                forwardedNewsletterMessageInfo: {
                newsletterJid: global.xchannel.jid,
                newsletterName: ownername,
                serverMessageId: 143
            }
        }
    }, { quoted: m })
};
db.data.users[m.sender].exp += await randomNomor(60)
break;

case "vipvpn": {
let owner = `Menjual Config Premium Server Singapura Untuk Injektor Kuota. *FULL GARANSI* Jika *EROR* Langsung Ditangani

Update akun *FREE* Setiap Hari Jangan Lupa Join Group! Dan CH!
Online order : https://list.maourafavpn.my.id 

📝 VPN SG-DO (2 IP / 200GB) STANDAR
🚀 CPU DO-Standar-AMD (2) @ 1.496GHz
• \`3 Hari: Rp1.000\`
• \`7 Hari: Rp3.000\`
• \`15 Hari: Rp6.000\`
• \`30 Hari: Rp8.000\`

📝 SG-VIP ⚡(2 IP / Unlimited) PREMIUM
🚀 CPU DO-Premium-AMD (4) @ 1.996GHz
• \`3 Hari: Rp 3.000\`
• \`7 Hari: Rp 6.000\`
• \`15 Hari: Rp 9.000\`
• \`30 Hari: Rp10.000\`

📝 SG STB (5 IP / 400GB) STANDAR
🚀 CPU DO-Standar-AMD (2) @ 1.496GHz
• \`SG STB 30 Hari: Rp15.000\`
• \`SG STB 60 Hari: Rp28.000\`

SG VIP STB ⚡(10 IP / UNLIMITED)
• \`SG VIP STB 30 Hari: Rp18.000\`
• \`SG VIP STB 60 Hari: Rp34.000\` 

┌──────────────────┐
 *PROMO PAKET INJECT*
*✅ XL VIDIO✅ ( Rp 30.000 ) + vip config 40.000*  
・Tembak Paket Vidio Yang Hilang 
・tanpa gandeng
Total FUP: 100GB-150GB Semua Aplikasi 

*✅ XL IFLIX✅ ( Rp 33.000 )* 
・ Paket iFlix Yang Hilang 
・tanpa gandeng
Total FUP: 100GB-150GB Semua Aplikasi 

*✅XC 1+1GB + XUTSuper ( Rp. 25.000 )* 
・ Unlimited Whatsapp
・ Line
・ Gojek
・ Instagram
・ Facebook
Total FUP: 230GB++Semua Aplikasi 

*✅XCS + XUTPremiun ( Rp. 38.000 )* 
・ Unlimited Whatsapp
・ Line
・ Gojek
・ Instagram
・ Facebook
- 👉🏻YouTube 
Total FUP: 230GB++ Semua Aplikasi 

 *✅ XCS + Multi Add On  ( Rp 40.000 )* 
・ XUTBasic
・ XUTStandard
・ XUTSuper
・ XUTPremium
・ XUTYouTube
・ XUTJoox
・ XUTViu
・ XUTNetflix
・ XUTTikTok
Total FUP: 800GB++Semua Aplikasi 

◇━━━━━━━━━━━━━━━━━━━━━◇
 *SYARAT BELI UNTUK Paket* 
• Kartu tidak boleh ada paket xcs/xcp atau paket xc lainnya
Cek kode dial *808*7*1*3#  pastikan tidak ada Xtra Combo (xc) varian apapun
• Tanpa menyediakan pulsa
• Estimasi masuk 30 menit - 1 jam
• Membutuhkan OTP.
• Cara jadi kuota utama Wajib Menggunakan Akun VPN Untuk Inject untuk penggunaan semua aplikasi. Jika Tidak Hanya Bisa Digunakan Di Aplikasi Yang Disebutkan.
• Bisa Tanya Dahulu Jika Masih Bingung.
◇━━━━━━━━━━━━━━━━━━━━━◇
NOTES ⚠️ 
• Tidak ada Garansi
• Membeli=Setuju.
• Paket Illegal Bisa Hilang, Jika Hilang Tidak Ada Refund. SELAMA INI AMAN AMAN SAJA.
◇━━━━━━━━━━━━━━━━━━━━━◇

FB    :  fb.com/maourafa

YT    : youtube.com/@maourafa

Tele : t.me/maourafa

Order  : wa.me/+6282278687542

GC : https://chat.whatsapp.com/CIMeGjTupQy2KuMXhxpY2w

CH : https://whatsapp.com/channel/0029VaiKMO3KrWR1A35DRN1O`
conn.sendMessage(m.chat, {
        text: owner,
        contextInfo: {
            externalAdReply: {
                title: `魔王ｍａｏｕｒａｆａ|ᵇᵒᵗ`,
                body: `ｍａｏｕｒａｆａ`,
                thumbnailUrl: global.thumblist,
                sourceUrl: global.yt,
                mediaType: 1,
                renderLargerThumbnail: true
                mentions: participants.map(a => a.id)
            }
        }
    }, { quoted: m })
};
break;
case "mmain": case "menumain": case "mainmenu": {
let main = `⏤͟͟͞͞──────────────────
*<> [ MAIN - MENU ] <>*
─────────────────͟͟͞͞⏤
        乂 ᴅᴀғᴛᴀʀ
        乂 ᴜᴘᴄʜ-ᴇʟɪᴛᴇ
        乂 ᴄʜᴀᴛ
        乂 ᴘᴇsᴀɴ
        乂 ᴛᴏᴛᴀʟғɪᴛᴜʀ
        乂 ᴍʏɪᴘ
        乂 ʟɪsᴛᴀᴘɪsᴄ
        乂 ᴏᴡɴᴇʀ
        乂 ɴɢʟ`
conn.sendMessage(m.chat, {
        text: main,
        contextInfo: {
            externalAdReply: {
                title: `魔王ｍａｏｕｒａｆａ|ᵇᵒᵗ`,
                body: `ｍａｏｕｒａｆａ`,
                thumbnailUrl: global.thumblist,
                sourceUrl: global.yt,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m })
};
break;
case "mmker": case "menumaker": case "makermenu":{
let maker = `⏤͟͟͞͞──────────────────
*<> [ MAKER - MENU ] <>*
─────────────────͟͟͞͞⏤
        乂 ᴄᴋᴛᴘ
        乂 ᴘᴏʀɴʜᴜʙ
        乂 ʟᴏɢᴏʙᴀ
        乂 ɴɪᴋᴀʜɪɴᴡᴀɪғᴜ
        乂 ᴍʏᴘᴀᴄᴀʀ
        乂 ᴄᴇʀᴀɪ
        乂 ᴄʀᴏᴛ
        乂 ɢʟɪᴛᴄʜᴛᴇxᴛ
        乂 ᴡʀɪᴛᴇᴛᴇxᴛ
        乂 ᴀᴅᴠᴀɴᴄᴇᴅɢʟᴏᴡ
        乂 ᴛʏᴘᴏɢʀᴀᴘʜʏᴛᴇxᴛ	
        乂 ᴘɪxᴇʟɢʟɪᴛᴄʜ
        乂 ɴᴇᴏɴɢʟɪᴛᴄʜ
        乂 ꜰʟᴀɢᴛᴇxᴛ
        乂 ꜰʟᴀɢ3ᴅᴛᴇxᴛ
        乂 ᴅᴇʟᴇᴛɪɴɢᴛᴇxᴛ
        乂 ʙʟᴀᴄᴋᴘɪɴᴋꜱᴛʏʟᴇ
        乂 ɢʟᴏᴡɪɴɢᴛᴇxᴛ
        乂 ᴜɴᴅᴇʀᴡᴀᴛᴇʀᴛᴇxᴛ
        乂 ʟᴏɢᴏᴍᴀᴋᴇʀ
        乂 ᴄᴀʀᴛᴏᴏɴꜱᴛʏʟᴇ
        乂 ᴘᴀᴘᴇʀᴄᴜᴛꜱᴛʏʟᴇ
        乂 ᴡᴀᴛᴇʀᴄᴏʟᴏʀᴛᴇxᴛ
        乂 ᴇꜰꜰᴇᴄᴛᴄʟᴏᴜᴅꜱ
        乂 ʙʟᴀᴄᴋᴘɪɴᴋʟᴏɢᴏ
        乂 ɢʀᴀᴅɪᴇɴᴛᴛᴇxᴛ
        乂 ꜱᴜᴍᴍᴇʀʙᴇᴀᴄʜ
        乂 ʟᴜxᴜʀʏɢᴏʟᴅ
        乂 ᴍᴜʟᴛɪᴄᴏʟᴏʀᴇᴅɴᴇᴏɴ
        乂 ꜱᴀɴᴅꜱᴜᴍᴍᴇʀ
        乂 ɢᴀʟᴀxʏᴡᴀʟʟᴘᴀᴘᴇʀ
        乂 1917ꜱᴛʏʟᴇ
        乂 ᴍᴀᴋɪɴɢɴᴇᴏɴ
        乂 ʀᴏʏᴀʟᴛᴇxᴛ
        乂 ꜰʀᴇᴇᴄʀᴇᴀᴛᴇ	
        乂 ɢᴀʟᴀxʏꜱᴛʏʟᴇ	
        乂 ʟɪɢʜᴛᴇꜰꜰᴇᴄᴛꜱ`
        conn.sendMessage(m.chat, {
        text: maker,
        contextInfo: {
            externalAdReply: {
                title: `魔王ｍａｏｕｒａｆａ|ᵇᵒᵗ`,
                body: `ｍａｏｕｒａｆａ`,
                thumbnailUrl: global.thumblist,
                sourceUrl: global.yt,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m })
};
break;
case "mcnvrt": case "menuconvert": case "convertmenu":{
let convert = `⏤͟͟͞͞──────────────────
*<> [ CONVERT - MENU ] <>*
─────────────────͟͟͞͞⏤
        乂 sᴍᴇᴍᴇ
        乂 sᴛɪᴄᴋᴇʀ
        乂 ʙʀᴀᴛ
        乂 ᴀɴɪᴍʙʀᴀᴛ
        乂 ʙʀᴀᴛᴠɪᴅ
        乂 ʜʏᴛᴀᴍ
        乂 ғᴜʀʏʙʀᴀᴛ
        乂 ʀᴇᴍᴏᴠᴇʙɢ
        乂 ʜᴅ
        乂 ᴛᴏᴜʀʟ
        乂 ᴛᴏɪᴍɢ
        乂 ǫᴄ
        乂 ɪǫᴄ
        乂 ᴄᴏʟᴏʀɪᴢᴇ
        乂 ᴛᴏʜɪᴊᴀʙ
        乂 ᴛᴏᴀɴɪᴍᴇ
        乂 ᴜᴘᴘᴀsᴛᴇʙɪɴ
        乂 ᴡᴍ
        乂 ᴇᴍᴏᴊɪᴍɪx`
        conn.sendMessage(m.chat, {
        text: convert,
        contextInfo: {
            externalAdReply: {
                title: `魔王ｍａｏｕｒａｆａ|ᵇᵒᵗ`,
                body: `ｍａｏｕｒａｆａ`,
                thumbnailUrl: global.thumblist,
                sourceUrl: global.yt,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m })
};
break;
case "mtols": case "tolsmenu": case "menutols": {
let tols = `⏤͟͟͞͞──────────────────
*<> [ TOOLS - MENU ] <>*
─────────────────͟͟͞͞⏤
        乂 ᴛᴛsʙᴀ
        乂 ɴᴜʟɪs
        乂 ᴏᴄ
        乂 ʀᴠᴏ
        乂 ɴᴇᴍᴇs
        乂 ssᴡᴇʙ
        乂 ᴛᴇʟᴇsᴛᴀʟᴋ
        乂 ɪɢsᴛᴀʟᴋ
        乂 ғᴀᴋᴇᴛɪᴋᴛᴏᴋ
        乂 sᴛᴀʟᴋᴛɪᴋᴛᴏᴋ
        乂 ʏᴛsᴛᴀʟᴋ
        乂 sᴛᴀʟᴋᴄʜ`
        conn.sendMessage(m.chat, {
        text: tols,
        contextInfo: {
            externalAdReply: {
                title: `魔王ｍａｏｕｒａｆａ|ᵇᵒᵗ`,
                body: `ｍａｏｕｒａｆａ`,
                thumbnailUrl: global.thumblist,
                sourceUrl: global.yt,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m })
};
break;
case "mse": case "searchmenu": case "menusearch": {
let search = `⏤͟͟͞͞──────────────────
*<> [ SEARCH - MENU ] <>*
─────────────────͟͟͞͞⏤
        乂 ᴘʟᴀʏsᴘᴏᴄʜ
        乂 ᴘʟᴀʏs
        乂 ᴏᴛᴀᴋᴜᴅᴇsᴜ
        乂 ᴛɪᴋᴛᴏᴋsᴇᴀʀᴄʜ
        乂 ᴘʟᴀʏᴄʜ
        乂 ᴍʟʙʙ
        乂 ᴋᴏᴍɪᴋs
        乂 ɢᴏᴏɢʟᴇsᴇᴀʀᴄʜ
        乂 ᴘɪɴ
        乂 ʏᴛᴍᴘ𝟺
        乂 ɴᴀsᴀ
        乂 ᴋᴏᴍᴘᴀs
        乂 ʙɪʟɪʙɪʟɪ
        乂 ʏᴛᴍᴘ𝟹
        乂 ʏᴛs
        乂 ᴘʟᴀʏ
        乂 ɪɴғᴏɢᴇᴍᴘᴀ
        乂 ᴅᴏɴɢᴇɴɢ
        乂 ᴄᴜᴀᴄᴀ
        乂 ᴘʟᴀʏsᴛᴏʀᴇ`
        conn.sendMessage(m.chat, {
        text: search,
        contextInfo: {
            externalAdReply: {
                title: `魔王ｍａｏｕｒａｆａ|ᵇᵒᵗ`,
                body: `ｍａｏｕｒａｆａ`,
                thumbnailUrl: global.thumblist,
                sourceUrl: global.yt,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m })
};
break;
case "mdown": case "downloadmenu": case "menudownload":{
let down = `⏤͟͟͞͞──────────────────
*<> [ DOWNLOAD - MENU ] <>*
─────────────────͟͟͞͞⏤
        乂 ᴍᴇᴅɪᴀғɪʀᴇ
        乂 ᴛɪᴋᴛᴏᴋ
        乂 ɪɢᴅʟ
        乂 sᴘᴏᴛɪғʏᴅʟ
        乂 ғʙ
        乂 ɢɪᴛᴄʟᴏɴᴇ
        乂 ʏᴛs
        乂 ʏᴛᴍᴘ𝟹
        乂 ʏᴛᴍᴘ𝟺
        乂 ᴘʟᴀʏ
        乂 ᴘᴀsᴛᴇʙɪɴ`
        conn.sendMessage(m.chat, {
        text: down,
        contextInfo: {
            externalAdReply: {
                title: `魔王ｍａｏｕｒａｆａ|ᵇᵒᵗ`,
                body: `ｍａｏｕｒａｆａ`,
                thumbnailUrl: global.thumblist,
                sourceUrl: global.yt,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m })
};
break;
case "mgr": case "groupmenu": case "menugroup": {
let group = `⏤͟͟͞͞──────────────────
*<> [ GROUP - MENU ] <>*
─────────────────͟͟͞͞⏤
        乂 ᴀɴᴛɪᴘʀᴏᴍᴏᴛɪᴏɴ
        乂 ᴀɴᴛɪᴛᴀɢsᴡ
        乂 ᴛᴏᴛᴀɢ
        乂 ᴛᴀɢᴀʟʟ
        乂 ᴋɪᴄᴋ
        乂 ᴀᴅᴅ
        乂 ʟɪɴᴋɢᴄ
        乂 sᴇɴᴅʟɪɴᴋɢᴄ
        乂 ᴘʀᴏᴍᴏᴛᴇ
        乂 ᴅᴇᴍᴏᴛᴇ
        乂 ʜɪᴅᴇᴛᴀɢ
        乂 ᴀɴᴛɪʟɪɴᴋ
        乂 ᴀɴᴛɪʟɪɴᴋᴠ𝟸
        乂 ᴏᴘᴇɴᴛɪᴍʀ
        乂 ᴄʟᴏsᴇᴛɪᴍᴇ
        乂 ᴄᴇᴋᴀsᴀʟᴍᴇᴍʙᴇʀ`
        conn.sendMessage(m.chat, {
        text: group,
        contextInfo: {
            externalAdReply: {
                title: `魔王ｍａｏｕｒａｆａ|ᵇᵒᵗ`,
                body: `ｍａｏｕｒａｆａ`,
                thumbnailUrl: global.thumblist,
                sourceUrl: global.yt,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m })
};
break;
case "mpanel": case "menupanel": case "panelmenu": {
let panel = `⏤͟͟͞͞──────────────────
*<> [ CPANEL - MENU ] <>*
─────────────────͟͟͞͞⏤
        乂 𝟷ɢʙ
        乂 𝟸ɢʙ
        乂 𝟹ɢʙ
        乂 𝟺ɢʙ
        乂 𝟻ɢʙ
        乂 𝟼ɢʙ
        乂 𝟽ɢʙ
        乂 𝟾ɢʙ
        乂 𝟿ɢʙ
        乂 𝟷𝟶ɢʙ
        乂 ᴜɴʟɪ`
        conn.sendMessage(m.chat, {
        text: panel,
        contextInfo: {
            externalAdReply: {
                title: `魔王ｍａｏｕｒａｆａ|ᵇᵒᵗ`,
                body: `ｍａｏｕｒａｆａ`,
                thumbnailUrl: global.thumblist,
                sourceUrl: global.yt,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m })
};
break;
case "mrpg": case "rpgmenu": case "menurpg": {
let rpg = `⏤͟͟͞͞──────────────────
*<> [ RPG - MENU ] <>*
─────────────────͟͟͞͞⏤
        乂 ᴍʏɢᴜɪʟᴅ
        乂 ɢᴜɪʟᴅɪɴꜰᴏ
        乂 ᴅᴇʟɢᴜɪʟᴅ
        乂 ᴊᴏɪɴɢᴜɪʟᴅ
        乂 ᴄʀᴇᴀᴛᴇɢᴜɪʟᴅ
        乂 ʟɪꜱᴛɢᴜɪʟᴅ
        乂 ᴋᴇʀᴊᴀ 
        乂 ʙᴀɴᴋᴄᴇᴋ
        乂 ᴍᴀʟɪɴɢ
        乂 ʙᴀɴᴋɴᴀʙᴜɴɢ
        乂 ʙᴀɴᴋᴛᴀʀɪᴋ
        乂 ʙᴇʀᴋᴇʙᴏɴ
        乂 ᴄʀᴀꜰᴛɪɴɢ
        乂 ʙᴇᴛ
        乂 ʙᴏɴᴜꜱ
        乂 ʙᴜᴀʜ
        乂 ɴᴇʙᴀɴɢ
        乂 ʙᴇᴋᴇʀᴊᴀ
        乂 ʙᴀɴꜱᴏꜱ
        乂 ᴛᴀxʏ
        乂 ᴍᴜʟᴜɴɢ
        乂 ʙᴇʀʙᴜʀᴜ
        乂 ᴘᴏʟɪꜱɪ
        乂 ʙᴇʀᴅᴀɢᴀɴɢ
        乂 ʀᴀᴍᴘᴏᴋ
        乂 ʙᴜɴᴜʜ
        乂 ᴄᴏʟʟᴇᴄᴛ
        乂 ᴍᴀɴᴄɪɴɢ
        乂 ʀᴇᴘᴀɪʀ
        乂 ꜰᴇᴇᴅ
        乂 ꜰɪɢʜᴛ
        乂 ɢᴀᴊɪᴀɴ
        乂 ᴜᴘɢʀᴀᴅᴇ
        乂 ᴛʀᴀɴꜱꜰᴇʀ
        乂 ꜱʜᴏᴘ
        乂 ꜱᴇʟᴇᴄᴛꜱᴋɪʟʟ
        乂 ꜱᴀᴍᴘᴀʜ
        乂 ʀᴏᴋᴇᴛ
        乂 ᴏᴊᴇᴋ
        乂 ɴɢᴜʟɪ
        乂 ᴘᴀꜱᴀʀ
        乂 ʀᴏʙ
        乂 ʀᴇꜰᴇʀᴀʟ
        乂 ᴘᴇᴛꜱʜᴏᴘ
        乂 ᴋᴏʟᴀᴍ
        乂 ᴋᴏʙᴏʏ
        乂 ʟᴇᴀᴅᴇʀʙᴏᴀʀᴅ`
        conn.sendMessage(m.chat, {
        text: rpg,
        contextInfo: {
            externalAdReply: {
                title: `魔王ｍａｏｕｒａｆａ|ᵇᵒᵗ`,
                body: `ｍａｏｕｒａｆａ`,
                thumbnailUrl: global.thumblist,
                sourceUrl: global.yt,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m })
};
break;
case "mfun": case "menufun": case "funmenu": {
let fun = `⏤͟͟͞͞──────────────────
*<> [ FUN - MENU ] <>*
─────────────────͟͟͞͞⏤
        乂 ᴀᴘᴀᴋᴀʜ 
        乂 ʙᴀɢᴀɪᴍᴀɴᴀᴋᴀʜ  
        乂 ᴋᴀᴘᴀɴᴋᴀʜ 
        乂 ʙɪꜱᴀᴋᴀʜ 
        乂 ꜱᴀɴɢᴇᴄᴇᴋ 
        乂 ᴄᴀɴᴛɪᴋᴄᴇᴋ 
        乂 ɢᴀɴᴛᴇɴɢᴄᴇᴋ 
        乂 ᴊᴏᴍᴏᴋᴄᴇᴋ 
        乂 ᴡᴀɴɢʏ 
        乂 ʀᴀᴛᴇ
        乂 ᴛᴏʟᴏʟ
        乂 ɢᴏʙʟᴏɢ
        乂 ɢᴏʙʟᴏᴋ
        乂 ɪᴅɪᴏᴛ
        乂 ɢᴀʏ
        乂 ᴊᴏᴍᴏᴋ
        乂 ʙᴀᴊɪɴɢᴀɴ
        乂 ᴍᴜɴᴀꜰɪᴋ
        乂 ᴋᴏɴᴛᴏʟ
        乂 ʏᴀᴛɪᴍ
        乂 ᴘᴏᴋᴇ
        乂 ᴘᴇᴍʙᴏᴋᴇᴘ
        乂 ʜɪᴛᴀᴍ
        乂 ᴊᴀᴡᴀ
        乂 ᴡɪʙᴜ
        乂 ꜱᴛʀᴇꜱꜱ
        乂 ᴍɪꜱᴋɪɴ
        乂 ᴄᴀɴᴛɪᴋ
        乂 ᴍᴀɴɪꜱ
        乂 ʙᴀʙɪ
        乂 ɢᴀɴᴛᴇɴɢ
        乂 ᴄɪɴᴀ
        乂 ᴀᴛʜᴇɪꜱ
        乂 ᴘᴀᴘᴜᴀ
        乂 ɴɪɢɢᴀ
        乂 ᴘᴇɴɢᴇɴᴛᴏᴛ
        乂 ꜱᴇᴋꜱɪ
        乂 ᴋᴀᴡᴀɪ
        乂 ᴛᴇʀᴄɪɴᴅᴏ
        乂 ꜰᴇᴍʙᴏᴋᴇꜰ
        乂 ᴘᴇɴɢᴏᴄᴏᴋ
        乂 ᴄᴀʙᴜʟ
        乂 ꜰᴜᴄᴋʙᴏʏ
        乂 ᴘʟᴀʏʙᴏʏ
        乂 ꜱᴀɴɢᴇ
        乂 ꜱᴀɴɢᴇᴀɴ
        乂 ʜᴏᴛ
        乂 ᴀᴘᴀᴋᴀʜ
        乂 ʙᴀɢᴀɪᴍᴀɴᴀ
        乂 ʙɪsᴀᴋᴀʜ
        乂 ɢᴀɴᴛᴇɴɢᴄᴇᴋ
        乂 ᴄᴀɴᴛɪᴋᴄᴇᴋ
        乂 ʜɪᴛᴀᴍᴄᴇᴋ
        乂 ᴋᴀᴘᴀɴᴋᴀʜ
        乂 ᴍᴀʀᴀʜɪʀɪᴘᴇʀ
        乂 ᴡᴀɴɢʏ
        乂 sᴀɴɢᴇᴄᴇᴋ`
        conn.sendMessage(m.chat, {
        text: fun,
        contextInfo: {
            externalAdReply: {
                title: `魔王ｍａｏｕｒａｆａ|ᵇᵒᵗ`,
                body: `ｍａｏｕｒａｆａ`,
                thumbnailUrl: global.thumblist,
                sourceUrl: global.yt,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m })
};
break;
case "mprim": case "menuprimbon": case "primbonmenu": {
let primbon = `⏤͟͟͞͞──────────────────
*<> [ PRIMBON - MENU ] <>*
─────────────────͟͟͞͞⏤
        乂 ᴀʀᴛɪᴍɪᴍᴘɪ
        乂 ᴀʀᴛɪɴᴀᴍᴀ
        乂 ʀᴀᴍᴀʟᴊᴏᴅᴏʜ
        乂 ʀᴀᴍᴀʟᴊᴏᴅᴏʜʙᴀʟɪ
        乂 ꜱᴜᴀᴍɪɪꜱᴛʀɪ
        乂 ʀᴀᴍᴀʟᴄɪɴᴛᴀ
        乂 ᴄᴏᴄᴏᴋɴᴀᴍᴀ
        乂 ᴘᴀꜱᴀɴɢᴀɴ
        乂 ᴊᴀᴅɪᴀɴɴɪᴋᴀʜ
        乂 ꜱɪꜰᴀᴛᴜꜱᴀʜᴀ
        乂 ʀᴇᴢᴇᴋɪ
        乂 ᴘᴇᴋᴇʀᴊᴀᴀɴ
        乂 ɴᴀꜱɪʙ
        乂 ᴘᴇɴʏᴀᴋɪᴛ
        乂 ᴛᴀʀᴏᴛ
        乂 ꜰᴇɴɢꜱʜᴜɪ
        乂 ʜᴀʀɪʙᴀɪᴋ
        乂 ʜᴀʀɪꜱᴀɴɢᴀʀ
        乂 ʜᴀʀɪꜱɪᴀʟ
        乂 ɴᴀɢᴀʜᴀʀɪ
        乂 ᴀʀᴀʜʀᴇᴢᴇᴋɪ
        乂 ᴘᴇʀᴜɴᴛᴜɴɢᴀɴ
        乂 ᴡᴇᴛᴏɴ
        乂 ᴋᴀʀᴀᴋᴛᴇʀ
        乂 ᴋᴇʙᴇʀᴜɴᴛᴜɴɢᴀɴ
        乂 ᴍᴇᴍᴀɴᴄɪɴɢ
        乂 ᴍᴀꜱᴀꜱᴜʙᴜʀ
        乂 ᴢᴏᴅɪᴀᴋ
        乂 ꜱʜɪᴏ`
        conn.sendMessage(m.chat, {
        text: primbon,
        contextInfo: {
            externalAdReply: {
                title: `魔王ｍａｏｕｒａｆａ|ᵇᵒᵗ`,
                body: `ｍａｏｕｒａｆａ`,
                thumbnailUrl: global.thumblist,
                sourceUrl: global.yt,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m })
};
break;
case "mgame": case "menugame": case "gamemenu":{
let game = `⏤͟͟͞͞──────────────────
*<> [ GAME - MENU ] <>*
─────────────────͟͟͞͞⏤
        乂 ᴄᴀsɪɴᴏ
        乂 sᴜɪᴛ 
        乂 ᴛɪᴄᴛᴀᴄᴛᴏᴇ
        乂 ᴅᴇʟᴛᴛᴛ
        乂 ᴘᴇᴛᴀᴋʙᴏᴍ
        乂 ᴅᴇʟᴘᴇᴛᴀᴋʙᴏᴍ
        乂 ᴛᴇʙᴀᴋɢᴀᴍʙᴀʀ
        乂 ᴛᴇʙᴀᴋᴀɴɪᴍᴇ
        乂 ᴛᴇʙᴀᴋᴋᴀʙᴜᴘᴀᴛᴇɴ
        乂 ᴛᴇʙᴀᴋʟᴀɢᴜ
        乂 ᴋᴜɪs
        乂 ᴛᴇʙᴀᴋᴋᴀʟɪᴍᴀᴛ
        乂 ᴛᴇʙᴀᴋᴋᴀᴛᴀ
        乂 ᴛᴇʙᴀᴋʟɪʀɪᴋ
        乂 ᴛᴇʙᴀᴋᴋɪᴍɪᴀ
        乂 ᴛᴇʙᴀᴋʙᴇɴᴅᴇʀᴀ
        乂 sᴜsᴜɴᴋᴀᴛᴀ
        乂 ᴀsᴀʜᴏᴛᴀᴋ
        乂 sɪᴀᴘᴀᴋᴀʜᴀᴋᴜ
        乂 ᴄᴀᴋʟᴏɴᴛᴏɴɢ
        乂 ᴍᴀᴛʜ ᴍᴏᴅᴇ
        乂 ғᴀᴍɪʟʏ100`
        conn.sendMessage(m.chat, {
        text: game,
        contextInfo: {
            externalAdReply: {
                title: `魔王ｍａｏｕｒａｆａ|ᵇᵒᵗ`,
                body: `ｍａｏｕｒａｆａ`,
                thumbnailUrl: global.thumblist,
                sourceUrl: global.yt,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m })
};
break;
case "mquo": case "quotesmenu": case "menuquotes": {
let quotes = `⏤͟͟͞͞──────────────────
*<> [ QUOTES - MENU ] <>*
─────────────────͟͟͞͞⏤
        乂 ǫᴜᴏᴛᴇsᴀɴɪᴍᴇ
        乂 ǫᴜᴏᴛᴇsʙᴀᴄᴏᴛ
        乂 ǫᴜᴏᴛᴇsʙᴜᴄɪɴ
        乂 ǫᴜᴏᴛᴇsᴍᴏᴛɪᴠᴀsɪ
        乂 ǫᴜᴏᴛᴇsɢᴀʟᴀᴜ
        乂 ǫᴜᴏᴛᴇsɢᴏᴍʙᴀʟ
        乂 ǫᴜᴏᴛᴇsʜᴀᴄᴋᴇʀ
        乂 ǫᴜᴏᴛᴇsʙɪᴊᴀᴋ`
        conn.sendMessage(m.chat, {
        text: quotes,
        contextInfo: {
            externalAdReply: {
                title: `魔王ｍａｏｕｒａｆａ|ᵇᵒᵗ`,
                body: `ｍａｏｕｒａｆａ`,
                thumbnailUrl: global.thumblist,
                sourceUrl: global.yt,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m })
};
break;
case "manim": case "menuanime": case "animemenu":{
let anime = `⏤͟͟͞͞──────────────────
*<> [ ANIME - MENU ] <>*
─────────────────͟͟͞͞⏤
        乂 ʀᴀɴᴅᴏᴍʙᴀ
        乂 ʀᴀɴᴅᴏᴍ-ᴀɴɪᴍᴇ
        乂 ᴀɴɪᴍᴇᴀᴡᴏᴏ
        乂 ᴀɴɪᴍᴇᴍᴇɢᴜᴍɪɴ
        乂 ᴀɴɪᴍᴇꜱʜɪɴᴏʙᴜ
        乂 ᴀɴɪᴍᴇʜᴀɴᴅʜᴏʟᴅ
        乂 ᴀɴɪᴍᴇʜɪɢʜꜰɪᴠᴇ
        乂 ᴀɴɪᴍᴇᴄʀɪɴɢᴇ
        乂 ᴀɴɪᴍᴇᴅᴀɴᴄᴇ
        乂 ᴀɴɪᴍᴇʜᴀᴘᴘʏ
        乂 ᴀɴɪᴍᴇɢʟᴏᴍᴘ
        乂 ᴀɴɪᴍᴇꜱᴍᴜɢ
        乂 ᴀɴɪᴍᴇʙʟᴜꜱʜ
        乂 ᴀɴɪᴍᴇᴡᴀᴠᴇ
        乂 ᴀɴɪᴍᴇꜱᴍɪʟᴇ
        乂 ᴀɴɪᴍᴇᴘᴏᴋᴇ
        乂 ᴀɴɪᴍᴇᴡɪɴᴋ 
        乂 ᴀɴɪᴍᴇʙᴏɴᴋ
        乂 ᴀɴɪᴍᴇʙᴜʟʟʏ
        乂 ᴀɴɪᴍᴇʏᴇᴇᴛ
        乂 ᴀɴɪᴍᴇʙɪᴛᴇ
        乂 ᴀɴɪᴍᴇʟɪᴄᴋ
        乂 ᴀɴɪᴍᴇᴋɪʟʟ
        乂 ᴀɴɪᴍᴇᴄʀʏ
        乂 ᴀɴɪᴍᴇᴡʟᴘ
        乂 ᴀɴɪᴍᴇᴋɪꜱꜱ
        乂 ᴀɴɪᴍᴇʜᴜɢ
        乂 ᴄᴏᴜᴘʟᴇᴘᴘ 
        乂 ᴀɴɪᴍᴇɴᴇᴋᴏ
        乂 ᴀɴɪᴍᴇᴘᴀᴛ
        乂 ᴀɴɪᴍᴇꜱʟᴀᴘ
        乂 ᴀɴɪᴍᴇᴄᴜᴅᴅʟᴇ
        乂 ᴀɴɪᴍᴇᴡᴀɪꜰᴜ
        乂 ᴀɴɪᴍᴇɴᴏᴍ
        乂 ᴀɴɪᴍᴇꜰᴏxɢɪʀʟ
        乂 ᴀɴɪᴍᴇᴛɪᴄᴋʟᴇ 
        乂 ᴀɴɪᴍᴇɢᴇᴄɢ          
        乂 ᴅᴏɢᴡᴏᴏꜰ           
        乂 8ʙᴀʟʟᴘᴏᴏʟ            
        乂 ɢᴏᴏꜱᴇʙɪʀᴅ 
        乂 ᴀɴɪᴍᴇꜰᴇᴇᴅ            
        乂 ᴀɴɪᴍᴇᴀᴠᴀᴛᴀʀ            
        乂 ʟɪᴢᴀʀᴅᴘɪᴄ            
        乂 ᴄᴀᴛᴍᴇᴏᴡ`
        conn.sendMessage(m.chat, {
        text: anime,
        contextInfo: {
            externalAdReply: {
                title: `魔王ｍａｏｕｒａｆａ|ᵇᵒᵗ`,
                body: `ｍａｏｕｒａｆａ`,
                thumbnailUrl: global.thumblist,
                sourceUrl: global.yt,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m })
};
break;
case "mrandom": case "randommenu": case "menurandom": {
let random = `⏤͟͟͞͞──────────────────
*<> [ RANDOM - MENU ] <>*
─────────────────͟͟͞͞⏤        
        乂 ᴍᴀʟᴀʏ
        乂 ᴋᴏʀᴇᴀɴ
        乂 ɪɴᴅᴏ
        乂 ᴊᴀᴘᴀɴᴇꜱᴇ
        乂 ᴀɴᴛɪᴡᴏʀᴋ
        乂 ʜɪᴊᴀʙ
        乂 ʙʟᴀᴄᴋᴘɪɴᴋ2
        乂 ᴀᴇꜱᴛʜᴇᴛɪᴄ
        乂 ᴠɪᴇᴛɴᴀᴍᴇꜱᴇ
        乂 ᴅᴏɢɢᴏ
        乂 ᴄᴀᴛ
        乂 ᴊᴜꜱᴛɪɴᴀ
        乂 ʀᴀɴᴅᴏᴍɢɪʀʟ
        乂 ʀᴀɴᴅᴏᴍʙᴏʏ
        乂 ᴛʜᴀɪ
        乂 ɴᴏᴛɴᴏᴛ 
        乂 ᴋᴘᴏᴘ
        乂 ᴋᴀʏᴇꜱ
        乂 ᴄᴏꜱᴘʟᴀʏ
        乂 ʙɪᴋᴇ
        乂 ʙᴏɴᴇᴋᴀ`
        conn.sendMessage(m.chat, {
        text: random,
        contextInfo: {
            externalAdReply: {
                title: `魔王ｍａｏｕｒａｆａ|ᵇᵒᵗ`,
                body: `ｍａｏｕｒａｆａ`,
                thumbnailUrl: global.thumblist,
                sourceUrl: global.yt,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m })
};
break;
case "munban": case "unbanmenu": case "menuunban": {
let ban = `⏤͟͟͞͞──────────────────
*<> [ TXTUNBAN - MENU ] <>*
─────────────────͟͟͞͞⏤
        乂 ᴛᴇxᴛᴜɴʙᴀɴᴠ1 
        乂 ᴛᴇxᴛᴜɴʙᴀɴᴠ2 
        乂 ᴛᴇxᴛᴜɴʙᴀɴᴠ3 
        乂 ᴛᴇxᴛᴜɴʙᴀɴᴠ4 
        乂 ᴛᴇxᴛᴜɴʙᴀɴᴠ5 
        乂 ᴛᴇxᴛᴜɴʙᴀɴᴠ6 
        乂 ᴛᴇxᴛᴜɴʙᴀɴᴠ7 
        乂 ᴛᴇxᴛᴜɴʙᴀɴᴠ8 
        乂 ᴛᴇxᴛᴜɴʙᴀɴᴠ9 
        乂 ᴛᴇxᴛᴜɴʙᴀɴᴠ10 
        乂 ᴛᴇxᴛᴜɴʙᴀɴᴠ11 
        乂 ᴛᴇxᴛᴜɴʙᴀɴᴠ12 
        乂 ᴛᴇxᴛᴜɴʙᴀɴᴠ13 
        乂 ᴛᴇxᴛᴜɴʙᴀɴᴠ14 
        乂 ᴛᴇxᴛᴜɴʙᴀɴᴠ15 
        乂 ᴛᴇxᴛᴜɴʙᴀɴᴠ16 
        乂 ᴛᴇxᴛᴜɴʙᴀɴᴠ17 
        乂 ᴛᴇxᴛᴜɴʙᴀɴᴠ18  
        乂 ᴛᴇxᴛᴜɴʙᴀɴᴠ19 
        乂 ᴛᴇxᴛᴜɴʙᴀɴᴠ20 
        乂 ᴛᴇxᴛᴜɴʙᴀɴᴠ21 
        乂 ᴛᴇxᴛᴜɴʙᴀɴᴘʀᴇᴍᴠ1 
        乂 ᴛᴇxᴛᴜɴʙᴀɴᴘʀᴇᴍᴠ2 
        乂 ᴛᴇxᴛᴜɴʙᴀɴᴘʀᴇᴍᴠ3`
        conn.sendMessage(m.chat, {
        text: ban,
        contextInfo: {
            externalAdReply: {
                title: `魔王ｍａｏｕｒａｆａ|ᵇᵒᵗ`,
                body: `ｍａｏｕｒａｆａ`,
                thumbnailUrl: global.thumblist,
                sourceUrl: global.yt,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m })
};
break;
case "mai": case "menuai": case "aimenu": {
let ai = `⏤͟͟͞͞──────────────────
*<> [ MENU - AI ] <>*
─────────────────͟͟͞͞⏤        
        乂 ᴀɪɴsғᴡ
        乂 ᴀɪᴇᴅɪᴛ
        乂 ᴅᴇᴇᴘɪᴍɢ
        乂 ᴛᴇʟᴜsᴜʀɪɪᴍɢ`
        conn.sendMessage(m.chat, {
        text: ai,
        contextInfo: {
            externalAdReply: {
                title: `魔王ｍａｏｕｒａｆａ|ᵇᵒᵗ`,
                body: `ｍａｏｕｒａｆａ`,
                thumbnailUrl: global.thumblist,
                sourceUrl: global.yt,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m })
};
break;
case "mano": case "anonymousmenu": case "menuanonim": {
let ano = `⏤͟͟͞͞──────────────────
*<> [ ANONIM - MENU ] <>*
─────────────────͟͟͞͞⏤        
        乂 ᴍᴇɴғᴇs
        乂 ʙᴀʟᴀsᴍᴇɴғᴇs
        乂 ᴄᴇᴋʀᴇᴘᴏʀᴛs
        乂 ᴅᴇʟʀᴇᴘᴏʀᴛs
        乂 ʀᴇᴘᴏʀᴛs
        乂 ʀᴇᴘʟʏ
        乂 ʀᴇᴘᴏʀᴛ
        乂 ᴄᴇᴋsᴀʀᴀɴ
        乂 sᴀʀᴀɴ
        乂 ɴɢʟ`
                conn.sendMessage(m.chat, {
        text: ano,
        contextInfo: {
            externalAdReply: {
                title: `魔王ｍａｏｕｒａｆａ|ᵇᵒᵗ`,
                body: `ｍａｏｕｒａｆａ`,
                thumbnailUrl: global.thumblist,
                sourceUrl: global.yt,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m })
};
break;  
case "mst": {
let store = `⏤͟͟͞͞──────────────────
*<> [ STORE - MENU ] <>*
─────────────────͟͟͞͞⏤        
        乂 ᴀᴅᴅʟɪsᴛ
        乂 ᴅᴇʟʟɪsᴛ       
        乂 ʟɪsᴛ
        乂 ᴅᴏɴᴇ
        乂 ᴘʀᴏsᴇs
        乂 ʙᴀᴛᴀʟ
        乂 ᴀᴄᴄ
        乂 ᴍɪɴsᴀʟᴅᴏ
        乂 ᴋɪʀɪᴍ
        乂 ᴅᴇᴘᴏsɪᴛ`
                        conn.sendMessage(m.chat, {
        text: store,
        contextInfo: {
            externalAdReply: {
                title: `魔王ｍａｏｕｒａｆａ|ᵇᵒᵗ`,
                body: `ｍａｏｕｒａｆａ`,
                thumbnailUrl: global.thumblist,
                sourceUrl: global.yt,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m })
};
break;  
case "smenu": {
let store = `⏤͟͟͞͞──────────────────
*<> [ SOUND - MENU ] <>*
─────────────────͟͟͞͞⏤            
        乂 ʙᴀꜱꜱ
        乂 ʙʟᴏᴡɴ
        乂 ᴅᴇᴇᴘ
        乂 ᴇᴀʀʀᴀᴘᴇ
        乂 ꜰᴀꜱᴛ
        乂 ꜰᴀᴛᴍ
        乂 ɴɪɢʜᴛᴄᴏʀᴇ
        乂 ʀᴇᴠᴇʀꜱᴇ
        乂 ʀᴏʙᴏᴛ
        乂 ꜱʟᴏᴡ
        乂 ꜱᴍᴏᴏᴛʜ
        乂 ꜱQᴜɪʀʀᴇʟ
        乂 ᴍᴀɴɢᴋᴀɴᴇ𝟷 - ᴍᴀɴɢᴋᴀɴᴇ𝟻𝟺
        乂 sɪᴜᴜ
        乂 ᴀɴᴊᴀʏ
        乂 ᴏᴍᴀɢᴀ
        乂 ᴋᴀᴍᴜ-ɴᴀɴʏᴀ
        乂 ᴀᴄᴜᴍᴀʟᴀᴋᴀ
        乂 ғᴀʀʜᴀɴ-ᴋᴇʙᴀʙ
        乂 ʀᴇᴢᴀ-ᴋᴇᴄᴀᴘ`
                        conn.sendMessage(m.chat, {
        text: store,
        contextInfo: {
            externalAdReply: {
                title: `魔王ｍａｏｕｒａｆａ|ᵇᵒᵗ`,
                body: `ｍａｏｕｒａｆａ`,
                thumbnailUrl: global.thumblist,
                sourceUrl: global.yt,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m })
};
break;  
case "mnsfw": {
let store = `⏤͟͟͞͞──────────────────
*<> [ NSFW - MENJ ] <>*
─────────────────͟͟͞͞⏤
        乂 ᴛʀᴀᴘ
        乂 ᴀʜᴇɢᴀᴏ
        乂 ᴀɴɪᴍᴇꜱᴘᴀɴᴋ
        乂 ᴍɪʟꜰ
        乂 ʜᴇɴᴛᴀɪ-ᴡᴀɪꜰᴜ
        乂 ʜᴇɴᴛᴀɪ-ɴᴇᴋᴏ
        乂 ᴀꜱꜱ
        乂 ʙᴅꜱᴍ
        乂 ʙʟᴏᴡᴊᴏʙ
        乂 ᴄᴜᴄᴋᴏʟᴅ
        乂 ᴄᴜᴍ
        乂 ᴇʙᴀ
        乂 ᴇʀᴏ
        乂 ꜰᴇɴᴅᴏᴍ
        乂 ꜰᴏᴏᴛ
        乂 ɢᴀɴɢʙᴀɴɢ
        乂 ɢʟᴀꜱꜱᴇꜱ 
        乂 ᴊᴀʜʏ
        乂 ᴍᴀɴɢᴀ
        乂 ᴍᴀꜱᴛᴜʀʙᴀᴛɪᴏɴ 
        乂 ɴᴇᴋᴏ-ʜᴇɴᴛᴀɪ
        乂 ɴᴇᴋᴏ-ʜᴇɴᴛᴀɪ2
        乂 ɴꜱꜰᴡʟᴏʟɪ
        乂 ᴏʀɢʏ
        乂 ᴘᴀɴᴛɪᴇꜱ
        乂 ᴘᴜꜱʏ
        乂 ᴛᴇɴᴛᴀᴄʟᴇꜱ
        乂 ᴛʜɪɢʜꜱ
        乂 ʏᴜʀɪ
        乂 ᴢᴇᴛᴛᴀɪ
        乂 ɢɪꜰʙʟᴏᴡᴊᴏʙ
        乂 ɢɪꜰʜᴇɴᴛᴀɪ
        乂 ꜰᴏᴏᴛ`
                        conn.sendMessage(m.chat, {
        text: store,
        contextInfo: {
            externalAdReply: {
                title: `魔王ｍａｏｕｒａｆａ|ᵇᵒᵗ`,
                body: `ｍａｏｕｒａｆａ`,
                thumbnailUrl: global.thumblist,
                sourceUrl: global.yt,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m })
};
break;  
// ───────────────────────────────────────────────────────────────────────────────乂 🥀 OWNER FEATURE ───────────────────────────────────────────────────────────────乂 \\
            case 'creategc': {
                if (!isCreator) return reply('Fitur ini hanya untuk owner!');
                if (!text) return reply('Masukkan nama grup dan nomor yang diundang!\nContoh: .creategc Udin,6281910154270');

                let args = text.split(",");
                let groupName = args[0].trim();
                let invitees = args.slice(1).map(num => num.trim() + "@s.whatsapp.net");

                if (!groupName) return reply('Nama grup tidak boleh kosong!');
                if (invitees.length === 0) return newReply('Tambahkan setidaknya satu nomor untuk diundang!');

                try {
                    let group = await conn.groupCreate(groupName, [m.sender]);
                    let {
                        id
                    } = group;

                    await conn.groupSettingUpdate(id, "locked");

                    let inviteCode = await conn.groupInviteCode(id);
                    let groupLink = `https://chat.whatsapp.com/${inviteCode}`;

                    for (let user of invitees) {
                        await conn.groupParticipantsUpdate(id, [user], "invite");
                    }

                    await reply(`Grup berhasil dibuat!\nNama: ${groupName}\nLink: ${groupLink}\n\n✅ Hanya admin yang bisa mengubah info grup.`);

                } catch (err) {
                    reply('Gagal membuat grup, pastikan bot punya izin!');
                }
                break;
            }
            case "leave": {
if (!isCreator) return reply(mess.creator)
if (!m.isGroup) return reply(mess.group)
await m.reply("Baik, Saya Akan Keluar Dari Grup Ini")
await sleep(4000)
await conn.groupLeave(m.chat)
}
break
case "joingc": case "join": {
if (!isCreator) return reply(mess.creator)
if (!text) return m.reply(example("linkgcnya"))
if (!text.includes("chat.whatsapp.com")) return m.reply("Link tautan tidak valid")
let result = text.split('https://chat.whatsapp.com/')[1]
let id = await conn.groupAcceptInvite(result)
m.reply(`Berhasil bergabung ke dalam grup ${id}`)
}
break
            case 'block':
            case 'blok':
                if (!isCreator) return reply(mess.creator)
                if (!text) return reply(`Masukkan nomor target!`)
                let blok = q.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                conn.updateBlockStatus(blok, 'block')
                m.reply(`Sukses block @${blok.split('@')[0]}`)
                break
            case 'unblock':
            case 'unblok':
                if (!isCreator) return reply(mess.creator)
                if (!text) return reply(`Masukkan nomor target!`)
                let unblok = q.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                conn.updateBlockStatus(unblok, 'unblock')
                m.reply(`Sukses unblock @${unblok.split('@')[0]}`)
                break
            case 'listblock':
            case 'listblok':
                let listblok = await conn.fetchBlocklist()
                m.reply('*LIST BLOCK*\n' + `Total: ${listblok == undefined ? '*0* Diblokir' : '*' + listblok.length + '* Diblokir'}\n\n` + listblok.map(v => '» @' + v.replace(/@.+/, '')).join`\n`)
                break
case 'setconfig': {
    if (!isCreator) return reply(mess.creator)
    
    const fs = require('fs')
    const configPath = require.resolve('./config.js') // Pastikan path ini sesuai
    let configText = fs.readFileSync(configPath, 'utf-8')

    const settingsMap = {
        version: 'global.version',
        owner: 'global.owner',
        ownername: 'global.ownerName',
        fother: 'global.fother',
        packname: 'global.packname',
        author: 'global.author',
        namabot: 'global.namabot',
        website: 'global.website',
        idch: 'global.idch',
        ceha: 'global.ceha',
        linkgc: 'global.linkgc',
        yt: 'global.yt',
    }

    const [key, ...value] = text.split(' ')
    if (!key || !value.length) {
        const availableKeys = Object.keys(settingsMap).join(', ')
        return reply(`Format salah!\nContoh: ${prefix}set version 3.1.0\n\nKunci yang tersedia:\n${availableKeys}`)
    }

    const settingKey = key.toLowerCase()
    const globalPath = settingsMap[settingKey]

    if (!globalPath) {
        return reply(`❌ Kunci *${settingKey}* tidak dikenali.`)
    }

    // Format sesuai tipe: array vs string
    const newValue = (settingKey === 'owner' || settingKey === 'idch')
        ? JSON.stringify(value) // array
        : `"${value.join(' ')}"` // string

    const regex = new RegExp(`${globalPath}\\s*=\\s*["'\`\\[].*?["'\`\\]]`, 's')
    configText = configText.replace(regex, `${globalPath} = ${newValue}`)

    fs.writeFileSync(configPath, configText)

    // Update nilai di runtime
    eval(`${globalPath} = ${newValue}`)

    reply(`✔️ *${globalPath}* berhasil diubah dan disimpan permanen.`)
}
break
case 'getconfig': {
    if (!isCreator) return reply(mess.creator)

    const [key] = text.split(' ')
    if (!key) {
        const availableKeys = Object.keys({
            version: 1, owner: 1, ownername: 1, fother: 1,
            packname: 1, author: 1, namabot: 1, website: 1,
            idch: 1, ceha: 1, linkgc: 1, yt: 1
        }).join(', ')
        return reply(`Format salah!\nContoh: ${prefix}get version\n\nKunci yang tersedia:\n${availableKeys}`)
    }

    const settingsMap = {
        version: global.version,
        owner: global.owner,
        ownername: global.ownerName,
        fother: global.fother,
        packname: global.packname,
        author: global.author,
        namabot: global.namabot,
        website: global.website,
        idch: global.idch,
        ceha: global.ceha,
        linkgc: global.linkgc,
        yt: global.yt,
    }

    const settingKey = key.toLowerCase()
    if (!(settingKey in settingsMap)) {
        return reply(`❌ Kunci *${settingKey}* tidak dikenali.`)
    }

    let value = settingsMap[settingKey]
    if (Array.isArray(value)) value = value.join(', ')

    reply(`📥 Nilai *${settingKey}* saat ini:\n${value}`)
}
break

case 'self': {
if (!isCreator) return reply(mess.creator)
global.self = false
m.reply('Sukses Change To Self Mode')
}
break

case 'public': {
if (!isCreator) return reply(mess.creator)
global.public = true
m.reply('Sukses Change To Public Mode')
}
break
case 'spamngl': {
if (!isCreator) return reply(mess.creator)
  if (!text.includes('|')) return reply(`Example:\n.spamngl https://ngl.link/kyygantng1 | Halo kamu cakep | anonymous | 5`);

  let [link, message, type, count] = text.split('|').map(v => v.trim());
  if (!link || !message || !type || !count) return reply(`Format salah!\nContoh: .spamngl https://ngl.link/namamu | Halo | anonymous | 10`);

  if (!link.includes('ngl.link')) return reply('Link tidak valid!');
  if (!['anonymous', 'not_anonymous'].includes(type)) return reply('Tipe hanya bisa: anonymous / not_anonymous');
  if (isNaN(count) || count < 1 || count > 20) return reply('Jumlah spam harus angka antara 1 - 20');

  reply(`⏳ Mengirim pesan ke ${link} sebanyak ${count}x...`);

  try {
    let api = `https://fastrestapis.fasturl.cloud/tool/spamngl?link=${encodeURIComponent(link)}&message=${encodeURIComponent(message)}&type=${type}&count=${count}`;
    let res = await fetch(api);
    let json = await res.json();

    if (json.status != 200) return reply('❌ Gagal mengirim pesan.');
    
    reply(`✅ *Berhasil kirim pesan!*\n\n🔗 Link: ${json.result.sentTo}\n💬 Pesan: ${json.result.message}\n📦 Jumlah: ${json.result.count}\n👤 Tipe: ${json.result.type}`);
  } catch (e) {
    console.error(e);
    reply('❌ Error saat mencoba mengirim spam.');
  }
}
break;
            case 'delcase': {
                if (!isCreator) return reply('Fitur Khusus Owner!')
                if (!text) return reply('Mana case nya bang?');
                dellCase('./case.js', q)
                m.reply('Berhasil menghapus case!.');
            }
            break
                       case 'getcase':
                if (!isCreator) return tolak('Khusus Owner!')
                if (!text) return warning(`Mau ambil case apa? `)
                const getCase = (cases) => {
                    return "case" + `'${cases}'` + fs.readFileSync("./case.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
                }
                m.reply(`${getCase(q)}`)
                break
case 'addcase': {
 if (!isCreator) return reply(mess.creator)
 if (!text) return reply('Mana case nya');
    const fs = require('fs');
const namaFile = 'case.js';
const caseBaru = `${text}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Terjadi kesalahan saat membaca file:', err);
        return;
    }
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                reply('Terjadi kesalahan saat menulis file:', err);
            } else {
                reply('Case baru berhasil ditambahkan.');
            }
        });
    } else {
        reply('Tidak dapat menambahkan case dalam file.');
    }
});

}
break
case 'enc':
  try {
    if (!text) return reply(`ukkan format yang benar!\n\nContoh: .${command} base64 code mu
 
*JENIS ENC*
> base64
> base32
> base58
> hex
> binary
> ascii
> urlencode
> html
`)
 
    const [type, ...rest] = args
    const input = rest.join(' ')
    const mode = 'encode'
 
    const url = `https://velyn.biz.id/api/tools/encoder?input=${encodeURIComponent(input)}&type=${type}&mode=${mode}`
 
    const res = await fetch(url)
    const json = await res.json()
 
    if (!json.status) return reply(`${json.error || 'Gagal encode, coba lagi nanti'}`)
 
    await conn.sendMessage(m.chat, { text:`*Hasil ${type} Encode:*\n${json.output}`}, { quoted: m });
  } catch (e) {
    conn.sendMessage(m.chat, { text: `❌ Error\nLogs error : ${e}`}, { quoted: m }); 
  }
  break
case "reactch": {
if (!isCreator) return m.reply('Khusus Owner')
if (!text) return m.reply(".reactch linkpesan 😂")
if (!args[0] || !args[1]) return m.reply("Wrong Format")
if (!args[0].includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = args[0].split('/')[4]
let serverId = args[0].split('/')[5]
let res = await conn.newsletterMetadata("invite", result)
await conn.newsletterReactMessage(res.id, serverId, args[1])
m.reply(`Berhasil mengirim reaction ${args[1]} ke dalam channel ${res.name}`)
}
break;
case 'addprem':{
if (!isCreator) return reply(mess.creator)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (!pcknm) return reply(`Penggunaan :\n*${prefix}addprem* @tag|waktu\n*${prefix}addprem* nomor|waktu\n\nContoh : ${prefix+command} @tag|30d`)
if (!atnm) return reply(`Mau yang berapa hari?`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
prem.addPremiumUser((pcknm.replace('@','')+'@s.whatsapp.net').replace(' @','@'), atnm, premium)
reply('Sukses')
} else {
var cekap = await conn.onWhatsApp(pcknm+"@s.whatsapp.net")
if (cekap.length == 0) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
prem.addPremiumUser((pcknm.replace('@','')+'@s.whatsapp.net').replace(' @','@'), atnm, premium)
reply('Sukses')
}}
break
case 'delprem': {
if (!isCreator) return reply(mess.creator)
if (!args[0]) return reply(`Penggunaan :\n*${prefix}delprem* @tag\n*${prefix}delprem* nomor`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
premium.splice(prem.getPremiumPosition(users, premium), 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
reply('Sukses!')
} else {
var cekpr = await conn.onWhatsApp(args[0]+"@s.whatsapp.net")
if (cekpr.length == 0) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
premium.splice(prem.getPremiumPosition(args[0] + '@s.whatsapp.net', premium), 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
reply('Sukses!')
}}
break
case "ambilkode": case "code":  {
 if (!isCreator) return m.reply(mess.creator)
    if (!text) return m.reply(`Gunakan: ${prefix + command} namafile.js:baris`);
    try {
        const [fileName, lineNumber] = text.split(':');
        if (!fileName || !lineNumber) return m.reply('❌ Format salah. Gunakan: namafile.js:baris');
        const fs = require('fs');
        const path = require('path');
        const baseDir = '/home/container/';
        const filePath = path.join(baseDir, fileName);
        if (!fs.existsSync(filePath)) {
            return m.reply(`❌ File ${fileName} tidak ditemukan.`);
        }
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const lines = fileContent.split('\n');
        const lineNum = parseInt(lineNumber);
        if (isNaN(lineNum) || lineNum <= 0 || lineNum > lines.length) {
            return m.reply(`❌ Baris ${lineNumber} tidak valid. File memiliki ${lines.length} baris.`);
        }
        const requestedLine = lines[lineNum - 1];
        m.reply(`📄 *${fileName}:${lineNum}*\n\n\`\`\`${requestedLine}\`\`\``);
    } catch (err) {
        console.error(err);
        m.reply('❌ Terjadi kesalahan saat mengambil kode.');
    }
}
break
 
case "setkode": case "setcode": {
 if (!isCreator) return m.reply(mess.creator);
    if (!text) return m.reply(`Gunakan: ${prefix + command} namafile.js:baris|kode baru`);
    try {
        const [fileInfo, newCode] = text.split('|');
        if (!fileInfo || !newCode) return m.reply('❌ Format salah. Gunakan: namafile.js:baris|kode baru');
        const [fileName, lineNumber] = fileInfo.split(':');
        if (!fileName || !lineNumber) return m.reply('❌ Format file salah. Gunakan: namafile.js:baris');
        const fs = require('fs');
        const path = require('path');
        const baseDir = '/home/container/';
        const filePath = path.join(baseDir, fileName);
        if (!fs.existsSync(filePath)) {
            return m.reply(`❌ File ${fileName} tidak ditemukan.`);
        }
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const lines = fileContent.split('\n');
        const lineNum = parseInt(lineNumber);
        if (isNaN(lineNum) || lineNum <= 0 || lineNum > lines.length) {
            return m.reply(`❌ Baris ${lineNumber} tidak valid. File memiliki ${lines.length} baris.`);
        }
        const oldLine = lines[lineNum - 1];
        lines[lineNum - 1] = newCode;
        fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
        m.reply(`✅ *Kode berhasil diubah pada ${fileName}:${lineNum}*\n\n*Kode lama:*\n\`\`\`${oldLine}\`\`\`\n\n*Kode baru:*\n\`\`\`${newCode}\`\`\``);
    } catch (err) {
        console.error(err);
        m.reply('❌ Terjadi kesalahan saat mengubah kode.');
    }
}
break
 
// GET FILE || SET FILE
case "getfile": {
 if (!isCreator) return m.reply(mess.creator)
 if (!q) return m.reply("Masukkan nama file!\nContoh: getfile case.js")
 const filePath = path.join(__dirname, q)
 if (!fs.existsSync(filePath)) return m.reply("File tidak ditemukan!")
 const stat = fs.statSync(filePath)
 if (stat.isDirectory()) return m.reply("Itu folder, bukan file!")
 const mime = require("mime-types")
 const mimetype = mime.lookup(filePath) || 'application/octet-stream'
 const fileName = path.basename(filePath)
 await conn.sendMessage(m.sender, {
 document: fs.readFileSync(filePath),
 fileName,
 mimetype
 }, { quoted: m })
 if (m.chat !== m.sender) return m.reply("File berhasil dikirim ke private chat")
}
break
 
case 'setfile': case 'setjs': {
 if (!isCreator) return m.reply(mess.creator);
 let filePath, newContent;
 if (text.includes('|')) {
 const splitText = text.split('|');
 filePath = splitText[0].trim();
 newContent = splitText.slice(1).join('|'); 
 } else if (text && m.quoted) {
 filePath = text.trim();
 newContent = m.quoted.text || m.quoted.content || m.quoted.message?.text || m.quoted.message?.conversation || '';
 } else {
 return m.reply(`*Format Salah!*\nContoh:\n${prefix + command} settings.js|kode`);
 }
 if (!filePath) {
 return m.reply(`*Format Salah!*\nLokasi file tidak boleh kosong`);
 }
 try {
 const fs = require('fs');
 const path = require('path');
 const absolutePath = path.isAbsolute(filePath) ? filePath : path.resolve(filePath); 
 if (!fs.existsSync(absolutePath)) {
 try {
 const dir = path.dirname(absolutePath);
 if (!fs.existsSync(dir)) {
 fs.mkdirSync(dir, { recursive: true });
 }
 fs.writeFileSync(absolutePath, '');
 m.reply(`File '${filePath}' tidak ditemukan. File baru telah dibuat.`);
 } catch (err) {
 return m.reply(`*Gagal Membuat File!*\nFile '${filePath}' tidak dapat dibuat: ${err.message}`);
 }
 }
 if (!newContent) {
 return m.reply(`*Gagal Mengubah File!*\nKonten tidak boleh kosong.`);
 }
 fs.writeFileSync(absolutePath, newContent);
 await conn.sendMessage(m.chat, { text: `_Berhasil Mengubah Isi File ${filePath} ✅_` }, { quoted: m });
 const settingsPath = path.resolve('settings.js');
 const modifiedPath = path.resolve(filePath);
 if (settingsPath === modifiedPath || filePath.includes('settings.js')) {
 m.reply('_Perubahan pada settings.js terdeteksi. Bot akan restart..._');
 setTimeout(() => {
 process.exit(0);
 }, 2000);
 }
 } catch (error) {
 console.error(`Error updating ${filePath}:`, error);
 await conn.sendMessage(m.chat, { text: `_Gagal menyimpan perubahan ke file ${filePath}: ${error.message}_` }, { quoted: m });
 }
}
break
  case 'addsewa': {
    if (!args[0]) return reply('Contoh: .addsewa https://chat.whatsapp.com/xxxxx|1hari')
    
    const [link, waktu] = args.join(' ').split('|')
    if (!link || !waktu) return reply('Format salah. Contoh: .addsewa https://chat.whatsapp.com/xxxxx|1hari')

    const match = waktu.match(/(\d+)?(\w+)/)
    if (!match) return reply('Format durasi tidak valid.')

    let [angka, satuan] = match.slice(1)
    angka = angka ? parseInt(angka) : 1
    if (!durationMap[satuan]) return reply('Gunakan satuan: jam, hari, bulan, tahun, permanen.')

    const code = link.split('/')[3]
    const jid = await conn.groupAcceptInvite(code).catch(() => null)
    if (!jid) return reply('❌ Gagal join grup.')

    const expired = durationMap[satuan] === 0 ? 'permanen' : Date.now() + (angka * durationMap[satuan])

    const data = loadSewa()
    data.push({ jid, expired })
    saveSewa(data)

    return reply(`✅ Berhasil join grup dan disewa selama ${angka} ${satuan}`)
  }
  break;

  case 'ceksewa': {
    const data = loadSewa()
    const groupId = m.chat
    const info = data.find(d => d.jid === groupId)

    if (!info) return reply('❌ Grup ini tidak dalam daftar sewa.')
    if (info.expired === 'permanen') return reply('✅ Grup ini disewa permanen.')
    if (Date.now() > info.expired) return reply('⚠️ Masa sewa habis.')

    const sisa = getRemainingTime(info.expired)
    return reply(`✅ Sewa aktif. Sisa waktu: ${sisa}`)
  }
  break;

  case 'listsewa': {
    const data = loadSewa()
    if (data.length === 0) return reply('Belum ada grup yang menyewa.')

    let teks = '📋 Daftar Sewa:\n\n'
    for (const item of data) {
      const status = getRemainingTime(item.expired)
      teks += `• ${item.jid} → ${status}\n`
    }
    return reply(teks)
  }
  break;
  case 'balasngl': {
  if (!isCreator) return reply(mess.creator)
    if (!m.quoted || !/image/.test(mime)) {
        return reply(`Reply gambar dengan caption:\n.balasnhl Tulis caption di sini`);
    }

    conn.sendMessage(`${global.idch}`, { react: { text: '🕐', key: m.key } });

    let caption = text || '🖼️'; // default caption kalau kosong

    try {
        await sleep(2000); // kasih delay kecil biar halus

        await conn.sendMessage(`${global.idch}`, {
            image: await quoted.download(),
            mimetype: 'image/jpeg',
            caption: caption,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 9999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: `${global.idch}`,
                    serverMessageId: 20,
                    newsletterName: '𝙈𝘼𝙊𝙐𝙍𝘼𝙁𝘼 𝙑𝙋𝙉-𝙏𝙐𝙉𝙉𝙀𝙇 𝙋𝙍𝙀𝙈𝙄𝙐𝙈'
                },
                externalAdReply: {
                    title: `Balasan Ngl Dari ${global.ownerName}`,
                    body: ``,
                    thumbnailUrl: ppuser,
                    sourceUrl: '',
                    mediaType: 1
                }
            }
        });

        conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
    } catch (e) {
        console.error(e);
        reply('Gagal mengirim gambar ke channel.');
    }
}
break;
case 'get': {
    if (!isCreator) return reply('*Owner only*');
    if (!text) return reply(`Please start the *URL* with http:// or https://`);
    try {
        const gt = await axios.get(text, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Referer": "https://www.google.com/",
                "Referrer-Policy": "strict-origin-when-cross-origin",
                "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"
            },
            responseType: 'arraybuffer'
        });
        const contentType = gt.headers['content-type'];
        console.log(`Content-Type: ${contentType}`);

        if (/json/i.test(contentType)) {
            const jsonData = JSON.parse(Buffer.from(gt.data, 'binary').toString('utf8'));
            return reply(JSON.stringify(jsonData, null, 2));
        } else if (/text/i.test(contentType)) {
            const textData = Buffer.from(gt.data, 'binary').toString('utf8');
            return reply(textData);
        } else if (text.includes('webp')) {
            return conn.sendMessage(m.chat, { sticker: { url: text }}, { quoted: m });
        } else if (/image/i.test(contentType)) {
            return conn.sendMessage(m.chat, { image: { url: text }}, { quoted: m });
        } else if (/video/i.test(contentType)) {
            return conn.sendMessage(m.chat, { video: { url: text }}, { quoted: m });
        } else if (/audio/i.test(contentType) || text.includes(".mp3")) {
            return conn.sendMessage(m.chat, { audio: { url: text }}, { quoted: m });
        } else if (/application\/zip/i.test(contentType) || /application\/x-zip-compressed/i.test(contentType)) {
            return conn.sendMessage(m.chat, { document: { url: text }}, { quoted: m });
        } else if (/application\/pdf/i.test(contentType)) {
            return conn.sendMessage(m.chat, { document: { url: text }}, { quoted: m });
        } else {
            return reply(`MIME : ${contentType}\n\n${gt.data}`);
        }
    } catch (error) {
        console.error(`Error: ${error}`);
        return reply(`An error occurred while accessing the URL: ${error.message}`);
    }
}
break;


// ───────────────────────────────────────────────────────────────────────────────乂 🥀 MAIN FEATURE ───────────────────────────────────────────────────────────────乂 \\
case 'daftar': case 'regis': case 'register': {
    if (isRegistered) return reply('ᴋᴀᴍᴜ ᴛᴇʟᴀʜ ᴛᴇʀᴅᴀғᴛᴀʀ');

    const input = text?.includes(',') ? text.split(',') : text?.includes('.') ? text.split('.') : [];
    if (input.length !== 2) return reply('Format Salah! Gunakan: .daftar nama,umur atau .daftar nama.umur');

    const nama = input[0].trim();
    const umur = input[1].trim();

    if (!nama || !umur || isNaN(umur)) return reply('Pastikan Nama dan Umur sudah diisi dengan benar!');
    if (parseInt(umur) > 30) return reply('Maaf, Umur Maksimal Untuk Daftar Adalah 30 Tahun!');

    const serialUser = createSerial(20);
    const nomor = m?.sender.split('@')[0];
    const channelJid = '120363328148463101@newsletter';
    const operator = detectOperator(nomor.replace(/[^0-9]/g, '').replace(/^62/, '0').slice(0, 12));

    const mzd = `${yy2}REGISTERED USERS${yy2}\n` +
                `${yy2}Nomor  : @${nomor}${yy2}\n` +
                `${yy2}Nama   : ${nama}${yy2}\n` +
                `${yy2}Umur   : ${umur}${yy2}\n` +
                `${yy2}Status : Sukses✅${yy2}\n` +
                `${yy2}Serial : ${serialUser}${yy2}\n` +
                `${yy2}Operator: ${operator}${yy2}\n` +
                `${yy2}Device: ${deviceinfo}${yy2}\n\n` +     
                `ᴠᴇʀɪғɪᴋᴀsɪ sᴛᴀᴛᴜs - sᴜᴄᴄᴇs ʏᴏᴜʀ ʏᴇs ᴀᴄᴄᴇsғᴜʟʟʏ ᴀкᴀмᴇ,,`;

    const notifLog = `${yy2}REGISTERED USERS${yy2}\n` +
                `${yy2}Nomor  : @${nomor}${yy2}\n` +
                `${yy2}Nama   : ${nama}${yy2}\n` +
                `${yy2}Umur   : ${umur}${yy2}\n` +
                `${yy2}Status : Sukses✅${yy2}\n` +
                `${yy2}Serial : ${serialUser}${yy2}\n` +
                `${yy2}Operator: ${operator}${yy2}\n` +
                `${yy2}Device: ${deviceinfo}${yy2}\n\n` +     
                     `${yy2}ɪɴғᴏ ʀᴇɢɪsᴛᴇʀ ʙʏ MAOURAFA${yy2}`;

    veri = m?.sender;
    addRegisteredUser(m?.sender, nama, serialUser);

    let ppuser;
    try {
        ppuser = await conn.profilePictureUrl(m.sender, 'image');
    } catch {
        ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460960720.png?q=60';
    }

    conn.sendMessage(m.chat, {
        text: mzd,
        contextInfo: {
            mentionedJid: [m.chat],
            externalAdReply: {
                showAdAttribution: true,
                title: m.isGroup ? 'R E G I S T E R' : '𝗡 𝗘 𝗪 - 𝗨 𝗦 𝗘 𝗥',
                body: '',
                thumbnailUrl: ppuser,
                sourceUrl: global.ceha,
                mediaType: 1,
                renderLargerThumbnail: false
            }
        }
    });

    conn.sendMessage(channelJid, {
        text: notifLog,
        contextInfo: {
            mentionedJid: [m.sender],
            externalAdReply: {
                title: 'System Notification',
                body: 'Notification Register',
                thumbnailUrl: ppuser,
                sourceUrl: 'https://www.youtube.com/@maourafa',
                mediaType: 1,
                renderLargerThumbnail: false
            }
        }
    });
}
break;
case 'upch-elite': {
    if (!/audio/.test(mime) && !/video/.test(mime) && !/image/.test(mime) && !/webp/.test(mime) && !/sticker/.test(mime) && !/application/.test(mime)) {
        return reply(`Reply Gambar / Video Dengan Caption .upch-elite`);
    }
    conn.sendMessage(`${global.idch}`, { react: { text: '🕐', key: m.key } });
    ngawi = text.split("|")[0];
    jomokck = text.split("|")[1];
    await sleep(6000);

    if (/audio/.test(mime)) {
        conn.sendMessage(`${global.idch}`, {
            audio: await quoted.download(),
            mimetype: 'audio/mp4',
            ptt: true,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 9999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: `${global.idcg}`,
                    serverMessageId: 20,
                    newsletterName: '𝙈𝘼𝙊𝙐𝙍𝘼𝙁𝘼 𝙑𝙋𝙉-𝙏𝙐𝙉𝙉𝙀𝙇 𝙋𝙍𝙀𝙈𝙄𝙐𝙈'
                },
                externalAdReply: {
                    title: `MUSIC 🎶`,
                    body: `runtime: ${runtime(process.uptime())} 👋`,
                    thumbnailUrl: ppuser,
                    sourceUrl: "",
                    mediaType: 1
                }
            }
        });
    } else if (/video/.test(mime)) {
        conn.sendMessage(`${global.idch}`, {
            video: await quoted.download(),
            mimetype: 'video/mp4',
            caption: `🎥`,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 9999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: `${global.idch}`,
                    serverMessageId: 20,
                    newsletterName: '𝙈𝘼𝙊𝙐𝙍𝘼𝙁𝘼 𝙑𝙋𝙉-𝙏𝙐𝙉𝙉𝙀𝙇 𝙋𝙍𝙀𝙈𝙄𝙐𝙈'
                },
                externalAdReply: {
                    title: `Video dari ${pushname}🎥`,
                    body: ` runtime: ${runtime(process.uptime())} 👋`,
                    thumbnailUrl: ppuser, 
                    sourceUrl: "",
                    mediaType: 1
                }
            }
        });
    } else if (/image/.test(mime) || /webp/.test(mime)) {
        conn.sendMessage(`${global.idch}`, {
            image: await quoted.download(),
            mimetype: /webp/.test(mime) ? 'image/webp' : 'image/jpeg',
            caption: `🖼️`,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 9999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: `${global.idch}`,
                    serverMessageId: 20,
                    newsletterName: '𝙈𝘼𝙊𝙐𝙍𝘼𝙁𝘼 𝙑𝙋𝙉-𝙏𝙐𝙉𝙉𝙀𝙇 𝙋𝙍𝙀𝙈𝙄𝙐𝙈'
                },
                externalAdReply: {
                    title: `Gambar dari ${pushname}🖼️`,
                    body: ` runtime: ${runtime(process.uptime())} 👋`,
                    thumbnailUrl: ppuser,
                    sourceUrl: "",
                    mediaType: 1
                }
            }
        });
    } else if (/sticker/.test(mime)) {
        conn.sendMessage(`${global.idch}`, {
            sticker: await quoted.download(),
            mimetype: 'image/webp',
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 9999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: `${global.idch}`,
                    serverMessageId: 20,
                    newsletterName: '𝙈𝘼𝙊𝙐𝙍𝘼𝙁𝘼 𝙑𝙋𝙉-𝙏𝙐𝙉𝙉𝙀𝙇 𝙋𝙍𝙀𝙈𝙄𝙐𝙈'
                }
            }
        });
    } else if (/application/.test(mime)) { 
        conn.sendMessage(`${global.idch}`, {
            document: await quoted.download(),
            mimetype: mime, 
            fileName: `${ngawi}.pdf`,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 9999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: `${global.idch}`,
                    serverMessageId: 20,
                    newsletterName: '𝙈𝘼𝙊𝙐𝙍𝘼𝙁𝘼 𝙑𝙋𝙉-𝙏𝙐𝙉𝙉𝙀𝙇 𝙋𝙍𝙀𝙈𝙄𝙐𝙈'
                },
                externalAdReply: {
                    title: `${jomokck}`,
                    body: `conn runtime: ${runtime(process.uptime())} 👋`,
                    thumbnailUrl: "https://pomf2.lain.la/f/wg5es1wv.jpg",
                    sourceUrl: "https://whatsapp.com/channel/0029VaiKMO3KrWR1A35DRN1O",
                    mediaType: 1
                }
            }
        });
    }
    conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
}
break;
            case 'idch':
            case 'cekidch': {
                if (!text) return reply(example("linkchnya mana"))
                if (!text.includes("https://whatsapp.com/channel/")) return reply("Link tautan tidak valid")
                let result = text.split('https://whatsapp.com/channel/')[1]
                let res = await conn.newsletterMetadata("invite", result)
                let teks = `* *ID : ${res.id}*
* *Nama :* ${res.name}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}`
                let msg = generateWAMessageFromContent(m.chat, {
                    viewOnceMessage: {
                        message: {
                            "messageContextInfo": {
                                "deviceListMetadata": {},
                                "deviceListMetadataVersion": 2
                            },
                            interactiveMessage: {
                                body: {
                                    text: teks
                                },
                                footer: {
                                    text: "powered by maourafa"
                                }, //input watermark footer
                                nativeFlowMessage: {
                                    buttons: [{
                                        "name": "cta_copy",
                                        "buttonParamsJson": `{"display_text": "copy ID","copy_code": "${res.id}"}`
                                    }, ],
                                },
                            },
                        },
                    },
                }, {
                    quoted: m
                });
                await conn.relayMessage(msg.key.remoteJid, msg.message, {
                    messageId: msg.key.id
                });
            }
            db.data.users[m.sender].exp += await randomNomor(60)
            break
            case 'upteks':
case 'chat':{
 if (!text) return await reply("Example : .chat woi maou kece")
 //m.reply("contoh\n.chat selamat siang semuanya")
  if (budy.match(`colmek|coli|desah|ah ah|bokep|tobrut|seksi|sex|sexi|memek|kontol|titit|open bo|panel|unli|gay|yatim|sale|private|adp|alok|62|mmk|6281513607731|081513607731|join|whatsapp.com|wa.me|t.me`)) return reply('maaf ada kata kata yang tidak sesuai.\nAturan\ndi mohon untuk tidak promosi barang/jasa, menyebarkan hoax, scam, berkata kasar, menyebarkan nomor WhatsApp, mengeshare link');
 const Kalender00011 = moment.tz('Asia/Jakarta').format(`yyyy-MMMM-dddd`)
 const owned11 = owner + "@s.whatsapp.net"
let awal = `anjir`
await conn.sendMessage(m.chat, {
 react: {
 text: '🦚',
 key: m.key,
 }})
conn.sendMessage(`${global.idch}`,{ text: `${text}`,
 contextInfo: {
 mentionedJid: [m.sender, owned11],
 forwardedNewsletterMessageInfo: {
 newsletterJid: `0@newsletter`,
 newsletterName: `𝙈𝘼𝙊𝙐𝙍𝘼𝙁𝘼 𝙑𝙋𝙉-𝙏𝙐𝙉𝙉𝙀𝙇 𝙋𝙍𝙀𝙈𝙄𝙐𝙈`,
 serverMessageId: -1
 },
 	businessMessageForwardInfo: { businessOwnerJid: conn.decodeJid(conn.user.id) },

 forwardingScore: 999,
 isForwarded: false,
 externalAdReply: {
 showAdAttribution: true, 
 title: `Chat :${pushname}`,
 body: `Form: ${m.isGroup ? `${groupMetadata.subject}` : !m.isGroup ? "chat" : "Free User"}`,
 thumbnailUrl: ppuser,
 sourceUrl: `${text}`,
 mediaType: 1,
 renderLargerThumbnail: false
 }
 }
 })
conn.sendMessage(m.chat, {
 react: {
 text: '⚡',
 key: m.key,
 }})
 //reply(`sukses mengirim pesan ke channel.`)
 conn.sendMessage(m.chat, {
 react: {
 text: '✅',
 key: m.key,
 }})
}
break
             case 'pesan': {
if (!args || !args[0]) return reply(`🚩 Please enter the message\nExample of Use: ${prefix + command} ${owner} pesan untuknya`)
let ngen = ['|']
if (args[0].includes(ngen)) return reply('Replace Symbol | So spaces')
if (args[0].length > 14) return reply('Extension Number')
if (args[0].length < 7) return reply('Abbreviation Number')
if (args[0].startsWith('0')) return reply('Use format 62')
if (!args[0]) return reply('Masukkan Teks')
let mention = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[0] ? (args[0].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
let txt = (args.length > 1 ? args.slice(1).join(' ') : '') || ''
let q = m.quoted ? m.quoted : m
let mime = (q.m || q).mimetype || ''
let tujuan = `${txt}`
if (!m.quoted) {
conn.sendText(mention, tujuan)
} else {
conn.sendText(mention, tujuan)
let media = q ? await m.getQuotedObj() : false || m
await conn.copyNForward(mention, media, false).catch(_ => _)
}
let suks = `Mengirim Pesan *${mime ? mime : 'Teks'}*
*_Success ✅_*

Text :
${txt}
`
conn.sendMessage(m.chat, { text: `${suks}`, mentions: [suks] }, { quoted: m })

}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'myip': {
  let res = await fetch('https://www.velyn.biz.id/api/tools/myip')
  let json = await res.json()
  if (!json.success) return m.reply('Gagal mengambil data IP!')

  let { ip, type, city, region, country, isp, timezone, flag } = json
  let teks = `*MY IP INFO*\n\n`
  teks += `🌐 IP: ${ip}\n`
  teks += `📡 Tipe: ${type}\n`
  teks += `🏙️ Kota: ${city}\n`
  teks += `🌍 Wilayah: ${region}, ${country} ${flag.emoji}\n`
  teks += `🏢 ISP: ${json.connection.org} (${isp})\n`
  teks += `🕐 Zona Waktu: ${timezone.id} (UTC${timezone.utc})\n`
  teks += `🗺️ Lokasi: ${json.latitude}, ${json.longitude}\n`

  conn.sendMessage(m.chat, {
    image: { url: flag.img },
    caption: teks
  }, { quoted: m })
}
db.data.users[m.sender].exp += await randomNomor(60)
break
                case 'totalfitur': case 'totalfeature': {
    reply(`Total Feature maourafa Saat Ini ${totalFitur()}͏`) 
    }
    db.data.users[m.sender].exp += await randomNomor(60)
    break
    case "sc": case "script": {
await conn.sendMessage(m.chat, {audio: fs.readFileSync('./assets/suara/sc.mp3'), viewOnce: false, mimetype:'audio/mpeg', ptt: true}, {quoted: m})
    }
    db.data.users[m.sender].exp += await randomNomor(60)
    break
    case 'owner': {
    let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp; ${global.ownerName}\nORG: ${global.ownerName}\nTITLE:soft\nitem1.TEL;waid=${global.owner}:${global.owner}\nitem1.X-ABLabel:Ponsel\nitem2.URL:${global.yt}\nitem2.X-ABLabel:ðŸ’¬ More\nitem3.EMAIL;type=INTERNET: ${global.website}\nitem3.X-ABLabel:Email\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABADR:ðŸ’¬ More\nitem4.X-ABLabel:Lokasi\nEND:VCARD`;
const sentMsg = await conn.sendMessage(m.chat, {
      contacts: {
        displayName: author,
        contacts: [{ vcard }],
      },
      contextInfo: {
        externalAdReply: {
          title: "M Y  O W N E R - ｍａｏｕｒａｆａ"
          body: "",
          thumbnailUrl: `https://i.ibb.co/VWRmcgG/174ef8c9da60f0216caded1520711ab5.jpg`,
          mediaType: 1,
          showAdAttribution: false,
          renderLargerThumbnail: true,
        }}}, { quoted: m });
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'donasi': {
teks28 = `Anda Sedang Membeli Atau Ingin Mendonasikan? Silahkan Scan Qris Di Atas Ya Kak ${pushname}

Untuk Dana? 
087895338730 ( Dana RA*A AD***A PR****A )
085789987714 ( SPAY maourafa_sh***w~)
Lainnya? Ke Qr
`
conn.sendMessage(from, { image: { url: global.qris, }, caption: teks28 }, { quoted: m })
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'ngl': {
  if (!text) return reply('Masukkan isi pesan anonim!\nContoh: .ngl Aku suka kamu.')
  
  try {
    const encodedTitle = encodeURIComponent('Kirimi aku pesan anonim!')
    const encodedText = encodeURIComponent(text.trim())
    const imageUrl = `https://flowfalcon.dpdns.org/imagecreator/ngl?title=${encodedTitle}&text=${encodedText}`

    const ownerJids = global.owner.map(o => typeof o === 'object' ? `${o[0]}@s.whatsapp.net` : `${o}@s.whatsapp.net`)

    for (const jid of ownerJids) {
      await conn.sendMessage(jid, {
        image: { url: imageUrl },
        caption: '📩 Kamu menerima pesan anonim.'
      })
    }

    reply('✅ Pesan anonim kamu sudah dikirim ke owner.')

  } catch (e) {
    console.error(e)
    reply('Gagal mengirim pesan anonim Ini Terjadi Karna\n-Pesan Tidak Bersifat Anonim\n-18+\n-kasar/jorok.')
  }
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'listapisc': {
  const caseFilePath = path.join(__dirname, 'case.js'); // Sesuaikan path file kamu
  const caseCode = fs.readFileSync(caseFilePath, 'utf-8'); // Baca kode dari file case.js
  
  const apiUrls = [];
  const apiPattern = /https?:\/\/[^\s]+/g; // Regex untuk menangkap URL API

  // Cari semua URL yang sesuai dengan pola
  let match;
  while ((match = apiPattern.exec(caseCode)) !== null) {
    apiUrls.push(match[0]);
  }

  // Formatkan pesan untuk dikirim
  let apiMessage = 'Daftar API yang digunakan oleh bot:\n\n';
  if (apiUrls.length > 0) {
    apiUrls.forEach((url, index) => {
      apiMessage += `🔹 API ${index + 1}: ${url}\n`;
    });
  } else {
    apiMessage = 'Tidak ditemukan API dalam kode.';
  }

  // Kirim pesan daftar API
  await conn.sendMessage(m.chat, {
    text: apiMessage,
  }, { quoted: m });
}
db.data.users[m.sender].exp += await randomNomor(60)
break;
case "runtime": {
conn.sendMessage(m.chat, { text: `maou Online ${runtime(process.uptime())}` }, { quoted: qtoko});
}
db.data.users[m.sender].exp += await randomNomor(60)
break

// ───────────────────────────────────────────────────────────────────────────────乂 🥀 MAKER FEATURE ───────────────────────────────────────────────────────────────乂 \\
case "pornhub": {

  if (!text || !text.includes('|')) {
    return m.reply(`Masukkan dua teks dipisah dengan "|"\nContoh: *.${command} pler|kuda`)
  }

  let [text1, text2] = text.split('|').map(t => t.trim())
  if (!text1 || !text2) return m.reply('Kedua teks harus diisi!')

  try {
    const apiUrl = `https://apikey.sazxofficial.web.id/api/imagecreator/pornhub?text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}`
    const res = await fetch(apiUrl)
    const json = await res.json()

    if (!json.status) return m.reply('Gagal mengambil gambar dari API.')

    await conn.sendMessage(m.chat, {
      image: { url: json.result },
      caption: `✅ *Berhasil membuat logo Pornhub*\n\n• *Text1:* ${text1}\n• *Text2:* ${text2}`,
      contextInfo: {
        externalAdReply: {
          title: "Pornhub Logo Generator",
          body: "Powered By maou",
          thumbnailUrl: json.result,
          mediaType: 1,
          renderLargerThumbnail: true,
          sourceUrl: json.result
        }
      }
    }, { quoted: m })

  } catch (e) {
    m.reply('Terjadi kesalahan saat memproses permintaan.')
    console.error(e)
  }
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case "cktp": {

  if (!text || !text.includes('|')) {
    return m.reply(`Masukkan data lengkap dipisahkan dengan "|".\nContoh:\n.${command} JAWA BARAT|BANDUNG|3275024509970001|BUDI SANTOSO|BANDUNG, 25-09-1997|LAKI-LAKI|A|JL. SUDIRMAN NO. 123|05/08|RAWA BOBO|PASAR MINGGU|ISLAM|BELUM MENIKAH|PEGAWAI SWASTA|WNI|SEUMUR HIDUP|25-09-2023|https://link.pasfoto.jpg`)
  }

  let [
    provinsi, kota, nik, nama, ttl, jk, goldar, alamat, rtRw, kelDesa,
    kecamatan, agama, status, pekerjaan, kewarganegaraan, masaBerlaku, terbuat, pasPhoto
  ] = text.split('|').map(v => v.trim())

  if (!pasPhoto) return m.reply('Data tidak lengkap, pastikan semua 18 parameter terisi.')

  try {
    const apiUrl = `https://fastrestapis.fasturl.cloud/maker/ktp?provinsi=${encodeURIComponent(provinsi)}&kota=${encodeURIComponent(kota)}&nik=${encodeURIComponent(nik)}&nama=${encodeURIComponent(nama)}&ttl=${encodeURIComponent(ttl)}&jenisKelamin=${encodeURIComponent(jk)}&golonganDarah=${encodeURIComponent(goldar)}&alamat=${encodeURIComponent(alamat)}&rtRw=${encodeURIComponent(rtRw)}&kelDesa=${encodeURIComponent(kelDesa)}&kecamatan=${encodeURIComponent(kecamatan)}&agama=${encodeURIComponent(agama)}&status=${encodeURIComponent(status)}&pekerjaan=${encodeURIComponent(pekerjaan)}&kewarganegaraan=${encodeURIComponent(kewarganegaraan)}&masaBerlaku=${encodeURIComponent(masaBerlaku)}&terbuat=${encodeURIComponent(terbuat)}&pasPhoto=${encodeURIComponent(pasPhoto)}`

    await conn.sendMessage(m.chat, {
      image: { url: apiUrl },
      caption: `✅ *KTP Berhasil Dibuat*\n\n• Nama: ${nama}\n• NIK: ${nik}\n• TTL: ${ttl}\n• Provinsi: ${provinsi}\n• Kota: ${kota}`
    }, { quoted: m })

  } catch (e) {
    m.reply('Gagal membuat KTP. Pastikan data sudah benar.')
    console.error(e)
  }
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'glitchtext':
			case 'writetext':
			case 'advancedglow':
			case 'typographytext':
			case 'pixelglitch':
			case 'neonglitch':
			case 'flagtext':
			case 'flag3dtext':
			case 'deletingtext':
			case 'blackpinkstyle':
			case 'glowingtext':
			case 'underwatertext':
			case 'logomaker':
			case 'cartoonstyle':
			case 'papercutstyle':
			case 'watercolortext':
			case 'effectclouds':
			case 'blackpinklogo':
			case 'gradienttext':
			case 'summerbeach':
			case 'luxurygold':
			case 'multicoloredneon':
			case 'sandsummer':
			case 'galaxywallpaper':
			case '1917style':
			case 'makingneon':
			case 'royaltext':
			case 'freecreate':
			case 'galaxystyle':
			case 'lighteffects': {
			
			async function ephoto(url, texk) {
 let form = new require("form-data")()
 let gT = await axios.get(url, {
 headers: {
 "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
 }
 })
 let $ = cheerio.load(gT.data)
 let text = texk
 let token = $("input[name=token]").val()
 let build_server = $("input[name=build_server]").val()
 let build_server_id = $("input[name=build_server_id]").val()
 form.append("text[]", text)
 form.append("token", token)
 form.append("build_server", build_server)
 form.append("build_server_id", build_server_id)
 let res = await axios({
 url: url,
 method: "POST",
 data: form,
 headers: {
 Accept: "*/*",
 "Accept-Language": "en-US,en;q=0.9",
 "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
 cookie: gT.headers["set-cookie"]?.join("; "),
 ...form.getHeaders()
 }
 })
 let $$ = cheerio.load(res.data)
 let json = JSON.parse($$("input[name=form_value_input]").val())
 json["text[]"] = json.text
 delete json.text
 let {
 data
 } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
 headers: {
 "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
 cookie: gT.headers["set-cookie"].join("; ")
 }
 })
 
 return build_server + data.image
}
				await conn.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				let link
				if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
				if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
				if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
				if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
				if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
				if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
				if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
				if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
				if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
				if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
				if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
				if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
				if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
				if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
				if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
				if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
				if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-conn-online-619.html'
				if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
				if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
				if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
				if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
				if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
				if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
				if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
				if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
				if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
				if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
				if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
				if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
				if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
				try {
					
					let haldwhd = await ephoto(link, q)
					await conn.sendMessage(m.chat, {
						image: {
							url: haldwhd
						}
					}, {
						quoted: m
					})
				} catch (error) {
					reply('Sedang eror kak Mohon maaf ya')
				}
			}
			db.data.users[m.sender].exp += await randomNomor(60)
			break
case 'logoba': {

  if (!text) return reply('Masukin Teks Kiri & Kanan Contoh: .logoba Kiryu|Abydos')

  let [textL, textR] = text.split('|')
  if (!textL || !textR) return reply('Format Salah! Contoh: .logoba Kiryu|Abydos')

  let url = `https://api.nekorinn.my.id/maker/ba-logo?textL=${encodeURIComponent(textL)}&textR=${encodeURIComponent(textR)}`
  conn.sendMessage(from, { image: { url }, caption: `Logo Blue Archive Untuk:\n• ${textL}\n• ${textR}` }, { quoted: m })
}
db.data.users[m.sender].exp += await randomNomor(60)
break

  // 1) Ambil 1 karakter random dari "maouvpn ga Kill" dan tampilkan tombol nikah
  case 'char': {
    const axios = require('axios');
    // Query sudah fixed ke "MAOURAFA ga kill"
    let res;
    try {
      res = await axios.get('https://api.nekorinn.my.id/search/mal-chara?q=maouvpn+ga+kill');
    } catch (e) {
      return m.reply('Gagal mengambil data karakter.');
    }

    const hasil = res.data?.result;
    if (!hasil || !hasil.length) {
      return m.reply('Karakter tidak ditemukan.');
    }

    // Pilih satu random
    const char = hasil[Math.floor(Math.random() * hasil.length)];
    const name = char.name;
    const img  = char.cover;
    // Gunakan `manga` & `anime` yg tersedia, atau fallback
    const info = [
      ...(char.manga.map(m => `📘 ${m.title}`) || []),
      ...(char.anime.map(a => `🎬 ${a.title}`) || [])
    ].join('\n') || 'Tidak ada daftar manga/anime.';

    await conn.sendMessage(m.chat, {
      image: { url: img },
      caption: `💠 *${name}*\n\n${info}`,
      buttons: [
        {
          buttonId: `.nikahinwaifu ${encodeURIComponent(name)}|${img}`,
          buttonText: { displayText: '💍 Nikahi Waifu Ini' },
          type: 1
        }
      ],
      footer: 'Waifu Generator by @maourafa'
    }, { quoted: m });
    break;
  }

  // 2) Menikahi waifu yang dipilih dari tombol
  case 'nikahinwaifu': {
    const fs = require('fs');
    const path = './database/waifus.json';
    if (!fs.existsSync(path)) fs.writeFileSync(path, '{}');

    let data = JSON.parse(fs.readFileSync(path));
    if (data[m.sender]) {
      return m.reply('Kamu sudah menikahi waifu! Tidak bisa menikah lagi.');
    }

    // tombol mengirimkan text: "<nama>|<urlGambar>"
    if (!text.includes('|')) {
      return m.reply('Gunakan tombol “Nikahi Waifu Ini” untuk menikah.');
    }
    const [waifuName, waifuImage] = text.split('|');

    // unduh gambar waifu ke buffer
    const axios = require('axios');
    let buf;
    try {
      const resp = await axios.get(waifuImage, { responseType: 'arraybuffer' });
      buf = Buffer.from(resp.data, 'binary');
    } catch (e) {
      return m.reply('Gagal mengunduh gambar waifu.');
    }

    // pekerjaan acak
    const pekerjaanList = ['Kuli', 'Kantoran', 'Streamer', 'Petani', 'Youtuber', 'Developer'];
    const pekerjaanAcak = pekerjaanList[Math.floor(Math.random() * pekerjaanList.length)];

    // simpan
    data[m.sender] = {
      waifu: waifuName,
      image: buf.toString('base64'),
      waktu: new Date().toLocaleString('id-ID'),
      anak: 0,
      uang: 0,
      lastAnak: Date.now(),
      lastUang: Date.now(),
      pekerjaan: pekerjaanAcak
    };
    fs.writeFileSync(path, JSON.stringify(data, null, 2));

    m.reply(`💘 Selamat! Kamu menikahi *${waifuName}* dengan pekerjaan *${pekerjaanAcak}*`);
    break;
  }

  // 3) Tampilkan status pacar (anak + uang + pekerjaan)
  case 'mypacar': {
    const fs = require('fs');
    const path = './database/waifus.json';
    if (!fs.existsSync(path)) return m.reply('Belum ada data waifu.');
    let data = JSON.parse(fs.readFileSync(path));
    let pacar = data[m.sender];
    if (!pacar) return m.reply('Kamu belum menikahi waifu.');

    const now = Date.now();
    const pekerjaanList = ['Kuli', 'Kantoran', 'Streamer', 'Petani', 'Youtuber', 'Developer'];

    // Anak tiap 5 jam
    if (now - pacar.lastAnak >= 5 * 60 * 60 * 1000) {
      pacar.anak += Math.floor(Math.random() * 2) + 1;
      pacar.lastAnak = now;
    }
    // Uang tiap 24 jam
    if (now - pacar.lastUang >= 24 * 60 * 60 * 1000) {
      pacar.uang += Math.floor(Math.random() * 10000) + 10000;
      pacar.lastUang = now;
      pacar.pekerjaan = pekerjaanList[Math.floor(Math.random() * pekerjaanList.length)];
    }

    fs.writeFileSync(path, JSON.stringify(data, null, 2));
    const buffer = Buffer.from(pacar.image, 'base64');

    await conn.sendMessage(m.chat, {
      image: buffer,
      caption: `💑 *Pacar Kamu*\n\nNama: ${pacar.waifu}\nMenikah sejak: ${pacar.waktu}\n\n👶 Anak: ${pacar.anak}\n💼 Pekerjaan: ${pacar.pekerjaan}\n💰 Uang: Rp ${pacar.uang.toLocaleString('id-ID')}`
    }, { quoted: m });
    break;
  }

  // 4) Cerai dan hapus data
  case 'cerai': {
    const fs = require('fs');
    const path = './database/waifus.json';
    if (!fs.existsSync(path)) return m.reply('Belum ada data waifu.');
    let data = JSON.parse(fs.readFileSync(path));
    let pacar = data[m.sender];
    if (!pacar) return m.reply('Kamu belum menikahi waifu.');

    const buffer = Buffer.from(pacar.image, 'base64');
    delete data[m.sender];
    fs.writeFileSync(path, JSON.stringify(data, null, 2));

    await conn.sendMessage(m.chat, {
      image: buffer,
      caption: `💔 *Cerai dengan Waifu*\n\nNama: ${pacar.waifu}\nMenikah sejak: ${pacar.waktu}\n\nSemoga kamu menemukan kebahagiaan baru!`
    }, { quoted: m });
    break;
  }




// ───────────────────────────────────────────────────────────────────────────────乂 🥀 CONVERT FEATURE ───────────────────────────────────────────────────────────────乂 \\
case'smeme': {

 if (!m.quoted) return m.reply(`Balas gambar dengan perintah:\n${prefix + command} <teks atas>|<teks bawah>`);
 const { Sticker } = require('wa-sticker-formatter');
 async function uguu(filePath) {
 try {
 const form = new FormData();
 form.append('files[]', fs.createReadStream(filePath));
const axios = require('axios');
 const { data } = await axios.post('https://uguu.se/upload', form, {
 headers: { ...form.getHeaders() }
 });
 return data.files[0].url;
 } catch (err) {
 throw new Error(err.message);
 }
 }
 async function createSticker(img, url) {
 let stickerMetadata = {
 type: "full",
 pack: "My Sticker",
 author: "Kyy",
 quality: 100
 };
 return (new Sticker(img || url, stickerMetadata)).toBuffer();
 }
 let [atas, bawah] = text.split('|');
 let q = m.quoted ? m.quoted : m;
 let mime = (q.msg || q).mimetype || "";
 if (!mime.startsWith('image/')) return m.reply("❌ Hanya bisa digunakan untuk gambar!");
 await conn.sendMessage(m.chat, { react: { text: '🖼️', key: m.key } });
 let mediaBuffer = await q.download();
 let ext = mime.split('/')[1] || "png";
 let tempFile = path.join(__dirname, `${Date.now()}.${ext}`);
 fs.writeFileSync(tempFile, mediaBuffer);
 try {
 let url = await uguu(tempFile);
 let memeUrl = `https://api.memegen.link/images/custom/${encodeURIComponent(atas || " ")}`
 + `/${encodeURIComponent(bawah || " ")}.png?background=${url}`;
 let stickerBuffer = await createSticker(memeUrl, false);
 await conn.sendMessage(m.chat, { sticker: stickerBuffer }, { quoted: m });
 await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
 } catch (err) {
 console.error(err);
 m.reply("❌ Terjadi kesalahan saat membuat meme.");
 } finally {
 fs.unlinkSync(tempFile);
 }
}
db.data.users[m.sender].exp += await randomNomor(60)
break
 case 'hd':
case 'remini':
case 'buathd': {

if (!m.quoted) return reply(`Kirim Atau Reply Foto Dengan Caption *${prefix + command}*`)
let mime = (m.quoted.msg || m.quoted).mimetype || ''
if (!/image/.test(mime)) return reply(`Kirim Atau Reply Foto Dengan Caption *${prefix + command}*`)
reply(mess.wait)
const tempFile = path.join(__dirname, `temp_${Date.now()}.jpg`)
try {
let media = await m.quoted.download()
fs.writeFileSync(tempFile, media)
const uploadUguu = async (filePath) => {
return new Promise((resolve, reject) => {
exec(`curl -s -F files[]=@${filePath} https://uguu.se/upload.php`, (err, stdout) => {
if (err) return reject('Gagal Mengunggah Ke Uguu')
try {
let json = JSON.parse(stdout)
resolve(json.files[0].url)
} catch {
reject('Gagal Mengunggah Ke Uguu')
}
})
})}
let uploadedUrl = await uploadUguu(tempFile)
let apiUrl = `https://apizell.web.id/tools/hd?url=${encodeURIComponent(uploadedUrl)}`
let res = await fetch(apiUrl)
if (!res.ok) throw 'Gagal Mendapatkan Gambar Dari API'
let json = await res.json()
if (!json.status || !json.result?.upscaled) throw 'Gagal Memproses Gambar'
let buffer = await (await fetch(json.result.upscaled)).arrayBuffer()
let outputPath = path.join(__dirname, `hd_result_${Date.now()}.jpg`)
fs.writeFileSync(outputPath, Buffer.from(buffer))
await conn.sendMessage(m.chat, {
image: fs.readFileSync(outputPath),
caption: mess.success
}, { quoted: m })
fs.unlinkSync(tempFile)
fs.unlinkSync(outputPath)
} catch (e) {
console.log(e)
reply('Terjadi Kesalahan, Coba Lagi Nanti')
}
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case "hytam": {

 if (!/image/.test(mime)) return m.reply("Reply gambar yang mau dihitamin dengan caption *hytam*");

 const mediaPath = await conn.downloadAndSaveMediaMessage(qmsg);
 const buffer = fs.readFileSync(mediaPath);
 const base64Image = buffer.toString("base64");

 try {
const axios = require('axios');
 const response = await axios({
 url: "https://negro.consulting/api/process-image",
 method: "POST",
 data: {
 filter: "hitam",
 imageData: "data:image/png;base64," + base64Image
 }
 });

 const resultBuffer = Buffer.from(response.data.processedImageUrl.replace("data:image/png;base64,", ""), "base64");
 await conn.sendMessage(m.chat, { image: resultBuffer, caption: `Selesai, pake filter *hitam*` }, { quoted: m });

 fs.unlinkSync(mediaPath);
 } catch (err) {
 console.log(err);
 m.reply("Gagal memproses gambar.");
 }
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'removebg':{

	    if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${command}`)
	    if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${command}`)
	    if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${command}`)
	    let { removeBg } = require('./lib/removeBG')
	    let img = await quoted.download()
	    let image = await removeBg(img)
	    let result = await Buffer.from(image, "base64")
	    
	    conn.sendImage(m.chat, result, mess.success, m)
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'animbrat': case "animebrat": {
  if (!text) return m.reply('Masukkan teks yang ingin digunakan!\nContoh: .animbrat Hi, my name is Hikaru');

  try {
    const url = `https://fastrestapis.fasturl.cloud/maker/animbrat?text=${encodeURIComponent(text)}&position=center&mode=image`;
    await conn.sendMessage(m.chat, {
      image: { url },
      caption: '✅ Sukses Generate Animbrat'
    }, { quoted: m });
  } catch (err) {
    console.error(err);
    m.reply('Gagal membuat gambar animbrat.');
  }
 }
 db.data.users[m.sender].exp += await randomNomor(60)
  break;

 case "brat": {

          if (!text) return m.reply(`*\`ᴄᴏɴᴛᴏʜ ᴘᴇɴɢɢᴜɴᴀᴀɴ\`*:\n${prefix+command} halo suki`) 
                                               try {
                                                       await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
                                                               const url = `https://api.siputzx.my.id/api/m/brat?text=${encodeURIComponent(text)}&isVideo=false`;
                                                                       const response = await axios.get(url, { responseType: "arraybuffer" });
                                                                               const sticker = new Sticker(response.data, {
                                                                                           pack: "Stiker By",
                                                                                                       author: "Kythst 444+",
                                                                                                                   type: "image/png",
                                                                                                                           });
                                                                                                                                   const stikerBuffer = await sticker.toBuffer();
                                                                                                                                           await conn.sendMessage(m.chat, { sticker: stikerBuffer }, { quoted: m });
                                                                                                                                               } catch (err) {
                                                                                                                                                       console.error("Error:", err);
                                                                                                                                                               await conn.sendMessage(m.chat, {
                                                                                                                                                                           text: "Maaf, terjadi kesalahan saat mencoba membuat stiker brat. Coba lagi nanti.",
                                                                                                                                                                                   }, { quoted: m });
                                                                                                                                                                                       }
                                                                                                                                                                                      
                                                                                                                                                                                      }
                                                                                                                                                                                      db.data.users[m.sender].exp += await randomNomor(60)
break 
             case 'stiker':
            case 'sticker':
            case 's':
            case 'stickergif':
            case 'sgif': {
            
                if (!quoted) return reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
                if (/image/.test(mime)) {
                    let media = await conn.downloadAndSaveMediaMessage(quoted, +new Date * 1)
                    await conn.imgToSticker(m.chat, media, m, {
                        packname: `Sticker By 魔王ｍａｏｕｒａｆａ|ᵇᵒᵗ\n\nmaourafa: 082278687542\ntele: @maourafa\nyt: @maourafa`,
                        author: `maourafavpn.my.id`
                    })
                    await fs.unlinkSync(media)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return warning('Maksimal 10 detik!')
                    let media = await conn.downloadAndSaveMediaMessage(quoted, +new Date * 1)
                    await conn.vidToSticker(m.chat, media, m, {
                        packname: `Sticker By 魔王ｍａｏｕｒａｆａ|ᵇᵒᵗ\n\nmaourafa: 082278687542\ntele: @maourafa\nyt: @maourafa`,
                        author: `maourafavpn.my.id`
                    })
                    await fs.unlinkSync(media)
                } else if (/sticker/.test(mime)) {
                    let media = await conn.downloadAndSaveMediaMessage(quoted, +new Date * 1)
                    await conn.imgToSticker(m.chat, media, m, {
                        packname: `Sticker By 魔王ｍａｏｕｒａｆａ|ᵇᵒᵗ\n\nmaourafa: 082278687542\ntele: @maourafa\nyt: @maourafa`,
                        author: `maourafavpn.my.id`
                    })
                    await fs.unlinkSync(media)
                } else m.reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
            }
            db.data.users[m.sender].exp += await randomNomor(60)
            break                                             
            case "bratvid": {
            
  if (!text) return m.reply('Mana Textnya?');
  try {
    let { data } = await axios.get(`https://fastrestapis.fasturl.cloud/maker/brat/animated?text=${encodeURIComponent(text)}&mode=animated`, {
      responseType: 'arraybuffer'
    });
    
    const sticker = new Sticker(data, {
      pack: 'By',
      author: 'maourafa',
      type: 'full',
      quality: 70
    });
    
    await conn.sendMessage(m.chat, await sticker.toMessage(), { quoted: m });
    
  } catch {
    m.reply('Yah Error');
  }
};
db.data.users[m.sender].exp += await randomNomor(60)
break
          case "tts" :
        {
        
          if (!text) return m?.reply(`[ ! ] ${prefix}${command} halo world`);
          const a = await (
            await axios.post(
              "https://gesserit.co/api/tiktok-tts",
              { text: text, voice: "id_001" },
              {
                headers: {
                  Referer: "https://gesserit.co/tiktok",
                  "User-Agent":
                    "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36",
                  responseType: "arraybuffer",
                },
              },
            )
          ).data;
          const b = Buffer.from(a.audioUrl);
          conn.sendMessage(m?.chat, {
            audio: Buffer.from(a.audioUrl.split("base64,")[1], "base64"),
            mimetype: "audio/mpeg",
          });
        }
        db.data.users[m.sender].exp += await randomNomor(60)
        break;
        case 'wm': {
  if (!m.quoted) return reply('Reply sticker yang mau dikasih watermark!')
  if (!text) return reply('Masukkan nama author! Contoh: .wm MAOURAFA')

  const { addExif } = require('./lib/exif')
  let stiker = false

  try {
    const packname = 'Created'
    const author = text.trim()

    const mime = m.quoted.mimetype || ''
    if (!/webp/.test(mime)) return reply('Reply sticker webp!')

    const media = await m.quoted.download()
    if (!media) return reply('Gagal download sticker!')

    stiker = await addExif(media, packname, author)
  } catch (e) {
    console.error(e)
    if (Buffer.isBuffer(e)) stiker = e
    else return reply('Terjadi kesalahan: ' + e)
  } finally {
    if (stiker) {
      conn.sendMessage(m.chat, {
        sticker: stiker
      }, { quoted: m })
    } else {
      return reply('Gagal convert stiker.')
    }
  }
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'emojimix': {
  if (!text.includes('|')) return reply('Contoh: .emojimix 😃|😆')

  const [emoji1, emoji2] = text.split('|').map(e => e.trim())
  if (!emoji1 || !emoji2) return reply('Pastikan kedua emoji valid!')

  try {
    const encoded1 = encodeURIComponent(emoji1)
    const encoded2 = encodeURIComponent(emoji2)
    const url = `https://flowfalcon.dpdns.org/tools/emojimix?emoji1=${encoded1}&emoji2=${encoded2}`

    const axios = await import('axios')
    const { data } = await axios.default.get(url, { responseType: 'arraybuffer' })

    await conn.sendMessage(m.chat, {
      image: Buffer.from(data),
      caption: `Hasil emojimix: ${emoji1} + ${emoji2}\nJika Ingin Ke Sticker Reply Media Bercaptin .s`
    }, { quoted: m })
  } catch (e) {
    console.error(e)
    reply('Gagal mengambil emojimix, coba lagi nanti.')
  }
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'toanime': {
  if (!m.quoted) return reply(`Kirim atau Reply Foto dengan caption *${prefix + command}*`);
  let mime = (m.quoted.msg || m.quoted).mimetype || '';
  if (!/image/.test(mime)) return reply(`Kirim atau Reply Foto dengan caption *${prefix + command}*`);
  reply(mess.wait);
  const tempFile = path.join(__dirname, `temp_${Date.now()}.jpg`);

  try {
    let media = await m.quoted.download();
    fs.writeFileSync(tempFile, media);

    const uploadUguu = async (filePath) => {
      return new Promise((resolve, reject) => {
        exec(`curl -s -F files[]=@${filePath} https://uguu.se/upload.php`, (err, stdout) => {
          if (err) return reject('Gagal mengunggah ke Uguu');
          try {
            let json = JSON.parse(stdout);
            resolve(json.files[0].url);
          } catch {
            reject('Gagal mengunggah ke Uguu');
          }
        });
      });
    };

    let uploadedUrl = await uploadUguu(tempFile);
    let gender = 'male'; // bisa diubah otomatis/parameter
    let prompt = encodeURIComponent('Elegant and majestic');
    let animeApi = `https://fastrestapis.fasturl.cloud/aiimage/toanime?imageUrl=${encodeURIComponent(uploadedUrl)}&gender=${gender}&specificPrompt=${prompt}`;

    await conn.sendMessage(m.chat, {
      image: { url: animeApi },
      caption: '✅ Berikut hasil AI Anime-mu!'
    }, { quoted: m });

    fs.unlinkSync(tempFile);
  } catch (e) {
    console.error(e);
    reply('Terjadi kesalahan saat memproses gambar.');
  }
}
db.data.users[m.sender].exp += await randomNomor(60)
break;
case 'tohijab': {
  if (!m.quoted) return reply(`Kirim atau Reply Foto dengan caption *${prefix + command}*`);
  let mime = (m.quoted.msg || m.quoted).mimetype || '';
  if (!/image/.test(mime)) return reply(`Kirim atau Reply Foto dengan caption *${prefix + command}*`);
  reply(mess.wait);

  const tempFile = path.join(__dirname, `temp_${Date.now()}.jpg`);

  try {
    let media = await m.quoted.download();
    fs.writeFileSync(tempFile, media);

    const uploadUguu = async (filePath) => {
      return new Promise((resolve, reject) => {
        exec(`curl -s -F files[]=@${filePath} https://uguu.se/upload.php`, (err, stdout) => {
          if (err) return reject('❌ Gagal mengunggah ke Uguu.');
          try {
            let json = JSON.parse(stdout);
            resolve(json.files[0].url);
          } catch {
            reject('❌ Gagal mengunggah ke Uguu.');
          }
        });
      });
    };

    let uploadedUrl = await uploadUguu(tempFile);
    let apiUrl = `https://api.nekorinn.my.id/tools/to-hijab?imageUrl=${encodeURIComponent(uploadedUrl)}`;

    await conn.sendMessage(m.chat, {
      image: { url: apiUrl },
      caption: '✅ Berikut hasil foto berhijab-mu!'
    }, { quoted: m });

    fs.unlinkSync(tempFile);
  } catch (e) {
    console.error(e);
    reply('❌ Terjadi kesalahan saat memproses gambar.');
  }
}
db.data.users[m.sender].exp += await randomNomor(60)
break;
case 'iqc': {
    if (!q) return reply(`*Masukkan teks!*\nContoh: .iqc maou`)

    let url = `https://flowfalcon.dpdns.org/imagecreator/iqc?text=${encodeURIComponent(q)}`
    try {
        await conn.sendMessage(m.chat, {
            image: { url },
            caption: `✅ *Berhasil!*\nTeks: ${q}`
        }, { quoted: m })
    } catch (e) {
        console.error(e)
        reply('❌ Gagal mengambil gambar dari API.')
    }
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'colorize': {
  if (!m.quoted) return reply(`Kirim atau Reply Foto dengan caption *${prefix + command}*`);
  let mime = (m.quoted.msg || m.quoted).mimetype || '';
  if (!/image/.test(mime)) return reply(`Kirim atau Reply Foto dengan caption *${prefix + command}*`);

  const tempFile = path.join(__dirname, `temp_${Date.now()}.jpg`);
  reply('⏳ Sedang memproses gambar...');

  try {
    let media = await m.quoted.download();
    fs.writeFileSync(tempFile, media);

    const uploadUguu = async (filePath) => {
      return new Promise((resolve, reject) => {
        exec(`curl -s -F files[]=@${filePath} https://uguu.se/upload.php`, (err, stdout) => {
          if (err) return reject('Gagal mengunggah ke Uguu');
          try {
            let json = JSON.parse(stdout);
            resolve(json.files[0].url);
          } catch {
            reject('Gagal mengunggah ke Uguu');
          }
        });
      });
    };

    let uploadedUrl = await uploadUguu(tempFile);
    let api = `https://flowfalcon.dpdns.org/imagecreator/colorize?url=${encodeURIComponent(uploadedUrl)}`;

    const res = await fetch(api);
    const json = await res.json();
    if (!json.status) return reply('Gagal mewarnai gambar.');

    await conn.sendMessage(m.chat, {
      image: { url: json.result },
      caption: '✅ Berikut hasil pewarnaan fotonya!'
    }, { quoted: m });

    fs.unlinkSync(tempFile);
  } catch (e) {
    console.error(e);
    reply('❌ Terjadi kesalahan saat memproses gambar.');
  }
}
db.data.users[m.sender].exp += await randomNomor(60)
break;
case 'qc': {
if (!q) return reply(`📌Example: ${prefix + command} hallo`)
let obj = {
type: 'quote',
format: 'png',
backgroundColor: '#ffffff',
width: 512,
height: 768,
scale: 2,
messages: [
{
entities: [],
avatar: true,
from: {
id: 1,
name: pushname,
photo: { 
url: await conn.profilePictureUrl(m.sender, "image").catch(() => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'),
}
},
text: `${q}`,
replyMessage: {},
},
],
};
let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
headers: {
'Content-Type': 'application/json',
},
});
let buffer = Buffer.from(response.data.result.image, 'base64');
conn.sendImageAsSticker(m.chat, buffer, m, { packname: `${global.packname}`, author: `${global.author}`})
}
break
case 'toimg': {
 if (!quoted) reply ('m?.reply Image')
if (!/webp/.test(mime)) reply (`Balas sticker dengan caption *${prefix + command}*`)
let media = await conn.downloadAndSaveMediaMessage(quoted)
let ran = 'jjsjsnsu.png'
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) reply (err)
let buffer = fs.readFileSync(ran)
conn.sendMessage(m.chat, { image: buffer }, {quoted:m})
fs.unlinkSync(ran)
})
}
break
        case "tourl":
case "upload": {

    try {
        const uploadFile = (await import('cloudku-uploader')).default;
        const { Buffer } = await import('buffer');
        const q = m.quoted ? m.quoted : m;
        const mime = (q.msg || q).mimetype || '';
        let fileBuffer;
        let fileName;
        if (mime) {
            fileBuffer = await q.download();
            const ext = mime.split('/')[1] || 'bin';
            fileName = `upload.${ext}`;
        } else if (q.text) {
            fileBuffer = Buffer.from(q.text, 'utf-8');
            fileName = 'upload.txt';
        } else {
            return m.reply('🚨 Tidak ada media atau teks yang ditemukan!');
        }
        const loading = await m.reply('Procces Uploading');
        const result = await uploadFile(fileBuffer, fileName);
        if (result?.status === 'success') {
            const { filename, type, size, url } = result.result;
            const infoURL = result.information || 'https://cloudkuimages.guru/ch';
            const caption =`📮 *URL:* ${url}\n` +
                            `📂 *Nama:* ${filename}\n` +
                            `📛 *Tipe:* ${type}\n` +
                            `📊 *Ukuran:* ${size}`
            await conn.sendMessage(m.chat, { text: caption }, { quoted: m });
        } else {
            await conn.sendMessage(m.chat, {
                text: `🚨 Upload gagal.\n\nServer Response:\n${JSON.stringify(result, null, 2)}`
            }, { quoted: m });
        }
    } catch (err) {
        console.error(err);
        m.reply('🚨 Terjadi kesalahan internal saat proses upload.');
    }
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case "uppastebin": {
  if (!text) throw `Masukkan teks yang mau di - paste\n\nContoh:\n${prefix + command} Hai nama saya zen ganteng 🗿`;

  const apiKey = '4iXqa681ImN0ykqHeUInKGGAvET6A4u6';
  const apiUrl = 'https://pastebin.com/api/api_post.php';
  const params = new URLSearchParams();
  params.append('api_dev_key', apiKey);
  params.append('api_option', 'paste');
  params.append('api_paste_code', text);

  await m.reply('Tunggu sebentar kak...');

  try {
    const res = await fetch(apiUrl, {
      method: 'POST',
      body: params
    });
    const url = await res.text();

    if (!url.startsWith('http')) throw 'Gagal membuat pastebin!';

    await conn.sendMessage(m.chat, { text: `✅ Paste berhasil dibuat:\n${url}` }, { quoted: m });
  } catch (e) {
    console.error(e);
    m.reply('Terjadi error saat membuat paste. Coba lagi nanti.');
  }
};
break
case "rvo": {
    try {
        if (!m.quoted || (!/imageMessage|videoMessage/.test(m.quoted.mtype))) {
            return conn.sendMessage(m.chat, { text: '🚩 Reply view once media to use this command.' }, { quoted: m });
        }

        let media = await m.quoted.download();
        let type = m.quoted.mtype.includes('video') ? 'video' : 'image';

        await conn.sendMessage(m.chat, {
            [type]: media,
            caption: m.quoted.caption || ''
        }, { quoted: m });

    } catch (e) {
        console.error(e);
        conn.sendMessage(m.chat, { text: JSON.stringify(e, null, 2) }, { quoted: m });
    }
};
break
case "furybrat": {
    if (!text) return reply(`Gunakan perintah ini dengan format: ${prefix}furbrat <teks>`)
    
    try {
        conn.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

        let random = Math.floor(Math.random() * 7);
        const url = `https://fastrestapis.fasturl.link/tool/furbrat?text=${encodeURIComponent(text)}&style=${random}&mode=center`;

        const response = await axios.get(url, { responseType: 'arraybuffer' });

        const sticker = new Sticker(response.data, {
            pack: 'Stiker By',
            author: 'maourafa',
            type: 'image/png',
        });

        const stickerBuffer = await sticker.toBuffer();
        await conn.sendMessage(m.chat, { sticker: stickerBuffer }, { quoted: m });

    } catch (error) {
        console.error('Error:', error);
        await conn.reply(m.chat, 'Maaf, terjadi kesalahan saat mencoba membuat stiker furry brat. Coba lagi nanti.', m);
    }
};
break;
    
    // ───────────────────────────────────────────────────────────────────────────────乂 🥀 SEARCH FEATURE ───────────────────────────────────────────────────────────────乂 \\
    case 'infogempa': {
    if (!isRegistered) return daftar('*[ !! ]*\nᴋᴀᴍᴜ ʙᴇʟᴜᴍ ᴛᴇʀᴅᴀғᴛᴀʀ sɪʟᴀʜᴋᴀɴ ᴅᴀғᴛᴀʀ ᴅᴇɴɢᴀɴ ᴄᴀʀᴀ .ᴅᴀғᴛᴀʀ nama,umur')

    const { default: axios } = require('axios')

    try {
        const response = await axios.get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_day.geojson')
        const features = response.data.features

        if (!features || features.length === 0) return reply('Tidak Ada Data Gempa Terkini')

        // Ambil data gempa terbaru
        const gempaTerkini = features[0]
        const waktu = new Date(gempaTerkini.properties.time).toLocaleString()
        const lokasi = gempaTerkini.properties.place
        const magnitudo = gempaTerkini.properties.mag
        const kedalaman = gempaTerkini.properties.depth
        const koordinat = gempaTerkini.geometry.coordinates.slice(0, 2).join(', ')
        const dirasakan = gempaTerkini.properties.dop || 'Tidak Terdata'

        const teks = `*Info Gempa Terkini (USGS)*\n\n` +
        `• Waktu     : ${waktu}\n` +
        `• Lokasi    : ${lokasi}\n` +
        `• Magnitudo : ${magnitudo}\n` +
        `• Kedalaman : ${kedalaman} km\n` +
        `• Koordinat : ${koordinat}\n` +
        `• Dirasakan : ${dirasakan}`

        // Kirim pesan dengan informasi gempa
        await conn.sendMessage(m.chat, {
            text: teks
        }, { quoted: m })
    } catch (e) {
        reply('Gagal Mengambil Data Gempa: ' + e.message)
    }
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'cuaca':
  if (!q) return reply('Masukkan nama kota atau wilayah.\nContoh: cuaca Jakarta');

  reply('Sedang mencari data cuaca...');

  try {
    const res = await fetch(`https://wttr.in/${encodeURIComponent(q)}?format=j1`);
    const data = await res.json();

    const info = data.current_condition[0];
    const temp = info.temp_C;
    const weather = info.weatherDesc[0].value;
    const humidity = info.humidity;
    const feels = info.FeelsLikeC;
    const wind = info.windspeedKmph;

    const teks = `Cuaca di ${q}:\n- Suhu: ${temp}°C (terasa ${feels}°C)\n- Cuaca: ${weather}\n- Kelembaban: ${humidity}%\n- Angin: ${wind} km/jam`;

    await conn.sendMessage(from, { text: teks }, { quoted: m });

    // Kirim versi suara pakai TTS
    await conn.sendMessage(from, {
      audio: {
        url: `https://translate.google.com/translate_tts?ie=UTF-8&conn=tw-ob&tl=id&q=${encodeURIComponent(teks)}`
      },
      mimetype: 'audio/mpeg',
      ptt: true
    }, { quoted: m });

  } catch (e) {
    console.log(e);
    reply('Gagal mengambil data cuaca. Coba lagi nanti.');
  }
  db.data.users[m.sender].exp += await randomNomor(60)
  break;
case 'dongeng': {
try {
const anu = await axios.get(`https://apizell.web.id/random/dongeng`)
m.reply(`Judul Dongeng: ${anu.data.title}\n\n${anu.data.storyContent}`)
} catch (err) {
m.reply("Terjadi Kesalahan: " + err)
}
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'playstore':
case 'searchplay': {
  if (!text) return m.reply('Masukkan nama aplikasi yang ingin dicari!\nContoh: .playstore Free Fire');

  try {
    const url = `https://fastrestapis.fasturl.cloud/search/playstore?query=${encodeURIComponent(text)}`;
    const { data } = await axios.get(url);

    if (data.status !== 200 || !data.result || !data.result.apps) {
      return m.reply('Tidak ditemukan hasil untuk pencarian tersebut.');
    }

    const results = data.result.apps.slice(0, 5); // ambil 5 teratas
    for (let app of results) {
      let caption = `📱 *${app.appName}*\n`;
      caption += `👨‍💻 Developer: ${app.developer}\n`;
      caption += `⭐ Rating: ${app.rating}\n`;
      caption += `💰 Harga: ${app.price}\n`;
      caption += `🔗 Link: ${app.appLink}`;

      await conn.sendMessage(m.chat, {
        image: { url: app.imageUrl },
        caption
      }, { quoted: m });
    }
  } catch (err) {
    console.error(err);
    m.reply('Gagal mengambil data dari Play Store.');
  }
  break;
}
case 'spotifysearch':
case 'spotifysrc': {
  if (!args[0]) return m.reply(`*Contoh:* ${prefix}spotifysearch masa lalu`)

  try {
    const query = encodeURIComponent(args.join(" "))
    const res = await fetch(`https://www.velyn.biz.id/api/search/spotify?query=${query}`)
    const json = await res.json()

    if (!json.status || !json.data?.length) {
      return m.reply("Tidak ditemukan hasil Spotify.")
    }

    const results = json.data.slice(0, 5).map((v, i) => {
      const dur = Math.floor(v.duration_ms / 60000) + ':' + String(Math.floor((v.duration_ms % 60000) / 1000)).padStart(2, '0')
      return `🎵 *${v.name}*\n👤 *${v.artists}*\n📊 Popularitas: ${v.popularity}\n⏱️ Durasi: ${dur}\n🔗 ${v.link}\n`
    }).join('\n──────────────\n')

    await conn.sendMessage(m.chat, {
      image: { url: json.data[0].image },
      caption: `Hasil pencarian Spotify:\n\n${results}`
    }, { quoted: m })

  } catch (e) {
    console.error(e)
    m.reply("Terjadi kesalahan saat menghubungi API.")
  }
  break;
}
case 'googlesearch': {
  if (!m.text) return reply(`Contoh penggunaan: *${prefix + command} apa kelebihan memakan cabai?*`);

  const query = m.text.split(" ").slice(1).join(" "); // Menangkap query pencarian
  if (!query) return reply(`Harap masukkan kata kunci untuk pencarian.`);
  reply(mess.wait);

  try {
    // API untuk melakukan pencarian
    let response = await fetch(`https://api.nekorinn.my.id/search/google?q=${encodeURIComponent(query)}`);
    let result = await response.json();

    if (result.status && result.result && result.result.length > 0) {
      let message = `🔍 *Hasil Pencarian untuk:* "${query}"\n\n`;

      // Menambahkan setiap hasil pencarian
      result.result.forEach((item, index) => {
        message += `📄 *${index + 1}. ${item.title}*\n`;
        message += `📜 *Deskripsi:* ${item.desc}\n`;
        message += `🔗 *Link:* ${item.link}\n`;
        message += `\n════════════════════\n`; // Pembatas antar hasil
      });

      await conn.sendMessage(m.chat, {
        text: message,
        caption: '📚 Hasil Pencarian Google'
      }, { quoted: m });
    } else {
      reply('❌ Tidak ada hasil yang ditemukan untuk pencarian tersebut.');
    }
  } catch (e) {
    console.error(e);
    reply('❌ Terjadi kesalahan saat mengambil hasil pencarian.');
  }
}
db.data.users[m.sender].exp += await randomNomor(60)
break;
case 'otakudesu': {
    if (!q) return conn.reply(m.chat, 'Masukkan judul animenya!\nContoh: .anime akame ga kill', m)
    try {
        const res = await fetch(`https://fastrestapis.fasturl.cloud/otakudesu/search?query=${encodeURIComponent(q)}`)
        const json = await res.json()

        if (json?.status !== 200 || !json.result.animeList || json.result.animeList.length === 0) {
            return conn.reply(m.chat, 'Anime tidak ditemukan!', m)
        }

        const anime = json.result.animeList[0] // Ambil hasil pertama
        const genres = anime.genreList.map(g => g.genreTitle).join(', ')
        const caption = `
*🎬 Judul:* ${anime.title}
*📊 Skor:* ${anime.score}
*📺 Status:* ${anime.status}
*🌐 Genre:* ${genres}
*🔗 Link:* ${anime.link}
        `.trim()

        const buttons = [
            {
                buttonId: anime.link,
                buttonText: { displayText: '🌐 Kunjungi Web' },
                type: 1
            }
        ]

        await conn.sendMessage(m.chat, {
            image: { url: anime.thumb },
            caption,
            footer: 'Hasil dari Otakudesu API',
            buttons,
            headerType: 4
        }, { quoted: m })

    } catch (err) {
        console.error(err)
        conn.reply(m.chat, 'Terjadi kesalahan saat mengambil data anime.', m)
    }
}
db.data.users[m.sender].exp += await randomNomor(60)
break
 case 'komiks': {
    if (!q) return conn.reply(m.chat, 'Masukkan kata kunci pencarian!\nContoh: .nhentai neko', m)
    try {
        const res = await fetch(`https://fastrestapis.fasturl.cloud/comic/nhentaisearch?query=${encodeURIComponent(q)}`)
        const json = await res.json()

        if (json?.status !== 200 || !json.result.comics || json.result.comics.length === 0) {
            return conn.reply(m.chat, 'Tidak ditemukan hasil NHentai.', m)
        }

        const results = json.result.comics.slice(0, 5) // ambil 5 teratas
        for (let comic of results) {
            const caption = `*📖 Judul:* ${comic.title}\n*🔗 Link:* ${comic.url}`

            const buttons = [
                {
                    buttonId: comic.url,
                    buttonText: { displayText: '🌐 Buka' },
                    type: 1
                }
            ]

            await conn.sendMessage(m.chat, {
                image: { url: comic.thumb },
                caption,
                footer: 'Hasil pencarian dari NHentai (via FastURL)',
                buttons,
                headerType: 4
            }, { quoted: m })
        }

    } catch (err) {
        console.error(err)
        conn.reply(m.chat, 'Terjadi kesalahan saat mengambil data.', m)
    }
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'mlbb': {
    if (!q) return reply('Masukkan nama hero MLBB!\nContoh: .mlbb aamon')
    try {
        const res = await fetch(`https://fastrestapis.fasturl.cloud/character/mlbb?name=${encodeURIComponent(q)}`)
        const json = await res.json()

        if (json?.status !== 200 || !json.result) {
            return reply('Hero tidak ditemukan.')
        }

        const hero = json.result
        const caption = `
🏷️ *Nama:* ${hero.name}
📖 *Cerita:* ${hero.story}
🧩 *Role:* ${hero.role.map(r => r.name).filter(r => r !== 'No role').join(', ') || 'Tidak diketahui'}
🛡️ *Lane:* ${hero.lane.map(l => l.name).filter(l => l !== 'No lane').join(', ') || 'Tidak diketahui'}
⚔️ *Durability:* ${hero.ability.durability}
🔥 *Offense:* ${hero.ability.offense}
✨ *Ability Effects:* ${hero.ability.ability_effects}
🎮 *Difficulty:* ${hero.ability.difficulty}
🌟 *Spesial:* ${hero.speciality.join(', ') || 'Tidak ada'}

🧠 *Skill:* ${hero.skills[0]?.name || '-'}
📜 *Deskripsi:* ${hero.skills[0]?.desc?.split('\n').join(' ') || '-'}
        `.trim()

        await conn.sendMessage(m.chat, {
            image: { url: hero.media.icon },
            caption
        }, { quoted: m })

    } catch (err) {
        console.error(err)
        reply('Terjadi kesalahan saat mengambil data MLBB.')
    }
}
db.data.users[m.sender].exp += await randomNomor(60)
break

    case 'tiktoksearch':
case 'tiktoks':
case 'ttsearch': {

    if (!text) return reply(`Gunakan dengan cara ${prefix + command} *query*\n\n_Contoh_\n\n${prefix + command} jj epep`);
    try {
        let serach = await tiktokSearchVideo(text);
        if (!serach.videos || serach.videos.length === 0) return reply('Tidak ada video ditemukan.');

        // Ambil video acak
        let randomVideo = serach.videos[Math.floor(Math.random() * serach.videos.length)];

        let teks = `*Hii ${pushname}, ini hasil acak TikTok Search*\n\n` +
                   `*⭔ Title* : ${randomVideo.title}\n` +
                   `*⭔ Video ID* : ${randomVideo.video_id}\n` +
                   `*⭔ Username* : ${randomVideo.author.unique_id}\n` +
                   `*⭔ Nickname* : ${randomVideo.author.nickname}\n` +
                   `*⭔ Duration* : ${randomVideo.duration} detik\n` +
                   `*⭔ VT Like* : ${randomVideo.digg_count}\n` +
                   `*⭔ Comment* : ${randomVideo.comment_count}\n` +
                   `*⭔ Share* : ${randomVideo.share_count}\n` +
                   `*⭔ Url* : https://www.tiktok.com/@${randomVideo.author.unique_id}/video/${randomVideo.video_id}\n`;

        // Kirim ke chat pribadi user
        await conn.sendMessage(m.sender, {
            video: { url: `https://tikwm.com${randomVideo.play}` },
            caption: teks
        }, { quoted: m });

        // Button "Next Video"
        const buttons = [
            { buttonId: `${prefix + command} ${text}`, buttonText: { displayText: '▶️ Next Video' }, type: 1 }
        ];

        const buttonMessage = {
            text: `*Berhasil!* Video TikTok acak telah dikirim ke private chat kamu ya ${pushname}!\n\nKlik tombol di bawah untuk cari video selanjutnya. Otomatos Video Selanjut Nya Di Kirim Ke Pribadi Kamu`,
            buttons: buttons,
            footer: 'TikTok Search Bot',
            headerType: 1
        };

        // Kirim balasan ke chat asal (grup/chat)
        await conn.sendMessage(m.chat, buttonMessage, { quoted: m });

    } catch (error) {
        console.log(error);
        reply(`Gagal mengambil video.\n\nError: ${error.message || 'Terjadi kesalahan.'}`);
    }
}
db.data.users[m.sender].exp += await randomNomor(60)
break;
case 'pin': {

 if (!text) return m.reply(`*[ ! ]* Wrong Input!\n\n*Example:* ${prefix + command} Mas Rusdi`);

 conn.sendMessage(m.chat, {
 react: {
 text: '🔎',
 key: m.key,
 }
 });

 try {
 const res = await axios.get(`https://api.ownblox.biz.id/api/pinterest?q=${encodeURIComponent(text)}`);
 const { status, results } = res.data;

 if (status !== 200 || !Array.isArray(results) || results.length === 0) {
 return m.reply(`*[ ❌ ]* Hasil Dari *"${text}"* Tidak Ditemukan -_-`);
 }

 let cap = `*P I N T R E S T*\n*R E S U L T*: ${text}`;
 let footer = 'By maourafa - AI';

 const cards = [];
 for (let i = 0; i < Math.min(results.length, 10); i++) {
 const { image } = results[i];
 const media = await prepareWAMessageMedia(
 { image: { url: image } },
 { upload: conn.waUploadToServer }
 );
 const card = {
 body: proto.Message.InteractiveMessage.Body.fromObject({ text: cap }),
 footer: proto.Message.InteractiveMessage.Footer.fromObject({ text: footer }),
 header: proto.Message.InteractiveMessage.Header.fromObject({
 title: '',
 hasMediaAttachment: true,
 ...media
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
 buttons: [
 {
 name: "cta_url",
 buttonParamsJson: JSON.stringify({
 display_text: "Search",
 url: image
 })
 },
 {
 name: "cta_copy",
 buttonParamsJson: JSON.stringify({
 display_text: "Done ✅",
 copy_code: image
 })
 }
 ]
 })
 };
 cards.push(card);
 }

 const msg = generateWAMessageFromContent(
 m.chat,
 {
 viewOnceMessage: {
 message: {
 interactiveMessage: proto.Message.InteractiveMessage.fromObject({
 contextInfo: { mentionedJid: [m.sender] },
 carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({ cards }),
 body: proto.Message.InteractiveMessage.Body.fromObject({
 text: `*sɪʟᴀʜᴋᴀɴ ᴄᴇᴋ ɢᴀᴍʙᴀʀ ᴅɪʙᴀᴡᴀʜ*\n@${m.sender.split('@')[0]}`
 })
 })
 }
 }
 },
 {
 userJid: m.chat,
 quoted: m
 }
 );

 return conn.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
 } catch (e) {
 console.error(e);
 return m.reply(`*[ ❌ ]* Terjadi kesalahan, coba lagi nanti.`);
 }
};
break
case "playch": {
    if (!text) return reply(`Contoh:\n.playch https://youtube.com/watch?v=xxx\n.playch mellow vibes`);

    try {
      let url, title, author, audioUrl, thumbnail, videoUrl;

      if (/^https?:\/\/(www\.)?(youtube\.com|youtu\.be)\//i.test(text)) {
        const { data } = await axios.get(`https://cloudkutube.eu/api/yta?url=${encodeURIComponent(text)}`);
        if (data.status !== "success") return reply("Gagal ambil audio.");
        ({ title, author, url: audioUrl, thumbnail } = data.result);
        videoUrl = text;
      } else {
        const search = await axios.get(`https://flowfalcon.dpdns.org/search/youtube?q=${encodeURIComponent(text)}`);
        const list = search.data.result;
        if (!list || !list.length) return reply("Video tidak ditemukan.");
        const video = list[0];
        const { data } = await axios.get(`https://cloudkutube.eu/api/yta?url=${encodeURIComponent(video.link)}`);
        if (data.status !== "success") return reply("Gagal ambil audio.");
        ({ title, author, url: audioUrl, thumbnail } = data.result);
        videoUrl = video.link;
      }

      const idsal = "120363328148463101@newsletter";
      const ctx = {
        forwardingScore: 1,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: idsal,
          serverMessageId: Math.floor(Math.random() * 999999),
          newsletterName: "𝙈𝘼𝙊𝙐𝙍𝘼𝙁𝘼 𝙑𝙋𝙉-𝙏𝙐𝙉𝙉𝙀𝙇 𝙋𝙍𝙀𝙈𝙄𝙐𝙈"
        },
        externalAdReply: {
          title: title,
          body: `By ${author}`,
          thumbnailUrl: thumbnail,
          mediaType: 1,
          sourceUrl: videoUrl
        }
      };

      const audioRes = await axios.get(audioUrl, { responseType: "arraybuffer" });
      const audioBuffer = Buffer.from(audioRes.data, "binary");

      await conn.sendMessage(idsal, {
        audio: audioBuffer,
        mimetype: "audio/mp4",
        ptt: true,
        contextInfo: ctx
      });

      reply(`✔ Sukses kirim *${title}* ke channel.`);
    } catch (err) {
      console.error(err);
      reply("Gagal kirim audio ke channel.");
    }
  };
break
case 'playspoch': case 'playspotifych': {

  if (!text) return m.reply('Masukkan judul lagu!\nContoh: plays Jakarta Hari Ini');
  const res = await fetch(`https://api.nekorinn.my.id/downloader/spotifyplay?q=${encodeURIComponent(text)}`);
  if (!res.ok) return m.reply('Gagal mengambil data lagu.');
  const data = await res.json();
  if (!data.status) return m.reply('Lagu tidak ditemukan!');

  const { title, artist, duration, imageUrl, link } = data.result.metadata;
  const downloadUrl = data.result.downloadUrl;

  // Kirim ke channel (ganti ID_CHANNEL dengan JID channel-mu, contoh: 1203630xxxxx@g.us atau @broadcast)
  const idChannel = '120363328148463101@newsletter'; // contoh: 1203630xxxxx@broadcast
  await conn.sendMessage(idChannel, {
    audio: { url: downloadUrl },
    mimetype: 'audio/mpeg',
    fileName: `${title}.mp3`,
    ptt: true,
    contextInfo: {
      externalAdReply: {
        title: title,
        body: `${artist} • ${duration}`,
        mediaType: 2,
        thumbnailUrl: imageUrl,
        renderLargerThumbnail: true,
        sourceUrl: link, 
        showAdAttribution: true
      }
    }
  });
  m.reply('Audio berhasil dikirim ke channel.');
}
break;
case 'plays': case 'playspotify': {

if (!text) return m.reply('Masukkan judul lagu!\nContoh: plays Jakarta Hari Ini');
const res = await fetch(`https://api.nekorinn.my.id/downloader/spotifyplay?q=${encodeURIComponent(text)}`);
if (!res.ok) return m.reply('Gagal mengambil data lagu.');
const data = await res.json();
if (!data.status) return m.reply('Lagu tidak ditemukan!');
const { title, artist, duration, imageUrl, link } = data.result.metadata;
const downloadUrl = data.result.downloadUrl;
await conn.sendMessage(m.chat, {
audio: { url: downloadUrl },
mimetype: 'audio/mpeg',
fileName: `${title}.mp3`,
ptt: true, // true kalau mau dikirim sebagai VN
contextInfo: {
externalAdReply: {
title: title,
body: `${artist} • ${duration}`,
mediaType: 2,
thumbnailUrl: imageUrl,
renderLargerThumbnail: true,
sourceUrl: link,
showAdAttribution: true
}
}
}, { quoted: m });
}
break
case "nasa": {
    const axios = require("axios");
    const cheerio = require("cheerio");

    async function nasaNews() {
        try {
            const anu = await axios.get("https://www.nasa.gov/news/releases/latest/index.html");
            const $ = cheerio.load(anu.data);
            const dbres = [];

            $(".hds-content-item").each((a, b) => {
                const judul = $(b).find(".hds-a11y-heading-22").text().trim();
                const desc = $(b).find("p").text().trim();
                const link = $(b).find(".hds-content-item-inner a").attr("href");
                if (judul && link) {
                    dbres.push({
                        judul,
                        desc,
                        link: link.startsWith("http") ? link : `https://www.nasa.gov${link}`
                    });
                }
            });

            return dbres;
        } catch (err) {
            return [{
                judul: "Gagal mengambil berita NASA",
                desc: err.message,
                link: ""
            }];
        }
    }

    const res = await nasaNews();
    const text = res.map(a => `🛰️ *${a.judul}*\n${a.desc}\n🔗 ${a.link}`).join("\n\n");

    await conn.sendMessage(m.chat, { text }, { quoted: qtext });
}
break;
case "kompas": {
    const axios = require("axios");
    const cheerio = require("cheerio");

    async function newsKom() {
        try {
            const res = await axios.get("https://indeks.kompas.com/");
            const $ = cheerio.load(res.data);
            const dbres = [];

            $(".articleItem").each((_, el) => {
                const judul = $(el).find(".articleTitle").text().trim();
                const link = $(el).find(".article-link").attr("href");
                const dateup = $(el).find(".articlePost-date").text().trim();
                if (judul && link) dbres.push({ judul, link, dateup });
            });

            return dbres;
        } catch (err) {
            return [{ judul: "Gagal mengambil berita", link: "", dateup: err.message }];
        }
    }

    const hasil = await newsKom();
    const teks = hasil.map(a => `📰 *${a.judul}*\n📅 ${a.dateup}\n🔗 ${a.link}`).join("\n\n");

    await conn.sendMessage(m.chat, { text: teks }, { quoted: qtext });
}
break;
    case "bilibili": {
    if (!text) return conn.sendMessage(m.chat, { text: "Kirimkan kata kunci untuk mencari di Bilibili.\n\nContoh: .bilibili Naruto" }, { quoted: m });

    const axios = require('axios');
    const cheerio = require('cheerio');

    async function bilibiliSearch(query) {
        try {
            const response = await axios.get(`https://www.bilibili.tv/id/search-result?q=${encodeURIComponent(query)}`, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Linux; Android 8.1.0; CPH1803) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.4280.141 Mobile Safari/537.36 KiToBrowser/124.0',
                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                    'accept-language': 'id-ID',
                    'referer': 'https://www.bilibili.tv/id/search',
                    'upgrade-insecure-requests': '1'
                }
            });

            const $ = cheerio.load(response.data);
            let results = [];

            $('.section__list__item').each((_, el) => {
                const title = $(el).find('.highlights').text().trim();
                const url = 'https://www.bilibili.tv' + $(el).find('.bstar-video-card__text a').attr('href');
                const thumbnail = $(el).find('.bstar-video-card__cover-img img').attr('src');
                const duration = $(el).find('.bstar-video-card__cover-mask-text').text().trim();
                const uploader = $(el).find('.bstar-video-card__nickname span').text().trim();
                const uploaderUrl = 'https://www.bilibili.tv' + $(el).find('.bstar-video-card__nickname').attr('href');
                const views = $(el).find('.bstar-video-card__desc').text().trim().replace(' · ', ' | ');

                if (title && url) {
                    results.push({ title, url, thumbnail, duration, uploader, uploaderUrl, views });
                }
            });

            return results;
        } catch (error) {
            console.error('Gagal ambil data bilibili:', error);
            return [];
        }
    }

    const res = await bilibiliSearch(text);
    if (!res.length) return conn.sendMessage(m.chat, { text: "Tidak ditemukan hasil untuk kata kunci tersebut." }, { quoted: m });

    const teks = res.slice(0, 5).map((v, i) => 
        `🎬 *${v.title}*\n⏱ Durasi: ${v.duration}\n👤 ${v.uploader}\n👁 ${v.views}\n🔗 ${v.url}`
    ).join('\n\n');

    await conn.sendMessage(m.chat, { text: teks }, { quoted: m });
}
break;


// ───────────────────────────────────────────────────────────────────────────────乂 🥀 GROUP FEATURE ───────────────────────────────────────────────────────────────乂 \\

    case 'antipromotion':
        handleFeatureToggle('antipromotion', command);
        break;
                    case 'antitagsw': {
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isCreator) return reply(`khusus admin`)
                if (!isBotAdmins) return reply(`MAOURAFA not admin`)
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].antitagsw) return m.reply(`Udah aktif`)
                    db.data.chats[m.chat].antitagsw = true
                    m.reply('Successfully Activate Antitagsw All In This Group')
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].antitagsw) return m.reply(`Udah nonaktif`)
                    db.data.chats[m.chat].antitagsw = false
                    m.reply('Successfully Disabling Antitagsw All In This Group')
                } else {
            }
            }
           break
      case "antilink":
        {
          if (!m.isGroup) return reply(mess.group);
          if (!isCreator && !isAdmins) return reply(mess.Admin);
          if (!args[0])
            return reply(
              example(
                "on/off"
              )
            );
          if (/on/.test(args[0].toLowerCase())) {
            if (antilink.includes(m.chat))
              return reply("*Antilink Grup* Di Grup Ini Sudah Aktif!");
            if (antilink2.includes(m.chat)) {
              let posi = antilink2.indexOf(m.chat);
              antilink2.splice(posi, 1);
              await fs.writeFileSync(
                "./database/antilink2.json",
                JSON.stringify(antilink2)
              );
            }
            antilink.push(m.chat);
            await fs.writeFileSync(
              "./database/antilink.json",
              JSON.stringify(antilink)
            );
            reply(
              "*Berhasil Menyalakan Antilink Grup ✅*"
            );
          } else if (/off/.test(args[0].toLowerCase())) {
            if (!antilink.includes(m.chat))
              return reply("*Antilink Grup* Di Grup Ini Belum Aktif!");
            let posi = antilink.indexOf(m.chat);
            antilink.splice(posi, 1);
            await fs.writeFileSync(
              "./database/antilink.json",
              JSON.stringify(antilink)
            );
            reply(
              "*Berhasil Mematikan Antilink Grup ✅*"
            );
          } else {
            return reply(example("on/off"));
          }
        }
        break;
      case "antilinkV2":
      case "antilinkv2":
        {
          if (!m.isGroup) return reply(mess.group);
          if (!isCreator && !isAdmins) return reply(mess.Admin);
          if (!args[0])
            return reply(
              example(
                "on/off"
              )
            );
          if (/on/.test(args[0].toLowerCase())) {
            if (antilink2.includes(m.chat))
              return reply("*Antilink Grup V2* Di Grup Ini Sudah Aktif!");
            if (antilink.includes(m.chat)) {
              let posi = antilink.indexOf(m.chat);
              antilink.splice(posi, 1);
              await fs.writeFileSync(
                "./database/antilink.json",
                JSON.stringify(antilink)
              );
            }
            antilink2.push(m.chat);
            await fs.writeFileSync(
              "./database/antilink2.json",
              JSON.stringify(antilink2)
            );
            reply(
              "*Berhasil Menyalakan Antilink Grup V2 ✅*"
            );
          } else if (/off/.test(args[0].toLowerCase())) {
            if (!antilink2.includes(m.chat))
              return reply("*Antilink Grup V2* Di Grup Ini Belum Aktif!");
            let posi = antilink2.indexOf(m.chat);
            antilink2.splice(posi, 1);
            await fs.writeFileSync(
              "./database/antilink2.json",
              JSON.stringify(antilink2)
            );
            reply(
              "*Berhasil Mematikan Antilink Grup V2 ✅*"
            );
          } else {
            return reply(example("on/off"));
          }
        }
        break;
        case 'antibot': {
  if (!isGroup) return m.reply('Fitur ini hanya bisa dipakai di grup!')
  if (!m.isBotAdmin) return m.reply(mess.botAdmin)
  if (!text) return m.reply(`Contoh:\n${prefix + command} on\n${prefix + command} off`)
  if (text === 'on') {
    global.antibotGroups[m.chat] = true
    m.reply('✅ Fitur *Antibot* berhasil diaktifkan di grup ini.')
  } else if (text === 'off') {
    global.antibotGroups[m.chat] = false
    m.reply('❌ Fitur *Antibot* dimatikan di grup ini.')
  } else {
    m.reply(`Gunakan format:\n${prefix + command} on\n${prefix + command} off`)
  }
}
break
case 'totag': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(`Ehh Bot Nya Belum Jadi Admin ☝️😅`)
if (!isAdmins) return reply(mess.admin)
if (!m.quoted) return `Reply pesan dengan caption ${prefix + command}`
conn.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
}
break
case 'linkgroup': case 'linkgc': {
if (!isCreator) return reply(mess.creator)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
let response = await conn.groupInviteCode(from)
conn.sendText(from, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'resetlinkgc': {
if (!isCreator) return reply(mess.creator)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
conn.groupRevokeInvite(from)
}
break
case 'sendlinkgc': {
if (!isCreator) return reply(mess.creator)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
let response = await conn.groupInviteCode(from)
conn.sendText(bnnd, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'kick': {
if (!isCreator) return reply(mess.creator)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
if (!isAdmins) return reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(from, [users], 'remove')
reply(mess.done)
}
break
case 'add': {
if (!isCreator) return reply(mess.creator)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
if (!isAdmins) return reply(mess.admin)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(from, [users], 'add')
reply(mess.done)
}
break
			case 'promote':
			case 'pm': {
				if (!m.isGroup) return reply(mess.group)
				if (!isCreator && !isAdmins) return reply(mess.Admin)
				if (!isBotAdmins) return reply(mess.BotAdmin)
				if (!m.quoted && !m.mentionedJid[0] && isNaN(parseInt(args[0]))) return reply('Tag/reply pesan target yang ingin di jadikan admin!')
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (!m.mentionedJid[0] && !m.quoted && !text) return reply(`Tag/Reply Target Yang Mau Di ${command}`)
				await conn.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply('Sukses promote member✅')).catch((err) => m.reply('❌ Terjadi kesalahan'))
			}
			break
			case 'demote':
			case 'dm': {
				if (!m.isGroup) return reply(mess.group)
				if (!isCreator && !isAdmins) return reply(mess.Admin)
				if (!isBotAdmins) return reply(mess.BotAdmin)
				if (!m.quoted && !m.mentionedJid[0] && isNaN(parseInt(args[0]))) return reply('Tag/reply pesan target yang ingin di un admin!')
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (!m.mentionedJid[0] && !m.quoted && !text) return reply(`Tag/Reply Target Yang Mau Di ${command}`)
				await conn.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply('Sukses demote admin✅')).catch((err) => m.reply('❌ Terjadi kesalahan'))
			}
			break
case 'hidetag': {
if (!isCreator) return reply(mess.creator)
if (!m.isGroup) return reply(mess.group)
conn.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, {quoted:m})
}
break
case 'vpn': {
if (!m.isGroup) return
let teks = `Menjual Config Premium Server Singapura Untuk Injektor Kuota. *FULL GARANSI* Jika *EROR* Langsung Ditangani

Update akun *FREE* Setiap Hari Jangan Lupa Join Group! Dan CH!
Online order : https://list.maourafavpn.my.id 

📝 VPN SG-DO (2 IP / 200GB) STANDAR
🚀 CPU DO-Standar-AMD (2) @ 1.496GHz
• \`3 Hari: Rp1.000\`
• \`7 Hari: Rp3.000\`
• \`15 Hari: Rp6.000\`
• \`30 Hari: Rp8.000\`

📝 SG-VIP ⚡(2 IP / Unlimited) PREMIUM
🚀 CPU DO-Premium-AMD (4) @ 1.996GHz
• \`3 Hari: Rp 3.000\`
• \`7 Hari: Rp 6.000\`
• \`15 Hari: Rp 9.000\`
• \`30 Hari: Rp10.000\`

📝 SG STB (5 IP / 400GB) STANDAR
🚀 CPU DO-Standar-AMD (2) @ 1.496GHz
• \`SG STB 30 Hari: Rp15.000\`
• \`SG STB 60 Hari: Rp28.000\`

SG VIP STB ⚡(10 IP / UNLIMITED)
• \`SG VIP STB 30 Hari: Rp18.000\`
• \`SG VIP STB 60 Hari: Rp34.000\` 

┌──────────────────┐
 *PROMO PAKET INJECT*
*✅ XL VIDIO✅ ( Rp 30.000 ) + vip config 40.000*  
・Tembak Paket Vidio Yang Hilang 
・tanpa gandeng
Total FUP: 100GB-150GB Semua Aplikasi 

*✅ XL IFLIX✅ ( Rp 33.000 )* 
・ Paket iFlix Yang Hilang 
・tanpa gandeng
Total FUP: 100GB-150GB Semua Aplikasi 

*✅XC 1+1GB + XUTSuper ( Rp. 25.000 )* 
・ Unlimited Whatsapp
・ Line
・ Gojek
・ Instagram
・ Facebook
Total FUP: 230GB++Semua Aplikasi 

*✅XCS + XUTPremiun ( Rp. 38.000 )* 
・ Unlimited Whatsapp
・ Line
・ Gojek
・ Instagram
・ Facebook
- 👉🏻YouTube 
Total FUP: 230GB++ Semua Aplikasi 

 *✅ XCS + Multi Add On  ( Rp 40.000 )* 
・ XUTBasic
・ XUTStandard
・ XUTSuper
・ XUTPremium
・ XUTYouTube
・ XUTJoox
・ XUTViu
・ XUTNetflix
・ XUTTikTok
Total FUP: 800GB++Semua Aplikasi 

◇━━━━━━━━━━━━━━━━━━━━━◇
 *SYARAT BELI UNTUK Paket* 
• Kartu tidak boleh ada paket xcs/xcp atau paket xc lainnya
Cek kode dial *808*7*1*3#  pastikan tidak ada Xtra Combo (xc) varian apapun
• Tanpa menyediakan pulsa
• Estimasi masuk 30 menit - 1 jam
• Membutuhkan OTP.
• Cara jadi kuota utama Wajib Menggunakan Akun VPN Untuk Inject untuk penggunaan semua aplikasi. Jika Tidak Hanya Bisa Digunakan Di Aplikasi Yang Disebutkan.
• Bisa Tanya Dahulu Jika Masih Bingung.
◇━━━━━━━━━━━━━━━━━━━━━◇
NOTES ⚠️ 
• Tidak ada Garansi
• Membeli=Setuju.
• Paket Illegal Bisa Hilang, Jika Hilang Tidak Ada Refund. SELAMA INI AMAN AMAN SAJA.
◇━━━━━━━━━━━━━━━━━━━━━◇

FB    :  fb.com/maourafa

YT    : youtube.com/@maourafa

Tele : t.me/maourafa

Order  : wa.me/+6282278687542

GC : https://chat.whatsapp.com/CIMeGjTupQy2KuMXhxpY2w

CH : https://whatsapp.com/channel/0029VaiKMO3KrWR1A35DRN1O`
}
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted:m })
}
break
case 'tagall': {
if (!isAdmins) return reply(mess.admin)
if (!m.isGroup) return
let teks = `══✪〘 *👥 Tag All* 〙✪══
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted:m })
}
break
      case 'group':
      case 'grup':
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isCreator)
          return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        if (args[0] === "close") {
          await conn
            .groupSettingUpdate(m.chat, "announcement")
            .then((res) => m.reply(`Sukses Menutup Group 🕊️`))
            .catch((err) => m.reply(json(err)));
        } else if (args[0] === "open") {
          await conn
            .groupSettingUpdate(m.chat, "not_announcement")
            .then((res) => m.reply(`Sukses Membuka Group 🕊️`))
            .catch((err) => m.reply(json(err)));
        } else {
          m.reply(`Mode ${command}\n\n\nKetik ${prefix + command}open/close`);
        }
        break;
              case 'closetime':
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isCreator)
          return m.reply(mess.admins);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        if (args[1] == "detik") {
          var timer = args[0] * `1000`;
        } else if (args[1] == "menit") {
          var timer = args[0] * `60000`;
        } else if (args[1] == "jam") {
          var timer = args[0] * `3600000`;
        } else if (args[1] == "hari") {
          var timer = args[0] * `86400000`;
        } else {
          return m.reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik");
        }
        m.reply(`Close time ${q} dimulai dari sekarang`);
        setTimeout(() => {
          var nomor = m.participant;
          const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`;
          conn.groupSettingUpdate(m.chat, "announcement");
          m.reply(close);
        }, timer);
        break;
      case 'opentime':
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isCreator)
          return m.reply(mess.admins);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        if (args[1] == "detik") {
          var timer = args[0] * `1000`;
        } else if (args[1] == "menit") {
          var timer = args[0] * `60000`;
        } else if (args[1] == "jam") {
          var timer = args[0] * `3600000`;
        } else if (args[1] == "hari") {
          var timer = args[0] * `86400000`;
        } else {
          return m.reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik");
        }
        m.reply(`Open time ${q} dimulai dari sekarang`);
        setTimeout(() => {
          var nomor = m.participant;
          const open = `*Tepat waktu* grup dibuka oleh admin\n sekarang member dapat mengirim pesan`;
          conn.groupSettingUpdate(m.chat, "not_announcement");
          m.reply(open);
        }, timer);
        break;
        case 'cekasalmember': {
  if (!m.isGroup) return m.reply(mess.group)
  const participants = await conn.groupMetadata(m.chat).then(a => a.participants)
  
  let dataNegara = {
    '62': { nama: 'Indonesia', emoji: '🇮🇩', jumlah: 0 },
    '60': { nama: 'Malaysia', emoji: '🇲🇾', jumlah: 0 },
    '91': { nama: 'India', emoji: '🇮🇳', jumlah: 0 },
    '92': { nama: 'Pakistan', emoji: '🇵🇰', jumlah: 0 },
    '1': { nama: 'USA/Canada', emoji: '🇺🇸', jumlah: 0 },
    '44': { nama: 'Inggris', emoji: '🇬🇧', jumlah: 0 },
    '81': { nama: 'Jepang', emoji: '🇯🇵', jumlah: 0 },
    '82': { nama: 'Korea Selatan', emoji: '🇰🇷', jumlah: 0 },
    '84': { nama: 'Vietnam', emoji: '🇻🇳', jumlah: 0 },
    '234': { nama: 'Nigeria', emoji: '🇳🇬', jumlah: 0 },
    '55': { nama: 'Brasil', emoji: '🇧🇷', jumlah: 0 },
    '86': { nama: 'China', emoji: '🇨🇳', jumlah: 0 },
    '7': { nama: 'Rusia', emoji: '🇷🇺', jumlah: 0 }
  }

  let lainnya = 0

  participants.forEach(p => {
    let nomor = p.id.split('@')[0]
    let ketemu = false
    for (let kode in dataNegara) {
      if (nomor.startsWith(kode)) {
        dataNegara[kode].jumlah++
        ketemu = true
        break
      }
    }
    if (!ketemu) lainnya++
  })

  let hasil = `*Jumlah Anggota Berdasarkan Asal Negara:*\n\n`
  Object.values(dataNegara).forEach(data => {
    if (data.jumlah > 0) hasil += `${data.nama}: ${data.jumlah} ${data.emoji}\n`
  })
  if (lainnya > 0) hasil += `Lainnya: ${lainnya} 🏳️`

  m.reply(hasil)
}
break


    // ───────────────────────────────────────────────────────────────────────────────乂 🥀 TOOLS FEATURE ───────────────────────────────────────────────────────────────乂 \\
       		case 'ssweb': {
				if (!text) return reply(`Example: ${prefix + command} https://`)
				if (!text.startsWith('http')) {
					let buf = 'https://image.thum.io/get/width/1900/crop/1000/fullpage/https://' + q;
					await conn.sendMessage(m.chat, { image: { url: buf }, caption: 'Berhasil' }, { quoted: qlocJpm })
				} else {
					let buf = 'https://image.thum.io/get/width/1900/crop/1000/fullpage/' + q;
					await conn.sendMessage(m.chat, { image: { url: buf }, caption: 'Berhasil' }, { quoted: qlocJpm })
				}
			}
			break
    case 'ttsba': {
  if (!text) return m.reply('Masukkan format: .ttsba [karakter] | [teks]\nContoh: .ttsba aru | halo aku aru')

  let [char, ...teks] = text.split('|')
  char = char?.trim()?.toLowerCase()
  teks = teks?.join('|')?.trim()

  if (!char || !teks) return m.reply('Format salah!\nContoh: .ttsba aru | halo aku aru')

  try {
    const url = `https://api.nekorinn.my.id/tools/ttsba?text=${encodeURIComponent(teks)}&char=${char}&speed=1`

    await conn.sendMessage(m.chat, {
      audio: { url },
      mimetype: 'audio/mp4',
      ptt: true // true = kirim sebagai VN
    }, { quoted: m })

  } catch (e) {
    console.error(e)
    m.reply('Gagal membuat TTS. Pastikan karakter valid.')
  }
  break
}
case "memes": {
  await conn.sendMessage(m.chat, {
    image: { url: 'https://img.randme.me/' },
    caption: '*Random Meme*'
  }, { quoted: m });
};
break 
case "ocr": {
  try {
 
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime || !mime.startsWith('image/')) 
      throw 'Silakan kirim atau reply *gambar* untuk diubah ke teks.'
 
    let media = await q.download()
    let ext = mime.split('/')[1]
    let filename = `ocr.${ext}`
 
    let imageUrl = await Uguu(media, filename)
    let { data } = await axios.get(`https://www.abella.icu/ocr?imageUrl=${encodeURIComponent(imageUrl)}`)
 
    if (data?.status !== 'success') throw 'OCR gagal, coba lagi nanti.'
    
    let hasil = data.data?.extractedText || 'Tidak ada teks yang berhasil diekstrak'
    m.reply(hasil.replace(/\r/g, ''))
  } catch (err) {
 
    m.reply(`${err}`)
  }
}
break;
case "rvo": {
    try {
        if (!m.quoted || (!/imageMessage|videoMessage/.test(m.quoted.mtype))) {
            return conn.sendMessage(m.chat, { text: '🚩 Reply view once media to use this command.' }, { quoted: m });
        }

        let media = await m.quoted.download();
        let type = m.quoted.mtype.includes('video') ? 'video' : 'image';

        await conn.sendMessage(m.chat, {
            [type]: media,
            caption: m.quoted.caption || ''
        }, { quoted: m });

    } catch (e) {
        console.error(e);
        conn.sendMessage(m.chat, { text: JSON.stringify(e, null, 2) }, { quoted: m });
    }
};
break;
case "nulis": {
  if (!args[0]) return m.reply('Masukkan teks');
  await conn.sendMessage(m.chat, {
    image: { url: 'https://abella.icu/nulis?text=' + encodeURIComponent(args.join(' ')) }
  }, { quoted: m });
};
break;
case 'ytstalk': {
  if (!text) return m.reply('Masukkan username YouTube!\nContoh: .ytstalk maourafa')
  let res = await fetch(`https://www.velyn.biz.id/api/stalk/youtubestalk?username=${text}`)
  let json = await res.json()
  if (!json.status) return m.reply('Data tidak ditemukan!')

  let msg = `*YT Stalk: ${text}*\n\n`
  for (let i = 0; i < 5; i++) {
    let vid = json.data.videoDataList[i]
    msg += `*${i + 1}. ${vid.title}*\n`
    msg += `▶️ https://youtube.com${vid.navigationUrl}\n`
    msg += `⏱️ ${vid.duration} | 👁️ ${vid.viewCount} | 🕒 ${vid.publishedTime}\n\n`
  }
  conn.sendMessage(m.chat, { image: { url: json.data.videoDataList[0].thumbnail }, caption: msg }, { quoted: m })
}
break
case 'telestalk': {
  if (!text) return m.reply('Masukkan username Telegram!\nContoh: .tgstalk @maourafa')
  let res = await fetch(`https://www.velyn.biz.id/api/stalk/telegramstalk?username=${encodeURIComponent(text)}`)
  let json = await res.json()
  if (!json.status) return m.reply('Username tidak ditemukan!')

  let { url, title, description, image_url } = json.data
  let caption = `*Telegram Stalk*\n\n📛 *Title:* ${title}\n📝 *Description:* ${description}\n🔗 *Link:* ${url}`

  conn.sendMessage(m.chat, {
    image: { url: image_url },
    caption
  }, { quoted: m })
}
break
case 'stalktiktok': {
  if (!m.text) return reply(`Contoh penggunaan: *${prefix + command} jokowibokep*`);

  const username = m.text.split(" ")[1]; // Menangkap username dari pesan

  if (!username) return reply(`Harap masukkan username TikTok yang valid.`);
  reply(mess.wait);

  try {
    // API untuk mengambil data dari akun TikTok
    let response = await fetch(`https://api.nekorinn.my.id/stalk/tiktok-v2?username=${username}`);
    let result = await response.json();

    if (result.status && result.result) {
      let data = result.result.userInfo;
      
      // Mengambil informasi terkait akun
      let message = `🎥 *Akun TikTok:* ${data.name}\n`;
      message += `🔗 *Link Profile:* https://www.tiktok.com/@${data.username}\n`;
      message += `👥 *Followers:* ${data.count.followers}\n`;
      message += `👥 *Following:* ${data.count.following}\n`;
      message += `❤️ *Hearts:* ${data.count.heart}\n`;
      message += `🎬 *Videos:* ${data.count.video}\n`;
      message += `👥 *Friends:* ${data.count.friend}\n`;
      message += `📝 *Bio:* ${data.bio}\n`;
      message += `✅ *Verified Account:* ${data.verified ? 'Yes' : 'No'}`;

      await conn.sendMessage(m.chat, {
        text: message,
        caption: '📝 Info TikTok:'
      }, { quoted: m });

      // Mengirimkan foto profil
      await conn.sendMessage(m.chat, {
        image: { url: data.avatar },
        caption: '📸 Foto Profil TikTok'
      }, { quoted: m });
    } else {
      reply('❌ Tidak dapat menemukan akun dengan username tersebut.');
    }
  } catch (e) {
    console.error(e);
    reply('❌ Terjadi kesalahan saat mengambil data TikTok.');
  }
}
break;
case 'faketiktok': {
  if (!m.quoted) return reply(`Kirim atau Reply Foto dengan caption *${prefix + command} nama|username*`);
  let mime = (m.quoted.msg || m.quoted).mimetype || '';
  if (!/image/.test(mime)) return reply(`Kirim atau Reply Foto dengan caption *${prefix + command} nama|username*`);
  if (!q.includes('|')) return reply(`Format salah!\nContoh: *.faketiktok maou|kyyhost*`);

  let [name, username] = q.split('|').map(v => v.trim());
  if (!name || !username) return reply(`Nama atau username tidak valid.`);

  const tempFile = path.join(__dirname, `temp_${Date.now()}.jpg`);
  reply('⏳ Sedang mengunggah foto...');

  try {
    let media = await m.quoted.download();
    fs.writeFileSync(tempFile, media);

    const uploadUguu = async (filePath) => {
      return new Promise((resolve, reject) => {
        exec(`curl -s -F files[]=@${filePath} https://uguu.se/upload.php`, (err, stdout) => {
          if (err) return reject('Gagal mengunggah ke Uguu');
          try {
            let json = JSON.parse(stdout);
            resolve(json.files[0].url);
          } catch {
            reject('Gagal mengunggah ke Uguu');
          }
        });
      });
    };

    let uploadedUrl = await uploadUguu(tempFile);
    let api = `https://flowfalcon.dpdns.org/imagecreator/faketiktok?name=${encodeURIComponent(name)}&username=${encodeURIComponent(username)}&pp=${encodeURIComponent(uploadedUrl)}`;

    await conn.sendMessage(m.chat, {
      image: { url: api },
      caption: `✅ Akun TikTok palsu berhasil dibuat!\n\n📛 Nama: ${name}\n👤 Username: @${username}`
    }, { quoted: m });

    fs.unlinkSync(tempFile);
  } catch (e) {
    console.error(e);
    reply('❌ Terjadi kesalahan saat membuat akun TikTok palsu.');
  }
}
break;
 case 'igstalk': {
  if (!text) return m.reply('Contoh penggunaan: .igstalk maourafa');

  try {
    const res = await fetch(`https://restapi.matzzxz.my.id/stalk/instagram?apikey=free&username=${encodeURIComponent(text)}`);
    const data = await res.json();
    if (!data.status) return m.reply('Gagal mengambil data.');

    const ig = data.result;
    const caption = `📸 *Instagram Stalk*\n\n` +
      `👤 *Nama:* ${ig.name}\n` +
      `🔗 *Username:* ${ig.username}\n` +
      `📝 *Bio:* ${ig.bio || '-'}\n` +
      `📷 *Post:* ${ig.posts || 'Tidak tersedia'}\n` +
      `👥 *Followers:* ${ig.followers}\n` +
      `➡️ *Following:* ${ig.following}`;

    await conn.sendMessage(m.chat, {
      image: { url: ig.avatar },
      caption
    }, { quoted: m });
  } catch (e) {
    console.error(e);
    m.reply('Terjadi kesalahan saat mengambil data.');
  }
  break;
}
case 'stalkchannel':
case 'wachannel':
case 'stalkch': {
  if (!text) return m.reply('Masukkan link channel WhatsApp!\nContoh: .stalkchannel https://whatsapp.com/channel/0029Vb7gTNO5a2450z5MnD0k');

  const isValid = /https?:\/\/(www\.)?whatsapp\.com\/channel\/[A-Za-z0-9]+/.test(text);
  if (!isValid) return m.reply('Link tidak valid!');

  try {
    const apiUrl = `https://fastrestapis.fasturl.cloud/stalk/wachannel?url=${encodeURIComponent(text)}`;
    const { data } = await axios.get(apiUrl);

    if (data.status === 200 && data.result) {
      const res = data.result;
      let caption = `*📢 WhatsApp Channel Info*\n\n`;
      caption += `📛 *Name:* ${res.name || "-"}\n`;
      caption += `📝 *Description:* ${res.description || "-"}\n`;
      caption += `👥 *Followers:* ${res.followers || "0"}\n`;
      caption += `🔗 *Link:* ${res.channelLink || text}`;

      await conn.sendMessage(m.chat, {
        image: { url: res.image },
        caption
      }, { quoted: m });
    } else {
      m.reply('Gagal mengambil data channel. Coba lagi nanti.');
    }
  } catch (e) {
    console.error(e);
    m.reply('Terjadi kesalahan saat mengambil data.');
  }
  break;
}

    
// ───────────────────────────────────────────────────────────────────────────────乂 🥀 RPG FEATURE ───────────────────────────────────────────────────────────────乂 \\
case 'joinrpg': {  
                fs.readFile('./system/RPG/join.json', 'utf8', (err, data) => {
                    if (err) {
                        console.error(err);                        
                    }
                    let users;                   
try {
                        users = JSON.parse(data);
                    } catch (parseError) {
                        console.error('Err:', parseError);                        
                    }                
                    const userExists = users.some(user => user.id === m.sender);

                    if (userExists) {
                        return reply('Kamu sudah Join.');
                    }              
                    users.push({ id: m.sender  });

fs.writeFile('./system/RPG/join.json', JSON.stringify(users, null, 2), 'utf8', (err) => {
                        if (err) {
                            console.error(err);                            
                        } else {
                            return reply('Sukses Join  Rpg!');
                        }
                    });
                });
}
                break;

 case "myguild": {         

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
 const showMyGuild = (userId, m) => {
    const guildIdc = userGuilds[userId];
    if (!guildIdc) {
        return reply("You are not a member of any guild.");
    }

    return showGuildInfo(guildIdc, m);
};
 showMyGuild(m.sender, m)
 }
 break
 
 case "guildinfo": {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
 if (!text) return reply(`[ Alicia ] >> Masukan Nama guild`)
 const guildIdd = text
 getGuildInfo(text)
 }
 break
 
  case "delguild": {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
 if (!text) return reply(`[ Alicia ] >> Masukan Nama guild`)
 deleteGuild(text, m.sender)
 }
 break
 
 case "joinguild": {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
 if (!text) return reply("Masukan Id Guild")
 const guildId = text
 joinGuild(guildId, m.sender)
 }
 break
 
 case "createguild": {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
 if (!text) return reply("Masukan Nama guild nya")
 const guildName = text
 createGuild(guildName, m.sender)
 }
 break
 
 case "listguild":

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
 listGuilds()
 break                

case 'nebang': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return reply(mess.group)
function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return hours + " jam " + minutes + " menit " + seconds + " detik"
}
let user = db.data.users[m.sender]
let time = user.lastparming + 1800000
if (new Date - user.lastparming < 1800000) return reply(`Anda sudah lelah untuk bekerja\nTunggu selama ${msToTime(time - new Date())} lagi`)
let wood = `${Math.floor(Math.random() * 50)}`.trim()
let money = `${Math.floor(Math.random() * 50000)}`.trim()
user.wood += wood * 1
user.money += money * 1
user.lastparming = new Date * 1
reply(`Selamat kamu mendapatkan : \n+${wood} Kayu\n+${money} Money`)
}
break

case 'casino': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return reply(mess.group)
let buatall = 1
conn.casino = conn.casino ? conn.casino : {}
if (m.chat in conn.casino) return reply ('Masih ada yang melakukan casino disini, tunggu sampai selesai!!')
else conn.casino[m.chat] = true
try {
let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
let randomkamu = `${Math.floor(Math.random() * 81)}`.trim() //hehe Biar Susah Menang :v
let Aku = (randomaku * 1)
let Kamu = (randomkamu * 1)
let count = args[0]
count = count ? /all/i.test(count) ? Math.floor(db.data.users[m.sender].exp / buatall) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
count = Math.max(1, count)
if (args.length < 1) return reply('casino <jumlah>\n ' + 'casino 1000', )
if (db.data.users[m.sender].exp >= count * 1) {
db.data.users[m.sender].exp -= count * 1
//await reply('') //Kwkwwkkwlwlw
if (Aku > Kamu) {
reply(`💰 Casino 💰\n*Kamu:* ${Kamu} Point\n*Computer:* ${Aku} Point\n\n*You LOSE*\nKamu kehilangan ${count} Uang(xp)`)
} else if (Aku < Kamu) {
db.data.users[m.sender].exp += count * 2
reply(`💰 Casino 💰\n*Kamu:* ${Kamu} Point\n*Computer:* ${Aku} Point\n\n*You Win*\nKamu mendapatkan ${count * 2} Uang(xp)`)
} else {
db.data.users[m.sender].exp += count * 1
reply(`💰 Casino 💰\n*Kamu:* ${Kamu} Point\n*Computer:* ${Aku} Point\n\n*SERI*\nKamu mendapatkan ${count * 1} Uang(xp)`)
}
} else reply(`Uang(xp) kamu tidak mencukupi untuk Casino silahkan *#kerja* terlebih dahulu!`)
} catch (e) {
console.log(e)
reply('Error!!')
if (DevMode) {
for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
conn.sendMessage(jid, 'casino.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
}
}
} finally {
delete conn.casino[m.chat]
}
}
break

case 'kerja':
case 'bekerja': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return reply(mess.group)
function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
let type = (args[0] || '').toLowerCase()
let users = db.data.users[m.sender]
let time = users.lastkerja + 30000
let __timers = (new Date - users.lastkerja)
let _timers = (1000 - __timers)
let timers = clockString(_timers)

let penumpan = ['mas mas', 'bapak bapak', 'cewe sma', 'bocil epep', 'emak emak']
let penumpang = penumpan[Math.floor(Math.random() * penumpan.length)]

let daganga = ['wortel', 'sawi', 'selada', 'tomat', 'seledri', 'cabai', 'daging', 'ikan', 'ayam']
let dagangan = daganga[Math.floor(Math.random() * daganga.length)]

let pasie = ['sakit kepala', 'cedera', 'luka bakar', 'patah tulang']
let pasien = pasie[Math.floor(Math.random() * pasie.length)]

let pane = ['Wortel', 'Kubis', 'stowbery', 'teh', 'padi', 'jeruk', 'pisang', 'semangka', 'durian', 'rambutan']
let panen = pane[Math.floor(Math.random() * pane.length)]

let bengke = ['mobil', 'motor', 'becak', 'bajai', 'bus', 'angkot', 'becak', 'sepeda']
let bengkel = bengke[Math.floor(Math.random() * bengke.length)]

let ruma = ['Membangun Rumah', 'Membangun Gedung', 'Memperbaiki Rumah', 'Memperbaiki Gedung', 'Membangun Fasilitas Umum', 'Memperbaiki Fasilitas Umum']
let rumah = ruma[Math.floor(Math.random() * ruma.length)]

if (/kerja/i.test(command)) {
switch (type) {
case 'ojek':
if (new Date - users.lastkerja < 300000) return reply(`Kamu sudah bekerja\nSaatnya istirahat selama ${clockString(time - new Date())}`)
let hasilojek = `${Math.floor(Math.random() * 150000)}`.trim()
users.money += hasilojek * 1
users.lastparming = new Date * 1
reply(`Kamu Sudah Mengantarkan *${penumpang}* 🚗\nDan mendapatkan uang senilai *Rp ${hasilojek} ${global.rpg.emoticon('money')}*`)
break

case 'pedagang':
if (new Date - users.lastkerja < 300000) return reply(`Kamu sudah bekerja,Saatnya istirahat selama\n🕜 ${clockString(time - new Date())}`)
let hasildagang = `${Math.floor(Math.random() * 150000)}`.trim()
users.money += hasildagang * 1
users.lastparming = new Date * 1
reply(`Ada pembeli yg membeli *${dagangan}* 🛒\nDan mendapatkan uang senilai *Rp ${hasildagang} ${global.rpg.emoticon('money')}*`)
break

case 'dokter':
if (new Date - users.lastkerja < 300000) return reply(`Kamu sudah bekerja,Saatnya istirahat selama\n🕜 ${clockString(time - new Date())}`)
let hasildokter = `${Math.floor(Math.random() * 150000)}`.trim()
users.money += hasildokter * 1
users.lastparming = new Date * 1
reply(`Kamu menyembuhkan pasien *${pasien}* 💉\nDan mendapatkan uang senilai *Rp ${hasildokter}* ${global.rpg.emoticon('money')}`)
break

case 'petani':
if (new Date - users.lastkerja < 300000) return reply(`Kamu sudah bekerja,Saatnya istirahat selama\n🕜 ${clockString(time - new Date())}`)
let hasiltani = `${Math.floor(Math.random() * 150000)}`.trim()
users.money += hasiltani * 1
users.lastparming = new Date * 1
reply(`${panen} Sudah Panen !🌽 Dan menjualnya 🧺\nDan mendapatkan uang senilai Rp *${hasiltani} ${global.rpg.emoticon('money')}*`)
break

case 'montir':
if (new Date - users.lastkerja < 300000) return reply(`Kamu sudah bekerja,Saatnya istirahat selama\n🕜 ${clockString(time - new Date())}`)
let hasilmontir = `${Math.floor(Math.random() * 150000)}`.trim()
users.money += hasilmontir * 1
users.lastparming = new Date * 1
reply(`Kamu Baru saja mendapatkan pelanggan dan memperbaiki *${bengkel} 🔧*\nDan kamu mendapatkan uang senilai *Rp ${hasilmontir}* ${global.rpg.emoticon('money')}`)
break

case 'kuli':
if (new Date - users.lastkerja < 300000) return reply(`Kamu sudah bekerja,Saatnya istirahat selama\n🕜 ${clockString(time - new Date())}`)
let hasilkuli = `${Math.floor(Math.random() * 150000)}`.trim()
users.money += hasilkuli * 1
users.lastparming = new Date * 1
reply(`Kamu baru saja selesai ${rumah} 🔨\nDan mendapatkan uang senilai *Rp ${hasilkuli} ${global.rpg.emoticon('money')}*`)
break
default:
return reply(`_*Pilih Pekerjaan Yang Kamu Inginkan*_\n\n_• Kuli_ \n_• Montir_ \n_• Petani_ \n_• Dokter_ \n_• Pedagang_ \n_• Ojek_ \n\nContoh Penggunaan :\nkerja Kuli`)
}
}
}
break

case 'bankcek': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return reply(mess.group)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0]: m.fromMe ? conn.user.jid: m.sender
if (!(who in db.data.users)) return reply(`User ${who} not in database`)
let user = db.data.users[who]
let isMods = global.owner.filter(([number, _, isCreator]) => number && isCreator).map(([number]) => number).map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(who)
let isPrem = isCreator || new Date() - user.premiumTime < 0
let caption = `
▧「 *BANK CEK* 」
┃ •  👤 Name: ${user.registered ? user.name: conn.getName(m.sender)}
┃ •  ${global.rpg.emoticon('atm')} Atm: ${user.atm > 0 ? 'Level ' + user.atm: '✖️'}
┃ •  ${global.rpg.emoticon('bank')} Bank: ${user.bank} / ${user.fullatm}
┃ •  ${global.rpg.emoticon('money')} Money: ${user.money}
┃ •  ${global.rpg.emoticon('chip')} Chip: ${user.chip}
┃ •  🤖 Robo: ${user.robo > 0 ? 'Level ' + user.robo: '✖️'}
┃ •  🌟 Status: ${isMods ? 'Developer' : isCreator ? 'Owner' : isPrem ? 'Premium User ✅' : user.level > 999 ? 'Elite User' : 'Free User'}
┃ •  📑 Registered: ${user.registered ? 'Yes': 'No'}
└────···
`.trim()
reply(`${caption}`)
}
break

case 'bansos': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return reply(mess.group)
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)];
}

function clockString(ms) {
let h = Math.floor(ms / 3600000);
let m = Math.floor(ms / 60000) % 60;
let s = Math.floor(ms / 1000) % 60;
return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':');
}

let user = db.data.users[m.sender];
let randomaku = Math.floor(Math.random() * 101);
let randomkamu = Math.floor(Math.random() * 101);
let __timers = new Date() - user.lastbansos;
let _timers = 360 - __timers;
let timers = clockString(_timers);

if (user.money < 1000) {
return reply(`Uang Anda Harus Diatas Seribu Untuk Menggunakan Command Ini`);
}

if (new Date() - user.lastbansos > 300000) {
if (randomaku > randomkamu) {
user.money -= 3000000;
user.lastbansos = new Date() * 1;
return conn.sendMessage(m.chat, {
image: { url: 'https://telegra.ph/file/afcf9a7f4e713591080b5.jpg' },
caption: `Kamu Tertangkap Setelah Kamu korupsi dana bansos🕴️💰,Dan Kamu harus membayar denda 3 Juta rupiah💵`
});
} else if (randomaku < randomkamu) {
user.money += 3000000;
user.lastbansos = new Date() * 1;
return conn.sendMessage(m.chat, {
image: { url: 'https://telegra.ph/file/d31fcc46b09ce7bf236a7.jpg' },
caption: `Kamu berhasil korupsi dana bansos🕴️💰,Dan Kamu mendapatkan 3 Juta rupiah💵`
});
} else {
user.lastbansos = new Date() * 1;
return reply(`Sorry Gan Lu g Berhasil Korupsi bansos Dan Tidak masuk penjara karna Kamu *melarikan diri🏃*`);
}
} else {
return reply(`Silahkan https://whatsapp.com/channel/0029VaiKMO3KrWR1A35DRN1Onggu Beberapa Menit Untuk bansos Lagi`);
}
}
break;


case 'taxy': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return reply(mess.group)
function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
let __timers = (new Date - db.data.users[m.sender].lastmisi)
let _timers = (3600000 - __timers)
let order = db.data.users[m.sender].ojekk
let timers = clockString(_timers)
let name = conn.getName(m.sender)
let user = db.data.users[m.sender]
let id = m.sender
let kerja = 'Taxy'
conn.misi = conn.misi ? conn.misi : {}
if (id in conn.misi) {
reply(`Selesaikan Misi ${conn.misi[id][0]} Terlebih Dahulu`)
throw false
}
if (new Date - user.lastmisi > 3600000) {
let randomaku1 = Math.floor(Math.random() * 1000000)
let randomaku2 = Math.floor(Math.random() * 10000)

var dimas = `
🚶⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳🌳 🏘️ 🚕


✔️ Mendapatkan orderan....
`.trim()

var dimas2 = `
🚶⬛⬛⬛⬛⬛🚐⬛⬛⬛🚓🚚
🚖⬜⬜⬜⬛⬜⬜⬜🚓⬛🚑
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛🚙
🏘️🏘️🏢️🌳🌳 🏘️🏘️🏡


🚖 Mengantar Ke tujuan.....
`.trim()

var dimas3 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛🚓
⬛⬜🚗⬜⬜⬛⬜🚐⬜⬜⬛🚙🚚🚑
⬛⬛⬛⬛🚒⬛⬛⬛⬛⬛⬛🚚
🏘️🏘️🏘️🏘️🌳🌳 🏘️


🚖 Selesai Mengantar Pelanggan....
`.trim()

var dimas4 = `
➕ 💹Menerima gaji....
`.trim()

var hsl = `
*—[ Hasil Taxy ${name} ]—*
➕ 💹 Uang = [ ${randomaku1} ]
➕ ✨ Exp = [ ${randomaku2} ]
➕ 😍 Order Selesai = +1
➕ 📥Total Order Sebelumnya : ${order}
`.trim()

user.money += randomaku1
user.exp += randomaku2
user.ojekk += 1

conn.misi[id] = [
kerja,
setTimeout(() => {
delete conn.misi[id]
}, 27000)
]

setTimeout(() => {
reply(`${hsl}`)
}, 27000)

setTimeout(() => {
reply(`${dimas4}`)
}, 25000)

setTimeout(() => {
reply(`${dimas3}`)
}, 20000)

setTimeout(() => {
reply(`${dimas2}`)
}, 15000)

setTimeout(() => {
reply(`${dimas}`)
}, 10000)

setTimeout(() => {
reply('🔍Mencari pelanggan.....')
}, 0)
user.lastmisi = new Date * 1
} else reply(`Silahkan https://whatsapp.com/channel/0029VaiKMO3KrWR1A35DRN1Onggu Selama ${timers}, Untuk Menyelesaikan Misi Kembali`)
}
break

case 'leaderboard': {
  if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk Memulai Rpg Game Ketik .joinrpg Dan Untuk Keluar Game Ketik .exitrpg')
  if (!m.isGroup) return reply(mess.group)

  const { areJidsSameUser } = require('@fizzxydev/baileys-pro')
  const metadata = await conn.groupMetadata(m.chat)
  const participants = metadata.participants

  const leaderboards = [
    'level','exp','limit','money','iron','gold','diamond','emerald','trash',
    'joinlimit','potion','petFood','wood','rock','string','common','uncommon',
    'mythic','legendary','pet','bank','chip','skata'
  ]

  function sort(prop, asc = true) {
    return (a, b) => asc ? (a[prop]||0)-(b[prop]||0) : (b[prop]||0)-(a[prop]||0)
  }

  function toNumber(prop, def = 0) {
    return (user, i, arr) => ({...arr[i], [prop]: user[prop] ?? def})
  }

  function enumGetKey(a) { return a.jid }
  function isNumber(x) {
    let n = parseInt(x)
    return !isNaN(n) ? n : false
  }

  let users = Object.entries(db.data.users).map(([jid, data]) => ({...data, jid}))
  let type = (args[0] || '').toLowerCase()
  let leaderboard = leaderboards.filter(v => users.some(u => u[v]))
  let wrong = `🔖 ᴛʏᴩᴇ ʟɪsᴛ :
${leaderboard.map(v => `⮕ ${rpg.emoticon(v)} - ${v}`).join('\n')}
––––––––––––––––––––––––
💁🏻‍♂ ᴛɪᴩ :
⮕ ᴛᴏ ᴠɪᴇᴡ ʟᴇᴀᴅᴇʀʙᴏᴀʀᴅ: ${command} [type]
★ ᴇxᴀᴍᴩʟᴇ: ${command} legendary`

  if (!leaderboard.includes(type)) return reply('*––––『 𝙻𝙴𝙰𝙳𝙴𝚁𝙱𝙾𝙰𝚁𝙳 』––––*\n' + wrong)

  let page = isNumber(args[1]) || 0
  let sorted = users.map(toNumber(type)).sort(sort(type, false))
  let userRanks = sorted.map(enumGetKey)

  let teks = `
🏆 Rank Kamu: ${userRanks.indexOf(m.sender) + 1} Dari ${userRanks.length}

*• ${rpg.emoticon(type)} ${type} •*

${await Promise.all(sorted.slice(page * 5, page * 5 + 5).map(async (u, i) => {
  let name = u.registered ? u.name : await conn.getName(u.jid)
  let fromGroup = participants.some(p => areJidsSameUser(p.id, u.jid))
  return `${i + 1}.*﹙${u[type]}﹚* - ${fromGroup ? `${name} \nwa.me/${u.jid.split('@')[0]}` : 'ғʀᴏᴍ ᴏᴛʜᴇʀ ɢʀᴏᴜᴩ\n@' + u.jid.split('@')[0]}`
}))}`.trim()

  reply(teks, {
    mentions: sorted.slice(page * 5, page * 5 + 5).map(u => u.jid).filter(j => !participants.some(p => areJidsSameUser(p.id, j)))
  })
}
break



case 'mulung': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return reply(mess.group)
function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " jam " + minutes + " menit " + seconds + " detik"
}
let user = db.data.users[m.sender]
let time = user.lastmulung + 1800000

if (new Date - user.lastmulung < 1800000) return reply(`Anda sudah lelah untuk mulung\nTunggu selama ${msToTime(time - new Date())} lagi`)

let botol = Math.floor(Math.random() * 1000)
let kaleng = Math.floor(Math.random() * 1000)
let kardus = Math.floor(Math.random() * 1000)
let gelas = Math.floor(Math.random() * 1000)
let plastik = Math.floor(Math.random() * 1000)

user.botol += botol * 1
user.kaleng += kaleng * 1
user.kardus += kardus * 1
user.gelas += gelas * 1
user.plastik += plastik * 1
user.lastmulung = new Date * 1

reply(`Selamat kamu mendapatkan : \n+${botol} Botol\n+${kaleng} Kaleng\n+${kardus} Kardus\n+${gelas} Gelas\n+${plastik} Plastik`)
}
break

case 'berburu': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return reply(mess.group)
function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
let __timers = (new Date - db.data.users[m.sender].lastmisi)
let _timers = (3600000 - __timers)
let timers = clockString(_timers) 
let name = conn.getName(m.sender)
let user = db.data.users[m.sender]
let id = m.sender
let kerja = 'Berburu'
conn.misi = conn.misi ? conn.misi : {}
if (id in conn.misi) {
return reply( `Selesaikan Misi ${conn.misi[id][0]} Terlebih Dahulu`)
 }
if (new Date - user.lastmisi > 3600000) {
let hewan1 = Math.floor(Math.random() * 10)
let hewan2 = Math.floor(Math.random() * 10)
let hewan3 = Math.floor(Math.random() * 10)
let hewan4 = Math.floor(Math.random() * 10)
let hewan5 = Math.floor(Math.random() * 10)
let hewan6 = Math.floor(Math.random() * 10)
let hewan7 = Math.floor(Math.random() * 10)
let hewan8 = Math.floor(Math.random() * 10)
let hewan9 = Math.floor(Math.random() * 10)
let hewan10 = Math.floor(Math.random() * 10)
let hewan11 = Math.floor(Math.random() * 10)
let hewan12 = Math.floor(Math.random() * 10)

let hsl = `🕸 *Hasil Berburu ${user.registered ? user.name : conn.getName(m.sender)}* 
${hewan1 ? `
🐂 Banteng: ${hewan1}` : ''} ${hewan2 ? `
🐅 Harimau: ${hewan2}` : ''} ${hewan3 ? `
🐘 Gajah: ${hewan3}` : ''} ${hewan4 ? `
🐐 Kambing: ${hewan4}` : ''} ${hewan5 ? `
🐼 Panda: ${hewan5}` : ''} ${hewan6 ? `
🐊 Buaya: ${hewan6}` : ''} ${hewan7 ? `
🐃 Kerbau: ${hewan7}` : ''} ${hewan8 ? `
🐮 Sapi: ${hewan8}` : ''} ${hewan9 ? `
🐒 Monyet: ${hewan9}` : ''} ${hewan10 ? `
🐗 Babi Hutan: ${hewan10}` : ''} ${hewan11 ? `
🐖 Babi: ${hewan11}` : ''} ${hewan12 ? `
🐓 Ayam: ${hewan12}` : ''}
`.trim()

user.banteng += hewan1
user.harimau += hewan2
user.gajah += hewan3
user.kambing += hewan4
user.panda += hewan5
user.buaya += hewan6
user.kerbau += hewan7
user.sapi += hewan8
user.monyet += hewan9
user.babihutan += hewan10
user.babi += hewan11
user.ayam += hewan12

conn.misi[id] = [
kerja,
setTimeout(() => {
delete conn.misi[id]
}, 20000)
]

setTimeout(() => {
reply(`${hsl}`)
}, 20000)

setTimeout(() => {
reply(`Nah ini dia`)
}, 18000)

setTimeout(() => {
reply('Dorr🔥')
}, 15000)

setTimeout(() => {
reply('Dapat Sasaran')
}, 14000)

setTimeout(() => {
reply('Sedang mencari mangsa...')
}, 0)
user.lastmisi = new Date * 1
} else reply(`Silahkan Menunggu Selama ${timers}, Untuk Menyelesaikan Misi Kembali`)
}
break

case 'polisi': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return reply(mess.group)
function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
let __timers = (new Date - db.data.users[m.sender].lastmisi)
let _timers = (3600000 - __timers)
let order = db.data.users[m.sender].ojekk
let timers = clockString(_timers)
let name = conn.getName(m.sender)
let user = db.data.users[m.sender]
let id = m.sender
let kerja = 'Polisi'
conn.misi = conn.misi ? conn.misi: {}
if (id in conn.misi) {
reply(`Selesaikan Misi ${conn.misi[id][0]} Terlebih Dahulu`)
throw false
}
if (new Date - db.data.users[m.sender].lastmisi > 3600000) {
let randomaku1 = Math.floor(Math.random() * 10)
let randomaku2 = Math.floor(Math.random() * 10)

let rbrb1 = (randomaku1 * 100000)
let rbrb2 = (randomaku2 * 1000)

var dimas = `
👮Mengejar Pencuri....
`.trim()

var dimas2 = `
👮Menangkap pencuri....
`.trim()

var dimas3 = `
🚔Membawa ke kantor polisi\nDan di penjara
`.trim()

var dimas4 = `
➕ 💹Menerima gaji....
`.trim()

var hsl = `
*—[ Hasil Polisi ${name} ]—*
➕ 💹 Uang = [ ${rbrb1} ]
➕ ✨ Exp = [ ${rbrb2} ]
➕ 😍 Order Selesai = +1
➕ 📥Total Order Sebelumnya : ${order}
`.trim()

user.money += rbrb1
user.exp += rbrb2
user.ojekk += 1

conn.misi[id] = [
kerja,
setTimeout(() => {
delete conn.misi[id]
}, 27000)
]

setTimeout(() => {
reply(`${hsl}`)
}, 27000)

setTimeout(() => {
reply(`${dimas4}`)
}, 25000)

setTimeout(() => {
reply(`${dimas3}`)
}, 20000)

setTimeout(() => {
 reply(`${dimas2}`)
}, 15000)

setTimeout(() => {
reply(`${dimas}`)
}, 10000)

setTimeout(() => {
reply('??Sedang Berpatroli.....')
}, 0)
user.lastmisi = new Date * 1
} else reply(`Silahkan Menunggu Selama ${timers}, Untuk Menyelesaikan Misi Kembali`)
}
break

// let pajak = 0.02
case 'berdagang': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return reply(mess.group)
function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}

let dapat = (Math.floor(Math.random() * 5000))
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) return reply ('Tag salah satu lah, yang kamu ingin berdagang bareng')
if (typeof db.data.users[who] == 'undefined') return reply('Pengguna tidak ada didalam data base')
let __timers = (new Date - db.data.users[m.sender].lastdagang)
let _timers = (28800000 - __timers)
let timers = clockString(_timers)
let users = db.data.users
let username = conn.getName(who)
if (new Date - db.data.users[m.sender].lastdagang > 28800000) {
if (4999 > users[who].money) return reply ('Target tidak memiliki modal harap masukkan modal 5000')
if (4999 > users[m.sender].money) return reply ('kamu tidak memiliki modal harap masukkan modal 5000')
users[who].money -= dapat * 1
users[m.sender].money -= dapat * 1
db.data.users[m.sender].lastdagang = new Date * 1
reply(`Mohon tunggu kak..\nKamu dan @${who.replace(/@.+/, '')} sedang berdagang.. ðŸ˜…\n\nKamu dan @${who.replace(/@.+/, '')} meletakkan modal -${dapat} ðŸ˜…`)
setTimeout(() => {
reply(m.chat, `Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${users[m.sender].money += 50000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`, m, {
contextInfo: {
mentionedJid: [m.sender, who]
}})
}, 3600000)
setTimeout(() => {
reply(`Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${users[m.sender].money += 50000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`, {
contextInfo: {
mentionedJid: [m.sender, who]
}})
}, 7200000)
setTimeout(() => {
reply( `Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${users[m.sender].money += 50000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`,{
contextInfo: {
mentionedJid: [m.sender, who]
}})
}, 10800000)
setTimeout(() => {
reply( `Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${users[m.sender].money += 50000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`,{
contextInfo: {
mentionedJid: [m.sender, who]
}})
}, 14400000)
setTimeout(() => {
reply( `Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${users[m.sender].money += 50000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`,{
contextInfo: {
mentionedJid: [m.sender, who]
}})
}, 18000000)
setTimeout(() => {
reply( `Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${users[m.sender].money += 50000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`,{
contextInfo: {
mentionedJid: [m.sender, who]
}})
}, 21600000)
setTimeout(() => {
reply( `Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${users[m.sender].money += 50000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`,{
contextInfo: {
mentionedJid: [m.sender, who]
}})
}, 25200000)
setTimeout(() => {
reply( `Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +10000\n${users[m.sender].money += 10000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +100000\n${users[who].money += 100000} Money @${who.replace(/@.+/, '')}`,{
contextInfo: {
mentionedJid: [m.sender, who]
}})
}, 28800000)
} else reply(`Anda Sudah Berdagang , tunggu ${timers} lagi..`)

}
break

case 'merampok':
case 'rampok': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return reply(mess.group)

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
let dapat = (Math.floor(Math.random() * 100000))
let users = db.data.users
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : (m.quoted && m.quoted.sender);
if (!who) return reply('Tag orang yang mau kamu Rampok!');
if (users[who].level > users[m.sender].level) return reply(`Level kamu harus lebih tinggi dari @${who.split('@')[0]} Untuk bisa merampoknya!`, false, { mentions: [who] })
let __timers = (new Date - db.data.users[m.sender].lastrampok)
let _timers = (3600000 - __timers)
let timers = clockString(_timers)
if (new Date - db.data.users[m.sender].lastrampok > 3600000) {
if (10000 > users[who].money) return reply('ᴛᴀʀɢᴇᴛ ɢᴀᴀᴅᴀ 💰ᴜᴀɴɢ ʙᴏᴅᴏʜ, ᴋɪꜱᴍɪɴ ᴅɪᴀ')
users[who].money -= dapat * 1
users[m.sender].money += dapat * 1
db.data.users[m.sender].lastrampok = new Date * 1
reply( `ʙᴇʀʜᴀꜱɪʟ ᴍᴇʀᴀᴍᴘᴏᴋ ᴍᴏɴᴇʏ ᴛᴀʀɢᴇᴛ ꜱᴇʙᴇꜱᴀʀ 💰${dapat}`)
} else reply( `Anda Sudah merampok dan berhasil sembunyi , tunggu ${timers} untuk merampok lagi`)
}
break

case 'banknabung': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return reply(mess.group)
if (!q) return reply(`_*Anda Tidak Menginput Jumlah Uang Yang Ingin Ditabung*_

- _*${prefix}${command} jumlah*_
- _*${prefix}${command} all*_

\`${prefix}${command} 10000\``)
const xpperlimit = 1
let user = db.data.users[m.sender]
count = q.toLowerCase() === 'all' ? user.money : parseInt(q)
count = Math.min(user.money, count)
if (count <= 0) return reply('Kamu tidak memiliki cukup uang untuk menabung.')
if (user.atm == 0) return reply('kamu belum mempunyai kartu ATM')
if (user.bank > user.fullatm) return reply('Uang Di ATM sudah penuh!')
if (count > user.fullatm - user.bank) return reply('Uangnya nya sudah mencapai batas')
if (user.money >= xpperlimit * count) {
user.money -= xpperlimit * count
user.bank += count
reply(`Sukses menabung sebesar ${count} Money 💹`)
} else {
return
}
}
break

case 'banktarik': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return reply(mess.group)
if (!q) return reply(`_*Anda Tidak Menginput Jumlah Uang Yang Ingin Ditarik*_

- _*${prefix}${command} jumlah*_
- _*${prefix}${command} all*_

\`${prefix}${command} 10000\``);
const xpperlimit = 1
let user = db.data.users[m.sender]
count = q.toLowerCase() === 'all' ? user.bank : parseInt(q)
count = Math.min(user.bank, count)
if (count <= 0) return reply('Kamu tidak memiliki cukup uang untuk menabung.')
if (user.atm == 0) return reply('kamu belum mempuyai kartu ATM !')
if (user.bank >= xpperlimit * count) {
user.bank -= xpperlimit * count
user.money += count
reply(`Sukses menarik sebesar ${count} Money 💹`)
} else {
return
}
}
break

case 'berkebon':{
if (!m.isGroup) return reply(mess.group)
function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
const timeout = 1800000
let __timers = (new Date - db.data.users[m.sender].lastberkebon)
let _timers = (timeout - __timers)
let timers = clockString(_timers)
let user = db.data.users[m.sender]
let { stock } = db.data.settings[botNumber]
let pisang = 100 - user.bibitpisang
let anggur = 100 - user.bibitanggur
let mangga = 100 - user.bibitmangga
let jeruk = 100 - user.bibitjeruk
let apel = 100 - user.bibitapel
let kerja = 'Berkebun'
let id = m.chat
.misi = conn.misi ? conn.misi : {}
if (id in conn.misi) {
reply(`Selesaikan Misi ${conn.misi[id][0]} Terlebih Dahulu`)
return false
}
let caption = `
📮 Kamu Membutuhkan Bibit:\n${user.bibitpisang < 100 ? `\n${global.rpg.emoticon('bibitpisang')} BibitPisang: ${pisang}`: ''} ${user.bibitanggur < 100 ? `\n${global.rpg.emoticon('bibitanggur')} BibitAnggur: ${anggur}`: ''} ${user.bibitmangga < 100 ? `\n${global.rpg.emoticon('bibitmangga')} BibitMangga: ${mangga}`: ''} ${user.bibitjeruk < 100 ? `\n${global.rpg.emoticon('bibitjeruk')} BibitJeruk: ${jeruk}`: ''} ${user.bibitapel < 100 ? `\n${global.rpg.emoticon('bibitapel')} BibitApel: ${apel}`: ''}`.trim()
if (new Date - user.lastberkebon > 1800000) {
if (user.bibitpisang >= 100 && user.bibitanggur >= 100 && user.bibitmangga >= 100 && user.bibitapel >= 100 && user.bibitjeruk >= 100) {
let hasil1 = Math.floor(Math.random() * 100)
let hasil2 = Math.floor(Math.random() * 100)
let hasil3 = Math.floor(Math.random() * 100)
let hasil4 = Math.floor(Math.random() * 100)
let hasil5 = Math.floor(Math.random() * 100)

let caption = `⌛ Hasil Panen Kamu

${global.rpg.emoticon('pisang')} Pisang: ${hasil1}
${global.rpg.emoticon('anggur')} Anggur ${hasil2}
${global.rpg.emoticon('mangga')} Mangga: ${hasil3}
${global.rpg.emoticon('jeruk')} Jeruk: ${hasil4}
${global.rpg.emoticon('apel')} Apel: ${hasil5}
`
user.pisang += hasil1
user.anggur += hasil2
user.mangga += hasil3
user.jeruk += hasil4
user.apel += hasil5

user.bibitpisang -= 100
user.bibitanggur -= 100
user.bibitmangga -= 100
user.bibitjeruk -= 100
user.bibitapel -= 100

stock.bibitpisang += 100
stock.bibitanggur += 100
stock.bibitmangga += 100
stock.bibitjeruk += 100
stock.bibitapel += 100


conn.misi[id] = [
kerja,
setTimeout(() => {
delete conn.misi[id]
}, 20000)
]

setTimeout(() => {
reply(`${caption.trim()}`)
}, 20000)

setTimeout(() => {
reply('Sedang Menanam Bibit...')
}, 0)
user.lastberkebon = new Date * 1
} else reply(`${caption}`)
} else reply(`Mohon Menunggu Selama ${timers} Untuk Berkebun Kembali...`)
}
break

case 'bet': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return reply(mess.group)
function number(x = 0) {
x = parseInt(x)
return !isNaN(x) && typeof x == 'number'
}
const items = [ 'money', 'chip' ]
let user = db.data.users[m.sender]
let item = items.filter(v => v in user && typeof user[v] == 'number')
let type = (args[0] || '').toLowerCase()
let count = (args[1] && number(parseInt(args[1])) ? Math.max(parseInt(args[1]), 1): /all/i.test(args[1]) ? Math.floor(parseInt(user[type])): 1) * 1
if (!item.includes(type)) return reply(`*List Item:*\n${item.map(v => `${global.rpg.emoticon(v)}${v}`.trim()).join('\n')}\n\nExample:\nbet money 100000`)
if ((user[type] * 1) < count) return reply(`*${type} ${global.rpg.emoticon(type)}* kamu tidak cukup!!`)
let moneyDulu = user[type] * 1
let txt = (m.msg && m.msg.selectedDisplayText ? m.msg.selectedDisplayText: m.text ? m.text: '').toLowerCase()
try {
let Bot = (Math.ceil(Math.random() * 91)) * 1
let Kamu = (Math.floor(Math.random() * 71)) * 1
let status = 'Kalah'
if (Bot < Kamu) {
user[type] += count * 1
status = 'Menang'
} else if (Bot > Kamu) {
user[type] -= count * 1
} else {
status = 'Seri'
user[type] += (Math.floor(count / 1.5)) * 1
}
reply(`
| *PLAYERS* | *POINT* |
*🤖 BOT:* {Bot}
*👤 KAMU:* ${Kamu}

Kamu *${status}*, kamu ${status == 'Menang' ? `Mendapatkan *+${count * 2}*`: status == 'Kalah' ? `Kehilangan *-${count * 1}*`: `Mendapatkan *+${Math.floor(count / 1.5)}*`} *${type} ${global.rpg.emoticon(type)}*
`.trim())
} catch (e) {
if (moneyDulu > (user[type] * 1)) user[type] = moneyDulu * 1
reply('Error saat melakukan judi (Rejected)')
}
}
break

case 'claim':
case 'bonus': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return reply(mess.group)
function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return hours + " jam " + minutes + " menit " + seconds + " detik"
}
let user = db.data.users[m.sender]
let time = user.lastbonus + 86400000
if (new Date - user.lastbonus < 86400000) return reply(`Kamu Sudah Ambil Bonus Hari Ini\nTunggu selama ${msToTime(time - new Date())} lagi`)
let money = Math.floor(Math.random() * 50000000)
user.money += money * 1
user.lastbonus = new Date * 1
reply(`Selamat Kamu Mendapatkan Bonus : \n+${money} Money`)
}
break

case 'buah': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return reply(mess.group)
let user = db.data.users[m.sender]
let ini_txt = `[ *GUDANG BUAH KAMU* ]\n\n`
ini_txt += `🍌 ${user.pisang} Pisang\n`
ini_txt += `🍇 ${user.anggur} Anggur\n`
ini_txt += `🥭 ${user.mangga} Mangga\n`
ini_txt += `🍊 ${user.jeruk} Jeruk\n`
ini_txt += `🍎 ${user.apel} Apel\n\n`
ini_txt += `Gunakan command *buah sell* untuk menjual.`
reply(`${ini_txt}`)
}
break

case 'bunuh':
case 'hitman': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return reply(mess.group)
function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
let __timers = (new Date - db.data.users[m.sender].lastmisi)
let _timers = (3600000 - __timers)
let order = db.data.users[m.sender].ojekk
let timers = clockString(_timers)
let name = conn.getName(m.sender)
let user = db.data.users[m.sender]
let id = m.sender
let kerja = 'Bunuh'
conn.misi = conn.misi ? conn.misi : {}
if (id in conn.misi) {
reply(`Selesaikan Misi ${conn.misi[id][0]} Terlebih Dahulu`)
throw false
}
if (new Date - db.data.users[m.sender].lastmisi > 3600000) {
let randomaku4 = Math.floor(Math.random() * 10)
let randomaku5 = Math.floor(Math.random() * 10)

let rbrb4 = (randomaku4 * 100000)
let rbrb5 = (randomaku5 * 1000)

var dimas = `
🕵️ Mendapatkan Target.....
`.trim()

var dimas2 = `
⚔️ Menusuk Tubuhnya.....
`.trim()

var dimas3 = `
☠️ Target meninggal\nDan kamu mengambil barang² nya
`.trim()

var dimas4 = `
💼 Hasil dari membunuh....
`.trim()

var hsl = `
*—[ Hasil ${name} ]—*
➕ 💹 Uang = [ ${rbrb4} ]
➕ ✨ Exp = [ ${rbrb5} ]
➕ 👮 Pelanggaran +1
➕ ☑️ Misi Berhasil = +1
➕ 📥Total Misi Sebelumnya : ${order}
`.trim()

user.money += rbrb4
user.exp += rbrb5
user.ojekk += 1
user.warn += 1

conn.misi[id] = [
kerja,
setTimeout(() => {
delete conn.misi[id]
}, 27000)
]
setTimeout(() => {
reply(`${hsl}`)
}, 27000)

setTimeout(() => {
reply(`${dimas4}`)
}, 25000)

setTimeout(() => {
reply(`${dimas3}`)
}, 20000)

setTimeout(() => {
reply(`${dimas2}`)
}, 15000)

setTimeout(() => {
reply(`${dimas}`)
}, 10000)

setTimeout(() => {
reply('🔍Mencari Target pembunuhan.....')
}, 0)
user.lastmisi = new Date * 1
} else reply(`Silahkan , 0nggu Selama ${timers}, Untuk Menyelesaikan Misi Kembali`)
}
break

case 'collect': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return reply(mess.group)
function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
let __timers = (new Date - db.data.users[m.sender].lastclaim)
let _timers = (43200000 - __timers)
let timers = clockString(_timers) 
let user = db.data.users[m.sender]
if (new Date - db.data.users[m.sender].lastclaim > 43200000) {
reply(`Kamu sudah mengclaim dan mendapatkan *1000* 💵money dan *1* 🥤potion`)
user.money += 1000
user.potion += 1
user.lastclaim = new Date * 1
} else reply(`silahkan tunggu *${timers}* lagi untuk bisa mengclaim lagi`)
}
break

case 'craft':
case 'crafting': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return reply(mess.group)
let type = (args[0] || '').toLowerCase()
let _type = (args[0] || '').toLowerCase()
let user = db.data.users[m.sender]
let { stock } = db.data.settings[botNumber]

let caption = `
█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█────█────█────█
█▄▄▄▄█▄▄▄▄█▄▄▄▄█
█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█────█────█────█
█▄▄▄▄█▄▄▄▄█▄▄▄▄█
█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█────█────█────█
█▄▄▄▄█▄▄▄▄█▄▄▄▄█

Gunakan Format *${command} [type]*
contoh *${command} pickaxe*

*乂 List Yang Bisa Di Craft*
*乂 Pickaxe ⛏️
*乂 Sword ⚔️
*乂 Fishingrod 🎣
*乂 Armor 🥼
*乂 Atm 💳

*乂 Recipe*
*乂 Pickaxe ⛏️
〉 10 Kayu
〉 5 Batu
〉 5 Iron
〉 20 String

*乂 Sword ⚔️
〉 10 Kayu
〉 15 Iron

*乂 Fishingrod 🎣
〉 10 Kayu
〉 2 Iron
〉 20 String

*乂 Armor 🥼
〉 30 Iron
〉 1 Emerald
〉 5 Diamond

*乂 Atm 💳
〉3 Emerald
〉6 Diamond
〉10k Money
`
try {
if (/craft|Crafting/i.test(command)) {
const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
switch (type) {
case 'pickaxe':
if (user.pickaxe > 0) return reply('Kamu sudah memilik ini')
if(user.rock < 5 || user.wood < 10 || user.iron < 5 || user.string < 20) return reply(`Barang tidak cukup!\nUntuk membuat pickaxe. Kamu memerlukan : ${user.wood < 10 ? `\n${10 - user.wood} kayu🪵` : ''} ${user.iron < 5 ? `\n${5 - user.iron} iron⛓` : ''}${user.string < 20 ? `\n${20 - user.string} String🕸️` : ''}${user.rock < 5 ? `\n${5 - user.rock} Batu 🪨` : ''}`)
user.wood -= 10
stock.wood += 10

user.iron -= 5
stock.iron += 5

user.rock -= 5
stock.rock += 5

user.string -= 20
stock.string += 20

user.pickaxe += 1
user.pickaxedurability = 40
reply("Sukses membuat 1 pickaxe 🔨")
break

case 'sword':
if (user.sword > 0) return reply('Kamu sudah memilik ini')
if(user.wood < 10 || user.iron < 15) return reply(`Barang tidak cukup!\nUntuk membuat sword. Kamu memerlukan :${user.wood < 10 ? `\n${10 - user.wood} kayu🪵` : ''}${user.iron < 15 ? `\n${15 - user.iron} iron⛓️` : ''}`)
user.wood -= 10
stock.wood += 10

user.iron -= 15
stock.iron += 15

user.sword += 1
user.sworddurability = 40
reply("Sukses membuat 1 sword 🗡️")
break

case 'fishingrod':
if (user.fishingrod > 0) return reply('Kamu sudah memilik ini')
if(user.wood < 20 || user.iron < 5 || user.string < 20) return reply(`Barang tidak cukup!\nUntuk membuat pancingan. Kamu memerlukan :${user.wood < 20 ? `\n${20 - user.wood} kayu🪵` : ''}${user.iron < 5 ? `\n${5 - user.iron} iron⛓` : ''}${user.string < 20 ? `\n${20 - user.string} String🕸️` : ''}`)
user.wood -= 10
stock.wood += 10

user.iron -= 2
stock.iron +=2

user.string -= 20
stock.string += 20

user.fishingrod += 1
user.fishingroddurability = 40
reply("Sukses membuat 1 Pancingan 🎣")
break

case 'armor':
if (user.armor > 0) return reply('Kamu sudah memilik ini')
if(user.iron < 30 || user.emerald < 1 || user.diamond < 5) return reply(`Barang tidak cukup!\nUntuk membuat armor. Kamu memerlukan :${user.iron < 30 ? `\n${30 - user.iron} Iron ⛓️` : ''}${user.emerald < 1 ? `\n${1 - user.emerald} Emerald ❇️` : ''}${user.diamond < 5 ? `\n${5 - user.diamond} Diamond 💎` : ''}`)
user.emerald -= 1
stock.emerald += 1

user.iron -= 30
stock.iron += 30

user.diamond -= 5
stock.diamond += 5

user.armor += 1
user.armordurability = 50
reply("Sukses membuat 1 Armor 🥼")
break

case 'atm':
if (user.atm > 0) return reply('Kamu sudah memilik ini')
if(user.emerald < 3 || user.money < 10000 || user.diamond < 6) return reply(`Barang tidak cukup!\nUntuk membuat atm. Kamu memerlukan :${user.money < 10000 ? `\n${10000 - user.money} Money 💹` : ''}${user.emerald < 3 ? `\n${3 - user.emerald} Emerald ❇️` : ''}${user.diamond < 6 ? `\n${6 - user.diamond} Diamond 💎` : ''}`)
user.emerald -= 3
stock.emerald += 3

user.diamond -= 6
stock.diamond += 6

user.money -= 10000
user.atm += 1
user.fullatm = 500000000
reply("Sukses membuat 1 Atm 💳")
break
default:
return await reply(`${caption}`)
}
} 
} catch (err) {
reply("Error\n\n\n" + err.stack)
}
}
break

case 'feed': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return reply(mess.group)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 310000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, ' H ', m, ' M ', s, ' S'].map(v => v.toString().padStart(2, 0)).join('')
}

let info = `
乂 List Pet:
🐈 • Cᴀᴛ
🐕 • Dᴏɢ
🐎 • Hᴏʀsᴇ
🦊 • Fᴏx
🤖 • Rᴏʙᴏ

*➠ Example:* ${command}fcat
`.trim()
let pesan = pickRandom(['ɴʏᴜᴍᴍᴍ~', 'ᴛʜᴀɴᴋs', 'ᴛʜᴀɴᴋʏᴏᴜ ^-^', '...', 'ᴛʜᴀɴᴋ ʏᴏᴜ~', 'ᴀʀɪɢᴀᴛᴏᴜ ^-^'])
let type = (args[0] || '').toLowerCase()
let emo = (type == 'fox' ? '🦊':'' || type == 'cat' ? '🐈':'' || type == 'dog' ? '🐕':'' || type == 'horse' ? '🐴':'' || type == 'robo'? '🤖':'' ) 
let user = db.data.users[m.sender]
let rubah = db.data.users[m.sender].fox
let kuda = db.data.users[m.sender].horse
let kucing = db.data.users[m.sender].cat
let anjing = db.data.users[m.sender].dog
let robot = db.data.users[m.sender].robo
switch (type) {
case 'fox':
if (rubah == 0) return reply('ʏᴏᴜ ᴅᴏɴ\'ᴛ ʜᴀᴠᴇ ᴛʜɪs ᴘᴇᴛ ʏᴇᴛ!')
if (rubah == 10) return reply('ʏᴏᴜʀ ᴘᴇᴛ ɪs ᴍᴀx ʟᴇᴠᴇʟ !')
let __waktur = (new Date - user.foxlastfeed)
let _waktur = (10000 - __waktur)
let waktur = clockString(_waktur)
if (new Date - user.foxlastfeed > 10000) {
if (user.petfood > 0) {
user.petfood -= 1
user.foxexp += 20
user.foxlastfeed = new Date * 1
reply(`ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
if (rubah > 0) {
let naiklvl = ((rubah * 100) - 1)
if (user.foxexp > naiklvl) {
user.fox += 1
user.foxexp -= (rubah * 100)
reply(`*ᴄᴏɴɢʀᴀᴛs!* , ʏᴏᴜʀ ᴘᴇᴛ ʟᴇᴠᴇʟᴜᴘ`)
}
}
} else reply(`ʏᴏᴜʀ ᴘᴇᴛ ғᴏᴏᴅ ɴᴏᴛ ᴇɴᴏᴜɢʜ`)
} else reply(`ʏᴏᴜʀ ᴘᴇᴛ ɪs ғᴜʟʟ, ᴛʀʏ ғᴇᴇᴅɪɴɢ ɪᴛ ᴀɢᴀɪɴ ɪɴ\n➞ *${waktur}*`)
break

case 'cat':
if (kucing == 0) return reply('ʏᴏᴜ ᴅᴏɴ\'ᴛ ʜᴀᴠᴇ ᴛʜɪs ᴘᴇᴛ ʏᴇᴛ!')
if (kucing == 10) return reply('ʏᴏᴜʀ ᴘᴇᴛ ɪs ᴍᴀx ʟᴇᴠᴇʟ !')
let __waktuc = (new Date - user.catlastfeed)
let _waktuc = (10000 - __waktuc)
let waktuc = clockString(_waktuc)
if (new Date - user.catlastfeed > 10000) {
if (user.petfood > 0) {
user.petfood -= 1
user.catexp += 20
user.catlastfeed = new Date * 1
reply(`ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)

if (kucing > 0) {
let naiklvl = ((kucing * 100) - 1)
if (user.catexp > naiklvl) {
user.cat += 1
user.catexp -= (kucing * 100)
reply(`*ᴄᴏɴɢʀᴀᴛs!* , ʏᴏᴜʀ ᴘᴇᴛ ʟᴇᴠᴇʟᴜᴘ`)
}
}
} else reply(`ʏᴏᴜʀ ᴘᴇᴛ ғᴏᴏᴅ ɴᴏᴛ ᴇɴᴏᴜɢʜ`)
} else reply(`ʏᴏᴜʀ ᴘᴇᴛ ɪs ғᴜʟʟ, ᴛʀʏ ғᴇᴇᴅɪɴɢ ɪᴛ ᴀɢᴀɪɴ ɪɴ\n➞ *${waktuc}*`)
break

case 'dog':
if (anjing == 0) return reply('ʏᴏᴜ ᴅᴏɴ\'ᴛ ʜᴀᴠᴇ ᴛʜɪs ᴘᴇᴛ ʏᴇᴛ!')
if (anjing == 10) return reply('ʏᴏᴜʀ ᴘᴇᴛ ɪs ᴍᴀx ʟᴇᴠᴇʟ !')
let __waktua = (new Date - user.doglastfeed)
let _waktua = (10000 - __waktua)
let waktua = clockString(_waktua)
if (new Date - user.doglastfeed > 10000) {
if (user.petfood > 0) {
user.petfood -= 1
user.dogexp += 20
user.doglastfeed = new Date * 1
reply(`ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
if (anjing > 0) {
let naiklvl = ((anjing * 100) - 1)
if (user.dogexp > naiklvl) {
user.dog += 1
user.dogexp -= (anjing * 100)
reply(`*ᴄᴏɴɢʀᴀᴛs!* , ʏᴏᴜʀ ᴘᴇᴛ ʟᴇᴠᴇʟᴜᴘ`)
}
}
} else reply(`ʏᴏᴜʀ ᴘᴇᴛ ғᴏᴏᴅ ɴᴏᴛ ᴇɴᴏᴜɢʜ`)
} else reply(`ʏᴏᴜʀ ᴘᴇᴛ ɪs ғᴜʟʟ, ᴛʀʏ ғᴇᴇᴅɪɴɢ ɪᴛ ᴀɢᴀɪɴ ɪɴ\n➞ *${waktua}*`)
break

case 'horse':
if (kuda == 0) return reply('ʏᴏᴜ ᴅᴏɴ\'ᴛ ʜᴀᴠᴇ ᴛʜɪs ᴘᴇᴛ ʏᴇᴛ!')
if (kuda == 10) return reply('ʏᴏᴜʀ ᴘᴇᴛ ɪs ᴍᴀx ʟᴇᴠᴇʟ !')
let __waktuk = (new Date - user.horselastfeed)
let _waktuk = (10000 - __waktuk)
let waktuk = clockString(_waktuk)
if (new Date - user.horselastfeed > 10000) {
if (user.petfood > 0) {
user.petfood -= 1
user.horseexp += 20
user.horselastfeed = new Date * 1
reply(`ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
if (kuda > 0) {
let naiklvl = ((kuda * 100) - 1)
if (user.horseexp > naiklvl) {
user.horse += 1
user.horseexp -= (kuda * 100)
reply(`*ᴄᴏɴɢʀᴀᴛs!* , ʏᴏᴜʀ ᴘᴇᴛ ʟᴇᴠᴇʟᴜᴘ`)
}
}
} else reply(`ʏᴏᴜʀ ᴘᴇᴛ ғᴏᴏᴅ ɴᴏᴛ ᴇɴᴏᴜɢʜ`)
} else reply(`ʏᴏᴜʀ ᴘᴇᴛ ɪs ғᴜʟʟ, ᴛʀʏ ғᴇᴇᴅɪɴɢ ɪᴛ ᴀɢᴀɪɴ ɪɴ\n➞ *${waktuk}*`)
break

case 'robo':
if (robot == 0) return reply('ʏᴏᴜ ᴅᴏɴ\'ᴛ ʜᴀᴠᴇ ᴛʜɪs ᴘᴇᴛ ʏᴇᴛ!')
if (robot == 10) return reply('ʏᴏᴜʀ ᴘᴇᴛ ɪs ᴍᴀx ʟᴇᴠᴇʟ !')
let __wakturb = (new Date - user.robolastfeed)
let _wakturb = (10000 - __wakturb)
let wakturb = clockString(_wakturb)
if (new Date - user.robolastfeed > 10000) {
if (user.petfood > 0) {
user.petfood -= 1
user.roboexp += 20
user.robolastfeed = new Date * 1
reply(`ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
if (robot > 0) {
let naiklvl = ((robot * 100) - 1)
if (user.roboexp > naiklvl) {
user.robo += 1
user.roboexp -= (robot * 100)
reply(`*ᴄᴏɴɢʀᴀᴛs!* , ʏᴏᴜʀ ᴘᴇᴛ ʟᴇᴠᴇʟᴜᴘ`)
}
}
} else reply(`ʏᴏᴜʀ ᴘᴇᴛ ғᴏᴏᴅ ɴᴏᴛ ᴇɴᴏᴜɢʜ`)
} else reply(`ʏᴏᴜʀ ᴘᴇᴛ ɪs ғᴜʟʟ, ᴛʀʏ ғᴇᴇᴅɪɴɢ ɪᴛ ᴀɢᴀɪɴ ɪɴ\n➞ *${wakturb}*`)
break
default:
return reply(`${info}`)
}
}
break

case 'fighting':
 case 'fight': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
 if (!m.isGroup) return reply(mess.group)
conn.fight = conn.fight ? conn.fight: {}
let user = db.data.users[m.sender]
if (typeof conn.fight[m.sender] != "undefined" && conn.fight[m.sender] == true) return reply(`Kamu masih bertarung.`)
let users = participants.map(a => a.id)
var lawan
lawan = users[Math.floor(users.length * Math.random())]
while (typeof db.data.users[lawan] == "undefined" || lawan == m.sender) {
lawan = users[Math.floor(users.length * Math.random())]
}
reply(`*Kamu* (level ${user.level}) menantang *${conn.getName(lawan)}* (level ${db.data.users[lawan].level}) dan sedang dalam pertarungan.\n\nTunggu 5 menit lagi dan lihat siapa yg menang.`)
conn.fight[m.sender] = true
await delay(300000)
let kesempatan = []
for (let i = 0; i < user.level; i++) kesempatan.push(m.sender)
for (let i = 0; i < db.data.users[lawan].level; i++) kesempatan.push(lawan)
let pointPemain = 0
let pointLawan = 0
for (let i = 0; i < 10; i++) {
let unggul = getRandom(0, kesempatan.length - 1)
if (kesempatan[unggul] == m.sender) pointPemain += 1
else pointLawan += 1
}
if (pointPemain > pointLawan) {
let hadiah = (pointPemain - pointLawan) * 10000
user.money += hadiah
user.limit += 1
reply(`*${conn.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${conn.getName(lawan)}*\n\n*Kamu* (level ${user.level}) menang melawan *${conn.getName(lawan)}* (level ${db.data.users[lawan].level}) karena kamu ${alasanMenang[getRandom(0, alasanMenang.length - 1)]}\n\nHadiah . ${hadiah.toLocaleString()}\n+1 Limit`)
} else if (pointPemain < pointLawan) {
let denda = (pointLawan - pointPemain) * 100000
user.money -= denda
user.limit += 1
reply(`*${conn.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${conn.getName(lawan)}*\n\n*Kamu* (level ${user.level}) kalah melawan *${conn.getName(lawan)}* (level ${db.data.users[lawan].level}) karena kamu ${alasanKalah[getRandom(0, alasanKalah.length - 1)]}\n\nMoney kamu berkurang ${denda.toLocaleString()}\n+1 Limit`)
} else {
reply(`*${conn.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${conn.getName(lawan)}*\n\nHasil imbang kak, ga dapet apa apa`)
}
delete conn.fight[m.sender]
}
break

case 'gajian': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return reply(mess.group)
function JaM(ms) {
let h = isNaN(ms) ? '60' : Math.floor(ms / 3600000) % 60
return [h].map(v => v.toString().padStart(2, 0) ).join(':')
}

function MeNit(ms) {
let m = isNaN(ms) ? '60' : Math.floor(ms / 60000) % 60
return [m].map(v => v.toString().padStart(2, 0) ).join(':')
}

function DeTik(ms) {
let s = isNaN(ms) ? '60' : Math.floor(ms / 1000) % 60
return [s].map(v => v.toString().padStart(2, 0) ).join(':')
}

let LastClaim = db.data.users[m.sender].lastclaim
let cdm = `${MeNit(new Date - LastClaim)}`
let cds = `${DeTik(new Date - LastClaim)}`
let cd1 = Math.ceil(44 - cdm)
let cd2 = Math.ceil(59 - cds)
if (new Date - db.data.users[m.sender].lastclaim > 2700000) {
db.data.users[m.sender].money += 50000
db.data.users[m.sender].exp += 100
reply('Nih gaji lu +Rp50000')
db.data.users[m.sender].lastclaim = new Date * 1
} else return reply(`Lu udah ambil jatah hari ini.\n\nTunggu ${cd1} Menit ${cd2} Detik!`)
}
break      

case 'me':
case 'inventory': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return reply(mess.group)
let inventory = {
others: {
joinlimit: true,
health: true,
money: true,
chip: true,
exp: true,
},
items: {
bibitanggur: true,
bibitmangga: true,
bibitpisang: true,
bibitapel: true,
bibitjeruk: true,
anggur: true,
mangga: true,
pisang: true,
apel: true,
jeruk: true,
potion: true,
trash: true,
wood: true,
rock: true,
string: true,
emerald: true,
diamond: true,
gold: true,
iron: true,
umpan: true,
upgrader: true,
pet: true,
petfood: true,
},
durabi: {
sworddurability: true,
pickaxedurability: true,
fishingroddurability: true,
armordurability: true,
},
tools: {
armor: {
'0': '❌',
'1': 'Leather Armor',
'2': 'Iron Armor',
'3': 'Gold Armor',
'4': 'Diamond Armor',
'5': 'Emerald Armor',
'6': 'Crystal Armor',
'7': 'Obsidian Armor',
'8': 'Netherite Armor',
'9': 'Wither Armor',
'10': 'Dragon Armor',
'11': 'Hacker Armor'
},
sword: {
'0': '❌',
'1': 'Wooden Sword',
'2': 'Stone Sword',
'3': 'Iron Sword',
'4': 'Gold Sword',
'5': 'Copper Sword',
'6': 'Diamond Sword',
'7': 'Emerald Sword',
'8': 'Obsidian Sword',
'9': 'Netherite Sword',
'10': 'Samurai Slayer Green Sword',
'11': 'Hacker Sword'
},
pickaxe: {
'0': '❌',
'1': 'Wooden Pickaxe',
'2': 'Stone Pickaxe',
'3': 'Iron Pickaxe',
'4': 'Gold Pickaxe',
'5': 'Copper Pickaxe',
'6': 'Diamond Pickaxe',
'7': 'Emerlad Pickaxe',
'8': 'Crystal Pickaxe',
'9': 'Obsidian Pickaxe',
'10': 'Netherite Pickaxe',
'11': 'Hacker Pickaxe'
},
fishingrod: {
'0': '❌',
'1': 'Wooden Fishingrod',
'2': 'Stone Fishingrod',
'3': 'Iron Fishingrod',
'4': 'Gold Fishingrod',
'5': 'Copper Fishingrod',
'6': 'Diamond Fishingrod',
'7': 'Emerald Fishingrod',
'8': 'Crystal Fishingrod',
'9': 'Obsidian Fishingrod',
'10': 'God Fishingrod',
'11': 'Hacker Fishingrod'
 }
},
crates: {
common: true,
uncommon: true,
mythic: true,
legendary: true,
},
pets: {
horse: 10,
cat: 10,
fox: 10,
dog: 10,
robo: 10,
},
cooldowns: {}
}

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let user = db.data.users[who]

if (!(who in db.data.users)) return reply(`User ${who} not in database`)

let sortedlevel = Object.entries(db.data.users).sort((a, b) => b[1].level - a[1].level)
let userslevel = sortedlevel.map(v => v[0])
let sortedchip = Object.entries(db.data.users).sort((a, b) => b[1].chip - a[1].chip)
let userschip = sortedchip.map(v => v[0])
let sortedmoney = Object.entries(db.data.users).sort((a, b) => b[1].money - a[1].money)
let usersmoney = sortedmoney.map(v => v[0])
let sorteddiamond = Object.entries(db.data.users).sort((a, b) => b[1].diamond - a[1].diamond)
let usersdiamond = sorteddiamond.map(v => v[0])
let sortedbank = Object.entries(db.data.users).sort((a, b) => b[1].bank - a[1].bank)
let usersbank = sortedbank.map(v => v[0])
let sortedgold = Object.entries(db.data.users).sort((a, b) => b[1].gold - a[1].gold)
let usersgold = sortedgold.map(v => v[0])

let isMods = [conn.decodeJid(conn.user.id), ...global.owner.filter(([number, _, isCreator]) => number && isCreator).map(([number]) => number)].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(who)
let isCreator = m.fromMe || isMods || [conn.decodeJid(conn.user.id), ...global.owner.filter(([number, _, isCreator]) => number && !isCreator).map(([number]) => number)].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(who)
let isPrem = isCreator || new Date() - user.premiumTime < 0

let limit = isPrem ? 'Unlimited' : user.limit
let tools = Object.keys(inventory.tools).map(v => user[v] && `*${global.rpg.emoticon(v)} ${v}:* ${typeof inventory.tools[v] === 'object' ? inventory.tools[v][user[v]?.toString()] : `Level(s) ${user[v]}`}`).filter(v => v).join('\n').trim()
let items = Object.keys(inventory.items).map(v => user[v] && `*${global.rpg.emoticon(v)} ${v}:* ${user[v]}`).filter(v => v).join('\n').trim()
let dura = Object.keys(inventory.durabi).map(v => user[v] && `*${global.rpg.emoticon(v)} ${v}:* ${user[v]}`).filter(v => v).join('\n').trim()
let crates = Object.keys(inventory.crates).map(v => user[v] && `*${global.rpg.emoticon(v)} ${v}:* ${user[v]}`).filter(v => v).join('\n').trim()
let pets = Object.keys(inventory.pets).map(v => user[v] && `*${global.rpg.emoticon(v)} ${v}:* ${user[v] >= inventory.pets[v] ? 'Max Levels' : `Level(s) ${user[v]}`}`).filter(v => v).join('\n').trim()
let cooldowns = Object.entries(inventory.cooldowns).map(([cd, { name, time }]) => cd in user && `*✧ ${name}*: ${new Date() - user[cd] >= time ? '✅' : '❌'}`).filter(v => v).join('\n').trim()

let caption = `
🧑🏻‍🏫 ᴜsᴇʀ: *${user.registered ? user.name : conn.getName(who)}* ${user.level ? `
➠ ${global.rpg.emoticon('level')} level: ${user.level}` : ''} ${user.limit ? `
➠ ${global.rpg.emoticon('limit')} limit: ${limit}` : ''}
${Object.keys(inventory.others).map(v => user[v] && `➠ ${global.rpg.emoticon(v)} ${v}: ${user[v]}`).filter(v => v).join('\n')} ${tools ? `

*ʟɪꜱᴛ ᴛᴏᴏʟs* :
${tools}` : ''}${items ? `

*ʟɪꜱᴛ ɪᴛᴇᴍs* :
${items}` : ''}${crates ? `

*ʟɪꜱᴛ ᴄʀᴀᴛᴇs* :
${crates}` : ''}${pets ? `

*ʟɪꜱᴛ ᴩᴇᴛs* :
${pets}` : ''}${cooldowns ? `

*ʟɪꜱᴛ ᴀʀᴄʜɪᴇᴠᴇᴍᴇɴᴛ* :
${global.rpg.emoticon('chip')} ᴛᴏᴘ ᴄʜɪᴘ *${userschip.indexOf(who) + 1}* ᴅᴀʀɪ *${userschip.length}*
${global.rpg.emoticon('money')} ᴛᴏᴘ ᴍᴏɴᴇʏ *${usersmoney.indexOf(who) + 1}* ᴅᴀʀɪ *${usersmoney.length}*
${global.rpg.emoticon('bank')} ᴛᴏᴘ ʙᴀɴᴋ *${usersbank.indexOf(who) + 1}* ᴅᴀʀɪ *${usersbank.length}*
${global.rpg.emoticon('level')} ᴛᴏᴘ ʟᴇᴠᴇʟ *${userslevel.indexOf(who) + 1}* ᴅᴀʀɪ *${userslevel.length}*
${global.rpg.emoticon('diamond')} ᴛᴏᴘ ᴅɪᴀᴍᴏɴᴅ *${usersdiamond.indexOf(who) + 1}* ᴅᴀʀɪ *${usersdiamond.length}*
${global.rpg.emoticon('gold')} ᴛᴏᴘ ɢᴏʟᴅ *${usersgold.indexOf(who) + 1}* ᴅᴀʀɪ *${usersgold.length}*

♻️ *ᴄᴏʟʟᴇᴄᴛ ʀᴇᴡᴀʀᴅs* :
${cooldowns}` : ''}
*✧ dungeon: ${user.lastdungeon == 0 ? '✅': '❌'}*
*✧ mining: ${user.lastmining == 0 ? '✅': '❌'}*
*✧ daily: ${user.lastclaimday == 0 ? '✅': '❌'}*
*✧ monthly: ${user.lastclaimwek == 0 ? '✅': '❌'}*
*✧ yearly: ${user.lastclaimyer == 0 ? '✅': '❌'}*
`.trim()

reply(`${caption}`)
}
break

case 'upgrade': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return reply(mess.group)
let user = db.data.users[m.sender]
let wood = user.wood * 1
let rock = user.rock * 1
let string = user.string * 1
let money = user.money * 1
let iron = user.iron * 1
let fishingrod = user.fishingrod * 1
let pickaxe = user.pickaxe * 1
let sword = user.sword * 1
let diamond = user.diamond * 1
let emerald = user.emerald * 1
let armor = user.armor * 1
let atm = user.atm
let type = (args[0] || '').toLowerCase()
let prefix = command

let teks = `█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█────█────█────█
█▄▄▄▄█▄▄▄▄█▄▄▄▄█
█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█────█────█────█
█▄▄▄▄█▄▄▄▄█▄▄▄▄█
█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█────█────█────█
█▄▄▄▄█▄▄▄▄█▄▄▄▄█

Gunakan Format *${command} [type]*
contoh *${command} fishingRod*

*📌List yang Bisa Di Upgrade*
${rpg.emoticon('fishingrod')}FishingRod
${rpg.emoticon('pickaxe')}Pickaxe
${rpg.emoticon('sword')}Sword
${rpg.emoticon('armor')}Armor
${rpg.emoticon('atm')}Atm
`.trim()

switch (type) {
case 'fishingrod':
if (fishingrod == 0) {
let lmao = `anda belum memiliki *🎣FishingRod*
untuk mendapatkannya ketik *${command}craft fishingrod*`
return reply(`${lmao}`)
}
if (fishingrod > 9) return reply(`*${rpg.emoticon('fishingrod')}FishingRod* kamu sudah level max`)
let _wood = fishingrod * 100
let _string = fishingrod * 100
let _money = fishingrod * 1000000
if (wood < _wood || string < _string || money < _money) return reply(`Material kamu kurang!!${wood < _wood ? `\n${rpg.emoticon('wood')}wood Kamu Kurang *${_wood - wood}*` : ''}${string < _string ? `\n${rpg.emoticon('string')}String Kamu Kurang *${_string - string}*` : ''}${user.money < _money ? `\n${rpg.emoticon('money')}Uang Kamu Kurang *${_money - money}*` : ''}`)
user.fishingrod += 1
user.wood -= _wood * 1
user.string -= _string * 1
user.money -= _money * 1
user.fishingroddurability = 0 
user.fishingroddurability += fishingrod * 50
reply(`Succes mengupgrade *${rpg.emoticon('fishingrod')}FishingRod*`)
break

case 'pickaxe':
if (pickaxe == 0) {
let lmao = `anda belum memiliki *${rpg.emoticon('pickaxe')}Pickaxe*
untuk memilikinya ketik *${command}craft Pickaxe*`
return reply(`${lmao}`)
}
if (pickaxe > 9) return reply(`*${rpg.emoticon('pickaxe')}Pickaxe* kamu sudah level max!!`)
let __rock = pickaxe * 250
let __wood = pickaxe * 150
let __money = pickaxe * 1500000
if (rock < __rock || wood < __wood || money < __money) return reply(`
Material Anda Kurang!!
${rock < __rock ? `\n${rpg.emoticon('rock')}rock kamu kurang *${__rock - rock}*` : ''}${wood < __wood ? `\n${rpg.emoticon('wood')}wood kamu kurang *${__wood - wood}*` : ''}${money < __money ? `\n${rpg.emoticon('money')}Uang kamu kurang *${__money - money}*` : ''}`)
user.pickaxe += 1
user.wood -= __wood * 1
user.rock -= __rock * 1
user.money -= __money * 1
user.pickaxedurability = 0
user.pickaxedurability += pickaxe * 50
reply(`Succes mengupgrade *${rpg.emoticon('pickaxe')}Pickaxe*`)
break

case 'sword':
if (sword == 0) {
let lmao = `anda belum memiliki *${rpg.emoticon('sword')}Sword*
untuk memilikinya ketik *${command}craft sword*`
return reply(`${lmao}`)
}
if (sword > 9) return reply(`*${rpg.emoticon('sword')}Sword* kamu sudah level max!!`)
let _iron = sword * 250
let ___wood = sword * 150
let ___money = sword * 1000000
if (iron < _iron || wood < ___wood || money < ___money) return reply(`
Material Anda Kurang!!
${iron < _iron ? `\n${rpg.emoticon('iron')}Iron kamu kurang *${_iron - iron}*` : ''}${wood < ___wood ? `\n${rpg.emoticon('wood')}wood kamu kurang *${___wood - wood}*` : ''}${money < ___money ? `\n${rpg.emoticon('money')}Uang kamu kurang *${___money - money}*` : ''}`)
user.sword += 1
user.iron -= _iron * 1
user.wood -= ___wood * 1
user.money -= ___money * 1
user.sworddurability = 0 
user.sworddurability += sword * 50 
reply(`Succes mengupgrade *${rpg.emoticon('sword')}Sword*`)
break

case 'armor':
if (armor == 0) {
let lmao = `anda belum memiliki *${rpg.emoticon('armor')}Armor*
untuk memilikinya ketik *${command}craft armor*`
return reply(`${lmao}`)
}
if (armor > 9) return reply(`*${rpg.emoticon('armor')}Armor* kamu sudah level max!!`)
let _diamond = armor * 5
let ____wood = armor * 150
let ____money = armor * 1000000
if (diamond < _diamond || wood < ____wood || money < ____money) return reply(`
Material Anda Kurang!!
${diamond < _diamond ? `\n${rpg.emoticon('diamond')}Diamond kamu kurang *${_diamond - diamond}*` : ''}${wood < ____wood ? `\n${rpg.emoticon('wood')}wood kamu kurang *${____wood - wood}*` : ''}${money < ____money ? `\n${rpg.emoticon('money')}Uang kamu kurang *${____money - money}*` : ''}`)
user.armor += 1
user.diamond -= _diamond * 1
user.wood -= ____wood * 1
user.money -= ____money * 1
user.armordurability = 0 
user.armordurability += sword * 50 
reply(`Succes mengupgrade *${rpg.emoticon('armor')}Armor*`)
break

case 'atm':
if (atm == 0) {
let lmao = `anda belum memiliki *${rpg.emoticon('atm')}Atm*
untuk memilikinya ketik *${command}craft atm*`
return reply(`${lmao}`)
}
if (atm > 999) return reply(`*${rpg.emoticon('atm')}Atm* kamu sudah level max!!`)
let __diamond = atm * 3
let _emerald = atm * 5
let _____money = atm * 10000
if (diamond < __diamond || emerald < _emerald || money < _____money) return reply(`
Material Anda Kurang!!
${diamond < __diamond ? `\n${rpg.emoticon('diamond')}Diamond kamu kurang *${__diamond - diamond}*` : ''}${emerald < _emerald ? `\n${rpg.emoticon('emerald')}Emerald kamu kurang *${_emerald - emerald}*` : ''}${money < _____money ? `\n${rpg.emoticon('money')}Uang kamu kurang *${_____money - money}*` : ''}`)
user.atm += 1
user.diamond -= __diamond * 1
user.emerald -= _emerald * 1
user.money -= _____money * 1
user.fullatm = 0 
user.fullatm += atm * 500000000
reply(`Succes mengupgrade *${rpg.emoticon('atm')}Atm*`)
break
default :
return reply(`${teks}`)
}
}
break

case 'transfer': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return reply(mess.group)
function special(type) {
let b = type.toLowerCase()
let special = (['common', 'uncommon', 'mythic', 'legendary', 'pet'].includes(b) ? ' Crate' : '')
return special
}

function isNumber(x) {
return !isNaN(x)
}
const items = [
'money', 'bank', 'potion', 'trash', 'wood',
'rock', 'string', 'petFood', 'emerald',
'diamond', 'gold', 'iron', 'common',
'uncommon', 'mythic', 'legendary', 'pet', 'chip', 
'anggur', 'apel', 'jeruk', 'mangga', 'pisang', 
'bibitanggur', 'bibitapel', 'bibitjeruk', 'bibitmangga', 'bibitpisang',
]
let user = db.data.users[m.sender]
const item = items.filter(v => v in user && typeof user[v] == 'number')
let lol = `Use format ${command} [type] [value] [number]
example ${command} money 9999 @621927237001

📍 Transferable items
${item.map(v => `${rpg.emoticon(v)}${v}`.trim()).join('\n')}
`.trim()
const type = (args[0] || '').toLowerCase()
if (!item.includes(type)) return reply(lol)
const count = Math.min(Number.MAX_SAFE_INTEGER, Math.max(1, (isNumber(args[1]) ? parseInt(args[1]) : 1))) * 1
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
let _user = db.data.users[who]
if (!who) return reply('Tag salah satu, atau ketik Nomernya!!')
if (!(who in db.data.users)) return reply(`User ${who} not in database`)
if (user[type] * 1 < count) return reply(`Your *${rpg.emoticon(type)}${type}${special(type)}* is less *${count - user[type]}*`)
let previous = user[type] * 1
let _previous = _user[type] * 1
user[type] -= count * 1
_user[type] += count * 1
if (previous > user[type] * 1 && _previous < _user[type] * 1) reply(`*––––––『 𝚃𝚁𝙰𝙽𝚂𝙵𝙴𝚁 』––––––*\n*📊 Status:* Succes\n*🗂️ Type:* ${type}${special(type)} ${rpg.emoticon(type)}\n*🧮 Count:* ${count}\n*📨 To:* @${(who || '').replace(/@s\.whatsapp\.net/g, '')}`, null, { mentions: [who] })
else {
user[type] = previous
_user[type] = _previous
reply(`*––––––『 TRANSFER 』––––––*\n*📊 Status:* Failted\n*📍 Item:* ${count} ${rpg.emoticon(type)}${type}${special(type)}\n*📨 To:* @${(who || '').replace(/@s\.whatsapp\.net/g, '')}`, null, { mentions: [who] })
}
}
break

case 'buy': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return reply(mess.group)
function isNumber(number) {
if (!number) return number
number = parseInt(number)
return typeof number == 'number' && !isNaN(number)
}

function capitalize(word) {
return word.charAt(0).toUpperCase() + word.substr(1)
}
const items = {
buy: {
limit: {
exp: 9999
},
chip: {
money: 1000000
},
exp: {
money: 1000
},
potion: {
money: 1250
},
trash: {
money: 40
},
wood: {
money: 700
},
rock: {
money: 850
},
string: {
money: 400
},
iron: { 
money: 3000
},
diamond: {
money: 500000
},
emerald: {
money: 100000
},
gold: {
money: 100000
},
common: {
money: 2000
},
uncommon: {
money: 20000
},
mythic: {
money: 75000
},
legendary: {
money: 200000
},
petfood: {
money: 3500
},
pet: {
money: 120000
},
anggur: {
money: 2000
},
apel: {
money: 2000
},
jeruk: {
money: 2000
},
mangga: {
money: 2000
},
pisang: {
money: 2000
},
bibitanggur: {
money: 2000
},
bibitapel: {
money: 2000
},
bibitjeruk: {
money: 2000
},
bibitmangga: {
money: 2000
},
bibitpisang: {
money: 2000
},
umpan: {
money: 5000
} 
},
sell: {
limit: {
exp: 999
},
exp: {
money: 1
},
chip: {
money: 1000000
},
potion: {
money: 625
},
trash: {
money: 20
},
wood: {
money: 350
},
rock: {
money: 425
},
string: {
money: 200
},
iron: { 
money: 1500
},
diamond: {
money: 250000
},
emerald: {
money: 50000
},
gold: {
money: 50000
},
common: {
money: 1000
},
uncommon: {
money: 10000
},
mythic: {
money: 37500
},
legendary: {
money: 100000
},
petfood: {
money: 1750
},
pet: {
money: 60000
},
anggur: {
money: 1000
},
apel: {
money: 1000
},
jeruk: {
money: 1000
},
mangga: {
money: 1000
},
pisang: {
money: 1000
},
bibitanggur: {
money: 1000
},
bibitapel: {
money: 1000
},
bibitjeruk: {
money: 1000
},
bibitmangga: {
money: 1000
},
bibitpisang: {
money: 1000
},
umpan: {
money: 2500
}
}
}

const item = (args[0] || '').toLowerCase()
if (!item.match('limit') && global.db.data.chats[m.sender].rpg == false && m.isGroup) return dfail('rpg', m, alicia)
let user = global.db.data.users[m.sender]
const listItems = Object.fromEntries(Object.entries(items[command.toLowerCase()]).filter(([v]) => v && v in user))
let text = ''
let footer = ''
let image = ''
let buttons = ''
text = (command.toLowerCase() == 'buy' ?
(`
*𝙱𝚄𝚈𝙸𝙽𝙶*
`.trim()) : 
(`
*𝚂𝙴𝙻𝙻𝙸𝙽𝙶*
`.trim())
)
footer = (command.toLowerCase() == 'buy' ?
(`
🛒 List Items :
${Object.keys(listItems).map((v) => {
let paymentMethod = Object.keys(listItems[v]).find(v => v in user)
return `➠ 1 ${rpg.emoticon(v)} ${capitalize(v)} ﹫ ${listItems[v][paymentMethod]} ${rpg.emoticon(paymentMethod)}${capitalize(paymentMethod)}`.trim()
}).join('\n')}
–––––––––––––––––––––––––
💁🏻‍♂ ᴛɪᴩ :
➠ ᴛᴏ ʙᴜʏ ɪᴛᴇᴍs:
${command} [item] [quantity]
*乂 ᴇxᴀᴍᴩʟᴇ:
${command} potion 10
`.trim()) : 
(`
🛒 List Items :
${Object.keys(listItems).map((v) => {
let paymentMethod = Object.keys(listItems[v]).find(v => v in user)
return `➠ 1 ${rpg.emoticon(v)} ${capitalize(v)} ﹫ ${listItems[v][paymentMethod]} ${rpg.emoticon(paymentMethod)}${capitalize(paymentMethod)}`.trim()
}).join('\n')}
–––––––––––––––––––––––––
💁🏻‍♂ ᴛɪᴩ :
➠ ᴛᴏ sᴇʟʟ ɪᴛᴇᴍs:
${command} [item] [quantity]
*乂 ᴇxᴀᴍᴩʟᴇ:
${command} potion 10
`.trim())
)

const total = Math.floor(isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 1), Number.MAX_SAFE_INTEGER) : 1) * 1
if (!listItems[item]) return reply(footer)
if (command.toLowerCase() == 'buy') {
let paymentMethod = Object.keys(listItems[item]).find(v => v in user)
if (user[paymentMethod] < listItems[item][paymentMethod] * total) return reply(`Kamu membutuhkan *${(listItems[item][paymentMethod] * total) - user[paymentMethod]}* ${capitalize(paymentMethod)} ${rpg.emoticon(paymentMethod)} Lagi, Untuk Membeli *${total}* ${capitalize(item)} ${rpg.emoticon(item)}. Kamu hanya memiliki *${user[paymentMethod]}* ${capitalize(paymentMethod)} ${rpg.emoticon(paymentMethod)}.`)
user[paymentMethod] -= listItems[item][paymentMethod] * total
user[item] += total
return reply(`Sukses Membeli *${total} ${capitalize(item)} ${rpg.emoticon(item)}*, Seharga *${listItems[item][paymentMethod] * total} ${capitalize(paymentMethod)} ${rpg.emoticon(paymentMethod)}*`)
} else {
let paymentMethot = Object.keys(listItems[item]).find(v => v in user)
if (user[item] < total) return reply(`You don't have enough *${capitalize(item)} ${rpg.emoticon(item)}* to sell, you only have ${user[item]} items`)
user[item] -= total
user[paymentMethot] += listItems[item][paymentMethot] * total
return reply(`Sukses Menjual *${total} ${capitalize(item)} ${rpg.emoticon(item)}*, Seharga *${listItems[item][paymentMethot] * total} ${capitalize(paymentMethot)} ${rpg.emoticon(paymentMethot)}*`)
}
}
break

case 'selectskill': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return reply(mess.group)
let user = db.data.users[m.sender]
let skill = ["swordmaster", "necromancer", "witch", "Archer", "magicswordmaster", "thief", "shadow"]
let bintang = {
"satu": "⭐",
"dua": "⭐⭐",
"tiga": "⭐⭐⭐",
"empat": "⭐⭐⭐⭐",
"lima": "⭐⭐⭐⭐⭐",
"Enam": "⭐⭐⭐⭐⭐⭐"
}
 let skil = text.trim().toLowerCase() // to filter text
 if (!skill.includes(skil)) return reply( `Select *skill🃏* what do you want/pilih skill apa yg kamu inginkan:

${skill.map(skil => `› ${skil}`).join('\n')}

How To use/Cara menggunakan:
${command} <nameskill>
 
Example/Contoh:
${command} necromancer
`)
if (user.skill == "") {
user.skill = skil
reply(`Anda telah memilih Skill ${skil}`)
} else if (user.skill) {
reply(`Anda Sudah Punya skill ${user.skill} Tidak bisa diganti`)
}
}
break

case 'sampah': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return reply(mess.group)
const rewards = {
exp: 500,
money: 20999,
}

const cooldown = 2592000000
let user = db.data.users[m.sender]
if (new Date - user.lastmonthly < cooldown) return reply( `You have already claimed this monthly claim, wait for *${((user.lastmonthly + cooldown) - new Date()).toTimeString()}*`.trim())
let text = ''
for (let reward of Object.keys(rewards)) if (reward in user) {
user[reward] += rewards[reward]
text += `*+${rewards[reward]}* ${rpg.emoticon(reward)}${reward}\n`
}
reply('*––––––『 NYAMPAH 』––––––*\n' + text.trim())
user.lastmonthly = new Date * 1
}
break

case 'roket': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return reply(mess.group)
function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
let __timers = (new Date - db.data.users[m.sender].lastmisi)
let _timers = (3600000 - __timers)
let user = db.data.users[m.sender]
let order = db.data.users[m.sender].rokets
let timers = clockString(_timers)
let name = user.registered ? user.name: conn.getName(m.sender)
let id = m.sender
let kerja = 'Roket'
conn.misi = conn.misi ? conn.misi: {}
if (id in conn.misi) {
reply( `Selesaikan Misi ${conn.misi[id][0]} Terlebih Dahulu`)
throw false
}
if (user.health < 80) return reply(`Anda Harus Memiliki Minimal 80Health`)
if (new Date - db.data.users[m.sender].lastmisi > 3600000) {
let ngerok4 = Math.floor(Math.random() * 10)
let ngerok5 = Math.floor(Math.random() * 10)

let ngrk4 = (ngerok4 * 100000)
let ngrk5 = (ngerok5 * 1000)

let rokit = `🌕


▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▄▄▄▒▒▒█▒▒▒▒▄▒▒▒▒▒▒▒▒
▒█▀█▀█▒█▀█▒▒█▀█▒▄███▄▒
░█▀█▀█░█▀██░█▀█░█▄█▄█░
░█▀█▀█░█▀████▀█░█▄█▄█░
████████▀█████████████
🚀

👨‍🚀 Memulai penerbangan....
`.trim()

let rokit2 = `🌕


🚀
▒▒▄▄▄▒▒▒█▒▒▒▒▄▒▒▒▒▒▒▒▒
▒█▀█▀█▒█▀█▒▒█▀█▒▄███▄▒
░█▀█▀█░█▀██░█▀█░█▄█▄█░
░█▀█▀█░█▀████▀█░█▄█▄█░
████████▀█████████████

➕ Dalam penerbangan....
`.trim()

let rokit3 = `🌕🚀


▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▄▄▄▒▒▒█▒▒▒▒▄▒▒▒▒▒▒▒▒
▒█▀█▀█▒█▀█▒▒█▀█▒▄███▄▒
░█▀█▀█░█▀██░█▀█░█▄█▄█░
░█▀█▀█░█▀████▀█░█▄█▄█░
████████▀█████████████

➕ Sampai di tujuan....
`.trim()

let rokit4 = `🌕🚀

➕ Sukses Mendarat.... 👨‍🚀
`.trim()

let hsl = `
*—[ Hasil Ngroket ${name} ]—*
➕ 💹 Uang = [ ${ngrk4} ]
➕ ✨ Exp = [ ${ngrk5} ]
➕ 😍 Mendarat Selesai = +1
➕📥Total Mendarat Sebelumnya : ${order}
`.trim()

user.money += ngrk4
user.exp += ngrk5
user.rokets += 1
user.health -= 80

conn.misi[id] = [
kerja,
setTimeout(() => {
delete conn.misi[id]
}, 27000)
]

setTimeout(() => {
reply( hsl)
}, 27000)

setTimeout(() => {
reply( rokit4)
}, 25000)

setTimeout(() => {
reply( rokit3)
}, 20000)

setTimeout(() => {
reply( rokit2)
}, 15000)

setTimeout(() => {
reply( rokit)
}, 10000)

setTimeout(() => {
reply( `🔍 ${name} Mencari Lokasi.....`)
}, 0)
user.lastmisi = new Date * 1
} else reply(`Silahkan Menunggu Selama ${timers}, Untuk Menyelesaikan Misi Kembali`)
}
break

case 'rob':
case 'robery': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return reply(mess.group)
function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
let user = db.data.users[m.sender]
let __timers = (new Date - user.lastmisi)
let _timers = (3600000 - __timers)
let timers = clockString(_timers)
let id = m.sender
let kerja = 'Rob'
conn.misi = conn.misi ? conn.misi : {}
if (id in conn.misi) {
reply( `Selesaikan Misi ${conn.misi[id][0]} Terlebih Dahulu`)
throw false
}
if (user.health < 80) return reply('Anda Harus Memiliki Minimal 80Health')
if (new Date - db.data.users[m.sender].lastmisi > 3600000) {
let rndm1 = Math.floor(Math.random() * 10)
let rndm2 = Math.floor(Math.random() * 10)

let ran1 = (rndm1 * 100000)
let ran2 = (rndm2 * 1000)

let jln = `
🏘️🚗

✔️ Mengincar target....
`.trim()

let jln2 = `
🏘️ 🚶

➕ Memulai aksi....
`.trim()

let jln3 = `
🏘️

➕ Merampok....
`.trim()

let jln4 = `
🚗



🏘️🚓

➕ 💹Berhasil kabur....
`.trim()

let hsl = `
*—[ Hasil rob ]—*

➕ 💹 Uang = [ ${ran1} ]
➕ ✨ Exp = [ ${ran2} ]
➕ 📦 Rob Selesai = +1

Dan health anda berkurang -80
`.trim()
user.money += ran1
user.exp += ran2
user.health -= 80

conn.misi[id] = [
kerja,
setTimeout(() => {
delete conn.misi[id]
}, 27000)
]

setTimeout(() => {
reply(hsl)
}, 27000)

setTimeout(() => {
reply(jln4)
}, 25000)

setTimeout(() => {
reply(jln3)
}, 20000)

setTimeout(() => {
reply(jln2)
}, 15000)

setTimeout(() => {
reply(jln)
}, 10000)

setTimeout(() => {
reply('🔍Mencari Rumah.....')
}, 0)
user.lastmisi = new Date * 1
} else reply(`Silahkan Menunggu Selama ${timers}, Untuk Menyelesaikan Misi Kembali`)
}
break

case 'repair': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return reply(mess.group)
const {default: MessageType } = require ('@adiwajshing/baileys')

let type = (args[0] || '').toLowerCase()
let _type = (args[0] || '').toLowerCase()
let user = db.data.users[m.sender]
db.data.users[m.sender].pickaxe = db.data.users[m.sender].pickaxe || 0
db.data.users[m.sender].sword = db.data.users[m.sender].sword || 0
db.data.users[m.sender].fishingrod = db.data.users[m.sender].fishingrod || 0
db.data.users[m.sender].armor = db.data.users[m.sender].armor || 0
let botol = global.botwm

let lgocraft = `
*「 R E P A I R」*`

let caption = `
*乂 .repaire pickaxe ⛏️
*乂 .repair sword ⚔️
*乂 .repair fishingrod 🎣
*乂 .repair armor 🥼

*❏ RECIPE*
*乂 Pickaxe ⛏️
〉20 Rock
〉 20 Wood
〉 20 Iron
〉 1 Diamond

*乂 Sword ⚔️
〉 20 Wood
〉 20 Iron
〉 2 Gold
〉 1 Diamond

*乂 FishingRod ⚔️
〉 20 Wood
〉 20 String
〉 20 Iron
〉 1 Diamond

*乂 Armor 🥼
〉 15 Iron
〉 2 Gold
〉 1 Diamond
`

try {
if (/repair/i.test(command)) {
const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
switch (type) {
case 'pickaxe':
if (user.pickaxedurability > 99) return reply('Tools ini belum memiliki kerusakan')
if (user.pickaxe == 0) return reply('Kamu belum memilik ini')
if(user.diamond < 1 || user.rock < 20 || user.wood < 20 || user.iron < 20 ) return reply(`Barang tidak cukup!`)
 user.rock -= 20
 user.wood -= 20
 user.iron -= 20
 user.diamond -= 1
 user.pickaxedurability = 100
reply("Sukses memperbaiki!")
break



case '':
break

default:
return conn.sendButton( m.chat, caption, wm, null, [`⋮☰ Menu`, `.menu`], m)
}
}
} catch (err) {
reply("Error\n\n\n" + err.stack)
}
}
break

case 'referal': {
if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk Memulai Rpg Game Ketik .joinrpg Dan Untuk Keluar Game Ketik .exitrpg')
if (!m.isGroup) return reply(mess.group)

const { randomInt } = require("crypto")
const xp_first_time = 2500
const xp_link_creator = 15000
const xp_bonus = {
5: 40000,
10: 100000,
20: 250000,
50: 1000000,
100: 10000000,
}

let users = db.data.users

if (text) {
  if ('ref_count' in users[m.sender]) return reply('Kamu Sudah Pernah Memakai Kode Referal!')
  let link_creator = (Object.entries(users).find(([, { ref_code }]) => ref_code === text.trim()) || [])[0]
  if (!link_creator) return reply('Kode Referal Tidak Valid!')
  let count = users[link_creator].ref_count++
  let extra = xp_bonus[count] || 0
  users[link_creator].exp += xp_link_creator + extra
  users[m.sender].exp += xp_first_time
  users[m.sender].ref_count = 0
  reply(`Selamat! Kamu Mendapatkan +${xp_first_time} XP`)
  conn.sendMessage(link_creator, {
    text: `Seseorang Telah Menggunakan Kode Referal Kamu\n+${xp_link_creator + extra} XP`
  })
} else {
  let code = users[m.sender].ref_code = users[m.sender].ref_code || new Array(11).fill().map(() => [...'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'][randomInt(62)]).join('')
  users[m.sender].ref_count = users[m.sender].ref_count || 0
  let command_text = `${command}ref ${code}`
  let custom_message = `Halo! Coba RPG Bot Ini Yuk!\nGunakan Kode Referal Aku: *${code}*\n\nKetik Di Chat Bot:\n${command_text}`
  let share_link = `https://wa.me/?text=${encodeURIComponent(custom_message)}`

  reply(`Dapatkan ${xp_link_creator} XP Untuk Setiap Pengguna Baru Yang Menggunakan Kode Referal Kamu
${users[m.sender].ref_count} Orang Telah Menggunakan Kode Referal Kamu

Kode Referal Kamu: *${code}*

Bagikan Link Ini Ke Teman:\n${share_link}

${Object.entries(xp_bonus).map(([count, xp]) => `${count} Orang = Bonus ${xp} XP`).join('\n')}`)
}
}
break


case 'petstore': 
case 'petshop': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return reply(mess.group)
let type = (args[0] || '').toLowerCase()
let _type = (args[0] || '').toLowerCase()
let user = db.data.users[m.sender]
db.data.users[m.sender].pickaxe = db.data.users[m.sender].pickaxe || 0
db.data.users[m.sender].pedang = db.data.users[m.sender].pedang || 0
db.data.users[m.sender].fishingrod = db.data.users[m.sender].fishingrod || 0

//----------HARGA
let hdog = 2
let hcat = 2
let hhorse = 4
let hfox = 6
let hrobo = 10

let hlion = 10
let hrhinoceros = 10
let hdragon = 10
let hcentaur = 10
let hkyubi = 10
let hgriffin = 10
let hphonix = 10
let hwolf = 10

let logo = `— *P E T S T O R E* —
▮▧▧▧▧▧▧▧▧▧▧▧▧▮`
let caption = `
🐈 *Cat:* ${hcat} 🔖
🐕 *Dog:* ${hdog} 🔖
🐎 *Horse:* ${hhorse} 🔖
🦊 *Fox:* ${hfox} 🔖
🤖 *Robo:* ${hrobo} 🔖

〉 Ingin Beli? Check out:
.petshop cat
.petshop fox
.petshop dog
and more! 🐾
`

try {
if (/petshop/i.test(command)) {
const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
switch (type) {
case 'cat':
if (user.cat > 0) return reply('Kamu sudah memilik ini')
if(user.pet < hcat) return reply(`Pet Token anda kurang`)
db.data.users[m.sender].pet -= hcat
db.data.users[m.sender].cat += 1
reply("Selamat anda mempunyai pet Baru ! 🎉")
break

case 'dog':
if (user.dog > 0) return reply('Kamu sudah memilik ini')
if(user.pet < hdog) return reply(`Pet Token anda kurang`)
db.data.users[m.sender].pet -= hdog
db.data.users[m.sender].dog += 1
reply("Selamat anda mempunyai pet Baru ! 🎉")
break

case 'fox':
if (user.fox > 0) return reply('Kamu sudah memilik ini')
if(user.pet < hfox) return reply(`Pet Token anda kurang`)
db.data.users[m.sender].pet -= hfox
db.data.users[m.sender].fox += 1
reply("Selamat anda mempunyai pet Baru ! 🎉")
break

case 'horse':
if (user.horse > 0) return reply('Kamu sudah memilik ini')
if(user.pet < hhorse) return reply(`Pet Token anda kurang`)
db.data.users[m.sender].pet -= hhorse
db.data.users[m.sender].horse += 1
reply("Selamat anda mempunyai pet Baru ! 🎉")
break

case 'robo':
if (user.robo > 0) return reply('Kamu sudah memilik ini')
if(user.pet < hrobo) return reply(`Pet Token anda kurang`)
db.data.users[m.sender].pet -= hrobo
db.data.users[m.sender].robo += 1
reply("Selamat anda mempunyai pet Baru ! 🎉")
break

case 'lion':
if (user.lion > 0) return reply('Kamu sudah memilik ini')
if(user.pet < hlion) return reply(`Pet Token anda kurang`)
db.data.users[m.sender].pet -= hlion
db.data.users[m.sender].lion += 1
reply("Selamat anda mempunyai pet Baru ! 🎉")
break

case 'rhinoceros':
if (user.rhinoceros > 0) return reply('Kamu sudah memilik ini')
if(user.pet < hrhinoceros) return reply(`Pet Token anda kurang`)
db.data.users[m.sender].pet -= hrhinoceros
db.data.users[m.sender].rhinoceros += 1
reply("Selamat anda mempunyai pet Baru ! 🎉")
break

case 'dragon':
if (user.dragon > 0) return reply('Kamu sudah memilik ini')
if(user.pet < hdragon) return reply(`Pet Token anda kurang`)
db.data.users[m.sender].pet -= hdragon
db.data.users[m.sender].dragon += 1
reply("Selamat anda mempunyai pet Baru ! 🎉")
break

case 'centaur':
if (user.centaur > 0) return reply('Kamu sudah memilik ini')
if(user.pet < hcentaur) return reply(`Pet Token anda kurang`)
db.data.users[m.sender].pet -= hcentaur
db.data.users[m.sender].centaur += 1
reply("Selamat anda mempunyai pet Baru ! 🎉")
break

case 'kyubi':
if (user.kyubi > 0) return reply('Kamu sudah memilik ini')
if(user.pet < hkyubi) return reply(`Pet Token anda kurang`)
db.data.users[m.sender].pet -= hkyubi
db.data.users[m.sender].kyubi += 1
reply("Selamat anda mempunyai pet Baru ! 🎉")
break

case 'griffin':
if (user.griffin > 0) return reply('Kamu sudah memilik ini')
if(user.pet < hgriffin) return reply(`Pet Token anda kurang`)
db.data.users[m.sender].pet -= hgriffin
db.data.users[m.sender].griffin += 1
reply("Selamat anda mempunyai pet Baru ! 🎉")
break

case 'phonix':
if (user.phonix > 0) return reply('Kamu sudah memilik ini')
if(user.pet < hphonix) return reply(`Pet Token anda kurang`)
db.data.users[m.sender].pet -= hphonix
db.data.users[m.sender].phonix += 1
reply("Selamat anda mempunyai pet Baru ! 🎉")
break

case 'wolf':
if (user.wolf > 0) return reply('Kamu sudah memilik ini')
if(user.pet < hwolf) return reply(`Pet Token anda kurang`)
db.data.users[m.sender].pet -= hwolf
db.data.users[m.sender].wolf += 1
reply("Selamat anda mempunyai pet Baru ! 🎉")
break

default:
return await reply(`${logo}\n${caption}`)
}
} else if (/enchant|enchan/i.test(command)) {
const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
switch (_type) {
case 't':
break

case '':
break

default:
return reply(`${logo}\n${caption}`)
}
}
} catch (err) {
reply("Error\n\n\n" + err.stack)
}
}
break

case 'kolam': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return reply(mess.group)
let user = db.data.users[m.sender]
let past = `
╭━━━━「 *BIO* 」 
┊ *💌 Name :* ${user.registered ? user.name : conn.getName(m.sender)}
┊ *📊 Level :* ${user.level}
┊ *✨ Exp :* ${user.exp}
╰═┅═━––––––─ׄ✧

╭━━━━「 *ISI* 」
┊🦀 Kepiting: ${user.kepiting}
┊🦞 Lobster: ${user.lobster}
┊🦐 Udang: ${user.udang}
┊🦑 Cumi: ${user.cumi}
┊🐙 Gurita: ${user.gurita}
┊🐡 Buntal: ${user.buntal}
┊🐠 Dory: ${user.dory}
┊🐳 Orca: ${user.orca}
┊🐬 Lumba: ${user.lumba}
┊🐋 Paus: ${user.paus}
┊🦈 Hiu: ${user.hiu}
╰═┅═━––––––─ׄ✧
🎏 Total Isi: *${user.kepiting + user.lobster + user.udang + user.cumi + user.gurita + user.buntal + user.dory + user.orca + user.lumba + user.paus + user.hiu}* Jenis`
reply(past)
}
break

case 'koboy': {
if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk Memulai Ketik .joinrpg');
if (!m.isGroup) return reply(mess.group)
function random(arr) {
return arr[Math.floor(Math.random() * arr.length)]
}
try {
conn.tembak = conn.tembak || { musuh: [], tembak: [] }
if (/kiri/i.test(text)) {
let kiri = [
["🤠", "-", "-", "-", "-"],
["-", "🤠", "-", "-", "-"],
["-", "-", "🤠", "-", "-"],
["-", "-", "-", "🤠", "-"],
["-", "-", "-", "-", "🤠"]
]
let posisi = conn.tembak.tembak.indexOf("🤠")
if (posisi == 0 || posisi == 1) conn.tembak.tembak = kiri[0]
else if (posisi == 2) conn.tembak.tembak = kiri[1]
else if (posisi == 3) conn.tembak.tembak = kiri[2]
else if (posisi == 4) conn.tembak.tembak = kiri[3]
let pos = conn.tembak.musuh.join(" ") + "\n\n\n" + conn.tembak.tembak.join(" ")
return reply(pos)
} else if (/kanan/i.test(text)) {
let kanan = [
["🤠", "-", "-", "-", "-"],
["-", "🤠", "-", "-", "-"],
["-", "-", "🤠", "-", "-"],
["-", "-", "-", "🤠", "-"],
["-", "-", "-", "-", "🤠"]
]
let posisi = conn.tembak.tembak.indexOf("🤠")
if (posisi == 0) conn.tembak.tembak = kanan[1]
else if (posisi == 1) conn.tembak.tembak = kanan[2]
else if (posisi == 2) conn.tembak.tembak = kanan[3]
else if (posisi == 3 || posisi == 4) conn.tembak.tembak = kanan[4]
let pos = conn.tembak.musuh.join(" ") + "\n\n\n" + conn.tembak.tembak.join(" ")
return reply(pos)
} else if (/tembak/i.test(text)) {
if (conn.tembak.tembak.indexOf("🤠") == conn.tembak.musuh.indexOf("🥷")) {
conn.tembak = {}
db.data.users[m.sender].money += 1000
return reply("Kamu Menang!\n\nUang += 1000")
} else {
return reply("Tembakanmu Meleset!")
}
} else {
let randMusuh = [
["🥷", "-", "-", "-", "-"],
["-", "🥷", "-", "-", "-"],
["-", "-", "🥷", "-", "-"],
["-", "-", "-", "🥷", "-"],
["-", "-", "-", "-", "🥷"]
]
let randAku = [
["🤠", "-", "-", "-", "-"],
["-", "🤠", "-", "-", "-"],
["-", "-", "🤠", "-", "-"],
["-", "-", "-", "🤠", "-"],
["-", "-", "-", "-", "🤠"]
]
let musuh = random(randMusuh)
let aku = random(randAku)
conn.tembak.musuh = musuh
conn.tembak.tembak = aku
let pos = musuh.join(" ") + "\n\n\n" + aku.join(" ")
return reply(pos)
}
} catch (err) {
console.log('Error Game Koboy:', err)
reply('Terjadi Kesalahan Saat Menjalankan Game.')
}
}
break


case 'pasar': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return reply(mess.group)
const Skepiting = 7000
const Slobster = 7000
const Sudang = 7000
const Scumi = 7000
const Sgurita = 7000
const Sbuntal = 7000
const Sdory = 7000
const Sorca = 7000
const Slumba = 7000
const Spaus = 7000
const Sikan = 7000
const Shiu = 7000
const Sbanteng = 9000
const Sharimau = 9000
const Sgajah = 9000
const Skambing = 9000
const Spanda = 9000
const Sbuaya = 9000
const Skerbau = 9000
const Ssapi= 9000
const Smonyet = 9000
const Sbabihutan = 9000
const Sbabi = 9000
const Sayam = 9000
const Sbotol = 100
const Skardus = 100
const Skaleng = 100
const Sgelas = 100
const Splastik = 100

const _armor = db.data.users[m.sender].armor
const armor = (_armor == 0 ? 20000 : '' || _armor == 1 ? 49999 : '' || _armor == 2 ? 99999 : '' || _armor == 3 ? 149999 : '' || _armor == 4 ? 299999 : '')
let type = (args[0] || '').toLowerCase()
let _type = (args[1] || '').toLowerCase()
let jualbeli = (args[0] || '').toLowerCase()
const Kchat = `╍╌╌╍╌╌╍╌╌╍╌╌┅═━––––––๑
*🛒 Hewan Laut | 💲 Harga Jual*\n═┅═━––––––━––––––๑
🦀 Kepiting: ${Skepiting}
🦞 Lobster: ${Slobster}
🦐 Udang: ${Sudang}
🦑 Cumi: ${Scumi}
🐙 Gurita: ${Sgurita}
🐡 Buntal: ${Sbuntal}
🐠 Dory: ${Sdory}
🐳 Orca: ${Sorca}
🐬 Lumba: ${Slumba}
🐋 Paus: ${Spaus}
🦈 Hiu: ${Shiu}
╍╌╌╍╌╌╍╌╌╍╌╌┅═━––––––๑
*🛒 Hewan Darat | 💲 Harga Jual*\n═┅═━––––––━––––––๑
🐃 Banteng: ${Sbanteng}
🐅 Harimau: ${Sharimau}
🐘 Gajah: ${Sgajah}
🐐 Kambing: ${Skambing}
🐼 Panda: ${Spanda}
🐃 Kerbau: ${Skerbau}
🐊 Buaya: ${Sbuaya}
🐂 Sapi: ${Ssapi}
🐒 Monyet: ${Smonyet}
🐗 Babi Hutan: ${Sbabihutan}
🐖 Babi: ${Sbabi}
🐔 Ayam: ${Sayam}
╍╌╌╍╌╌╍╌╌╍╌╌┅═━––––––๑
📌 *Contoh penggunaan :*\n═┅═━––––––━––––––๑
#pasar jual ayam [Jumlah]
`.trim()
try {
if (/pasar|toko/i.test(command)) {
const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
const sampah = db.data.users[m.sender].sampah
switch (jualbeli) {

case 'jual': 
switch (_type) {
 case 'banteng':
if (db.data.users[m.sender].banteng >= count * 1) {
db.data.users[m.sender].money += Spaus * count
db.data.users[m.sender].banteng -= count * 1
reply( `Sukses Menjual ${count} Banteng Dengan Harga ${Sbanteng * count} Money `.trim())
} else reply( `Banteng Kamu Tidak Cukup`.trim())
break

case 'harimau':
if (db.data.users[m.sender].harimau >= count * 1) {
db.data.users[m.sender].money += Sharimau * count
db.data.users[m.sender].harimau -= count * 1
reply( `Sukses Menjual ${count} Harimau Dengan Harga ${Sharimau * count} Money `.trim())
} else reply( `Harimau Kamu Tidak Cukup`.trim())
break

case 'gajah':
if (db.data.users[m.sender].gajah >= count * 1) {
db.data.users[m.sender].money += Sgajah * count
db.data.users[m.sender].gajah -= count * 1
reply( `Sukses Menjual ${count} Gajah Dengan Harga ${Sgajah * count} Money `.trim())
} else reply( `Gajah Kamu Tidak Cukup`.trim())
break

case 'kambing':
if (db.data.users[m.sender].kambing >= count * 1) {
db.data.users[m.sender].money += Skambing * count
db.data.users[m.sender].kambing -= count * 1
reply( `Sukses Menjual ${count} Kambing Dengan Harga ${Skambing * count} Money `.trim())
} else reply( `Kambing Kamu Tidak Cukup`.trim())
break

case 'panda':
if (db.data.users[m.sender].panda >= count * 1) {
db.data.users[m.sender].money += Spanda * count
db.data.users[m.sender].panda -= count * 1
reply( `Sukses Menjual ${count} Panda Dengan Harga ${Sbuaya * count} Money `.trim())
} else reply( `Panda Kamu Tidak Cukup`.trim())
break

case 'buaya':
if (db.data.users[m.sender].buaya >= count * 1) {
db.data.users[m.sender].money += Sbuaya * count
db.data.users[m.sender].buaya -= count * 1
reply( `Sukses Menjual ${count} Buaya Dengan Harga ${Sbuaya * count} Money `.trim())
} else reply( `Buaya Kamu Tidak Cukup`.trim())
break

case 'kerbau':
if (db.data.users[m.sender].kerbau >= count * 1) {
db.data.users[m.sender].money += Skerbau * count
db.data.users[m.sender].kerbau -= count * 1
reply( `Sukses Menjual ${count} Kerbau Dengan Harga ${Skerbau * count} Money `.trim())
} else reply( `Kerbau Kamu Tidak Cukup`.trim())
break

case 'sapi':
if (db.data.users[m.sender].sapi >= count * 1) {
db.data.users[m.sender].money += Ssapi * count
db.data.users[m.sender].sapi -= count * 1
reply( `Sukses Menjual ${count} Sapi Dengan Harga ${Ssapi * count} Money `.trim())
} else reply( `Sapi Kamu Tidak Cukup`.trim())
break

case 'monyet':
if (db.data.users[m.sender].monyet >= count * 1) {
db.data.users[m.sender].money += Smonyet * count
db.data.users[m.sender].monyet -= count * 1
reply( `Sukses Menjual ${count} Monyet Dengan Harga ${Smonyet * count} Money `.trim())
} else reply( `Monyet Kamu Tidak Cukup`.trim())
break

case 'babi':
if (db.data.users[m.sender].babi >= count * 1) {
db.data.users[m.sender].money += Skepiting * count
db.data.users[m.sender].babi -= count * 1
reply( `Sukses Menjual ${count} Babi Dengan Harga ${Sbabi * count} Money `.trim())
} else reply( `Babi Kamu Tidak Cukup`.trim())
break

case 'babihutan':
if (db.data.users[m.sender].babihutan >= count * 1) {
db.data.users[m.sender].money += Sbabihutan * count
db.data.users[m.sender].babihutan -= count * 1
reply( `Sukses Menjual ${count} Babi Hutan Dengan Harga ${Sbabihutan * count} Money `.trim())
} else reply( `Babi Hutan Kamu Tidak Cukup`.trim())
break

case 'ayam':
if (db.data.users[m.sender].ayam >= count * 1) {
db.data.users[m.sender].money += Sayam * count
db.data.users[m.sender].ayam -= count * 1
reply( `Sukses Menjual ${count} Ayam Dengan Harga ${Sayam * count} Money `.trim())
} else reply( `Ayam Kamu Tidak Cukup`.trim())
break
//mancing
case 'kepiting':
if (db.data.users[m.sender].kepiting >= count * 1) {
db.data.users[m.sender].money += Skepiting * count
db.data.users[m.sender].kepiting -= count * 1
reply( `Sukses Menjual ${count} Kepiting Dengan Harga ${Skepiting * count} Money `.trim())
} else reply( `Kepiting Kamu Tidak Cukup`.trim())
break

case 'ikan':
if (db.data.users[m.sender].ikan >= count * 1) {
db.data.users[m.sender].money += Skepiting * count
db.data.users[m.sender].ikan -= count * 1
reply( `Sukses Menjual ${count} Ikan Dengan Harga ${Sikan * count} Money `.trim())
} else reply( `Ikan Kamu Tidak Cukup`.trim())
break

case 'dory':
if (db.data.users[m.sender].dory >= count * 1) {
db.data.users[m.sender].money += Sdory * count
db.data.users[m.sender].dory -= count * 1
reply( `Sukses Menjual ${count} Ikan Dory Dengan Harga ${Sdory * count} Money `.trim())
} else reply( `Ikan Dory Kamu Tidak Cukup`.trim())
break

case 'gurita':
if (db.data.users[m.sender].gurita >= count * 1) {
db.data.users[m.sender].money += Skepiting * count
db.data.users[m.sender].gurita -= count * 1
reply( `Sukses Menjual ${count} Gurita Dengan Harga ${Sgurita * count} Money `.trim())
} else reply( `Gurita Kamu Tidak Cukup`.trim())
break

case 'buntal':
if (db.data.users[m.sender].buntal >= count * 1) {
db.data.users[m.sender].money += Sbuntal * count
db.data.users[m.sender].buntal -= count * 1
reply( `Sukses Menjual ${count} Ikan Buntal Dengan Harga ${Sbuntal * count} Money `.trim())
} else reply( `Ikan Buntal Kamu Tidak Cukup`.trim())
break

case 'hiu':
if (db.data.users[m.sender].hiu >= count * 1) {
db.data.users[m.sender].money += Shiu * count
db.data.users[m.sender].hiu -= count * 1
reply( `Sukses Menjual ${count} Hiu Dengan Harga ${Shiu * count} Money `.trim())
} else reply( `Hiu Kamu Tidak Cukup`.trim())
break

case 'orca':
if (db.data.users[m.sender].orca >= count * 1) {
db.data.users[m.sender].money += Sorca * count
db.data.users[m.sender].orca -= count * 1
reply( `Sukses Menjual ${count} Paus Orca Dengan Harga ${Sorca * count} Money `.trim())
} else reply( `Paus Orca Kamu Tidak Cukup`.trim())
break

case 'lumba':
if (db.data.users[m.sender].lumba >= count * 1) {
db.data.users[m.sender].money += Skepiting * count
db.data.users[m.sender].lumba -= count * 1
reply( `Sukses Menjual ${count} Lumba Lumba Dengan Harga ${Slumba * count} Money `.trim())
} else reply( `Lumba Lumba Kamu Tidak Cukup`.trim())
break

case 'paus':
if (db.data.users[m.sender].paus >= count * 1) {
db.data.users[m.sender].money += Spaus * count
db.data.users[m.sender].paus -= count * 1
reply( `Sukses Menjual ${count} Paus Dengan Harga ${Spaus * count} Money `.trim())
} else reply( `Paus Kamu Tidak Cukup`.trim())
break

case 'lobster':
if (db.data.users[m.sender].lobster >= count * 1) {
db.data.users[m.sender].money += Slobster * count
db.data.users[m.sender].lobster -= count * 1
reply( `Sukses Menjual ${count} Lobster Dengan Harga ${Slobster * count} Money `.trim())
} else reply( `Lobster Kamu Tidak Cukup`.trim())
break
 case 'udang':
if (db.data.users[m.sender].udang >= count * 1) {
db.data.users[m.sender].money += Sudang * count
db.data.users[m.sender].udang -= count * 1
reply( `Sukses Menjual ${count} Udang Dengan Harga ${Sudang * count} Money `.trim())
} else reply( `Udang Kamu Tidak Cukup`.trim())
break

case 'cumi':
if (db.data.users[m.sender].cumi >= count * 1) {
db.data.users[m.sender].money += Scumi * count
db.data.users[m.sender].cumi -= count * 1
reply( `Sukses Menjual ${count} Cumi Dengan Harga ${Scumi * count} Money `.trim())
} else reply( `Cumi Kamu Tidak Cukup`.trim())
 break

case 'botol':
if (db.data.users[m.sender].botol >= count * 1) {
db.data.users[m.sender].money += Sbotol * count
db.data.users[m.sender].botol -= count * 1
reply( `Sukses Menjual ${count} Cumi Dengan Harga ${Sbotol * count} Money `.trim())
} else reply( `Botol Kamu Tidak Cukup`.trim())
break

case 'kaleng':
if (db.data.users[m.sender].kaleng >= count * 1) {
db.data.users[m.sender].money += Skaleng * count
db.data.users[m.sender].kaleng -= count * 1
reply( `Sukses Menjual ${count} Kaleng Dengan Harga ${Skaleng * count} Money `.trim())
} else reply( `Kaleng Kamu Tidak Cukup`.trim())
break

case 'kardus':
if (db.data.users[m.sender].kardus >= count * 1) {
db.data.users[m.sender].money += Skardus * count
db.data.users[m.sender].kardus -= count * 1
reply( `Sukses Menjual ${count} Kardus Dengan Harga ${Skardus * count} Money `.trim())
} else reply( `Kardus Kamu Tidak Cukup`.trim())
break

case 'gelas':
if (db.data.users[m.sender].gelas >= count * 1) {
db.data.users[m.sender].money += Sgelas * count
db.data.users[m.sender].gelas -= count * 1
reply( `Sukses Menjual ${count} Gelas Dengan Harga ${Sgelas * count} Money `.trim())
} else reply( `Gelas Kamu Tidak Cukup`.trim())
break

case 'plastik':
if (db.data.users[m.sender].plastik >= count * 1) {
db.data.users[m.sender].money += Splastik * count
db.data.users[m.sender].plastik -= count * 1
reply( `Sukses Menjual ${count} Plastik Dengan Harga ${Splastik * count} Money `.trim())
} else reply( `Plastik Kamu Tidak Cukup`.trim())
break
default:
return reply(Kchat)
}
break
default:
return reply(Kchat)
}

} else if (/sell|jual|/i.test(command)) {
const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
switch (type) { 
 case 'banteng':
if (db.data.users[m.sender].banteng >= count * 1) {
db.data.users[m.sender].money += Spaus * count
db.data.users[m.sender].banteng -= count * 1
reply( `Sukses Menjual ${count} Banteng Dengan Harga ${Sbanteng * count} Money `.trim())
} else reply( `Banteng Kamu Tidak Cukup`.trim())
break

case 'harimau':
if (db.data.users[m.sender].harimau >= count * 1) {
db.data.users[m.sender].money += Sharimau * count
db.data.users[m.sender].harimau -= count * 1
reply( `Sukses Menjual ${count} Harimau Dengan Harga ${Sharimau * count} Money `.trim())
} else reply( `Harimau Kamu Tidak Cukup`.trim())
break

case 'gajah':
if (db.data.users[m.sender].gajah >= count * 1) {
db.data.users[m.sender].money += Sgajah * count
db.data.users[m.sender].gajah -= count * 1
reply( `Sukses Menjual ${count} Gajah Dengan Harga ${Sgajah * count} Money `.trim())
} else reply( `Gajah Kamu Tidak Cukup`.trim())
break

case 'kambing':
if (db.data.users[m.sender].kambing >= count * 1) {
db.data.users[m.sender].money += Skambing * count
db.data.users[m.sender].kambing -= count * 1
reply( `Sukses Menjual ${count} Kambing Dengan Harga ${Skambing * count} Money `.trim())
} else reply( `Kambing Kamu Tidak Cukup`.trim())
break

case 'panda':
if (db.data.users[m.sender].panda >= count * 1) {
db.data.users[m.sender].money += Spanda * count
db.data.users[m.sender].panda -= count * 1
reply( `Sukses Menjual ${count} Panda Dengan Harga ${Sbuaya * count} Money `.trim())
} else reply( `Panda Kamu Tidak Cukup`.trim())
break

case 'buaya':
if (db.data.users[m.sender].buaya >= count * 1) {
db.data.users[m.sender].money += Sbuaya * count
db.data.users[m.sender].buaya -= count * 1
reply( `Sukses Menjual ${count} Buaya Dengan Harga ${Sbuaya * count} Money `.trim())
} else reply( `Buaya Kamu Tidak Cukup`.trim())
break

case 'kerbau':
if (db.data.users[m.sender].kerbau >= count * 1) {
db.data.users[m.sender].money += Skerbau * count
db.data.users[m.sender].kerbau -= count * 1
reply( `Sukses Menjual ${count} Kerbau Dengan Harga ${Skerbau * count} Money `.trim())
} else reply( `Kerbau Kamu Tidak Cukup`.trim())
break

case 'sapi':
if (db.data.users[m.sender].sapi >= count * 1) {
db.data.users[m.sender].money += Ssapi * count
db.data.users[m.sender].sapi -= count * 1
reply( `Sukses Menjual ${count} Sapi Dengan Harga ${Ssapi * count} Money `.trim())
} else reply( `Sapi Kamu Tidak Cukup`.trim())
break

case 'monyet':
if (db.data.users[m.sender].monyet >= count * 1) {
db.data.users[m.sender].money += Smonyet * count
db.data.users[m.sender].monyet -= count * 1
reply( `Sukses Menjual ${count} Monyet Dengan Harga ${Smonyet * count} Money `.trim())
} else reply( `Monyet Kamu Tidak Cukup`.trim())
break

case 'babi':
if (db.data.users[m.sender].babi >= count * 1) {
db.data.users[m.sender].money += Sbabi * count
db.data.users[m.sender].babi -= count * 1
reply( `Sukses Menjual ${count} Babi Dengan Harga ${Sbabi * count} Money `.trim())
} else reply( `Babi Kamu Tidak Cukup`.trim())
break

case 'babihutan':
if (db.data.users[m.sender].babihutan >= count * 1) {
db.data.users[m.sender].money += Sbabihutan * count
db.data.users[m.sender].babihutan -= count * 1
reply( `Sukses Menjual ${count} Babi Hutan Dengan Harga ${Sbabihutan * count} Money `.trim())
} else reply( `Babi Hutan Kamu Tidak Cukup`.trim())
break

case 'ayam':
if (db.data.users[m.sender].ayam >= count * 1) {
db.data.users[m.sender].money += Sayam * count
db.data.users[m.sender].ayam -= count * 1
reply( `Sukses Menjual ${count} Ayam Dengan Harga ${Sayam * count} Money `.trim())
} else reply( `Ayam Kamu Tidak Cukup`.trim())
break
//mancing
case 'kepiting':
if (db.data.users[m.sender].kepiting >= count * 1) {
db.data.users[m.sender].money += Skepiting * count
db.data.users[m.sender].kepiting -= count * 1
reply( `Sukses Menjual ${count} Kepiting Dengan Harga ${Skepiting * count} Money `.trim())
} else reply( `Kepiting Kamu Tidak Cukup`.trim())
break

case 'ikan':
if (db.data.users[m.sender].ikan >= count * 1) {
db.data.users[m.sender].money += Skepiting * count
db.data.users[m.sender].ikan -= count * 1
reply( `Sukses Menjual ${count} Ikan Dengan Harga ${Sikan * count} Money `.trim())
} else reply( `Ikan Kamu Tidak Cukup`.trim())
break

case 'dory':
if (db.data.users[m.sender].dory >= count * 1) {
db.data.users[m.sender].money += Sdory * count
db.data.users[m.sender].dory -= count * 1
reply( `Sukses Menjual ${count} Ikan Dory Dengan Harga ${Sdory * count} Money `.trim())
} else reply( `Ikan Dory Kamu Tidak Cukup`.trim())
break

case 'gurita':
if (db.data.users[m.sender].gurita >= count * 1) {
db.data.users[m.sender].money += Skepiting * count
db.data.users[m.sender].gurita -= count * 1
reply( `Sukses Menjual ${count} Gurita Dengan Harga ${Sgurita * count} Money `.trim())
} else reply( `Gurita Kamu Tidak Cukup`.trim())
break

case 'buntal':
if (db.data.users[m.sender].buntal >= count * 1) {
db.data.users[m.sender].money += Sbuntal * count
db.data.users[m.sender].buntal -= count * 1
reply( `Sukses Menjual ${count} Ikan Buntal Dengan Harga ${Sbuntal * count} Money `.trim())
} else reply( `Ikan Buntal Kamu Tidak Cukup`.trim())
break

case 'hiu':
if (db.data.users[m.sender].hiu >= count * 1) {
db.data.users[m.sender].money += Shiu * count
db.data.users[m.sender].hiu -= count * 1
reply( `Sukses Menjual ${count} Hiu Dengan Harga ${Shiu * count} Money `.trim())
} else reply( `Hiu Kamu Tidak Cukup`.trim())
break

case 'orca':
if (db.data.users[m.sender].orca >= count * 1) {
db.data.users[m.sender].money += Sorca * count
db.data.users[m.sender].orca -= count * 1
reply( `Sukses Menjual ${count} Paus Orca Dengan Harga ${Sorca * count} Money `.trim())
} else reply( `Paus Orca Kamu Tidak Cukup`.trim())
break

case 'lumba':
if (db.data.users[m.sender].lumba >= count * 1) {
db.data.users[m.sender].money += Skepiting * count
db.data.users[m.sender].lumba -= count * 1
reply( `Sukses Menjual ${count} Lumba Lumba Dengan Harga ${Slumba * count} Money `.trim())
} else reply( `Lumba Lumba Kamu Tidak Cukup`.trim())
break

case 'paus':
if (db.data.users[m.sender].paus >= count * 1) {
db.data.users[m.sender].money += Spaus * count
db.data.users[m.sender].paus -= count * 1
reply( `Sukses Menjual ${count} Paus Dengan Harga ${Spaus * count} Money `.trim())
} else reply( `Paus Kamu Tidak Cukup`.trim())
break

case 'lobster':
if (db.data.users[m.sender].lobster >= count * 1) {
db.data.users[m.sender].money += Slobster * count
db.data.users[m.sender].lobster -= count * 1
reply( `Sukses Menjual ${count} Lobster Dengan Harga ${Slobster * count} Money `.trim())
} else reply( `Lobster Kamu Tidak Cukup`.trim())
break
 case 'udang':
if (db.data.users[m.sender].udang >= count * 1) {
db.data.users[m.sender].money += Sudang * count
db.data.users[m.sender].udang -= count * 1
reply( `Sukses Menjual ${count} Udang Dengan Harga ${Sudang * count} Money `.trim())
} else reply( `Udang Kamu Tidak Cukup`.trim())
break

case 'cumi':
if (db.data.users[m.sender].cumi >= count * 1) {
db.data.users[m.sender].money += Scumi * count
db.data.users[m.sender].cumi -= count * 1
reply( `Sukses Menjual ${count} Cumi Dengan Harga ${Scumi * count} Money `.trim())
} else reply( `Cumi Kamu Tidak Cukup`.trim())
 break

case 'botol':
if (db.data.users[m.sender].botol >= count * 1) {
db.data.users[m.sender].money += Sbotol * count
db.data.users[m.sender].botol -= count * 1
reply( `Sukses Menjual ${count} Botol Dengan Harga ${Sbotol * count} Money `.trim())
} else reply( `Botol Kamu Tidak Cukup`.trim())
break 
case 'kaleng':
if (db.data.users[m.sender].kaleng >= count * 1) {
db.data.users[m.sender].money += Skaleng * count
db.data.users[m.sender].kaleng -= count * 1
reply( `Sukses Menjual ${count} Kaleng Dengan Harga ${Skaleng * count} Money `.trim())
} else reply( `Kaleng Kamu Tidak Cukup`.trim())
break

case 'kardus':
if (db.data.users[m.sender].kardus >= count * 1) {
db.data.users[m.sender].money += Skardus * count
db.data.users[m.sender].kardus -= count * 1
reply( `Sukses Menjual ${count} Kardus Dengan Harga ${Skardus * count} Money `.trim())
} else reply( `Kardus Kamu Tidak Cukup`.trim())
break
 case 'gelas':
if (db.data.users[m.sender].gelas >= count * 1) {
db.data.users[m.sender].money += Sgelas * count
db.data.users[m.sender].gelas -= count * 1
reply( `Sukses Menjual ${count} Gelas Dengan Harga ${Sgelas * count} Money `.trim())
} else reply( `Gelas Kamu Tidak Cukup`.trim())
break

case 'plastik':
if (db.data.users[m.sender].plastik >= count * 1) {
db.data.users[m.sender].money += Splastik * count
db.data.users[m.sender].plastik -= count * 1
reply( `Sukses Menjual ${count} Plastik Dengan Harga ${Splastik * count} Money `.trim())
} else reply( `Plastik Kamu Tidak Cukup`.trim())
break 
default:
return reply(Kchat)
}
}
} catch (err) {
console.log(util.format(err))
let e = String(err)
conn.sendMessage("6285789987714@s.whatsapp.net", { text: "Hello developer, there seems to be an error, please fix it " + util.format(e), 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
}
}
break

case 'ojek': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return reply(mess.group)
function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
let __timers = (new Date - db.data.users[m.sender].lastmisi)
let _timers = (3600000 - __timers)
let order = db.data.users[m.sender].ojekk
let timers = clockString(_timers)
let name = conn.getName(m.sender)
let user = db.data.users[m.sender]
let id = m.sender
let kerja = 'Ojek'
conn.misi = conn.misi ? conn.misi: {}
if (id in conn.misi) {
reply( `Selesaikan Misi ${conn.misi[id][0]} Terlebih Dahulu`)
throw false
}
if (new Date - db.data.users[m.sender].lastmisi > 3600000) {
let randomaku4 = Math.floor(Math.random() * 10)
let randomaku5 = Math.floor(Math.random() * 10)

let rbrb4 = (randomaku4 * 100000)
let rbrb5 = (randomaku5 * 1000)

var dimas = `
🚶⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳🌳 🏘️ 🛵
✔️ Mendapatkan orderan....
`.trim()

var dimas2 = `
🚶🛵⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳🌳 🏘️
➕ Mengantar ke tujuan....
`.trim()

var dimas3 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬛⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛🛵⬛⬛
🏘️🏘️🏘️🏘️🌳🌳 🏘️
➕ Sampai di tujuan....
`.trim()

var dimas4 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬛⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛🛵⬛⬛
🏘️🏘️🏘️🏘️🌳🌳 🏘️ 🚶
➕ 💹Menerima gaji....
`.trim()

var hsl = `
*—[ Hasil Ngojek ${name} ]—*
➕ 💹 Uang = [ ${rbrb4} ]
➕ ✨ Exp = [ ${rbrb5} ]
➕ 😍 Order Selesai = +1
➕ 📥Total Order Sebelumnya : ${order}
`.trim()

user.money += rbrb4
user.exp += rbrb5
user.ojekk += 1

conn.misi[id] = [
kerja,
setTimeout(() => {
delete conn.misi[id]
}, 27000)
]

setTimeout(() => {
reply(hsl)
}, 27000)

setTimeout(() => {
reply(dimas4)
}, 25000)

setTimeout(() => {
reply(dimas3)
}, 20000)

setTimeout(() => {
reply(dimas2)
}, 15000)

setTimeout(() => {
reply(dimas)
}, 10000)

setTimeout(() => {
reply('🔍Mencari pelanggan.....')
}, 0)
user.lastmisi = new Date * 1
} else reply(`Silahkan Menunggu Selama ${timers}, Untuk Menyelesaikan Misi Kembali`)
}
break

case 'maling': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return reply(mess.group)
function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)


hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return hours + " jam " + minutes + " menit " + seconds + " detik"
}
const timeout = 604800000

let user = db.data.users[m.sender]
let time = user.lastmaling + 604800000
if (new Date - user.lastmaling< 604800000) return reply(`📮Anda sudah merampok bank\nTunggu selama ⏲️ ${msToTime(time - new Date())} lagi`)
let money = `${Math.floor(Math.random() * 30000)}`.trim()
let exp = `${Math.floor(Math.random() * 999)}`.trim()
let kardus = `${Math.floor(Math.random() * 1000)}`.trim()
user.money += money * 1
user.exp += exp * 1
user.kardus += kardus * 1
user.lastmaling = new Date * 1
reply(`Selamat kamu mendapatkan : \n💰+${money} Money\📦+${kardus} Kardus\n✨+${exp} Exp`)
setTimeout(() => {
reply(`Yuk waktunya Maling lagi 👋…`)
}, timeout)
}
break

case 'mancing': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return reply(mess.group)
function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
let __timers = (new Date - db.data.users[m.sender].lastmisi)
let _timers = (3600000 - __timers)
let timers = clockString(_timers) 
let name = conn.getName(m.sender)
let user = db.data.users[m.sender]
let id = m.sender
let kerja = 'Memancing'
conn.misi = conn.misi ? conn.misi : {}
if (id in conn.misi) {
reply(`Selesaikan Misi ${conn.misi[id][0]} Terlebih Dahulu`)
throw false
}
if (user.umpan == 0) return reply('Kamu Membutuhkan Umpan 🪱 Untuk Memancing!')
if (user.fishingrod == 0 ) return reply('Kamu Harus Mempunyai Fishingrod 🎣 Terlebih Dahulu Jika Ingin Memancing')
if (new Date - user.lastmisi > 3600000) {
let ikan1 = Math.floor(Math.random() * 5)
let ikan2 = Math.floor(Math.random() * 5)
let ikan3 = Math.floor(Math.random() * 5)
let ikan4 = Math.floor(Math.random() * 5)
let ikan5 = Math.floor(Math.random() * 5)
let ikan6 = Math.floor(Math.random() * 5)
let ikan7 = Math.floor(Math.random() * 5)
let ikan8 = Math.floor(Math.random() * 5)
let ikan9 = Math.floor(Math.random() * 5)
let ikan10 = Math.floor(Math.random() * 5)
let ikan11 = Math.floor(Math.random() * 5)
 
let hsl = ` 
*📮 Hasil tangkapan Mu*
${ikan1 ? `
🦀 Kepiting: ${ikan1}` : ''} ${ikan2 ? `
🦞 Lobster: ${ikan2}` : ''} ${ikan3 ? `
🦐 Udang: ${ikan3}` : ''} ${ikan4 ? `
🦑 Cumi: ${ikan4}` : ''} ${ikan5 ? `
🐙 Gurita: ${ikan5}` : ''} ${ikan6 ? `
🐡 Buntal: ${ikan6}` : ''} ${ikan7 ? `
🐠 Dory: ${ikan7}` : ''} ${ikan8 ? `
🐳 Orca: ${ikan8}` : ''} ${ikan9 ? `
🐬 Lumba: ${ikan9}` : ''} ${ikan10 ? `
🐋 Paus: ${ikan10}` : ''} ${ikan11 ? `
🦈 Hiu: ${ikan11}` : ''}
`.trim()
user.kepiting += ikan1
user.lobster += ikan2
user.udang += ikan3
user.cumi += ikan4
user.gurita += ikan5
user.buntal += ikan6
user.dory += ikan7
user.orca += ikan8
user.lumba += ikan9
user.paus += ikan10
user.hiu += ikan11
user.fishingroddurability -= 10
user.umpan -= 1

conn.misi[id] = [
kerja,
setTimeout(() => {
delete conn.misi[id]
}, 20000)
]

setTimeout(() => {
reply(hsl)
}, 20000)

setTimeout(() => {
reply(`Ini Dia Hasil Tangkapanmu`)
}, 18000)

setTimeout(() => {
reply('Kamu Berhasil Menarik Ikan Keluar Dari Air')
}, 15000)

setTimeout(() => {
reply('Kamu Menarik Kailmu')
}, 12000)

setTimeout(() => {
reply('Kail Mu Di Tarik Ikan...')
}, 9000)

setTimeout(() => {
reply('Kamu Sedang Memancing...')
}, 0)
user.lastmisi = new Date * 1
} else reply(`Mohon Tunggu Selama ${timers} Sebelum Memulai Misi Kembali`)
}
break

case 'nguli': {
if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!m.isGroup) return reply(mess.group)
if (new Date - db.data.users[m.sender].lastnguli > 86400000) {
db.data.users[m.sender].limit += 10
reply('_🎉Selamat kamu mendapatkan +10 limit_')
db.data.users[m.sender].lastnguli = new Date * 1
} else reply('[💬] Anda sudah mengklaim upah nguli hari ini')
}
break
case 'mysterybox': {
  if (!isCreator) return reply(mess.creator) // Hanya Owner yang bisa menjalankan
  let hadiahList = ['money', 'exp', 'limit', 'potion']
  let hadiah = hadiahList[Math.floor(Math.random() * hadiahList.length)]
  let jumlah = Math.floor(Math.random() * 5000) + 1000
  let kode = [...Array(10)].map(() => Math.random().toString(36)[2]).join('').toUpperCase()

  global.db.data.redeem = global.db.data.redeem || {}
  global.db.data.redeem[kode] = {
    hadiah,
    jumlah,
    claimed: [],
    messageId: '' // Menyimpan ID pesan yang dikirim
  }

  let teks = `🎁 *Mystery Box Telah Dijatuhkan!*\n\nKode Redeem: *${kode}*\nHadiah: *${jumlah} ${hadiah}*\nLimit Klaim: 3 Orang\n\nReply Pesan Ini Dengan Ketik .claim Untuk Mengkaliam Hadiah!!!`
  let image = { url: 'https://img12.pixhost.to/images/1565/586300176_6726.jpg' }

  let grup = Object.keys(await conn.groupFetchAllParticipating())
  for (let id of grup) {
    let sentMessage = await conn.sendMessage(id, {
      image,
      caption: teks,
      footer: `Mystery Box Rpg By maourafa`,
    })

    // Simpan ID pesan yang dikirim
    global.db.data.redeem[kode].messageId = sentMessage.key.id
  }

  reply(`Mystery Box Berhasil Dijatuhkan Ke ${grup.length} Grup Dengan Kode: ${kode}`)
}
break

case 'claim': {
  if (!text) return reply('Mana Pesannya?')
  let kode = text.split(' ')[1]
  if (!global.db.data.redeem[kode]) return reply('Kode Redeem Tidak Ditemukan atau Sudah Terklaim!')
  
  let redeem = global.db.data.redeem[kode]
  
  // Cek apakah yang membalas adalah pesan Mystery Box yang dikirimkan sebelumnya
  if (m.message.key.id !== redeem.messageId) return reply('Balas pesan yang berisi Mystery Box untuk klaim!')

  if (redeem.claimed.includes(m.sender)) return reply('Kamu Sudah Mengklaim Kode Ini!')
  if (redeem.claimed.length >= 3) return reply('Limit Klaim Kode Ini Sudah Penuh!')

  // Klaim hadiah
  if (redeem.hadiah === 'money') {
    global.db.data.users[m.sender].money += redeem.jumlah
  } else if (redeem.hadiah === 'exp') {
    global.db.data.users[m.sender].exp += redeem.jumlah
  } else if (redeem.hadiah === 'limit') {
    global.db.data.users[m.sender].limit += redeem.jumlah
  } else if (redeem.hadiah === 'potion') {
    global.db.data.users[m.sender].potion += redeem.jumlah
  }

  // Tandai kode sebagai klaim
  redeem.claimed.push(m.sender)

  reply(`Kamu Telah Berhasil Klaim Hadiah: *${redeem.jumlah} ${redeem.hadiah}* dari Kode Redeem: *${kode}*`)

  // Hapus kode redeem setelah diklaim
  delete global.db.data.redeem[kode]
}
break

case 'jatuhkandrop': {
  if (!isCreator) return reply(mess.creator)
  let hadiahList = ['money', 'exp', 'limit', 'potion']
  let hadiah = hadiahList[Math.floor(Math.random() * hadiahList.length)]
  let jumlah = Math.floor(Math.random() * 5000) + 1000
  let kode = [...Array(10)].map(() => Math.random().toString(36)[2]).join('').toUpperCase()

  global.db.data.redeem = global.db.data.redeem || {}
  global.db.data.redeem[kode] = {
    hadiah,
    jumlah,
    claimed: []
  }

  let teks = `🎁 *Airdrop Telah Dijatuhkan!*\n\nKode Redeem: *${kode}*\nHadiah: *${jumlah} ${hadiah}*\nLimit Klaim: 3 Orang\n\nKlik tombol dibawah untuk klaim!`
  let image = { url: 'https://img12.pixhost.to/images/1521/585467407_6726.jpg' }

  let grup = Object.keys(await conn.groupFetchAllParticipating())
  for (let id of grup) {
    await conn.sendMessage(id, {
      image,
      caption: teks,
      buttons: [
        { buttonId: `.redeem ${kode}`, buttonText: { displayText: 'Klaim Sekarang' }, type: 1 }
      ],
      footer: `Aidrop Rpg By maourafa`, 
    })
  }

  reply(`Airdrop Berhasil Dijatuhkan Ke ${grup.length} Grup Dengan Kode: ${kode}`)
}
break


case 'redeem': {
  if (!text) return reply('Mana Kode Redeem Nya')

  global.db.data.redeem = global.db.data.redeem || {}
  let data = global.db.data.redeem[text.toUpperCase()]
  if (!data) return reply('Kode Redeem Tidak Valid')

  if (data.claimed.includes(m.sender)) return reply('Kamu Sudah Klaim Kode Ini!')
  if (data.claimed.length >= 3) {
    delete global.db.data.redeem[text.toUpperCase()]
    return reply('Kode Redeem Sudah Mencapai Batas Klaim (3 Orang)')
  }

  data.claimed.push(m.sender)
  let hadiah = data.hadiah
  let jumlah = data.jumlah
  let user = db.data.users[m.sender]

  switch(hadiah) {
    case 'money':
      user.money += jumlah
      break
    case 'exp':
      user.exp += jumlah
      break
    case 'limit':
      user.limit += jumlah
      break
    case 'potion':
      user.potion += jumlah
      break
  }

  reply(`Berhasil Klaim Kode Redeem!\n+${jumlah} ${hadiah}`)

  if (data.claimed.length >= 3) delete global.db.data.redeem[text.toUpperCase()]
}
break
case 'listredeem': {
  if (!isCreator) return reply(mess.creator)
  global.db.data.redeem = global.db.data.redeem || {}
  let data = global.db.data.redeem

  let teks = '*List Kode Redeem Yang Masih Aktif:*\n\n'
  let kode = Object.entries(data)
  if (!kode.length) return reply('Tidak Ada Kode Redeem Aktif.')

  for (let [key, val] of kode) {
    teks += `• *Kode:* ${key}\n`
    teks += `• Hadiah: ${val.hadiah} +${val.jumlah}\n`
    teks += `• Diklaim: ${val.claimed.length}/3\n\n`
  }

  reply(teks.trim())
}
break
case 'hapusredeem': {
  if (!isCreator) return reply(mess.creator)
  if (!text) return reply('Ketik .hapusredeem <kode>')
  global.db.data.redeem = global.db.data.redeem || {}
  const data = global.db.data.redeem
  let code = text.trim().toUpperCase()
  if (!data[code]) return reply('Kode Tidak Ditemukan.')
  delete data[code]
  reply(`Berhasil Menghapus Kode: ${code}`)
}
break


// ───────────────────────────────────────────────────────────────────────────────乂 🥀 GAME FEATURE ───────────────────────────────────────────────────────────────乂 \\
case 'tebakgambar':
//if (!m.isGroup) return reply(mess.group)
if (from in tebakgambar2) return reply('Masih ada game yang belum diselesaikan');
var { img, jawaban, deskripsi } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/tebakgambar.json')));
console.log('Jawaban : '+jawaban)
var teks1 = `*GAME TEBAK GAMBAR*\n\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nDeskripsi: ${deskripsi}\nWaktu: ${gamewaktu} detik`
await conn.sendMessage(from, {image: {url: img}, caption: teks1}, {quoted: m})
tebakgambar2[from] = {
soal: img,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakgambar2[from]) reply(`Waktu habis!\nJawabannya adalah: ${tebakgambar2[from].jawaban}`);
delete tebakgambar2[from];
}, gamewaktu * 1000)
}
break
case 'petakbom': case 'bomb': {


if (sender in petakbom) return reply(`Game mu masih belum terselesaikan, lanjutkan yukk\n\n${petakbom[sender].board.join("")}\n\nKirim ${prefix}delpetakbom untuk menghapus game petak bom`);
function shuffle(array) {
return array.sort(() => Math.random() - 0.5);
}
petakbom[sender] = {
petak: shuffle([0, 0, 0, 2, 0, 2, 0, 2, 0, 0]),
board: ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟"],
bomb: 3,
lolos: 7,
pick: 0,
hadiah: randomNomor(5000, 10000),
nyawa: ["❤️", "❤️", "❤️"]
};
await reply(`*PETAK BOM*

${petakbom[sender].board.join("")}

Pilih lah nomor tersebut! dan jangan sampai terkena Bom!
Bomb : ${petakbom[sender].bomb}
Nyawa : ${petakbom[sender].nyawa.join("")}`);
}
break
case 'delpetakbom': case 'delbomb': {

//if (!m.isGroup) return reply(mess.group)

if (!(sender in petakbom)) return reply(`kamu sedang tidak bermain petakbom!`)
delete petakbom[sender];
conn.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})
reply(`Petakbom di akhiri, hadiah Rp. 0`)
}
break
case 'suit': {

if (!m.isGroup) return reply(mess.group)
if (Object.values(suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(sender))) return reply(`Selesaikan suit mu yang sebelumnya`)
let mark = `0@s.whatsapp.net`
if (!froms) return reply(`Siapa yang ingin kamu tantang?\nTag orangnya!\n\nContoh: *${command}* @${mark.split('@')[0]}`)
if (froms === botNumber) return reply(`Tidak bisa bermain dengan bot!`)
if (froms === sender) return reply(`Sad amat main ama diri sendiri`)
if (Object.values(suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(froms))) return reply(`Orang yang kamu tantang sedang bermain suit bersama orang lain :)`)

var hadiah = randomNomor(10, 20)
let poin = 10
let poin_lose = 10
let timeout = 60000
let id = 'suit_' + new Date() * 1
suit[id] = {
chat: await conn.sendText(from, `@${sender.split('@')[0]} menantang @${froms.split('@')[0]} untuk bermain suit\n\n*Kirim (gas/gamau)* untuk bermain\n\nHadiah : ${hadiah} exp`, m),
id: id,
p: sender,
p2: froms,
status: 'wait',
hadiah: hadiah,
waktu: setTimeout(() => {
if (suit[id]) conn.sendMessage(from, {text: `_Waktu suit habis!_` })
delete suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break
case 'tictactoe': case 'ttt': case 'ttc': case 'xox': 
if (!m.isGroup) return reply(mess.group)
if (from in tictactoe) return reply(`Masih ada game yang blum selesai`)
if (!froms) return reply(`Kirim perintah *${command}* @tag atau reply pesan orangnya!`)
if (froms === botNumber) return reply(`Tidak bisa bermain dengan bot!`)
if (froms === sender) return reply(`Sad amat main ama diri sendiri`)

var hadiah = randomNomor(10, 20)
await reply(`@${sender.split('@')[0]} menantang @${froms.split('@')[0]} untuk bermain TicTacToe\n\n*Kirim (Y/N)* untuk bermain\n\nHadiah : ${hadiah} exp`)
tictactoe[from] = {
id: from,
status: null,
hadiah: hadiah,
penantang: sender,
ditantang: froms,
TicTacToe: ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣']
}
break
case 'delttt': case 'delttc': 
if (!m.isGroup) return reply(mess.group)
if (!(from in tictactoe)) return reply(`Tidak ada sesi game tictactoe di grup ini`)
if (isAdmins || isCreator) {
delete tictactoe[from];
reply(`Berhasil menghapus sesi tictactoe di grup ini\n\n-$500`)
} else if (tictactoe[from].penantang.includes(sender)) {
delete tictactoe[from];
reply(`Berhasil menghapus sesi tictactoe di grup ini\n\n-$500`)
} else if (tictactoe[from].ditantang.includes(sender)) {
delete tictactoe[from];
reply(`Berhasil menghapus sesi tictactoe di grup ini\n\n-$500`)
} else {
reply(`Anda tidak bisa menghapus sesi tictactoe karena bukan pemain!`)
}
break

case 'tebakanime': 
//if (!m.isGroup) return reply(mess.group)
if (from in tebakanime) return reply('Masih ada game yang belum diselesaikan');
var { image, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/tebakanime.json')));
console.log('Jawaban : '+jawaban)
var teks1 = `*GAME TEBAK ANIME*\n\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`
await conn.sendMessage(from, {image: {url: image}, caption: teks1}, {quoted: m})
tebakanime[from] = {
soal: image,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakanime[from]) reply(`Waktu habis!\nJawabannya adalah: ${tebakanime[from].jawaban}`);
delete tebakanime[from];
}, gamewaktu * 1000)
}
break
case 'tebaklagu': 
//if (!m.isGroup) return reply(mess.group)

if (from in tebaklagu) return reply('Masih ada game yang belum diselesaikan');
var { soal, artis, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/tebaklagu.json')));
console.log('Jawaban : '+jawaban)
if (jawaban.toLowerCase() == 'audio tidak ditemukan, silahkan request ulang!') return reply('Maaf terjadi kesalahan!')
var teks1 = `*GAME TEBAK LAGU*\n\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nArtist: ${artis}\nWaktu: ${gamewaktu} detik`
await conn.sendMessage(from, {audio: {url: soal}, mimetype: 'audio/mpeg', ptt: true}, {quoted: m}).then(res => {conn.sendText(from, teks1, res)})
tebaklagu[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebaklagu[from]) reply(`Waktu habis\nJawabannya adalah: ${tebaklagu[from].jawaban}`);
delete tebaklagu[from];
}, gamewaktu * 1000)
}
break
case 'kuis': 
//if (!m.isGroup) return reply(mess.group)

if (from in kuis) return reply('Masih ada game yang belum diselesaikan');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/kuis.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME KUIS*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
kuis[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (kuis[from]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete kuis[from];
}, gamewaktu * 1000)
}
break
case 'tebakkalimat': 
//if (!m.isGroup) return reply(mess.group)

if (from in tebakkalimat) return reply('Masih ada game yang belum diselesaikan');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/tebakkalimat.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME TEBAK KALIMAT*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebakkalimat[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakkalimat[from]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebakkalimat[from];
}, gamewaktu * 1000)
}
break
case 'tebakkata': 
//if (!m.isGroup) return reply(mess.group)
if (from in tebakkata) return reply('Masih ada game yang belum diselesaikan');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/tebakkata.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME TEBAK KATA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebakkata[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakkata[from]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebakkata[from];
}, gamewaktu * 1000)
}
break
case 'tebaklirik': 
//if (!m.isGroup) return reply(mess.group)

if (from in tebaklirik) return reply('Masih ada game yang belum diselesaikan');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/tebaklirik.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME TEBAK LIRIK*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebaklirik[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebaklirik[from]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebaklirik[from];
}, gamewaktu * 1000)
}
break
case 'tebakkimia': 
//if (!m.isGroup) return reply(mess.group)
if (from in tebakkimia) return reply('Masih ada game yang belum diselesaikan');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/tebakkimia.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME TEBAK KIMIA*\n\nSoal: ${soal}\nWaktu: ${gamewaktu} detik`)
tebakkimia[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakkimia[from]) reply(`Waktu berakhir :(\nNama unsur dari lambang ${soal}\n\nAdalah: ${monospace(jawaban)}`)
delete tebakkimia[from];
}, gamewaktu * 1000)
}
break
case 'tebakbendera': 
//if (!m.isGroup) return reply(mess.group)

if (from in tebakbendera) return reply('Masih ada game yang belum diselesaikan');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/tebakbendera.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME TEBAK BENDERA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebakbendera[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakbendera[from]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebakbendera[from];
}, gamewaktu * 1000)
}
break
case 'susunkata': 
//if (!m.isGroup) return reply(mess.group)

if (from in susunkata) return reply('Masih ada game yang belum diselesaikan');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/susunkata.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME SUSUN KATA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
susunkata[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (susunkata[from]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete susunkata[from];
}, gamewaktu * 1000)
}
break
case 'asahotak': 
//if (!m.isGroup) return reply(mess.group)

if (from in asahotak) return reply('Masih ada game yang belum diselesaikan');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/asahotak.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME ASAH OTAK*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
asahotak[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (asahotak[from]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete asahotak[from];
}, gamewaktu * 1000)
}
break
case 'siapakahaku': case 'sa': 
//if (!m.isGroup) return reply(mess.group)

if (from in siapakahaku) return reply('Masih ada game yang belum diselesaikan');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/siapakahaku.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME SIAPAKAH AKU*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
siapakahaku[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (siapakahaku[from]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete siapakahaku[from];
}, gamewaktu * 1000)
}
break
case 'caklontong': 
//if (!m.isGroup) return reply(mess.group)

if (from in caklontong) return reply('Masih ada game yang belum diselesaikan');
var { soal, jawaban, deskripsi } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/caklontong.json')));
console.log(`Jawaban : ${jawaban}\n${deskripsi}`)
await reply(`*GAME CAK LONTONG*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
caklontong[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (caklontong[from]) reply(`Waktu habis!\nJawabannya adalah: ${jawaban}\n${deskripsi}`)
delete caklontong[from];
}, gamewaktu * 1000)
}
break
case 'math': case 'kuismath': 
//if (!m.isGroup) return reply(mess.group)

if (from in kuismath) return reply('Masih ada game yang belum diselesaikan!');
let { genMath, modes } = require('./assets/game/math')
if (!q) return reply( `┌─〔 Mode 〕\n├ ${Object.keys(modes).join('\n├ ')}\n└────\ncontoh:\n${prefix}math hard`)
if (!(Object.keys(modes)).includes(args[0])) return reply('Pilih mode yang bener GOBLOK!')
var { soal, jawaban, waktu, hadiah } = await genMath(q.toLowerCase()).catch((err) => reply('```Tolong pilih modenya yang benar contoh .math easy```'))
console.log('Jawaban : '+jawaban)
await reply(`*GAME KUIS MATH*\n\nSoal: Berapa hasil dari ${soal.toLowerCase()}\nWaktu: ${waktu / 1000} detik`)
kuismath[from] = {
soal: soal,
jawaban: jawaban,
hadiah: randomNomor(2000, hadiah),
waktu: setTimeout(function () {
if (kuismath[from]) reply(`Waktu habis!\nJawabannya adalah: ${jawaban}`)
delete kuismath[from];
}, waktu)
}
break
case 'family100': case 'f100': 
//if (!m.isGroup) return reply(mess.group)
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/family100.json')));
console.log('Jawaban : '+jawaban)
let famil = []
for (let i of jawaban){
let fefsh = i.split('/') ? i.split('/')[0] : i
let iuhbs = fefsh.startsWith(' ') ? fefsh.replace(' ','') : fefsh
let axsfh = iuhbs.endsWith(' ') ? iuhbs.replace(iuhbs.slice(-1), '') : iuhbs
famil.push(axsfh.toLowerCase())
}
await reply(`*GAME FAMILY 100*\n\nSoal: ${soal}\nTotal Jawaban: ${jawaban.length}\n\nWaktu: ${gamewaktu} detik`)
family100[from] = {
soal: soal,
jawaban: famil,
hadiah: randomNomor(10, 20),
waktu: setTimeout(async function () {
if (from in family100) {
let teks = `*WAKTU HABIS!*\nJawaban yang belum terjawab :\n\n`
let jwb = family100[from].jawaban
for (let i of jwb){teks += `\n${i}`}
reply(teks)
delete family100[from];
};
}, gamewaktu * 1000)
}

break //Powered By alice & Darwin
 
case 'casino': {

let buatall = 1
    conn.casino = conn.casino ? conn.casino : {}
    if (m.chat in conn.casino) return reply('Masih Ada Yang Melakukan Casino Disini, Tunggu Sampai Selesai!!')
    else conn.casino[m.chat] = true
    try {
        let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
        let randomkamu = `${Math.floor(Math.random() * 81)}`.trim() //hehe Biar Susah Menang :v
        let Aku = (randomaku * 1)
        let Kamu = (randomkamu * 1)
        let count = args[0]
        count = count ? /all/i.test(count) ? Math.floor(users.exp / buatall) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
        count = Math.max(1, count)
        if (args.length < 1) return reply(`${prefix}Casino <jumlah>\n${prefix}Casino 1000`)
        if (users.exp >= count * 1) {
            users.exp -= count * 1
            //await reply('') //Kwkwwkkwlwlw
            if (Aku > Kamu) {
                reply(`💰 Casino 💰\n*Kamu:* ${Kamu} Point\n*Euphyllia:* ${Aku} Point\n\n*Kamu Kalah*\nKamu Kehilangan ${count} Uang`)
            } else if (Aku < Kamu) {
                users.exp += count * 2
                reply(`💰 Casino 💰\n*Kamu:* ${Kamu} Point\n*Euphyllia:* ${Aku} Point\n\n*Kamu Kalah*\nKamu Mendapatkan ${count * 2} uang`)
            } else {
                users.exp += count * 1
                reply(`💰 Casino 💰\n*Kamu:* ${Kamu} Point\n*Euphyllia:* ${Aku} Point\n\n*Seri*\nKamu Mendapatkan ${count * 1} uang`)
            }
        } else reply(`Uang Kamu Tidak Mencukupi Untuk Casino Silahkan *bermain game* Terlebih Dahulu!`)
    } catch (e) {
        console.log(e)
        reply('Error!!')
        } finally {
        delete conn.casino[m.chat]
    }
}
break


// ───────────────────────────────────────────────────────────────────────────────乂 🥀 QUOTES FEATURE ───────────────────────────────────────────────────────────────乂 \\
case 'quotesanime':
case 'quotesanim': {

 let res = await (await fetch('https://katanime.vercel.app/api/getrandom?limit=1'))
 if (!res.ok) return await res.text()
 let json = await res.json()
 if(!json.result[0]) return json
 let { indo, character, anime } = json.result[0]
 reply(`${indo}\n\n📮By: ${character} \nAnime:\n${anime}`)
}
break

case 'quotesbacot': {

function pickRandom(list) {
 return list[Math.floor(list.length * Math.random())]
}

const bacot = [
'Kamu suka kopi nggak? Aku sih suka. Tau kenapa alesannya? Kopi itu ibarat kamu, pahit sih tapi bikin candu jadi pingin terus.',
'Gajian itu kayak mantan ya? Bisanya cuman lewat sebentar saja.',
'Kata pak haji, cowok yang nggak mau pergi Sholat Jumat disuruh pakai rok aja.',
'Kamu tahu mantan nggak? Mantan itu ibarat gajian, biasa numpang lewat dong di kehidupan kita.',
'Aku suka kamu, kamu suka dia, tapi dia sayangnya nggak ke kamu. Wkwkw lucu ya? Cinta serumit ini.',
'Google itu hebat ya? Tapi sayang sehebat-hebatnya Google nggak bisa menemukan jodoh kita.',
'Terlalu sering memegang pensil alis dapat membuat mata menjadi buta, jika dicolok-colokkan ke mata.',
'Saya bekerja keras karena sadar kalau uang nggak punya kaki buat jalan sendiri ke kantong saya.',
'Jika kamu tak mampu meyakinkan dan memukau orang dengan kepintaranmu, bingungkan dia dengan kebodohanmu.',
'Selelah-lelahnya bekerja, lebih lelah lagi kalau nganggur.',
'Kita hidup di masa kalau salah kena marah, pas bener dibilang tumben.',
'Nggak ada bahu pacar? Tenang aja, masih ada bahu jalan buat nyandar.',
'Mencintai dirimu itu wajar, yang gak wajar mencintai bapakmu.',
'Katanya enggak bisa bohong. Iyalah, mata kan cuma bisa melihat.',
'Madu di tangan kananmu, racun di tangan kirimu, jodoh tetap di tangan tuhan.',
'Selingkuh terjadi bukan karena ada niat, selingkuh terjadi karna pacar kamu masih laku.',
'Netizen kalau senam jempol di ponsel nggak pakai pendinginan, pantes komennya bikin panas terus.',
'Jodoh memang enggak kemana, tapi saingannya ada dimana-mana.',
'Perasaan aku salah terus di matamu. Kalu gitu, besok aku pindah ke hidungmu.',
'Jomblo tidak perlu malu, jomblo bukan berarti tidak laku, tapi memang tidak ada yang mau.',
'Jika doamu belum terkabul maka bersabar, ingatlah bahwa yang berdoa bukan cuma kamu!',
'Masih berharap dan terus berharap lama-lama aku jadi juara harapan.',
'Manusia boleh berencana, tapi akhirnya saldo juga yang menentukan.',
'Statusnya rohani, kelakuannya rohalus.',
'Kegagalan bukan suatu keberhasilan.',
'Tadi mau makan bakso, cuma kok panas banget, keliatannya baksonya lagi demam.',
'Aku juga pernah kaya, waktu gajian.',
'Aku diputusin sama pacar karena kita beda keyakinan. Aku yakin kalau aku ganteng, tapi dia enggak.',
'Masa depanmu tergantung pada mimpimu, maka perbanyaklah tidur.',
'Seberat apapun pekerjaanmu, akan semakin ringan jika tidak dibawa.',
'Jangan terlalu berharap! nanti jatuhnya sakit!',
'Ingat! Anda itu jomblo',
'Gak tau mau ngetik apa',
]
 let bacotan = pickRandom(bacot)
 reply(bacotan)
}
break
//=========================================\\======

case 'quotesbucin': {

const bucin = [
 "Aku memilih untuk sendiri, bukan karena menunggu yang sempurna, tetapi butuh yang tak pernah menyerah.",
 "Seorang yang single diciptakan bersama pasangan yang belum ditemukannya.",
 "Jomblo. Mungkin itu cara Tuhan untuk mengatakan 'Istirahatlah dari cinta yang salah'.",
 "Jomblo adalah anak muda yang mendahulukan pengembangan pribadinya untuk cinta yang lebih berkelas nantinya.",
 "Aku bukan mencari seseorang yang sempurna, tapi aku mencari orang yang menjadi sempurna berkat kelebihanku.",
 "Pacar orang adalah jodoh kita yang tertunda.",
 "Jomblo pasti berlalu. Semua ada saatnya, saat semua kesendirian menjadi sebuah kebersamaan dengannya kekasih halal. Bersabarlah.",
 "Romeo rela mati untuk juliet, Jack mati karena menyelamatkan Rose. Intinya, kalau tetap mau hidup, jadilah single.",
 "Aku mencari orang bukan dari kelebihannya tapi aku mencari orang dari ketulusan hatinya.",
 "Jodoh bukan sendal jepit, yang kerap tertukar. Jadi teruslah berada dalam perjuangan yang semestinya.",
 "Kalau kamu jadi senar gitar, aku nggak mau jadi gitarisnya. Karena aku nggak mau mutusin kamu.",
 "Bila mencintaimu adalah ilusi, maka izinkan aku berimajinasi selamanya.",
 "Sayang... Tugas aku hanya mencintaimu, bukan melawan takdir.",
 "Saat aku sedang bersamamu rasanya 1 jam hanya 1 detik, tetapi jika aku jauh darimu rasanya 1 hari menjadi 1 tahun.",
 "Kolak pisang tahu sumedang, walau jarak membentang cintaku takkan pernah hilang.",
 "Aku ingin menjadi satu-satunya, bukan salah satunya.",
 "Aku tidak bisa berjanji untuk menjadi yang baik. Tapi aku berjanji akan selalu mendampingi kamu.",
 "Kalau aku jadi wakil rakyat aku pasti gagal, gimana mau mikirin rakyat kalau yang selalu ada dipikiran aku hanyalah dirimu.",
 "Lihat kebunku, penuh dengan bunga. Lihat matamu, hatiku berbunga-bunga.",
 "Berjanjilah untuk terus bersamaku sekarang, esok, dan selamanya.",
 "Rindu tidak hanya muncul karena jarak yang terpisah. Tapi juga karena keinginan yang tidak terwujud.",
 "Kamu tidak akan pernah jauh dariku, kemanapun aku pergi kamu selalu ada, karena kamu selalu di hatiku, yang jauh hanya raga kita bukan hati kita.",
 "Aku tahu dalam setiap tatapanku, kita terhalang oleh jarak dan waktu. Tapi aku yakin kalau nanti kita pasti bisa bersatu.",
 "Merindukanmu tanpa pernah bertemu sama halnya dengan menciptakan lagu yang tak pernah ternyayikan.",
 "Ada kalanya jarak selalu menjadi penghalang antara aku sama kamu, namun tetap saja di hatiku kita selalu dekat.",
 "Jika hati ini tak mampu membendung segala kerinduan, apa daya tak ada yang bisa aku lakukan selain mendoakanmu.",
 "Mungkin di saat ini aku hanya bisa menahan kerinduan ini. Sampai tiba saatnya nanti aku bisa bertemu dan melepaskan kerinduan ini bersamamu.",
 "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
 "Dalam dinginnya malam, tak kuingat lagi; Berapa sering aku memikirkanmu juga merindukanmu.",
 "Merindukanmu itu seperti hujan yang datang tiba-tiba dan bertahan lama. Dan bahkan setelah hujan reda, rinduku masih terasa.",
 "Sejak mengenalmu bawaannya aku pengen belajar terus, belajar menjadi yang terbaik buat kamu.",
 "Tahu gak perbedaan pensi sama wajah kamu? Kalau pensil tulisannya bisa dihapus, tapi kalau wajah kamu gak akan ada yang bisa hapus dari pikiran aku.",
 "Bukan Ujian Nasional besok yang harus aku khawatirkan, tapi ujian hidup yang aku lalui setelah kamu meninggalkanku.",
 "Satu hal kebahagiaan di sekolah yang terus membuatku semangat adalah bisa melihat senyumanmu setiap hari.",
 "Kamu tahu gak perbedaanya kalau ke sekolah sama ke rumah kamu? Kalo ke sekolah pasti yang di bawa itu buku dan pulpen, tapi kalo ke rumah kamu, aku cukup membawa hati dan cinta.",
 "Aku gak sedih kok kalo besok hari senin, aku sedihnya kalau gak ketemu kamu.",
 "Momen cintaku tegak lurus dengan momen cintamu. Menjadikan cinta kita sebagai titik ekuilibrium yang sempurna.",
 "Aku rela ikut lomba lari keliling dunia, asalkan engkai yang menjadi garis finishnya.",
 "PR-ku adalah merindukanmu. Lebih kuat dari Matematika, lebih luas dari Fisika, lebih kerasa dari Biologi.",
 "Cintaku kepadamu itu bagaikan metabolisme, yang gak akan berhenti sampai mati.",
 "Kalau jelangkungnya kaya kamu, dateng aku jemput, pulang aku anter deh.",
 "Makan apapun aku suka asal sama kamu, termasuk makan ati.",
 "Cinta itu kaya hukuman mati. Kalau nggak ditembak, ya digantung.",
 "Mencintaimu itu kayak narkoba: sekali coba jadi candu, gak dicoba bikin penasaran, ditinggalin bikin sakaw.",
 "Gue paling suka ngemil karena ngemil itu enak. Apalagi ngemilikin kamu sepenuhnya...",
 "Dunia ini cuma milik kita berdua. Yang lainnya cuma ngontrak.",
 "Bagi aku, semua hari itu adalah hari Selasa. Selasa di Surga bila dekat denganmu...",
 "Bagaimana kalau kita berdua jadi komplotan penjahat? Aku curi hatimu dan kamu curi hatiku.",
 "Kamu itu seperti kopi yang aku seruput pagi ini. Pahit, tapi bikin nagih.",
 "Aku sering cemburu sama lipstikmu. Dia bisa nyium kamu tiap hari, dari pagi sampai malam.",
 "Hanya mendengar namamu saja sudah bisa membuatku tersenyum seperti orang bodoh.",
 "Aku tau teman wanitamu bukan hanya satu, dan menyukaimu pun bukan hanya aku.",
 "Semenjak aku berhenti berharap pada dirimu, aku jadi tidak semangat dalam segala hal..",
 "Denganmu, jatuh cinta adalah patah hati paling sengaja.",
 "Sangat sulit merasakan kebahagiaan hidup tanpa kehadiran kamu disisiku.",
 "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
 "Sendainya kamu tahu, sampai saat ini aku masih mencintaimu.",
 "Terkadang aku iri sama layangan..talinya putus saja masih dikejar kejar dan gak rela direbut orang lain...",
 "Aku tidak tahu apa itu cinta, sampai akhirnya aku bertemu denganmu. Tapi, saat itu juga aku tahu rasanya patah hati.",
 "Mengejar itu capek, tapi lebih capek lagi menunggu\nMenunggu kamu menyadari keberadaanku...",
 "Jangan berhenti mencinta hanya karena pernah terluka. Karena tak ada pelangi tanpa hujan, tak ada cinta sejati tanpa tangisan.",
 "Aku punya sejuta alasan unutk melupakanmu, tapi tak ada yang bisa memaksaku untuk berhenti mencintaimu.",
 "Terkadang seseorang terasa sangat bodoh hanya untuk mencintai seseorang.",
 "Kamu adalah patah hati terbaik yang gak pernah aku sesali.",
 "Bukannya tak pantas ditunggu, hanya saja sering memberi harapan palsu.",
 "Sebagian diriku merasa sakit, Mengingat dirinya yang sangat dekat, tapi tak tersentuh.",
 "Hal yang terbaik dalam mencintai seseorang adalah dengan diam-diam mendo akannya.",
 "Kuharap aku bisa menghilangkan perasaan ini secepat aku kehilanganmu.",
 "Demi cinta kita menipu diri sendiri. Berusaha kuat nyatanya jatuh secara tak terhormat.",
 "Anggaplah aku rumahmu, jika kamu pergi kamu mengerti kemana arah pulang. Menetaplah bila kamu mau dan pergilah jika kamu bosan...",
 "Aku bingung, apakah aku harus kecewa atu tidak? Jika aku kecewa, emang siapa diriku baginya?\n\nKalau aku tidak kecewa, tapi aku menunggu ucapannya.",
 "Rinduku seperti ranting yang tetap berdiri.Meski tak satupun lagi dedaunan yang menemani, sampai akhirnya mengering, patah, dan mati.",
 "Kurasa kita sekarang hanya dua orang asing yang memiliki kenangan yang sama.",
 "Buatlah aku bisa membencimu walau hanya beberapa menit, agar tidak terlalu berat untuk melupakanmu.",
 "Aku mencintaimu dengan segenap hatiku, tapi kau malah membagi perasaanmu dengan orang lain.",
 "Mencintaimu mungkin menghancurkanku, tapi entah bagaimana meninggalkanmu tidak memperbaikiku.",
 "Kamu adalah yang utama dan pertama dalam hidupku. Tapi, aku adalah yang kedua bagimu.",
 "Jika kita hanya bisa dipertemukan dalam mimpi, aku ingin tidur selamanya.",
 "Melihatmu bahagia adalah kebahagiaanku, walaupun bahagiamu tanpa bersamaku.",
 "Aku terkadang iri dengan sebuah benda. Tidak memiliki rasa namun selalu dibutuhkan. Berbeda dengan aku yang memiliki rasa, namun ditinggalkan dan diabaikan...",
 "Bagaimana mungkin aku berpindah jika hanya padamu hatiku bersinggah?",
 "Kenangan tentangmu sudah seperti rumah bagiku. Sehingga setiap kali pikiranku melayang, pasti ujung-ujungnya akan selalu kembali kepadamu.",
 "Kenapa tisue bermanfaat? Karena cinta tak pernah kemarau. - Sujiwo Tejo",
 "Kalau mencintaimu adalah kesalahan, yasudah, biar aku salah terus saja.",
 "Sejak kenal kamu, aku jadi pengen belajar terus deh. Belajar jadi yang terbaik buat kamu.",
 "Ada yang bertingkah bodoh hanya untuk melihatmu tersenyum. Dan dia merasa bahagia akan hal itu.",
 "Aku bukan orang baik, tapi akan belajar jadi yang terbaik untuk kamu.",
 "Kita tidak mati, tapi lukanya yang membuat kita tidak bisa berjalan seperti dulu lagi.",
 "keberadaanmu bagaikan secangkir kopi yang aku butuhkan setiap pagi, yang dapat mendorongku untuk tetap bersemangat menjalani hari.",
 "Aku mau banget ngasih dunia ke kamu. Tapi karena itu nggak mungkin, maka aku akan kasih hal yang paling penting dalam hidupku, yaitu duniaku.",
 "Mending sing humoris tapi manis, ketimbang sok romantis tapi akhire tragis.",
 "Ben akhire ora kecewa, dewe kudu ngerti kapan waktune berharap lan kapan kudu mandeg.",
 "Aku ki wong Jowo seng ora ngerti artine 'I Love U'. Tapi aku ngertine mek 'Aku tresno awakmu'.",
 "Ora perlu ayu lan sugihmu, aku cukup mok setiani wes seneng ra karuan.",
 "Cintaku nang awakmu iku koyok kamera, fokus nang awakmu tok liyane mah ngeblur.",
 "Saben dino kegowo ngimpi tapi ora biso nduweni.",
 "Ora ketemu koe 30 dino rasane koyo sewulan.",
 "Aku tanpamu bagaikan sego kucing ilang karete. Ambyar.",
 "Pengenku, Aku iso muter wektu. Supoyo aku iso nemokne kowe lewih gasik. Ben Lewih dowo wektuku kanggo urip bareng sliramu.",
 "Aku ora pernah ngerti opo kui tresno, kajaba sak bare ketemu karo sliramu.",
 "Cinta aa ka neng moal leungit-leungit sanajan aa geus kawin deui.",
 "Kasabaran kaula aya batasna, tapi cinta kaula ka anjeun henteu aya se epna.",
 "Kanyaah akang moal luntur najan make Bayclean.",
 "Kenangan endah keur babarengan jeung anjeun ek tuluy diinget-inget nepi ka poho.",
 "Kuring moal bakal tiasa hirup sorangan, butuh bantosan jalmi sejen.",
 "Nyaahna aa ka neg teh jiga tukang bank keur nagih hutang (hayoh mumuntil).",
 "Kasabaran urang aya batasna, tapi cinta urang ka maneh moal aya beakna.",
 "Hayang rasana kuring ngarangkai kabeh kata cinta anu aya di dunya ieu, terus bade ku kuring kumpulkeun, supaya anjeun nyaho gede pisan rasa cinta kuring ka anjeun.",
 "Tenang wae neng, ari cinta Akang mah sapertos tembang krispatih; Tak lekang oleh waktu.",
 "Abdi sanes jalmi nu sampurna pikeun anjeun, sareng sanes oge nu paling alus kanggo anjeun. Tapi nu pasti, abdi jalmi hiji-hijina nu terus emut ka anjeun.",
 "Cukup jaringan aja yang hilang, kamu jangan.",
 "Sering sih dibikin makan ati. Tapi menyadari kamu masih di sini bikin bahagia lagi.",
 "Musuhku adalah mereka yang ingin memilikimu juga.",
 "Banyak yang selalu ada, tapi kalo cuma kamu yang aku mau, gimana?",
 "Jam tidurku hancur dirusak rindu.",
 "Cukup China aja yang jauh, cinta kita jangan.",
 "Yang penting itu kebahagiaan kamu, aku sih gak penting..",
 "Cuma satu keinginanku, dicintai olehmu..",
 "Aku tanpamu bagaikan ambulans tanpa wiuw wiuw wiuw.",
 "Cukup antartika aja yang jauh. Antarkita jangan."
]
const conntruth = bucin[Math.floor(Math.random() * bucin.length)]
	reply(`${conntruth}`)
}
break

case 'quotesmotivasi': {

function pickRandom(list) {
 return list[Math.floor(list.length * Math.random())]
}

const motivasi = [
"ᴊᴀɴɢᴀɴ ʙɪᴄᴀʀᴀ, ʙᴇʀᴛɪɴᴅᴀᴋ ꜱᴀᴊᴀ. ᴊᴀɴɢᴀɴ ᴋᴀᴛᴀᴋᴀɴ, ᴛᴜɴᴊᴜᴋᴋᴀɴ ꜱᴀᴊᴀ. ᴊᴀɴɢᴀɴ ᴊᴀɴᴊɪ, ʙᴜᴋᴛɪᴋᴀɴ ꜱᴀᴊᴀ.",
"ᴊᴀɴɢᴀɴ ᴘᴇʀɴᴀʜ ʙᴇʀʜᴇɴᴛɪ ᴍᴇʟᴀᴋᴜᴋᴀɴ ʏᴀɴɢ ᴛᴇʀʙᴀɪᴋ ʜᴀɴʏᴀ ᴋᴀʀᴇɴᴀ ꜱᴇꜱᴇᴏʀᴀɴɢ ᴛɪᴅᴀᴋ ᴍᴇᴍʙᴇʀɪ ᴀɴᴅᴀ ᴘᴇɴɢʜᴀʀɢᴀᴀɴ.",
"ʙᴇᴋᴇʀᴊᴀ ꜱᴀᴀᴛ ᴍᴇʀᴇᴋᴀ ᴛɪᴅᴜʀ. ʙᴇʟᴀᴊᴀʀ ꜱᴀᴀᴛ ᴍᴇʀᴇᴋᴀ ʙᴇʀᴘᴇꜱᴛᴀ. ʜᴇᴍᴀᴛ ꜱᴇᴍᴇɴᴛᴀʀᴀ ᴍᴇʀᴇᴋᴀ ᴍᴇɴɢʜᴀʙɪꜱᴋᴀɴ. ʜɪᴅᴜᴘʟᴀʜ ꜱᴇᴘᴇʀᴛɪ ᴍɪᴍᴘɪ ᴍᴇʀᴇᴋᴀ.",
"ᴋᴜɴᴄɪ ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇᴍᴜꜱᴀᴛᴋᴀɴ ᴘɪᴋɪʀᴀɴ ꜱᴀᴅᴀʀ ᴋɪᴛᴀ ᴘᴀᴅᴀ ʜᴀʟ-ʜᴀʟ ʏᴀɴɢ ᴋɪᴛᴀ ɪɴɢɪɴᴋᴀɴ, ʙᴜᴋᴀɴ ʜᴀʟ-ʜᴀʟ ʏᴀɴɢ ᴋɪᴛᴀ ᴛᴀᴋᴜᴛɪ.",
"ᴊᴀɴɢᴀɴ ᴛᴀᴋᴜᴛ ɢᴀɢᴀʟ. ᴋᴇᴛᴀᴋᴜᴛᴀɴ ʙᴇʀᴀᴅᴀ ᴅɪ ᴛᴇᴍᴘᴀᴛ ʏᴀɴɢ ꜱᴀᴍᴀ ᴛᴀʜᴜɴ ᴅᴇᴘᴀɴ ꜱᴇᴘᴇʀᴛɪ ᴀɴᴅᴀ ꜱᴀᴀᴛ ɪɴɪ.",
"ᴊɪᴋᴀ ᴋɪᴛᴀ ᴛᴇʀᴜꜱ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋɪᴛᴀ ʟᴀᴋᴜᴋᴀɴ, ᴋɪᴛᴀ ᴀᴋᴀɴ ᴛᴇʀᴜꜱ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋɪᴛᴀ ᴅᴀᴘᴀᴛᴋᴀɴ.",
"ᴊɪᴋᴀ ᴀɴᴅᴀ ᴛɪᴅᴀᴋ ᴅᴀᴘᴀᴛ ᴍᴇɴɢᴀᴛᴀꜱɪ ꜱᴛʀᴇꜱ, ᴀɴᴅᴀ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴍᴇɴɢᴇʟᴏʟᴀ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ.",
"ʙᴇʀꜱɪᴋᴀᴘ ᴋᴇʀᴀꜱ ᴋᴇᴘᴀʟᴀ ᴛᴇɴᴛᴀɴɢ ᴛᴜᴊᴜᴀɴ ᴀɴᴅᴀ ᴅᴀɴ ꜰʟᴇᴋꜱɪʙᴇʟ ᴛᴇɴᴛᴀɴɢ ᴍᴇᴛᴏᴅᴇ ᴀɴᴅᴀ.",
"ᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱ ᴍᴇɴɢᴀʟᴀʜᴋᴀɴ ʙᴀᴋᴀᴛ ᴋᴇᴛɪᴋᴀ ʙᴀᴋᴀᴛ ᴛɪᴅᴀᴋ ʙᴇᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱ.",
"ɪɴɢᴀᴛʟᴀʜ ʙᴀʜᴡᴀ ᴘᴇʟᴀᴊᴀʀᴀɴ ᴛᴇʀʙᴇꜱᴀʀ ᴅᴀʟᴀᴍ ʜɪᴅᴜᴘ ʙɪᴀꜱᴀɴʏᴀ ᴅɪᴘᴇʟᴀᴊᴀʀɪ ᴅᴀʀɪ ꜱᴀᴀᴛ-ꜱᴀᴀᴛ ᴛᴇʀʙᴜʀᴜᴋ ᴅᴀɴ ᴅᴀʀɪ ᴋᴇꜱᴀʟᴀʜᴀɴ ᴛᴇʀʙᴜʀᴜᴋ.",
"ʜɪᴅᴜᴘ ʙᴜᴋᴀɴ ᴛᴇɴᴛᴀɴɢ ᴍᴇɴᴜɴɢɢᴜ ʙᴀᴅᴀɪ ʙᴇʀʟᴀʟᴜ, ᴛᴇᴛᴀᴘɪ ʙᴇʟᴀᴊᴀʀ ᴍᴇɴᴀʀɪ ᴅɪ ᴛᴇɴɢᴀʜ ʜᴜᴊᴀɴ.",
"ᴊɪᴋᴀ ʀᴇɴᴄᴀɴᴀɴʏᴀ ᴛɪᴅᴀᴋ ʙᴇʀʜᴀꜱɪʟ, ᴜʙᴀʜ ʀᴇɴᴄᴀɴᴀɴʏᴀ ʙᴜᴋᴀɴ ᴛᴜᴊᴜᴀɴɴʏᴀ.",
"ᴊᴀɴɢᴀɴ ᴛᴀᴋᴜᴛ ᴋᴀʟᴀᴜ ʜɪᴅᴜᴘᴍᴜ ᴀᴋᴀɴ ʙᴇʀᴀᴋʜɪʀ; ᴛᴀᴋᴜᴛʟᴀʜ ᴋᴀʟᴀᴜ ʜɪᴅᴜᴘᴍᴜ ᴛᴀᴋ ᴘᴇʀɴᴀʜ ᴅɪᴍᴜʟᴀɪ.",
"ᴏʀᴀɴɢ ʏᴀɴɢ ʙᴇɴᴀʀ-ʙᴇɴᴀʀ ʜᴇʙᴀᴛ ᴀᴅᴀʟᴀʜ ᴏʀᴀɴɢ ʏᴀɴɢ ᴍᴇᴍʙᴜᴀᴛ ꜱᴇᴛɪᴀᴘ ᴏʀᴀɴɢ ᴍᴇʀᴀꜱᴀ ʜᴇʙᴀᴛ.",
"ᴘᴇɴɢᴀʟᴀᴍᴀɴ ᴀᴅᴀʟᴀʜ ɢᴜʀᴜ ʏᴀɴɢ ʙᴇʀᴀᴛ ᴋᴀʀᴇɴᴀ ᴅɪᴀ ᴍᴇᴍʙᴇʀɪᴋᴀɴ ᴛᴇꜱ ᴛᴇʀʟᴇʙɪʜ ᴅᴀʜᴜʟᴜ, ᴋᴇᴍᴜᴅɪᴀɴ ᴘᴇʟᴀᴊᴀʀᴀɴɴʏᴀ.",
"ᴍᴇɴɢᴇᴛᴀʜᴜɪ ꜱᴇʙᴇʀᴀᴘᴀ ʙᴀɴʏᴀᴋ ʏᴀɴɢ ᴘᴇʀʟᴜ ᴅɪᴋᴇᴛᴀʜᴜɪ ᴀᴅᴀʟᴀʜ ᴀᴡᴀʟ ᴅᴀʀɪ ʙᴇʟᴀᴊᴀʀ ᴜɴᴛᴜᴋ ʜɪᴅᴜᴘ.",
"ꜱᴜᴋꜱᴇꜱ ʙᴜᴋᴀɴʟᴀʜ ᴀᴋʜɪʀ, ᴋᴇɢᴀɢᴀʟᴀɴ ᴛɪᴅᴀᴋ ꜰᴀᴛᴀʟ. ʏᴀɴɢ ᴛᴇʀᴘᴇɴᴛɪɴɢ ᴀᴅᴀʟᴀʜ ᴋᴇʙᴇʀᴀɴɪᴀɴ ᴜɴᴛᴜᴋ ᴍᴇʟᴀɴᴊᴜᴛᴋᴀɴ.",
"ʟᴇʙɪʜ ʙᴀɪᴋ ɢᴀɢᴀʟ ᴅᴀʟᴀᴍ ᴏʀɪꜱɪɴᴀʟɪᴛᴀꜱ ᴅᴀʀɪᴘᴀᴅᴀ ʙᴇʀʜᴀꜱɪʟ ᴍᴇɴɪʀᴜ.",
"ʙᴇʀᴀɴɪ ʙᴇʀᴍɪᴍᴘɪ, ᴛᴀᴘɪ ʏᴀɴɢ ʟᴇʙɪʜ ᴘᴇɴᴛɪɴɢ, ʙᴇʀᴀɴɪ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴛɪɴᴅᴀᴋᴀɴ ᴅɪ ʙᴀʟɪᴋ ɪᴍᴘɪᴀɴᴍᴜ.",
"ᴛᴇᴛᴀᴘᴋᴀɴ ᴛᴜᴊᴜᴀɴ ᴀɴᴅᴀ ᴛɪɴɢɢɪ-ᴛɪɴɢɢɪ, ᴅᴀɴ ᴊᴀɴɢᴀɴ ʙᴇʀʜᴇɴᴛɪ ꜱᴀᴍᴘᴀɪ ᴀɴᴅᴀ ᴍᴇɴᴄᴀᴘᴀɪɴʏᴀ.",
"ᴋᴇᴍʙᴀɴɢᴋᴀɴ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ ᴅᴀʀɪ ᴋᴇɢᴀɢᴀʟᴀɴ. ᴋᴇᴘᴜᴛᴜꜱᴀꜱᴀᴀɴ ᴅᴀɴ ᴋᴇɢᴀɢᴀʟᴀɴ ᴀᴅᴀʟᴀʜ ᴅᴜᴀ ʙᴀᴛᴜ ʟᴏɴᴄᴀᴛᴀɴ ᴘᴀʟɪɴɢ ᴘᴀꜱᴛɪ ᴍᴇɴᴜᴊᴜ ꜱᴜᴋꜱᴇꜱ.",
"ᴊᴇɴɪᴜꜱ ᴀᴅᴀʟᴀʜ ꜱᴀᴛᴜ ᴘᴇʀꜱᴇɴ ɪɴꜱᴘɪʀᴀꜱɪ ᴅᴀɴ ꜱᴇᴍʙɪʟᴀɴ ᴘᴜʟᴜʜ ꜱᴇᴍʙɪʟᴀɴ ᴘᴇʀꜱᴇɴ ᴋᴇʀɪɴɢᴀᴛ.",
"ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴛᴇᴍᴘᴀᴛ ᴘᴇʀꜱɪᴀᴘᴀɴ ᴅᴀɴ ᴋᴇꜱᴇᴍᴘᴀᴛᴀɴ ʙᴇʀᴛᴇᴍᴜ.",
"ᴋᴇᴛᴇᴋᴜɴᴀɴ ɢᴀɢᴀʟ 19 ᴋᴀʟɪ ᴅᴀɴ ʙᴇʀʜᴀꜱɪʟ ᴘᴀᴅᴀ ᴋᴇꜱᴇᴍᴘᴀᴛᴀᴍ ʏᴀɴɢ ᴋᴇ-20.",
"ᴊᴀʟᴀɴ ᴍᴇɴᴜᴊᴜ ꜱᴜᴋꜱᴇꜱ ᴅᴀɴ ᴊᴀʟᴀɴ ᴍᴇɴᴜᴊᴜ ᴋᴇɢᴀɢᴀʟᴀɴ ʜᴀᴍᴘɪʀ ᴘᴇʀꜱɪꜱ ꜱᴀᴍᴀ.",
"ꜱᴜᴋꜱᴇꜱ ʙɪᴀꜱᴀɴʏᴀ ᴅᴀᴛᴀɴɢ ᴋᴇᴘᴀᴅᴀ ᴍᴇʀᴇᴋᴀ ʏᴀɴɢ ᴛᴇʀʟᴀʟᴜ ꜱɪʙᴜᴋ ᴍᴇɴᴄᴀʀɪɴʏᴀ.",
"ᴊᴀɴɢᴀɴ ᴛᴜɴᴅᴀ ᴘᴇᴋᴇʀᴊᴀᴀɴᴍᴜ ꜱᴀᴍᴘᴀɪ ʙᴇꜱᴏᴋ, ꜱᴇᴍᴇɴᴛᴀʀᴀ ᴋᴀᴜ ʙɪꜱᴀ ᴍᴇɴɢᴇʀᴊᴀᴋᴀɴɴʏᴀ ʜᴀʀɪ ɪɴɪ.",
"20 ᴛᴀʜᴜɴ ᴅᴀʀɪ ꜱᴇᴋᴀʀᴀɴɢ, ᴋᴀᴜ ᴍᴜɴɢᴋɪɴ ʟᴇʙɪʜ ᴋᴇᴄᴇᴡᴀ ᴅᴇɴɢᴀɴ ʜᴀʟ-ʜᴀʟ ʏᴀɴɢ ᴛɪᴅᴀᴋ ꜱᴇᴍᴘᴀᴛ ᴋᴀᴜ ʟᴀᴋᴜᴋᴀɴ ᴀʟɪʜ-ᴀʟɪʜ ʏᴀɴɢ ꜱᴜᴅᴀʜ.",
"ᴊᴀɴɢᴀɴ ʜᴀʙɪꜱᴋᴀɴ ᴡᴀᴋᴛᴜᴍᴜ ᴍᴇᴍᴜᴋᴜʟɪ ᴛᴇᴍʙᴏᴋ ᴅᴀɴ ʙᴇʀʜᴀʀᴀᴘ ʙɪꜱᴀ ᴍᴇɴɢᴜʙᴀʜɴʏᴀ ᴍᴇɴᴊᴀᴅɪ ᴘɪɴᴛᴜ.",
"ᴋᴇꜱᴇᴍᴘᴀᴛᴀɴ ɪᴛᴜ ᴍɪʀɪᴘ ꜱᴇᴘᴇʀᴛɪ ᴍᴀᴛᴀʜᴀʀɪ ᴛᴇʀʙɪᴛ. ᴋᴀʟᴀᴜ ᴋᴀᴜ ᴍᴇɴᴜɴɢɢᴜ ᴛᴇʀʟᴀʟᴜ ʟᴀᴍᴀ, ᴋᴀᴜ ʙɪꜱᴀ ᴍᴇʟᴇᴡᴀᴛᴋᴀɴɴʏᴀ.",
"ʜɪᴅᴜᴘ ɪɴɪ ᴛᴇʀᴅɪʀɪ ᴅᴀʀɪ 10 ᴘᴇʀꜱᴇɴ ᴀᴘᴀ ʏᴀɴɢ ᴛᴇʀᴊᴀᴅɪ ᴘᴀᴅᴀᴍᴜ ᴅᴀɴ 90 ᴘᴇʀꜱᴇɴ ʙᴀɢᴀɪᴍᴀɴᴀ ᴄᴀʀᴀᴍᴜ ᴍᴇɴʏɪᴋᴀᴘɪɴʏᴀ.",
"ᴀᴅᴀ ᴛɪɢᴀ ᴄᴀʀᴀ ᴜɴᴛᴜᴋ ᴍᴇɴᴄᴀᴘᴀɪ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ ᴛᴇʀᴛɪɴɢɢɪ: ᴄᴀʀᴀ ᴘᴇʀᴛᴀᴍᴀ ᴀᴅᴀʟᴀʜ ʙᴇʀꜱɪᴋᴀᴘ ʙᴀɪᴋ. ᴄᴀʀᴀ ᴋᴇᴅᴜᴀ ᴀᴅᴀʟᴀʜ ʙᴇʀꜱɪᴋᴀᴘ ʙᴀɪᴋ. ᴄᴀʀᴀ ᴋᴇᴛɪɢᴀ ᴀᴅᴀʟᴀʜ ᴍᴇɴᴊᴀᴅɪ ʙᴀɪᴋ.",
"ᴀʟᴀꜱᴀɴ ɴᴏᴍᴏʀ ꜱᴀᴛᴜ ᴏʀᴀɴɢ ɢᴀɢᴀʟ ᴅᴀʟᴀᴍ ʜɪᴅᴜᴘ ᴀᴅᴀʟᴀʜ ᴋᴀʀᴇɴᴀ ᴍᴇʀᴇᴋᴀ ᴍᴇɴᴅᴇɴɢᴀʀᴋᴀɴ ᴛᴇᴍᴀɴ, ᴋᴇʟᴜᴀʀɢᴀ, ᴅᴀɴ ᴛᴇᴛᴀɴɢɢᴀ ᴍᴇʀᴇᴋᴀ.",
"ᴡᴀᴋᴛᴜ ʟᴇʙɪʜ ʙᴇʀʜᴀʀɢᴀ ᴅᴀʀɪᴘᴀᴅᴀ ᴜᴀɴɢ. ᴋᴀᴍᴜ ʙɪꜱᴀ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ʟᴇʙɪʜ ʙᴀɴʏᴀᴋ ᴜᴀɴɢ, ᴛᴇᴛᴀᴘɪ ᴋᴀᴍᴜ ᴛɪᴅᴀᴋ ʙɪꜱᴀ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ʟᴇʙɪʜ ʙᴀɴʏᴀᴋ ᴡᴀᴋᴛᴜ.",
"ᴘᴇɴᴇᴛᴀᴘᴀɴ ᴛᴜᴊᴜᴀɴ ᴀᴅᴀʟᴀʜ ʀᴀʜᴀꜱɪᴀ ᴍᴀꜱᴀ ᴅᴇᴘᴀɴ ʏᴀɴɢ ᴍᴇɴᴀʀɪᴋ.",
"ꜱᴀᴀᴛ ᴋɪᴛᴀ ʙᴇʀᴜꜱᴀʜᴀ ᴜɴᴛᴜᴋ ᴍᴇɴᴊᴀᴅɪ ʟᴇʙɪʜ ʙᴀɪᴋ ᴅᴀʀɪ ᴋɪᴛᴀ, ꜱᴇɢᴀʟᴀ ꜱᴇꜱᴜᴀᴛᴜ ᴅɪ ꜱᴇᴋɪᴛᴀʀ ᴋɪᴛᴀ ᴊᴜɢᴀ ᴍᴇɴᴊᴀᴅɪ ʟᴇʙɪʜ ʙᴀɪᴋ.",
"ᴘᴇʀᴛᴜᴍʙᴜʜᴀɴ ᴅɪᴍᴜʟᴀɪ ᴋᴇᴛɪᴋᴀ ᴋɪᴛᴀ ᴍᴜʟᴀɪ ᴍᴇɴᴇʀɪᴍᴀ ᴋᴇʟᴇᴍᴀʜᴀɴ ᴋɪᴛᴀ ꜱᴇɴᴅɪʀɪ.",
"ᴊᴀɴɢᴀɴʟᴀʜ ᴘᴇʀɴᴀʜ ᴍᴇɴʏᴇʀᴀʜ ᴋᴇᴛɪᴋᴀ ᴀɴᴅᴀ ᴍᴀꜱɪʜ ᴍᴀᴍᴘᴜ ʙᴇʀᴜꜱᴀʜᴀ ʟᴀɢɪ. ᴛɪᴅᴀᴋ ᴀᴅᴀ ᴋᴀᴛᴀ ʙᴇʀᴀᴋʜɪʀ ꜱᴀᴍᴘᴀɪ ᴀɴᴅᴀ ʙᴇʀʜᴇɴᴛɪ ᴍᴇɴᴄᴏʙᴀ.",
"ᴋᴇᴍᴀᴜᴀɴ ᴀᴅᴀʟᴀʜ ᴋᴜɴᴄɪ ꜱᴜᴋꜱᴇꜱ. ᴏʀᴀɴɢ-ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ, ʙᴇʀᴜꜱᴀʜᴀ ᴋᴇʀᴀꜱ ᴀᴘᴀ ᴘᴜɴ ʏᴀɴɢ ᴍᴇʀᴇᴋᴀ ʀᴀꜱᴀᴋᴀɴ ᴅᴇɴɢᴀɴ ᴍᴇɴᴇʀᴀᴘᴋᴀɴ ᴋᴇɪɴɢɪɴᴀɴ ᴍᴇʀᴇᴋᴀ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴛᴀꜱɪ ꜱɪᴋᴀᴘ ᴀᴘᴀᴛɪꜱ, ᴋᴇʀᴀɢᴜᴀɴ ᴀᴛᴀᴜ ᴋᴇᴛᴀᴋᴜᴛᴀɴ.",
"ᴊᴀɴɢᴀɴʟᴀʜ ᴘᴇʀɴᴀʜ ᴍᴇɴʏᴇʀᴀʜ ᴋᴇᴛɪᴋᴀ ᴀɴᴅᴀ ᴍᴀꜱɪʜ ᴍᴀᴍᴘᴜ ʙᴇʀᴜꜱᴀʜᴀ ʟᴀɢɪ. ᴛɪᴅᴀᴋ ᴀᴅᴀ ᴋᴀᴛᴀ ʙᴇʀᴀᴋʜɪʀ ꜱᴀᴍᴘᴀɪ ᴀɴᴅᴀ ʙᴇʀʜᴇɴᴛɪ ᴍᴇɴᴄᴏʙᴀ.",
"ᴋᴇᴍᴀᴜᴀɴ ᴀᴅᴀʟᴀʜ ᴋᴜɴᴄɪ ꜱᴜᴋꜱᴇꜱ. ᴏʀᴀɴɢ-ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ, ʙᴇʀᴜꜱᴀʜᴀ ᴋᴇʀᴀꜱ ᴀᴘᴀ ᴘᴜɴ ʏᴀɴɢ ᴍᴇʀᴇᴋᴀ ʀᴀꜱᴀᴋᴀɴ ᴅᴇɴɢᴀɴ ᴍᴇɴᴇʀᴀᴘᴋᴀɴ ᴋᴇɪɴɢɪɴᴀɴ ᴍᴇʀᴇᴋᴀ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴛᴀꜱɪ ꜱɪᴋᴀᴘ ᴀᴘᴀᴛɪꜱ, ᴋᴇʀᴀɢᴜᴀɴ ᴀᴛᴀᴜ ᴋᴇᴛᴀᴋᴜᴛᴀɴ.",
"ʜᴀʟ ᴘᴇʀᴛᴀᴍᴀ ʏᴀɴɢ ᴅɪʟᴀᴋᴜᴋᴀɴ ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇᴍᴀɴᴅᴀɴɢ ᴋᴇɢᴀɢᴀʟᴀɴ ꜱᴇʙᴀɢᴀɪ ꜱɪɴʏᴀʟ ᴘᴏꜱɪᴛɪꜰ ᴜɴᴛᴜᴋ ꜱᴜᴋꜱᴇꜱ.",
"ᴄɪʀɪ ᴋʜᴀꜱ ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇʀᴇᴋᴀ ꜱᴇʟᴀʟᴜ ʙᴇʀᴜꜱᴀʜᴀ ᴋᴇʀᴀꜱ ᴜɴᴛᴜᴋ ᴍᴇᴍᴘᴇʟᴀᴊᴀʀɪ ʜᴀʟ-ʜᴀʟ ʙᴀʀᴜ.",
"ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋᴀᴍᴜ ɪɴɢɪɴᴋᴀɴ, ᴋᴇʙᴀʜᴀɢɪᴀᴀɴ ᴍᴇɴɢɪɴɢɪɴᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋᴀᴍᴜ ᴅᴀᴘᴀᴛᴋᴀɴ.",
"ᴏʀᴀɴɢ ᴘᴇꜱɪᴍɪꜱ ᴍᴇʟɪʜᴀᴛ ᴋᴇꜱᴜʟɪᴛᴀɴ ᴅɪ ꜱᴇᴛɪᴀᴘ ᴋᴇꜱᴇᴍᴘᴀᴛᴀɴ. ᴏʀᴀɴɢ ʏᴀɴɢ ᴏᴘᴛɪᴍɪꜱ ᴍᴇʟɪʜᴀᴛ ᴘᴇʟᴜᴀɴɢ ᴅᴀʟᴀᴍ ꜱᴇᴛɪᴀᴘ ᴋᴇꜱᴜʟɪᴛᴀɴ.",
"ᴋᴇʀᴀɢᴜᴀɴ ᴍᴇᴍʙᴜɴᴜʜ ʟᴇʙɪʜ ʙᴀɴʏᴀᴋ ᴍɪᴍᴘɪ ᴅᴀʀɪᴘᴀᴅᴀ ᴋᴇɢᴀɢᴀʟᴀɴ.",
"ʟᴀᴋᴜᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ʜᴀʀᴜꜱ ᴋᴀᴍᴜ ʟᴀᴋᴜᴋᴀɴ ꜱᴀᴍᴘᴀɪ ᴋᴀᴍᴜ ᴅᴀᴘᴀᴛ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ɪɴɢɪɴ ᴋᴀᴍᴜ ʟᴀᴋᴜᴋᴀɴ.",
"ᴏᴘᴛɪᴍɪꜱᴛɪꜱ ᴀᴅᴀʟᴀʜ ꜱᴀʟᴀʜ ꜱᴀᴛᴜ ᴋᴜᴀʟɪᴛᴀꜱ ʏᴀɴɢ ʟᴇʙɪʜ ᴛᴇʀᴋᴀɪᴛ ᴅᴇɴɢᴀɴ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ ᴅᴀɴ ᴋᴇʙᴀʜᴀɢɪᴀᴀɴ ᴅᴀʀɪᴘᴀᴅᴀ ʏᴀɴɢ ʟᴀɪɴ.",
"ᴘᴇɴɢʜᴀʀɢᴀᴀɴ ᴘᴀʟɪɴɢ ᴛɪɴɢɢɪ ʙᴀɢɪ ꜱᴇᴏʀᴀɴɢ ᴘᴇᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱ ʙᴜᴋᴀɴʟᴀʜ ᴀᴘᴀ ʏᴀɴɢ ᴅɪᴀ ᴘᴇʀᴏʟᴇʜ ᴅᴀʀɪ ᴘᴇᴋᴇʀᴊᴀᴀɴ ɪᴛᴜ, ᴛᴀᴘɪ ꜱᴇʙᴇʀᴀᴘᴀ ʙᴇʀᴋᴇᴍʙᴀɴɢ ɪᴀ ᴅᴇɴɢᴀɴ ᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱɴʏᴀ ɪᴛᴜ.",
"ᴄᴀʀᴀ ᴛᴇʀʙᴀɪᴋ ᴜɴᴛᴜᴋ ᴍᴇᴍᴜʟᴀɪ ᴀᴅᴀʟᴀʜ ᴅᴇɴɢᴀɴ ʙᴇʀʜᴇɴᴛɪ ʙᴇʀʙɪᴄᴀʀᴀ ᴅᴀɴ ᴍᴜʟᴀɪ ᴍᴇʟᴀᴋᴜᴋᴀɴ.",
"ᴋᴇɢᴀɢᴀʟᴀɴ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴘᴇʀɴᴀʜ ᴍᴇɴʏᴜꜱᴜʟ ᴊɪᴋᴀ ᴛᴇᴋᴀᴅ ᴜɴᴛᴜᴋ ꜱᴜᴋꜱᴇꜱ ᴄᴜᴋᴜᴘ ᴋᴜᴀᴛ."
]
let motivasii = pickRandom(motivasi)
 reply(`"${motivasii}"`)
}
break

case 'quotesgalau': {

 function pickRandom(list) {
 return list[Math.floor(list.length * Math.random())]
}
const galau = [
 "Gak salah kalo aku lebih berharap sama orang yang lebih pasti tanpa khianati janji-janji",
 "Kalau aku memang tidak sayang sama kamu ngapain aku mikirin kamu. Tapi semuanya kamu yang ngganggap aku gak sayang sama kamu",
 "Jangan iri dan sedih jika kamu tidak memiliki kemampuan seperti yang orang miliki. Yakinlah orang lain juga tidak memiliki kemampuan sepertimu",
 "Hanya kamu yang bisa membuat langkahku terhenti, sambil berkata dalam hati mana bisa aku meninggalkanmu",
 "Tetap tersenyum walaluku masih dibuat menunggu dan rindu olehmu, tapi itu demi kamu",
 "Tak semudah itu melupakanmu",
 "Secuek-cueknya kamu ke aku, aku tetap sayang sama kamu karena kamu telah menerima aku apa adanya",
 "Aku sangat bahagia jika kamu bahagia didekatku, bukan didekatnya",
 "Jadilah diri sendiri, jangan mengikuti orang lain, tetapi tidak sanggup untuk menjalaninya",
 "Cobalah terdiam sejenak untuk memikirkan bagaimana caranya agar kita dapat menyelesaikan masalah ini bersama-sama",
 "Bisakah kita tidak bermusuhan setelah berpisah, aku mau kita seperti dulu sebelum kita jadian yang seru-seruan bareng, bercanda dan yang lainnya",
 "Aku ingin kamu bisa langgeng sama aku dan yang aku harapkan kamu bisa jadi jodohku",
 "Cinta tak bisa dijelaskan dengan kata-kata saja, karena cinta hanya mampu dirasakan oleh hati",
 "Masalah terbesar dalam diri seseorang adalah tak sanggup melawan rasa takutnya",
 "Selamat pagi buat orang yang aku sayang dan orang yang membenciku, semoga hari ini hari yang lebih baik daripada hari kemarin buat aku dan kamu",
 "Jangan menyerah dengan keadaanmu sekarang, optimis karena optimislah yang bikin kita kuat",
 "Kepada pria yang selalu ada di doaku aku mencintaimu dengan tulus apa adanya",
 "Tolong jangan pergi saat aku sudah sangat sayang padamu",
 "Coba kamu yang berada diposisiku, lalu kamu ditinggalin gitu aja sama orang yang lo sayang banget",
 "Aku takut kamu kenapa-napa, aku panik jika kamu sakit, itu karena aku cinta dan sayang padamu",
 "Sakit itu ketika cinta yang aku beri tidak kamu hargai",
 "Kamu tiba-tiba berubah tanpa sebab tapi jika memang ada sebabnya kamu berubah tolong katakan biar saya perbaiki kesalahan itu",
 "Karenamu aku jadi tau cinta yang sesungguhnya",
 "Senyum manismu sangatlah indah, jadi janganlah sampai kamu bersedih",
 "Berawal dari kenalan, bercanda bareng, ejek-ejekan kemudian berubah menjadi suka, nyaman dan akhirnya saling sayang dan mencintai",
 "Tersenyumlah pada orang yang telah menyakitimu agar sia tau arti kesabaran yang luar biasa",
 "Aku akan ingat kenangan pahit itu dan aku akan jadikan pelajaran untuk masa depan yang manis",
 "Kalau memang tak sanggup menepati janjimu itu setidaknya kamu ingat dan usahakan jagan membiarkan janjimu itu sampai kau lupa",
 "Hanya bisa diam dan berfikir Kenapa orang yang setia dan baik ditinggalin yang nakal dikejar-kejar giliran ditinggalin bilangnya laki-laki itu semuanya sama",
 "Walaupun hanya sesaat saja kau membahagiakanku tapi rasa bahagia yang dia tidak cepat dilupakan",
 "Aku tak menyangka kamu pergi dan melupakan ku begitu cepat",
 "Jomblo gak usah diam rumah mumpung malam minggu ya keluar jalan lah kan jomblo bebas bisa dekat sama siapapun pacar orang mantan sahabat bahkan sendiri atau bareng setan pun bisa",
 "Kamu adalah teman yang selalu di sampingku dalam keadaan senang maupun susah Terimakasih kamu selalu ada di sampingku",
 "Aku tak tahu sebenarnya di dalam hatimu itu ada aku atau dia",
 "Tak mudah melupakanmu karena aku sangat mencintaimu meskipun engkau telah menyakiti aku berkali-kali",
 "Hidup ini hanya sebentar jadi lepaskan saja mereka yang menyakitimu Sayangi Mereka yang peduli padamu dan perjuangan mereka yang berarti bagimu",
 "Tolong jangan pergi meninggalkanku aku masih sangat mencintai dan menyayangimu",
 "Saya mencintaimu dan menyayangimu jadi tolong jangan engkau pergi dan meninggalkan ku sendiri",
 "Saya sudah cukup tahu bagaimana sifatmu itu kamu hanya dapat memberikan harapan palsu kepadaku",
 "Aku berusaha mendapatkan cinta darimu tetapi Kamunya nggak peka",
 "Aku bangkit dari jatuh ku setelah kau jatuhkan aku dan aku akan memulainya lagi dari awal Tanpamu",
 "Mungkin sekarang jodohku masih jauh dan belum bisa aku dapat tapi aku yakin jodoh itu Takkan kemana-mana dan akan ku dapatkan",
 "Datang aja dulu baru menghina orang lain kalau memang dirimu dan lebih baik dari yang kau hina",
 "Membelakanginya mungkin lebih baik daripada melihatnya selingkuh didepan mata sendiri",
 "Bisakah hatimu seperti angsa yang hanya setia pada satu orang saja",
 "Aku berdiri disini sendiri menunggu kehadiran dirimu",
 "Aku hanya tersenyum padamu setelah kau menyakitiku agar kamu tahu arti kesabaran",
 "Maaf aku lupa ternyata aku bukan siapa-siapa",
 "Untuk memegang janjimu itu harus ada buktinya jangan sampai hanya janji palsu",
 "Aku tidak bisa selamanya menunggu dan kini aku menjadi ragu Apakah kamu masih mencintaiku",
 "Jangan buat aku terlalu berharap jika kamu tidak menginginkanku",
 "Lebih baik sendiri daripada berdua tapi tanpa kepastian",
 "Pergi bukan berarti berhenti mencintai tapi kecewa dan lelah karena harus berjuang sendiri",
 "Bukannya aku tidak ingin menjadi pacarmu Aku hanya ingin dipersatukan dengan cara yang benar",
 "Akan ada saatnya kok aku akan benar-benar lupa dan tidak memikirkan mu lagi",
 "Kenapa harus jatuh cinta kepada orang yang tak bisa dimiliki",
 "Jujur aku juga memiliki perasaan terhadapmu dan tidak bisa menolakmu tapi aku juga takut untuk mencintaimu",
 "Maafkan aku sayang tidak bisa menjadi seperti yang kamu mau",
 "Jangan memberi perhatian lebih seperti itu cukup biasa saja tanpa perlu menimbulkan rasa",
 "Aku bukan mencari yang sempurna tapi yang terbaik untukku",
 "Sendiri itu tenang tidak ada pertengkaran kebohongan dan banyak aturan",
 "Cewek strong itu adalah yang sabar dan tetap tersenyum meskipun dalam keadaan terluka",
 "Terima kasih karena kamu aku menjadi lupa tentang masa laluku",
 "Cerita cinta indah tanpa masalah itu hanya di dunia dongeng saja",
 "Kamu tidak akan menemukan apa-apa di masa lalu Yang ada hanyalah penyesalan dan sakit hati",
 "Mikirin orang yang gak pernah mikirin kita itu emang bikin gila",
 "Dari sekian lama menunggu apa yang sudah didapat",
 "Perasaan Bodo gue adalah bisa jatuh cinta sama orang yang sama meski udah disakiti berkali-kali",
 "Yang sendiri adalah yang bersabar menunggu pasangan sejatinya",
 "Aku terlahir sederhana dan ditinggal sudah biasa",
 "Aku sayang kamu tapi aku masih takut untuk mencintaimu",
 "Bisa berbagi suka dan duka bersamamu itu sudah membuatku bahagia",
 "Aku tidak pernah berpikir kamu akan menjadi yang sementara",
 "Jodoh itu bukan seberapa dekat kamu dengannya tapi seberapa yakin kamu dengan Allah",
 "Jangan paksa aku menjadi cewek seperti seleramu",
 "Hanya yang sabar yang mampu melewati semua kekecewaan",
 "Balikan sama kamu itu sama saja bunuh diri dan melukai perasaan ku sendiri",
 "Tak perlu membalas dengan menyakiti biar Karma yang akan urus semua itu",
 "Aku masih ingat kamu tapi perasaanku sudah tidak sakit seperti dulu",
 "Punya kalimat sendiri & mau ditambahin? chat *.owner*"
]
 let bacotan = pickRandom(galau)
 reply(bacotan)
}
break

case 'quotesgombal': {

 function pickRandom(list) {
 return list[Math.floor(list.length * Math.random())]
}
const gombal = [
 "Hal yang paling aku suka yaitu ngemil, namun tau gak ngemil apa yang paling aku suka? ngemilikin kamu sepenuhnya.",
 "Seandainya sekarang adalah tanggal 28 oktober 1928, aku akan ubah naskah sumpah pemuda menjadi sumpah aku cinta kamu.",
 "Aku gak pernah merasakan ketakutan sedikit pun ketika berada didekat kamu, karena kamulah kekuatanku.",
 "Kamu tahu apa persamaan rasa sayangku ke kamu dengan matahari? Persamaannya adalah sama-sama terbit setiap hari dan hanya akan berakhir sampai kiamat.",
 "Kalau bus kota jauh dekat ongkosnya sama, tapi cinta ini dekat-dekat makin saling cinta.",
 "Kalausaja aku harus mengorbankan semua kebahagiaanku hanya untuk sekedar membuat kamu tertawa. Aku rela.",
 "Anjing menggonggong kafilah berlalu, tiap hari bengong mikirin kamu melulu.",
 "Kalau aku jadi wakil rakyat kayaknya bakalan gagal deh. Gimana aku mau mikiran rakyat kalau yang ada dipikiran aku itu cuman ada kamu.",
 "denganambah satu sama dengan dua. Aku sama kamu sama dengan saling cinta.",
 "Kalo kita beda kartu GSM, itu gak masalah asalkan nantinya nama kita berdua ada di kartu Keluarga yang sama.",
 "Masalah yang selalu sulit untukku membuat mu mencintai ku, tapi lebih sulit memaksa hatiku untuk berhenti memikirkan dirimu.",
 "Aku harap kamu tidak menanyakan hal terindah yang pernah singgah di kehidupanku, karena jawaban nya adalah kamu.",
 "Hal yang paling aku suka yaitu ngemil, namun tau gak ngemil apa yang paling aku suka? ngemilikin kamu sepenuhnya.",
 "seandainyaa sekarang adalah tanggal 28 oktober 1928, aku akan ubah naskah sumpah pemuda menjadi sumpah aku cinta kamu.",
 "kuu gak pernah merasakan ketakutan sedikit pun ketika berada didekat kamu, karena kamulah kekuatanku.",
 "kamuu tahu apa persamaan rasa sayangku ke kamu dengan matahari? Persamaannya adalah sama-sama terbit setiap hari dan hanya akan berakhir sampai kiamat.",
 "Kalau bus kota jauh dekat ongkosnya sama, tapi cinta ini dekat-dekat makin saling cinta.",
 "jikaa saja aku harus mengorbankan semua kebahagiaanku hanya untuk sekedar membuat kamu tertawa. Aku rela.",
 "Anjing menggonggong kafilah berlalu, tiap hari bengong mikirin kamu melulu.",
 "Kalau aku jadi wakil rakyat kayaknya bakalan gagal deh. Gimana aku mau mikiran rakyat kalau yang ada dipikiran aku itu cuman ada kamu.",
 "atuu tambah satu sama dengan dua. Aku sama kamu sama dengan saling cinta,.",
 "aloo kita beda kartu GSM, itu gak masalah asalkan nantinya nama kita berdua ada di kartu Keluarga yang sama.",
 "Masalah yang selalu sulit untukku membuat mu mencintai ku, tapi lebih sulit memaksa hatiku untuk berhenti memikirkan dirimu.",
 "Aku tak pernah berjanji untuk sebuah perasaan, namun aku berusaha berjanji untuk sebuah kesetiaan.",
 "Aku sangat berharap kamu tau, kalau aku tidak pernah menyesali cintaku untuk mu, karena bagiku memiliki kamu sudah cukup bagi ku.",
 "Jangankan memilikimu, mendengar kamu kentut aja aku sudah bahagia.",
 "Aku mohon jangan jalan-jalan terus di pikiranku, duduk yang manis di hatiku saja.",
 "Berulang tahun memang indah, namun bagiku yang lebih indah jika berulang kali bersamamu.",
 "Napas aku kok sesek banget ya?, karena separuh nafasku ada di kamu.",
 "Jika ada seseorang lebih memilih pergi meninggalkan kamu, jangan pernah memohon padanya untuk tetap bertahan. Karena jika dia cinta, dia tak akan mau pergi.",
 "jangann diam aja dong, memang diam itu emas, tapi ketahuilah suara kamu itu seperti berlian.",
 "Kesasar itu serasa rugi banget, namun aku nggak merasa rugi karena cintaku sudah Biasanya orang yang lagi nyasar itu rugi ya, tapi tau gak? Aku gak merasa rugi sebab cintaku sudah nyasar ke hati bidadari.",
 "Ada 3 hal yang paling aku sukai di dunia ini, yaitu Matahari, Bulan dan Kamu. Matahari untuk siang hari, Bulan untuk malam hari dan Kamu untuk selamanya dihatiku.",
 "Sayang, kamu itu seperti garam di lautan, tidak terlihat namun akan selalu ada untuk selamanya.",
 "kuu gak perlu wanita yang sholeha, tapi bagaimana menuntun wanita yang aku cintai menjadi seorang yang sholehah.",
 "Aku tidak minta bintang atau bulan kepadamu. Cukup temani aku selamanya di bawah cahayanya.",
 "Akuana kalo kita berdua jadi komplotan penjahat: Aku mencuri hatimu, dan kamu mencuri hatiku?",
 "Aku gak perlu wanita yang cantik, tapi bagaimana aku menyanjung wanita yang aku cintai seperti wanita yang paling cantik di bumi ini.",
 "Aku pengen bersamamu cuma pada dua waktu: SEKARANG dan SELAMANYA.",
 "Akuu tuh bikin aku ga bisa tidur tau ga?",
 "Soalnya kamu selalu ada dibayang-bayang aku terus.",
 "Jika aku bisa jadi bagian dari dirimu,aku mau jadi air matamu,yang tersimpan di hatimu, lahir dari matamu, hidup di pipimu, dan mati di bibirmu.",
 "Papa kamu pasti kerja di apotik ya? | kenapa bang? | karena cuma kamu obat sakit hatiku.",
 "akuu selalu berusaha tak menangis karenamu, karena setiap butir yang jatuh, hanya makin mengingatkan, betapa aku tak bisa melepaskanmu.",
 "mauu nanya jalan nih. Jalan ke hatimu lewat mana ya?",
 "Andai sebuah bintang akan jatuh setiap kali aku mengingatmu, bulan pasti protes. Soalnya dia bakal sendirian di angkasa.",
 "Andai kamu gawang aku bolanya. Aku rela ditendang orang-orang demi aku dapat bersamamu,",
 "Dingin malam ini menusuk tulang. Kesendirian adalah kesepian. Maukah kau jadi selimut penghangat diriku?",
 "Keindahan Borobudur keajaiban dunia, keindahan kamu keajaiban cinta.",
 "Aku ingin mengaku dosa. Jangan pernah marah ya. Maafkan sebelumnya. Tadi malam aku mimpiin kamu jadi pacarku. Setelah bangun, akankah mimpiku jadi nyata?",
 "Kalau nggak sih aku bilang aku cinta kamu hari ini? Kalau besok gimana? Besok lusa? Besoknya besok lusa? Gimana kalau selamanya?",
 "Orangtuamu pengrajin bantal yah? Karena terasa nyaman jika di dekatmu.",
 "Jika malam adalah jeruji gelap yang menjadi sangkar, saya ingin terjebak selamanya di sana bersamamu.",
 "Sekarang aku gendutan gak sih? Kamu tau gak kenapa ? Soalnya kamu sudah mengembangkan cinta yang banyak di hatiku.",
 "Di atas langit masih ada langit. Di bawah langit masih ada aku yang mencintai kamu.",
 "Tau tidak kenapa malam ini tidak ada bintang? Soalnya bintangnya pindah semua ke matamu?",
 "Aku mencintaimu! Jika kamu benci aku, panah saja diriku. Tapi jangan di hatiku ya, karena di situ kamu berada.",
 "Bapak kamu pasti seorang astronot? | kok tau? | Soalnya aku melihat banyak bintang di matamu.",
 "Bapak kamu dosen ya? | kok tau? | karena nilai kamu A+ di hatiku.",
 "Kamu pasti kuliah di seni pahat ya? | kok tau sih? | Soalnya kamu pintar sekali memahat namamu di hatiku.",
 "Ya Tuhan, jika dia jodohku, menangkanlah tender pembangunan proyek menara cintaku di hatinya.",
 "Kamu mantan pencuri ya? | kok tau? | Abisnya kamu mencuri hatiku sih!",
 "Cowok : Aku suka senyum-senyum sendiri lho. | Cewek : Hah .. Gila Ya | Cowok : Nggak. Aku sedang mikirin kamu.",
 "Setiap malam aku berjalan-jalan di suatu tempat. Kamu tau di mana itu ? | gatau, emang dimana? | Di hatimu.",
 "Kamu pake Telkomesl ya? Karena sinyal-sinyal cintamu sangat kuat sampai ke hatiku.",
 "Kamu tahu gak sih? AKu tuh capek banget. Capek nahan kangen terus sama kamu.",
 "katanyaa kalau sering hujan itu bisa membuat seseorang terhanyut, kalau aku sekarang sedang terhanyut di dalam cintamu.",
 "Aku harap kamu jangan pergi lagi ya? karena, bila aku berpisah dengamu sedetik saja bagaikan 1000 tahun rasanya.",
 "Aku sih gak butuh week end, yang aku butuhkan hanyalah love you till the end.",
 "Emak kamu tukang Gado gado ya?, kok tau sih?, Pantesan saja kamu telah mencampur adukan perasaanku",
 "Walau hari ini cerah, tetapi tanpa kamu disisiku sama saja berselimutkan awan gelap di hati ini",
 "Kamu ngizinin aku kangen sehari berapa kali neng? Abang takut over dosis.",
 "cintaa aku ke kamu tuh bagaikan hutang, awalnya kecil, lama-lama didiemin malah tambah gede.",
 "Berulang tahun adalah hari yang indah. Tapih akin lebih indah kalo udah berulang-ulang kali bersama kamu."
]
let bacotan = pickRandom(gombal)
 reply(bacotan)

}
break
//=========================================\\======

case 'quoteshacker': {

 function pickRandom(list) {
 return list[Math.floor(list.length * Math.random())]
}
const heker = [
 "Dear kamu yang tertulis di halaman defacementku, Kapan jadi pacarku?",
 "Aku rela ko jadi Processor yg kepanasan, asalkan kmu yg jadi heatsink'y yg setiap saat bisa mendinginkan ku.",
 "Gak usah nyari celah xss deh, karena ketika kamu ngeklik hatiku udah muncul pop up namamu.",
 "berharap setelah aku berhasil login di hati kamu ga akan ada tombol logout, dan sessionku ga bakal pernah expired.",
 "Masa aku harus pake teknik symlink bypass buat buka-buka folder hatimu yg openbasedir enabled.",
 "Diriku dan Dirimu itu ibarat PHP dan MySQL yang belum terkoneksi.",
 "Jangan cuma bisa inject hatinya,tapi harus bisa patchnya juga. Biar tidak selingkuh sama hacker lain.",
 "Aku memang programmer PHP,tapi aku nggak akan php-in kamu kok.",
 "Eneeeng. | Apache? | Km wanita yg paling Unix yg pernah aku kenal |",
 "Sayang, capslock kamu nyala ya? | ngga, kenapa emangnya? | soalnya nama kamu ketulis gede bgt di hati aku | zzz! smile",
 "Aku deketin kamu cuma untuk redirect ke hati temenmu.",
 "Domain aja bisa parkir, masa cintaku ga bisa parkir dihatimu?",
 "Aku boleh jadi pacarmu? | 400(Bad Request) | Aku cium boleh? | 401(Authorization Required) | Aku buka bajumu yah | 402(Payment Required) sad",
 "kamu tau ga beda'y kamu sama sintax PHP, kalo sintax PHP itu susah di hafalin kalo kamu itu susah di lupain",
 "Kamu dulu sekolah SMK ambil kejuruan apa? | Teknik Komputer Jaringan | Terus sekarang bisa apa aja? | Menjaring hatimu lewat komputerku | biggrin",
 "Jika cinta itu Array, maka,cintaku padamu tak pernah empty jika di unset().",
 "SQLI ( Structured Query Love Injection )",
 "aku ingin kamu rm -rf kan semua mantan di otak mu,akulah root hati kamu",
 "Senyumu bagaikan cooler yang menyejukan hatiku ketika sedang overclock.",
 "kamu adalah terminalku, dimana aku menghabiskan waktuku untuk mengetikan beribu baris kode cinta untukmu smile",
 "Aku seneng nongkrong di zone-h, karena disanalah aku arsipkan beberapa website yang ada foto kamunya.",
 "hatiku ibarat vps hanya untukmu saja bukan shared hosting yg bisa tumpuk berbagai domain cinta.",
 "Aku bukanlah VNC Server Tanpa Authentication yg bisa kamu pantau kapan saja.",
 "Jangan men-dualboot-kan hatiku kepadamu.",
 "cintaku kan ku Ctrl+A lalu kan ku Ctrl+C dan kan ku Ctrl+V tepat di folder system hatimu.",
 "KDE kalah Cantiknya, GNOME kalah Simplenya, FluxBox kalah Ringannya, pokonya Semua DE itu Kalah Sama Kamu.",
 "Cintamu bagaikan TeamViewer yang selalu mengendalikan hatiku",
 "cinta kita tak akan bisa dipisahkan walau setebal apapun itu firewall...!!"
]

let bacotan = pickRandom(heker)
 reply(bacotan)
}
break

case 'quotesbijak':{

 function pickRandom(list) {
 return list[Math.floor(list.length * Math.random())]
}
const quotes = [
"Keyakinan merupakan suatu pengetahuan di dalam hati, jauh tak terjangkau oleh bukti.",
"Rasa bahagia dan tak bahagia bukan berasal dari apa yang kamu miliki, bukan pula berasal dari siapa diri kamu, atau apa yang kamu kerjakan. Bahagia dan tak bahagia berasal dari pikiran kamu.",
"Sakit dalam perjuangan itu hanya sementara. Bisa jadi kamu rasakan dalam semenit, sejam, sehari, atau setahun. Namun jika menyerah, rasa sakit itu akan terasa selamanya.",
"Hanya seseorang yang takut yang bisa bertindak berani. Tanpa rasa takut itu tidak ada apapun yang bisa disebut berani.",
"Jadilah diri kamu sendiri. Siapa lagi yang bisa melakukannya lebih baik ketimbang diri kamu sendiri?",
"Kesempatan kamu untuk sukses di setiap kondisi selalu dapat diukur oleh seberapa besar kepercayaan kamu pada diri sendiri.",
"Kebanggaan kita yang terbesar adalah bukan tidak pernah gagal, tetapi bangkit kembali setiap kali kita jatuh.",
"Suatu pekerjaan yang paling tak kunjung bisa diselesaikan adalah pekerjaan yang tak kunjung pernah dimulai.",
"Pikiran kamu bagaikan api yang perlu dinyalakan, bukan bejana yang menanti untuk diisi.",
"Kejujuran adalah batu penjuru dari segala kesuksesan. Pengakuan adalah motivasi terkuat. Bahkan kritik dapat membangun rasa percaya diri saat disisipkan di antara pujian.",
"Segala sesuatu memiliki kesudahan, yang sudah berakhir biarlah berlalu dan yakinlah semua akan baik-baik saja.",
"Setiap detik sangatlah berharga karena waktu mengetahui banyak hal, termasuk rahasia hati.",
"Jika kamu tak menemukan buku yang kamu cari di rak, maka tulislah sendiri.",
"Jika hatimu banyak merasakan sakit, maka belajarlah dari rasa sakit itu untuk tidak memberikan rasa sakit pada orang lain.",
"Hidup tak selamanya tentang pacar.",
"Rumah bukan hanya sebuah tempat, tetapi itu adalah perasaan.",
"Pilih mana: Orang yang memimpikan kesuksesan atau orang yang membuatnya menjadi kenyataan?",
"Kamu mungkin tidak bisa menyiram bunga yang sudah layu dan berharap ia akan mekar kembali, tapi kamu bisa menanam bunga yang baru dengan harapan yang lebih baik dari sebelumnya.",
"Bukan bahagia yang menjadikan kita bersyukur, tetapi dengan bersyukurlah yang akan menjadikan hidup kita bahagia.",
"Aku memang diam. Tapi aku tidak buta.",
]
let bacotan = pickRandom(quotes)
 reply(bacotan)
}
break


// ───────────────────────────────────────────────────────────────────────────────乂 🥀 ANIME MENU ───────────────────────────────────────────────────────────────乂 \\
case 'random-anime': {
  await conn.sendMessage(m.chat, {
    image: { url: 'https://pic.re/image' }
  }, { quoted: m })
}
break;
case 'randomba': {
  try {
    // Menggunakan axios untuk mengambil gambar dari URL
    const axios = await import('axios')
    const { data } = await axios.default.get('https://flowfalcon.dpdns.org/random/ba', { responseType: 'arraybuffer' })

    // Mengonversi gambar menjadi buffer dan mengirimnya sebagai image
    const buffer = Buffer.from(data)
    await conn.sendMessage(m.chat, {
      image: buffer,
      caption: 'Ini gambar acak untukmu! 🎉'  // Caption bisa kamu sesuaikan
    }, { quoted: m })

  } catch (e) {
    console.error(e)
    reply('Gagal mengambil gambar, coba lagi nanti.')
  }
}
break
            case 'animeawoo':{
            
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animemegumin':{

reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/megumin`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animeshinobu':{

reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/shinobu`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animehandhold':{

reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/handhold`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animehighfive':{

reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/highfive`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animecringe':{

reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cringe`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animedance':{

reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/dance`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animehappy':{

reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/happy`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animeglomp':{

reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/glomp`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animesmug':{

reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smug`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animeblush':{

reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/blush`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animewave':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wave`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animesmile':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smile`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animepoke':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/poke`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animewink':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wink`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animebonk':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bonk`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animebully':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bully`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animeyeet':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/yeet`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animebite':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bite`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animelick':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/lick`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animekill':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/kill`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animecry':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cry`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animewlp':{
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/wallpaper`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animekiss':{
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/kiss`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animehug':{
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/hug`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'couplepp': case 'ppcouple': {
reply(mess.wait)
let anucpp = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/couple.json')
let random = anucpp[Math.floor(Math.random() * anucpp.length)]
conn.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
conn.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break

case 'animeneko':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/neko`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animepat':{
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/pat`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animeslap':{
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/slap`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animecuddle':{
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/cuddle`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animewaifu':{
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animenom':{
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/nom`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animefoxgirl':{
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animetickle': {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/tickle`)     
            await conn.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animegecg': {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/gecg`)     
            await conn.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'dogwoof': {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/woof`)     
            await conn.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case '8ballpool': {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/8ball`)     
            await conn.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'goosebird': {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/goose`)     
            await conn.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animefeed': {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/feed`)     
            await conn.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animeavatar': {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/avatar`)     
            await conn.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'lizardpic': {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/lizard`)     
            await conn.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'catmeow': {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/meow`)     
            await conn.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
break


// ───────────────────────────────────────────────────────────────────────────────乂 🥀 DOWNLOAD MENU ───────────────────────────────────────────────────────────────乂 \\
case 'tt': case 'tiktok': {

    if (!args[0]) return m.reply('❌ Harap masukkan URL TikTok!');

    let url = args[0].trim();
    
    try {
        await conn.sendMessage(m.chat, {
            react: { text: "⏱️", key: m.key }
        });

        let axios = require("axios");
        let apiUrl = `https://api.agatz.xyz/api/tiktok?url=${encodeURIComponent(url)}`;
        let { data } = await axios.get(apiUrl);

        if (!data.status) return m.reply('❌ Gagal mengambil video!');

        let result = data.data;
        let caption = `
🎥 *TikTok Video*
📌 *Judul:* ${result.title}
⏱️ *Durasi:* ${result.duration}
📆 *Diunggah:* ${result.taken_at}
🌍 *Region:* ${result.region}

👤 *Pembuat Konten:*
- Nama: ${result.author.fullname} (@${result.author.nickname})
- Avatar: ${result.author.avatar}

🎶 *Musik:*
- Judul: ${result.music_info.title}
- Artis: ${result.music_info.author}
- Link Musik: ${result.music_info.url}

📊 *Statistik:*
👁️ *Views:* ${result.stats.views}
👍 *Likes:* ${result.stats.likes}
💬 *Komentar:* ${result.stats.comment}
📤 *Shares:* ${result.stats.share}
⬇️ *Unduhan:* ${result.stats.download}
        `.trim();

        // Pilih video kualitas terbaik
        let videoUrl = result.data.find(v => v.type === "nowatermark_hd")?.url || 
                       result.data.find(v => v.type === "nowatermark")?.url ||
                       result.data.find(v => v.type === "watermark")?.url;

        if (!videoUrl) return m.reply('❌ Video tidak ditemukan.');

        // Kirim video + external reply untuk cover
        await conn.sendMessage(m.chat, {
            video: { url: videoUrl },
            caption: caption,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: result.title,
                    body: "TikTok Downloader",
                    mediaType: 1,
                    thumbnailUrl: result.cover,
                    sourceUrl: url
                }
            }
        }, { quoted: m });

        // Kirim audio jika ada
        if (result.music_info.url) {
            await conn.sendMessage(m.chat, {
                audio: { url: result.music_info.url },
                mimetype: 'audio/mpeg',
                fileName: `${result.music_info.title}.mp3`
            }, { quoted: m });
        }

        await conn.sendMessage(m.chat, {
            react: { text: "✅", key: m.key }
        });

    } catch (err) {
        console.error("[TikTok Scraper Error]", err);
        m.reply('❌ Terjadi kesalahan saat memproses permintaan.');
    }
}
break;
case 'gitclone':{
let regx = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!text) return reply(`input url`)
if (!regx.test(text)) return reply('Linknya salah')
await conn.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
let [, usr, repo] = text.match(regx) || []
let repos = repo.replace(/.git$/, '')
let hasdl = `https://api.github.com/repos/${usr}/${repos}/zipball`
let namafile = (await fetch(hasdl, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
conn.sendMessage(m.chat, { document: { url: hasdl }, mimetype: 'application/zip', fileName: namafile }, { quoted: m })
}
break
case 'facebook':
case 'fb':
case 'facebookdl': {
  if (!args[0] || !args[0].includes('facebook.com')) {
    return m.reply(`*Contoh:* ${prefix}facebook https://www.facebook.com/share/p/1Fpoxt6HBQ/`)
  }

  try {
    const res = await fetch(`https://www.velyn.biz.id/api/downloader/facebookdl?url=${encodeURIComponent(args[0])}`)
    const json = await res.json()

    if (!json.status || !json.data?.url) {
      return m.reply("Gagal mengambil data dari Facebook.")
    }

    const mediaUrl = json.data.url
    const isVideo = mediaUrl.match(/\.(mp4|mov|webm|mkv)(\?|$)/i)
    const isImage = mediaUrl.match(/\.(jpg|jpeg|png|gif)(\?|$)/i)

    if (isVideo) {
      await conn.sendMessage(m.chat, {
        video: { url: mediaUrl },
        caption: `✅ Berhasil mendownload video dari Facebook.`
      }, { quoted: m })
    } else if (isImage) {
      await conn.sendMessage(m.chat, {
        image: { url: mediaUrl },
        caption: `✅ Berhasil mendownload gambar dari Facebook.`
      }, { quoted: m })
    } else {
      // fallback: default kirim sebagai dokumen jika tidak jelas
      await conn.sendMessage(m.chat, {
        document: { url: mediaUrl },
        fileName: 'facebook-media',
        mimetype: 'application/octet-stream'
      }, { quoted: m })
    }

  } catch (e) {
    console.error(e)
    m.reply("Terjadi kesalahan saat menghubungi API.")
  }
  break;
}

case 'spotify':
case 'spotifydl': {
  if (!args[0] || !args[0].includes('spotify.com/track')) {
    return m.reply(`*Contoh:* ${prefix}spotify https://open.spotify.com/track/5ZKRky3p3kya74fy8QkhXc`)
  }

  try {
    const url = encodeURIComponent(args[0])
    const res = await fetch(`https://www.velyn.biz.id/api/downloader/spotifydl?url=${url}`)
    const json = await res.json()

    if (!json.status || !json.data?.success || !json.data?.download) {
      return m.reply("Gagal mengambil data dari Spotify.")
    }

    const { title, artist, image, download, duration } = json.data
    const caption = `🎵 *Title:* ${title}\n🧑 *Artist:* ${artist}\n⏱️ *Duration:* ${(duration / 1000).toFixed(0)}s\n\nSedang mengirim audio...`

    await conn.sendMessage(m.chat, {
      image: { url: image },
      caption
    }, { quoted: m })

    await conn.sendMessage(m.chat, {
      audio: { url: download },
      mimetype: 'audio/mpeg',
      ptt: false
    }, { quoted: m })

  } catch (e) {
    console.error(e)
    m.reply("Terjadi kesalahan saat menghubungi API.")
  }
  break;
}

case 'instagram': 
case 'ig':
case 'igdl': 
case 'igmp4': {
if (!text) return reply(`input ulr`) 
    const mediaUrl = await igdl(text);
    const url_media = mediaUrl[0].url;
    try {
        const response = await axios.head(url_media); 
        const contentType = response.headers['content-type']; // Mendapatkan tipe konten dari header
        if (contentType.startsWith('image/')) {
            await conn.sendMessage(m.chat, { image: { url: url_media}, caption: mess.success }, { quoted: m });
            return
        } else {
            await conn.sendMessage(m.chat, { video: { url: url_media}, caption: mess.success }, { quoted: m });
            return 
        }
    } catch(e) {
        return reply(`Maaf Kak Gagal`)
    }
}
break
case 'ytmp3': {
 if (!text) return reply(`Silakan masuk kan link youtube nya, Contoh: ${prefix + command} https://youtube.com/watch?v=Xs0Lxif1u9E`);
 const url = text.trim();
 const format = 'mp3';
 const regex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
 if (!regex.test(url)) {
 return reply('link yang anda berikan tidak valid, silahkan masuk kan link yang benar.');
 }
 reply('✨ Tunggu sebentar');
 try {
 const headers = {
    "accept": "*/*",
    "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
    "sec-ch-ua": "\"Not A(Brand\";v=\"8\", \"Chromium\";v=\"132\"",
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-platform": "\"Android\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
    "Referer": "https://id.ytmp3.mobi/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  }
const initial = await fetch(`https://d.ymcdn.org/api/v1/init?p=y&23=1llum1n471&_=${Math.random()}`, {headers});
let format = 'mp4';
const init = await initial.json();
const id = url.match(/(?:youtu\.be\/|youtube\.com\/(?:.*v=|.*\/|.*embed\/))([^&?/]+)/)?.[1];
let convertURL = init.convertURL + `&v=${id}&f=${format}&_=${Math.random()}`;
const converts = await fetch(convertURL, {headers});
const convert = await converts.json();
let info = {};
for (let i = 0; i < 3; i++ ){
    let j = await fetch(convert.progressURL, {headers});
    info = await j.json();
    console.log(info);
    if (info.progress == 3) break;
}
const result = {
    url: convert.downloadURL,
    title: info.title
}
await conn.sendMessage(m.chat, {
            audio: { url: result.url },
            mimetype: 'audio/mp4'
        }, { quoted: m });
} catch {
  reply('aduh kak error nieh..')
}
}
break
case 'ytmp4': {
 if (!text) return m.reply(`Silakan masuk kan link youtube nya, Contoh: ${prefix + command} https://youtube.com/watch?v=Xs0Lxif1u9E`);
try {
 const url = text.trim();
const headers = {
    "accept": "*/*",
    "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
    "sec-ch-ua": "\"Not A(Brand\";v=\"8\", \"Chromium\";v=\"132\"",
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-platform": "\"Android\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
    "Referer": "https://id.ytmp3.mobi/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  }
const initial = await fetch(`https://d.ymcdn.org/api/v1/init?p=y&23=1llum1n471&_=${Math.random()}`, {headers});
let format = 'mp4';
const init = await initial.json();
const id = url.match(/(?:youtu\.be\/|youtube\.com\/(?:.*v=|.*\/|.*embed\/))([^&?/]+)/)?.[1];
let convertURL = init.convertURL + `&v=${id}&f=${format}&_=${Math.random()}`;
const converts = await fetch(convertURL, {headers});
const convert = await converts.json();
let info = {};
for (let i = 0; i < 3; i++ ){
    let j = await fetch(convert.progressURL, {headers});
    info = await j.json();
    console.log(info);
    if (info.progress == 3) break;
}
const result = {
    url: convert.downloadURL,
    title: info.title
}
await conn.sendMessage(m.chat, { video: { url: result.url } }, { quoted: m });
} catch {
  reply('aduh kak error nieh..')
}
}
break
case 'songs':
case 'play': {
  if (!text) {
    return m.reply(`Contoh: ${prefix} aku yang tersakiti`)
  }
  try {
    conn.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
    const yts = require('yt-search')
const nyoba = await yts(text);
const { url, title, description, thumbnail, duration, ago, views, author } = nyoba.all[0];
    const body = `• Judul: ${title}\n` +
      `• Channel: ${author.name}\n` +
      `• Durasi: ${duration}\n` +
      `• Link: ${url}\n\nKlik *Video* tuk vidio\nKlik *Audio* tuk audio`
    const buttons = [
      {
        buttonId: `${prefix}ytmp4 ${url}`,
        buttonText: { displayText: 'Video' },
        type: 1
      },
      {
        buttonId: `${prefix}ytmp3 ${url}`,
        buttonText: { displayText: 'Audio' },
        type: 1
      }
    ]
    await conn.sendMessage(m.chat, {
      image: { url: thumbnail },
      caption: body,
      footer: null,
      buttons: buttons,
      headerType: 1,
      viewOnce: true
    }, { quoted: m })
  } catch (err) {
    console.error(err)
    m.reply('Terjadi kesalahan: '+err)
  }
}
break
case "pastebin": case "getpastebin": {
if (!q) return m.reply("Mana Link Pastebinnya")
try {
const anu = await axios.get(`https://api.hiuraa.my.id/tools/getpastebin?url=${encodeURIComponent(q)}`)
m.reply(anu.data.result.content)
} catch (err) {
m.reply("Terjadi Kesalahan: " + err)
}
}
break;
case 'mediafire': {
  try {
    if (!text) return m.reply(`Contoh: ${prefix + command} linknya`)
    if (!text.includes('mediafire.com')) return m.reply('Harus berupa link mediafire!')
    conn.sendMessage(m.chat, { react: { text: "🔎", key: m.key } })

    let { data } = await axios.get(`https://api.vreden.web.id/api/mediafiredl?url=${text}`)
    let res = data.result[0]
    
    let file_name = decodeURIComponent(res.nama)
    let extension = file_name.split('.').pop().toLowerCase()
    
    let ress = await axios.get(res.link, { responseType: 'arraybuffer' })
    let media = Buffer.from(ress.data)
    
    let mimetype = ''
    if (extension === 'mp4') mimetype = 'video/mp4'
    else if (extension === 'mp3') mimetype = 'audio/mp3'
    else mimetype = `application/${extension}`
    
    conn.sendMessage(m.chat, { document: media, fileName: file_name, mimetype: mimetype }, { quoted: m })
    
  } catch (err) {
    console.error(err.message)
    m.reply('Terjadi kesalahan')
  }
}
break


// ───────────────────────────────────────────────────────────────────────────────乂 🥀 CPANEL MENU ───────────────────────────────────────────────────────────────乂 \\
case "1gb": case "2gb": case "3gb": case "4gb": case "5gb": 
case "6gb": case "7gb": case "8gb": case "9gb": case "10gb": 
case "unlimited": case "unli": {
    if (!isCreator && !isPrem) {
        return reply(`Cih`);
    }
    if (!text) return example("username,628XXX");

    let nomor, usernem;
    let tek = text.split(",");
    if (tek.length > 1) {
        let [users, nom] = tek.map(t => t.trim());
        if (!users || !nom) return example("username,628XXX");
        nomor = nom.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        usernem = users.toLowerCase();
    } else {
        usernem = text.toLowerCase();
        nomor = m.isGroup ? m.sender : m.chat
    }

    try {
        var onWa = await conn.onWhatsApp(nomor.split("@")[0]);
        if (onWa.length < 1) return m.reply("Nomor target tidak terdaftar di WhatsApp!");
    } catch (err) {
        return m.reply("Terjadi kesalahan saat mengecek nomor WhatsApp: " + err.message);
    }

    // Mapping RAM, Disk, dan CPU
    const resourceMap = {
        "1gb": { ram: "1000", disk: "1000", cpu: "40" },
        "2gb": { ram: "2000", disk: "1000", cpu: "60" },
        "3gb": { ram: "3000", disk: "2000", cpu: "80" },
        "4gb": { ram: "4000", disk: "2000", cpu: "100" },
        "5gb": { ram: "5000", disk: "3000", cpu: "120" },
        "6gb": { ram: "6000", disk: "3000", cpu: "140" },
        "7gb": { ram: "7000", disk: "4000", cpu: "160" },
        "8gb": { ram: "8000", disk: "4000", cpu: "180" },
        "9gb": { ram: "9000", disk: "5000", cpu: "200" },
        "10gb": { ram: "10000", disk: "5000", cpu: "220" },
        "unlimited": { ram: "0", disk: "0", cpu: "0" }
    };
    
    let { ram, disk, cpu } = resourceMap[command] || { ram: "0", disk: "0", cpu: "0" };

    let username = usernem.toLowerCase();
    let email = username + "@gmail.com";
    let name = capital(username) + " Server";
    let password = username + "001";

    try {
        let f = await fetch(domain + "/api/application/users", {
            method: "POST",
            headers: { "Accept": "application/json", "Content-Type": "application/json", "Authorization": "Bearer " + apikey },
            body: JSON.stringify({ email, username, first_name: name, last_name: "Server", language: "en", password })
        });
        let data = await f.json();
        if (data.errors) return m.reply("Error: " + JSON.stringify(data.errors[0], null, 2));
        let user = data.attributes;

        let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
            method: "GET",
            headers: { "Accept": "application/json", "Content-Type": "application/json", "Authorization": "Bearer " + apikey }
        });
        let data2 = await f1.json();
        let startup_cmd = data2.attributes.startup;

        let f2 = await fetch(domain + "/api/application/servers", {
            method: "POST",
            headers: { "Accept": "application/json", "Content-Type": "application/json", "Authorization": "Bearer " + apikey },
            body: JSON.stringify({
                name,
                description: tanggal(Date.now()),
                user: user.id,
                egg: parseInt(egg),
                docker_image: "ghcr.io/parkervcp/yolks:nodejs_20",
                startup: startup_cmd,
                environment: { INST: "npm", USER_UPLOAD: "0", AUTO_UPDATE: "0", CMD_RUN: "npm start" },
                limits: { memory: ram, swap: 0, disk, io: 500, cpu },
                feature_limits: { databases: 5, backups: 5, allocations: 5 },
                deploy: { locations: [parseInt(loc)], dedicated_ip: false, port_range: [] },
            })
        });
        let result = await f2.json();
        if (result.errors) return m.reply("Error: " + JSON.stringify(result.errors[0], null, 2));
        
        let server = result.attributes;
        var orang = nomor
        if (m.isGroup) {
        await m.reply(`Berhasil membuat akun panel ✅\ndata akun sudah di kirim ke ${nomor == m.sender ? "private chat" : nomor.split("@")[0]}`)
        }        
        if (nomor !== m.sender && !m.isGroup) {
        await m.reply(`Berhasil membuat akun panel ✅\ndata akun sudah di kirim ke ${nomor.split("@")[0]}`)
        }
        
        let teks = `
*Berikut Detail Akun Panel Kamu 📦*

*📡 ID Server (${server.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password}
*🗓️ ${tanggal(Date.now())}*

*🌐 Spesifikasi Server*
* Ram : *${ram == "0" ? "Unlimited" : ram / 1000 + "GB"}*
* Disk : *${disk == "0" ? "Unlimited" : disk / 1000 + "GB"}*
* CPU : *${cpu == "0" ? "Unlimited" : cpu + "%"}*
* ${global.domain}

*Syarat & Ketentuan :*
* Expired panel 1 bulan
* Simpan data ini sebaik mungkin
* Garansi pembelian 15 hari (1x replace)
* Claim garansi wajib membawa bukti chat pembelian
`;

        await conn.sendMessage(orang, { text: teks }, { quoted: m });
    } catch (err) {
        return m.reply("Terjadi kesalahan: " + err.message);
    }
}
break
case "buypanel":
case "belipanel": {
    if (!text) return reply("Format: nama,1gb");
    const [username, packageName] = text.split(",");
    if (!username || !packageName) return reply("Format: nama,1gb");

    const packages = {
        "1gb": { ram: "1024", disk: "1024", cpu: "40", harga: 1000 },
        "2gb": { ram: "2048", disk: "2048", cpu: "60", harga: 2000 },
        "3gb": { ram: "3072", disk: "3072", cpu: "80", harga: 3000 },
        "4gb": { ram: "4096", disk: "4096", cpu: "100", harga: 4000 },
        "5gb": { ram: "5120", disk: "5120", cpu: "120", harga: 5000 },
        "6gb": { ram: "6144", disk: "6144", cpu: "140", harga: 6000 },
        "7gb": { ram: "7168", disk: "7168", cpu: "160", harga: 7000 },
        "8gb": { ram: "8192", disk: "8192", cpu: "180", harga: 8000 },
        "9gb": { ram: "9216", disk: "9216", cpu: "200", harga: 9000 },
        "10gb": { ram: "10240", disk: "10240", cpu: "220", harga: 10000 },
        "unli": { ram: "0", disk: "0", cpu: "0", harga: 15000 }
    };

    const selected = packages[packageName.toLowerCase()];
    if (!selected) return reply("❌ Paket tidak valid. Contoh: nama,1gb");

    const { ram, disk, cpu, harga } = selected;
    const ppn = Math.floor(Math.random() * 100) + 1;
    const total = harga + ppn;

    const email = `${username.toLowerCase()}@gmail.com`;
    const name = username.charAt(0).toUpperCase() + username.slice(1);
    const password = username + Math.floor(Math.random() * 1000);

    try {
        const payRes = await fetch(`https://kyyapinew.vercel.app/orderkuota/createpayment?apikey=${global.kyyapi}&amount=${total}&codeqr=${global.qriscode}`);
        const payData = await payRes.json();
        if (!payData.status) return reply("❌ Gagal membuat QRIS.");

        const { idtransaksi, expired, imageqris } = payData.result;
        const expiredTime = new Date(expired).toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });

        const textQris = `*💳 Detail Pembayaran Anda*\n\n` +
            `🆔 ID Transaksi: ${idtransaksi}\n` +
            `💰 Nominal: Rp ${harga.toLocaleString("id-ID")}\n` +
            `📊 PPN: Rp ${ppn.toLocaleString("id-ID")}\n` +
            `🧾 Total Bayar: Rp ${total.toLocaleString("id-ID")}\n\n` +
            `📌 Silakan scan QRIS sebelum *${expiredTime}* untuk menyelesaikan pembayaran.`;

        const msg = await conn.sendMessage(m.chat, { image: { url: imageqris.url }, caption: textQris }, { quoted: m });

        let sukses = false;

        const cancelTimer = setTimeout(async () => {
            if (!sukses) {
                await conn.sendMessage(m.chat, { delete: msg.key });
                await conn.sendMessage(m.chat, { text: "⛔ Transaksi dibatalkan karena waktu habis." });
            }
        }, 5 * 60 * 1000); // 5 menit

        while (!sukses) {
            try {
                const cekRes = await fetch(`https://kyyapinew.vercel.app/orderkuota/cekstatus?apikey=${global.kyyapi}&merchant=${global.merchan}&keyorkut=${global.keyorkut}`);
                const cekData = await cekRes.json();

                if (cekData.status && parseInt(cekData.result.amount) === total) {
                    sukses = true;
                    clearTimeout(cancelTimer);

                    await conn.sendMessage(m.chat, { text: "✅ Pembayaran diterima. Membuat panel..." });

                    // Buat akun dan server (contoh simulasi saja)
                    const user = {
                        username: email,
                        email,
                        firstname: name
                    };

                    const server = {
                        id: Math.floor(Math.random() * 99999)
                    };

                    const tanggal = (num) => {
                        const date = new Date(num);
                        return date.toLocaleDateString("id-ID", {
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                        });
                    };

                    const detailPanel = `*✅ Berikut Detail Akun Panel Kamu 📦*\n\n` +
                        `*📡 ID Server:* ${server.id}\n` +
                        `*👤 Username:* ${user.username}\n` +
                        `*🔐 Password:* ${password}\n` +
                        `*🗓️ Tanggal Pembuatan:* ${tanggal(Date.now())}\n\n` +
                        `*🌐 Spesifikasi Server:*\n` +
                        `*• RAM:* ${ram === "0" ? "Unlimited" : ram / 1024 + " GB"}\n` +
                        `*• Disk:* ${disk === "0" ? "Unlimited" : disk / 1024 + " GB"}\n` +
                        `*• CPU:* ${cpu === "0" ? "Unlimited" : cpu + "%"}\n` +
                        `*• Domain:* ${global.domain}\n\n` +
                        `📌 *Syarat & Ketentuan:*\n` +
                        `• Panel berlaku selama 1 bulan\n` +
                        `• Simpan data ini dengan baik\n` +
                        `• Garansi pembelian 15 hari (1x replace)\n` +
                        `• Claim garansi wajib menyertakan bukti chat pembelian`;

                    await conn.sendMessage(m.chat, { text: detailPanel }, { quoted: m });
                }
            } catch (err) {
                console.log("Cek status error:", err);
            }

            if (!sukses) await new Promise(res => setTimeout(res, 10000)); // cek tiap 10 detik
        }

    } catch (err) {
        console.error("Error buypanel:", err);
        reply("❌ Terjadi kesalahan saat memproses permintaan Anda.");
    }
}
break;



// ───────────────────────────────────────────────────────────────────────────────乂 🥀 PRIMBON MENU ───────────────────────────────────────────────────────────────乂 \\
case 'nomerhoki': case 'nomorhoki': {
if (!text) return reply(`Contoh : ${prefix + command} 6288292024190`)
let anu = await primbon.nomer_hoki(Number(text))
if (anu.status == false) return reply(anu.message)
reply(`• *Nomor HP :* ${anu.message.nomer_hp}\n• *Angka Shuzi :* ${anu.message.angka_shuzi}\n• *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n• *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`)
}
break
case 'artimimpi': case 'tafsirmimpi': {
if (!text) return reply(`Contoh : ${prefix + command} belanja`)
let anu = await primbon.tafsir_mimpi(text)
if (anu.status == false) return reply(anu.message)
reply(`• *Mimpi :* ${anu.message.mimpi}\n• *Arti :* ${anu.message.arti}\n• *Solusi :* ${anu.message.solusi}`)
}
break
case 'ramalanjodoh': case 'ramaljodoh': {
if (!text) return reply(`Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'ramalanjodohbali': case 'ramaljodohbali': {
if (!text) return reply(`Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'suamiistri': {
if (!text) return reply(`Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama Suami :* ${anu.message.suami.nama}\n• *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n• *Nama Istri :* ${anu.message.istri.nama}\n• *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'ramalancinta': case 'ramalcinta': {
if (!text) return reply(`Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Sisi Positif :* ${anu.message.sisi_positif}\n• *Sisi Negatif :* ${anu.message.sisi_negatif}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'artinama': {
if (!text) return reply(`Contoh : ${prefix + command} Dika Ardianta`)
let anu = await primbon.arti_nama(text)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama :* ${anu.message.nama}\n• *Arti :* ${anu.message.arti}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'kecocokannama': case 'cocoknama': {
if (!text) return reply(`Contoh : ${prefix + command} Dika, 7, 7, 2005`)
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Life Path :* ${anu.message.life_path}\n• *Destiny :* ${anu.message.destiny}\n• *Destiny Desire :* ${anu.message.destiny_desire}\n• *Personality :* ${anu.message.personality}\n• *Persentase :* ${anu.message.persentase_kecocokan}`)
}
break
case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
if (!text) return reply(`Contoh : ${prefix + command} Dika|Novia`)
let [nama1, nama2] = text.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return reply(anu.message)
NanoBotz.sendImage(m.chat,  anu.message.gambar, `• *Nama Anda :* ${anu.message.nama_anda}\n• *Nama Pasangan :* ${anu.message.nama_pasangan}\n• *Sisi Positif :* ${anu.message.sisi_positif}\n• *Sisi Negatif :* ${anu.message.sisi_negatif}`)
}
break
case 'jadianpernikahan': case 'jadiannikah': {
if (!text) return reply(`Contoh : ${prefix + command} 6, 12, 2020`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Tanggal Pernikahan :* ${anu.message.tanggal}\n• *karakteristik :* ${anu.message.karakteristik}`)
}
break
case 'sifatusaha': {
if (!ext)return reply(`Contoh : ${prefix+ command} 28, 12, 2021`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Lahir :* ${anu.message.hari_lahir}\n• *Usaha :* ${anu.message.usaha}`)
}
break
case 'rejeki': case 'rezeki': {
if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Lahir :* ${anu.message.hari_lahir}\n• *Rezeki :* ${anu.message.rejeki}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'pekerjaan': {
if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Lahir :* ${anu.message.hari_lahir}\n• *Pekerjaan :* ${anu.message.pekerjaan}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'ramalannasib': case 'ramalnasib': case 'nasib': {
if (!text) return reply(`Contoh : 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.ramalan_nasib(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Analisa :* ${anu.message.analisa}\n• *Angka Akar :* ${anu.message.angka_akar}\n• *Sifat :* ${anu.message.sifat}\n• *Elemen :* ${anu.message.elemen}\n• *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`)
}
break
case 'potensipenyakit': case 'penyakit': {
if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Analisa :* ${anu.message.analisa}\n• *Sektor :* ${anu.message.sektor}\n• *Elemen :* ${anu.message.elemen}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'artitarot': case 'tarot': {
if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
NanoBotz.sendImage(m.chat, anu.message.image, `• *Lahir :* ${anu.message.tgl_lahir}\n• *Simbol Tarot :* ${anu.message.simbol_tarot}\n• *Arti :* ${anu.message.arti}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'fengshui': {
if (!text) return `Contoh : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
let [nama, gender, tahun] = text.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tahun_lahir}\n• *Gender :* ${anu.message.jenis_kelamin}\n• *Angka Kua :* ${anu.message.angka_kua}\n• *Kelompok :* ${anu.message.kelompok}\n• *Karakter :* ${anu.message.karakter}\n• *Sektor Baik :* ${anu.message.sektor_baik}\n• *Sektor Buruk :* ${anu.message.sektor_buruk}`)
}
break
case 'haribaik': {
if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.petung_hari_baik(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Lahir :* ${anu.message.tgl_lahir}\n• *Kala Tinantang :* ${anu.message.kala_tinantang}\n• *Info :* ${anu.message.info}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'harisangar': case 'taliwangke': {
if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Lahir :* ${anu.message.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Info :* ${anu.message.info}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'harinaas': case 'harisial': {
if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Hari Lahir :* ${anu.message.hari_lahir}\n• *Tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Hari Naas :* ${anu.message.hari_naas}\n• *Info :* ${anu.message.catatan}\n• *Catatan :* ${anu.message.info}`)
}
break
case 'nagahari': case 'harinaga': {
if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Hari Lahir :* ${anu.message.hari_lahir}\n• *Tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'arahrejeki': case 'arahrezeki': {
if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Hari Lahir :* ${anu.message.hari_lahir}\n• *tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Arah Rezeki :* ${anu.message.arah_rejeki}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'peruntungan': {
if (!text) return reply(`Contoh : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
let [nama, tgl, bln, thn, untuk] = text.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'weton': case 'wetonjawa': {
if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Tanggal :* ${anu.message.tanggal}\n• *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n• *Watak Hari :* ${anu.message.watak_hari}\n• *Naga Hari :* ${anu.message.naga_hari}\n• *Jam Baik :* ${anu.message.jam_baik}\n• *Watak Kelahiran :* ${anu.message.watak_kelahiran}`)
}
break
case 'sifat': case 'karakter': {
if (!text) return reply(`Contoh : ${prefix + command} Dika, 7, 7, 2005`)
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Garis Hidup :* ${anu.message.garis_hidup}`)
}
break
case 'keberuntungan': {
if (!text) return reply(`Contoh : ${prefix + command} Dika, 7, 7, 2005`)
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Hasil :* ${anu.message.result}`)
}
break
case 'memancing': {
if (!text) return reply(`Contoh : ${prefix + command} 12, 1, 2022`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Tanggal :* ${anu.message.tgl_memancing}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'masasubur': {
if (!text) return reply(`Contoh : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`)
let [tgl, bln, thn, siklus] = text.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return reply(anu.message)
reply(`• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'zodiak': case 'zodiac': {
if (!text) return reply(`Contoh : ${prefix+ command} 7 7 2005`)
let zodiak = [
["capricorn", new Date(1970, 0, 1)],
["aquarius", new Date(1970, 0, 20)],
["pisces", new Date(1970, 1, 19)],
["aries", new Date(1970, 2, 21)],
["taurus", new Date(1970, 3, 21)],
["gemini", new Date(1970, 4, 21)],
["cancer", new Date(1970, 5, 22)],
["leo", new Date(1970, 6, 23)],
["virgo", new Date(1970, 7, 23)],
["libra", new Date(1970, 8, 23)],
["scorpio", new Date(1970, 9, 23)],
["sagittarius", new Date(1970, 10, 22)],
["capricorn", new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
let date = new Date(text)
if (date == 'Invalid Date') return date
let d = new Date()
let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

let zodiac = await getZodiac(birth[1], birth[2])

let anu = await primbon.zodiak(zodiac)
if (anu.status == false) return reply(anu.message)
reply(`• *Zodiak :* ${anu.message.zodiak}\n• *Nomor :* ${anu.message.nomor_keberuntungan}\n• *Aroma :* ${anu.message.aroma_keberuntungan}\n• *Planet :* ${anu.message.planet_yang_mengitari}\n• *Bunga :* ${anu.message.bunga_keberuntungan}\n• *Warna :* ${anu.message.warna_keberuntungan}\n• *Batu :* ${anu.message.batu_keberuntungan}\n• *Elemen :* ${anu.message.elemen_keberuntungan}\n• *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'shio': {
if (!text) return reply(`Contoh : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`)
let anu = await primbon.shio(text)
if (anu.status == false) return reply(anu.message)
reply(`• *Hasil :* ${anu.message}`)
}
break


// ───────────────────────────────────────────────────────────────────────────────乂 🥀 FUN MENU ───────────────────────────────────────────────────────────────乂 \\
case 'apakah': {
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul','Kagak tau gw 🗿','Kenapa tanya gw?🗿','Maleslah mau makan dulu']
const kah = apa[Math.floor(Math.random() * apa.length)]
m.reply(`Pertanyaan : Apakah ${q}\nJawaban : ${kah}`)
}
break
case 'bisakah': {
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya menjadi presiden`)
const bisa = ['Bisa', 'Gak Bisa', 'Gak Bisa Ajg Aaokawpk', 'TENTU PASTI KAMU BISA!!!!']
const ga = bisa[Math.floor(Math.random() * bisa.length)]
m.reply(`Pertanyaan : Apakah ${q}\nJawaban : ${ga}`)
}
break
case 'bagaimanakah': {
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} cara mengatasi sakit hati`)
const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel', 'astaghfirallah Beneran???', 'Pusing ah', 'Owhh Begitu:(', 'Gimana yeee']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
m.reply(`Pertanyaan : Apakah ${q}\nJawaban : ${ya}`)
}
break
case 'rate': {
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
const ra = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
const te = ra[Math.floor(Math.random() * ra.length)]
m.reply(`Rate : ${q}\nJawaban : *${te}%*`)
}
break
case 'gantengcek': case 'cekganteng': {
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Owner`)
const gan = ['10% banyak" perawatan ya bang:v\nCanda Perawatan:v','30% Semangat bang Merawat Dirinya><','20% Semangat Ya bang👍','40% Wahh bang><','50% abang Ganteng deh><','60% Hai Ganteng🐊','70% Hai Ganteng🐊','62% Bang Ganteng><','74% abang ni ganteng deh><','83% Love You abang><','97% Assalamualaikum Ganteng🐊','100% Bang Pake Susuk ya??:v','29% Semangat Bang:)','94% Hai Ganteng><','75% Hai Bang Ganteng','82% wihh abang Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
const teng = gan[Math.floor(Math.random() * gan.length)]
m.reply(`Nama : ${q}\nJawaban : *${teng}*`)
}
break           
case 'cantikcek': case 'cekcantik': {
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Lisaa`)
const can = ['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya Kaka👍','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai Cantik🐊','70% Hai Ukhty🐊','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum Ukhty🐊','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
const tik = can[Math.floor(Math.random() * can.length)]
m.reply(`Nama : ${q}\nJawaban : *${tik}*`)
}
break
case 'cekhitam': case 'hitamcek': {
    ;
    if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Lisaa`);
    
    // Jika nama adalah "rifvky", langsung 100% hitam
    if (q.toLowerCase() === 'yann') {
        m.reply(`Nama : ${q}\nJawaban : *100% Wah Awoaowowow ireng bet*`);
    } else {
        const can = ['10% Yahaha Hitam Lawak Hitam wkwkw Hitam', 
                     '30% Semangat Kaka Merawat Dirinya><', 
                     '20% Semangat Ya Kaka👍', 
                     '40% Wahh Kaka><', 
                     '50% Kaka Hitam deh><', 
                     '60% Hai Hitam🐊', 
                     '70% Hai Ukhty🐊', 
                     '62% Kakak Hitam><', 
                     '74% Kakak ni Hitam deh><', 
                     '83% Love You Kakak><', 
                     '97% Assalamualaikum Ukhty🐊', 
                     '100% Wah Awoaowowow ireng bet', 
                     '29% Semangat Kakak:)', 
                     '94% Hai Hitam><', 
                     '75% Hai Kakak Hitam', 
                     '82% Wihh Kakak Pasti Sering Perawatan kan??', 
                     '41% Semangat:)', 
                     '39% Lebih Semangat🐊'];
        
        const tik = can[Math.floor(Math.random() * can.length)];
        m.reply(`Nama : ${q}\nJawaban : *${tik}*`);
    }
    ;
}
break;
            case 'chindo':
            case 'cina':
            case 'china':
            case 'papua':
            case 'jawa':
            case 'sunda':
            case 'bego':
            case 'goblok':
            case 'janda':
            case 'perawan':
            case 'babi':
            case 'ganteng':
            case 'tolol':
            case 'cantik':
            case 'duda':
            case 'pinter':
            case 'pintar':
            case 'asu':
            case 'bodoh':
            case 'gay':
            case 'lesby':
            case 'bajingan':
            case 'jancok':
            case 'anjing':
            case 'ngentod':
            case 'ngentot':
            case 'monyet':
            case 'mastah':
            case 'newbie':
            case 'nolep':
            case 'lesbi':
            case 'bangsat':
            case 'bangke':
            case 'sange':
            case 'sangean':
            case 'dakjal':
            case 'horny':
            case 'wibu':
            case 'yapit':
            case 'anj':
            case 'puki':
            case 'peak':
            case 'pantex':
            case 'pantek':
            case 'setan':
            case 'iblis':
            case 'cacat':
            case 'yatim':
            case 'piatu': {
                if (!m.isGroup) return reply(mess.group)
                let member = participants.map(u => u.id).filter(v => v !== conn.user.jid)
                let org = member[Math.floor(Math.random() * member.length)];
                conn.sendMessage(m.chat, {
                    text: `orang ${command} disini adalah @${org.split('@')[0]}`,
                    contextInfo: {
                        mentionedJid: [m.sender, org],
                        forwardingScore: 9999999,
                        isForwarded: true,
                        "externalAdReply": {
                            "showAdAttribution": true,
                            "containsAutoReply": true,
                            "title": ` ${command} yang di tag`,
                            "body": `hiburan:)`,
                            "previewType": "PHOTO",
                            "thumbnailUrl": ` `,
                            "thumbnailUrl": ` `,
                            "sourceUrl": ` `
                        }
                    }
                }, {
                    quoted: m
                })
            }
            break;
                        case 'sangecek':
            case 'ceksange':
            case 'gaycek':
            case 'cekgay':
            case 'lesbicek':
            case 'ceklesbi': {
                if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Lisaa`)
                const sangeh = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
                const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
                reply(`Nama : ${q}\nJawaban : *${sange}%*`)
            }
            break
            case 'kapankah': {
                if (!q) return reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
                const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi', '20 Hari Lagi', '25 Hari Lagi', '30 Hari Lagi', '35 Hari Lagi', '40 Hari Lagi', '45 Hari Lagi', '50 Hari Lagi', '55 Hari Lagi', '60 Hari Lagi', '65 Hari Lagi', '70 Hari Lagi', '75 Hari Lagi', '80 Hari Lagi', '85 Hari Lagi', '90 Hari Lagi', '95 Hari Lagi', '100 Hari Lagi', '5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi', '20 Bulan Lagi', '25 Bulan Lagi', '30 Bulan Lagi', '35 Bulan Lagi', '40 Bulan Lagi', '45 Bulan Lagi', '50 Bulan Lagi', '55 Bulan Lagi', '60 Bulan Lagi', '65 Bulan Lagi', '70 Bulan Lagi', '75 Bulan Lagi', '80 Bulan Lagi', '85 Bulan Lagi', '90 Bulan Lagi', '95 Bulan Lagi', '100 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', 'Besok', 'Lusa', `Abis Command Ini Juga Lu ${q}`]
                const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
                reply(`Pertanyaan : ${q}\nJawaban : *${kapankah}*`)
            }
            break
            case 'wangy': {
                if (!q) return reply(`Contoh : ${prefix}wangy Ditss`)
                qq = q.toUpperCase()
                awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
                reply(awikwok)
            }
            break
            case 'marahi-ripper':
            case 'ripper': {
                if (!q) return warning(`Contoh : ${prefix}marahi-ripper Asuma`)
                qq = q.toUpperCase()
                awikwok = `${qq} ${qq} ${qq} NAMA KONTOL ITU PANTEK, ANJING LO DASAR ${qq}, UANG RECEH DIEMBAT DASAR BAJINGAN, PUNYA INDUK GA SIH? ${qq} WOY RIPPER YATIM ${qq} GA TAKUT APA AMA TUHAN LU ANJINGLO MEMEK KONTOL. APALAGI NGE JB KEK ORANG MISKIN GA GUNA 😹😹😹, ${qq}² SEBENARNYA GW *MALU JADI LO*.... TAU GA SIH, ${qq}. UANG HASIL BEGITUAN GA HIKMAH 😹😹. MAU DICERAMAHIN?. DICERAMAHI KOK SAMA BOT DASAR YATIM ${qq}.`
                reply(awikwok)
            }
            break 
            
            
// ───────────────────────────────────────────────────────────────────────────────乂 🥀 RANDOM MENU ───────────────────────────────────────────────────────────────乂 \\            
case 'tiktokgirl':
reply('Tunggu')
asupan = JSON.parse(fs.readFileSync('./database/tiktok/tiktokgirl.json'))
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)];
}
hasil = pickRandom(asupan)
conn.sendMessage(m.chat, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m })
break

case 'tiktokghea':
reply('Tunggu')
asupan = JSON.parse(fs.readFileSync('./database/tiktok/gheayubi.json'))
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)];
}
hasil = pickRandom(asupan)
conn.sendMessage(m.chat, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m })
break

case 'tiktoknukhty':
reply('Tunggu')
asupan = JSON.parse(fs.readFileSync('./database/tiktok/ukhty.json'))
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)];
}
hasil = pickRandom(asupan)
conn.sendMessage(m.chat, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m })
break

case 'tiktoksantuy':
reply('Tunggu')
asupan = JSON.parse(fs.readFileSync('./database/tiktok/santuy.json'))
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)];
}
hasil = pickRandom(asupan)
conn.sendMessage(m.chat, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m })
break

case 'tiktokkayes':
reply('Tunggu')
asupan = JSON.parse(fs.readFileSync('./database/tiktok/kayes.json'))
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)];
}
hasil = pickRandom(asupan)
conn.sendMessage(m.chat, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m })
break

case 'tiktokpanrika':
reply('Tunggu')
asupan = JSON.parse(fs.readFileSync('./database/tiktok/panrika.json'))
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)];
}
hasil = pickRandom(asupan)
conn.sendMessage(m.chat, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m })
break

case 'tiktoknotnot':
reply('Tunggu')
asupan = JSON.parse(fs.readFileSync('./database/tiktok/notnot.json'))
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)];
}
hasil = pickRandom(asupan)
conn.sendMessage(m.chat, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m })
break
case 'hijab':

var notnot = JSON.parse(fs.readFileSync('./database/RImage/tiktokpics/hijab.json'))
var iiiiiiiiiii = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiii.url } }, { quoted: m })
break

case 'indo':

var notnot = JSON.parse(fs.readFileSync('./database/RImage/tiktokpics/indonesia.json'))
var iiiiiiiiiiii = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiii.url } }, { quoted: m })
break
case 'japanese':

var notnot = JSON.parse(fs.readFileSync('./database/RImage/tiktokpics/japan.json'))
var iiiiiiiiiiiii = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiii.url } }, { quoted: m })
break
case 'korean':

var notnot = JSON.parse(fs.readFileSync('./database/RImage/tiktokpics/korea.json'))
var iiiiiiiiiiiiii = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'malay':

var notnot = JSON.parse(fs.readFileSync('./database/RImage/tiktokpics/malaysia.json'))
var iiiiiiiiiiiiiii = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'randomgirl':

var notnot = JSON.parse(fs.readFileSync('./database/RImage/tiktokpics/random.json'))
var iiiiiiiiiiiiiiii = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'randomboy':

var notnot = JSON.parse(fs.readFileSync('./database/RImage/tiktokpics/random2.json'))
var iiiiiiiiiiiiiiiii = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'thai':

var notnot = JSON.parse(fs.readFileSync('./database/RImage/tiktokpics/thailand.json'))
var iiiiiiiiiiiiiiiiii = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'vietnamese':

var notnot = JSON.parse(fs.readFileSync('./database/RImage/tiktokpics/vietnam.json'))
var iiiiiiiiiiiiiiiiiii = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'aesthetic':

var notnot = JSON.parse(fs.readFileSync('./database/RImage/randompics/aesthetic.json'))
var iiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'antiwork':

var notnot = JSON.parse(fs.readFileSync('./database/RImage/randompics/antiwork.json'))
var iiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'blackpink2':

var notnot = JSON.parse(fs.readFileSync('./database/RImage/randompics/blackpink.json'))
var iiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'bike':

var notnot = JSON.parse(fs.readFileSync('./database/RImage/randompics/bike.json'))
var iiiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'boneka':

var notnot = JSON.parse(fs.readFileSync('./database/RImage/randompics/boneka.json'))
var iiiiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'cosplay':

var notnot = JSON.parse(fs.readFileSync('./database/RImage/randompics/cosplay.json'))
var iiiiiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'cat':

var notnot = JSON.parse(fs.readFileSync('./database/RImage/randompics/cat.json'))
var iiiiiiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'doggo':

var notnot = JSON.parse(fs.readFileSync('./database/RImage/randompics/doggo.json'))
var iiiiiiiiiiiiiiiiiiiiiiiiiil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiiiiiiil.url } }, { quoted: m })
break
case 'justina':

var notnot = JSON.parse(fs.readFileSync('./database/RImage/randompics/justina.json'))
var iiiiiiiiiiiiiiiiiiiiiiiiiill = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiiiiiiill.url } }, { quoted: m })
break

case 'kayes':

var notnot = JSON.parse(fs.readFileSync('./database/RImage/randompics/kayes.json'))
var iiiiiiiiiiiiiiiiiiiiiiiiiilll = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiiiiiiilll.url } }, { quoted: m })
break
case 'kpop':

var notnot = JSON.parse(fs.readFileSync('./database/RImage/randompics/kpop.json'))
var ll = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: 'don banh', image: { url: ll.url } }, { quoted: m })
break
case 'notnot':

var notnot = JSON.parse(fs.readFileSync('./database/RImage/randompics/notnot.json'))
var lll = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: 'don banh', image: { url: lll.url } }, { quoted: m })
break

case 'ttsanime': {
  if (!q) return m.reply('Masukkan teksnya!\nContoh: .ttsanime aku suka ramen');

  try {
    const res = await fetch(`https://flowfalcon.dpdns.org/tools/text-to-speech?text=${encodeURIComponent(q)}`);
    const json = await res.json();
    if (!json.status || !json.result) return m.reply('Gagal generate suara.');
    for (const voice of json.result) {
      const name = voice.voice_name;
      const voiceId = voice.voice_id;
      const url = Object.values(voice).find(v => typeof v === 'string' && v.startsWith('https'));
      if (url) {
        await conn.sendMessage(m.chat, {
          audio: { url },
          mimetype: 'audio/mp4',
          ptt: true,
          contextInfo: {
            externalAdReply: {
              title: `Voice: ${name}`,
              body: `Voice ID: ${voiceId}`,
              renderLargerThumbnail: true,
              mediaType: 2,
              mediaUrl: url,
              thumbnailUrl: '-', 
              sourceUrl: 'https://flowfalcon.dpdns.org/tools/text-to-speech'
            }
          }
        }, { quoted: m });
        await delay(1000); 
      }
    }
  } catch (err) {
    console.error(err);
    m.reply('Terjadi kesalahan saat memproses TTS.');
  }
}
break


// ───────────────────────────────────────────────────────────────────────────────乂 🥀 AI MENU ───────────────────────────────────────────────────────────────乂 \\            
case 'detailfoto': case "telusuriimg": {
 if (!m.quoted) return m.reply('Harap balas ke foto yang ingin dianalisis + pertanyaaan,gk pke pertanyaan gpp');
 let mime = (m.quoted.msg || m.quoted).mimetype || "";
 if (!mime.startsWith('image/')) return m.reply(`Kirim/Balas foto dengan caption ${prefix + command}\n\nExample: grok itu apa dengan reply foto`);
 const axios = require('axios');
 const FormData = require('form-data');
 const { writeFileSync, unlinkSync, createReadStream } = require('fs');
 const path = require('path');
 async function uguu(filePath) {
 try {
 const form = new FormData();
 form.append('files[]', createReadStream(filePath));
 const { data } = await axios.post('https://uguu.se/upload', form, {
 headers: { ...form.getHeaders() }
 });
 return data.files[0].url;
 } catch (err) {
 throw new Error(err.message);
 }
 }
 try {
 await conn.sendMessage(m.chat, { react: { text: '⏱️', key: m.key } });
 let mediaBuffer = await m.quoted.download();
 let ext = mime.split('/')[1] || "png";
 let tempFile = path.join(__dirname, `temp_${Date.now()}.${ext}`);
 writeFileSync(tempFile, mediaBuffer);
 let imageUrl = await uguu(tempFile);
 let pertanyaan = m.text.replace(`${prefix}${command}`, '').trim();
 if (!pertanyaan) return m.reply('Tolong masukkan pertanyaan');
 let sessionId = `${m.chat.replace(/[^a-zA-Z0-9]/g, '')}-${Date.now()}`;
 let apiUrl = `https://fastrestapis.fasturl.cloud/aillm/grok?ask=${encodeURIComponent(pertanyaan)}&imageUrl=${imageUrl}&style=Provide a formal response.&sessionId=${sessionId}`;
 let { data } = await axios.get(apiUrl);
 let result = data.result;
 await conn.sendMessage(m.chat, { text: result }, { quoted: m });
 await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
 unlinkSync(tempFile);
 } catch (error) {
 console.error('Error ini:', error);
 m.reply('Maaf, terjadi kesalahan saat memproses gambar. Silakan coba lagi nanti atau hubungi pemilik bot jika masalah berlanjut.');
 }
}
break
case 'aiedit': {
  if (!m.quoted) return reply(`Kirim atau Reply Foto dengan caption *${prefix + command}*`);
  let mime = (m.quoted.msg || m.quoted).mimetype || '';
  if (!/image/.test(mime)) return reply(`Kirim atau Reply Foto dengan caption *${prefix + command}*`);
  
  if (!args.join(' ')) return reply('Kirim atau Reply Foto dan sertakan prompt kustom di caption!');

  const prompt = encodeURIComponent(args.join(' ')); // Mengambil prompt dari argumen
  reply(mess.wait);
  
  const tempFile = path.join(__dirname, `temp_${Date.now()}.jpg`);

  try {
    let media = await m.quoted.download();
    fs.writeFileSync(tempFile, media);

    const uploadFileToUguu = async (filePath) => {
      return new Promise((resolve, reject) => {
        exec(`curl -s -F files[]=@${filePath} https://uguu.se/upload.php`, (err, stdout) => {
          if (err) return reject('Gagal mengunggah ke Uguu');
          try {
            let json = JSON.parse(stdout);
            resolve(json.files[0].url);
          } catch {
            reject('Gagal mengunggah ke Uguu');
          }
        });
      });
    };

    let uploadedUrl = await uploadFileToUguu(tempFile);
    let aiEditApi = `https://apizell.web.id/ai/editimg?imageUrl=${encodeURIComponent(uploadedUrl)}&prompt=${prompt}`;

    await conn.sendMessage(m.chat, {
      image: { url: aiEditApi },
      caption: '✅ Berikut hasil editan AI-mu!'
    }, { quoted: m });

    fs.unlinkSync(tempFile);
  } catch (e) {
    console.error(e);
    reply('Terjadi kesalahan saat memproses gambar.');
  }
}
break;

case "maouai": {
    if (!q) {
        return m.reply(`*Contoh:* ${command} siapa kamu?`);
    }

    const customName = "maou AI"; 
    const creator = "maourafa";
    const systemMessage = `Nama kamu sekarang adalah ${customName} dan kamu diciptakan oleh ${creator} Kamu Di Ciptakan Untuk Membantu, Menemani Dan Tempat Untuk Curhat`;

    const url = "https://velyn.biz.id/api/ai/aicustom";

    try {
        const response = await axios.get(url, {
            params: {
                prompt: q,
                system: systemMessage
            }
        });

        if (response.data && response.data.data) {
            conn.sendMessage(m.chat, { text: response.data.data }, { quoted: m });
        } else {
            throw new Error("Tidak ada respon dari API.");
        }
    } catch (error) {
        console.error("Error AI:", error);
        m.reply("Maaf, terjadi kesalahan saat menghubungi AI.");
    }
};
break
 case "ainsfw": {
 if (!text) return m.reply("Silakan masukkan prompt untuk menghasilkan gambar.");
 async function generateImage(prompt) {
 try {
 const url = `https://1yjs1yldj7.execute-api.us-east-1.amazonaws.com/default/ai_image?prompt=${encodeURIComponent(prompt)}&aspect_ratio=1:1&link=writecream.com`;
 const headers = {
 "User-Agent":
 "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36",
 "Referer": "https://www.writecream.com/ai-image-generator-free-no-sign-up/",
 };
 const axios = require("axios");
 const response = await axios.get(url, { headers });
 if (response.data && response.data.image_link) {
 conn.sendMessage(m.chat, { image: { url: response.data.image_link }, caption: `Berikut gambar untuk: *${text}*` }, { quoted: m });
 } else {
 m.reply("Gagal mendapatkan gambar.");
 }
 } catch (error) {
 m.reply("Terjadi kesalahan saat mengambil gambar.");
 console.error(error);
 }
 }
 generateImage(text);
}
 break
case 'deepimg': {
 if (!text) return m.reply("Masukkan prompt gambar.")
 m.reply("Sedang memproses gambar, mohon tunggu...")

 try {
const axios = require('axios');
 let { data } = await axios.post("https://api-preview.chatgot.io/api/v1/deepimg/flux-1-dev", {
 prompt: text,
 size: "1024x1024",
 device_id: `dev-${Math.floor(Math.random() * 1000000)}`
 }, {
 headers: {
 "Content-Type": "application/json",
 Origin: "https://deepimg.ai",
 Referer: "https://deepimg.ai/"
 }
 })
 let imageUrl = data?.data?.images?.[0]?.url
 if (!imageUrl) return m.reply("Gagal membuat gambar. Coba ganti promptnya.")
 await conn.sendMessage(m.chat, { 
 image: { url: imageUrl }, 
 caption: `🖼️ *Gambar Berhasil Dibuat!*\n📜 *Prompt:* ${text}` 
 }, { quoted: m })
 } catch (err) {
 console.error(err.response ? err.response.data : err.message)
 m.reply("Terjadi kesalahan saat memproses gambar.")
 }
}
break


// ───────────────────────────────────────────────────────────────────────────────乂 🥀 TXT UNBAN MENU ───────────────────────────────────────────────────────────────乂 \\            
case 'textunbanv1':
if (!isCreator) return reply(`Sok asik bangsat`);
const vaga = ` ${textunbanv1}`
reply(vaga)
break
case 'textunbanv2':
if (!isCreator) return reply(`Sok asik bangsat`);
const bandar = ` ${textunbanv2}`
reply(bandar)
break
case 'textunbanv3':
if (!isCreator) return reply(`Sok asik bangsat`);
const masokpakeok = ` ${textunbanv3}`
reply(masokpakeok)
break
case 'textunbanv4':
if (!isCreator) return reply(`Sok asik bangsat`);
const typo = ` ${textunbanv4}`
reply(typo)
break
case 'textunbanv5':
if (!isCreator) return reply(`Sok asik bangsat`);
const sokasim = ` ${textunbanv5}`
reply(sokasim)
break
case 'textunbanv6':
if (!isCreator) return reply(`Sok asik bangsat`);
const akakaka = ` ${textunbanv6}`
reply(akakaka)
break
case 'textunbanv7':
if (!isCreator) return reply(`Sok asik bangsat`);
const kopok = ` ${textunbanv7}`
reply(kopok)
break
case 'textunbanv8':
if (!isCreator) return reply(`Sok asik bangsat`);
const tehyung = ` ${textunbanv8}`
reply(tehyung)
break
case 'textunbanv9':
if (!isCreator) return reply(`Sok asik bangsat`);
const ahhyan = ` ${textunbanv9}`
reply(ahhyan)
break
case 'textunbanv10':
if (!isCreator) return reply(`Sok asik bangsat`);
const yamete = ` ${textunbanv10}`
reply(yamete)
break
case 'textunbanv11':
if (!isCreator) return reply(`Sok asik bangsat`);
const suuu = ` ${textunbanv11}`
reply(suuu)
break
case 'textunbanv12':
if (!isCreator) return reply(`Sok asik bangsat`);
const huuuu = ` ${textunbanv12}
huuu`
reply(huuuu)
break
case 'textunbanv13':
if (!isCreator) return reply(`Sok asik bangsat`);
const gaje = ` ${textunbanv13}`
reply(gaje)
break
case 'textunbanv14':
if (!isCreator) return reply(`Sok asik bangsat`);
const well = ` ${textunbanv14}`
reply(well)
break
case 'textunbanv15':
if (!isCreator) return reply(`Sok asik bangsat`);
const lempo = ` ${textunbanv15}`
reply(lempo)
break
case 'textunbanv16':
if (!isCreator) return reply(`Sok asik bangsat`);
const cok = ` ${textunbanv16}`
reply(cok)
break
case 'textunbanv17':
if (!isCreator) return reply(`Sok asik bangsat`);
const sayasuka = ` ${textunbanv17}`
reply(sayasuka)
break
case 'textunbanv18':
if (!isCreator) return reply(`Sok asik bangsat`);
const oooooooo= ` ${textunbanv18}`
reply(oooooooo)
break
case 'textunbanv19':
if (!isCreator) return reply(`Sok asik bangsat`);
const omaaavaaaaaaaa = ` ${textunbanv19}`
reply(omaaavaaaaaaaa)
break
case 'textunbanv20':
if (!isCreator) return reply(`Sok asik bangsat`);
const bykepo = ` ${textunbanv20}`
reply(bykepo)
break
case 'textunbanv21':
if (!isCreator) return reply(`Sok asik bangsat`);
const unbannned = ` ${textunbanv21}`
reply(unbannned)
break
case 'textunbanpremv1':
if (!isCreator) return reply(`Sok asik bangsat`);
const premi = ` ${textunbanpremv1}`
reply(premi)
break
case 'textunbanpremv2':
if (!isCreator) return reply(`Sok asik bangsat`);
const kelasss = ` ${textunbanpremv2}`
reply(kelasss)
break
case 'textunbanpremv3':
if (!isCreator) return reply(`Sok asik bangsat`);
const eek = ` ${textunbanpremv3}`
reply(eek)
break


// ───────────────────────────────────────────────────────────────────────────────乂 🥀 ANONYMOUD MENU ───────────────────────────────────────────────────────────────乂 \\    
case 'menfes': {
  if (!text.includes('|')) return reply('Format Salah! Contoh: .menfes @tag|Nama Kamu|Isi Pesan');

  let [tujuanTag, namaSamaran, isiPesan] = text.split('|');
  let tujuan = tujuanTag.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

  if (!tujuan || !namaSamaran || !isiPesan) return reply('Semua Kolom Wajib Diisi!');

  let pengirim = m.sender;

  let pesan = `*📩 Pesan Menfes*\nDari: *${namaSamaran}*\nUntuk: @${tujuan.split('@')[0]}\n\n_${isiPesan}_\n\nBalas Menfes Ini Pakai Perintah:\n.balasmenfes isi_balasannya\n\n#menfes_from:${pengirim}`;

  await conn.sendMessage(tujuan, {
    text: pesan,
    mentions: [tujuan],
    contextInfo: {
      externalAdReply: {
        title: 'Menfes Message',
        body: `Pesan Rahasia Dari ${namaSamaran}`,
        mediaType: 1,
        sourceUrl: '',
        renderLargerThumbnail: true
      }
    }
  });

  reply(`Sukses Mengirim Menfes Ke @${tujuan.split('@')[0]}`, { mentions: [tujuan] });
}
break;
case 'balasmenfes': {
  if (!m.quoted) return reply('Balas Menfes Nya!');
  if (!text) return reply('Mana Isi Balasannya');

  let tag = m.quoted?.text?.match(/#menfes_from:(\d{5,})@?/)
  if (!tag) return reply('Gagal Mengambil Pengirim Asli! Menfes Tidak Valid Atau Tidak Ada Tag.');

  let jid = `${tag[1]}@s.whatsapp.net`;

  await conn.sendMessage(jid, {
    text: `*📩 Balasan Menfes*\nDari: @${m.sender.split('@')[0]}\n\n_${text}_`,
    mentions: [m.sender]
  });

  reply('Sukses Mengirim Balasan Menfes!');
}
break;        
case 'request':
case 'saran': {
if (!text) return m.reply('Berikan Penjelasan, Apa Yang Ingin Kamu Sarankan.');

let nomor = m.sender.split('@')[0];
permintaan[nomor] = {
  text: text,
  timestamp: new Date(),
  msgId: m.key.id,
  jid: m.key.remoteJid
};
fs.writeFileSync('./database/permintaan.json', JSON.stringify(permintaan, null, 2));
conn.sendMessage("6285789987714@s.whatsapp.net", {
  text: `Request Baru\nNomor: ${nomor}\nTeks: ${text}`
}, {quoted: m});
await m.reply('Permintaan Berhasil Terkirim!');
}
break;
case 'lapor':
case 'report': {
if (!text) return m.reply('Berikan Penjelasan, Bug Apa Yang Kamu Temui');

let nomor = m.sender.split('@')[0];
laporan[nomor] = {
  text: text,
  timestamp: new Date(),
  msgId: m.key.id,
  jid: m.key.remoteJid
};
fs.writeFileSync('./database/laporan.json', JSON.stringify(laporan, null, 2));
conn.sendMessage("6285789987714@s.whatsapp.net", {
  text: `*Laporan Baru*\nNomor: ${nomor}\nTeks: ${text}`
}, {quoted: m});
await m.reply('Laporan Berhasil Terkirim!');
}
break;
case 'balas':
case 'reply': {
let nomor = text.split(' ')[0];
let pesan = text.split(' ').slice(1).join(' ');

if (!laporan[nomor] && !permintaan[nomor]) return m.reply('Nomor Tidak Ditemukan Dalam Laporan Atau Request');

let target = laporan[nomor] || permintaan[nomor];
let jid = nomor + '@s.whatsapp.net';
let quoted = {
  key: {
    remoteJid: target.jid,
    id: target.msgId,
    fromMe: false,
    participant: jid
  },
  message: {
    conversation: target.text
  }
};

conn.sendMessage(jid, {text: `Balasan Dari Owner:\n${pesan}`}, {quoted});
m.reply('Balasan Berhasil Dikirim Dan Dihapus!');
if (laporan[nomor]) delete laporan[nomor];
if (permintaan[nomor]) delete permintaan[nomor];
fs.writeFileSync('./database/laporan.json', JSON.stringify(laporan, null, 2));
fs.writeFileSync('./database/permintaan.json', JSON.stringify(permintaan, null, 2));
}
break;
case 'laporan':
case 'reports': {
let teks = 'Laporan Yang Belum Dibalas:\n\n';
for (let no in laporan) {
teks += `Nomor: ${no}\nTeks: ${laporan[no].text}\nWaktu: ${laporan[no].timestamp}\n\n`;
}
m.reply(teks || 'Tidak Ada Laporan.');
}
break;
case 'cekrequest':
case 'ceksaran': {
let teks = 'Permintaan Yang Belum Dibalas:\n\n';
for (let no in permintaan) {
teks += `Nomor: ${no}\nTeks: ${permintaan[no].text}\nWaktu: ${permintaan[no].timestamp}\n\n`;
}
m.reply(teks || 'Tidak Ada Permintaan.');
}
break;
case 'hapuslaporan':
case 'delreports': {
if (!text) return m.reply('Masukkan Nomor Yang Ingin Dihapus!');
if (!laporan[text]) return m.reply('Laporan Tidak Ditemukan.');
delete laporan[text];
fs.writeFileSync('./database/laporan.json', JSON.stringify(laporan, null, 2));
m.reply('Laporan Berhasil Dihapus!');
}
break;


// ───────────────────────────────────────────────────────────────────────────────乂 🥀 STORE MENU ───────────────────────────────────────────────────────────────乂 \\    
  case 'addlist':
    {
      if (!text.includes('|')) return m.reply('Contoh:\n.addlist item | 10000');
      let [nama, harga] = text.split('|').map(a => a.trim());
      if (!nama || !harga) return m.reply('Format salah. Contoh: .addlist Pulsa 10k | 10000');

      if (!storeDB[m.sender]) storeDB[m.sender] = [];
      storeDB[m.sender].push({ nama, harga });
      await saveStore();
      m.reply(`✅ Berhasil menambahkan:\n*${nama}* seharga *Rp${harga}*`);
    }
    break;

  case 'dellist':
    {
      if (!text) return m.reply('Contoh:\n.dellist 1');
      let index = parseInt(text) - 1;
      let userStore = storeDB[m.sender];

      if (!userStore || userStore.length === 0) return m.reply('Kamu belum punya list jualan.');
      if (isNaN(index) || index < 0 || index >= userStore.length) return m.reply('Nomor list tidak valid.');

      let removed = userStore.splice(index, 1);
      await saveStore();
      m.reply(`✅ Berhasil menghapus: *${removed[0].nama}*`);
    }
    break;

  case 'list':
    {
      let target = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
      let userStore = storeDB[target];

      if (!userStore || userStore.length === 0) return m.reply('List jualan kosong.');

      let list = userStore.map((item, i) => `*${i + 1}.* ${item.nama} - Rp${item.harga}`).join('\n');
      m.reply(`🛒 Daftar Jualan:\n\n${list}`);
    }
    break;
case "proses": {
if (!isCreator) return reply(mess.creator)
if (!q) return reply("jasa install panel")
let teks = `📦 ${text}
⏰ ${tanggal(Date.now())}

*Testimoni :*
${cehs}`
await conn.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: `Dana Masuk ✅`, 
body: `© Powered By ${ownerName}`, 
thumbnailUrl: "https://files.catbox.moe/ugopqb.jpg", 
sourceUrl: ``,
}}}, {quoted: null})
}
break

case 'done': {
if (!isCreator) return reply(mess.creator)
if (!q) return reply("jasa install panel")
let teks = `📦 ${text}
⏰ ${tanggal(Date.now())}

*Testimoni :*
${ceha}`
await conn.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: `Transaksi Done ✅`, 
body: `© Powered By ${ownerName}`, 
thumbnailUrl: 'https://img0.pixhost.to/images/919/557813345Kyyhstdzz.jpg', 
sourceUrl: ``,
}}}, {quoted: null})
}
break
case 'batal': {
if (!isCreator) return reply(mess.creator)
if (!q) return reply("jasa install panel")
let teks = `📦 ${text}
⏰ ${tanggal(Date.now())}

*Testimoni :*
${ceha}`
await conn.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: `Transaksi Pending`, 
body: `© Powered By ${ownerName}`, 
thumbnailUrl: 'https://img0.pixhost.to/images/919/557813345Kyyhstdzz.jpg', 
sourceUrl: ``,
}}}, {quoted: null})
}
break
case 'acc': case 'addsaldo':{
if (!isCreator) return reply(mess.creator)
if (!q.split(",")[0]) return reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (!q.split(",")[1]) return reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
addSaldo(q.split(",")[0]+"@s.whatsapp.net", Number(q.split(",")[1]), dbsaldo)
reply(`「 *SALDO USER* 」
⭔Nama: @${m.sender.split("@")[0]}
⭔Nomer: @${q.split(",")[0]}
⭔Tanggal: ${hariini}
⭔Saldo: Rp${toRupiah(cekSaldo(q.split(",")[0]+"@s.whatsapp.net", dbsaldo))}, `)
 }
        case 'kirim': {       
if (!isCreator) return reoly(mess.creator)
 let messageText = `「 DEPOSIT SUKSES 」
⭔Nama: @${m.sender.split("@")[0]}
⭔Nomer: @${q.split(",")[0]}
⭔Tanggal: ${hariini}
⭔Saldo: Rp${toRupiah(cekSaldo(q.split(",")[0]+"@s.whatsapp.net", dbsaldo))}

Deposit kamj teleh di konfomasi sama admin kami, silahkan cek saldo anda *#saldo*`
  let targetNumber = `${q.split(",")[0]}@s.whatsapp.net`;

  conn.sendMessage(targetNumber, {
    text: `*${messageText}*`,
    mentions: [m.sender]
  }, {
    quoted: m
  }).then(() => {
    reply('Acc Berhasil Tuan✅');
  }).catch(() => {
    reply('Gagal mengirim pesan!');
  });
}
break
case 'minsaldo':
if (!isCreator) return reply(mess.creator)
if (!q.split(",")[0]) return reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (!q.split(",")[1]) return reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (cekSaldo(q.split(",")[0]+"@s.whatsapp.net", dbsaldo) < q.split(",")[1] && cekSaldo(q.split(",")[0]+"@s.whatsapp.net", dbsaldo) !== 0) return m.reply(`Dia saldonya ${cekSaldo(q.split(",")[0]+"@s.whatsapp.net", dbsaldo)}, jadi jangan melebihi ${cekSaldo(q.split(",")[0]+"@s.whatsapp.net", dbsaldo)} yah`)
minSaldo(q.split(",")[0]+"@s.whatsapp.net", Number(q.split(",")[1]), dbsaldo)
reply(`*USER SALDO*
 • ID : ${q.split(",")[0]}
 • Nomor : ${q.split(",")[0]}
 • Tanggal : ${hariini}
 • Saldo : Rp${toRupiah(cekSaldo(q.split(",")[0]+"@s.whatsapp.net", dbsaldo))}, `)
break
case "deposit":
case "depo": {
    const amount = parseInt(text.trim());

    if (!amount || isNaN(amount) || amount % 10000 !== 0) {
        return m.reply("Masukkan nominal *kelipatan 10.000*.\nContoh: .deposit 20000");
    }

    if (fs.existsSync(depositPath + m.sender.split("@")[0] + ".json")) {
        return m.reply("Proses deposit kamu sebelumnya belum selesai.\n\nKetik 'Batal' untuk membatalkan.");
    }

    const saldoMasuk = amount / 2;
    const axios = require('axios');
    const createPaymentUrl = `https://kyyapinew.vercel.app/orderkuota/createpayment?apikey=${global.kyyapi}&amount=${amount}&codeqr=${global.qriscode}`;

    let res;
    try {
        res = await axios.get(createPaymentUrl);
    } catch (e) {
        return m.reply("Gagal menghubungi server pembayaran.");
    }

    const { success, data } = res.data;
    if (!success) return m.reply("Gagal membuat pembayaran.");

    const depositData = {
        ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
        session: "waiting_payment",
        date: new Date().toLocaleDateString("ID", { timeZone: "Asia/Jakarta" }),
        number: m.sender,
        payment: "QRIS",
        data: {
            amountdeposit: saldoMasuk,
            payment_amount: amount,
            merchant: data.merchant,
            keyorkut: data.keyorkut,
            qris: data.qris
        }
    };

    fs.writeFileSync(depositPath + m.sender.split("@")[0] + ".json", JSON.stringify(depositData, null, 2));

    m.reply(`🧾 *QRIS untuk Pembayaran*\n\n💳 Jumlah: Rp${amount}\n💰 Saldo Masuk: Rp${saldoMasuk}\n\nScan QR berikut lalu kirim bukti:\n${data.qris}\n\nKetik *.bukti* setelah pembayaran!`);
}
break;


// ───────────────────────────────────────────────────────────────────────────────乂 🥀 AUDIO MENU ───────────────────────────────────────────────────────────────乂 \\    
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
    try {
        let set;
        if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20';
        else if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log';
        else if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3';
        else if (/earrape/.test(command)) set = '-af volume=12';
        else if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"';
        else if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"';
        else if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25';
        else if (/reverse/.test(command)) set = '-filter_complex "areverse"';
        else if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"';
        else if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"';
        else if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"';
        else if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"';
        if (set) {
            if (/audio/.test(mime)) {
                await reply(mess.wait);
                let media = await conn.downloadAndSaveMediaMessage(quoted);
                let ran = getRandom('.mp3');
                console.log(`Running ffmpeg command: ffmpeg -i ${media} ${set} ${ran}`);
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                    fs.unlinkSync(media);
                    if (err) {
                        console.error(`ffmpeg error: ${err}`);
                        return reply(err);
                    }
                    
                    let buff = fs.readFileSync(ran);
                    conn.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted: m });
                    fs.unlinkSync(ran);
                });
            } else {
                reply(`Reply to the audio you want to change with a caption *${prefix + command}*`);
            }
        } else {
            reply('Invalid command');
        }
    } catch (e) {
        reply(e);
    }
    break
case 'mangkane1':
case 'mangkane2':
case 'mangkane3':
case 'mangkane4':
case 'mangkane5':
case 'mangkane6':
case 'mangkane7':
case 'mangkane8':
case 'mangkane9':
case 'mangkane10':
case 'mangkane11':
case 'mangkane12':
case 'mangkane13':
case 'mangkane14':
case 'mangkane15':
case 'mangkane16':
case 'mangkane17':
case 'mangkane18':
case 'mangkane19':
case 'mangkane20':
case 'mangkane21':
case 'mangkane22':
case 'mangkane23':
case 'mangkane24':
case 'mangkane25':
case 'mangkane26':
case 'mangkane27':
case 'mangkane28':
case 'mangkane29':
case 'mangkane30':
case 'mangkane31':
case 'mangkane32':
case 'mangkane33':
case 'mangkane34':
case 'mangkane35':
case 'mangkane36':
case 'mangkane37':
case 'mangkane38':
case 'mangkane39':
case 'mangkane40':
case 'mangkane41':
case 'mangkane42':
case 'mangkane43':
case 'mangkane44':
case 'mangkane45':
case 'mangkane46':
case 'mangkane47':
case 'mangkane48':
case 'mangkane49':
case 'mangkane50':
case 'mangkane51':
case 'mangkane52':
case 'mangkane53':
case 'mangkane54':
case 'acumalaka':
case 'reza-kecap':
case 'farhan-kebab':
case 'omaga':
case 'kamu-nanya':
case 'anjay':
case 'siuu':
viot = 'https://telegra.ph/file/48b67f699cfa231e4d5c2.jpg'
thumb = 'https://telegra.ph/file/48b67f699cfa231e4d5c2.jpg'
let sound
if (/sound/.test(command)) sound = `https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`
if (/mangkane/.test(command) && command.replace('mangkane', '') < 25) sound = `https://raw.githubusercontent.com/hyuura/Rest-Sound/main/HyuuraKane/${command}.mp3`
if (/mangkane/.test(command) && command.replace('mangkane', '') > 24) sound = `https://raw.githubusercontent.com/aisyah-rest/mangkane/main/Mangkanenya/${command}.mp3`
if (/acumalaka|reza-kecap|farhan-kebab|omaga|omaga|kamu-nanya|anjay|siuu/.test(command)) sound = `https://github.com/FahriAdison/Base-Sound/raw/main/audio/${command}.mp3`
if (text.toLowerCase() === 'thumb') {
await conn.sendMessage(m.chat, {audio: {url: sound}, mimetype: 'audio/mpeg', ptt: false, 
contextInfo: {
externalAdReply: {
mediaUrl: ' ', 
mediaType: 2, 
title: '  ⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ↻  ', 
body: '  ━━━━⬤──────────  ', 
description: 'Now Playing...',
mediaType: 2, 
sourceUrl: ' ',
thumbnail: await (await fetch(viot)).buffer(), 
renderLargerThumbnail: true}}}, {quoted: m})
} else await conn.sendMessage(m.chat, {audio: {url: sound}, mimetype: 'audio/mpeg', ptt: false}, {quoted: m})
break



case 'trap' :
if (!isPrem) return reply(`*[ !! ]\nFeature Only Prem`) 
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
conn.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-neko' :
case 'hneko' :
if (!isPrem) return reply(`*[ !! ]\nFeature Only Prem`) 
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
conn.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-waifu' :
case 'nwaifu' :
if (!isPrem) return reply(`*[ !! ]\nFeature Only Prem`) 
reply(mess.wait)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
conn.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'gasm':
if (!isPrem) return reply(`*[ !! ]\nFeature Only Prem`) 
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
conn.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break  
case 'milf':
if (!isPrem) return reply(`*[ !! ]\nFeature Only Prem`) 
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/MediaKiw/nsfw/milf.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break 
case 'animespank':
if (!isPrem) return reply(`*[ !! ]\nFeature Only Prem`) 
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`)     
            await conn.sendMessage(m.chat, { caption:  `Ini dia!!`, image: {url:waifudd.data.url} },{ quoted:m }).catch(err => {
return('Error!')
})
break
case 'ahegao':
if (!isPrem) return reply(`*[ !! ]\nFeature Only Prem`) 
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/MediaKiw/nsfw/ahegao.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'ass':
if (!isPrem) return reply(`*[ !! ]\nFeature Only Prem`) 
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/MediaKiw/nsfw/ass.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'bdsm':
if (!isPrem) return reply(`*[ !! ]\nFeature Only Prem`) 
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/MediaKiw/nsfw/bdsm.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'blowjob':
if (!isPrem) return reply(`*[ !! ]\nFeature Only Prem`) 
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/MediaKiw/nsfw/blowjob.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'cuckold':
if (!isPrem) return reply(`*[ !! ]\nFeature Only Prem`) 
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/MediaKiw/nsfw/cuckold.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'cum':
if (!isPrem) return reply(`*[ !! ]\nFeature Only Prem`) 
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/MediaKiw/nsfw/cum.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'eba':
if (!isPrem) return reply(`*[ !! ]\nFeature Only Prem`) 
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/MediaKiw/nsfw/eba.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'ero':
if (!isPrem) return reply(`*[ !! ]\nFeature Only Prem`) 
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/MediaKiw/nsfw/ero.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'femdom':
if (!isPrem) return reply(`*[ !! ]\nFeature Only Prem`) 
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/MediaKiw/nsfw/femdom.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'foot':
if (!isPrem) return reply(`*[ !! ]\nFeature Only Prem`) 
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/MediaKiw/nsfw/foot.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'gangbang':
if (!isPrem) return reply(`*[ !! ]\nFeature Only Prem`) 
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/MediaKiw/nsfw/gangbang.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'glasses':
if (!isPrem) return reply(`*[ !! ]\nFeature Only Prem`) 
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/MediaKiw/nsfw/glasses.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'jahy':
if (!isPrem) return reply(`*[ !! ]\nFeature Only Prem`) 
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/MediaKiw/nsfw/jahy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'manga':
if (!isPrem) return reply(`*[ !! ]\nFeature Only Prem`) 
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/MediaKiw/nsfw/manga.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'masturbation':
if (!isPrem) return reply(`*[ !! ]\nFeature Only Prem`) 
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/MediaKiw/nsfw/masturbation.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'neko-hentai':
if (!isPrem) return reply(`*[ !! ]\nFeature Only Prem`) 
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/MediaKiw/nsfw/neko.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'neko-hentai2':
if (!isPrem) return reply(`*[ !! ]\nFeature Only Prem`) 
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/MediaKiw/nsfw/neko2.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'nsfwloli':
if (!isPrem) return reply(`*[ !! ]\nFeature Only Prem`) 
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/MediaKiw/nsfw/nsfwloli.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'orgy':
if (!isPrem) return reply(`*[ !! ]\nFeature Only Prem`) 
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/MediaKiw/nsfw/orgy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'panties':
if (!isPrem) return reply(`*[ !! ]\nFeature Only Prem`) 
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/MediaKiw/nsfw/panties.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'pussy':
if (!isPrem) return reply(`*[ !! ]\nFeature Only Prem`) 
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/MediaKiw/nsfw/pussy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'tentacles':
if (!isPrem) return reply(`*[ !! ]\nFeature Only Prem`) 
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/MediaKiw/nsfw/tentacles.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'thighs':
if (!isPrem) return reply(`*[ !! ]\nFeature Only Prem`) 
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/MediaKiw/nsfw/thighs.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'yuri':
if (!isPrem) return reply(`*[ !! ]\nFeature Only Prem`) 
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/MediaKiw/nsfw/yuri.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'zettai':
if (!isPrem) return reply(`*[ !! ]\nFeature Only Prem`) 
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/MediaKiw/nsfw/zettai.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'gifblowjob':
if (!isPrem) return reply(`*[ !! ]\nFeature Only Prem`) 
reply(mess.wait)
  let assss = await axios.get ("https://api.waifu.pics/nsfw/blowjob")
    var bobuff = await fetchBuffer(assss.data.url)
    var bogif = await buffergif(bobuff)
    await conn.sendMessage(m.chat,{video:bogif, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
case 'gifhentai':
if (!isPrem) return reply(`*[ !! ]\nFeature Only Prem`) 
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./database/MediaKiw/nsfw/gifs.json'))
var xeonyresultx = pickRandom(ahegaonsfw)
    await conn.sendMessage(m.chat,{video:xeonyresultx, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
    case 'gifs': case 'foot': {
if (!isPrem) return reply(`*[ !! ]\nFeature Only Prem`) 
reply(mess.wait)
let heyy
    let yeha = heyy[Math.floor(Math.random() * heyy.length)]
    if (/gifs/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gifs.json')
    if (/foot/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/foot.json')
conn.sendMessage(m.chat, { image: { url: yeha }, caption : mess.success }, { quoted: m })
}
break

// Pembatas command =======================
default:
if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}

if (budy.startsWith('>>')) {
if (!isCreator) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m.reply(require('util').format(teks))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}
}

} catch (err) {
console.log(util.format(err))
}
}

// Refreshing File After Recode/Editing
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log()
console.log(`› [ ${chalk.black(chalk.bgBlue(" Update Files "))} ] - ${__filename}`)
delete require.cache[file]
require(file)
})
