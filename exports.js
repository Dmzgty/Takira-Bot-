

const { 'default': makeWASocket,downloadContentFromMessage, fetchLatestBaileysVersion, useMultiFileAuthState, makeInMemoryStore, DisconnectReason, WAGroupMetadata, relayWAMessage, MediaPathMap, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, MessageRetryMap } = require('@whiskeysockets/baileys');

// Aqui os módulos//
const { Boom }  = require('@hapi/boom');
const AssemblyAI = require("assemblyai");
const axios = require('axios');
const fs = require('fs-extra');
const cheerio = require('cheerio');
const crypto = require('crypto');
const util = require('util');
const PhoneNumber = require('awesome-phonenumber');
const { randomBytes } = require("crypto");
const P = require('pino');
const NodeCache = require("node-cache");
const linkfy = require('linkifyjs');
const request = require('request');
const ms = require('ms');
const os = require('os');
const ffmpeg = require('fluent-ffmpeg');
const fetch = require('node-fetch');
const qrterminal = require('qrcode-terminal');
const { exec, spawn, execSync } = require('child_process');
const moment = require('moment-timezone');
const colors = require("colors");
const yts = require('yt-search');
const infoSystem = require('os')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();


const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
const date = moment.tz('America/Sao_Paulo').format('DD/MM/YYYY');


const webp_mp4 = require("./arquivos/js/webp_mp4.js");
const { sendVideoAsSticker, sendImageAsSticker } = require('./arquivos/sticker/rename.js');
const { sendVideoAsSticker2, sendImageAsSticker2 } = require('./arquivos/sticker/rename2.js');
const { arcloud } = require('./arquivos/js/arcc.js') 
const { addLimit, getLimit } = require('./arquivos/js/limit.js');
const { addBanned, unBanned, BannedExpired, cekBannedUser } = require("./arquivos/js/banned.js");
const { validmove, setGame } = require('./arquivos/tictactoe');
const { addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos } =  require('./arquivos/js/addcmd.js');
const { palavrasANA, quizanimais, enigmaArchive, garticArchives, whatMusicAr } = require('./arquivos/js/jogos.js');
const { wait, getExtension, generateMessageID, getMembros, getGroupAdmins, getRandom, banner, banner2, banner3, temporizador, chyt, getBuffer, fetchJson, fetchText, createExif, getBase64, convertSticker, upload, nit, getpc, supre, recognize } = require('./arquivos/funcoes/functions.js'); 
const { writeExifImg } = require('./arquivos/sticker/exif.js')
const { writeExif2 } = require('./arquivos/sticker/exif2.js')
const { infoClima } = require('./arquivos/funcoes/infoclima.js')
const { isFiltered, addFilter } = require('./arquivos/funcoes/functions.js');
const { MultiDownload } = require("./arquivos/funcoes/multidl.js");


const sotoy = JSON.parse(fs.readFileSync('./arquivos/json/sotoy.json'));
const piadas = JSON.parse(fs.readFileSync('./arquivos/json/piadas.json'));
const countMessage = JSON.parse(fs.readFileSync('./settings/media/countmsg.json'));
const comandos = JSON.parse(fs.readFileSync('./settings/media/comandos.json'));
const daily = JSON.parse(fs.readFileSync('./database/usuarios/diario.json'));
const nescessario = JSON.parse(fs.readFileSync('./settings/nescessario.json'));
const premium = JSON.parse(fs.readFileSync('./database/usuarios/premium.json'));
const ban = JSON.parse(fs.readFileSync('./database/usuarios/banned.json'));
const muted = JSON.parse(fs.readFileSync('./database/usuarios/muted.json'))
const limitefll = JSON.parse(fs.readFileSync('./database/usuarios/flood.json'));
const joguinhodavelhajs = JSON.parse(fs.readFileSync('./database/usuarios/joguinhodavelha.json'));
const aluguel = JSON.parse(fs.readFileSync("./database/grupos/aluguel/aluguel.json"))
const grupos = JSON.parse(fs.readFileSync("./database/grupos/aluguel/grupos.json"))
const chaves = JSON.parse(fs.readFileSync("./database/grupos/aluguel/chaves.json"))
const { randomCantadas } = require('./arquivos/js/cantadas.js');
const joguinhodavelhajs2 = JSON.parse(fs.readFileSync('./database/usuarios/joguinhodavelha2.json'));
const antispam = JSON.parse(fs.readFileSync('./settings/media/antispam.json'));
const anotar = JSON.parse(fs.readFileSync("./database/func/anotar.json"));
const setting = JSON.parse(fs.readFileSync('./settings/settings.json'));
const logoslink = JSON.parse(fs.readFileSync('./settings/links_img.json'));
const Limit_CMD = JSON.parse(fs.readFileSync("./database/func/limitarcmd.json"))
const ftmenu = JSON.parse(fs.readFileSync("./settings/logos.json"));
const black_ = JSON.parse(fs.readFileSync("./database/grupos/avisos.json"));

const { linguagem, mess, getInfo } = require('./settings/lib');
const { psycatgames } = require('./arquivos/funcoes/psycatgames.js')
const { destrava, destrava2 } = require('./arquivos/funcoes/destrava.js');
const { tabela } = require('./arquivos/js/tabela.js');
const { conselhob } = require('./arquivos/js/conselhob.js');
const { fatos } = require('./arquivos/js/fatos.js');
const { palavrasc } = require('./arquivos/js/conselhos.js');

const { getMinesPositions, MinesHelp } = require('./arquivos/js/mines.js')
const mines = JSON.parse(fs.readFileSync('./database/grupos/games/mines.json'))

function DLT_FL(file) {
try {
fs.unlinkSync(file);
} catch (error) {
}
}


const convertBytes = function(bytes) {
const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
if(bytes == 0) {
return "n/a";
}
const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
if(i == 0) {
return bytes + " " + sizes[i];
}
return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i];
};

// ANTI NOME MODIFICADA / EMOJI
function ANT_LTR_MD_EMJ(str) {
for (let i = 0, n = str.length; i < n; i++) {
if(str.charCodeAt(i) > 255) {
return true;
}
}
return false;
}


function kyun(seconds){
function pad(s){return (s < 10 ? "0" : "") + s};
var horas = Math.floor(seconds / (60*60) % (24));
var minutos = Math.floor(seconds % (60*60) / 60);
var segundos = Math.floor(seconds % 60);
return `${pad(horas)} horas, ${pad(minutos)} minutos e ${pad(segundos)} segundos.`;
}


function TimeCount(seconds){
function pad(s){return (s < 10 ? "0" : "") + s};
var dias = Math.floor(seconds / (60*60) / (24));
var horas = Math.floor(seconds / (60*60) % (24));
var minutos = Math.floor(seconds % (60*60) / 60);
var segundos = Math.floor(seconds % 60);
return `${pad(dias)} dia(s), ${pad(horas)} hora(s), ${pad(minutos)} minuto(s) e ${pad(segundos)} segundo(s).`;
}


const getFileBuffer = async (mediakey, MediaType) => {
const stream = await downloadContentFromMessage(mediakey, MediaType);
let buffer = Buffer.from([]);
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]);
}
return buffer;
};


const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms));
};


const enviarfiguUrl = async (client, from, link, mr) => {
ranp = getRandom('.gif');
rano = getRandom('.webp');
ini_buffer = `${link}`;
exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 320:320 ${rano}`, (err) => {
DLT_FL(ranp);
buff = fs.readFileSync(rano);
client.sendMessage(from, {sticker: buff}, {quoted: mr}).catch(() => {
return console.log("Erro..");
});
DLT_FL(rano);
});
};

const sendPoll = (client, id, name = '', values = [], selectableCount = 1) => { 
return client.sendMessage(id, {poll: {name, values, selectableCount}, messageContextInfo: { messageSecret: randomBytes(32)}}, {id, options: {userJid: client?.user?.id}}).catch(() => {
return console.log(console.error);
});
}


const RSM_FUNC = async(client, nmrdn_dono2, hora120, upsert) => {
switch(hora120) {
case '07:00:00': case '12:00:00': case '18:00:00': case '00:00:00':
exec("cd database/qr-code && rm -rf pre-key* sender* session*");
setTimeout(async () => {
file = require.resolve("./connect.js");
delete require.cache[file];
require(file);
}, 1200);
console.log(colors.blue("Reiniciando para diminuir o peso do qrcode.."))
break;
}
if(upsert?.messages == undefined) return
}


function obeso(peso, altura) {
 return Number(parseFloat(peso) / (parseFloat(altura) ** 2)).toFixed(2)
}

function capitalizeFirstLetter(string) {
 return string.charAt(0).toUpperCase() + string.substring(1)
}

const countDays = (date1, date2) => {
if (!(date1 || date2)) return 0
date1 = new Date(date1[1]+"/"+date1[0]+"/"+date1[2])
date2 = new Date(date2[1]+"/"+date2[0]+"/"+date2[2])
const timeDiff = Math.abs(date2.getTime() - date1.getTime());
const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
return diffDays || 0
}

const timeDate = (tempo, now, x = true) => {
if (Number(now) && x) return moment(now * 1000).tz('America/Sao_Paulo').format(tempo)
if (Number(now)) return moment(now).tz('America/Sao_Paulo').format(tempo)
return moment.tz('America/Sao_Paulo').format(tempo)
}

module.exports = { PhoneNumber, P, fs, util, Boom, axios, linkfy, request, ms, ffmpeg, fetch, qrterminal, exec, spawn, yts, execSync, limitefll, moment, time, hora, date, infoSystem, RSM_FUNC, getBuffer, convertSticker, fetchJson, fetchText, getBase64, createExif, writeExifImg, addLimit, getLimit, upload, nit, addBanned, unBanned, BannedExpired, cekBannedUser, validmove, setGame, addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos, palavrasANA, quizanimais, getpc, supre, wait, getExtension, generateMessageID, getGroupAdmins, getMembros, getRandom, banner, banner2, banner3, temporizador, chyt, webp_mp4, antispam, anotar, sotoy, countMessage, comandos, daily, muted, nescessario, premium, ban, black_, joguinhodavelhajs, joguinhodavelhajs2, setting, logoslink, ftmenu, linguagem, getInfo, mess, destrava, destrava2, tabela, conselhob, fatos, palavrasc, recognize, colors, cheerio, NodeCache, kyun, TimeCount, sendVideoAsSticker, sendImageAsSticker, sendVideoAsSticker2,sendImageAsSticker2, enviarfiguUrl, sendPoll, getFileBuffer, DLT_FL, sleep, ANT_LTR_MD_EMJ, convertBytes, arcloud, EmojiAPI, emoji, infoClima, os, garticArchives, enigmaArchive, randomCantadas, isFiltered, addFilter, mines, getMinesPositions, MinesHelp, psycatgames, MultiDownload, AssemblyAI, piadas, whatMusicAr, chaves, grupos, aluguel, obeso, countDays, timeDate, writeExif2, Limit_CMD, capitalizeFirstLetter }