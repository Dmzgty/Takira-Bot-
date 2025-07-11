//Pra quem não me conhece eu sou o Dmzgty mas muitos me conhecem por Silent. Atualmente eu entrei pro mundo dev , eu comecei no Error 404. depois passei pro CyberCode e agora sou da Hexaverse. Criei esse bot/Base pra ajudar quem quer, de início não achei que fosse necessário já que existem centenas de bots melhores que os meus, mas bora lá né. É proibido vender sem minha permissão, se caso houver queixa quem o fez será alvo de panelinha, com mais de 1000 pessoas trabalhando pra trazer justiça aos direitos dos produtos. Só peço que deixe os créditos. Dmzgty_Silent.//




const { downloadContentFromMessage, prepareWAMessageMedia, relayWAMessage, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, getLastMessageInChat, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, logger, makeInMemoryStore } = require('@whiskeysockets/baileys');

// ========[ Abrir e fechar grupo ]======= \\


// ========[ MÓDULOS E FUNÇÕES ]======= \\

const { fs, Boom, axios, yts, crypto, util, P, linkfy, request, cheerio, ms, ffmpeg, webp_mp4, qrterminal, exec, spawn, execSync, moment, color, time, hora, date, getBuffer, convertSticker, recognize, fetchJson, fetchText, fetch, getBase64, createExif, writeExifImg, addLimit, upload, nit, addBanned, unBanned, BannedExpired, cekBannedUser, validmove, setGame, addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos, palavrasANA, quizanimais, garticArchives, whatMusicAr, enigmaArchive, getpc, supre, wait, getExtension, generateMessageID, getGroupAdmins, getMembros, sendPoll, getRandom, banner2, banner3, temporizador, chyt, kyun, TimeCount, simih, botoff, colors, RSM_FUNC, infoSystem, os, arcloud, EmojiAPI, emoji, infoClima, insert, response, addFilter, isFiltered, mines, getMinesPositions, MinesHelp, ytdl, psycatgames, MultiDownload, AssemblyAI, level2, chaves, grupos, aluguel, obeso, countDays, timeDate, Limit_CMD, capitalizeFirstLetter } = require('./exports.js');

// ======[ JS-MENUS/INFORMAÇÕES ]====== \\

const { linguagem, mess, getInfo, destrava, destrava2, tabela, conselhob, fatos, randomCantadas, palavrasc, ban, joguinhodavelhajs, joguinhodavelhajs2, nescessario, setting, logoslink, ftmenu, premium, rgtake, muted, countMessage, sendVideoAsSticker, sendImageAsSticker, sendVideoAsSticker2, sendImageAsSticker2, sotoy, daily, comandos, limitefll, votacao, antispam, anotar, black_, enviarfiguUrl, getFileBuffer, DLT_FL, sleep, ANT_LTR_MD_EMJ, sabrpg, autorpg, bcbet, minerar, cavalosrpg, elitepasse, coderpg, galosrpg, roubosrpg } = require('./exports.js');

//...............................

var { antipv, antipv2, antipv3, visualizarmsg, numero_dono1, numero_dono2, numero_dono3, numero_dono4, numero_dono5, numero_dono6, msgantipv1, msgantipv2, API_KEY_INVERTEXTO } = require("./settings/nescessario.json");

const music = JSON.parse(fs.readFileSync("./database/data/music.json"))

const { fundo1, fundo2, imgnazista, imggay, imgcorno, imggostosa, imggostoso, imgfeio, imgvesgo, imgbebado, imggado, matarcmd, deathcmd, chutecmd, tapacmd, rnkgay, rnkgado, rnkcorno, rnkgostoso, rnkgostosa, rnknazista, rnkotaku, rnkpau, suruba, minado_bomb, thumbnail } = require("./settings/links_img.json");

const { NomeDoBot, NickDono, prefix, API_KEY_BRONXYS, BASE_TOSHIRUZBOT, TOSHIRUZBOTS_KEY, channel } = require("./settings/settings.json");

const NODZ_KEY = "suakey";

const NODZ_URL = "https://nodz-apis.com.br";

const KEY_ZERO = "suakey";

const TED_APIKEY = "suakey";

const TED_URL = "https://tedzinho.online";

const BLACKOUT_API = "https://blackout-api.speedhosting.cloud";

const BLACKOUT_KEY = "suakey";


let automidia = true; // ligado por padrão, se quiser desligado, põe false


function salvarCadastro(numero, campo, valor) {
  let db = JSON.parse(fs.readFileSync('./tinder.json'));
  if (!db[numero]) db[numero] = {};
  db[numero][campo] = valor;
  fs.writeFileSync('./tinder.json', JSON.stringify(db, null, 2));
}

function atualizarStatusCadastro(numero, campo) {
  let statusCadastro = JSON.parse(fs.readFileSync('./tinderStatus.json'));
  if (!statusCadastro[numero]) {
    statusCadastro[numero] = {
      nome: false, cidade: false, idade: false, hobby: false,
      genero: false, foto: false
    };
  }
  statusCadastro[numero][campo] = true;
  fs.writeFileSync('./tinderStatus.json', JSON.stringify(statusCadastro, null, 2));
}

// Adicione isso ao seu switch de comandos


//
const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time2 > "00:00:00" && time2 < "05:00:00"){
var tempo = 'Boa madrugada'
} if(time2 > "05:00:00" && time2 < "12:00:00"){
var tempo = 'Bom dia'
} if(time2 > "12:00:00" && time2 < "18:00:00"){
var tempo = 'Boa tarde'
} if(time2 > "18:00:00"){
var tempo = 'Boa noite'
}






const { audio_menu, bom_dia, boa_tarde, boa_noite, corno, qviado } = require('./settings/media/audios.json')

const { mensagens, enviar, sortear } = require("./settings/message.js") //Respostas que o bot manda

global.stopGames = global.stopGames || {};
//...............................................
 
var numerodono_ofc = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "");

async function reiniciarSAB() {
file = require.resolve("./connect.js");
delete require.cache[file];
require(file);
}

var AsMsg = [];

//CONEXÃO

async function iniciardmzg() {

module.exports = dmzg = async(dmzg, folderUserAuth) => {
module.exports = upsert = async(upsert, dmzg) => {
async function msgupsrt() {
const nmrdn_dono2 = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net";
// Auto TikTok (sem comando, só link)

var hora120 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

RSM_FUNC(dmzg, nmrdn_dono2, hora120, upsert);

for (const info of upsert?.messages || []) {




const from = info.key.remoteJid;
const isGroup = from.endsWith('@g.us');

const VRF_JSON_GRUPO = fs.existsSync(`./database/grupos/activation_gp/${from}.json`) ? true : false;

if(VRF_JSON_GRUPO) {
var jsonGp = JSON.parse(fs.readFileSync(`./database/grupos/activation_gp/${from}.json`));
}

if(VRF_JSON_GRUPO && jsonGp[0].x9 && info.messageStubType){
switch(info.messageStubType){
case 29:
await delay(1000);
dmzg.sendMessage(info.key.remoteJid, {text: `*@${info.messageStubParameters[0].split("@")[0]}* foi promovido(a) a adminstrador do grupo por: *@${info.participant.split("@")[0]}*.`, contextInfo: {forwardingScore: 50000, isForwarded: true, mentionedJid: [info.messageStubParameters[0], info.participant], remoteJid: info.key.remoteJid}});
break;
case 30:
await delay(1000);
dmzg.sendMessage(info.key.remoteJid, {text: `O(a) adminstrador(a) *@${info.messageStubParameters[0].split("@")[0]}* foi rebaixado(a) à membro comum por: *@${info.participant.split("@")[0]}*.`, contextInfo: {forwardingScore: 50000, isForwarded: true, mentionedJid: [info.messageStubParameters[0], info.participant], remoteJid: info.key.remoteJid}});
break;
}}
  
if(!info.message) return;
if(upsert.type == "append") return;  
const baileys = require('@whiskeysockets/baileys');
const type = baileys.getContentType(info.message);
const content = JSON.stringify(info.message);
const pushname = info.pushName ? info.pushName : '';
if(visualizarmsg) {
await dmzg.readMessages([info.key]);
} else {
if(from == "status@broadcast") return;
}

global.prefix;
global.blocked;

const speed = require('performance-now');



var enviarmen = mensagens[Math.floor(Math.random() * mensagens.length)];

var Res_Aguarde = enviarmen

var Res_SoGrupo = "Este comando só deve ser utilizado em Grupos."

var Res_SoDono = "Este comando é apenas para o meu dono utilizar..."

var Res_SoAdm = "Só Administradores do grupo podem utilizar este comando.."

var Res_BotADM = "O Bot precisa ser Administrador do grupo para utilizar este comando..."

var Res_SoModoBN = `Este comando so pode ser utilizado com o comando ${prefix}modobrincadeira 1 ativado, para desativar só basta utilizar ${prefix}modobrincadeira 0`


//==============(BODY)================\\

var body = info.message?.conversation || info.message?.viewOnceMessageV2?.message?.imageMessage?.caption || info.message?.viewOnceMessageV2?.message?.videoMessage?.caption || info.message?.imageMessage?.caption || info.message?.videoMessage?.caption || info.message?.extendedTextMessage?.text || info.message?.viewOnceMessage?.message?.videoMessage?.caption || info.message?.viewOnceMessage?.message?.imageMessage?.caption || info.message?.documentWithCaptionMessage?.message?.documentMessage?.caption || info.message?.buttonsMessage?.imageMessage?.caption || info.message?.buttonsResponseMessage?.selectedButtonId || info.message?.listResponseMessage?.singleSelectReply?.selectedRowId || info.message?.templateButtonReplyMessage?.selectedId || info?.text || info.message?.editedMessage?.message?.protocolMessage?.editedMessage?.extendedTextMessage?.text || info.message?.editedMessage?.message?.protocolMessage?.editedMessage?.imageMessage?.caption || info.message?.conversation || info.message?.viewOnceMessageV2?.message?.imageMessage?.caption || info.message?.viewOnceMessageV2?.message?.videoMessage?.caption || info.message?.imageMessage?.caption || info.message?.videoMessage?.caption || info.message?.extendedTextMessage?.text || info.message?.viewOnceMessage?.message?.videoMessage?.caption || info.message?.viewOnceMessage?.message?.imageMessage?.caption || info.message?.documentWithCaptionMessage?.message?.documentMessage?.caption || info.message?.buttonsMessage?.imageMessage?.caption || info.message?.buttonsResponseMessage?.selectedButtonId || info.message?.listResponseMessage?.singleSelectReply?.selectedRowId || info.message?.templateButtonReplyMessage?.selectedId || JSON.parse(info.message?.interactiveResponseMessage?.nativeFlowResponseMessage?.paramsJson || '{}')?.id ||
 info?.text || '';

var Procurar_String = info.message?.conversation || info.message?.viewOnceMessageV2?.message?.imageMessage?.caption || info.message?.viewOnceMessageV2?.message?.videoMessage?.caption || info.message?.imageMessage?.caption || info.message?.videoMessage?.caption || info.message?.extendedTextMessage?.text || info.message?.viewOnceMessage?.message?.videoMessage?.caption || info.message?.viewOnceMessage?.message?.imageMessage?.caption || info.message?.documentWithCaptionMessage?.message?.documentMessage?.caption || info.message?.buttonsMessage?.imageMessage?.caption || ""

const args = body.trim().split(/ +/).slice(1);

const budy2 = body.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

if(isGroup && fs.existsSync(`./database/grupos/activation_gp/${from}.json`) && jsonGp[0].multiprefix) {
var prefix = jsonGp[0]?.prefixos[jsonGp[0]?.prefixos?.indexOf(String(body)?.trim()?.charAt(0))] || jsonGp[0].prefixos[0]
}

if(isGroup && fs.existsSync(`./database/grupos/activation_gp/${from}.json`) && !jsonGp[0].multiprefix) {
var prefix = setting.prefix;
} else if(!isGroup) {
var prefix = setting.prefix
};

var isCmd = body.trim().startsWith(prefix);

const command = isCmd ? budy2.trim().slice(1).split(/ +/).shift().toLocaleLowerCase(): null;

const cmd = isCmd ? budy2.trim().slice(1).split(/ +/).shift().toLocaleLowerCase(): null;

const q_2 = budy2.trim().split(/ +/).slice(1).join(' ');

const q = args.join(' ');

var budy = (type === 'conversation') ? info.message?.conversation : (type === 'extendedTextMessage') ? info.message?.extendedTextMessage?.text : '';

var budy3 = budy.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

var PR_String = Procurar_String.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

const q_ofc = PR_String.trim().split(/ +/).slice(1).join(" ");

//======================================\\

try {var groupMetadata = isGroup ?  await dmzg.groupMetadata(from): ""} catch {return}

const groupName = isGroup ? groupMetadata.subject : '';

const sender = isGroup ? info.key.participant.includes(':') ? info.key.participant.split(':')[0] +'@s.whatsapp.net': info.key.participant : info.key.remoteJid;

const messagesC = PR_String.slice(0).trim().split(/ +/).shift().toLowerCase();

const arg = body.substring(body.indexOf(' ') + 1);

const botNumber = await dmzg.user.id.split(':')[0]+'@s.whatsapp.net';
const argss = body.split(/ +/g);
const testat = body;
const ants = body;

const groupDesc = isGroup ? groupMetadata.desc : ''

const groupMembers = isGroup ? groupMetadata.participants : ''

const isnit = nit.includes(sender) 

const issupre = supre.includes(sender)

const ischyt = chyt.includes(sender)

const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''

const somembros = isGroup ? getMembros(groupMembers) : ''

//======================================\\

const nmrdn = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` || isnit

const numerodono = [`${nmrdn}`, `${numero_dono1}@s.whatsapp.net`, `${numero_dono2}@s.whatsapp.net`, `${numero_dono3}@s.whatsapp.net`, `${numero_dono4}@s.whatsapp.net`, `${numero_dono5}@s.whatsapp.net`, `${numero_dono6}@s.whatsapp.net`]

//...............................

const dirGroup = `./database/grupos/activation_gp/${from}.json`

const nescj = "./settings/nescessario.json"

if(isGroup && !fs.existsSync(dirGroup)){
var data = [{
name: groupName,
groupId: from, x9: false, 
antiimg: false, antivideo: false,
antiaudio: false, antisticker: false,
antidoc: false, antictt: false,
antiloc: false, antilinkgp: false,
antilinkhard: false, antifake: false, antiporn: false,
Odelete: false, antispam: false, 
antinotas: false, anticatalogo: false, visuUnica: false, 
registrarFIGUS: false, soadm: false, 
listanegra: [], advertir: [], prefixos: [`${setting.prefix}`],
advertir2: [], legenda_estrangeiro: "0",
legenda_documento: "0", legenda_video: "0",
legenda_imagem: "0", multiprefix: false, 
forca_ofc: [{acertos: 0, erros: 0, palavra: [], escreveu: [], palavra_ofc: 0, dica: 0, tema: 0}], ausentes: [], forca_inc: false,  
antipalavrao: {
active: false,
palavras: []
},
limitec: {
active: false,
quantidade: null
},
wellcome: [{
bemvindo1: false,
legendabv: "EAE #numerodele#, bem vindo (a) ao: #nomedogp#",
legendasaiu: "#numerodele# – Saiu:"
},
{
bemvindo2: false,
legendabv: "EAE #numerodele#, bem vindo (a) ao: #nomedogp#",
legendasaiu: "#numerodele# – Saiu"
}],
simi1: false, simi2: false,
autosticker: false, autoresposta: false,
jogos: false, level: false,
bangp: false, nsfw: false,
aluguel: false
}]
fs.writeFileSync(dirGroup, JSON.stringify(data, null, 2) + '\n')
}

const dataGp = isGroup ? JSON.parse(fs.readFileSync(dirGroup)) : undefined 

var DFNMULTIP = `./database/func/prefixo/multip_${from}.json`

function setGp(index){
fs.writeFileSync(dirGroup, JSON.stringify(index, null, 2) + '\n')}

function setNes(index){
fs.writeFileSync(nescj, JSON.stringify(index, null, 2) + '\n')}

//=====(CONSTs)=======\\
const adivinha = info.key.id.length > 21 ? 'Android' : info.key.id.substring(0, 2) == '3A' ? 'iPhone' : 'WhatsApp Web';
const quoted = info.quoted ? info.quoted : info
const isBot = info.key.fromMe ? true : false
const SoDono = numerodono.includes(sender) || isBot || isnit || issupre || ischyt
dfndofc = setting.numerodono+"@s.whatsapp.net"
const DonoOficial = dfndofc.includes(sender) 
const isPremium = premium.includes(sender) || SoDono
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false || DonoOficial
const isBanned = ban.includes(sender)
const isVisualizar = nescessario.visualizarmsg
const isVerificado = nescessario.verificado
const isWelcomePrivate = nescessario.welcomepv
const isAudioMenu = nescessario.menu_audio
const isAntiPv = nescessario.antipv 
const isAntiPv2 = nescessario.antipv2
const isAntiPv3 = nescessario.antipv3
const isBotoff = nescessario.botoff
const listanegraG = nescessario.listanegraG
const isAnticall = nescessario.anticall
const TOKEN_GPT = nescessario.TOKEN_GPT
const isCmdPremium = nescessario.cmd_premium
const isBlockCmdG = nescessario.blockCmdG
//funções 

const isJoguin = isGroup ? joguinhodavelhajs.includes(sender) : false
const isAntiImg = isGroup ? dataGp[0].antiimg : undefined
const isLimitCmd = isGroup ? dataGp[0]?.Limitar_CMD : undefined
const isAntiVid = isGroup ? dataGp[0].antivideo : undefined
const isAntiAudio = isGroup ? dataGp[0].antiaudio : undefined
const isAntiSticker = isGroup ? dataGp[0].antisticker : undefined
const Antidoc = isGroup ? dataGp[0].antidoc : undefined
const isAntiCtt = isGroup ? dataGp[0].antictt : undefined
const Antiloc = isGroup ? dataGp[0].antiloc : undefined
const isAntilinkgp = isGroup ? dataGp[0].antilinkgp : undefined
const isAntiLinkHard = isGroup ? dataGp[0].antilinkhard : undefined
const isAntiPorn = isGroup ? dataGp[0].antiporn : undefined
const isAntifake = isGroup ? dataGp[0].antifake : undefined
const IS_DELETE = nescessario.Odelete
const So_Adm = isGroup ? dataGp[0].soadm: undefined
const isX9VisuUnica = isGroup ? dataGp[0].visuUnica : undefined
const ADVT = isGroup ? dataGp[0].advertir: undefined
const ADVT2 = isGroup ? dataGp[0].advertir2: undefined
const isx9 = isGroup ? dataGp[0].x9 : undefined
const isMultiP = isGroup ? dataGp[0].multiprefix : undefined
const isAntiNotas = isGroup ? dataGp[0].antinotas : undefined
const isAnticatalogo = isGroup ? dataGp[0].anticatalogo : undefined
const isWelkom = isGroup ? dataGp[0].wellcome[0].bemvindo1 : undefined
const isWelkom2 = isGroup ? dataGp[0].wellcome[1].bemvindo2 : undefined
const isSimi = isGroup ? dataGp[0].simi1 : undefined
const isSimi2 = isGroup ? dataGp[0].simi2 : undefined
const isAutofigu = isGroup ? dataGp[0].autosticker : undefined
const isAutorepo = isGroup ? dataGp[0].autoresposta : undefined
const isModobn =  isGroup ? dataGp[0].jogos : undefined
const isLevelingOn = isGroup ? dataGp[0].level : undefined
const isBanchat = isGroup ? dataGp[0].bangp : undefined
const isNsfw = isGroup ? dataGp[0].nsfw : undefined
const isPalavrao = isGroup ? dataGp[0].antipalavrao.active : undefined
const isPalavras = isGroup ? dataGp[0].antipalavrao.palavras : undefined
const isAntiFlood = isGroup ? dataGp[0].limitec.active : undefined
const isLimitec = isGroup ? dataGp[0].limitec.quantidade : undefined
const isModoAluguel =  isGroup ? dataGp[0].aluguel : undefined
//selo de verificado

const sabLive = {key: {participant: '0@s.whatsapp.net'}, message: {liveLocationMessage: {caption: `Usuário: ${pushname}`}}} 
const sabPhoto = {key: {participant : '0@s.whatsapp.net'}, message: {imageMessage: {caption: pushname}}}
const sabVideo = {key: {participant : '0@s.whatsapp.net'},message: {videoMessage: {caption: pushname}}}
const sabContact = {key: {participant : '0@s.whatsapp.net'},message: {contactMessage: {displayName: `${pushname}`}}}
const sabDocument = {key: {participant : '0@s.whatsapp.net'}, message: {documentMessage: {caption: pushname}}} 

if(!isVerificado) {var sasah = sabLive} else {var sasah = info} 

//funções de marcar

const menc_prt = info.message?.extendedTextMessage?.contextInfo?.participant

const menc_jid = args?.join(" ").replace("@", "") + "@s.whatsapp.net"

const menc_jid2 = info.message?.extendedTextMessage?.contextInfo?.mentionedJid

const sender_ou_n = q.includes("@") ? menc_jid : sender

const mrc_ou_numero = q.length > 6 && !q.includes("@") ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt 
const menc_os2 = q.includes("@") ? menc_jid : menc_prt 

const marc_tds = q.includes("@") ? menc_jid : q.length > 6 && !q.includes("@") ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt 

const menc_prt_nmr = q.length > 12 ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt

////////////////////////////////////////////


var isUrl = (url) => {
if(linkfy.find(url)[0]) return true
return false
}

//if(info.key.fromMe) return

const reply = (texto) => {
    dmzg.sendMessage(from, { 
        text: `> _Todos Direitos Reservados_\n${texto}`, 
        contextInfo: {
            mentions: [menc_os2, sender]
        }
    });
};
const identifyAtSign = (number) => {
return number.includes('@') ? txt.split('@')[1].replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net" : number.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
}

const detectTinder = (query) => {
return query.replace("#p#", prefix).replace("#p#", prefix).replace("#pc#", prefix+command).replace("#pc#", prefix+command)
}

const replyPeR = (texto) => {
  return new Promise((resolve) => {
setTimeout(() => {
dmzg.sendMessage(from, { text: texto }, { quoted: info }).then(() => resolve()).catch((error) => {
console.log(JSON.stringify(error, null, 2));
resolve();
});
}, 1000);
});
};

const msgSemQuoted = (content, type, options = {}) => {
   const isFullUrl = (url) => new RegExp(/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)$/, 'gi').test(url);
const mediaKeys = ['image', 'video', 'sticker', 'audio', 'document', 'history', 'md-app-state'];
options[type || 'text'] = isFullUrl(content) && mediaKeys.includes(type) ? {url: content}: content;
return dmzg.sendMessage(from, options).catch(e => {
reply("Erro ao enviar a mensagem..");
})
}

//
// Objeto para armazenar as opções temporariamente


///
const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time2 > "00:00:00" && time2 < "05:00:00"){
var tempo = ' Opa ,Boa noite'
} if(time2 > "05:00:00" && time2 < "12:00:00"){
var tempo = 'Eae, Bom dia'
} if(time2 > "12:00:00" && time2 < "18:00:00"){
var tempo = 'Uma Boa tarde'
} if(time2 > "18:00:00"){
var tempo = 'Banoite man'
}

const sendSticker = (from, filename, info) => {
dmzg.sendMessage(from, {sticker: {url: fileName}}, {quoted: sasah})
}

const sendImage = (ytb) => {
dmzg.sendMessage(from, {image: {url: ytb}}, {quoted:info})
}


const sendMess = (idGroup, textINFO) => {
dmzg.sendMessage(idGroup, {text: textINFO})
}

const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? dmzg.sendMessage(from, {text: teks.trim(), mentions: memberr}) : dmzg.sendMessage(from, {text: teks.trim(), mentions: memberr}, {quoted: info})
}
	
const mention = (teks= '', ms = info) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@'))memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
}}
dmzg.sendMessage(from, {text: teks.trim(), mentions: memberr}, {quoted: ms}) 
}

const mentionSemQuoted = (teks= '', ms = info) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@'))memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
}}
dmzg.sendMessage(from, {text: teks.trim(), mentions: memberr}) 
}

const mencionarIMG = (teks= '', Url, ms) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@'))memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
}}
dmzg.sendMessage(from, {image: {url: Url}, caption: teks.trim(), mentions: memberr}, {quoted: ms}) 
}

const reagir = async (idgp, emj) => {
var reactionMessage = {
react: {
text: emj, 
key: info.key
}
} 
dmzg.sendMessage(idgp, reactionMessage)
}

const verificarN = async(sla) => {
const [result] = await dmzg.onWhatsApp(sla)
if(result == undefined) {
reply("Este usuário não é existente no WhatsApp")
} else {
reply(`${sla} Número inserido é existente no WhatsApp com o id: ${result.jid}`)
}
}

if(isGroup && isBotGroupAdmins && !isGroupAdmins && !SoDono && !info.key.fromMe) {
if(menc_jid2?.length >= groupMembers.length - 1) { 
dmzg.sendMessage(from, {text: markingAllMember()})
if(IS_DELETE) {
setTimeout(() => {
dmzg.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
dmzg.groupParticipantsUpdate(from, [sender], "remove")
}
}

const enviarfigu = async (figu, tag) => {
dmzg.sendMessage(from, {sticker: {url: figu}}, {quoted: tag})
}

if(isAutofigu && isGroup) {
async function autofiguf() {
setTimeout(async() => {    

if(budy.includes(`${prefix}sticker`) || budy.includes(`${prefix}s`) || budy.includes(`${prefix}stk`) || budy.includes(`${prefix}st`) || budy.includes(`${prefix}fsticker`) || budy.includes(`${prefix}f`) || budy.includes(`${prefix}fstiker`)) return

if(type == 'imageMessage') {
var pack = `↧ [🤖] Criada por:↳ ${NomeDoBot}\n—\n↧ [🕵🏻‍♂️] Proprietário:↳ ${NickDono}`
var author2 = `↧ [👤] Feito por↳ ${pushname}\n [☁️] Grupo:${groupName}`
owgi = await getFileBuffer(info.message.imageMessage, 'image')
let encmediaa = await sendImageAsSticker2(dmzg, from, owgi, info, { packname:pack, author:author2})
DLT_FL(encmediaa)
}
if(type == 'videoMessage') {
if((isMedia && info.message.videoMessage.seconds < 10)) {
var pack = `↧ [🤖] Criada por:\n• ↳ ${NomeDoBot}\n—\n↧ [🕵🏻‍♂️] Proprietário:\n• ↳ ${NickDono}`
var author2 = `↧ [👤] Feito por:\n• ↳ ${pushname}\n—\n↧ [☁️] Grupo:\n• ↳ ${groupName}`
owgi = await getFileBuffer(info.message.videoMessage, 'video')
let encmedia = await sendVideoAsSticker2(dmzg, from, owgi, info, { packname:pack, author:author2})
DLT_FL(encmedia)
}
} 
}, 1000)
}
autofiguf().catch(e => {
console.log(e)
})
}

var nmrdnofc1 = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "")

if(isGroup && fs.existsSync(`./database/func/afk/afk-@${nmrdnofc1}.json`)) {
if(budy.indexOf(`@${nmrdnofc1}`) >= 0) {
const tabelin = JSON.parse(fs.readFileSync(`./database/func/afk/afk-@${nmrdnofc1}.json`));  
dmzg.sendMessage(from, {text: mess.absenceRecordOwner(NickDono, tabelin)}, {quoted: sasah})
}
}

if(isGroup && dataGp[0].ausentes?.length > 0 && menc_jid2?.length > 0 && JSON.stringify(dataGp[0].ausentes).includes(menc_jid2)) {
blue = [] 
for (i of menc_jid2) {
if(groupAdmins.indexOf(String(i)) != -1) blue.push(groupAdmins.indexOf(String(i)))
}
if(blue.length == 0) return
big = [] 
for ( i of blue) {
big.push(groupAdmins[i])
}
blr = []
for ( i = 0; i < big.length; i++) {
blr.push(dataGp[0].ausentes[dataGp[0].ausentes.map(i => i.id).indexOf(big[i])])
}
for ( i of blr) {
var blak = i
}

mention(mess.absenceRecordAdmin(blak))
}

if(isBotGroupAdmins && isGroupAdmins && body === "apaga") {
if(!menc_prt) return
dmzg.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: menc_prt}})
}

if(SoDono && budy.includes("reiniciar-sab") || info.key.fromMe && budy.includes("reiniciar-sab")) {
fs.writeFileSync("./cnt-upd.json",JSON.stringify([], null, 2))
setTimeout(() => {
file = require.resolve("./connect.js")  
delete require.cache[file]
require(file)  
}, 500)
setTimeout(() => {
DLT_FL("./cnt-upd.json")
}, 1500)
}

if(!isPremium && !SoDono && !info.key.fromMe && isCmdPremium.includes(command)) return reply(enviar.msg.premium)

//========================================\\

//BAN GRUPO & BOT OFF
if(isGroup && isCmd && isBanchat && !SoDono) return

if(isGroup && isCmd && So_Adm && !SoDono && !isGroupAdmins) return

if(isBotoff && !SoDono) return

//=======================================\\

const sendStickerFromUrl = async(to, url) => {
try {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './sticker' + names + '.png', async function () {
console.log('Enviando sticker..');
let filess = './sticker' + names + '.png'
let asw = './sticker' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
dmzg.sendMessage(to, {sticker: media}, {sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: sasah}).catch(e => {
return reply(mess.error())
})
DLT_FL(filess)
DLT_FL(asw)
});
});
} catch {
return reply("Erro.. FNC")
}
}

//=========(isQuoted/consts)=============\\
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isVisuU2 = type == 'viewOnceMessageV2'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage' || type == "viewOnceMessage" || type == "viewOnceMessageV2")
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if(isImage) typeMessage = "Image"
else if(isVideo) typeMessage = "Video"
else if(isAudio) typeMessage = "Audio"
else if(isSticker) typeMessage = "Sticker"
else if(isContact) typeMessage = "Contact"
else if(isLocation) typeMessage = "Location"
else if(isProduct) typeMessage = "Product"

const isQuotedMsg = type === 'extendedTextMessage' && content.includes('conversation')

const isQuotedMsg2 = type === 'extendedTextMessage' && content.includes('text')

const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')

const isQuotedVisuU = type === 'extendedTextMessage' && content.includes('viewOnceMessage')

const isQuotedVisuU2 = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2')

const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')

const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')

const isQuotedDocW = type === 'extendedTextMessage' && content.includes('documentWithCaptionMessage')

const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')

const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')

const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')

const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')
            
//////BLOCK CMD///////
if(isGroup){
const checar = getComandos(from)
if(checar === undefined) addComandosId(from)
}
if(isGroup && isCmd && !SoDono && !isnit && getComandoBlock(from).includes(command)) return reply('O comando foi bloqueado, entre em contato com a administração.')

///BLOCK CMD GLOBAL///
if(isBlockCmdG.includes(command) && !SoDono) return reply('Olá, o comando está bloqueado para *uso global*, ou seja, todos os usuários estão impossibilitados de usar ele.\n–\n• Entre em contato com meu proprietário para saber o motivo.')

////FIMMMMMMMMM/////
const selinLive = {key: {participant: '0@s.whatsapp.net'}, message: {liveLocationMessage: {caption: `Dono: DarkkMzGty`}}} 

const carrinho = {key: {participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 999999999, status: 1, surface: 1, orderTitle: `${NomeDoBot}`, thumbnail: null}}}

const selinVideo = {key: {participant : '0@s.whatsapp.net'},message: {videoMessage: {caption: pushname}}}

const selinContact = {key: {participant : '0@s.whatsapp.net'},message: {contactMessage: {displayName: "DarkkMzGty"}}}

///// FIMMMMMMMMMMMMM /////




/////MENSAGEM QUE APARECE NO TERMINAL///////
const { color, bgcolor } = require('./arquivos/js/color.js')
const tipoMensagem = type == 'audioMessage' ? 'Áudio' : type == 'stickerMessage' ? 'Figurinha' : type == 'imageMessage' ? 'Imagem' : type == 'videoMessage' ? 'Vídeo' : type == 'documentMessage' ? 'Documento' : type == 'contactMessage' ? 'Contato' : type == 'locationMessage' ? 'Localização' ? 'Enquete' : 'pollCreationMessage' : 'Mensagem'

  if (!isGroup && !isCmd && !info.key.fromMe) {
    console.log(`
       ❄️❄️MENSAGEM RECEBIDA❄️❄️
╭═══════════════════
👤 De: ${pushname}
👥 De onde: Privado
🕒 Hora: ${time}
📝 Mensagem: ${body}
╰═══════════════════❄️❄️
`);
}

if (isGroup && !isCmd && !info.key.fromMe) {
    console.log(`
    ❄️❄️MENSAGEM RECEBIDA❄️❄️
╭═══════════════════
┃👤 De: ${pushname}
┃👥 Grupo: ${groupName}
┃🕒 Hora: ${time}
┃📝 Mensagem: ${body}
╰═══════════════════❄️❄️
`);
}

if (isCmd && isGroup) {
    console.log(`
     ❄️❄️COMANDO EXECUTADO❄️❄️
╭═══════════════════     
┃⚡ Comando: ${command}
┃👤 De: ${pushname}
┃👥 Grupo: ${groupName}
┃📝 Mensagem: ${body}
┃🕒 Hora: ${time}
╰═══════════════════❄️❄️
`);
}

if (isCmd && !isGroup) {
    console.log(`
     ❄️❄️COMANDO EXECUTADO❄️❄️
╭═══════════════════
┃⚡ Comando: ${command}
┃👤 De: ${pushname}
┃👥 De onde: Privado
┃📝 Mensagem: ${body}
┃🕒 Hora: ${time}
╰═══════════════════❄️❄️
`);
}

// Reações (emojis) também
if (isGroup && info.message?.reactionMessage?.text) {
    console.log(`
      ❄️❄️REAÇÃO RECEBIDA❄️❄️╭═══════════════════
┃👤 De: ${pushname}
┃👥 Grupo: ${groupName}
┃🕒 Hora: ${time}
┃📝 Mensagem: ${body}
┃🔵 Emoji: "${info.message.reactionMessage.text}"
 ╰═══════════════════❄️❄️
`);
}

// ========= || Jogo da Velha || ======== \\
async function joguinhodavelha() {
if(joguinhodavelhajs2.includes(from) || joguinhodavelhajs.includes(sender)) {
const cmde = budy.toLowerCase().split(" ")[0] || "";
let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
if(fs.existsSync(`./arquivos/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
if(budy == "Cex") return reply("why");
if(
budy.toLowerCase() == "s" ||
budy.toLowerCase() == "sim" ||
budy.toLowerCase() == "ok"
) {
if(boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if(boardnow.status)
return reply(`O jogo já começou antes!`);
const matrix = boardnow._matrix;
boardnow.status = true;
fs.writeFileSync(`./arquivos/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const chatAccept = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
                    
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
               
Sua vez... : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
mention(chatAccept);
}
} else if(
budy.toLowerCase() == "n" ||
budy.toLowerCase() == "não" ||
budy.toLowerCase() == "no"
) {
if(boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if(boardnow.status)
return reply(`O jogo já começou!`);
DLT_FL(`./arquivos/tictactoe/db/${from}.json`);
mention(`@${boardnow.X} *_Infelizmente seu oponente não aceitou o desafio ❌😕_*`)
joguinhodavelhajs.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
}
}
}

if(arrNum.includes(cmde)) {
const boardnow = setGame(`${from}`);
if(!boardnow.status) return reply(`Parece que seu oponente não aceitou o desafio ainda...`)
if(
(boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
     
sender.replace("@s.whatsapp.net", "")
)
return;
const moving = validmove(Number(budy), `${from}`);
const matrix = moving._matrix;
if(moving.isWin) {
if(moving.winner == "SERI") {
const chatEqual = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
Jogo da velha termina empatado 😐
`;
reply(chatEqual);
DLT_FL(`./arquivos/tictactoe/db/${from}.json`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs)) 
joguinhodavelhajs2.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
return;
}
const abt = Math.ceil(Math.random() + 4000)
const winnerJID = moving.winner == "O" ? moving.O : moving.X;
const looseJID = moving.winner == "O" ? moving.X : moving.O;
const limWin = Math.floor(Math.random() * 1) + 10;
const limLoose = Math.floor(Math.random() * 1) + 5;
const chatWon = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*

O jogo da velha foi vencido pelo usuário: @${winnerJID}..`;

dmzg.sendMessage(from, {text: chatWon}, {quoted: sasah,
mentions: [
moving.winner == "O" ?
moving.O + "@s.whatsapp.net" :
moving.X + "@s.whatsapp.net"]
});
setTimeout( () => {
if(fs.existsSync("./arquivos/tictactoe/db/" + from + ".json")) {
DLT_FL("./arquivos/tictactoe/db/" + from + ".json");
reply(`*🕹️JOGO DA VELHA RESETADO...🕹️*`);
} else {
console.log(colors.red(time, "red"), colors.magenta("[ EXPIRADO ]"), colors.red('Jogo da velha espirado..'));
}
joguinhodavelhajs.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
}, 300000) //5 minutos
reply(`Parabéns @${winnerJID} você ganhou o jogo da velha... 🥳\nParabéns aos ambos jogadores, vocês foram bem, perder não é o fim, perder faz parte da vida.. Não desista!`)   
DLT_FL(`./arquivos/tictactoe/db/${from}.json`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs)) 
joguinhodavelhajs2.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
} else {
const chatMove = `*『 🎮 Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸ 🕹️ 』*\n-\n❌ : @${moving.X}\n⭕ : @${moving.O}\n-\nAgora é a vez do jogador: @${moving.turn == "X" ? moving.X : moving.O}\n-\n${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}\n${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}\n${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}`;
mention(chatMove);
}
} 
} 
}

// ==========[ NAMORO ]==========\\
const namoro1 = JSON.parse(fs.readFileSync("./database/func/namoro1.json"))

const namoro2 = JSON.parse(fs.readFileSync("./database/func/namoro2.json"))

//aceitar namoro
if(budy2.toLowerCase() === "s" || budy2.toLowerCase() === "sim") {
if(JSON.stringify(namoro2).includes(sender) && namoro2[namoro2.map(i => i.id).indexOf(sender)].idgp == from && isGroup) {
C14 = namoro2.map(i => i.id).indexOf(sender)
C12 = namoro1.map(i => i.usu1).indexOf(namoro2[C14].pedido + "@s.whatsapp.net")
namoro1[C12].namorados = true
fs.writeFileSync("./database/func/namoro1.json", JSON.stringify(namoro1, null, 2))
namoro1.push({usu1: sender, usu2: namoro2[C14].pedido, namorados: true, idgp: from, hora: hora, data: date})
fs.writeFileSync("./database/func/namoro1.json", JSON.stringify(namoro1, null, 2))
namoro2.splice(C14, 1)
fs.writeFileSync("./database/func/namoro2.json", JSON.stringify(namoro2))
mention(`🥳 Felicitações @${namoro1[C12].usu1.split('@')[0]}! O (a) seu grande amor, @${sender.split('@')[0]}, aceitou o seu pedido de namoro.\nSeu par pode ser consultado no comando: ${prefix}minhadupla`)
}
}

//recusar namoro
if(budy2.toLowerCase() === "n" || budy2.toLowerCase().replace("ã", "a") === "nao") {
if(JSON.stringify(namoro2).includes(sender) && namoro2[namoro2.map(i => i.id).indexOf(sender)].idgp == from && isGroup) {
C14 = namoro2.map(i => i.id).indexOf(sender)
C12 = namoro1.map(i => i.usu1).indexOf(`${namoro2[C14].pedido}@s.whatsapp.net`)
mention(`Sinto muito @${namoro1[C12].usu1.split('@')[0]}! O (a) @${sender.split('@')[0]} não te ama, deve está confuso(a) ou não preparado(a) e por isso não aceitou o seu pedido de namoro. 😦`)
namoro1.splice(C12, 1)
fs.writeFileSync("./database/func/namoro1.json", JSON.stringify(namoro1, null, 2))
namoro2.splice(C14, 1)
fs.writeFileSync("./database/func/namoro2.json", JSON.stringify(namoro2))
}
}


//=================================\\

//início do akinator

const akinator = JSON.parse(fs.readFileSync("./database/grupos/games/akinator.json"))

if(JSON.stringify(akinator).includes(from) && akinator[akinator.map(i => i.id).indexOf(from)].jogador === sender && akinator[akinator.map(i => i.id).indexOf(from)].finish > 0) {
  if(budy2.toLowerCase() === "sim" || budy2.toLowerCase() === "s") {
    AB = akinator.map(i => i.id).indexOf(from)
    akinator.splice(AB, 1)
    fs.writeFileSync("./database/grupos/games/akinator.json", JSON.stringify(akinator, null, 2))
    reply(`Eu sabia cara, eu sou demais!`)
  } else if(budy2.toLowerCase().replace("ã", "a") === "nao" || budy2.toLowerCase() === "n") {
    AB = akinator.map(i => i.id).indexOf(from)
    akinator.splice(AB, 1)
    fs.writeFileSync("./database/grupos/games/akinator.json", JSON.stringify(akinator, null, 2))
    reply(`Poxa não foi dessa vez... Quem sabe na próxima!️`)
  }
}

if(JSON.stringify(akinator).includes(from) && akinator[akinator.map(i => i.id).indexOf(from)].jogador === sender && akinator[akinator.map(i => i.id).indexOf(from)].finish <= 0 && Number(akinator[akinator.map(i => i.id).indexOf(from)].dia) === Number(moment.tz('America/Sao_Paulo').format('DD')) && isGroup) {
  AB = akinator.map(i => i.id).indexOf(from)
  if(aki.progress <= 10) per = `〔 *${aki.progress.toFixed(1)}%* 〕[▒▒▒▒▒▒▒▒▒▒]`
  if(aki.progress > 10) per = `〔 *${aki.progress.toFixed(1)}%* 〕[█▒▒▒▒▒▒▒▒▒]`
  if(aki.progress > 20) per = `〔 *${aki.progress.toFixed(1)}%* 〕[██▒▒▒▒▒▒▒▒]`
  if(aki.progress > 30) per = `〔 *${aki.progress.toFixed(1)}%* 〕[███▒▒▒▒▒▒▒]`
  if(aki.progress > 40) per = `〔 *${aki.progress.toFixed(1)}%* 〕[████▒▒▒▒▒▒]`
  if(aki.progress > 50) per = `〔 *${aki.progress.toFixed(1)}%* 〕[█████▒▒▒▒▒]`
  if(aki.progress > 60) per = `[██████▒▒▒▒] *${aki.progress.toFixed(1)}%*`
  if(aki.progress > 70) per = `[███████▒▒▒] *${aki.progress.toFixed(1)}%*`
  if(aki.progress > 80) per = `[████████▒▒] *${aki.progress.toFixed(1)}%*`
  if(aki.progress > 90) per = `[█████████▒] *${aki.progress.toFixed(1)}%*`
  if(aki.progress >= 90 || aki.currentStep >= 90) {
      await aki.win()
      jogo.now = true
      akinator[AB].finish += 1
      fs.writeFileSync("./database/grupos/games/akinator.json", JSON.stringify(akinator, null, 2))
      dmzg.sendMessage(from, {image: {url: aki.answers[0].absolute_picture_path }, caption: `〔 ${aki.answers[0].name}: ${aki.answers[0].description} 〕\n–\n🧙🏻‍♂️ Hmm, acho que o seu personagem é esse aqui... Acertei?\n• ${II}Observação:{II} _Responda com "sim" ou "não", sem as aspas._`}, {quoted: info})
    } else {
      if(budy2.toLowerCase() === "sim" || budy2.toLowerCase() === "s") {
        await aki.step("0")
        reply(`🧞‍♂️ *𝐀𝐊𝐈𝐍𝐀𝐓𝐎𝐑 𝐐𝐔𝐄𝐒𝐓𝐈𝐎𝐍𝐒:*\n• Questão: ${aki.question}\n–\n📊: ${per}`)
      }
      if(budy2.toLowerCase().replace("ã", "a") === "nao" || budy2.toLowerCase() === "n") {
        await aki.step("1")
        reply(`🧞‍♂️ *𝐀𝐊𝐈𝐍𝐀𝐓𝐎𝐑 𝐐𝐔𝐄𝐒𝐓𝐈𝐎𝐍𝐒:*\n• Questão: ${aki.question}\n–\n📊: ${per}`)
      }
      if(budy2.toLowerCase().replace("ã", "a") === "nao sei" || budy2.toLowerCase() === "nsei" || budy2.toLowerCase() === "n sei") {
        await aki.step("2")
        reply(`🧞‍♂️ *𝐀𝐊𝐈𝐍𝐀𝐓𝐎𝐑 𝐐𝐔𝐄𝐒𝐓𝐈𝐎𝐍𝐒:*\n• Questão: ${aki.question}\n–\n📊: ${per}`)
      }
      if(budy2.toLowerCase() === "provavelmente sim" || budy2.toLowerCase() === "provavelmente s") {
        await aki.step("3")
        reply(`🧞‍♂️ *𝐀𝐊𝐈𝐍𝐀𝐓𝐎𝐑 𝐐𝐔𝐄𝐒𝐓𝐈𝐎𝐍𝐒:*\n• Questão: ${aki.question}\n–\n📊: ${per}`)
      }
      if(budy2.toLowerCase() === "provavelmente nao" || budy2.toLowerCase() === "provavelmente n") {
        await aki.step("4")
        reply(`🧞‍♂️ *𝐀𝐊𝐈𝐍𝐀𝐓𝐎𝐑 𝐐𝐔𝐄𝐒𝐓𝐈𝐎𝐍𝐒:*\n• Questão: ${aki.question}\n–\n📊: ${per}`)
      }
    }
}
// ==========[ ANAGRAMA ]==========\\

if(isGroup && fs.existsSync(`./database/grupos/games/anagrama/${from}.json`)){
let dataAnagrama = JSON.parse(fs.readFileSync(`./database/grupos/games/anagrama/${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataAnagrama.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dataAnagrama.original) return reply('está perto')
if(budy.toUpperCase() == dataAnagrama.original) { dmzg.sendMessage(from, {text: `🎉 Parabéns *${pushname}*, você acertou o anagrama apresentado.\nA palavra original era: *${dataAnagrama.original}*. Estou iniciando o próximo jogo em 5s!`}, {"mentionedJid": [sender]}), fs.unlinkSync(`./database/grupos/games/anagrama/${from}.json`)		
		setTimeout(async() => {
fs.writeFileSync(`./database/grupos/games/anagrama/${from}.json`, `${JSON.stringify(palavrasANA[Math.floor(Math.random() * palavrasANA.length)])}`)
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./database/grupos/games/anagrama/${from}.json`))
dmzg.sendMessage(from, {text:`Decifre a palavra embaralhada abaixo:\n• ${II}Anagrama:${II} ${dataAnagrama2.embaralhada}\n• ${II}Dica:${II} ${dataAnagrama2.dica}`}) 
}, 5000)
}}

if(isGroup && fs.existsSync(`./database/grupos/games/quiz-animais/${from}.json`)){
let dataAnagramaa = JSON.parse(fs.readFileSync(`./database/grupos/games/quiz-animais/${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataAnagramaa.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dataAnagramaa.original) return reply('está perto')
if(budy.toUpperCase() == dataAnagramaa.original) { 
dmzg.sendMessage(from,{text: `🎉 Parabéns *${pushname}*, você acertou! O animal era: *${dataAnagrama.original}*.\n• Estou iniciando o próximo jogo em 5s!`}, {"mentionedJid": [sender]}), fs.unlinkSync(`./database/grupos/games/quiz-animais/${from}.json`)		
setTimeout(async() => {
fs.writeFileSync(`./database/grupos/games/quiz-animais/${from}.json`, `${JSON.stringify(quizanimais[Math.floor(Math.random() * quizanimais.length)])}`)
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./database/grupos/games/quiz-animais/${from}.json`))
imagemtexto = `🤔 Qual é o animal apresentado na imagem?\n • Envie sua resposta abaixo, mencionando esta mensagem.`
wew = await getBuffer(`${dataAnagrama2.foto}`)   
await dmzg.sendMessage(from, {image: wew, caption: imagemtexto, thumbnail: wew}, {quoted: info})
}, 5000)
}
}

if(isGroup && fs.existsSync(`./database/grupos/games/gartic/${from}.json`)){
let perg_gartic = JSON.parse(fs.readFileSync(`./database/grupos/games/gartic/${from}.json`))
if(budy.slice(0,4).toUpperCase() == perg_gartic.resposta.slice(0,4).toUpperCase() && budy.toUpperCase() != perg_gartic.resposta) return reply('Está perto!')
if(budy.toUpperCase() == perg_gartic.resposta) { 
dmzg.sendMessage(from,{text: `*DESCOBERTO!* Parabéns ${pushname}, iniciando o próximo jogo em 5 segundos.`}, {"mentionedJid": [sender]}), fs.unlinkSync(`./database/grupos/games/gartic/${from}.json`)		
setTimeout(async() => {
fs.writeFileSync(`./database/grupos/games/gartic/${from}.json`, `${JSON.stringify(garticArchives[Math.floor(Math.random() * garticArchives.length)])}`)
let dataGartic2 = JSON.parse(fs.readFileSync(`./database/grupos/games/gartic/${from}.json`))
garticText = `👩🏼‍🏫 - A resposta é representada por um(a): ${dataGartic2.pergunta}
📜 - A resposta supostamente começa com a(s) letra(s): "${dataGartic2.letra_inicial}"
🤔 - Hmmm, contém traços? ${dataGartic2.contem_traços}
–
❓️ - *Não sabe a resposta?* _Peça ao adm do grupo para usar o comando *${prefix}revelargartic* para revelar a resposta correta da afirmação._`
wew = await getBuffer(`${dataGartic2.imagem}`)
await dmzg.sendMessage(from, {image: wew, caption: garticText, thumbnail: wew}, {quoted: sasah})
}, 5000)
}
}

if(isGroup && fs.existsSync(`./database/grupos/games/enigma/${from}.json`)){
let enigmaData = JSON.parse(fs.readFileSync(`./database/grupos/games/enigma/${from}.json`))
if(budy.slice(0,4).toUpperCase() == enigmaData.respostaEne.slice(0,4).toUpperCase() && budy.toUpperCase() != enigmaData.respostaEne) return reply('Está perto!')
if(budy.toUpperCase() == enigmaData.respostaEne) { 
dmzg.sendMessage(from,{text: `*ENIGMA RESOLVIDO!* Parabéns ${pushname}, iniciando o próximo jogo em 5 segundos.`}, {"mentionedJid": [sender]}), fs.unlinkSync(`./database/grupos/games/enigma/${from}.json`)		
setTimeout(async() => {
fs.writeFileSync(`./database/grupos/games/enigma/${from}.json`, `${JSON.stringify(enigmaArchive[Math.floor(Math.random() * enigmaArchive.length)])}`)
let dataEnigmadataEnigma333 = JSON.parse(fs.readFileSync(`./database/grupos/games/enigma/${from}.json`))
enigmaTezt = `📜 - Resolva o seguinte enigma abaixo:
–
${dataEnigmadataEnigma333.charada}
–
❓️ - *Não sabe a resposta?* _Peça ao adm do grupo para usar o comando *${prefix}revelarenigma* para revelar a resposta correta da enigma._`
wew = await getBuffer(`https://telegra.ph/file/15be608763684b3e3af38.jpg`)
await dmzg.sendMessage(from, {image: wew, caption: enigmaTezt, thumbnail: wew}, {quoted: sasah})
}, 5000)
}
}

if(isGroup && fs.existsSync(`./database/grupos/games/wmusic/${from}.json`)){
whatMusic = JSON.parse(fs.readFileSync(`./database/grupos/games/wmusic/${from}.json`))
if(budy.slice(0,4).toUpperCase() == whatMusic.resposta.slice(0,4).toUpperCase() && budy.toUpperCase() != whatMusic.resposta) return reply('Tá perto hein! Tente novamente...')
if(budy.toUpperCase() == whatMusic.resposta) { 
dmzg.sendMessage(from,{text: `• Resposta Correta: *${whatMusic.resposta}*\nParabéns ${pushname}, iniciando o próximo jogo em 5 segundos.`}, {"mentionedJid": [sender]}), fs.unlinkSync(`./database/grupos/games/wmusic/${from}.json`)		
setTimeout(async() => {
fs.writeFileSync(`./database/grupos/games/wmusic/${from}.json`, `${JSON.stringify(whatMusicAr[Math.floor(Math.random() * whatMusicAr.length)])}`)
wmusic = JSON.parse(fs.readFileSync(`./database/grupos/games/wmusic/${from}.json`))
textM = `🎶🎧 𝐖𝐇𝐀𝐓 𝐌𝐔𝐒𝐈𝐂? 😱💡
–
${wmusic.trechoMusic}
–
🤔😱 Qual música pertence o trecho apresentado acima?
• ${II}Dica:${II} ${wmusic.dica}`
await dmzg.sendMessage(from, {text: textM}, {quoted: sasah})
}, 5000)
}
}

//=================================\\

function contar(frase, letraProcurada) { 
var total = 0; [...frase].forEach(letra => {
if(letra === letraProcurada) total++; 
}); 
return total; 
}

joguinhodavelha()

var minesId = []
for(let obj of mines) minesId.push(obj.id)
const isPlayMines = (await mines.find(obj => obj.id == from)) ? true : false
var minecor = ['a1', 'a2', 'a3', 'a4', 'a5', 'b1', 'b2', 'b3', 'b4', 'b5', 'c1', 'c2', 'c3', 'c4', 'c5', 'd1', 'd2', 'd3', 'd4', 'd5', 'e1', 'e2', 'e3', 'e4', 'e5']

if(isAntilinkgp && isGroup && isBotGroupAdmins && !isGroupAdmins) {
if(Procurar_String.includes("chat.whatsapp.com/")){
if(isBot) return 
link_dgp = await dmzg.groupInviteCode(from)
if(Procurar_String.match(link_dgp)) return reply('Link do nosso grupo, não irei remover.. ')  
if(IS_DELETE) {
setTimeout(() => {
dmzg.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return
dmzg.groupParticipantsUpdate(from, [sender], 'remove')
}
}

const groupIdscount = [];
for(let obj of countMessage) {
groupIdscount.push(obj.groupId);
}

// MUTAR USUÁRIO 
const GroupsMutedActived = []
for(let obj of muted) {
    GroupsMutedActived.push(obj.jid)
}
const isMuted = (isGroup && GroupsMutedActived.indexOf(from) >= 0) ? true : false
const NumbersMuted = isMuted ? muted[GroupsMutedActived.indexOf(from)].numbers : []
if(isMuted && NumbersMuted.indexOf(sender) >= 0){
setTimeout(async () => {
    //dmzg.groupParticipantsUpdate(from, [sender], 'remove')
    dmzg.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 1000)
return
}

/*if (isCmd && isFiltered(sender)) {return reply(mess.floodCommands())} else {addFilter(sender)}*/

//====(CONTADOR-DE-MENSAGENS)=======\\
var numbersIds = []
if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
for(let obj of countMessage[ind].numbers) {numbersIds.push(obj.id)}
if(numbersIds.indexOf(sender) >=0) {
var indnum = numbersIds.indexOf(sender)
var RSM_CN = countMessage[ind].numbers[indnum]
type == "stickerMessage" ? "" : RSM_CN.messages += isCmd ? 0 : 1
type == "stickerMessage" ? "" : RSM_CN.cmd_messages += isCmd ? 1 : 0
type == "stickerMessage" ? "" : RSM_CN.aparelho = adivinha
RSM_CN.figus += type == "stickerMessage" ? 1 : 0
fs.writeFileSync('./settings/media/countmsg.json', JSON.stringify(countMessage, null, 2)+ '\n')
} else {
const messages = isCmd ? 0 : 1
const cmd_messages = isCmd ? 1 : 0
var figus = type == "stickerMessage" ? 1 : 0
countMessage[ind].numbers.push({
id: sender,
messages: messages,
cmd_messages: cmd_messages, 
aparelho: adivinha, 
figus: figus
})
fs.writeFileSync('./settings/media/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}
} else if(isGroup) {
countMessage.push({
groupId: from,
numbers: [{
id: sender,
messages: 2,
figus: 0,
cmd_messages: isCmd ? 1 : 0, 
aparelho: adivinha
}]
})
fs.writeFileSync('./settings/media/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

//=========(EVAL-EXECUÇÕES)=========\\

if(budy.startsWith('>')){
try {
if(info.key.fromMe) return 
if(!SoDono && !isnit && !issupre && !ischyt && !issupre && !ischyt) return
console.log('[', colors.cyan('EVAL'),']', colors.yellow(moment(info.messageTimestamp * 1000).format('DD/MM HH:mm:ss')), colors.green(budy))
return dmzg.sendMessage(from, {text: JSON.stringify(eval(budy.slice(2)),null,'\t')}).catch(e => {
return reply(String(e))
})
} catch (e){
return reply(String(e))
}
}

if(budy.startsWith('(>')){
try {
if(info.key.fromMe) return   
if(!SoDono && !isnit && !issupre && !ischyt && !issupre && !ischyt) return 
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if(sat == undefined){
bang = util.format(sul)
}
return dmzg.sendMessage(from, {text: bang}, {quoted: sasah})
}

dmzg.sendMessage(from, {text: util.format(eval(`;(async () => { ${konsol} })()`))}).catch(e => { 
return reply(String(e))
})
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, colors.green(">"), 'from', colors.green(sender.split('@')[0]), 'args :', colors.green(args.length))
} catch(e) {
return reply(String(e))
console.log(e)
}
}


if(body.startsWith('$')) {
if(info.key.fromMe) return 
if(!SoDono && !isnit) return 
exec(q, (err, stdout) => {
if(err) return reply(`${err}`)
if(stdout) {
reply(stdout)
}
})
}

//======================================\\


//======(ANTI-IMAGEM)========\\
if(isAntiImg && isBotGroupAdmins && type == 'imageMessage') {
if(info.key.fromMe) return
if(isGroupAdmins) return dmzg.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: info})
if(dataGp[0].legenda_imagem != "0") {
dmzg.sendMessage(from, {text: dataGp[0].legenda_imagem}, {quoted: info})  
}
if(IS_DELETE) {
setTimeout(() => {
dmzg.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
dmzg.groupParticipantsUpdate(from, [sender], 'remove')
}

//======(ANTI-STICKER)========\\
if(isAntiSticker && isBotGroupAdmins && type == 'stickerMessage') {
if(info.key.fromMe) return
if(isGroupAdmins) return dmzg.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: info})
dmzg.sendMessage(from, {text: mess.messageProhibitedDetUser()}, {quoted: info})
if(IS_DELETE) {
setTimeout(() => {
dmzg.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
dmzg.groupParticipantsUpdate(from, [sender], 'remove')
}

if(Antidoc && isBotGroupAdmins && type == 'documentMessage') {
if(info.key.fromMe) return
if(isGroupAdmins) return dmzg.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: info})
if(dataGp[0].legenda_documento != "0") {
dmzg.sendMessage(from, {text: dataGp[0].legenda_documento}, {quoted: info}) 
}
if(IS_DELETE) {
setTimeout(() => {
dmzg.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
dmzg.groupParticipantsUpdate(from, [sender], 'remove')
}

let isTrueFalse = Array('tiktok', 'facebook','instagram','twitter','ytmp3','ytmp4','play', 'playmix', 'play2', 'play3', 'playvid', 'playvid2').some(item => item === command)

if(isUrl(PR_String) && isAntiLinkHard && !isGroupAdmins && isBotGroupAdmins && !info.key.fromMe) {
if(Procurar_String.includes("chat.whatsapp.com")) {
link_dgp = await dmzg.groupInviteCode(from)
if(Procurar_String.match(link_dgp)) return reply('Link do nosso grupo, não irei remover.. ') 
}
if(isCmd && isTrueFalse) return
if(IS_DELETE) {
setTimeout(() => {
dmzg.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
dmzg.groupSettingUpdate(from, 'announcement')
setTimeout(() => {
dmzg.groupSettingUpdate(from, 'not_announcement')
}, 1200)
if(!JSON.stringify(groupMembers).includes(sender)) return
dmzg.groupParticipantsUpdate(from, [sender], 'remove')
}

// ANTI NOTAS FAKES ==================>

if(isAntiNotas && budy2.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi) && isBotGroupAdmins && !isGroupAdmins && !SoDono && !info.message?.reactionMessage?.text && budy2.length > 20) {
let verificar = budy2.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi)
if(verificar && budy.length < 100) return  
if(IS_DELETE) {
setTimeout(() => {
dmzg.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
dmzg.groupParticipantsUpdate(from, [sender], 'remove')
}

//FINALZIN ===========================>


//======(ANTI-VIDEO)========\\

if(isAntiVid && isBotGroupAdmins && type == 'videoMessage') {
if(isGroupAdmins) return dmzg.sendMessage(from,{text: mess.messageProhibitedDetAdmin()}, {quoted: info})
if(dataGp[0].legenda_video == "0") {
dmzg.sendMessage(from, {text: mess.messageProhibitedDetUser()}, {quoted: info})
} else {
dmzg.sendMessage(from, {text: dataGp[0].legenda_video}, {quoted: info})  
}
if(IS_DELETE) {
setTimeout(() => {
dmzg.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return
dmzg.groupParticipantsUpdate(from, [sender], 'remove')
}

//======(ANTI-AUDIO)=======\\
if(isAntiAudio && isBotGroupAdmins && type == 'audioMessage') {
if(isGroupAdmins) return dmzg.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: info})
dmzg.sendMessage(from, {text: mess.messageProhibitedDetUser()}, {quoted: info})
if(IS_DELETE) {
setTimeout(() => {
dmzg.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return
dmzg.groupParticipantsUpdate(from, [sender], 'remove')
}

//========(ANTI_LIGAR)========\\

if(!isGroup && isAnticall) {
dmzg.ws.on('CB:call', async (B) => {
var msgcallblock = `./database/func/call-msg_block-${sender}.json`  
if(!fs.existsSync(msgcallblock)) {
fs.writeFileSync(msgcallblock, JSON.stringify(mess.antiCalls(), null, 2))
var msgcallbl = JSON.parse(fs.readFileSync(msgcallblock))
if(B.content[0].tag == 'offer') {
dmzg.sendMessage(B.content[0].attrs['call-creator'], { text: msgcallbl }).then(() => { 
dmzg.updateBlockStatus(B.content[0].attrs['call-creator'], "block")
DLT_FL(msgcallblock)
})
}
}
})
}

//====================================\\

{var hora_ = moment.tz('America/Sao_Paulo').format('HH:mm');
var hora_2 = moment.tz('America/Sao_Paulo').format('mm');
for (i of black_) {
if(i.hora == hora_) {var blu_dc = true} else {var blu_dc = false}
}
if(blu_dc == true) {
for ( i of black_) {
if(i.hora == hora_) var ik = i}
for ( i of ik?.PUXAR) {
if(i.avisou == true) return
if(i.length == 0) return
dmzg.sendMessage(i.idgp, {text: i.msg})
i.avisou = true 
fs.writeFileSync("./database/grupos/avisos.json", JSON.stringify(black_, null, 2))
}}; for ( i of black_) {
if(hora_2 >= i.hora.split(":")[1]+parseInt(1)) {
var ik2 = i
var ik_r = true} else {var ik_r = false}
}; if(ik_r == true) { 
for ( i of ik2.PUXAR) {
if(i.avisou == true) {
i.avisou = false
fs.writeFileSync("./database/grupos/avisos.json", JSON.stringify(black_, null, 2))}}}}

/* ANTIPV1 - Este anti pv bloqueia aqueles que encaminham mensagem no pv do bot.. */
var USUARIOS_BLOQ = []
if(isAntiPv && !USUARIOS_BLOQ.includes(sender)) {
if(!isGroup && !SoDono && !isnit && !isPremium){ 
await sleep(2500)
reply(msgantipv1.replace('#nome#', pushname))
setTimeout(async () => {
dmzg.updateBlockStatus(sender, 'block')
}, 2000)
}
USUARIOS_BLOQ.push(sender);
} 

/* ANTIPV2 - Vai floodar o privado do usuário que encaminhar a mensagem no privado.. */
var MSG_ANTPV2_ENC = []
if(!isGroup && !isPremium && !SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe && isAntiPv2 && !MSG_ANTPV2_ENC.includes(sender)) {
MSG_ANTPV2_ENC.push(sender);
return reply(msgantipv2)
}

/* ANTIPV3 - Ignora todos os que falam ou usam os comandos no privado, exceto user premium e o proprietário atual do bot. */
if(!isGroup && !isPremium && !SoDono && !info.key.fromMe && isAntiPv3) {return}

//====================================\\
var i9 = countMessage.map(i => i.groupId).indexOf(from)
var idgrupo = groupIdscount.indexOf(from)

var idusu = numbersIds?.indexOf(sender)






const VerificarJSON = (json, value) => {
if(JSON.stringify(json).includes(value)) return true
return false
}




if(isX9VisuUnica) {
if(info.message?.viewOnceMessageV2 || type == "viewOnceMessage") {
if(JSON.stringify(info).includes("videoMessage")) {
var px = info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage
px.viewOnce = false
px.video = {url: px.url}
px.caption += "\n\nRevelando o vídeo na visualização única enviada.."
dmzg.sendMessage(from,px)
} else {
var px = info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage
px.viewOnce = false
px.image = {url: px.url}
px.caption += "\n\nRevelando a imagem na visualização única enviada..."
dmzg.sendMessage(from,px)
}}}

/////\\\\\\//////\\\\\\////\\\\////\\\///\\\///\\\\

/////\\\\\\//////\\\\\\////\\\\////\\\///\\\///\\\\



let isCmdKey = Array('aluguel', 'alugueis', 'alugar', 'alugarbot', 'loja', 'dono').some(item => item === command)

if(isModoAluguel && isCmd && !SoDono && !isCmdKey) {
if(!JSON.stringify(grupos).includes("darkkmzgty")) {
grupos.push({id: "darkkmzgty", gps: []})
fs.writeFileSync("./database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2))}
if(!JSON.stringify(grupos).includes(from)) {
grupos.push({id: from, limite: 5, validado: false})
fs.writeFileSync("./database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
}
AB = grupos.map(i => i.id).indexOf(from)
if(grupos[AB].validado == false) {
if(grupos[AB].limite <= 1) {
grupos.splice(AB, 1)
fs.writeFileSync("./database/grupos/grupos.json", JSON.stringify(grupos, null, 2))
reply(`Esperei demais , tô dando o fora já que não querem me pagar pra me usar...`)
await sleep(3000)
return dmzg.groupLeave(from)
} else {
grupos[AB].limite -= 1
fs.writeFileSync("./database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
return mention(`⋆❄️Suave? , então, esse grupo não tá registrado no meu banco de dados , fale com meu criador pra mais informações ❄️* *@${nmrdn.split('@')[0]}*`)
}}}

if (isx9 && type === "pinInChatMessage") {
duration = info.message?.messageContextInfo?.messageAddOnDurationInSecs;
fixedTime = (duration) => (duration === 0) ? "0" : (duration >= 30 * 24 * 60 * 60) ? "30d" : (duration >= 7 * 24 * 60 * 60) ? "7d" : (duration >= 24 * 60 * 60) ? "24h" : duration;
action = fixedTime(duration) === "0" ? 'desfixar uma mensagem' : `fixar uma mensagem por *${fixedTime(duration)}*`;
await dmzg.sendMessage(from, {text: `O admin *@${sender.split("@")[0]}* acabou de ${action}.`, mentions: [sender]})
}

/////\\\\\\//////\\\\\\////\\\\////\\\///\\\///\\\\

if(isCmd && isBanned) return reply(mess.bannedUser())

const totalhit = JSON.parse(fs.readFileSync('./database/data/totalcmd.json'))
const CmdUsedBOT = () => {
totalhit[0].totalcmd += 1
fs.writeFileSync('./database/data/totalcmd.json', JSON.stringify(totalhit))
}
if (isCmd) CmdUsedBOT()

const reqcmd = JSON.parse(fs.readFileSync('./database/data/totalcmd.json'))

var palavrasfr = JSON.parse(fs.readFileSync("./database/grupos/palavras_forca.json"))

var palavrasfrc = palavrasfr[Math.floor(Math.random() * palavrasfr.length)]

var ALT_FR = palavrasfrc.plvr.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

async function rv_forca() {
var blue = []
for (let i = 0; i < ALT_FR.length; i++) {
if(ALT_FR[i] == ' '){
blue.push(' ')
} else {
blue.push('_')
}
}  
dataGp[0].forca_ofc = [{acertos: 0, erros: 0, palavra: blue, escreveu: [], palavra_ofc: ALT_FR, dica: palavrasfrc.dica, tema: palavrasfrc.tema}]
dataGp[0].forca_inc = false
setGp(dataGp)
}

function reactMessage(emoji) {
dmzg.sendMessage(from, {react: {text: emoji, key: info.key}})
}

if (isGroup && isCmd && !isGroupAdmins && !SoDono && !isPremium && dataGp[0]?.Limitar_CMD) {
  
var TEMPO_A = Math.floor(Date.now() / 1000) 
 
var ID_G = Limit_CMD.findIndex(i => i.idgp === from)
var ID_U = Limit_CMD[ID_G]?.ids.findIndex(i => i.id === sender)

if(!JSON.stringify(Limit_CMD).includes(from) || ID_G < 0 && ID_U < 0) {
Limit_CMD.push({idgp: from, ids: [{id: sender, tempo: TEMPO_A}]})
fs.writeFileSync("./database/func/limitarcmd.json", JSON.stringify(Limit_CMD, null, 2));
} else if(ID_G >= 0 && ID_U < 0) {
Limit_CMD[ID_G].ids.push({id: sender, tempo: TEMPO_A})
fs.writeFileSync("./database/func/limitarcmd.json", JSON.stringify(Limit_CMD, null, 2));
}

if(ID_G >= 0 && ID_U >= 0) {
var TEMPO_D = Limit_CMD[ID_G].ids[ID_U].tempo;

var TEMPO_M = TEMPO_A - TEMPO_D

var TEMPO_D2 = parseInt(dataGp[0]?.Limit_tempo) || 60

if(TEMPO_M < TEMPO_D2) {
return reply(nescessario.TEMPO_DE_CMD.replaceAll("#tempocmd#", TimeCount(TEMPO_M)).replaceAll("#tempo#", TEMPO_D2))
} else {
Limit_CMD[ID_G].ids[ID_U].tempo = TEMPO_A
fs.writeFileSync("./database/func/limitarcmd.json", JSON.stringify(Limit_CMD, null, 2));
}
}
}

dmzg.sendImageAsSticker = async (jid, path, options = {}) => {
    let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
    let buffer
        if (options && (options.packname || options.author)) {
         buffer = await writeExifImg(buff, options)
            } else {
         buffer = await imageToWebp(buff)
        }
    await dmzg.sendMessage(jid, { sticker: { url: buffer }, ...options})
    return buffer
}

dmzg.sendImageMentions = (photo, text, mem, ids) => {
(ids == null || ids == undefined || ids == false) ? dmzg.sendMessage(from, {image: photo, caption: text.trim(), contextInfo: { "mentionedJid": mem}}) : dmzg.sendMessage(from, {image: photo, caption: text.trim(), contextInfo: {"mentionedJid": mem}})
}

if(chaves.length > 0) {caixa = []
for(k of chaves) {
if(budy2.toUpperCase() === k.key) {
caixa.push(k.key)
}
}
if(VerificarJSON(chaves, caixa[0])) {
AD = chaves.map(i => i.key).indexOf(caixa[0])
timeday = chaves[AD].dias
pessoa = chaves[AD].cliente
infinity = chaves[AD].dias > 0 ? false : true
if(!VerificarJSON(grupos, "darkkmzgty")) {
grupos.push({id: "darkkmzgty", gps: []})
fs.writeFileSync("./database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
}
if(!VerificarJSON(grupos, from)) {
grupos.push({id: from, limite: 5, validado: true})
fs.writeFileSync("./database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
} else {
GP = grupos.map(i => i.id).indexOf(from)
grupos[GP].validado = true
fs.writeFileSync("./database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
}
if(infinity == false) {
if(chaves[AD].tipo == 1 && isGroup) {
if(!VerificarJSON(aluguel, from)) {
aluguel.push({id: from, nome: groupName, tempo: timeday, totalRent: timeday, cliente: pessoa, save: Number(moment.tz('America/Sao_Paulo').format('DD')), cortesia: false})
fs.writeFileSync("./database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
chaves.splice(AD, 1)
fs.writeFileSync("./database/grupos/aluguel/chaves.json", JSON.stringify(chaves, null, 2))
reply(`Grupo adicionado no plano de aluguel`)
await sleep(2000)
dmzg.sendMessage(nmrdn, {text: `Codigo validado. Registrado por *@${pessoa.split('@')[0]}*\n• Grupo: *${groupName}*`, mentions: [pessoa]})
} else {
AB = aluguel.map(i => i.id).indexOf(from)
aluguel[AB].cortesia = false
aluguel[AB].nome = groupName
aluguel[AB].totalRent = aluguel[AB].tempo + timeday
aluguel[AB].tempo += timeday
fs.writeFileSync("./database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
chaves.splice(AD, 1)
fs.writeFileSync("./database/grupos/aluguel/chaves.json", JSON.stringify(chaves, null, 2))
reply(`+${timeday} dia${Number(timeday) > 1 ? 's' : ''} adicionado${Number(timeday) > 1 ? 's' : ''} para o grupo em meu banco de dados.`)
await sleep(2000)
dmzg.sendMessage(nmrdn, {text: ` Código validado. Registrado por *@${pessoa.split('@')[0]}*\n• Grupo: *${groupName}*`, mentions: [pessoa]})
}
}
        
if(chaves[AD].tipo == 2 && isGroup) {
CD = grupos.map(i => i.id).indexOf("matheuzinho")
if(!VerificarJSON(grupos[CD].gps, from)) {
if(!VerificarJSON(aluguel, from)) {
grupos[CD].gps.push({id: from})
fs.writeFileSync("./database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
aluguel.push({id: from, nome: groupName, tempo: 24, totalRent: 24, cliente: sender, save: Number(moment.tz('America/Sao_Paulo').format('mm')), cortesia: true})
fs.writeFileSync("./database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
reply(`.`)
await sleep(2000)              
dmzg.sendMessage(nmrdn, {text: `.${groupName}*`, mentions: [pessoa]})
} else reply("[!] Este grupo já está registrado em meu banco de dados.")
} else reply("[!] Já foi validado neste mês uma cortesia neste grupo.")
}
} else {
if(chaves[AD].tipo == 1 && isGroup) {
chaves.splice(AD, 1)
fs.writeFileSync("./database/grupos/aluguel/chaves.json", JSON.stringify(chaves, null, 2))
reply(`[!] O grupo foi salvo!`)
}}}}


// ÍNICIO: CASES / COMANDOS COM PREFIXO:
switch(command){





/////COMANDOS DE INFORMAÇÕES//////


case 'configurar-bot':
await reagir(from, "⌛");
dmzg.sendMessage(from, {text: getInfo.configbot(prefix)}, {quoted: selinContact})
break

case 'infotinder':
await reagir(from, "⌛");
dmzg.sendMessage(from, {text: getInfo.infoTinderSabs(prefix)}, {quoted: sasah})
break

case 'infobv':
case 'infowelcome':
case 'infobemvindo':
await reagir(from, "⌛");
dmzg.sendMessage(from, {text: getInfo.bemvindo(prefix)}, {quoted: sasah})
break



case 'ping':
await reagir(from, "⌛"); {
    function runtime(seconds) {
        let hours = Math.floor(seconds / 3600);
        let minutes = Math.floor((seconds % 3600) / 60);
        let secs = Math.floor(seconds % 60);
        return `${hours}h ${minutes}m ${secs}s`;
    }

    let responseTime = (Date.now() / 1000) - info.messageTimestamp;
    let uptime = process.uptime();
    const os = require('os');
    
    const fs = require('fs');
    let totalCommands = 0;
    try {
        const fileContent = fs.readFileSync('./index.js', 'utf8');
        totalCommands = (fileContent.match(/case '/g) || []).length;
    } catch (e) {}

    let responseMessage = `
╭━━⌈ 𝗣𝗜𝗡𝗚 𝗧𝗔𝗞𝗜𝗥𝗔 𝗕𝗢𝗧 ⌋━━╮
🟢 *Ping:* ${responseTime.toFixed(3)}
📈 *Online há:* ${runtime(uptime)}
📊 *Total Cmd:* ${totalCommands}
💻 *Rodando em:* Linux
╰━━━━━━━━━━━━━━━━━━╯
    `.trim();

    const imageUrl = 'https://files.catbox.moe/qqwrd4.jpg';
    
    await dmzg.sendMessage(
        from,
        {
            image: { url: imageUrl },
            caption: responseMessage,
            mentions: [sender],
            quoted: info
            // 👇 Removeu contextInfo
        }
    );
}
break;


case 'owner':
case 'odono':
case 'dono': 
case 'infodono':  
numerodn = numerodono_ofc
dmzg.sendMessage(from, {image: {url: ftmenu.logo}, caption: getInfo.infoOwner(prefix, NickDono, numerodn, NomeDoBot, sender), mentions: [sender]}, {quoted: sasah})
break 



case 'criador': case 'suporte-dono': {
let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'N:;DarkkMzGty;;;\n' + 'FN:DarkkMzGty\n' + 'item1.TEL;waid=553171917951:+55 31 7191-7951\n' + 'item1.X-ABLabel:Celular\n' + 'END:VCARD'
await dmzg.sendMessage(from, { contacts: { displayName: 'DarkkMzGty', contacts: [{vcard}]}
})
await msgSemQuoted(`Prontinho`)
}
break


case 'grupoinfo':
case 'infogrupo':
case 'infogp':  
case 'gpinfo':  
case 'regras':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins)return reply(enviar.msg.adm)
try {
var ppUrl = await dmzg.profilePictureUrl(from, 'image')
} catch {
var ppUrl = `https://telegra.ph/file/6ca032835ed7a16748b6f.jpg`
}
var puxarInfo = await dmzg.groupMetadata(from)
var ANC_INFO = puxarInfo.announce
var returnAnnounce = ANC_INFO === false ? "Não." : ANC_INFO === true ? "Sim." : undefined
var RST_INFO = puxarInfo.restrict 
var returnRestrict = RST_INFO === false ? "Sim." : RST_INFO === true ? "Não." : undefined
var infoCreator = puxarInfo.subjectOwner || "Não Encontrado"
infoGroup = `• Nome do Grupo: *${puxarInfo.subject}*\n• ID: *${puxarInfo.id}*\n-\n• Este grupo foi criado por: *@${infoCreator.replace("@s.whatsapp.net", "")}*\n• Data/hora de criação do grupo: *${moment(`${puxarInfo.creation}` * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}*\n• Horário e data da última alteração no grupo: *${moment(`${puxarInfo.subjectTime}` * 1000).format('DD/MM/YYYY HH:mm:ss')}*\n-\n• Quantidade de adminstradores: *${groupAdmins.length}*\n• Quantidade de membros: *${somembros.length}*\n• Soma total de membros e admins do grupo: *${puxarInfo.participants.length} participantes*\n-\n• Este grupo está fechado no momento? *${returnAnnounce}*\n• As informações do grupo podem ser alteradas por membros? *${returnRestrict}*\n-\n• Para ver as atividades dos participantes, use: *${prefix}atividade*\n• Para ver os membros inativos no grupo, use: *${prefix}inativos [quantidade de mensagens]*, ex: ${prefix}inativos 10`
dmzg.sendMessage(from, {image: {url: ppUrl}, caption: infoGroup, mentions: [infoCreator]}, {quoted: sasah})
break 

case 'avaliar':
const avalie = body.slice(8)
if(args.length <= 1) return reply(`Exemplo: ${prefix}avalie "Bot muito bom, parabéns. "`)
if(args.length >= 400) return dmzg.sendMessage(from, {text: 'Máximo 400 caracteres'}, {quoted: sasah})
var nomor = info.participant
tdptls = `[ Avaliação ]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\n: ${avalie}`
dmzg.sendMessage(nmrdn, {text: tdptls}, {quoted: sasah})
reply("Mensagem enviada ao meu dono, obrigado pela avaliação, iremos melhorar a cada dia.")
break

case 'bug':
const bug = body.slice(5)
if(args.length <= 1) return reply(`Exemplo: ${prefix}bug "ocorreu um erro no comando sticker"`)
if(args.length >= 800) return dmzg.sendMessage(from, {text: 'Máximo 800 caracteres'}, {quoted: sasah})
var nomor = info.participant
teks1 = `[ Problema ]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\nErro ou bug: ${bug}`
dmzg.sendMessage(nmrdn, {text: teks1}, {quoted: sasah})
reply("Mensagem enviada ao meu dono, se enviar muitas mensagens repetida por zoueiras, você sera banido de utilizar os comandos do bot.")
break

case 'sugestão':
case 'sugestao':
const sugestao = body.slice(10)
if(args.length <= 1) return reply(`Exemplo: ${prefix}sugestao "Opa, crie um comando tal, que ele funcione de tal maneira, isso será muito bom, não só pra mim, mas pra vários fazer isso.."`)
if(args.length >= 800) return dmzg.sendMessage(from, {text: 'Máximo 800 caracteres'}, {quoted: sasah})
sug = `[ Sugestões de Novos Comandos ]\n@${sender.split("@s.whatsapp.net")[0]}\n${sugestao}`
dmzg.sendMessage(nmrdn, {text: sug, mentions: sender}, {quoted: sasah})
reply("Mensagem enviada ao meu dono, obrigado pela sugestão, tentar ouvir o máximo possível de sugestões.")
break


case 'store': {
  const textoLoja = `❄️ *Takira Store* ❄️
╭─ *Por em Grupo* ─╮
┃ ❄️ Takira Bot (22h)
┃ ❄️ Silent MD (22h)
┃ ❄️ Unknouwn Bot (22h)
┃ ❄️ Apks Premium
┃ ❄️ Streaming Premium
> 22h = 22 horas online
╰───────────────╯
  *Planos de Aluguel:*
❄️ 1 Semana → 7$
❄️ 2 Semanas → 14$
❄️ 3 Semanas → 21$
❄️ 1 Mês → 28$

Garanta seus acesso vitalício e desconto!
📲 Envie o comprovante:
Número: *5531973650243*
📞 Fale com o criador: *553171917951*`;

  // Envia a mensagem com o texto da loja
  await dmzg.sendMessage(from, { text: textoLoja }, { quoted: info });

  // Botão para copiar a chave Pix
  const botoesPix = [
    {
      name: "cta_copy",
      buttonParamsJson: JSON.stringify({
        display_text: "Chave Pix",
        id: "copiapix",
        copy_code: "se você copiou essa mensagem é pq vc é um gay ou uma fedorenta" // ou coloque sua chave real aqui
      })
    }
  ];

  await dmzg.relayMessage(from, {
    interactiveMessage: {
      body: { text: "" },
      footer: { text: "" },
      nativeFlowMessage: {
        buttons: botoesPix,
        messageParamsJson: ""
      }
    }
  }, {});

  await reagir(from, '✅');
  break;
}

//COMANDOS DE MENUS//




case "meni":
await dmzg.relayMessage(from, {
  interactiveMessage: {
    header: proto.Message.InteractiveMessage.Header.create({
      ...(await prepareWAMessageMedia(
        { image: { url: ftmenu.logo } },
        { upload: dmzg.waUploadToServer }
      )),
      hasMediaAttachment: false,
      title: `╭═════════════
┆     *${NomeDoBot}*
┆⁠☞Quem chamou: @${sender.split("@")[0]}
┆⁠☞Dev: DarkkMzGty
┆☞Horas: ${time} ⁠ 
╰═════════════`,
    }),
    body: { text: "" },
    nativeFlowMessage: {
      buttons: [
        {
          name: "single_select",
          buttonParamsJson: JSON.stringify({
            title: "❄️LISTA-MENUS❄️",
            sections: [
              {
                title: "Grupo Takira",
                highlight_label: "ᴏɴ",
                rows: [
                  {
                    title: "❄️Grupo do Takira❄️",
                    description: "grupo de chat",
                    id: `${prefix}grupoofctakira`,
                    disabled: false
                  },
                  {
                    title: "❄️Criador❄️",
                    description: "Ver o dono do bot",
                    id: `${prefix}criador`,
                    disabled: false
                  }
                ]
              },
              {
                title: "Menus Gerais",
                highlight_label: "ᴏɴ",
                rows: [
                  {
                    title: "❄️Todos os Menus❄️",
                    description: "Vários Menus",
                    id: `${prefix}menub`,
                    disabled: false
                  },
                  {
                    title: "❄️Menu Dono❄️",
                    description: "Menu do dono",
                    id: `${prefix}menudono`,
                    disabled: false
                  }
                ]
              },
              {
                title: "Administrador",
                highlight_label: "ᴏɴ",
                rows: [
                  {
                    title: "❄️Menu Adm❄️",
                    description: "Comandos para ADMs",
                    id: `${prefix}menuadm`,
                    disabled: false
                  },
                  {
                    title: "❄️Menu Vips❄️",
                    description: "Comandos Premium",
                    id: `${prefix}menuprem`,
                    disabled: false
                  }
                ]
              },
              {
                title: "Diversão",
                highlight_label: "ᴏɴ",
                rows: [
                  {
                    title: "❄️Brincadeiras❄️",
                    description: "Zoera e jogos",
                    id: `${prefix}brincadeiras`,
                    disabled: false
                  },
                  {
                    title: "❄️Stop❄️",
                    description: "Jogo de STOP",
                    id: `${prefix}stophelp`,
                    disabled: false
                  }
                ]
              },
              {
                title: "Downloads",
                highlight_label: "ᴏɴ",
                rows: [
                  {
                    title: "❄️Baixar Vídeos❄️",
                    description: "YT, TikTok e outros",
                    id: `${prefix}menuDownload`,
                    disabled: false
                  },
                  {
                    title: "❄️Músicas❄️",
                    description: "Baixar músicas",
                    id: `${prefix}play`,
                    disabled: false
                  }
                ]
              },
              {
                title: "Figurinhas",
                highlight_label: "ᴏɴ",
                rows: [
                  {
                    title: "❄️Criar Figurinha❄️",
                    description: "Transformar imagem",
                    id: `${prefix}sticker`,
                    disabled: false
                  },
                  {
                    title: "❄️Pack Stickers❄️",
                    description: "Ver pacotes",
                    id: `${prefix}menusticker`,
                    disabled: false
                  }
                ]
              },
              {
                title: "Inteligência",
                highlight_label: "ᴏɴ",
                rows: [
                  {
                    title: "❄️Menu IA❄️",
                    description: "ChatGPT e Gemini",
                    id: `${prefix}menuia`,
                    disabled: false
                  },
                  {
                    title: "❄️IA com Voz❄️",
                    description: "Respostas faladas",
                    id: `${prefix}vozai`,
                    disabled: false
                  }
                ]
              },
              {
                title: "Utilidades",
                highlight_label: "ᴏɴ",
                rows: [
                  {
                    title: "❄️Converter Links❄️",
                    description: "Encurtar, baixar etc",
                    id: `${prefix}menuutil`,
                    disabled: false
                  },
                  {
                    title: "❄️QRCode/Texto❄️",
                    description: "Geração e leitura",
                    id: `${prefix}qrmenu`,
                    disabled: false
                  }
                ]
              },
              {
                title: "Relatórios",
                highlight_label: "ᴏɴ",
                rows: [
                  {
                    title: "❄️Status do Bot❄️",
                    description: "Uptime, RAM, etc.",
                    id: `${prefix}status`,
                    disabled: false
                  },
                  {
                    title: "❄️Sugestões❄️",
                    description: "Envie uma sugestão",
                    id: `${prefix}sugestao`,
                    disabled: false
                  }
                ]
              },
              {
                title: "Extras",
                highlight_label: "ᴏɴ",
                rows: [
                  {
                    title: "❄️Créditos❄️",
                    description: "Agradecimentos",
                    id: `${prefix}creditos`,
                    disabled: false
                  },
                  {
                    title: "❄️Atualizações❄️",
                    description: "Novidades do bot",
                    id: `${prefix}atualizacoes`,
                    disabled: false
                  }
                ]
              }
            ]
          })
        }
      ],
      messageParamsJson: "",
    },
  },
}, {});
break;

case 'menudono': {
    const hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
    await reagir(from, "⌛");
    const imgPath = './arquivos/imgs/menudono.jpg'; // Caminho da imagem local

    await dmzg.sendMessage(from, {
        image: fs.readFileSync(imgPath),
        caption: `*╭━━ ⪩ 𝑴𝑬𝑵𝑼 𝑫𝑶𝑵𝑶 ⪨ ━━╮
❄️ ${prefix}add_prefixo  
❄️ ${prefix}tirar_prefixo  
❄️ ${prefix}multiprefixo  
❄️ ${prefix}limitarcmd  
❄️ ${prefix}tempocmd  
❄️ ${prefix}block  
❄️ ${prefix}unblock  
❄️ ${prefix}x9  
❄️ ${prefix}x9visuunica  
❄️ ${prefix}odelete  
❄️ ${prefix}join  
❄️ ${prefix}prefixos  
❄️ ${prefix}infocmd  
❄️ ${prefix}infocmd_add  
❄️ ${prefix}infocmd_del  
❄️ ${prefix}addautorm  
❄️ ${prefix}delautorm  
❄️ ${prefix}listban  
❄️ ${prefix}listanegrag  
❄️ ${prefix}tirardalistag  
❄️ ${prefix}autorepo  
❄️ ${prefix}substituir  
❄️ ${prefix}status  
❄️ ${prefix}reply  
❄️ ${prefix}novoqr  
❄️ ${prefix}index-bot  
❄️ ${prefix}getcase  
❄️ ${prefix}bann  
❄️ ${prefix}bantempo  
❄️ ${prefix}band  
❄️ ${prefix}unkick  
❄️ ${prefix}ban  
❄️ ${prefix}promover  
❄️ ${prefix}rebaixar  
❄️ ${prefix}nuke
╰━━━━━━━━━━━━━━━━━━╯`,
        footer: NomeDoBot,
        buttons: [
            {
                buttonId: prefix + "menudono2",
                buttonText: { displayText: "❄️MenuDono 2❄️" },
                type: 1
            }
        ],
        headerType: 4,
        viewOnce: true
    }, { quoted: info });
}
break;


case 'menudono2': {
    if (!isBanchat && !isBotoff) {
        const texto = `
\`\`\`
╭━━ 𝑴𝑬𝑵𝑼 DONO 2 ━━╮
❄️ ${prefix}gitclone  
❄️ ${prefix}modoaluguel  
❄️ ${prefix}ptvmsg  
❄️ ${prefix}sair  
❄️ ${prefix}seradm  
❄️ ${prefix}sermembro  
❄️ ${prefix}correio  
❄️ ${prefix}nome-bot  
❄️ ${prefix}nick-dono  
❄️ ${prefix}numero-dono  
❄️ ${prefix}prefixo-bot  
❄️ ${prefix}fotomenu  
❄️ ${prefix}privphotobot  
❄️ ${prefix}privaddgroup  
❄️ ${prefix}envmsg  
❄️ ${prefix}bcgp  
❄️ ${prefix}bc  
❄️ ${prefix}dono1  
❄️ ${prefix}dono2  
❄️ ${prefix}dono3  
❄️ ${prefix}dono4  
❄️ ${prefix}dono5  
❄️ ${prefix}dono6  
❄️ ${prefix}donos  
❄️ ${prefix}ativo  
❄️ ${prefix}ausente  
❄️ ${prefix}addpremium  
❄️ ${prefix}delpremium  
❄️ ${prefix}premiumlist  
❄️ ${prefix}limpar  
❄️ ${prefix}blocklist  
❄️ ${prefix}blockcmdgp  
❄️ ${prefix}unblockcmdgp  
❄️ ${prefix}listblockcmdgp  
❄️ ${prefix}cases  
❄️ ${prefix}blockcmdg  
❄️ ${prefix}unblockcmdg  
❄️ ${prefix}listbcmdglobal  
╰━━━━━━━━━━━━━━━╯
\`\`\``;

        await reply(texto);
    }
    break;
}





case 'brincadeiras': {
    const hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
    await reagir(from, "⌛");
    const imgPath = './arquivos/imgs/menupremium.jpg'; // Caminho da imagem local

    await dmzg.sendMessage(from, {
        image: fs.readFileSync(imgPath),
        caption: `*╭━━ ⪩ RANKS-BRINKS ⪨ ━━╮
┃ ❄️${prefix}jogodavelh
┃ ❄️${prefix}rv
┃ ❄️${prefix}vab
┃ ❄️${prefix}eununca 
┃ ❄️${prefix}rankativo 
┃ ❄️${prefix}rankinativo 
┃ ❄️${prefix}checkativo 
┃ ❄️${prefix}rankgay
┃ ❄️${prefix}rankgado 
┃ ❄️${prefix}rankcorno
┃ ❄️${prefix}rankgostoso
┃ ❄️${prefix}rankgostosa 
┃ ❄️${prefix}rankpau
┃ ❄️${prefix}desafio
┃ ❄️${prefix}verdade 
┃ ❄️${prefix}revelacao
┃ ❄️${prefix}segredo
┃ ❄️${prefix}simounao
┃ ❄️${prefix}pergunta 
┃ ❄️${prefix}objetivo 
┃ ❄️${prefix}filmealeatorio 
┃ ❄️${prefix}mencionar
╰━━━━━━━━━━━━━━━━━━╯`,
        footer: NomeDoBot,
        buttons: [
            {
                buttonId: prefix + "brincadeiras2",
                buttonText: { displayText: "RANKS&BRINKS" },
                type: 1
            }
        ],
        headerType: 4,
        viewOnce: true
    }, { quoted: info });
}
break;


case 'brincadeiras2': {
await reagir(from, "⌛");
  const menuDono = `
╭━━━━━━━━━━━━━━━━━━━╮
      ❄️BRINCADEIRAS❄️
┃❄️${prefix}metadinha
┃❄️${prefix}chance 
┃❄️${prefix}namorar
┃❄️${prefix}cancelarpedido
┃❄️${prefix}terminar_namoro
┃❄️${prefix}dupla
┃❄️${prefix}gay
┃❄️${prefix}maisgostam
┃❄️${prefix}piorcoisa
┃❄️${prefix}maisodeiam
┃❄️${prefix}quem
┃❄️${prefix}cronometro
┃❄️${prefix}feio
┃❄️${prefix}corno
┃❄️${prefix}vesgo
┃❄️${prefix}bebado
┃❄️${prefix}gado
┃❄️${prefix}gostoso
┃❄️${prefix}gostosa
┃❄️${prefix}morte
┃❄️${prefix}matar
┃❄️${prefix}casal
┃❄️${prefix}abracar 
┃❄️${prefix}carinho 
┃❄️${prefix}comer
┃❄️${prefix}beijar
┃❄️${prefix}conselhob
┃❄️${prefix}cantadas
┃❄️${prefix}fatos
┃❄️${prefix}tapa
┃❄️${prefix}chute 
┃❄️${prefix}shipo
┃❄️${prefix}paranoia 
┃❄️${prefix}profissao
┃❄️${prefix}apelido 
┃❄️${prefix}pseudonimo 
┃❄️${prefix}tirarprint 
┃❄️${prefix}formarcasal2
┃   ❄️ Takira Bot Oficial❄️
╰━━━━━━━━━━━━━━━━━━╯
`;

  await dmzg.sendMessage(from, {
    image: fs.readFileSync('./arquivos/imgs/brincadeiras.jpg'),
    caption: menuDono.trim(),
    footer: NomeDoBot,
    viewOnce: false
  }, { quoted: info });

}
break;




case 'menuadm': {
    const hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
    await reagir(from, "⌛");
    const imgPath = './arquivos/imgs/menupremium.jpg'; // Caminho da imagem local

    await dmzg.sendMessage(from, {
        image: fs.readFileSync(imgPath),
        caption: `*╭━━ ⪩ 𝑴𝑬𝑵𝑼 𝑨𝑫𝑴 ⪨ ━━╮
┃ 🛠️ *Comandos de ADM:*
❄️ ${prefix}antidoc  
❄️ ${prefix}antiaudio  
❄️ ${prefix}antictt  
❄️ ${prefix}antiimg  
❄️ ${prefix}antivideo  
❄️ ${prefix}antiloc  
❄️ ${prefix}antifake  
❄️ ${prefix}anticatalogo  
❄️ ${prefix}antinotas  
❄️ ${prefix}fundosaiu  
❄️ ${prefix}fundobemvindo  
❄️ ${prefix}bemvindo  
❄️ ${prefix}bemvindo2  
❄️ ${prefix}legendabv  
❄️ ${prefix}legendabv2  
❄️ ${prefix}legendasaiu  
❄️ ${prefix}tiradms  
❄️ ${prefix}ephemeral  
❄️ ${prefix}changegroup  
❄️ ${prefix}rmphotogp  
❄️ ${prefix}so_adm  
❄️ ${prefix}ativar  
❄️ ${prefix}modobrincadeira  
❄️ ${prefix}modonsfw
╰━━━━━━━━━━━━━━━━━━╯
`,
        footer: NomeDoBot,
        buttons: [
            {
                buttonId: prefix + "menuadm2",
                buttonText: { displayText: "❄️MenuAdm 2❄️" },
                type: 1
            }
        ],
        headerType: 4,
        viewOnce: true
    }, { quoted: info });
}
break;



case 'menuadm2': {
    if (!isBanchat && !isBotoff) {
        const texto = `
\`\`\`
╭━━ 𝑴𝑬𝑵𝑼 𝑨𝑫𝑴 2 ━━╮
❄️ ${prefix}totag  
❄️ ${prefix}marcar  
❄️ ${prefix}marcar2  
❄️ ${prefix}marcarwa  
❄️ ${prefix}nomegp  
❄️ ${prefix}descgp  
❄️ ${prefix}setfotogp  
❄️ ${prefix}linkgp  
❄️ ${prefix}recrutar  
❄️ ${prefix}listatm  
❄️ ${prefix}rgtm  
❄️ ${prefix}tirardatm  
❄️ ${prefix}fazertm  
❄️ ${prefix}trancar  
❄️ ${prefix}reviver  
❄️ ${prefix}sairgp  
❄️ ${prefix}atividade  
❄️ ${prefix}inativos  
❄️ ${prefix}banghost  
❄️ ${prefix}reviverqr  
❄️ ${prefix}advertir  
❄️ ${prefix}rmadv  
❄️ ${prefix}admins  
❄️ ${prefix}mute  
❄️ ${prefix}desmute  
❄️ ${prefix}abrirgp  
❄️ ${prefix}fechargp  
❄️ ${prefix}antilinkgp  
❄️ ${prefix}antilink  
❄️ ${prefix}antiligar  
❄️ ${prefix}antipalavrao  
❄️ ${prefix}addpalavra  
❄️ ${prefix}delpalavra  
❄️ ${prefix}listpalavra  
❄️ ${prefix}antisticker  
╰━━━━━━━━━━━━━━━╯
\`\`\``;

        await reply(texto);
    }
    break;
}







case 'menunotprefix': {

await reagir(from, "⌛");
  const menuDono = `
╭━━𝑴𝑬𝑵𝑼 SEM PREFIXO━━╮
┃ ❄️fechargp
┃ ❄️abrirgp
┃ ❄️tocar
┃ ❄️ping
┃ ❄️menu
┃ ❄️d
┃ ❄️store
┃ ❄️ativar
┃ ❄️desativar
┃ ❄️bangp
┃ ❄️unbangp 
┃ ❄️ban
┃ ❄️aluguel
┃ ❄️criador
┃ ❄️regras
┃ ❄️linkgp
╰━━━━━━━━━━━━━━━━━━╯
`;

  await dmzg.sendMessage(from, {
    image: fs.readFileSync('./arquivos/imgs/menumix.jpg'),
    caption: menuDono.trim(),
    footer: NomeDoBot,
    viewOnce: false
  }, { quoted: info });

}
break;



case 'menu': {
  if (!isGroup) return reply("aqui");
await reagir(from, "⌛");
  const menuDono = `
╭━━━━━ MENUS ━━━━━╮
|❄️${prefix}Menumidia 
|❄️${prefix}Download 
|❄️${prefix}Menuinfo
|❄️${prefix}cmdmembros
|❄️${prefix}menuadm
|❄️${prefix}menuadm2
|❄️${prefix}brincadeiras
|❄️${prefix}brincadeiras2
|❄️${prefix}menudono
|❄️${prefix}menudono2
|❄️${prefix}menunotprefix
|❄️${prefix}menu
╰━━━━━━━━━━━━━━━━╯`
;

  await dmzg.sendMessage(from, {
    image: fs.readFileSync('./arquivos/imgs/menumix.jpg'),
    caption: menuDono.trim(),
    footer: NomeDoBot,
    viewOnce: false
  }, { quoted: info });

}
break;


case 'cmdmembros': {
  if (!isGroup) return reply("aqui");
await reagir(from, "⌛");
  const menuDono = `
╭━━━━ CMD MEMBROS ━━━━━╮
┃❄️${prefix}gpt4
┃❄️${prefix}gemini
┃❄️${prefix}gerarlink
┃❄️${prefix}calendario
┃❄️${prefix}gerarcpf
┃❄️${prefix}gerarvoz
┃❄️${prefix}ddd
┃❄️${prefix}igstalk
┃❄️${prefix}perfil
┃❄️${prefix}horoscopo
┃❄️${prefix}encurtalink
┃❄️${prefix}checkme
┃❄️${prefix}calculadora
┃❄️${prefix}pin (Pinterest)
┃❄️${prefix}contardias
┃❄️${prefix}wikipedia
┃❄️${prefix}fakechat
┃❄️${prefix}livro
┃❄️${prefix}clima
┃❄️${prefix}tagme
╰━━━━━━━━━━━━━━━━╯`
;

  await dmzg.sendMessage(from, {
    image: fs.readFileSync('./arquivos/imgs/menumix.jpg'),
    caption: menuDono.trim(),
    footer: NomeDoBot,
    viewOnce: false
  }, { quoted: info });

}
break;




case 'menuinfo': {
  if (!isGroup) return reply("aqui");
await reagir(from, "⌛");
  const menuDono = `
╭━━━ MENU INFO ━━━━╮
┃❄️${prefix}gpt4
┃❄️${prefix}configurar-bot
┃❄️${prefix}infobv
┃❄️${prefix}ping
┃❄️${prefix}infodono
┃❄️${prefix}criador
┃❄️${prefix}grupoinfo
┃❄️${prefix}avaliar
┃❄️${prefix}bug
┃❄️${prefix}sugestão
┃❄️${prefix}store
┃❄️${prefix}infotakimatch
╰━━━━━━━━━━━━━━━━╯`
;

  await dmzg.sendMessage(from, {
    image: fs.readFileSync('./arquivos/imgs/menumix.jpg'),
    caption: menuDono.trim(),
    footer: NomeDoBot,
    viewOnce: false
  }, { quoted: info });

}
break;








case 'download': {

await reagir(from, "⌛");
  const menuDono = `
╭━━ MENU DOWN ━━╮
┃❄️${prefix}play
┃❄️${prefix}tik
┃❄️${prefix}p
┃❄️${prefix}video
┃❄️${prefix}ttksearch
┃❄️${prefix}instagram
╰━━━━━━━━━━━━━━━━━━╯
`;

  await dmzg.sendMessage(from, {
    image: fs.readFileSync('./arquivos/imgs/menumidia.jpg'),
    caption: menuDono.trim(),
    footer: NomeDoBot,
    viewOnce: false
  }, { quoted: info });

}
break;


case 'menumidia': {

await reagir(from, "⌛");
  const menuDono = `
╭━━ CMDS DE MIDIA ━━╮
┃ ❄️${prefix}narrador
┃ ❄️${prefix}qrcode
┃ ❄️${prefix}toimg
┃ ❄️${prefix}reversevid
┃ ❄️${prefix}videolento
┃ ❄️${prefix}videorapido
┃ ❄️${prefix}vozgrossa
┃ ❄️${prefix}menino
┃ ❄️${prefix}paramp3
┃ ❄️${prefix}bass2
┃ ❄️${prefix}estourar
┃ ❄️${prefix}fast
┃ ❄️${prefix}afinar
┃ ❄️${prefix}esquilo
┃ ❄️${prefix}audiolento
╰━━━━━━━━━━━━━━━━━━╯
`;

  await dmzg.sendMessage(from, {
    image: fs.readFileSync('./arquivos/imgs/menumidia.jpg'),
    caption: menuDono.trim(),
    footer: NomeDoBot,
    viewOnce: false
  }, { quoted: info });

}
break;





case 'help':
case 'menup':
case 'comandos':
await sleep(1000)
await dmzg.relayMessage(from, {
  interactiveMessage: {
    header: {
      hasMediaAttachment: false,
      title: `╭┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅╮
│╭┬┅┅┅┅┅┅┅┅┅┅┅┅┅┅𖣴
│┊├𖧟 𝙽𝙾𝙼𝙴: ${NomeDoBot}
│┊├𖧟 𝚄𝚂𝙴𝚁: ${sender.split("@")[0]}
│┊├𖧟 𝙿𝚁𝙴𝙵𝙸𝚇𝙾: 「${prefix}」
│┊├𖧟 𝙷𝙾𝚁𝙰𝚁𝙸𝙾: ${hora}
│╰┴┅┅┅┅┅┅┅┅┅┅┅┅┅┅𖣴
╰┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅╯`
    },
    body: { text: "" },
    nativeFlowMessage: {
      buttons: [
        {
          name: "single_select",
          buttonParamsJson: JSON.stringify({
            title: "OPCOES",
            sections: [
              {
                title: `${NomeDoBot}`,
                highlight_label: "💔",
                rows: [
                  {
                    title: "🌐 Menu Completo",
                    description: "Exibe todos os comandos disponíveis.",
                    id: `${prefix}menuc`,
                    disabled: false
                  }
                ]
              },
              {
                title: `${NomeDoBot}`,
                highlight_label: "💔",
                rows: [
                  {
                    title: "🔐 Menu do dono",
                    description: "Comandos restritos ao dono.",
                    id: `${prefix}menudono`,
                    disabled: false
                  }
                ]
              },
              {
                title: `${NomeDoBot}`,
                highlight_label: "💔",
                rows: [
                  {
                    title: "⚙️ Menu Admins",
                    description: "Gerenciamento de grupo e moderação.",
                    id: `${prefix}menuadm`,
                    disabled: false
                  }
                ]
              },
              {
                title: `${NomeDoBot}`,
                highlight_label: "💔",
                rows: [
                  {
                    title: "✨ Menu Premium",
                    description: "Recursos exclusivos para usuários VIP.",
                    id: `${prefix}menupremium`,
                    disabled: false
                  }
                ]
              },
              {
                title: `${NomeDoBot}`,
                highlight_label: "💔",
                rows: [
                  {
                    title: "🏮️ Menu Alteradores",
                    description: "Modificar áudios e vídeos.",
                    id: `${prefix}menuapps`,
                    disabled: false
                  }
                ]
              },
              {
                title: `${NomeDoBot}`,
                highlight_label: "💔",
                rows: [
                  {
                    title: "🎨 Menu Efeitos",
                    description: "Editar imagens com efeitos.",
                    id: `${prefix}menulogos`,
                    disabled: false
                  }
                ]
              },
              {
                title: `${NomeDoBot}`,
                highlight_label: "💔",
                rows: [
                  {
                    title: "🕹 Menu Brincadeira",
                    description: "Comandos de zoeira e passatempo.",
                    id: `${prefix}brincadeiras`,
                    disabled: false
                  }
                ]
              }
            ]
          }),
          messageParamsJson: ""
        }
      ]
    }
  }
}, { quoted: info });
break;










case 'status':
if (!isGroup) return reply(Res_SoGrupo)
if (!isGroupAdmins && !SoDono && !info.key.fromMe) return reply(Res_SoAdm)

await dmzg.relayMessage(from, {
  interactiveMessage: {
    header: {
      hasMediaAttachment: false,
      title: '📊 STATUS DOS SISTEMAS'
    },
    body: { text: 'Clique em um item abaixo para ativar ou desativar o sistema correspondente:' },
    nativeFlowMessage: {
      buttons: [
        {
          name: "single_select",
          buttonParamsJson: JSON.stringify({
            title: "SISTEMAS ATIVOS",
            sections: [
              {
                title: "⛔️ SISTEMAS ANTIS",
                highlight_label: "🛡",
                rows: [
                  {
                    title: `Antilink Hard: ${isAntiLinkHard ? '✅' : '❌'}`,
                    description: "Ativar/desativar antilink",
                    id: `${prefix}antilink ${isAntiLinkHard ? 0 : 1}`
                  },
                  {
                    title: `Anti Notas: ${isAntiNotas ? '✅' : '❌'}`,
                    description: "Bloqueia notas de voz",
                    id: `${prefix}antinotas ${isAntiNotas ? 0 : 1}`
                  },
                  {
                    title: `Anti Fake: ${isAntifake ? '✅' : '❌'}`,
                    description: "Evita usuários com número fake",
                    id: `${prefix}antifake ${isAntifake ? 0 : 1}`
                  },
                  {
                    title: `Anti Catálogo: ${isAnticatalogo ? '✅' : '❌'}`,
                    description: "Bloqueia envio de catálogo",
                    id: `${prefix}anticatalogo ${isAnticatalogo ? 0 : 1}`
                  },
                  {
                    title: `Anti Vídeo: ${isAntiVid ? '✅' : '❌'}`,
                    description: "Bloqueia envio de vídeo",
                    id: `${prefix}antivideo ${isAntiVid ? 0 : 1}`
                  },
                  {
                    title: `Anti Imagem: ${isAntiImg ? '✅' : '❌'}`,
                    description: "Bloqueia envio de imagem",
                    id: `${prefix}antiimg ${isAntiImg ? 0 : 1}`
                  },
                  {
                    title: `Anti Áudio: ${isAntiAudio ? '✅' : '❌'}`,
                    description: "Bloqueia envio de áudio",
                    id: `${prefix}antiaudio ${isAntiAudio ? 0 : 1}`
                  },
                  {
                    title: `Anti Documento: ${Antidoc ? '✅' : '❌'}`,
                    description: "Bloqueia documentos",
                    id: `${prefix}antidoc ${Antidoc ? 0 : 1}`
                  },
                  {
                    title: `Anti Contato: ${isAntiCtt ? '✅' : '❌'}`,
                    description: "Bloqueia contatos",
                    id: `${prefix}antictt ${isAntiCtt ? 0 : 1}`
                  },
                  {
                    title: `Anti Sticker: ${isAntiSticker ? '✅' : '❌'}`,
                    description: "Bloqueia figurinhas",
                    id: `${prefix}antisticker ${isAntiSticker ? 0 : 1}`
                  }
                ]
              },
              {
                title: "💡 OUTROS",
                highlight_label: "⚙️",
                rows: [
                  {
                    title: `X9 ADM: ${isx9 ? '✅' : '❌'}`,
                    description: "Detecta quem vira ADM",
                    id: `${prefix}x9 ${isx9 ? 0 : 1}`
                  },
                  {
                    title: `Visualização única: ${isX9VisuUnica ? '✅' : '❌'}`,
                    description: "Revela mídia de visualização única",
                    id: `${prefix}x9visuunica ${isX9VisuUnica ? 0 : 1}`
                  },
                  {
                    title: `Modo Brincadeira: ${isModobn ? '✅' : '❌'}`,
                    description: "Ativa comandos de zoeira",
                    id: `${prefix}modobrincadeira ${isModobn ? 0 : 1}`
                  },
                  {
                    title: `Auto Sticker: ${isAutofigu ? '✅' : '❌'}`,
                    description: "Transforma mídia em figurinha",
                    id: `${prefix}autofigu ${isAutofigu ? 0 : 1}`
                  },
                  {
                    title: `Anti Palavrão: ${isPalavrao ? '✅' : '❌'}`,
                    description: "Detecta palavrões",
                    id: `${prefix}antipalavrao ${isPalavrao ? 0 : 1}`
                  }
                ]
              }
            ]
          }),
          messageParamsJson: ""
        }
      ]
    }
  }
}, { quoted: info });
break;










/////////COMANDOS DE DONWLOADS AQUI///////////




case 'tik':
try {
if (!q.includes('vm.tiktok.com')) {
reply('Forneça o url do vídeo do TikTok.')
return
};

await reagir(from, "⌛");

const nodz_tiktok = await axios.get(`https://nodz-apis.com.br/api/downloads/tiktok/dl`, {
 params: {
 url: q, 
 apiKey: 'SUAKEY'
 }
})

const nodz_tik_resultado = await nodz_tiktok.data.resultado;
    
if (command == 'tik' || command == 'tiktokvideo') {

const videoUrl = nodz_tik_resultado.play
await dmzg.sendMessage(from, { 
 video: { 
  url: videoUrl }, 
   mimetype: 'video/mp4' }, { 
    quoted: info
})

} else if (command == 'tikaudio') {
      
const audioUrl = nodz_tik_resultado.music;
return dmzg.sendMessage(from, { 
 audio: { 
  url: audioUrl }, 
   mimetype: 'audio/mpeg' }, { 
    quoted: info 
})

} else if (command == 'tik') {

const videoUrl = nodz_tik_resultado.wmplay
return dmzg.sendMessage(from, { 
 video: { 
  url: videoUrl }, 
   mimetype: 'video/mp4' }, {
    quoted: info
}) 

await delay(3000)
   
const audioUrl = nodz_tik_resultado.music;
return dmzg.sendMessage(from, { 
 audio: { 
  url: audioUrl }, 
   mimetype: 'audio/mpeg' }, { 
    quoted: info 
})

};
} catch (error) {
 console.error(error);
  return reply('Erro ao baixar o conteúdo. Tente novamente mais tarde.');
    await reagir(from, "❌");
}
break




case 'automidia':
  if (!args[0]) return reply(`🎬 Automídia está atualmente: ${automidia ? '✅ *ATIVADA*' : '❌ *DESATIVADA*'}\n\nUse: ${prefix}automidia on / off`);
  
  if (args[0].toLowerCase() === 'on') {
    automidia = true;
    reply('✅ Automídia foi *ativada*. Agora links de TikTok e YouTube serão baixados automaticamente.');
  } else if (args[0].toLowerCase() === 'off') {
    automidia = false;
    reply('❌ Automídia foi *desativada*. Agora só funcionará se usar comandos como ;tik ou ;play');
  } else {
    reply(`⚠️ Use apenas: ${prefix}automidia on / off`);
  }
  break;


case 'play': {
if (!q) return reply(`🔹 Uso correto: ${prefix}nome`);
reagir(from, "✅️")
const result = await yts(q);
const video = result.videos[0];
dmzg.sendMessage(from, {image: {url: `https://zero-two-apis.com.br/api/musicard?nome=${video.title}&canal=${video.author.name}&foto=${video.thumbnail}&duracao=${video.timestamp}&apikey=${KEY_ZERO}`}, caption: `→ *TAKIRA DOWN* →\n❤️ ${video.title}\n⌚ Duraçao » ${video.timestamp}\n`, footer: `${NomeDoBot}`,
buttons: [
{
buttonId: `${prefix}ym3 ${video.url}`,
buttonText: { displayText: 'Audio' },
type: 1
},
{
buttonId: `${prefix}ym4 ${video.url}`,
buttonText: { displayText: 'Video' },
type: 1
},
{
buttonId: `${prefix}ymoc ${video.url}`,
buttonText: { displayText: 'Arquivo mp3' },
type: 1 }], headerType: 1, viewOnce: true, contextInfo: {
isForwarded: true,
forwardingScore: 1,
forwardedNewsletterMessageInfo: {
serverMessageId: ''
}
}
}, {quoted: info});
}
break

case 'ym3':
if(!q) return reply(`🔹 Uso correto: ${prefix}ymp3 link`)
reagir(from, "✅️")
dmzg.sendMessage(from, {audio: {url: `https://nodz-apis.com.br/api/downloads/youtube/audio?url=${q}&apiKey=${NODZ_KEY}`}, mimetype: "audio/mpeg", ptt: true}, {quoted: info});
break

case 'ym4':
if(!q) return reply(`🔹 Uso correto: ${prefix}ym4 link`)
reagir(from, "✅️")
dmzg.sendMessage(from, {video: {url: `https://nodz-apis.com.br/api/downloads/youtube/video?url=${q}&apiKey=${NODZ_KEY}`}, mimetype: "video/mp4"}, {quoted: info});
break

case 'ymoc':
if(!q) return reply(`🔹 Uso correto: ${prefix}ymoc link`)
reagir(from, "✅️")
dmzg.sendMessage(from, {document: {url: `https://nodz-apis.com.br/api/downloads/youtube/audio?url=${q}&apiKey=${NODZ_KEY}`}, mimetype: "audio/mpeg", fileName: 'audio.mp3'}, {quoted: info});
break

case 'play_video':
case 'playvid':
if(!q) return reply(`🔹 Uso correto: ${prefix} nome`)
reagir(from, "🕜")
neon = await fetchJson(`https://nodz-apis.com.br/api/pesquisas/youtube?query=${q}&apiKey=${NODZ_KEY}`)
dmzg.sendMessage(from, {image: {url: `${neon.resultado.imagem}`}, caption: `▶️ *YOUTUBE - VIDEO*

📽 *Título:* ${neon.resultado.titulo}
⏳ *Duração:* ${neon.resultado.duracao}
📺 *Canal:* ${neon.resultado.canal}
👁️ *Visualizações:* ${neon.resultado.views}

> ⏬ Enviando video, aguarde..`, contextInfo: {
isForwarded: true,
forwardingScore: 1,
forwardedNewsletterMessageInfo: {
serverMessageId: ''
}
}
}, {quoted: info});
dmzg.sendMessage(from, {video: {url: `https://nodz-apis.com.br/api/downloads/youtube/video?url=${neon.resultado.url}&apiKey=${NODZ_KEY}`}, mimetype: "video/mp4"}, {quoted: info});
break



case 'tikaudio':
case 'tiktokaudio': {
try {
await sleep(1000)
if(!q.includes("tiktok")) return reply(`${prefix}link do Tiktok`);
let api = await fetchJson(`https://nodz-apis.com.br/api/downloads/tiktok/dl?url=${q}&apiKey=${NODZ_KEY}`)
dmzg.sendMessage(from, {audio: {url: `${api.resultado.music}`}, quoted: info})
} catch (e) {
reagir(from, "❌️")
}
}
break;








case 'audio':
if(!q) return reply(`🔹 Uso correto: ${prefix}ytmp3 link`)
reagir(from, "✅️")
dmzg.sendMessage(from, {audio: {url: `https://nodz-apis.com.br/api/downloads/youtube/audio?url=${q}&apiKey=${NODZ_KEY}`}, mimetype: "audio/mpeg", ptt: true}, {quoted: info});
break















case 'video':
if(!q) return reply(`🔹 Uso correto: ${prefix}ytmp4 link`)
reagir(from, "✅️")
dmzg.sendMessage(from, {video: {url: `https://nodz-apis.com.br/api/downloads/youtube/video?url=${q}&apiKey=${NODZ_KEY}`}, mimetype: "video/mp4"}, {quoted: info});
break











case 'filme': {
    const filePath = './arquivos/json/filmes.json';
    if (!fs.existsSync(filePath)) return replyPeR('❗ O arquivo de filmes não foi encontrado!');
    
    const filmes = JSON.parse(fs.readFileSync(filePath));
    if (filmes.length === 0) return replyPeR('❗ Nenhum filme disponível no momento.');

    const filme = filmes[Math.floor(Math.random() * filmes.length)];

    const mensagem = `
🎬 *Filme Recomendado!*

📽️ Nome: *${filme.nome}*
⏰ Duração: *${filme.duracao}*
🎯 Tema: *${filme.tema}*
⭐ Avaliação: *${filme.avaliacao}*
📺 Onde assistir: *${filme.onde_assistir}*
`.trim();

    await dmzg.sendMessage(from, {
        text: mensagem,
        footer: NomeDoBot,
        buttons: [
            {
                buttonId: `${prefix}filme`,
                buttonText: { displayText: "🎲 Outro filme" },
                type: 1
            },
            {
  buttonId: `${prefix}gpt4 resumo do filme ${filme.nome}`,
  buttonText: { displayText: "🧠 Resumo do filme" },
  type: 1
}
        ],
        headerType: 1,
        viewOnce: true
    });
}
break;


case 'instagram':
try {
if (!q) return reply("Coloque o url do Instagram!");
await reply("Realizando o download do vídeo...", {reagir: "✅"});
let response = await axios.get(`https://nodz-apis.com.br/api/downloads/instagram/dl?url=${encodeURIComponent(q)}&apiKey=SUAKEY`);
let api = await response.data.resultado[0];

await dmzg.sendMessage(from, {video: 
{url: api.url }, mimetype: "video/mp4"}, {quoted: info });
} catch (error) {
console.error(error);
reply("Não foi possível realizar o download do vídeo!");
}
break








case 'ttksearch':
if (!q) {
reply('Coloque um título para a pesquisa.')
return
};


try {
const nodz = await axios.get('https://nodz-apis.com.br/api/pesquisas/tiktok', {
params: {
query: q, 
apiKey: 'SUAKEY'
}
}) 

if (!nodz.data || nodz.data.resultado.length === 0) {
reply('Não encontrei nenhum resultado.')
return
};

const i = nodz.data.resultado;
const nulo = 'Sem Informações';

let desc = ` *Pesquisa:* ${q || nulo}\n`;

await dmzg.sendMessage(from, {video: {url: i.videos}, caption: desc, mimetype: 'video/mp4'}, {quoted: info})

await reagir(from, '✅')
} catch (e) {
console.error(e)
reply('Não conseguir realizar o download da pesquisa.')
return
}
break








///////////////////COMANDOS DE MEMBROS///////////////////////////////



case 'gpt4': case 'gpt-4':
if (!q) {
reply("Você esqueceu de perguntar ao lado do comando.")
return
};

await reagir(from, '⏳'); // ou '⌛', '🧠', etc.
try {
const nodz = await axios.get(`https://nodz-apis.com.br/api/inteligencias/gpt4`, {
params: {
query: q,
apiKey: 'SUAKEY' 
}
})

if (!nodz.data || nodz.data.resultado.length === 0) {
reply('Não encontrei nenhum resultado.')
return
};

await dmzg.sendMessage(from, {text: nodz.data.resultado}, {quoted: info })

} catch (e) {
await reagir(from, '❌')
console.error(e)
reply('Não conseguir encontrar uma resposta.')
return
}
break


case 'gemini':
if (!q) {
reply("Você esqueceu de perguntar ao lado do comando.")
return
};


try {
const nodz = await axios.get(`https://nodz-apis.com.br/api/inteligencias/gemini/pro`, {
params: {
query: q,
apiKey: 'SUAKEY' 
}
})

if (!nodz.data || nodz.data.resultado.length === 0) {
reply('Não encontrei nenhum resultado.')
return
};

await dmzg.sendMessage(from, {text: nodz.data.resultado}, {quoted: info })

} catch (e) {
await reagir(from, '❌')
console.error(e)
reply('Não conseguir encontrar uma resposta.')
return
}
break


case 'gerarlink': case 'midialink':
YSG = isQuotedVideo || isQuotedImage || isQuotedAudio || isImage || isVideo
if(!YSG) {
reply(`Você precisa marcar uma imagem, vídeo ou áudio de até 200MB`)
return
}
    await reagir(from, '🔗');
if(isMedia && info.message.imageMessage.fileLenght < 209715200 || isQuotedImage && info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage.fileLength < 209715200) { 
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
await sleep(1000)
reagir(from, "📂")
res = await upload(owgi)
reply(res) 
} else if(isMedia && info.message.videoMessage.fileLength < 209715200 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 209715200) { 
boij = isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.videoMessage : info.message.videoMessage
owgi = await getFileBuffer(boij, 'video')
await sleep(1000)
reagir(from, "❄️")
res = await upload(owgi)
reply(res)
} else if(isQuotedAudio && info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage.fileLength < 209715200) {
boij = isQuotedAudio ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.audioMessage : info.message.audioMessage
owgi = await getFileBuffer(boij, 'audio')
await sleep(1000)
reagir(from, "❄️")
res = await upload(owgi)
reply(res)
} else {
reagir(from, "❄️")
reply('o gerador de link só funciona se o arquivo estiver abaixo de 200MB..')
}
break


case 'calendario':
case 'dados':
setTimeout(() => {reagir(from, "❄️")}, 300)
var getGroups = await dmzg.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
ingfoo.sort((a, b) => (a[0] < b.length))
hora16 = moment.tz('America/Sao_Paulo').format('HH:MM:SS')
date16 = moment.tz('America/Sao_Paulo').format('DD/MM/YYYY')
day = `${tempo}, ${pushname}!\n• Grupo: *${isGroup ? groupName : "Privado"}*\n• Data & Hora: *${date16} ${hora16}*\n• Nome do Bot: *${NomeDoBot}*\n• Proprietário: *${NickDono}*\n• Estou operando atualmente em *${ingfoo.length}* grupos.`
if(JSON.stringify(aluguel).includes(from)) {
AB = aluguel.map(i => i.id).indexOf(from)
numsei = aluguel[AB].tempo / aluguel[AB].totalRent * 100
if(numsei < 10) matheuzinho = `${numsei.toFixed(0)}%〘▒▒▒▒▒▒▒▒▒▒〙`
if(numsei >= 10) matheuzinho = `${numsei.toFixed(0)}%〘█▒▒▒▒▒▒▒▒▒〙`
if(numsei >= 20) matheuzinho = `${numsei.toFixed(0)}%〘██▒▒▒▒▒▒▒▒〙`
if(numsei >= 30) matheuzinho = `${numsei.toFixed(0)}%〘███▒▒▒▒▒▒▒〙`
if(numsei >= 40) matheuzinho = `${numsei.toFixed(0)}%〘████▒▒▒▒▒▒〙`
if(numsei >= 50) matheuzinho = `${numsei.toFixed(0)}%〘█████▒▒▒▒▒〙`
if(numsei >= 60) matheuzinho = `${numsei.toFixed(0)}%〘██████▒▒▒▒〙`
if(numsei >= 70) matheuzinho = `${numsei.toFixed(0)}%〘███████▒▒▒〙`
if(numsei >= 80) matheuzinho = `${numsei.toFixed(0)}%〘████████▒▒〙`
if(numsei >= 90) matheuzinho = `${numsei.toFixed(0)}%〘█████████▒〙`
if(numsei >= 95) matheuzinho = `${numsei.toFixed(0)}%〘██████████〙`
hmm = aluguel[AB].tempo
if(aluguel[AB].cliente == sender || SoDono) {
  matheusSabe = `• `
  if(aluguel[AB].cortesia == false) {
matheusSabe += `${hmm} dia${hmm > 1 ? 's' : ''} restantes`} else {matheusSabe += hmm > 1 ? `${hmm} horas` : `Alguns minutos`}
matheusSabe += ` até o fim do contrato.`
} else {matheusSabe = ``}
day += `\n——\n🔋 *Bateria restante para uso:*\n${matheuzinho} ${matheusSabe}`}
reply(`${day}`)
break

case 'gerarcpf':
cp1 = `${Math.floor(Math.random() * 300) + 600}`
cp2 = `${Math.floor(Math.random() * 300) + 600}`
cp3 = `${Math.floor(Math.random() * 300) + 600}`
cp4 = `${Math.floor(Math.random() * 30) + 60}`
cpf = `${cp1}.${cp2}.${cp3}-${cp4}`
dmzg.sendMessage(from, {text: `CPF gerado com sucesso : ${cpf}`}, {quoted: sasah})
break

case 'ddd':
if(args.length < 1) return reply(`Use ${prefix + command} 81`)
ddd = body.slice(5)
ddds = await axios.get(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
dddlist = `Lista de Cidades de ${ddds.data.state} com este DDD ${q}>\n\n`
for (let i = 0; i < ddds.data.cities.length; i++) { dddlist += `${i + 1} ⪧ *${ddds.data.cities[i]}*\n` }
dmzg.sendMessage(from, {text: dddlist}, {quoted: sasah})	
break

case 'gerarvoz': 
try {
const vozes = args.join(' ')

if (!vozes.includes("|")) {
const modelosApi = await axios.get('https://nodz-apis.com.br/api/outras/modelosvozes', {params: {apiKey: 'SUAKEY'}});
const modelos = modelosApi.data.resultado.map(m => m.model_id).join(', ');
        
await reply(`Exemplo: ${prefix + command} Ola tudo bem|mickey_mouse\n\nModelos disponíveis: ${modelos}`)
return
};

const [texto, modelo] = vozes.split('|').map(item => item.trim());

await reagir(from, '⏳')
const modelosApi = await axios.get('https://nodz-apis.com.br/api/outras/modelosvozes', {params: {apiKey: 'SUAKEY'}})
const modelosDisponiveis = modelosApi.data.resultado.map(m => m.model_id)
    
if (!modelosDisponiveis.includes(modelo)) {
await reply(`Modelo de voz inválido. Use ${prefix}modelosvozes para ver a lista.`)
return
};

const api = await axios.get('https://nodz-apis.com.br/api/outras/gerarvoz', { params: { query: texto, voz: modelo, apiKey: 'SUAKEY'}})
        
await dmzg.sendMessage(from, {audio: {url: api.data.resultado.voz}, ptt: true, mimetype: 'audio/mpeg'}, {quoted: info})

await reagir(from, '✅')
} catch (e) {
await reagir(from, '❌')
console.error(e)
await reply('Ocorreu um erro ao gerar a voz. Tente novamente mais tarde.')
return
}
break;



case 'igstalk':
  if (!q) {
    await reagir(from, '❗');
    reply('Coloque o nome do usuário do que deseja stalkear.');
    return;
  }

  await reagir(from, '⏳');

  try {
    const stalk = await axios.get(`https://nodz-apis.com.br/api/outras/stalk/instagram`, {
      params: {
        user: q,
        apiKey: 'SUAKEY'
      }
    });

    const i = stalk.data.resultado;

    let desc = `*♂️ USUÁRIO DO INSTAGRAM INFO ♀️*\n\n`;
    desc += `🫅🏻 *Usuario:* ${i.usuario || 'Não encontrado'}\n`;
    desc += `💫 *Nome:* ${i.nomeCompleto || 'Não encontrado'}\n`;
    desc += `💬 *Biografia:* ${i.biografia || 'Não encontrada'}\n`;
    desc += `👥 *Seguidores:* ${i.seguidores || '0'}\n`;
    desc += `❤️‍🩹 *Seguindo:* ${i.seguindo || '0'}\n`;
    desc += `🎨 *Postagens:* ${i.postagens || '0'}\n`;
    desc += `✅ *Verificado:* ${i.verificado ? 'Sim' : 'Não'}\n`;
    desc += `🔓 *Conta:* ${i.privado ? 'Privada' : 'Pública'}`;

    const avatar = await axios.get(`https://nodz-apis.com.br/api/canvas/instagram`, {
      params: {
        user: i.nomeCompleto,
        seguidores: i.seguidores,
        seguindo: i.seguindo,
        posts: i.postagens,
        avatar: i.fotoPerfilHD,
        apiKey: 'SUAKEY'
      },
      responseType: 'arraybuffer'
    });

    await dmzg.sendMessage(from, { image: avatar.data, caption: desc }, { quoted: info });
    await reagir(from, '✅');

  } catch (e) {
    await reagir(from, '❌');
    console.error(e);
    reply('Não consegui stalkear o usuário.');
  }
  break;




case 'perfil':
try {
ppimg = await dmzg.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://telegra.ph/file/24fa902ead26340f3df2c.png'
}
try {
var status = (await dmzg.fetchStatus(sender)).status
} catch {
var status = "Privado ou inexistente."
}
try {
var conselho = palavrasc[Math.floor(Math.random() * palavrasc.length)]
const nivelgado = ['1','2','3','4','5','6','7','8','9']
const nivelgado2 = ['1','2','3','4','5','6','7','8','9'] 
const nivelgador = nivelgado[Math.floor(Math.random() * (nivelgado.length))]
const nivelgado2r = nivelgado2[Math.floor(Math.random() * (nivelgado2.length))] 
const puta = ['1','2','3','4','5','6','7','8','9']
const puta2 = ['1','2','3','4','5','6','7','8','9'] 
const putar = puta[Math.floor(Math.random() * (puta.length))]
const putar2 = puta2[Math.floor(Math.random() * (puta2.length))] 
const gostosura = ['1','2','3','4','5','6','7','8','9']
const gostosura2 = ['1','2','3','4','5','6','7','8','9'] 
const gostosurar = gostosura[Math.floor(Math.random() * (gostosura.length))]
const gostosurar2 = gostosura2[Math.floor(Math.random() * (gostosura2.length))] 
gadop = `${Math.floor(Math.random() * 100)}`
const programa = Math.ceil(Math.random() * 10000)
dmzg.sendMessage(from, {image: {url: ppimg}, caption: mess.profileInformation(pushname, sender, info, putar, putar2, gostosurar, gostosurar2, nivelgador, nivelgado2r, programa, conselho, status), mentions: [sender]}, {quoted: sasah})
} catch (e) {
console.log(e)
}
break


case 'horoscopo':
try {
if (!q) return reply("Coloque o seu signo");
let { key } = await dmzg.sendMessage(from, {text: `Buscando a previsão para o seu signo hoje...`}, {quoted: info});

let response = await axios.get(`https://nodz-apis.com.br/api/outras/horoscopo?query=${encodeURIComponent(q)}&apiKey=SUAKEY`);
let sign = response.data.resultado; 
let desc = `
☪️ sɪɢɴᴏ: ${sign.signo || "não encontrado"}
🗓 ᴅɪᴀ: ${sign.dia || "não encontrado"}
🧿 ᴘʀᴇᴠɪsᴀ̃ᴏ: ${sign.previsao || "não encontrado"}`;

await dmzg.sendMessage(from, {text: desc, edit: key});
} catch (error) {
console.error(error);
reply("Deu um pequeno erro ao buscar o signo!");
}
break








case 'encurtalink': case 'tinyurl':
if(args.length < 1) return reply(`❌️ *Forma incorreta, use está como exemplo:* ${prefix + command} https://instagram.com/dmzg_bot.wpp`)
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${q}`)
reply(`*Link encurtado com sucesso, aqui está:* ${anu.data}`).catch(e => {
reply(mess.error())
})
break












case 'checkme':
case 'meustats':
{
  if (!isGroup) return reply('❌ Esse comando só funciona em grupos!')

  var ind = groupIdscount.indexOf(from)
  if (ind < 0) return reply('⚠️ Nenhuma atividade sua foi registrada nesse grupo ainda.')

  let membro = countMessage[ind].numbers.find(obj => obj.id === sender)
  if (!membro) return reply('⚠️ Nenhuma atividade sua foi registrada ainda.')

  let texto = `📊 *SUAS ESTATÍSTICAS NO GRUPO*\n\n`
  texto += `🆔 Número: @${sender.split('@')[0]}\n`
  texto += `💬 Mensagens: *${membro.messages}*\n`
  texto += `⚙️ Comandos usados: *${membro.cmd_messages}*\n`
  texto += `🧷 Figurinhas: *${membro.figus}*\n`
  texto += `📱 Aparelho: *${membro.aparelho || 'Desconhecido'}*\n`
  texto += `\n🔥 *Atividade:* ${
    membro.messages > 300 ? 'Super ativo'
    : membro.messages > 100 ? 'Moderado'
    : 'Sumido'
  }`

await dmzg.sendMessage(from, { text: texto, mentions: [sender] }, { quoted: info})
}
break

case 'calculadora':
case 'calcular':  
case 'calc':
rsp = q.replace("x", "*").replace('"', ":").replace(new RegExp("[()abcdefghijklmnopqrstwuvxyz]", "gi"), "").replace("÷", "/")
return reply(JSON.stringify(eval(rsp, null,'\t')))
break 



case 'pin':
if (!q) return reply(`exemplo: ${prefix + command} cat`);
imgUrl = `https://blacksystemofc.com.br/api/pinterest2?text=${encodeURIComponent(q)}&apikey=Jpzinhkkk`;
  
await dmzg.sendMessage(from, {
image: { url: imgUrl },
caption: `aqui`
}, { quoted: info })
  .catch(err => {
 console.error("erro", err);
reply('.');
});
break

case 'fakechat': case 'fakemsg':
if(!isGroup) return reply(enviar.msg.grupo);
var [repplace, tarrget, bott] = q.split("|")
var m_ = info.message.extendedTextMessage && info.message.extendedTextMessage.contextInfo && info.message.extendedTextMessage.contextInfo.mentionedJid ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : null
if (m_ && tarrget && bott) {
dmzg.sendMessage(from, {text: bott}, {quoted: {key: {fromMe: false, participant: m_}, message: {conversation: tarrget}}});
} else {
reply(`Crie mensagens fakes com qualquer uma pessoa! Explicando abaixo:\n—\n• Você precisaria mencionar a pessoa e adicionar a mensagem que ele supostamente iria enviar e que você responderia a seguinte mensagem, todos usando a *|* para separar o que foi pedido dito nesse textinho...\n• *Ex:* ${prefix+command} @vitima|msg1|msg2`);
}
break;



case 'contardias': case 'countdays': // @Crap</>
if(!q.includes("/")) return reply(`Você esqueceu da */* para separar os campos.. Exemplo: *31/03/2024*`)
if(q.length < 10) return reply(`Deve conter a data completa *(dia/mês/ano)* após o comando!\n• Exemplo: *${prefix+command} 31/03/2024*`)
try {
const tempo = timeDate('DD/MM/YYYY')
countDay = countDays(q.split("/"), tempo.split("/"))
reply(`Falta *${countDay}* dia(s).`)
} catch(e) {
return reply(mess.error())
}
break;




case 'wikipedia': case 'wiki':
try {
  if(!q) return reply(`Exemplo: ${prefix+command} JavaScript`)
reply(`Aguarde, pesquisando sobre o que está perguntando..`)
wikip = await axios.get(`https://pt.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${encodeURIComponent(q)}&prop=info&inprop=url`);
wikis = await axios.get(`https://pt.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&pageids=${wikip.data.query.search[0].pageid}`);
msgSemQuoted(mess.wikiResposta(wikis))
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
reply('Nada foi encontrado, com base em sua pergunta.. Especifique um pouco!')
} else {
reply('Nada foi encontrado, com base em sua pergunta.. Especifique um pouco!')
}
}
break



case 'livro':
if (args.length == 0) return reply(`*Exemplo:* ${prefix+command} Nome do Livro`)
try {
const takeBook = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(q)}&langRestrict=pt`);
const getBook = await axios.get(`${takeBook.data.items[0].selfLink}`);
var bookImage = await getBuffer(getBook.data.volumeInfo.imageLinks.thumbnail)
dmzg.sendMessage(from, {image: bookImage, caption: mess.searchBooks(getBook)}).catch(e => {
reply(mess.error())
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
return console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")
reply(mess.error())
}
}
break

case 'tagme':
const tagme = `@${sender.split("@")[0]} ✔️`
await mentions(tagme, [sender], true)
break

case 'clima':
if (args.length == 0) return reply(`*Exemplo:* ${prefix}Clima Maceió`)
try {
const wttrin = (await axios.get(`https://pt.wttr.in/${encodeURIComponent(q)}?format=j1`)).data;
var wttrImage = await getBuffer(`https://wttr.in/${encodeURIComponent(q)}.png`)
dmzg.sendMessage(from, {image: wttrImage, caption: mess.clima(wttrin)}).catch(e => {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")
reply(mess.error())
}
}
break










//========COMANDOS DONO/ADM=========\\


case 'gitclone':
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!q) return reply(`Exemplo: ${prefix}gitclone https://github.com/YajiirDev/avatar`)
if (!args[0]) reply(`Exemplo: ${prefix}gitclone https://github.com/YajiirDev/avatar`)
reply(enviar.espere)
if (!regex1.test(args[0])) return reply('Aguarde...')
let [, user, repo] = args[0].match(regex1) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
dmzg.sendMessage(from, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: sasah }).catch(e => {
return reply(mess.error())  
})
break


case 'modoaluguel': case 'aluguel': case 'modorent':
if(!isGroup) return reply(enviar.msg.grupo)
if(!SoDono) return reply(enviar.msg.donomt)
if(args.length < 1) return reply('1 para ativar, 0 para desativar este recurso.')
if(Number(args[0]) === 1) {
if(isModoAluguel) return reply('O modo aluguel já está ativado neste grupo.')
dataGp[0].aluguel = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de modo aluguel no grupo...')
} else if(Number(args[0]) === 0) {
if(!isModoAluguel) return reply('O modo aluguel não está ativo no grupo atualmente.')
dataGp[0].aluguel = false
setGp(dataGp)
reply('Modo aluguel desativado, _agora o grupo pode usar meus comandos sem restrições._')
} else {
reply('1 para ativar, 0 para desativar este recurso.')
}
break




case 'totag':
case 'cita':
case 'hidetag':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
var DFC = "";
var rsm = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var pink = isQuotedImage ? rsm?.imageMessage: info.message?.imageMessage
var blue = isQuotedVideo ? rsm?.videoMessage: info.message?.videoMessage
var purple = isQuotedDocument ? rsm?.documentMessage: info.message?.documentMessage
var yellow = isQuotedDocW ? rsm?.documentWithCaptionMessage?.message?.documentMessage: info.message?.documentWithCaptionMessage?.message?.documentMessage
var aud_d = isQuotedAudio ? rsm.audioMessage : ""
var figu_d = isQuotedSticker ? rsm.stickerMessage : ""
var red = isQuotedMsg && !aud_d && !figu_d && !pink && !blue&& !purple && !yellow? rsm.conversation: info.message?.conversation
var green = rsm?.extendedTextMessage?.text || info?.message?.extendedTextMessage?.text
var MRC_TD = groupMembers.map(i => i.id)
if(pink && !aud_d && !purple) {
var DFC = pink
pink.caption = q.length > 1 ? ""+q :pink.caption.replace(new RegExp(prefix+command, "gi"), ` \n`)
pink.image = {url: pink.url}
pink.mentions = MRC_TD
} else if(blue && !aud_d && !purple) {
var DFC = blue  
blue.caption = q.length > 1 ? ""+q.trim() :blue.caption.replace(new RegExp(prefix+command, "gi"), ` \n`).trim()
blue.video = {url: blue.url}
blue.mentions = MRC_TD
} else if(red && !aud_d && !purple) {
black = {}
black.text = red.replace(new RegExp(prefix+command, "gi"), `\n`).trim()
black.mentions = MRC_TD
var DFC = black
} else if(!aud_d && !figu_d && green && !purple && !purple) {
brown = {}
brown.text = green.replace(new RegExp(prefix+command, "gi"), `\n`).trim()
brown.mentions = MRC_TD
var DFC = brown
} else if(purple) {
var DFC = purple
purple.document = {url: purple.url}
purple.mentions = MRC_TD
} else if(yellow && !aud_d) {
var DFC = yellow 
yellow.caption = q.length > 1 ? " "+q.trim() :yellow.caption.replace(new RegExp(prefix+command, "gi"), `\n`).trim()
yellow.document = {url: yellow.url}
yellow.mentions = MRC_TD
} else if(figu_d && !aud_d) {
var DFC = figu_d
figu_d.sticker = {url: figu_d.url}
figu_d.mentions = MRC_TD
} else if(aud_d) {
var DFC = aud_d
aud_d.audio = {url: aud_d.url}
aud_d.mentions = MRC_TD
aud_d.ptt = true
}
dmzg.sendMessage(from, DFC).catch(e => {
console.log(e)
})
break

case 'marcar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
async function marcac() {
bla = []
blad = `• Mencionando os membros comuns do grupo ou de uma comunidade. ${!q ? "" : `\n*Mensagem:* ${q}`}\n\n`
for( let i of somembros ) {
blad += `» @${i.split("@")[0]}\n`
bla.push(i)
}
blam = JSON.stringify(somembros)
if(blam.length == 2) return reply(`❌️ Olá *${pushname}* - Não contém nenhum membro comum no grupo, é sim apenas administradores. `)
mentions(blad, bla, true)  
}
marcac().catch(e => {
console.log(e)
})
break



case 'marcar2':
try {
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)  
if(q.includes(`${prefix}`)) return reply("Não pode utilizar comandos nesse comando.")
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += ''
for (let mem of groupMembers) {
teks += `╠➥ @${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
reply(teks)
} catch {
reply('Erro ao mencionar.')
}
break

case 'marcarwa':
try {
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)  
if(q.includes(`${prefix}`)) return reply("Não pode utilizar comandos nesse comando")
members_id = []
teks = (args.length > 1) ? body.slice(10).trim() : ''
teks += ''
for (let mem of groupMembers) {
teks += `╠➥ https://wa.me/${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
dmzg.sendMessage(from, {text: teks}, {quoted: sasah})
} catch {
reply('Erro ao mencionar.')
}
break

case 'reviverqr':
if(!SoDono && !isnit) return 
exec(`cd ${folderUserAuth} && rm -rf pre-key* sender* session*`)
setTimeout(async () => {
reply("Reiniciando..")
setTimeout(async () => {
process.exit()
}, 1200)
}, 1000)
break

case 'nomegp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
blat = args.join(" ")
dmzg.groupUpdateSubject(from, `${blat}`)
dmzg.sendMessage(from, {text: 'Sucesso, alterou o nome do grupo'}, {quoted: sasah})
break

case 'descgp':
case 'descriçãogp':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.adm)
blabla = args.join(" ")
dmzg.groupUpdateDescription(from, `${blabla}`)
dmzg.sendMessage(from, {text: 'Sucesso, alterou a descrição do grupo'}, {quoted: sasah})
break

case 'requestgp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!q) return reply(mess.syntaxRequestProhibited(prefix))
const req = await dmzg.groupRequestParticipantsList(from)
if (args[0] === '-r') {
await dmzg.groupRequestParticipantsUpdate(from, [args[1].split(' ')[0]+"@s.whatsapp.net"], "reject")
} else if (args[0] === '-a') {
mentionSemQuoted(`Seja bem-vindo(a) ao grupo @${args[1].split(' ')[0]}, sua aprovação foi aceita pelo administrador(a).`)
await dmzg.groupRequestParticipantsUpdate(from, [args[1].split(' ')[0]+"@s.whatsapp.net"], "approve")
} else if (args[0] === '-list') {
let totalRequest = req.length
if (req == 0) return reply(`Não encontrei nenhuma solicitação pendente no grupo.`)
ABC = `( Total: ${totalRequest} ) - Lista de pessoas que desejam entrar no grupo:\n-\n`
for (var i of req) {
ABC += `Sujeito: @${i.jid.replace("@s.whatsapp.net", "")}\n• Número solicitante: ${i.jid.replace("@s.whatsapp.net", "")}\n`;
ABC += `–\n`
}
mention(ABC)
}
break;

case 'setfotogp':
case 'fotogp':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!isQuotedImage) return reply(`Use: ${prefix + command} <Marque uma foto>`)
ftgp = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(ftgp.mimetype))
buffimg = await getFileBuffer(ftgp, 'image')
fs.writeFileSync(rane, buffimg)
medipp = rane 
dmzg.updateProfilePicture(from, {url: medipp})
reply(`Foto do grupo alterada com sucesso`) 
break

case 'linkgp':
case 'linkgroup':
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
linkgc = await dmzg.groupInviteCode(from)
reply('https://chat.whatsapp.com/'+linkgc)
break

case 'recrutar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!q) return reply("Cadê o número do usuário que você deseja convidar.")
try {
photoG = await dmzg.profilePictureUrl(from, 'image') // Pegar a foto do grupo aonde foi solicitado o comando de recrutamento.
} catch {
photoG = thumbnail // Vai colocar a img que está na definição, caso esteja sem foto.
}
rcrt = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
linkgc = await dmzg.groupInviteCode(from)
dmzg.sendMessage(rcrt, {text: "*Olá, tudo bem?* Você foi convidado(a) pelo(a) adminstrador(a) do grupo.\nPara entrar no grupo, clique acima!", contextInfo: {externalAdReply: {title: "Clique aqui para participar do grupo.", thumbnail: await getBuffer(photoG), mediaType: 1, sourceUrl: "https://chat.whatsapp.com/"+linkgc}}})
reply("Convite de recrutamento do usuário, foi enviado para o privado dele com sucesso...")
break

case 'listatm':
if(!SoDono) return reply(enviar.msg.donosmt)
rgp = JSON.parse(fs.readFileSync("./database/func/tmgroup.json"))
if(rgp.length == 0) return reply(`Não contém nenhum registro de transmissão, utilize ${prefix}rgtm no grupo que deseja que ele receba as transmissões do bot..`)
bl = "";
for ( i = 0; i < rgp.length; i++) {
bl += `( ${i+1} ) - ID: ${rgp[i].id}\n• Nome do Usuário(a) ou Grupo: ${rgp[i].infonome}\n-\n`
}
reply(bl)
break

case 'rgtm':
if(!SoDono) return reply(enviar.msg.donosmt)
rgp = JSON.parse(fs.readFileSync("./database/func/tmgroup.json"))
if(JSON.stringify(rgp).includes(from)) return reply("Este grupo/usuário já está registrado na lista de transmissão") 
rgp.push({id: from, infonome: `${isGroup ? groupName: pushname}`})
fs.writeFileSync("./database/func/tmgroup.json", JSON.stringify(rgp))
reply("Registrado com sucesso, quando for realizada as transmissões, esse grupo/usuário estará na lista.")
break

case 'tirardatm':
if(!SoDono) return reply(enviar.msg.donosmt)
rgp = JSON.parse(fs.readFileSync("./database/func/tmgroup.json"))
if(!JSON.stringify(rgp).includes(from)) return reply("Este grupo/usuário não está registrado para ser tirado da lista de transmissão") 
if(q.trim().length > 4) {
var ustm = rgp.map(i => i.id).indexOf(q.trim())
} else {
var ustm = rgp.map(i => i.id).indexOf(from)
}
rgp.splice(ustm, 1)
fs.writeFileSync("./database/func/tmgroup.json", JSON.stringify(rgp))
reply("Grupo/Usuário tirado da lista de transmissão com sucesso")
break

case 'fazertm':
if(!SoDono) return reply(enviar.msg.donosmt)
var rgp = JSON.parse(fs.readFileSync("./database/func/tmgroup.json"))
if(rgp.lengh == 0) return reply("Não contém nenhum grupo registrado para realizar transmissão") 
await sleep(1000);
var DFC = "";
var rsm = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var pink = isQuotedImage ? rsm?.imageMessage: info.message?.imageMessage
var blue = isQuotedVideo ? rsm?.videoMessage: info.message?.videoMessage
var red = isQuotedMsg ? rsm?.textMessage: info.message?.textMessage
var purple = isQuotedDocument ? rsm?.documentMessage: info.message?.documentMessage
var yellow = isQuotedDocW ? rsm?.documentWithCaptionMessage?.message?.documentMessage: info.message?.documentWithCaptionMessage?.message?.documentMessage
var aud_d = isQuotedAudio ? rsm.audioMessage : ""
var figu_d = isQuotedSticker ? rsm.stickerMessage : ""
var red = isQuotedMsg && !aud_d &&!figu_d && !pink && !blue&& !purple && !yellow? "Transmissão do Proprietário: "+rsm.conversation: info.message?.conversation
var green = isQuotedMsg2 && !aud_d &&!figu_d && !red && !pink && !blue && !purple && !yellow ? "Transmissão do Proprietário: "+rsm.extendedTextMessage?.text : info?.message?.extendedTextMessage?.text
if(pink) {
var DFC = pink
pink.caption = q.length > 1 ? "Transmissão do Proprietário: "+q : pink.caption.replace(new RegExp(prefix+command, "gi"), `Transmissão do Proprietário: ${NickDono}\n\n`)
pink.image = {url: pink.url}
} else if(blue) {
var DFC = blue  
blue.caption = q.length > 1 ? "Transmissão do Proprietário: "+q : blue.caption.replace(new RegExp(prefix+command, "gi"), `Transmissão do Proprietário: ${NickDono}\n\n`)
blue.video = {url: blue.url}
} else if(red) {
black = {}
black.text = red.replace(new RegExp(prefix+command, "gi"), `Transmissão do Proprietário: ${NickDono}\n\n`)
var DFC = black
} else if(!aud_d && !figu_d && green) {
brown = {}
brown.text = green.replace(new RegExp(prefix+command, "gi"), `Transmissão do Proprietário: ${NickDono}\n\n`)
var DFC = brown
} else if(purple) {
var DFC = purple
purple.document = {url: purple.url} 
} else if(yellow) {
var DFC = yellow 
yellow.caption = q.length > 1 ? "Transmissão do Proprietário: "+q : yellow.caption.replace(new RegExp(prefix+command, "gi"), `Transmissão do Proprietário: ${NickDono}\n\n`)
yellow.document = {url: yellow.url}  
} else if(figu_d) {
var DFC = figu_d
figu_d.sticker = {url: figu_d.url}
} else if(aud_d) {
var DFC = aud_d
aud_d.audio = {url: aud_d.url}
}
for (i = 0; i < rgp.length; i++) {
dmzg.sendMessage(rgp[i].id, DFC)}
break

case 'trancar': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args[0] === '0') {
reply(`- Como pedido senhor(a), o grupo foi aberto com sucesso..`)
dmzg.groupSettingUpdate(from, 'not_announcement')
} else if(args[0] === '1') {
reply(`- Como pedido senhor(a), o grupo foi fechado com sucesso..`)
dmzg.groupSettingUpdate(from, 'announcement')
}				 
break 


case 'ptvmsg':
if (!isQuotedVideo && !info.message.videoMessage) {
return reply('Marque um vídeo/gif que você deseja converter para mensagem de vídeo.')}
dmzg.relayMessage(from, {ptvMessage: isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage }, {})
break






case 'reviver':
if(!isGroup) return reply(enviar.msg.grupo)
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque uma mensagem do alvo!')
sleep(5000)
response2 = await dmzg.groupParticipantsUpdate(from, [menc_prt], "add" )
reply('Usuario adicionado de volta ao grupo.')
break

case 'sair':
if(isGroup && !SoDono && !info.key.fromMe) return reply("Este comando só o bot ou o dono pode executar..")
try {
dmzg.groupLeave(from)
} catch(erro) {
reply(String(erro))
}
break

case 'seradm':
if(!SoDono && !isnit) return reply("Só dono pode executar este comando.")
mentions(`@${sender.split("@")[0]} Pronto - Agora você é um administrador..`, [sender], true)
dmzg.groupParticipantsUpdate(from, [sender], "promote")
break

case 'sermembro':
if(!SoDono && !isnit) return reply("Só dono pode executar este comando.")
mentions(`@${sender.split("@")[0]} Pronto - Agora você é um membro comum novamente..`, [sender], true)
dmzg.groupParticipantsUpdate(from, [sender], "demote")
break

case 'advertir':
case 'adverter': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(menc_os2 == botNumber) return reply("Não pode advertir o próprio bot.");
if(menc_os2 == nmrdn) return reply("Não pode advertir o próprio dono do bot.");
if(groupAdmins.includes(menc_os2)) return reply("Não é possível advertir adminstrador do grupo.");
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Não tem como advertir um usuário que não se encontra mais no grupo.")
ADVT.push(menc_os2); setGp(dataGp)  
setTimeout(async() => {
var dfqn = ADVT.filter(x => x == menc_os2).length
var dfntxt = mess.warningAdvertencia(menc_os2, dfqn)
if(!dfntxt.includes("3/3")) {
if(!JSON.stringify(ADVT).includes(sender)) {
await sleep(1500); mentions(dfntxt, [menc_os2])
} else if(dfqn == 2) {
await sleep(1500); mentions(dfntxt, [menc_os2])
}} else {dmzg.sendMessage(from, {text: mess.finishAdvertencia(menc_os2), mentions: [menc_os2]})
await sleep(1500)
dmzg.groupParticipantsUpdate(from, [menc_os2], "remove")
var i = ADVT.indexOf(menc_os2); ADVT.splice(i, 3); setGp(dataGp)}}, 3000)
break

case 'rmadv':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!marc_tds) return reply("Você esqueceu de mencionar o alvo após o comando.")
adv = dataGp[0].advertir.map(i => i).indexOf(marc_tds)
if(adv < 0) return reply("Este usuário não contém nenhuma advertência no grupo.")
dataGp[0].advertir.splice(adv, 1)
setGp(dataGp)
reply("A advertência do usuário neste grupo foi retirada com sucesso!")
break

//======≠(INFOS/EXECUÇÃO/DONO)≠=========\\

case 'sairgp':
if(!SoDono)return reply(enviar.msg.donosmt)  
if(!q) return reply(`Você deve visualizar o comando ${prefix}listagp e olhar de qual o grupo quer sair, e veja a numeração dele, e só digitar\nExemplo: ${prefix}sairdogp 0\nesse comando é para o bot sair do grupo que deseja..`)
var getGroups = await dmzg.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
try {
dmzg.sendMessage(ingfoo[q].id, {text: "Irei sair do grupo, por ordem do meu dono, adeus..."}) 
setTimeout(() => {
dmzg.groupLeave(ingfoo[q].id)
}, 5000)
} catch(erro) {
reply(String(erro))
}
reply("Pronto meu dono, sair do grupo que você queria, em caso de dúvidas acione o comando listagp pra verificar..")
break

case 'listagp':
if(!SoDono && !isnit && !info.key.fromMe) return reply('```SOMENTE MEU DONO LINDÃO```')
var getGroups = await dmzg.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
ingfoo.sort((a, b) => (a[0] < b.length))
teks1 = `LISTA DE GRUPOS / COMUNIDADES\n*Total de Grupos:* ${ingfoo.length}\n-\n`
for (let i = 0; i < ingfoo.length; i++){
var metadt = await dmzg.groupMetadata(ingfoo[i].id) 
try {
var linkdogp = await dmzg.groupInviteCode(ingfoo[i].id)
} catch {
var linkdogp = "Não foi possivel puxar o link."
}
teks1 += `( ${i} ) - Nome do Grupo: ${ingfoo[i].subject}\nID: ${ingfoo[i].id}\nLink do Grupo: https://chat.whatsapp.com/${linkdogp}\nCriado por: ${metadt.subjectOwner}\nCriado em: ${moment(`${ingfoo[i].creation}` * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}\nTotal de Participantes: ${ingfoo[i].participants.length}\n-\n`
}
reply(teks1)
break

case 'atividade':
case 'atividades':
try{
if(!isGroupAdmins && !issupre && !ischyt) return reply(enviar.msg.adm)
if(isGroup && JSON.stringify(countMessage).includes(from)) {
var i6 = countMessage.map(i => i.groupId).indexOf(from)
if(countMessage[i6].numbers.length == 0) return
teks = `*Atividade dos membros do grupo:*\n–\n`
for(i = 0; i < countMessage[i6].numbers.length; i++) {
var i8 = countMessage[i6].numbers.map(i => i.id).indexOf(countMessage[i6].numbers[i].id)  
var uscnt = countMessage[i6].numbers[i]
teks += `• Participante: *@${uscnt.id.split('@')[0]}*\n• Quantidade de omandos usados pelo(a) participante no grupo: *${uscnt.cmd_messages}*\n• Quantidade de mensagens enviadas pelo(a) participante: *${uscnt.messages}*\n• O participante no momento está conectado em: *${uscnt.aparelho}*\n• Quantidade de figurinhas enviadas no grupo: *${uscnt.figus}*\n–\n`
}
mention(teks)
} else return reply('*Nada foi encontrado*')
} catch (e){
console.log(e)
}
break

case 'inativos':
case 'inativo':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(q.match(/[a-z]/i) || !q) return reply(`Exemplo: ${prefix+command} 0\nIsso mostrará quantas pessoas tem 0 mensagens no grupo, e se usar 5, vai mostrar quantos usuários tem 5 mensagens ou menos..`)
var i2 = countMessage?.map(x => x.groupId)?.indexOf(from)
blue = []; for (i of countMessage[i2].numbers) {
if(i.messages <= q.trim())
if(i.figus <= q.trim())
if(i.cmd_messages <= q.trim())
if(!groupAdmins.includes(i.id))
if(!numerodono.includes(i.id))
if(i.id != botNumber)
if(groupMembers.map(i => i.id).includes(i.id))
blue.push(i.id)}; for ( i of countMessage[i2].numbers) {
if(!groupMembers.map(i => i.id).includes(i.id))
if(i.id.length > 5)
blue.push(i.id)}
if(blue.length == 0) return reply(`Não tem pessoas com ${q} mensagens..`)
bli = `Usuários com *${q.trim()}* mensagem(ns) pra baixo estão listados abaixo, verifique:\n–\n`
for (ac = 0; ac < blue.length; ac++) {
bli += `*${ac+1}.* @${blue[ac].split("@")[0]}\n`
}
mention(bli)
break

case 'banghost':
if(!isGroup) return reply(enviar.msg.grupo)  
if(!SoDono) return reply(enviar.msg.donosmt)
if(q.match(/[a-z]/i) || !q || q.length > 3) return reply(`Digite a partir de quantas mensagens pra baixo você deseja remover (que não interaje no grupo).\nExemplo: ${prefix+command} 0`)
var i2 = countMessage?.map(x => x.groupId)?.indexOf(from)
blue = []; for (i of countMessage[i2].numbers) {
if(i.messages <= Number(q.trim()))
if(i.figus <= Number(q.trim()))
if(i.cmd_messages <= Number(q.trim()))
if(!groupAdmins.includes(i.id))
if(!numerodono.includes(i.id))
if(i.id != botNumber)
if(groupMembers.map(i => i.id).includes(i.id))
blue.push(i.id)}; for ( i of countMessage[i2].numbers) {
if(!groupMembers.map(i => i.id).includes(i.id))
if(i.id.length > 5)
blue.push(i.id)}
if(blue.length == 0) return reply(`Não tem mais pessoas com ${q.trim()} mensagem(ns) para eu remover..`)
for ( i = 0; i < blue.length; i++) {
await sleep(1000)
dmzg.groupParticipantsUpdate(from, [blue[i]], "remove")}
break

case 'correio':
txt = args.join(" ")
if(!txt) return reply(mess.syntaxAnonymousMail(prefix))
let txt1 = txt.split("/")[0].replace(/\D/g,'');
let txt2 = txt.split("/")[1];
if(!txt1) return reply('*Cadê o número do destinatário?*')
if(!txt2) return reply('*Cadê a mensagem para ser enviada ao destinatário?*')
let [result] = await dmzg.onWhatsApp(txt1)
if(!result) return reply(`O número fornecido está indisponível no WhatsApp! Verifique por favor.`)
setTimeout(() => {reagir(from, "💌️")}, 50)
reply(mess.sucessAnonymousMail())
dmzg.sendMessage(result.jid, {text: mess.anonymousMail(txt2)}).catch((error) => {
return reply("Error ao encaminhar a mensagem, tente novamente mais tarde!")
})
break

case 'nome-bot':
if(!SoDono  && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)  
NomeDoBot = q.trim()
setting.NomeDoBot = q.trim()
fs.writeFileSync('./settings/settings.json', JSON.stringify(setting, null, 2))
reply(`O nome do bot foi alterado com sucesso para: ${q}`)
break

case 'nick-dono':
if(!SoDono  && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt) 
setting.NickDono = q.trim()
NickDono = setting.NickDono
fs.writeFileSync('./settings/settings.json', JSON.stringify(setting, null, 2))
reply(`O nick do dono foi configurado para: ${q}`)
break

case 'numero-dono':
if(!SoDono && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)  
if(q.match(/[a-z]/i)) return reply("É apenas números..")
reply(`O número dono foi configurado com sucesso para: ${q}`)
setting.numerodono = q.trim().replace(new RegExp("[()+-/ +/]", "gi"), "");
numerodono = setting.numerodono
numerodn = setting.numerodono
numerodono_ofc = setting.numerodono
fs.writeFileSync('./settings/settings.json', JSON.stringify(setting, null, 2))
break

case 'prefixo-bot': case 'setprefix':
if(args.length < 1) return
if(!SoDono  && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)
setting.prefix = q
fs.writeFileSync('./settings/settings.json', JSON.stringify(setting, null, 2))
reply(`O prefixo foi alterado com sucesso para: ${setting.prefix}`)
break

case 'fotomenu':
case 'fundomenu':
if(!SoDono) return reply(Res_SoDono)
if(!isQuotedImage) return reply("Marque uma imagem")
if((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) { 
reply(`- Calma ae amigo(a), já estou trocando a foto do menu para você..`)
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
ftmenu.logo.splice([])
fs.writeFileSync('./settings/logos.json', JSON.stringify(ftmenu, null, 2))
setTimeout(() => {
ftmenu.logo.push(res)
fs.writeFileSync('./settings/logos.json', JSON.stringify(ftmenu, null, 2))
reply(`A foto do menu foi alterada com sucesso para: ${ftmenu.logo}`)
}, 1200)
} else {
reply(`Mande uma imagem com o comando ${prefix + command} para trocar a foto de todos menu..`)
}
break

case 'privphotobot': {
if(!SoDono) return reply(enviar.msg.donosmt)
if (!q) return reply(mess.syntaxPrivatePhotoBot(prefix))
if (args[0] === 'all') {
reply(`- A minha foto do perfil agora está visível à todos.`)
await dmzg.updateProfilePicturePrivacy('all')
} else if (args[0] === 'cntt') {
reply(`- A minha foto do perfil agora está visível somente aos meus contatos.`)
await dmzg.updateProfilePicturePrivacy('contacts')
} else if (args[0] === 'ngm') {
reply(`- A foto do meu perfil está privada a todos, até mesmo ao senhor mestre.`)
await dmzg.updateProfilePicturePrivacy('none')
}
}
break

case 'privaddgroup': {
if(!SoDono) return reply(enviar.msg.donosmt)
if (!q) return reply(mess.syntaxPrivAddGroup(prefix))
if (args[0] === 'all') {
reply(`- Pronto, agora todos pode me adicionar em grupo normalmente.`)
await dmzg.updateGroupsAddPrivacy(`all`)
} else if (args[0] === 'cntt') {
reply(`- Agora somente meus contatos, pode me adicionar em grupo.`)
await dmzg.updateGroupsAddPrivacy(`contacts`)
} else if (args[0] === 'ngm') {
reply(`- Agora ninguém pode ousar me adicionar em grupo, pois será negado.`)
await dmzg.updateGroupsAddPrivacy('none')
}
}
break

case 'setprefix':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
prefix = args[0]
setting.prefix = prefix
fs.writeFileSync('./settings/settings.json', JSON.stringify(setting, null, 2))
reply(`O prefixo foi alterado com sucesso para: ${prefix}`)
break

case 'nomegp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
dmzg.groupUpdateSubject(from, `${body.slice(9)}`)
dmzg.sendMessage(from, {text: 'Sucesso, alterou o nome do grupo'}, {quoted: sasah})
break

case 'envmsg':
if(!SoDono && !isnit) return
var [tx1, tx2] = q.split("/")
dmzg.sendMessage(tx1, {text: tx2})
break

case 'bcgp':
case 'bcgc':  
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!q) return reply('Cade o texto?')
var nomor = info.participant
if(isMedia && !info.message.videoMessage || isQuotedImage) {
encmedia = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
for (i = 0; i < groupMembers.length; i++) {
await sleep(2000)  
dmzg.sendMessage(groupMembers[i].id, {image: buff}, {caption: `*「 TRANSMISSÃO 」*\n-\nGrupo: ${groupName}\n• Número: wa.me/${sender.split('@')[0]}\n• Mensagem: ${body.slice(6)}`})
}
reply('A transmissão foi enviada com êxito.')
} else {
for (i = 0; i < groupMembers.length; i++) {
await sleep(2000)
sendMess(groupMembers[i].id, `*「 TRANSMISSÃO 」*\n-\n• Grupo: ${groupName}\n• Número: wa.me/${sender.split('@')[0]}\n• Mensagem: ${body.slice(6)}`)
}
reply('Grupo de transmissão bem-sucedido.')
} 
break

case 'dono1':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
nescessario.numero_dono1 = q.trim()
dono1 = nescessario.numero_dono1
setNes(nescessario)
reply(`Agora contem um segundo dono(a) alterado com sucesso para: ${q}`)
break

case 'dono2':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
nescessario.numero_dono2 = q.trim()
dono2 = nescessario.numero_dono2
setNes(nescessario)
reply(`Agora contem um segundo dono(a) alterado com sucesso para: ${dono2}`)
break

case 'dono3':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
nescessario.numero_dono3 = q.trim()
dono3 = nescessario.numero_dono3
setNes(nescessario)
reply(`Agora contem um terceiro dono(a) alterado com sucesso para: ${dono3}`)
break

case 'dono4':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
nescessario.numero_dono4 = q.trim()
dono4 = nescessario.numero_dono4
setNes(nescessario)
reply(`Agora contem um quarto dono(a) alterado com sucesso para: ${dono4}`)
break

case 'dono5':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
nescessario.numero_dono5 = q.trim()
dono5 = nescessario.numero_dono5
setNes(nescessario)
reply(`Agora contem um quinto dono(a) alterado com sucesso para: ${dono5}`)
break

case 'dono6':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
nescessario.numero_dono6 = q.trim()
dono6 = nescessario.numero_dono6
setNes(nescessario)
reply(`Agora contem um quinto dono(a) alterado com sucesso para: ${dono6}`)
break

case 'getquoted':
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo, null, 3))
break

case 'donos':
reply(mess.ownersList(NomeDoBot, numerodono_ofc, numero_dono1, numero_dono2, numero_dono3, numero_dono4, numero_dono5, numero_dono6))
break

case 'admins':
case 'listadmins':  
case 'listaadmins':   
if(!isGroup) return reply(enviar.msg.grupo)
ytb = `Lista de admins do grupo *${groupMetadata.subject}*\n*Total de Adminstradores:* ${groupAdmins.length}\n-\n`
no = 0
for (let admon of groupAdmins) {
no += 1
ytb += `( ${no.toString()} ) - @${admon.split('@')[0]}\n`
}
mentions(ytb, groupAdmins, true)
break

case 'ativo': case 'on': case 'voltei':
if(!isGroupAdmins && !SoDono) return reply("Só adm ou dono pode utilizar este comando.")
if(DonoOficial) {
if(fs.existsSync("./database/func/afk/afk-@" + numerodono_ofc + ".json")) {  
DLT_FL("./database/func/afk/afk-@" + numerodono_ofc + ".json");
reply("Bem vindo de volta, agora você está online 🙂")
} else {
reply("Você não registrou nenhuma mensagem de ausência...")
}
} else if(isGroupAdmins) {
if(!JSON.stringify(dataGp[0].ausentes).includes(sender)) return reply("Não há nenhum registro de ausência sua..")
dataGp[0].ausentes.splice(dataGp[0].ausentes.map(x => x.id).indexOf(sender), 1)
setGp(dataGp)
reply("Registro de ausência tirada com sucesso...")
}
break

case 'ausente': case 'off': case 'afk':
if(!isGroupAdmins && !SoDono) return reply("Só adm ou dono pode utilizar este comando.")
if(DonoOficial) {
msgtmp = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
fs.writeFileSync(`./database/func/afk/afk-@${setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "")}.json`,
JSON.stringify({
Ausente_Desde: msgtmp, 
Motivo_Da_Ausência: q
}, null, 2));
reply(`Mensagem de ausência criada com sucesso...`)
} else if(isGroupAdmins) {
if(!q.trim()) return reply(`Digite a mensagem de ausência, Exemplo: ${prefix+command} Estou tomando banho`)
if(!JSON.stringify(dataGp[0].ausentes).includes(sender)) {
dataGp[0].ausentes.push({id: sender, msg: q.trim()})
setGp(dataGp)
reply("Mensagem de ausência criada com sucesso..\nSe deseja desativar a mensagem de ausência use o comando ativo")
} else {
dataGp[0].ausentes[dataGp[0].ausentes.map(i => i.id).indexOf(sender)].msg = q.trim()
setGp(dataGp)
reply("Mensagem de ausência alterada com sucesso..\nSe deseja desativar a mensagem de ausência use o comando ativo")
}
} else {
return reply("Comando apenas para administradores e dono do bot..")
}
break

case 'addpremium': 
if(!SoDono) return reply(enviar.msg.donosmt)
barra = q.replace(" /", "/").replace("/ ", "/").replace(" / ", "/")
var [nmr, tempo50] = barra.split('/')
if(!nmr || !tempo50) return mention(`Você esqueceu de colocar o número do indivíduo e a quantidade de dias que o(a) usuário(a) como premium.\n• Segue o exemplo de uso correto do comando: *${prefix+command} @${nmrdn.split('@')[0]}/30*\n–––\n• Para colocar o usuário sem duração de expiração do premium, você usa o *0* como quantidade de dias.`)
usur = nmr.includes('@') ? nmr.split('@')[1] + "@s.whatsapp.net" : nmr + "@s.whatsapp.net"
mega = Number(tempo50) > 0 ? false : true
dvip = moment.tz('America/Sao_Paulo').format('DD')
bla = JSON.stringify(premium).includes(usur)
if(bla) {
AB = premium.map(i => i.id).indexOf(usur)
if(premium[AB].infinito == true) return reply(`Não é possível adicionar + dias ao usuário, por motivos que ele contém o premium infinito.`)
premium[AB].dias += Number(tempo50)
fs.writeFileSync('./database/usuarios/premium.json', JSON.stringify(premium))
dmzg.sendMessage(from, {text: `${tempo50} dia${Number(tempo50) > 1 ? `s` : ``} fo${Number(tempo50) > 1 ? `ram` : `i`} adicionado${Number(tempo50) > 1 ? `s` : ``} ao usuário @${usur.split("@")[0]}`, mentions: [usur]}, {quoted: info})
} else {
premium.push({id: usur, dias: Number(tempo50), save: Number(dvip), infinito: mega})
fs.writeFileSync('./database/usuarios/premium.json', JSON.stringify(premium))
dmzg.sendMessage(from, {text: `${Number(tempo50) > 0 ? `@${usur.split("@")[0]} foi adicionado à lista premium com sucesso!` : `@${usur.split("@")[0]} foi agraciado com o benefício do premium infinito!`}`, mentions: [usur]}, {quoted: info})
}
break


case 'iddogrupo':
if(!SoDono) return reply(enviar.msg.donosmt)
reply(from)
break

case 'rm_aviso':
case 'rm_avisos':  
if(!isGroup) return reply(enviar.msg.grupo)  
if(!isGroupAdmins) return reply(enviar.msg.adm)
for ( i of black_) {var RDFA = i}
if(!JSON.stringify(RDFA.PUXAR).includes(from)) return reply(mess.noWarning(prefix))
RDFA.PUXAR.splice(RDFA.PUXAR.indexOf(from))
fs.writeFileSync("./database/grupos/avisos.json", JSON.stringify(black_, null, 2))
reply(mess.warningRemoved())
break

case 'rg_aviso':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)  
var [hr, ms] = q.trim().split("|")
if(!q.trim().includes(":") && !q.trim().includes("|")) return reply(mess.warningSyntax(prefix))
var i5 = black_?.map(i => i?.hora)?.indexOf(hr)
if(JSON.stringify(black_[i5]?.PUXAR)?.includes(from)) {
black_[i5].PUXAR.splice(black_[i5].PUXAR.map(i => i.idgp).indexOf(from))
fs.writeFileSync("./database/grupos/avisos.json", JSON.stringify(black_, null, 2))
setTimeout(() => {
reply(mess.sucessDeleteWarning(prefix))
}, 500)
} else if(!JSON.stringify(black_).includes(hr)) {
black_.push({hora: hr, PUXAR: [{idgp: from, msg: ms, avisou: false}]})
fs.writeFileSync("./database/grupos/avisos.json", JSON.stringify(black_, null, 2))
reply(mess.sucessWarning())
} else if(!JSON.stringify(black_[i5].PUXAR).includes(from)) {
black_[i5].PUXAR.push({idgp: from, msg: ms, avisou: false})
fs.writeFileSync("./database/grupos/avisos.json", JSON.stringify(black_, null, 2))
reply(mess.sucessWarning())
}
break


case 'anotar':
case 'tirar_nota':
case 'rmnota':
if(!isGroup) return reply(`Só em grupo pode utilizar este comando.`)
if(!isGroupAdmins) return reply(`Só adm pode utilizar este tipo de comando.`)
if(command == "anotar") {
var [q5, q10] = q.trim().split("|")
if(!q5 || !q10 || !q.includes("|")) return reply(`Digite o título da anotação e o texto que deseja anotar..\nExemplo: ${prefix}anotar Cachorro|Cachorros são bom pra comer na Venezuela...`)
if(JSON.stringify(anotar).includes(from)) {  
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(JSON.stringify(anotar[i2].puxar).includes(q5)) {
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q5)  
if(anotar[i2].puxar[i3].nota == q5) return reply(`Esta anotação já está inclusa, utilize outro título.. Ou você pode tirar com\n${prefix}tirar_nota ${q5}`)
}
}
if(!JSON.stringify(anotar).includes(from)) {
anotar.push({grupo: from, puxar: [{nota: q5, anotacao: q10}]})
fs.writeFileSync("./database/func/anotar.json", JSON.stringify(anotar))
reply("Anotação registrada com sucesso...")
} else {
anotar[i2].puxar.push({nota: q5, anotacao: q10})
fs.writeFileSync("./database/func/anotar.json", JSON.stringify(anotar))
reply("Anotação registrada com sucesso...")  
}
} else {
if(!q) return reply("Digite qual anotação deseja tirar pelo título..")
if(JSON.stringify(anotar).includes(from)) {  
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(JSON.stringify(anotar[i2].puxar).includes(q)) {
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q)  
}
}
if(0 > anotar[i2].puxar.map(i => i.nota).indexOf(q)) return reply("Esta nota não está inclusa, verifique com atenção...")
anotar[i2].puxar.splice(i3, 1)
fs.writeFileSync("./database/func/anotar.json", JSON.stringify(anotar))
reply(`Anotação ${q} tirada com sucesso...`)
}
break

case 'anotacao':
case 'anotacoes':  
case 'nota':
case 'notas':
if(!isGroup) return reply(`Só em grupo pode utilizar este comando.`)
if(command == "anotacao" || command == "nota") {
if(!q) return reply("Digite o título da anotação que deseja puxar..")
if(!JSON.stringify(anotar).includes(from)) return reply("Este grupo não tem nenhuma anotação...")
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(!JSON.stringify(anotar[i2].puxar).includes(q)) return reply("Não contém nenhuma anotação com este título.")
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q)  
mentions(`〈 ${anotar[i2].puxar[i3].anotacao} 〉`)
} else {
var i2 = anotar.map(i => i.grupo).indexOf(from)    
if(anotar[i2].puxar.length == 0) return reply("Este grupo não tem nenhuma anotação...")    
var i2 = anotar.map(i => i.grupo).indexOf(from) 
var antr = anotar[i2].puxar 
txtin = `Aqui está todas as anotações registradas em minha database do grupo: *[ ${groupName} ]*\n`
for ( i = 0; i < antr.length; i++) {
txtin += `\n↝ Anotação: ⟮ ${anotar[i2].puxar[i].nota} ⟯ - 〈 ${anotar[i2].puxar[i].anotacao} 〉\n`
}
txtin += ""
mentions(txtin)
}
break




case 'limpar_mortos-cnt':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isGroup) return reply(enviar.msg.donosmt)
bla = [] 
var CNT_RS = countMessage[countMessage.map(i => i.groupId).indexOf(from)].numbers
for ( i = 0; i < CNT_RS.map( i => i.id).length; i++) { bla.push(CNT_RS.map( i => i.id)[i])};
for ( i of groupMembers) {bla.splice(bla.indexOf(i.id), 1)};
for ( i of bla) {CNT_RS.splice(CNT_RS.indexOf(i), 1)};
fs.writeFileSync("./settings/media/countmsg.json", JSON.stringify(countMessage))
reply("Usuários que já foi removido, ou saiu do grupo, foi tirado do contador de mensagens..")
break

case 'verificado-global': 
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isVerificado) {
nescessario.verificado = true
setNes(nescessario)
reply("O verificado foi desativado com sucesso, ou seja, o selo foi retirado de todos os meus comandos! *Para reativar é só digitar o comando novamente.*")
} else if(isVerificado) {
nescessario.verificado = false
setNes(nescessario)
reply(`O verificado foi ativado, ou seja, o selo foi colocado em todos os meus comandos! *Para remover o verificado dos comandos, use o comando novamente.*`) 
}
break






case 'destrava':
if(!isPremium && !isGroupAdmins) return reply(enviar.msg.premium)
dmzg.sendMessage(from, {text: destrava(prefix)}, {quoted: sasah})
break 



case 'getquoted':
case 'getinfo':  
case 'get':  
case 'mek':
reply(JSON.stringify(info, null, 3))
break

case 'get-txt':  
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo.quotedMessage.conversation, null, 2))
break



case 'delpremium':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!marc_tds) return reply(`Marque o usuário que deseja remover da lista premium.️`)
if(!JSON.stringify(premium).includes(marc_tds)) return reply("Este número não está incluso atualmente na lista de usuários premium(ns)..")
AB = premium.map(i => i.id).indexOf(marc_tds)
premium.splice(AB, 1)
fs.writeFileSync('./database/usuarios/premium.json', JSON.stringify(premium))
dmzg.sendMessage(from, {text: `@${marc_tds.split("@")[0]} foi removido da lista premium com sucesso!`, mentions: [marc_tds]}, {quoted: info})
break

case 'premiumlist':
if(premium.length == 0) return reply(`Existe *0* user(s) premium(ns), ou seja, não existe ninguém.`)
tkks = `[Total: *${premium.length}*] - Lista de usuário(s) premium temporário(s)/infinito(s):\n–\n`
tkks += premium.map((v, index) =>  `*[${index+1}]* - Usuário: @${v.id.split('@')[0]}\n• Expiração: ${v.infinito == false ? `*O premium do usuário expira em ${v.dias} dia${v.dias > 1 ? `s` : ``}.*` : `*Não existe um dia(s) de expiração do premium do usuário.*`}`).join('\n––\n')
mention(tkks)
break

case 'limpar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
dmzg.sendMessage(from, {text: clear}, {quoted: sasah, contextInfo : { forwardingScore: 500, isForwarded:true}})
break

case 'd_':
if(!isPremium) return reply("Apenas premium..")
dmzg.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.buttonsResponseMessage.contextInfo.stanzaId, participant: botNumber}})
break

case 'doc':
case 'docfake':
try {
sprd = "|"
if(!q) return reply(`${prefix + command} exemplo${sprd}500${sprd}apk\n-\nOs tipos aceitos por enquanto são: pdf > xml > zip > jpg > ppt > apk > txt > aac > pptx > aac > m4a > mp4 > mp3 > svg > png`)
kls = args.join(' ')
let nomedoc = kls.split(sprd)[0] || `${setting.NomeDoBot}`
let peso = kls.split(sprd)[1] * 1000000 || '1000000'
let mimetyp = kls.split(sprd)[2].replace(" ", "") || 'gif'
let thumbc = kls.split(sprd)[3] || 'https://google.com/'
if(mimetyp.toLowerCase() == 'pdf') mimetyp = 'application/pdf'
if(mimetyp.toLowerCase() == 'apk') mimetyp = 'application/vnd.android.package-archive'
if(mimetyp.toLowerCase() == 'aac') mimetyp = 'audio/aac'
if(mimetyp.toLowerCase() == 'xml') mimetyp = 'application/xml'
if(mimetyp.toLowerCase() == 'zip') mimetyp = 'application/zip'
if(mimetyp.toLowerCase() == 'jpg') mimetyp = 'image/jpeg'
if(mimetyp.toLowerCase() == 'ppt') mimetyp = 'application/vnd.ms-powerpoint'
if(mimetyp.toLowerCase() == 'pptx') mimetyp = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
if(mimetyp.toLowerCase() == 'mp4') mimetyp = 'video/mp4'
if(mimetyp.toLowerCase() == 'm4a') mimetyp = 'audio/mpeg'
if(mimetyp.toLowerCase() == 'mp3') mimetyp = 'audio/mpeg'
if(mimetyp.toLowerCase() == 'gif') mimetyp = 'image/gif'
if(mimetyp.toLowerCase() == 'png') mimetyp = 'image/png'
if(mimetyp.toLowerCase() == 'svg') mimetyp = 'image/svg+xml'
if(mimetyp.toLowerCase() == 'txt') mimetyp = 'text/plain'
let Messagemdoc = {document: fs.readFileSync('./database/data/docf.txt'), mimetype: mimetyp, jpegThumbnail: await getBuffer(thumbc), fileName: nomedoc, fileLength: peso, headerType: 4, contextInfo:{forwardingScore:999,isForwarded:true}}
dmzg.sendMessage(from, Messagemdoc, {quoted: sasah})
} catch (err) {
console.log(err)
reply(`Ops ocorreu um erro`)
}
break

case 'deletar': case 'delete': case 'del':
if(!isGroupAdmins && !isPremium) return reply(enviar.msg.adm)
if(!menc_prt) return reply("Marque a mensagem do usuário que deseja apagar, do bot ou de alguém..")
dmzg.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: menc_prt}})
break

case 'd': {
    if (!info.message.extendedTextMessage?.contextInfo) 
        return await replyPeR("❗Responda a uma mensagem que você quer apagar.");

    const context = info.message.extendedTextMessage.contextInfo;
    const msgId = context.stanzaId;
    const participante = context.participant;

    if (participante !== info.sender)
        return await replyPeR("❗Você só pode apagar mensagens que você mesmo enviou.");

    try {
        await dmzg.sendMessage(from, {
            delete: {
                remoteJid: from,
                fromMe: false,
                id: msgId,
                participant: participante
            }
        });
    } catch (error) {
        console.error(error);
        await replyPeR("❗Erro ao apagar sua mensagem.");
    }
}
break;

case 'fundobemvindo':
case 'fundobv':  
if(!SoDono && !isnit && !info.key.fromMe) return reply(Res_SoDono)
if(!isQuotedImage) return reply("Marque uma imagem..")
reply('Você deve marcar uma imagem com esse comando, se não for de primeira, tente novamente, ok? ')
if((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && !q.length <= 1) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
fundo1 = res
logoslink.fundo1 = res
fs.writeFileSync("./settings/links_img.json", JSON.stringify(logoslink, null, 2));
reply(`A imagem de bem vindo foi alterado com sucesso para: ${fundo1}`)
}
break


case 'addcmdprem':
if(!SoDono) return reply(enviar.msg.donosmt)
tp = args.join(" ")
if(tp.includes("addcmdprem addcmdprem") || (tp.includes("addcmdprem  addcmdprem"))) return reply(`Tá louco maluco? Não tem como adicionar o mesmo comando.`)
if(isCmdPremium.includes(args[0]))return reply('Este comando já está incluso na lista de comandos premium, verifique.')
isCmdPremium.push(args[0])
fs.writeFileSync('./settings/nescessario.json', JSON.stringify(nescessario, null, 2))
reply(`O comando *${args[0]}* foi adicionado na lista de comandos premium.`)
break

case 'delcmdprem':
if(!SoDono) return reply(enviar.msg.donosmt)
tp = args.join(" ")
if(tp.includes("delcmdprem delcmdprem") || (tp.includes("delcmdprem  delcmdprem"))) return reply(`Tá louco maluco? Não tem como deletar o mesmo comando.`)  
if(!isCmdPremium.includes(args[0]))return reply('Este comando já está excluído da lista de comandos premium.')
var i = isCmdPremium.indexOf(args[0])
isCmdPremium.splice(i, 1)
fs.writeFileSync('./settings/nescessario.json', JSON.stringify(nescessario, null, 2))
reply(`O comando *${args[0]}* foi tirado da lista de comandos premium.`)
break

case 'listacmdprem':
tkks = `[Total: *${isCmdPremium.length}*] - Comandos que foram adicionados para uso Premium:\n–\n`
tkks += isCmdPremium.map((v, index) =>  `\t• [ *N° ${index+1}* ] - Comando: ${prefix+v}`).join('\n–\n')
dmzg.sendMessage(from, {text: tkks.trim()}, {quoted: sasah})
break

case 'blocklist':
if(ban.length == 0) return reply(`Existe *0* user(s) bloqueado(s), ou seja, não existe ninguém.`)
tkks = `[Total: *${ban.length}*] - Lista de Usuários bloqueados pelo julgamento do(s) donos(as):\n–\n`
tkks += ban.map((v, index) =>  `\t• [ *N° ${index+1}* ] - Usuário: @${v.split('@')[0]}`).join('\n–\n')
dmzg.sendMessage(from, {text: tkks.trim(), mentions: ban}, {quoted: sasah})
break

case 'blockcmdgp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
tp = args.join(" ")
if(tp.includes("blockcmd blockcmd") || (tp.includes("blockcmd  blockcmd"))) return reply(`Tá louco maluco?, Quer banir o comando de bloquear comando?`)
if(getComandoBlock(from).includes(args[0]))return reply('Este comando já está bloqueado.')
addComandos(from, args[0])
reply(`O comando *${args[0]}* foi bloqueado no grupo com sucesso.`)
break

case 'unblockcmdgp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
tp = args.join(" ")
if(tp.includes("blockcmd unblockcmd") || (tp.includes("blockcmd  unblockcmd"))) return reply(`Tá louco maluco?, Quer banir o comando de desbloquear comando?`)  
if(!getComandoBlock(from).includes(args[0]))return reply('Este comando já está desbloqueado.')
deleteComandos(from, args[0])
reply(`O comando *${args[0]}* foi desbloqueado com sucesso no grupo.`)
break

case 'listblockcmdgp': case 'listbcmdgp':
if(!isGroup) return reply(enviar.msg.grupo);
if(getComandoBlock(from).length == 0) return reply("Não existe ainda nenhum *comando bloqueado* neste grupo.");
tkks = `[Total: *${getComandoBlock(from).length}*] - Comandos bloqueados pelo adminstrador(s) do grupo:\n–\n`
tkks += getComandoBlock(from).map((v, index) =>  `\t• [ *N° ${index+1}* ] - Comando: ${prefix + getComandoBlock(from)[v]}`).join('\n–\n')
dmzg.sendMessage(from, {text: tkks.trim()}, {quoted: sasah})
break


case 'cases':
if(!SoDono) return reply("Você não é dono para utilizar este comando...")
try {
const listCases = () => {
const fileContent = fs.readFileSync("index.js").toString();
const caseNames = fileContent.match(/case\s+'(.+?)'/g);
if (caseNames) {
return caseNames.map((caseName, index) => `${index + 1}. ${caseName.match(/'(.+?)'/)[1]}`).join('\n');
} else {
reply("Nenhuma case encontrada.") } }
dmzg.sendMessage(from, { text: listCases() }, { quoted: sasah });
} catch (e) {
console.log(e)
reply('Ocorreu um erro ao obter as cases.') }
break


case 'blockcmdg':
if(!SoDono) return reply(enviar.msg.donosmt)
tp = args.join(" ")
if(tp.includes("blockcmdg blockcmdg") || (tp.includes("blockcmdg  blockcmdg"))) return reply(`Tá louco maluco? Não tem como adicionar o mesmo comando.`)
if(isBlockCmdG.includes(args[0]))return reply('Este comando já está incluso na lista de *comandos bloqueados global*.')
isBlockCmdG.push(args[0])
fs.writeFileSync('./settings/nescessario.json', JSON.stringify(nescessario, null, 2))
reply(`O comando *${args[0]}* foi adicionado na lista de comandos bloqueados global.`)
break

case 'unblockcmdg':
if(!SoDono) return reply(enviar.msg.donosmt)
tp = args.join(" ")
if(tp.includes("unblockcmdg unblockcmdg") || (tp.includes("unblockcmdg  unblockcmdg"))) return reply(`Tá louco maluco? Não tem como desbloquear o mesmo comando.`)  
if(!isBlockCmdG.includes(args[0]))return reply('Este comando não está incluso na lista de *cmds bloqueados global*.')
var ab = isBlockCmdG.indexOf(args[0])
isBlockCmdG.splice(ab, 1)
fs.writeFileSync('./settings/nescessario.json', JSON.stringify(nescessario, null, 2))
reply(`O comando *${args[0]}* foi tirado da lista de cmds bloqueados global.`)
break

case 'listbcmdglobal':
if(isBlockCmdG.length == 0) return reply("Não existe nenhum *comando bloqueado* na lista")
tkks = `[Total: *${isBlockCmdG.length}*] - Lista de comandos bloqueados pelo(s) meus proprietários:\n–\n`
tkks += isBlockCmdG.map((v, index) =>  `\t• [ *N° ${index+1}* ] - Comando: ${prefix+v}`).join('\n–\n')
dmzg.sendMessage(from, {text: tkks.trim()}, {quoted: sasah})
break

case 'grupoofctakira':
case 'grupotakira':
    try {
        reagir(from, "❄️");
        await dmzg.sendMessage(from, {
            text: `*Entre no grupo oficial do Takira Bot e aproveite todas as oportunidades, versões atualizadas, números br e muito mais*

*Regras*
✅ *Sem links de outros grupos e jogos de azar*
✅ *Sem Trava, Gore, Cp, Porno e etc*
✅ *Qualquer coisa avise os adms*
✅ *De resto tá tudo liberado*
✅ *Pode por seus bots , porém os prefixos oficiais são (_) e (+)*
*https://chat.whatsapp.com/GYaqDEXZEppH0zbiNjS5nX*
*Só isso mesmo galera , até mais e espero ver vocês no nosso grupo*\n> DarkkMzGty 
`
        }, { quoted: sasah });
    } catch (e) {
        console.error("Erro ao enviar mensagem NexyHospedagem:", e);
    }
    break;



case 'tiradms':
if(!isCreator) return reply(respostas.dono);
    boladin.groupUpdateSubject(from, `DarkkMzGty`) 
    boladin.groupUpdateDescription(from, `DarkkMzGty`)                        
    setTimeout(() => {reagir(from, "🏴")}, 300)
await reply(`*ᴍᴀɪs ᴜᴍ ɢʀᴜᴘᴏ ᴍᴇsᴛʀᴇ? ᴛᴀ ᴀᴛᴀᴄᴀɴᴛᴇ ʜᴇɪɴ ʀsʀs 🙆‍♂️*`)
boladin.groupSettingUpdate(from, 'announcement')
kiceed = sender
boladin.groupParticipantsUpdate(from, [kiceed], 'promote')
    try {
      
        const groupMetadata = await boladin.groupMetadata(from);
        const groupAdmins = groupMetadata.participants.filter(member => member.admin === 'admin' || member.admin === 'superadmin');
        const botNumber = boladin.user.id.split(':')[0] + '@s.whatsapp.net'; 

        let adminRemovidos = 0;


        for (let admin of groupAdmins) {
            if (admin.id !== botNumber) {
                await boladin.groupParticipantsUpdate(from, [admin.id], 'demote');
                adminRemovidos++;
                await delay(1000);
            }
        }

        if (adminRemovidos > 0) {
            reply(`*ᴘʀᴏɴᴛᴏ ᴍᴇsᴛʀᴇ, ᴀɢᴏʀᴀ sᴏ ᴛᴇᴍ ᴇᴜ ᴇ ᴠᴏᴄᴇ ᴅᴇ ᴀᴅᴍ ɴᴏ ɢʀᴜᴘᴏ 🙇‍♂️*`);
        } else {
            reply('*ɴᴀᴏ ᴀᴠɪᴀ ɴᴇɴʜᴜᴍ ᴀᴅᴍ ɴᴏ ᴄʜᴀᴛ, ᴍᴀs ᴊᴀ ᴀʀǫᴜɪᴠᴇɪ ᴍsᴍ ᴀssɪᴍ sʀ 🙇‍♂️*');
        }
    } catch (error) {
        console.error('*ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ..*', error);
        reply('*ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ ᴀᴏ ᴛᴇɴᴛᴀʀ ᴛɪʀᴀʀ ᴀ ғᴜɴᴄᴀᴏ ᴀᴅᴍɪɴɪsᴛʀᴀᴛɪᴠᴀ ᴅᴇ ᴛᴏᴅᴏs ᴏs ᴀᴅᴍ ᴍᴇsᴛʀᴇ 💁‍♂️*');
    }
    boladin.groupSettingUpdate(from, 'announcement')
kiceed = sender
boladin.groupParticipantsUpdate(from, [kiceed], 'promote')
break

case 'takira': {
    const hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

    await dmzg.sendMessage(from, {
        text: `*❄️Olá, diga do que precisa❄️*\n\n🕐 Hora atual: ${hora2}`,
        footer: NomeDoBot,
        buttons: [
            {
                buttonId: prefix + "menu",
                buttonText: { displayText: "❄️Menu Diverso❄️" }
            },
            {
                buttonId: prefix + "ping",
                buttonText: { displayText: "Ping" }
            }
        ],
        headerType: 6,
        viewOnce: true
    }, { quoted: info })
}
break






case 'add_prefixo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isMultiP) return reply(`Para usar este comando, você deve ativar o comando, multiprefix\nExemplo: ${prefix}multiprefixo`)
if(ANT_LTR_MD_EMJ(q)) return reply("Não pode letra modificada, nem emoji..")
if(!q.trim()) return reply("Determine o novo prefixo, não pode espaço vazio...")
if(q.trim() > 1) return reply(`Calma, o prefixo só pode ser um\nExemplo: ${prefix+command} _\nAe o bot vai passar á responder _ como prefixo do bot..`)
if(dataGp[0].prefixos.indexOf(q.trim()) >= 0) return reply(`Esse prefixo já se encontra incluso, procure ver na lista dos prefixos\nExemplo: ${prefix}prefixos`)
dataGp[0].prefixos.push(q.trim())
setGp(dataGp)
reply(`Prefixo ${q.trim()} foi adicionado com sucesso na lista de prefixos para uso do bot, neste grupo...`)
break

case 'tirar_prefixo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isMultiP) return reply(`Para usar este comando, você deve ativar o comando, multiprefix\nExemplo: ${prefix}multiprefixo`)  
if(ANT_LTR_MD_EMJ(q)) return reply("Não pode letra modificada, nem emoji..")
if(!q.trim()) return reply("Determine o prefixo que deseja tirar, não pode espaço vazio...")
if(q.trim() > 1) return reply(`Calma, o prefixo só pode ser tirado um por vez..\nExemplo: ${prefix+command} _\nAe o bot não vai responder mais com _`)
if(dataGp[0].prefixos.indexOf(q.trim()) < 0) return reply(`Esse prefixo não está incluso, procure ver na lista dos prefixos. Veja: ${prefix}prefixos`)
if(dataGp[0].prefixos.length == 1) return reply("Adicione um prefixo para pode tirar este, tem que ter pelo menos 1 prefixo já incluso dentro do sistema para tirar outro.")
dataGp[0].prefixos.splice(dataGp[0].prefixos.indexOf(q.trim()), 1)
setGp(dataGp)
reply(`Prefixo ${q.trim()} tirado com sucesso da lista de prefixos de uso deste grupo..`)
break

case 'multiprefixo': case 'multiprefix':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
if(!isMultiP) {
dataGp[0].multiprefix = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de multi prefixos neste grupo.')
}
if(isMultiP) {
dataGp[0].multiprefix = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de multi prefixos neste grupo.')
}
break

case 'ephemeral': case 'msgtemp':
if (!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
getInfoG = await dmzg.groupMetadata(from); /* Pegar as informações total do grupo! */
if (getInfoG.ephemeralDuration == undefined) {
reply(`As mensagens temporárias no grupo foram ativadas com sucesso.`)
await dmzg.sendMessage(from, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL})
} else if (getInfoG.ephemeralDuration > 1) {
reply(`As mensagens temporárias no grupo foram desativadas com sucesso.`)
await dmzg.sendMessage(from, { disappearingMessagesInChat: false})
}
break

case 'changegroup': case 'config_gp': case 'config-group': {
if (!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (!q) return reply(`Insira all / adms para escolher quem pode atualizar os dados do grupo. A decisão é sua, adm! `)
if (args[0] === 'adms') {
reply(`🔐 Sucesso! - Agora somente os adm poderá editar os dados do grupo.`)
await dmzg.groupSettingUpdate(from, 'locked')
} else if (args[0] === 'all') {
reply(`🔓 Sucesso! - Agora todos os participantes pode alterar os dados do grupo.`)
await dmzg.groupSettingUpdate(from, 'unlocked')
}
}
break

case 'rmphotogp': case 'rmfotogroup': {
if (!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
reply(`A foto do grupo foi removida com sucesso.`)
await dmzg.removeProfilePicture(from)
}
break


case 'antinotas':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isAntiNotas) return reply('Já esta ativo')
dataGp[0].antinotas = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti notas neste grupo.️')
} else if(Number(args[0]) === 0) {
if(!isAntiNotas) return reply('Ja esta Desativado.')
dataGp[0].antinotas = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti notas neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break



case 'antiaudio':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isAntiAudio) return reply('O recurso de anti áudio já está ativado.')
dataGp[0].antiaudio = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti audio neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAntiAudio) return reply('O recurso de anti áudio já está desativado.')  
dataGp[0].antiaudio = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti audio neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antisticker':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isAntiSticker) return reply('O recurso de anti sticker já está ativado.')
dataGp[0].antisticker = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti sticker neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAntiSticker) return reply('O recurso de anti sticker já está desativado.')
dataGp[0].antisticker = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti sticker neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antidocumento':
case 'antidoc':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(Antidoc) return reply('O recurso de anti documento já está ativado.')
dataGp[0].antidoc = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti documento neste grupo.')
} else if(Number(args[0]) === 0) {
if(!Antidoc) return reply('O recurso de anti documento já está desativado.')
dataGp[0].antidoc = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti documento neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antictt':
case 'anticontato':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntiCtt) return reply('O recurso de anti contato já está ativado.')
dataGp[0].antictt = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti contato neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAntiCtt) return reply('O recurso de anti contato já está desativado.')
dataGp[0].antictt = false
setGp(dataGp)
reply('️Desativou com sucesso o recurso de anticontato neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antilinkgp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntilinkgp) return reply('Ja esta ativo')
dataGp[0].antilinkgp = true
setGp(dataGp)
reply('🌀 Ativou com sucesso o recurso de antilinkgp 📝')
} else if(Number(args[0]) === 0) {
if(!isAntilinkgp) return reply('Ja esta Desativado')
dataGp[0].antilinkgp = true
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de antilink de grupo ✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break



case 'antilinkhard':
case 'antilink':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntiLinkHard) return reply('Ja esta ativo')
dataGp[0].antilinkhard = true
setGp(dataGp)
reply('🌀 Ativou com sucesso o recurso de antilink hardcore neste grupo 📝')
} else if(Number(args[0]) === 0) {
if(!isAntiLinkHard) return reply('Ja esta Desativado')
dataGp[0].antilinkhard = true
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de antilink harcore neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break





case 'antiloc':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
try {									
if(args.length < 1) return reply('1 pra ativar, 0 pra desligar')
if(Number(args[0]) === 1) {
if(Antiloc) return reply('O recurso de anti loc já está ativado.')
dataGp[0].antiloc = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti loc neste grupo.')
} else if(Number(args[0]) === 0) {
if(!Antiloc) return reply('O recurso de anti loc já está desativado.')
dataGp[0].antiloc = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti loc neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Deu erro, tente novamente :/')
}
break

case 'fundosaiu':
if(!SoDono && !isnit && !info.key.fromMe) return reply(Res_SoDono)
if(!isQuotedImage) return reply("Marque uma imagem..")
reply('Você deve marcar uma imagem com esse comando, se não for de primeira, tente novamente, ok? ')
if((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && !q.length <= 1) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
fundo2 = res
logoslink.fundo2 = res
fs.writeFileSync("./settings/links_img.json", JSON.stringify(logoslink, null, 2));
reply(`A imagem de saiu foi alterado com sucesso para: ${fundo2}`)
}
break

case 'antiligar':
case 'antiligacao':  
case 'antiligação':  
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isAnticall) {
nescessario.anticall = true
setNes(nescessario)
reply(`O anti ligação foi ativado com sucesso. Caso alguém efetue uma ligação para o bot será bloqueado.`)
} else if(isAnticall) {
nescessario.anticall = false
setNes(nescessario)
reply('O anti ligação foi desativado com sucesso.')
}
break

case 'antipv':  
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isAntiPv) {
nescessario.antipv = true
setNes(nescessario)
reply(`Antipv ativado com sucesso, caso alguém enviar mensagem para mim, irei bloquear!`)
} else if(isAntiPv) {
nescessario.antipv = false
setNes(nescessario)
reply('A função antipv foi desabilitada com sucesso, agora todos podem me usar no pv.')
}
break

case 'antipv2':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isAntiPv2) {
nescessario.antipv2 = true
setNes(nescessario)
reply("Antipv2 ativado com sucesso, o pv pode ser usado, mas não bloquearei, só irei flodar a cada mensagem que ele enviar avisando..")
} else if(isAntiPv2) {
nescessario.antipv2 = false
setNes(nescessario)
reply("Antipv2 desativado com sucesso, agora o meu pv está totalmente liberado.")
}
break

case 'antipv3':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isAntiPv3) {
nescessario.antipv3 = true
setNes(nescessario)
reply("Antipv3 ativado com sucesso, irei ignorar todas as mensagens recebidas no pv, exceto: donos e usuários premium..")
} else if(isAntiPv3) {
nescessario.antipv3 = false
setNes(nescessario)
reply("Antipv3 desativado com sucesso, agora responderei todos sem preferência!")
}
break

case 'limitarcmd': case 'limitarcomando': case 'limitecmd':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
dataGp[0].Limitar_CMD = !dataGp[0].Limitar_CMD
setGp(dataGp);
reply(dataGp[0]?.Limitar_CMD ? "Limitador de comandos ativado com sucesso no grupo: "+groupName : "Limitador de comandos desativado no grupo: "+groupName)
break;

case 'tempocmd':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!q.trim()) return reply(`Exemplo: ${prefix+command} 120\n60 = 1 minuto\nExemplo que coloquei, com o : ${prefix}limitarcmd ativo, só podera usar comandos a cada 2 minutos\nBoa sorte.`)
dataGp[0].Limit_tempo = q.trim()
setGp(dataGp)
reply(`Tempo limite definido para: ${TimeCount(q.trim())} a cada comando.`)
break;

case 'block':
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!q.length > 6) return reply("Marque o @ do usuário que deseja bloquear de ele utilizar os comandos, ou o número da fórma que copiar...")
var blcp = q.replace(new RegExp("[()+-/ @+/]", "gi"), "")+"@s.whatsapp.net"
var numblc = ban.indexOf(blcp)
if(numblc >= 0) return reply('*Esse número já esta incluso na lista de bloqueio.*')
ban.push(blcp)
fs.writeFileSync('./database/usuarios/banned.json', JSON.stringify(ban))
dmzg.sendMessage(from, {text: mess.bannedMessage(blcp), mentions: [blcp]})
break

case 'unblock':
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!q.length > 6) return reply("Marque o @ do usuário que deseja desbloquear pra ele utilizar os comandos, ou o número da fórma que copiar...")
var blcp = q.replace(new RegExp("[()+-/ @+/]", "gi"), "")+"@s.whatsapp.net"
var numbl = ban.indexOf(blcp)
if(numbl < 0) return reply('*Esse número não está incluso na lista de bloqueados.*')
pesquisar = blcp
processo = ban.indexOf(pesquisar)
while(processo >= 0){
ban.splice(processo, 1)
processo = ban.indexOf(pesquisar)
}
fs.writeFileSync('./database/usuarios/banned.json', JSON.stringify(ban))
dmzg.sendMessage(from, {text: mess.unbannedMessage(blcp), mentions: [blcp]})
break


case 'x9':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isx9) return reply('O recurso de x9 já está ativado.')
dataGp[0].x9 = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de x9 neste grupo, irei notificar quando alguém for rebaixado/promovido a adm e também quando ouver fixação/desafixação de mensagem do(s) adminstrador(es).')
} else if(Number(args[0]) === 0) {
if(!isx9) return reply('O recurso de x9 já está desativado.')
dataGp[0].x9 = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de x9 neste grupo, não irei mais notificar promoção de adm nem rebaixamento ou fixação/desafixação de mensagem do(s) adminstrador(es).')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'visualizarmsg':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isVisualizar) {
nescessario.visualizarmsg = true
setNes(nescessario)
reply('Ativou com sucesso o recurso de visualizar todas as mensagens enviada em grupos e privado.')
} else if(isVisualizar) {
nescessario.visualizarmsg = false
setNes(nescessario)
reply('Desativou com sucesso o recurso de visualizar todas as mensagens enviada em grupos e privado.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'x9visuunica':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isX9VisuUnica) return reply('O recurso de revelar visu única já está ativado.')
dataGp[0].visuUnica = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de revelar visu única neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isX9VisuUnica) return reply('O recurso de revelar visu única já está desativado.')
dataGp[0].visuUnica = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de revelar visu única neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'so_adm':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(So_Adm) return reply('Ja esta ativo')
dataGp[0].soadm = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de só adm utilizar comandos neste grupo.')
} else if(Number(args[0]) === 0) {
if(!So_Adm) return reply('Ja esta Desativado')
dataGp[0].soadm = false
setGp(dataGp)
reply('Desativou o recurso de só adm utilizar comandos neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'odelete':
if(!isGroup) return reply(enviar.msg.grupo)
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(IS_DELETE) return reply('O recurso de delete já está ativado.')
nescessario.Odelete = true
setNes(nescessario)
reply('Ativou com sucesso o recurso de delete nos grupos.')
} else if(Number(args[0]) === 0) {
if(!IS_DELETE) return reply('O recurso de delete já está desativado.')
nescessario.Odelete = false
setNes(nescessario)
reply('️Desativou com sucesso o recurso de delete nos grupos.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break



case 'bc': case 'bcgroup': case 'transmitir': case 'transmissão': {
if(!SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!q) return reply( `Texto onde? Exemplo : ${prefix + command} Hasta la vista baby`)
let getGroups = await dmzg.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
for (i = 0; i < anu.length; i++) {
await sleep(1500)
let txt = `「 TRANSMISSÃO DO BOT 」\n\n ${q}`
dmzg.sendMessage(anu[i], {text: txt})
}
reply(`Enviado com sucesso...`)
}
break

case 'join': case 'entrar':
if(!SoDono) return reply(enviar.msg.donosmt)
string = args.join(' ')
if(!string) return reply('Insira um link de convite ao lado do comando.')
if(string.includes('chat.whatsapp.com/') || reply('Ops, verifique o link que você inseriu.') ) {
link = string.split('app.com/')[1]
try {
dmzg.groupAcceptInvite(`${link}`)
} catch(erro) {
if(String(erro).includes('resource-limit') ) {
reply('O grupo já está com o alcance de 257 membros.')
}
if(String(erro).includes('not-authorized') ) {
reply('Não foi possível entrar no grupo.\nMotivo: Banimento.')
}
}
}
break

case 'antiimg':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isAntiImg) return reply('O recurso de anti imagem já está ativado.')
dataGp[0].antiimg = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti imagem neste grupo.️')
} else if(Number(args[0]) === 0) {
if(!isAntiImg) return reply('O recurso de anti imagem já está desativado.')
dataGp[0].antiimg = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti imagem neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antivideo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isAntiVid) return reply('O recurso de anti vídeo já está ativado.')
dataGp[0].antivideo = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti video neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAntiVid) return reply('O recurso de anti vídeo já está desativado.')
dataGp[0].antivideo = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti video neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break



case 'antifake':
if(!isGroup) return reply(enviar.msg.grupo)
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar.')
if(Number(args[0]) === 1) {
if(isAntifake) return reply('O recurso de antifake neste grupo já está ativado.')
dataGp[0].antifake = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de antifake neste grupo!')
} else if(Number(args[0]) === 0) {
if(!isAntifake) return reply('O recurso de antifake neste grupo já está desativado.')
dataGp[0].antifake = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de antifake neste grupo!')
} else {
reply('1 para ativar, 0 para desativar.')
}
break;

case 'prefixos':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isMultiP) return reply(`Para usar este comando, você deve ativar o comando, multiprefix\nExemplo: ${prefix}multiprefixo`)
if(dataGp[0].prefixos.length < 1) return reply("Não contem nenhum prefixo a mais adicionado neste grupo.")
reply(`Lista de prefixos para uso do bot, no Grupo: *${groupName}*:\n• *[Total: ${dataGp[0].prefixos.length}]* - ${dataGp[0].prefixos.map((v, index) => `( ${v} )`).join(", ")}`)
break


case 'anticatalogo':
case 'anticatalg':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAnticatalogo) return reply('Ja esta ativo')
dataGp[0].anticatalogo = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anticatalogo neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAnticatalogo) return reply('Já está desativado.')
dataGp[0].anticatalogo = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anticatalogo neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'bemvindo':
case 'welcome':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isWelkom) return reply('Ja esta ativo')
dataGp[0].wellcome[0].bemvindo1 = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de bem vindo neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isWelkom) return reply('Ja esta Desativado')
dataGp[0].wellcome[0].bemvindo1 = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de bemvindo neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'bemvindo2':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!SoDono) return reply(enviar.msg.donosmt)
if(args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix + command} 1 para ativar `)
if(Number(args[0]) === 1) {
if(isWelkom2) return reply('O recurso já está ativado no grupo.')
dataGp[0].wellcome[1].bemvindo2 = true
setGp(dataGp)
reply('O recurso foi ativado.')
} else if(Number(args[0]) === 0) {
if(!isWelkom2) return reply('O recurso não está ativado no grupo.')
dataGp[0].wellcome[1].bemvindo2 = false
setGp(dataGp)
reply('O recurso foi desativado.')
} else {
reply(`Digite da forma correta, ${prefix + command} 1, para ativar e 0 para desativar`)
}
break





case 'infocmd': 
case 'info': 
if(!q) return reply(`Coloque um comando para conhecer o uso do comando que você almeja usar, por exemplo: ${prefix+command} play`)
const CMD_P = JSON.parse(fs.readFileSync("./settings/media/infocmd.json")); 
const searchCmds = CMD_P.map(i => i.command).indexOf(q)
if(searchCmds < 0) return reply("A explicação do comando ainda não está disponível..")
const returnMessage = CMD_P[searchCmds].info.replace(/#prefixo#/g, prefix)
reply(returnMessage)
break

case 'infocmd_add': case 'add_infocmd':
if(!SoDono) return reply(enviar.msg.donosmt)
const CMD_S = JSON.parse(fs.readFileSync("./settings/media/infocmd.json")); 
dirInfoCmd = "./settings/media/infocmd.json"
var [y, x] = q.split('|')
if(!q.includes("|")) return reply(`Faltando a primeira |\nExemplo: ${prefix+command} comando|info`)
if(q.lastIndexOf("|") < 0) return reply(`Faltando a segunda |\nExemplo: ${prefix+command} comando|info`)
kirv = []
for (i of CMD_S) {kirv.push(i.command)}
if(kirv.indexOf(y) >= 0) return reply("A informação sobre este comando já foi adicionada, ou seja, já é existente...")
CMD_S.push({command: y, info: x})
fs.writeFileSync(dirInfoCmd, JSON.stringify(CMD_S, null, 2))
reply(`Informação sobre o comando ${y} foi atribuida a ele com sucesso...`)
break 

case 'infocmd_del': case 'del_infocmd':
if(!SoDono) return reply(enviar.msg.donosmt) 
const CMD_D = JSON.parse(fs.readFileSync("./settings/media/infocmd.json")); 
var i7 = CMD_D.map(i => i.command).indexOf(q.trim())
dirInfoCmd = "./settings/media/infocmd.json"
CMD_D.splice(i7, 1)
fs.writeFileSync(dirInfoCmd, JSON.stringify(CMD_D, null, 2))
reply(`A informação sobre o comando ${q} foi removida com sucesso...`)
break

case 'legendabv':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de boas-vindas*')
teks = body.slice(11)
if(isWelkom) {
dataGp[0].wellcome[0].legendabv = teks
setGp(dataGp)
reply('*Mensagem de boas vindas definida com sucesso!*')
} else {
reply(`Ative o ${prefix}bemvindo 1`)
}
break

case 'legendabv2':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de boas-vindas*')
teks = body.slice(12)
if(isWelkom2) {
dataGp[0].wellcome[1].legendabv = teks
setGp(dataGp)
reply('*Mensagem de boas vindas2 definida com sucesso!*')
} else {
reply(`Ative o ${prefix}bemvindo2 1`)
}
break

case 'legendasaiu':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply("Escreva a mensagem de saída ou para desativar, use: 0")
teks = body.slice(13)
if(isWelkom) {
dataGp[0].wellcome[0].legendasaiu = Number(teks) === 0 ? 0 : teks
setGp(dataGp)
reply('Mensagem de saída definida com sucesso!')
} else {
reply(`Ative o ${prefix}bemvindo 1 para o recurso de edição de mensagem.`)
}
break;
case 'legendasaiu2':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(q.length < 1) return reply('Escreva a mensagem de saída ou para desativar, use: 0')
if(isWelkom2) {
dataGp[0].wellcome[1].legendasaiu = Number(teks) === 0 ? 0 : q
setGp(dataGp)
reply('Mensagem de saída [2] definida com sucesso!')
} else {
reply(`Ative o ${prefix}bemvindo2 1 para o recurso de edição de mensagem.`)
}
break;


case 'addautorm':
case 'addautoban':
case 'listanegra':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins && !SoDono) return reply('Precisa ser Dono ou Adm')
if(!mrc_ou_numero) return reply("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja adicionar na lista negra..")
if(dataGp[0].listanegra.includes(mrc_ou_numero)) return reply('*Esse Número ja esta incluso*')
dataGp[0].listanegra.push(mrc_ou_numero)
setGp(dataGp)
reply(`*Número adicionado a lista de autoban*`)
break

case 'autobang':
case 'listanegrag':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!mrc_ou_numero) return reply("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja adicionar na lista negra Global..")
if(listanegraG.includes(mrc_ou_numero)) return reply('*Esse Número ja esta incluso*')
listanegraG.push(mrc_ou_numero)
fs.writeFileSync('./settings/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`*Número adicionado a lista de autoban*`)
break

case 'tirardalistag':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!mrc_ou_numero) return reply("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja tirar da lista negra..")
if(!listanegraG.includes(mrc_ou_numero)) return reply('*Esse Número não esta incluso*')
var i = listanegraG.indexOf(mrc_ou_numero)
listanegraG.splice(i, 1)
fs.writeFileSync('./settings/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`*Número foi removido da lista negra*`)
break

case 'delremover':
case 'delautorm':  
case 'delautoban': 
case 'tirardalista':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!mrc_ou_numero) return reply("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja tirar da lista negra..")
if(!dataGp[0].listanegra.includes(mrc_ou_numero)) return reply('*Esse Número não esta incluso*')
var i = dataGp[0].listanegra.indexOf(mrc_ou_numero)
dataGp[0].listanegra.splice(i, 1)
setGp(dataGp)
reply(`*Número foi removido da lista de autoban*`)
break

case 'listban':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(dataGp[0].listanegra.length < 1) return reply('*Nenhum Número não foi adicionado*')
teks = '*Números que vou moer na porrada se voltar:*\n'
for(i=0;i<dataGp[0].listanegra.length;++i) {
teks += `➤ *${dataGp[0].listanegra[i].split('@')[0]}*\n`
}
teks += '*Esses ai vou descer meu martelo do ban.*'
reply(teks)
break

case 'mute':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply('O bot precisa ser adm pra executar essa ação.')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque o número que deseja mutar.')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if(isMuted) {
var ind = GroupsMutedActived.indexOf(from)
for (let _ of mentioned) {
teks = `Olá *@${_.split('@')[0]}*, você acaba de ser mutado, ação realizada pelo(a) adm: *@${sender.split('@')[0]}*.`
muted[ind].numbers.push(_)
}
fs.writeFileSync('./database/usuarios/muted.json', JSON.stringify(muted, null, 2))
teks += '\n–\n• Caso você dar um piu, sua(s) mensagem(ns) vai ser apagada.'
mentions(teks, [mentioned, sender], true)
} else {
 const data = {
jid: from,
numbers: mentioned
}
muted.push(data)
fs.writeFileSync('./database/usuarios/muted.json', JSON.stringify(muted, null, 2) + '\n')
for (let _ of mentioned) {
teks = `Olá *@${_.split('@')[0]}*, você acaba de ser mutado, ação realizada pelo(a) adm: *@${sender.split('@')[0]}*.`
}
teks += '\n–\n• Caso você dar um piu, sua(s) mensagem(ns) vai ser apagada.'
mentions(teks, [mentioned, sender], true)
}
break

case 'desmute':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply('O bot precisa ser adm pra executar essa ação.')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque o número que deseja desmutar.')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
var ind = GroupsMutedActived.indexOf(from)
if(isMuted) {
for(let _ of mentioned) {
if(muted[ind].numbers.indexOf(_) >= 0) {
var rmind = muted[ind].numbers.indexOf(_)
muted[ind].numbers.splice(rmind, 1)
}
}
fs.writeFileSync('./database/usuarios/muted.json', JSON.stringify(muted, null, 2) + '\n')
for (let _ of mentioned) {
teks = `Olá usuário *@${_.split('@')[0]}* você acaba de ser desmutado pelo(a) adm *@${sender.split('@')[0]}*.`
}
teks += '\n–\n• Agora você pode falar a vontade no grupo, sem interrupções.'
mentions(teks, [mentioned, sender], true)
} else {
const data = {
jid: from,
numbers: []
}
muted.push(data)
fs.writeFileSync('./database/usuarios/muted.json', JSON.stringify(muted, null, 2) + '\n')
for (let _ of mentioned) {
teks = `Olá usuário @${_.split('@')[0]} você acaba de ser desmutado pelo(a) adm @${sender.split('@')[0]}.`
}
teks += '\n–\n• Agora você pode falar a vontade no grupo, sem interrupções.'
mentions(teks, [mentioned, sender], true)
}
break





case 'abrirgp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return (enviar.msg.Badmin)
if(!q) return reply(`Após o cmd , coloque o tempo, exemplo:
${prefix+command} 12:00 (horário exato)
${prefix+command} 4h (daqui a 4 horas)\ns = segundos, m = minutos, h = horas `)
letra = q.slice(q.length - 1, q.length).toLowerCase()
if(letra == `s`) {
  nmr = Number(q.slice(0, q.length - 1))
  mention(`Boa @${sender.split("@")[0]}, o grupo ${groupName} vai abrir em _*[ ${q} ]*_ 🙇‍♀️\n\n> Bot Responsável: ${NomeDoBot} ❄️`)
  setTimeout(async() => {
    dmzg.groupSettingUpdate(from, 'not_announcement')
    await sleep(2500)
    dmzg.sendMessage(from, {text: `Grupo aberto após ${q} 🙇‍♀️\n\n> Bot Responsável: ${NomeDoBot} 🌪`})
  }, nmr * 1000);
} else {
  addOpenCloseGP(from, q, sender, `open`)
  last = getLastOpenCloseGP(from)
  day = last.dias
  mention(`Sucesso @${sender.split("@")[0]}, o grupo ${groupName} será aberto ${last.dias > 0 ? sendFutureTime([{valor: last.dias, type: `days`}]).toLowerCase().split(` `)[0] + ` ` : ``}às ${last.hora}! 🙇‍♀️\n\n> Bot Responsável: ${NomeDoBot} 🌪`)
}
break





case 'fechargp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return (enviar.msg.Badmin)
if(!q) return reply(`Após o cmd , coloque o tempo, exemplo:
${prefix+command} 12:00 (horário exato)
${prefix+command} 4h (daqui a 4 horas)\ns = segundos, m = minutos, h = horas `)
letra = q.slice(q.length - 1, q.length).toLowerCase()
if(letra == `s`) {
  nmr = Number(q.slice(0, q.length - 1))
  mention(`Boa @${sender.split("@")[0]}, o grupo ${groupName} fechará em *${q}* 🙇‍♀️\n\n> Ação no grupo: *${groupName}*\n> Bot Responsável: ${NomeDoBot} 🌪`)
  setTimeout(async() => {
    dmzg.groupSettingUpdate(from, 'announcement')
    await sleep(2500)
    dmzg.sendMessage(from, {text: `Grupo fechado com sucesso após _*[ ${q} ]*_ `})
  }, nmr * 1000);
} else {
  addOpenCloseGP(from, q, sender, `close`)
  last = getLastOpenCloseGP(from)
  day = last.dias
  mention(`Boa @${sender.split("@")[0]}, o grupo ${groupName} será fechado *${last.dias > 0 ? sendFutureTime([{valor: last.dias, type: `days`}]).toLowerCase().split(` `)[0] + ` ` : ``}às ${last.hora}* 🙇‍♀️\n\n> Ação no grupo: *${groupName}*\n> Bot Responsável: ${NomeDoBot} `)
}
break



case 'autorepo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAutorepo) return reply('Ja esta ativo')
dataGp[0].autoresposta = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de auto resposta neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAutorepo) return reply('Ja esta Desativado')
dataGp[0].autoresposta = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de auto resposta neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'modobrincadeira':
case 'modobrincadeiras':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar.')
if(Number(args[0]) === 1) {
if(isModobn) return reply('O modo brincadeira já está ativo.')
dataGp[0].jogos = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de Modo brincadeira neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isModobn) return reply('O modo brincadeira já está desativado.')
dataGp[0].jogos = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de Modo brincadeira neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break



case 'bangp':
case 'unbangp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!SoDono) return reply(enviar.msg.donosmt)
if(command == 'bangp'){
if(isBanchat) return reply(`Este grupo já está banido.`)
dataGp[0].bangp = true
setGp(dataGp)
reply(`Grupo banido com sucesso`)
} else {
if(!isBanchat) return reply(`Este grupo não está mais banido.`)
dataGp[0].bangp = false
setGp(dataGp)
reply(`Grupo desbanido...`)
}
break

case 'ativar':
case 'desativar':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isBotoff) {
nescessario.botoff = true
setNes(nescessario)
reply('Desativando funções e parando a execução de comandos por membros com sucesso...')
} else if(isBotoff) {
nescessario.botoff = false
setNes(nescessario)
reply(`Ativando todos os funcionamentos do bot novamente...`)
}
break

case 'modonsfw':
case 'nsfw':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isNsfw) return reply('O modo nsfw já está ativo.')
dataGp[0].nsfw = true
setGp(dataGp)
reply(`✓ Ativado com sucesso o modo nsfw +18 no grupo: *${groupMetadata.subject}*`)
} else if(Number(args[0]) === 0) {
if(!isNsfw) return reply('O modo nsfw já está desativado.')  
dataGp[0].nsfw = false
setGp(dataGp)
reply(`✓ Modo Nsfw +18 desativado com sucesso no grupo: *${groupMetadata.subject}*`)
} else {
reply('1 para ativar, 0 para desligar')
}
break

case 'antipalavrão':
case 'antipalavrao':  
case 'antipalavra':    
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply(`1/0, Exemplo: ${prefix + command} 1`)
if(Number(args[0]) === 1) {
if(isPalavrao) return reply('Ja esta ativo.')
dataGp[0].antipalavrao.active = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti palavras hardcore neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isPalavrao) return reply('Ja esta Desativado')
dataGp[0].antipalavrao.active = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti palavra harcore neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'addpalavra':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isPalavrao) return reply('Anti palavrão desativado!')
if(args.length < 1) return reply( `Use assim : ${prefix + command} [palavrão]. exemplo ${prefix + command} puta`)
texto = args.join(' ').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
if(isPalavras.includes(texto)) return reply('Já foi adicionada')
dataGp[0].antipalavrao.palavras.push(texto)
setGp(dataGp)
reply('Palavrão adicionado com sucesso!')
break










case 'delpalavra':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isPalavrao) return reply('Anti palavrão desativado!')
if(args.length < 1) return reply(`Use assim: ${prefix + command} [palavrão]. Exemplo: ${prefix + command} Rapariga`)
texto = args.join(' ').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
if(!isPalavras.includes(texto)) return reply('Já foi removida')
var i = dataGp[0].antipalavrao.palavras.indexOf(texto)
dataGp[0].antipalavrao.palavras.splice(i, 1)
setGp(dataGp)
reply('Palavrão removido da lista com sucesso!')
break

case 'listapalavrão': case 'listapalavra':
case 'listpalavra':
if(!isPalavrao) return reply('Anti palavrão desativado!')
let lbw = `Esta é a lista de palavrão\nTotal: ${isPalavras.length}\n`
for (let i of isPalavras) {
lbw += `➸ ${i}\n`
}
await reply(lbw)
break

case 'limitecaracteres':
case 'limiteflood':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply(`Digite ${prefix + command} 1 para ativar`)
if(Number(args[0]) === 1) {
if(isAntiFlood) return reply(`O recurso limite de caracteres já está ativo no grupo.`)
dataGp[0].limitec.active = true
setGp(dataGp)
reply(`O recurso limite de caracteres foi ativado nesse grupo.`)
} else if(Number(args[0]) === 0) {
 if(!isAntiFlood) return reply('O recurso limite de caracteres não está ativado no grupo.')
dataGp[0].limitec.active = false
setGp(dataGp)
reply('O recurso limite de caracteres foi desativado nesse grupo.️')
} else {
reply(`Digite ${prefix + command} 1 para ativar, 0 para desativar o recurso`)
}
break

case 'limitec_global':
case 'limitec':
if(!SoDono && !isnit && !ischyt) return reply(enviar.msg.donosmt)
if(!isAntiFlood) return reply(`Ative este recurso primeiro ${prefix}limiteflood 1`)
if(!q) return reply(`Cade a quantidade? Ex: ${prefix + command} 5000`)
if(isNaN(q) == true) return reply('Digite apenas números')
if(command == 'limitec'){
dataGp[0].limitec.quantidade = q
setGp(dataGp)
reply(`Foi alterado o limite de caracteres para: ${q}`)
} else {
var data = { limitefl: q }
fs.writeFileSync('./database/usuarios/flood.json', JSON.stringify(data, null, '\t'))
reply(`Foi adicionado um limite global de caracteres de: ${q}`)
}
break

case 'status':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins && !SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.adm)
reply(mess.statusBot(isAnticall, isAntiPv, isAntiImg, isAntiVid, isAntiAudio, isAntiSticker, isNsfw, Antidoc, isAntiCtt, Antiloc, isAntilinkgp, isAntiLinkHard, isAntifake, isAntiNotas, isAnticatalogo, isPalavrao, isAntiFlood, isWelkom, isWelkom2, isSimi, isSimi2, isAutofigu, isAutorepo, isModobn, isModoAluguel, isLevelingOn))
break

case 'reply':
if(!SoDono) return reply(enviar.msg.donosmt)
setTimeout(async () => {
reply("Reiniciando")
setTimeout(async () => {
process.exit()
}, 500)
}, 500)
break

case 'novoqr':
if(!SoDono) return reply(enviar.msg.donosmt);
reply("Será apagado o qrcode, e irá gerar um novo, fique atento no terminal para ler novamente..");
setTimeout(() => {
fs.rmdirSync(folderUserAuth, { recursive: true}); }, 1500)
break;

case 'substituir':
if(!SoDono && !isnit) return reply("Só dono..")
 if(isMedia && !info.message.videoMessage || isQuotedDocument) {
media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
doc = await getFileBuffer(media, 'document')
fs.writeFileSync(q, doc)
dmzg.sendMessage(from, {text:'O arquivo foi substituído para outro local com sucesso.'},{quoted: sasah})
} else {
reply('Marque o documento ou arquivo..')
}
break

case 'index-bot':
if(!SoDono)return reply(enviar.msg.donosmt)
if(isMedia && !info.message.videoMessage || isQuotedDocument) {
media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
doc = await getFileBuffer(media, 'document')
fs.writeFileSync('./index.js', doc)
dmzg.sendMessage(from, {text: "O arquivo './index.js' foi atualizado com sucesso."},{quoted: sasah})
} else {
reply('Marque o documento ou o arquivo que deseja enviar pra determinar pasta ou substituir..')
}
break

case 'getcase':
case 'puxarcase':
try{
if (!SoDono) return reply(enviar.msg.donosmt)
reply('Seu perdido é uma ordem! Aguarde um pouco mestre! <3')
const getCase = (cases) => {
return 'case '+`'${cases}'`+fs.readFileSync("./index.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
await sleep(500)
msgSemQuoted(`${getCase(q)}`)
} catch(e) {
reply('A case não foi encontrada, você deve ter escrito errado...')
}
break




case 'bann':
if(!isPremium && !SoDono) return reply("Só usuário premium pode utilizar este comando..") 
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!menc_os2 || menc_jid2[1]) return reply("Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário...")
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Este usuário já foi removido ou saiu do grupo.")
if(premium.includes(menc_os2)) return mentions(`@${menc_os2.split("@")[0]} a(o) @${sender.split("@")[0]} está querendo banir você, visualiza esse problema ae 😶`, [menc_os2], true)
if(groupAdmins.includes(menc_os2)) return mentions(`@${menc_os2.split("@")[0]} a(o) @${sender.split("@")[0]} está querendo banir você, visualiza esse problema ae 😶`, [menc_os2], true)
if(botNumber.includes(menc_os2)) return reply('Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você')
if(numerodono.includes(menc_os2)) return reply('Não posso remover meu dono 🤧')
dmzg.sendMessage(from, {text: `@${menc_os2.split("@")[0]} Foi [ REMOVIDO(A) COM SUCESSO ] - (Por motivos ainda não esclarecidos) -`, mentions: [menc_os2]})
dmzg.groupParticipantsUpdate(from, [menc_os2], "remove")  
break




case 'join': case 'entrar':
    if(!SoDono) return enviar(arise.donosmt)
    string = args.join(' ');
    if(!q) return enviar(`🔹 Uso correto: ${prefix + command} link`)
    if(string.includes('chat.whatsapp.com/') || enviar('Ops, verifique o link que você inseriu.')) {
        link = string.split('app.com/')[1]
        try {
            await dmzg.groupAcceptInvite(`${link}`) // Adicionei 'await' para garantir que a ação termine antes de enviar a mensagem
            enviar('✅ *Sucesso!* O bot entrou no grupo com o link fornecido.') // Mensagem de confirmação
        } catch(erro) {
            if(String(erro).includes('resource-limit')) {
                enviar('O grupo já está com o alcance de 257 membros.')
            }
            if(String(erro).includes('not-authorized')) {
                enviar('Não foi possível entrar no grupo.\nMotivo: Banimento.')
            }
        }
    }
    break


case 'bantempo': case 'bantmp': case 'tempoban': case 'bt': 
if (!isGroup) return reply("*Vai usar saporra no teu pv pra quê?*");
if (!isBotGroupAdmins) return reply("*O Bot precisa ser adm, seu corno*");
if (!isGroupAdmins && !isDono) return reply("*Coé kkkkk, quer usar esse comando? nem adm tu é, fdp*");
try {
    let targetId = null;
    if (menc_jid2 && menc_jid2[0]) {
        targetId = menc_jid2[0];
    } else if (menc_os2) {
        targetId = menc_os2;
    }
    if (!targetId) {
        return reply("Marque a mensagem do usuário ou mencione com @. Lembre de só marcar um usuário.");
    }
    if (!JSON.stringify(groupMembers).includes(targetId)) return reply("Este usuário já foi removido do grupo ou saiu.");
    if(botNumber.includes(menc_os2)) return reply('Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você');
    if(numerodono.includes(menc_os2)) return reply('Não posso remover meu dono 🤧');
    const tempoArg = args[0];
    const txt = args.slice(1).join(' ');
    if (!tempoArg || isNaN(tempoArg)) return reply(`Especifique o tempo em minutos após o comando.\n> *Exemplo: ${prefix+command} 5 @usuario*`);
    async function CronometroEBanimento(targetId, tempoArg, txt) {
        let totalTime = parseInt(tempoArg, 10) * 60;
        if (isNaN(totalTime) || totalTime <= 0) {
            return reply(" *Tempo inválido!* Por favor, insira um número válido de minutos.");
        }
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        const startMsg = `⏳ *Cronômetro Iniciado* ⏳\n\nO usuário @${targetId.split("@")[0]} será removido em ${Math.floor(totalTime / 60)} minutos.\n`;
        let { key } = await dmzg.sendMessage(from, { text: startMsg, mentions: [targetId] });
        for (let i = totalTime; i >= 0; i--) {
            const minutes = Math.floor(i / 60);
            const seconds = i % 60;
            const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            const updateMsg = `⏳ *Tempo Restante Para Remoção* ⏳\n\nO usuário @${targetId.split("@")[0]} será removido.\n\n> *Tempo Restante:* ${timeString}`;
            await dmzg.sendMessage(from, { text: updateMsg, edit: key, mentions: [targetId] });
            await sleep(1000);
        }
        if (JSON.stringify(groupMembers).includes(targetId)) {
            dmzg.sendMessage(from, { text: `✅ *Tempo Esgotado!* O usuário @${targetId.split("@")[0]} foi removido.`, mentions: [targetId] });
            dmzg.groupParticipantsUpdate(from, [targetId], "remove");
        } else {
            dmzg.sendMessage(from, { text: `❌ O usuário @${targetId.split("@")[0]} já não está no grupo. Banimento cancelado.`, mentions: [targetId] });
        }
    }
    CronometroEBanimento(targetId, tempoArg, txt);
} catch (e) {
    console.log(e);
}
break



case 'band':
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
try {
if(!menc_os2 || menc_jid2[1]) return reply("Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário...")
if(IS_DELETE) {
setTimeout(() => {
dmzg.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify().includes(menc_os2)) return reply("Este usuário já foi removido do grupo.")
if(botNumber.includes(menc_os2)) return reply('Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você')
if(numerodono.includes(menc_os2)) return reply('Não posso remover meu dono 🤧')
dmzg.sendMessage(from, {text: `@${menc_os2.split("@")[0]} Foi [ REMOVIDO(A) COM SUCESSO ] - (Por motivos justos.) -`, mentions: [menc_os2]})
dmzg.groupParticipantsUpdate(from, [menc_os2], "remove")  
} catch (e) {
console.log(e)
}
break

case 'add': case 'unkick':
if(!SoDono) return reply(`Somente meu proprietário pode utilizar esse comando!`);
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!q && info.message.extendedTextMessage === null) return reply('Marque a mensagem ou coloque o número de quem você quer adicionar no grupo.')
try {
useradd = `${args.join(" ").replace(/\D/g,'')}` ? `${args.join(" ").replace(/\D/g,'')}` : info.message.extendedTextMessage.contextInfo.participant
let id = `${useradd.replace(/\D/g,'')}`
if(!id) return reply(`Número inválido.`)
let [result] = await dmzg.onWhatsApp(id)
if(!result) return reply(`Esse número não está registrado no WhatsApp.`)
let response = await dmzg.groupParticipantsUpdate(from, [result.jid], "add")
if(response[0].status == "409") {
dmzg.sendMessage(from, {text: `Ele já está no grupo, como eu vou adicionar?`, mentions: [result.jid, sender]})
} else if(response[0].status == "403") {
dmzg.sendMessage(from, {text: `Não consegui adicionar o @${result.jid.split("@")[0]} porque ele privou a conta.`, mentions: [result.jid, sender]})
} else if(response[0].status == "408") {
dmzg.sendMessage(from, {text: `Não consegui adicionar o @${result.jid.split("@")[0]} porque ele saiu recentemente do grupo.`, mentions: [result.jid, sender]})
} else if(response[0].status == "401") {
dmzg.sendMessage(from, {text: `Não consegui adicionar o @${result.jid.split("@")[0]} porque ele bloqueou o bot.`, mentions: [result.jid, sender]})
} else if(response[0].status == "200") {
dmzg.sendMessage(from, {text: `Prontinho fiz o que você pediu.`, mentions: [result.jid, sender]})
} else {
reply("Vish acho que algo deu errado")
}
} catch(e) {
console.log("[ERROR]:"+ e)
}
break

case 'ban': case 'banir': case 'kick': case 'avadakedavra':
if(!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
try {
if(!menc_os2 || menc_jid2[1]) return reply("Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário...")
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Este usuário já foi removido do grupo ou saiu.")
if(botNumber.includes(menc_os2)) return reply('Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você')
if(JSON.stringify(numerodono).indexOf(menc_os2) >= 0) return reply('Não posso remover meu dono 🤧')
dmzg.sendMessage(from, {text: `@${menc_os2.split("@")[0]} Foi [ REMOVIDO(A) COM SUCESSO ] - (Por motivos justos.) -`, mentions: [menc_os2]})
dmzg.groupParticipantsUpdate(from, [menc_os2], "remove")  
} catch (e) {
console.log(e)
}
break

case 'promover': 
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!menc_os2 || menc_jid2[1]) return reply("Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário...")
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Este usuário foi removido do grupo ou saiu, não será possível promover..")
dmzg.sendMessage(from, {text: `@${menc_os2.split("@")[0]} Foi promovido(a) para adm com sucesso.`, mentions: [menc_os2]})
dmzg.groupParticipantsUpdate(from, [menc_os2], "promote")  
break

case 'rebaixar': 
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!menc_os2 || menc_jid2[1]) return reply("Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário...")
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Este usuário foi removido do grupo ou saiu, não será possível rebaixar..")
dmzg.sendMessage(from, {text: `@${menc_os2.split("@")[0]} Foi rebaixado para [ MEMBRO COMUM ] com sucesso.`, mentions: [menc_os2]})
dmzg.groupParticipantsUpdate(from, [menc_os2], "demote")  
break



case 'nuke': case 'arquivargp':
if(!SoDono && !isnit) return reply("Só dono pode utilizar este comando...")
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(info.key.fromMe) return 
blup = []
for ( i of groupMembers) {
if(!numerodono.includes(i.id)) blup.push(i.id)
}
blup.splice(blup.indexOf(botNumber), 1)
for ( i = 0; i < blup.length; i++) {
await sleep(500)
dmzg.groupParticipantsUpdate(from, [blup[i]], 'remove')
} 
break





//===COMANDOS DE BRINCADEIRS===\\



case 'sorteio': {
    try {
        if (!isGroup) return reply(enviar.msg.grupo)
        if (!q) return reply(`Coloque algo após o comando sorteio, por exemplo:\n${prefix}sorteio de 100 R$`)
        
        let d = []
        let teks = `🎉 Meus parabéns ao vencedor do sorteio: ${q}\n-\n`
        const r = Math.floor(Math.random() * groupMetadata.participants.length)
        teks += `• *Mencionando o vencedor:* @${groupMembers[r].id.split('@')[0]}`
        d.push(groupMembers[r].id)
        
        mentions(teks, d, true)
    } catch (e) {
        console.log(e)
        reply('Deu erro, tente novamente :/')
    }
}
break



case 'metadinha': {
reagir(from, "💑️") /* Reagir a mensagem! */
anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
dmzg.sendMessage(from, {image: {url: random.male}, caption: "• Perfil Masculino"}, {quoted: sasah})
dmzg.sendMessage(from, {image: {url: random.female}, caption: `• Perfil Feminino`}, {quoted: sasah})
}
break



case 'chance': {
    if (!isGroup) return reply(enviar.msg.grupo)

    var avb = body.slice(7)
    if (args.length < 1) {
        return dmzg.sendMessage(from, {
            text: `Você precisa digitar da forma correta\nExemplo: ${prefix}chance do luuck ser gay`
        }, { quoted: sasah })
    }

    const chance = Math.floor(Math.random() * 100)

    // Geração da barra: 10 blocos total (cada um vale 10%)
    const filledBlocks = Math.floor(chance / 10)
    const emptyBlocks = 10 - filledBlocks
    const bar = '▰'.repeat(filledBlocks) + '▱'.repeat(emptyBlocks)

    const hasil = `⌛⌚ *A chance de isso acontecer é:*\n\n${chance}%\n[ ${bar} ]✔️`

    dmzg.sendMessage(from, {
        text: hasil,
        mentions: [sender]
    }, { quoted: sasah })
}
break

case 'namorar': case 'pediremnamoro': 
// @Matheus
setTimeout(() => {reagir(from, "💍")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!menc_os2) return reply('Marque a mensagem ou o @ que queira pedir ela em namoro. Se você tomar um fora, juízo!')
if(botNumber.includes(menc_os2)) return reply("Não é possível pedir o bot em namoro, seu baitola.🙄")
if(JSON.stringify(namoro2).includes(menc_os2)) return reply(`Este usuário já foi pedido em namoro...`)
if(JSON.stringify(namoro1).includes(menc_os2) && namoro1[namoro1.map(i => i.usu1).indexOf(menc_os2)].namorados == false) return reply(`Essa pessoa já pediu alguém em namoro... Sinto muito ${pushname} 😕`)
if(JSON.stringify(namoro1).includes(menc_os2) && namoro1[namoro1.map(i => i.usu1).indexOf(menc_os2)].namorados == true) return reply(`Não será possível pedir essa pessoa em namoro, pois a mesma já está com outro(a). 🌚`)
if(JSON.stringify(namoro1).includes(sender) && namoro1[namoro1.map(i => i.usu1).indexOf(sender)].namorados == false) return mention(`Você já pediu para namorar com o (a) @${namoro1[namoro1.map(i => i.usu1).indexOf(sender)].usu2}. Não brinque com os sentimentos dos outros! Se decida logo ou digite: ${prefix}cancelarpedido`)
if(JSON.stringify(namoro1).includes(sender) && namoro1[namoro1.map(i => i.usu1).indexOf(sender)].namorados == true) return mention(`Você já está namorando com o (a) @${namoro1[namoro1.map(i => i.usu1).indexOf(sender)].usu2}...`)
namoro1.push({usu1: sender, usu2: menc_os2.split('@')[0], namorados: false, idgp: from, hora: hora, data: date})
fs.writeFileSync("./database/func/namoro1.json", JSON.stringify(namoro1, null, 2))
namoro2.push({id: menc_os2, pedido: sender.split('@')[0], idgp: from})
fs.writeFileSync("./database/func/namoro2.json", JSON.stringify(namoro2))
mention(`🌟🥳 Psiu *@${menc_os2.split('@')[0]}*! Você acaba de ser pedido em namoro por *@${sender.split('@')[0]}*.\nEai você aceita o pedido, *sim ou não?*`);
break

case 'darkweb': {
    const nome = pushname || 'Usuário';
    const tempo = moment.tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss');
    const fakeSite = `https://leak-core.net/post/${Math.floor(Math.random() * 9999999)}`;
    
    const msg = `🚨 *Vazamento Detectado na Dark Web*\n\n🧑‍💻 *Autor do vazamento:* ${nome}\n🌐 *Publicado em:* ${fakeSite}\n📅 *Data:* ${tempo}\n\n⚠️ Conteúdo postado com sucesso nos servidores da *deepnet* via Tor.\n_Para solicitar remoção, contate o suporte underground._`;

    await dmzg.sendMessage(from, { text: msg }, { quoted: info });
}
break;

case 'cancelarpedido':
// @Matheus
if(!isGroup) return reply(enviar.msg.grupo)
if(!JSON.stringify(namoro1).includes(sender)) return reply("Não há pedido de namoro para cancelar.")
C13 = namoro1.map(i => i.usu1).indexOf(sender)
C15 = namoro2.map(i => i.id).indexOf(namoro1[C13].usu2 + "@s.whatsapp.net")
if(namoro1[C13].namorados == true) return reply("Não é possível cancelar o pedido de namoro depois de aceito.")
namoro1.splice(C13, 1)
fs.writeFileSync("./database/func/namoro1.json", JSON.stringify(namoro1, null, 2))
namoro2.splice(C15, 1)
fs.writeFileSync("./database/func/namoro2.json", JSON.stringify(namoro2))
reply("Pedido de namoro cancelado com sucesso.")
break

case 'terminar_namoro':
// @Matheus
if(!JSON.stringify(namoro1).includes(sender)) return reply(`Você não está namorando com ninguém. Sinto muito!`)
D1 = namoro1.map(i => i.usu1).indexOf(sender)
D2 = namoro1.map(a => a.usu1).indexOf(`${namoro1[D1].usu2}@s.whatsapp.net`)
namoro1[D2].namorados = false
reply(`Agora você está totalmente solteiro, notifiquei a(o) sua/seu parceiro sobre o término.`)
dmzg.sendMessage(`${namoro1[D1].usu2}@s.whatsapp.net`, {text: `Tenho uma notícia ruim sobre seu namoro, ele(a) acaba de terminar.\n–\n• Seja feliz e lembre dos todos os bons momentos que vocês tiveram juntos.`}, {quoted: info})
namoro1.splice(D2, 1)
fs.writeFileSync("./database/func/namoro1.json", JSON.stringify(namoro1, null, 2))
namoro1.splice(D1, 1)
fs.writeFileSync("./database/func/namoro1.json", JSON.stringify(namoro1, null, 2))
break

case 'minhadupla': case 'dupla':
// @Matheus
if(!isGroup) return reply(enviar.msg.grupo)
if(!JSON.stringify(namoro1).includes(sender)) return reply(`Você não está namorando com ninguém. Sinto muito!`)
reagir(from, "❤️‍🩹")
D1 = namoro1.map(i => i.usu1).indexOf(sender)
if(namoro1[D1].namorados == false) return reply(`A pessoa que você pediu em namoro não aceitou o pedido ainda. Portanto, não é possível consultar os dados da dupla.️`)
txt = `@${namoro1[D1].usu1.split('@')[0]} namora com @${namoro1[D1].usu2}\n–\n• O pedido de namoro ocorreu às ${namoro1[D1].hora} do dia ${namoro1[D1].data}.\n–\n• Para realizar o término do namoro é fácil, use o comando: *${prefix}terminar_namoro*`
mention(txt)
break



case 'gay': {
    if (!isGroup) return reply(enviar.msg.grupo)

    dmzg.sendMessage(from, {
        text: `🧐 Pesquisando a ficha de gay de @${sender_ou_n.split("@")[0]}... aguarde...`,
        mentions: [sender_ou_n]
    }, { quoted: info })

    setTimeout(async () => {
        const random = Math.floor(Math.random() * 110)

        let bo = ''
        if (random < 20) {
            bo = 'hmm... você é hetero...'
        } else if (random <= 50) {
            bo = 'tenho minha desconfiança...'
        } else if (random <= 70) {
            bo = 'você é né?'
        } else {
            bo = 'você é gay...'
        }

        const filled = Math.min(Math.floor(random / 10), 10)
        const empty = 10 - filled
        const barra = '🏳️‍🌈'.repeat(filled) + '▫️'.repeat(empty)

        const legenda = `🌈 Qual é a porcentagem de gay de *@${sender_ou_n.split("@")[0]}*?\n\n` +
                        `• *${random}% homossexual*\n` +
                        `• ${bo}\n` +
                        `\n[ ${barra} ]`

        dmzg.sendMessage(from, {
            image: { url: imggay },
            caption: legenda,
            mentions: [sender_ou_n],
            thumbnail: null
        }, { quoted: sasah })

    }, 500) // ⏱️ Agora responde em 2 segundos
}
break


case 'maisgostam': {
    if (!isGroup) return reply("Esse comando só funciona em grupos!");

    const gostos = [
        "do seu jeitinho engraçado",
        "do seu sorriso",
        "do seu estilo",
        "da sua voz",
        "do seu jeito misterioso",
        "da sua vibe positiva",
        "do seu olhar penetrante",
        "da sua risada contagiante",
        "da sua inteligência",
        "do seu jeitinho carinhoso",
        "do seu mau humor",
        "do seu jeitinho fofo de brigar",
        "da sua beleza única",
        "da sua presença",
        "da sua sentada",
        "da sua pegada",
        "da sua raba",
        "do seu abdômen definido",
        "da sua pic@",
        "do seu mamao (hehe😈🤤)",
        "da sua falsidade",
        "da sua massagem",
        "do seu abraço",
        "do seu piru",
        "do seu dedinho lá dentro",
        "da sua beleza única",
        "da sua chupada",
        "de tudo em você!"
    ];

    // Escolher aleatório
    const elogio = gostos[Math.floor(Math.random() * gostos.length)];

    // Identificar alvo
    const alvo = info.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0] || sender;

    msgSemQuoted(`As pessoas mais gostam em você @${alvo.split("@")[0]}  ${elogio}.`, "text", {
        mentions: [alvo]
    });
}
break;



case 'piorcoisa': {
   const lista = [
     "se apaixonar por quem não devia",
     "esquecer o fone e ouvir áudio no alto-falante",
     "comer pastel de vento achando que era de carne",
     "ficar online e não responder ninguém",
     "chamar o crush de amigo sem querer",
     "tentar ser legal e parecer carente",
     "rir da piada do ex",
     "printar conversa e mandar pro grupo errado"
   ];
   const escolhido = lista[Math.floor(Math.random() * lista.length)];
   const alvo = menc_os2 ? menc_os2 : sender;
   dmzg.sendMessage(from, { text: `A pior coisa que @${alvo.split('@')[0]} já fez foi ${escolhido}.`, mentions: [alvo] });
}
break;


case 'revelacao': {
   const expose = [
     "já chorou ouvindo música triste às 2h da manhã",
     "ficou 3 dias sem tomar banho nas férias",
     "stalkeia o/a ex no modo anônimo",
     "fala sozinho quando tá sozinho",
     "diz que vai dormir mas vai assistir série escondido",
     "já mandou mensagem pro crush e apagou de vergonha",
     "acha que ninguém percebe quando está carente",
     "tem mais conversa com o bot do que com gente real"
   ];
   const escolhido = expose[Math.floor(Math.random() * expose.length)];
   const alvo = menc_os2 ? menc_os2 : sender;
   dmzg.sendMessage(from, { text: `@${alvo.split('@')[0]} foi exposto(a): ${escolhido}.`, mentions: [alvo] });
}
break;



case 'segredo': {
   const segredos = [
     "Já deu o uc mas nunca teve coragem de contar aos amigos e amigas",
     "Ainda assiste barbie",
     "Dorme chupando o dedo",
     "Usa calcinha fio dental",
     "Tem medo de escuro",
     "Peidou na sala e culpou o colega",
     "Gosta de Bts",
     "Canta no chuveiro",
     "É bisexual",
     "Nunca beijou na boca",
     "Bate uma todos os dias",
     "Come pão mergulhado no café",
     "Gosta de sentar no duro",
     "já sonhou em morar longe só pra fugir de tudo",
     "tem um TikTok secreto",
     "ouve músicas antigas e chora escondido",
     "tem um grupo que só ele(a) participa",
     "já brigou com espelho achando que era outra pessoa",
     "já mandou áudio chorando e apagou depois",
     "finge que tá tudo bem só pra não preocupar os outros",
     "acha que um dia vai virar meme famoso"
   ];
   const escolhido = segredos[Math.floor(Math.random() * segredos.length)];
   const alvo = menc_os2 ? menc_os2 : sender;
   dmzg.sendMessage(from, { text: `SEGREDO REVELADO:\n@${alvo.split('@')[0]} ${escolhido}.`, mentions: [alvo] });
}
break;

case 'maisodeiam': {
    if (!isGroup) return reply("Esse comando só funciona em grupos!");

    const odios = [
        " seu ego gigante",
        " sua falsidade",
        " seu atraso",
        " seu sumiço",
        " seu orgulho",
        "seu jeito debochado",
        " seu silêncio irritante",
        " como você sempre foge das tretas",
        " sua carência excessiva",
        " seu drama diário",
        " sua mania de sumir e aparecer",
        "seu jeito de querer ter razão em tudo",
        " como você ignora geral",
        " sua competitividade tóxica",
        " vc ser metido (a)",
        " pensar que é melhor que todos",
        " não saber beijar",
        " ser homossexual",
        " ser hetero (a) demais",
        "ser muito emocionada (o)",
        "não saber escutar as pessoas",
        " vc não ter coração ",
        " ser criança demais",
        " não ter senso de humor",
        " sua mania de sumir e aparecer",
        "por brincar em momentos sérios ",
        " falar quando não é necessário",
        " fofocar demais",
        "seu jeitinho fofo que irrita"
    ];

    const motivo = odios[Math.floor(Math.random() * odios.length)];
    const alvo = info.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0] || sender;

    msgSemQuoted(` @${alvo.split("@")[0]} As pessoas mais te odeiam por ${motivo}.`, "text", {
        mentions: [alvo]
    });
}
break;





case 'quem': {
    if (!isGroup) return reply('Este comando só funciona em grupo!');

    if (groupMembers.length < 2) return reply('O grupo precisa ter pelo menos 2 pessoas!');

    const pergunta = body.slice(6).trim();

    if (!pergunta) return reply('Digite a pergunta depois do comando, exemplo: ;quemé bonito');

    const frases = [
        "Claramente @user ",
        "@user com certeza ",
        "Adivinha quem? o(a) @user",
        "@user o(a) mais provável de ser",
        "Sem dúvidas o(a) @user"
    ];

    const sorteado = groupMembers[Math.floor(Math.random() * groupMembers.length)].id;
    const frase = frases[Math.floor(Math.random() * frases.length)];

    dmzg.sendMessage(from, {
        text: `${frase.replace('@user', `@${sorteado.split("@")[0]}`)} ${pergunta}!`,
        mentions: [sorteado]
    });
}
break;


case 'cronometro': {
    if (!args[0]) return reply('⏱️ Me diga quantos segundos devo cronometrar!\n\nExemplo: ;cronometro 10');

    let tempo = parseInt(args[0]);
    if (isNaN(tempo)) return reply('❌ Isso não é um número válido! Tente novamente.');
    if (tempo > 300) return reply('❌ Cronômetro máximo permitido é de 300 segundos (5 minutos).');

    // Manda a primeira mensagem sem quoted
    let enviado = await dmzg.sendMessage(from, { text: `⏱️ Cronômetro iniciado: 0 segundos...` });

    for (let i = 1; i <= tempo; i++) {
        await sleep(500); // Espera 1 segundo

        let novoTexto = `⏱️ Cronômetro: *${i}* segundo${i > 1 ? 's' : ''} passados...`;

        // EDITA a mensagem enviada
        await dmzg.sendMessage(from, { text: novoTexto, edit: enviado.key });
    }

    // Depois que termina, edita dizendo que acabou
    await dmzg.sendMessage(from, { text: `✅ ⏱️ Tempo esgotado!`, edit: enviado.key });
}
break;




case 'feio':
if(!isGroup) return reply(enviar.msg.grupo)
dmzg.sendMessage(from, {text: `Pesquisando a sua ficha de feio: *@${sender_ou_n.split("@")[0]}* aguarde...`, mentions: [sender_ou_n]}, {quoted: info})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
feio = random
if(feio < 20 ) {var bo = 'É não é feio'} else if(feio == 21 ) {var bo = '+/- feio'} else if(feio == 23 ) {var bo = '+/- feio'} else if(feio == 24 ) {var bo = '+/- feio'} else if(feio == 25 ) {var bo = '+/- feio'} else if(feio == 26 ) {var bo = '+/- feio'} else if(feio == 27 ) {var bo = '+/- feio'} else if(feio == 2 ) {var bo = '+/- feio'} else if(feio == 29 ) {var bo = '+/- feio'} else if(feio == 30 ) {var bo = '+/- feio'} else if(feio == 31 ) {var bo = 'ainda tá na média'} else if(feio == 32 ) {var bo = 'dá pra pegar umas(ns) novinha(o) ainda'} else if(feio == 33 ) {var bo = 'Da pra pegar umas(ns) novinha(o) ainda'} else if(feio == 34 ) {var bo = 'é fein, mas tem baum coração'} else if(feio == 35 ) {var bo = 'tá na média, mas não deixa de ser feii'} else if(feio == 36 ) {var bo = 'bonitin mas é feio com orgulho'} else if(feio == 37 ) {var bo = 'feio e preguiçoso(a), vai se arrumar praga feia'} else if(feio == 3 ) {var bo = 'tenho '} else if(feio == 39 ) {var bo = 'feio, mas um banho e se arrumar, deve resolver'} else if(feio == 40 ) {var bo = 'fein,  mas não existe gente feia, existe gente que não conhece os produtos jequity'} else if(feio == 41 ) {var bo = 'você é Feio, mas é legal, continue assim'} else if(feio == 42 ) {var bo = 'Nada que uma maquiagem e se arrumar, que não resolva.'} else if(feio == 43 ) {var bo = 'Feio que dói de ver, compra uma máscara que melhora'} else if(feio == 44 ) {var bo = 'Feio mas nada que um saco na cabeça não resolva né!?'} else if(feio == 45 ) {var bo = 'você é feio, mas tem bom gosto'} else if(feio == 46 ) {var bo = 'feio mas tem muitos amigos'} else if(feio == 47 ) {var bo = 'é feio mas tem lábia pra pegar várias novinha'} else if(feio == 4 ) {var bo = 'feio e ainda não sabe se vestir, vixi'} else if(feio == 49 ) {var bo = 'feiooo dms vey.'} else if(feio == 50 ) {var bo = 'você é feio, mas não se encherga.'} else if(feio > 51) {var bo = 'você é feio demais bixo.'}
dmzg.sendMessage(from, {image: {url: imgfeio}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa feia?\n• A porcentagem de chance é *${random}%*, ${bo}`, mentions: [sender_ou_n], thumbnail:null}, {quoted: sasah})
}, 500)
break 

case 'corno':
if(!isGroup) return reply(enviar.msg.grupo)
dmzg.sendMessage(from, {text:`Pesquisando a ficha de corno @${sender_ou_n.split("@")[0]}, aguarde...`, mentions: [sender_ou_n]}, {quoted: info})
setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
dmzg.sendMessage(from, {image: {url: imgcorno}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa chifruda?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: sasah})
}, 500)
break

case 'vesgo':
if(!isGroup) return reply(enviar.msg.grupo)
dmzg.sendMessage(from, {text:`Pesquisando a ficha de vesgo @${sender_ou_n.split("@")[0]}, aguarde...`, mentions: [sender_ou_n]}, {quoted: info})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
dmzg.sendMessage(from, {image: {url: imgvesgo}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa vesga?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: sasah})
}, 500)
break 

case 'bebado':
if(!isGroup) return reply(enviar.msg.grupo)
dmzg.sendMessage(from, {text:`Pesquisando a ficha de bebado(a) @${sender_ou_n.split("@")[0]}, aguarde...`, mentions: [sender_ou_n]}, {quoted: info})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
dmzg.sendMessage(from, {image: {url: imgbebado}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa bêbada?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: sasah})
}, 500)
break 

case 'gado':
if(!isGroup) return reply(enviar.msg.grupo)
dmzg.sendMessage(from, {text:`Pesquisando a ficha de gado @${sender_ou_n.split("@")[0]}, aguarde...`, mentions: [sender_ou_n]}, {quoted: info})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
dmzg.sendMessage(from, {image: {url: imggado}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser um gado?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: sasah})
}, 500)
break 

case 'gostoso':
if(!isGroup) return reply(enviar.msg.grupo)
dmzg.sendMessage(from, {text:`Pesquisando a sua ficha de gostoso @${sender_ou_n.split("@")[0]} aguarde...`, mentions: [sender_ou_n]}, {quoted: info})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
dmzg.sendMessage(from, {image: {url: imggostoso}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa gostosa?\n• A porcentagem de chance é *${random}%*`, gifPlayback: true, mentions: [sender_ou_n]}, {quoted: sasah})
}, 500)
break 


case 'gostosa':
if(!isGroup) return reply(enviar.msg.grupo)
dmzg.sendMessage(from, {text:`Pesquisando a sua ficha de gostosa @${sender_ou_n.split("@")[0]} aguarde...`, mentions: [sender_ou_n]}, {quoted: info})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
dmzg.sendMessage(from, {image: {url: imggostosa}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa gostosa?\n• A porcentagem de chance é *${random}%*`, gifPlayback: true, mentions: [sender_ou_n]}, {quoted: sasah})
}, 500)
break 


				
case 'matar': case 'mata':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!menc_os2 || menc_jid2[1]) return reply('marque o alvo que você quer matar, a mensagem ou o @')
dmzg.sendMessage(from, {video: {url: matarcmd}, gifPlayback: true, caption: `Você Acabou de matar o(a) @${menc_os2.split('@')[0]} 😈👹`, mentions: [menc_os2]}, {quoted: sasah})
break 




case 'casal':
    if (!isGroup) return reply(enviar.msg.grupo)

    let pessoa1 = groupMembers[Math.floor(Math.random() * groupMembers.length)].id
    let pessoa2 = groupMembers[Math.floor(Math.random() * groupMembers.length)].id

    dmzg.sendMessage(from, {
        image: { url: 'https://files.catbox.moe/0jr0kb.jpg' },
        caption: `💞casal formado:
        *@${pessoa1.split('@')[0]}* ❤️ *@${pessoa2.split('@')[0]}*.`,
        mentions: [pessoa1, pessoa2]
    }, { quoted: sasah })
break

case 'abraco': 
case 'abracar':  
    if (!isGroup) return reply(enviar.msg.grupo)
    if (!menc_os2 || menc_jid2[1]) return reply('marque o alvo que você quer abraçar, a mensagem ou o @')
    
    dmzg.sendMessage(from, {
        video: { url: 'https://files.catbox.moe/elb3rr.mp4' },
        gifPlayback: true,
        caption: `Awwnt, você deu um abraço fofinho na(o) ⧽ @${menc_os2.split('@')[0]} ❤‍🩹🫂`,
        mentions: [menc_os2]
    }, { quoted: sasah })
break

case 'carinho':
    if (!isGroup) return reply(enviar.msg.grupo)
    if (!menc_os2 || menc_jid2[1]) return reply('marque o alvo que você deseja fazer carinho, a mensagem ou o @')
    
    dmzg.sendMessage(from, {
        video: { url: 'https://files.catbox.moe/hcszsf.mp4' },
        gifPlayback: true,
        caption: `Você Acabou de fazer carinho no(a) @${menc_os2.split('@')[0]} 🥹`,
        mentions: [menc_os2]
    }, { quoted: sasah })
break


case 'comer':
    if (!isGroup) return reply(enviar.msg.grupo)
    if (!menc_os2 || menc_jid2[1]) return reply('marque o alvo que você deseja fazer comer, a mensagem ou o @')
    
    dmzg.sendMessage(from, {
        video: { url: 'https://files.catbox.moe/2r7di8.mp4' },
        gifPlayback: true,
        caption: `Você Acabou de comer o(a) @${menc_os2.split('@')[0]} 🤤`,
        mentions: [menc_os2]
    }, { quoted: sasah })
break

case 'beijo': 
case 'beijar':  
    if (!isGroup) return reply(enviar.msg.grupo)
    if (!menc_os2 || menc_jid2[1]) return reply('marque o alvo que você quer você deseja beijar, a mensagem ou o @')
    
    dmzg.sendMessage(from, {
        video: { url: 'https://files.catbox.moe/j5t0i4.mp4' },
        gifPlayback: true,
        caption: `Awwnt, você acabou de dar um beijo no(a) ⧽ @${menc_os2.split('@')[0]} 🫦❤‍🩹`,
        mentions: [menc_os2]
    }, { quoted: sasah })
break

case 'vab':
if(!isGroup) return reply(enviar.msg.grupo)
psycatgames().then(async (array) => {
const { nsfw, questions } = array[Math.floor(Math.random() * array.length)]
const { pergunta1, pergunta2 } = questions[Math.floor(Math.random() * questions.length)]
sendPoll(dmzg, from, "Você prefere..", [pergunta1, pergunta2])
}).catch(console.error);
break

case 'eununca':
if(!isGroup) return reply(enviar.msg.grupo)
setTimeout(() => {reagir(from, "❔")}, 50)
const pergunta_ = JSON.parse(fs.readFileSync('./arquivos/json/eununca.json'));
const getRandomINever = pergunta_[Math.floor(Math.random() * pergunta_.length)]
sendPoll(dmzg, from, getRandomINever, ["Eu nunca", "Eu já"]).catch(console.error);
break

case 'conselhobiblico':
case 'conselhosbiblico':  
case 'conselhosb':   
case 'conselhob':  
reagir(from, "⛪️")
var conselhosb = conselhob[Math.floor(Math.random() * conselhob.length)]
dmzg.sendMessage(from, {text: mess.conselhoBiblico(tempo, pushname, conselhosb, NomeDoBot, groupName)}, {quoted: sasah, contextInfo: {"mentionedJid": mess.conselhoBiblico(tempo, pushname, conselhosb, NomeDoBot, groupName)}})
break







case 'cantadas': case 'cantada':
reagir(from, "❤️")
cantadasbb = randomCantadas[Math.floor(Math.random() * randomCantadas.length)]   
let cantadasText = `*${cantadasbb}*`
dmzg.sendMessage(from, {text: cantadasText}, {quoted: sasah})
break

case 'fatos': case 'curiosidades':  
fatoskk = fatos[Math.floor(Math.random() * fatos.length)]   
let fatosText = `*${fatoskk}*`
dmzg.sendMessage(from, {text: fatosText}, {quoted: sasah})
break

case 'tapa':
if(!isGroup) return reply(enviar.msg.grupo)
if(!menc_os2 || menc_jid2[1]) return reply('Marque o alvo que você quer da um tapa, a mensagem ou o @')
dmzg.sendMessage(from, {video: {url: tapacmd}, gifPlayback: true, caption: `Você acabou de da um tapa na raba da *@${menc_os2.split('@')[0]}*. 😼`, mentions: [menc_os2]}, {quoted: sasah})
break

case 'chute':
case 'chutar':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!menc_os2 || menc_jid2[1]) return reply('marque o alvo que você quer da um chute, a mensagem ou o @')
dmzg.sendMessage(from, {video: {url: chutecmd}, gifPlayback: true, caption: `Você acabou de dar um chute em *@${menc_os2.split('@')[0]}*.`, mentions: [menc_os2]}, {quoted: sasah})
break 



case 'shipo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!menc_os2) return reply('Marque uma pessoa do grupo para encontrar o par dela.')
mention(`🌟 Eu shipo *@${groupMembers[Math.floor(Math.random() * groupMembers.length)].id.split('@')[0]} & @${menc_os2.split("@")[0]}* com uma porcentagem de *${Math.floor(Math.random() * 100)+"%"}*.`)
break



case 'desafio': {
    const mentioned = info.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0];
    const target = mentioned || sender;
    const filePath = './arquivos/json/desafios.json';

    if (!fs.existsSync(filePath)) return reply('❗ O arquivo de desafios não foi encontrado!');

    const desafios = JSON.parse(fs.readFileSync(filePath));
    if (desafios.length === 0) return reply('❗ Nenhum desafio disponível no momento.');

    const desafio = desafios[Math.floor(Math.random() * desafios.length)];

    await dmzg.sendMessage(from, {
        text: `@${target.split('@')[0]}\n⚡ Seu desafio é:\n\n*${desafio}*`,
        mentions: [target]
    });
}
break;

case 'simounao': {
    const mentioned = info.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0];
    const target = mentioned || sender;
    const filePath = './arquivos/json/duvidas.json';

    if (!fs.existsSync(filePath)) return reply('❗ O arquivo de dúvidas não foi encontrado!');

    const duvidas = JSON.parse(fs.readFileSync(filePath));
    if (duvidas.length === 0) return reply('❗ Nenhuma resposta disponível no momento.');

    const resposta = duvidas[Math.floor(Math.random() * duvidas.length)];

    await dmzg.sendMessage(from, {
        text: `@${target.split('@')[0]}\n❓ Resultado:\n\n*${resposta}*`,
        mentions: [target]
    });
}
break;

case 'paranoia': {
    const mentioned = info.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0];
    const target = mentioned || sender;
    const filePath = './arquivos/json/paranoias.json';

    if (!fs.existsSync(filePath)) return reply('❗ O arquivo de paranoias não foi encontrado!');

    const paranoias = JSON.parse(fs.readFileSync(filePath));
    if (paranoias.length === 0) return reply('❗ Nenhuma paranoia disponível no momento.');

    const paranoia = paranoias[Math.floor(Math.random() * paranoias.length)];

    await dmzg.sendMessage(from, {
        text: `@${target.split('@')[0]}\n👻 Alerta Paranormal:\n\n${paranoia}`,
        mentions: [target]
    });
}
break;

case 'objetivo': {
    const mentioned = info.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0];
    const target = mentioned || sender;
    const filePath = './arquivos/json/objetivos.json';

    if (!fs.existsSync(filePath)) return reply('❗ O arquivo de objetivos não foi encontrado!');

    const objetivos = JSON.parse(fs.readFileSync(filePath));
    if (objetivos.length === 0) return reply('❗ Nenhum objetivo disponível no momento.');

    const objetivo = objetivos[Math.floor(Math.random() * objetivos.length)];

    await dmzg.sendMessage(from, {
        text: `@${target.split('@')[0]}\n🎯 Seu objetivo do dia:\n\n*${objetivo}*`,
        mentions: [target]
    });
}
break;

case 'filme': {
    const mentioned = info.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0];
    const target = mentioned || sender;
    const filePath = './arquivos/json/filmes.json';

    if (!fs.existsSync(filePath)) return reply('❗ O arquivo de filmes não foi encontrado!');

    const filmes = JSON.parse(fs.readFileSync(filePath));
    if (filmes.length === 0) return reply('❗ Nenhum filme disponível no momento.');

    const filme = filmes[Math.floor(Math.random() * filmes.length)];

    const mensagem = `
@${target.split('@')[0]}
🎬 *Filme Recomendado!*

📽️ Nome: *${filme.nome}*
⏰ Duração: *${filme.duracao}*
🎯 Tema: *${filme.tema}*
⭐ Avaliação do público: *${filme.avaliacao}*
📺 Onde assistir: *${filme.onde_assistir}*
`;

    await dmzg.sendMessage(from, {
        text: mensagem.trim(),
        mentions: [target]
    });
}
break;







case 'profissao': {
    const mentioned = info.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0];
    const target = mentioned || sender;
    const filePath = './arquivos/json/profissoes.json';

    if (!fs.existsSync(filePath)) return reply('❗ O arquivo de profissões não foi encontrado!');

    const profissoes = JSON.parse(fs.readFileSync(filePath));
    if (profissoes.length === 0) return reply('❗ Nenhuma profissão disponível no momento.');

    const profissao = profissoes[Math.floor(Math.random() * profissoes.length)];

    await dmzg.sendMessage(from, {
        text: `@${target.split('@')[0]}\n🏢 Sua profissão aleatória é:\n\n*${profissao}*`,
        mentions: [target]
    });
}
break;

case 'apelido': {
    const mentioned = info.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0];
    const target = mentioned || sender;
    const filePath = './arquivos/json/apelidos.json';

    if (!fs.existsSync(filePath)) return reply('❗ O arquivo de apelidos não foi encontrado!');

    const apelidos = JSON.parse(fs.readFileSync(filePath));
    if (apelidos.length === 0) return reply('❗ Nenhum apelido disponível no momento.');

    const apelido = apelidos[Math.floor(Math.random() * apelidos.length)];

    await dmzg.sendMessage(from, {
        text: `@${target.split('@')[0]}\n🎭 Seu novo apelido é:\n\n*${apelido}*`,
        mentions: [target]
    });
}
break;

case 'pergunta': {
    const mentioned = info.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0];
    const target = mentioned || sender;
    const perguntas = JSON.parse(fs.readFileSync('./arquivos/json/perguntas.json'));

    let aleatoria = perguntas[Math.floor(Math.random() * perguntas.length)];
    reply(`@${target.split('@')[0]}\n❓ Pergunta aleatória:\n\n${aleatoria}`);
}
break;

case 'verdade': {
    const mentioned = info.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0];
    const target = mentioned || sender;
    const filePath = './arquivos/json/verdades.json';

    if (!fs.existsSync(filePath)) return reply('❗ O arquivo de verdades não foi encontrado!');

    const verdades = JSON.parse(fs.readFileSync(filePath));
    if (verdades.length === 0) return reply('❗ Nenhuma pergunta de verdade disponível no momento.');

    const pergunta = verdades[Math.floor(Math.random() * verdades.length)];

    await dmzg.sendMessage(from, {
        text: `@${target.split('@')[0]}\n❓ *Desafio de Verdade:*\n\n${pergunta}`,
        mentions: [target]
    });
}
break;



case 'pseudonimo': {
    const filePath = './arquivos/json/pseudonimos.json';

    if (!fs.existsSync(filePath)) {
        return reply('❗ O arquivo de pseudônimos não foi encontrado!');
    }

    const pseudonimos = JSON.parse(fs.readFileSync(filePath));

    if (pseudonimos.length === 0) {
        return reply('❗ Nenhum pseudônimo disponível no momento.');
    }

    const pseudonimo = pseudonimos[Math.floor(Math.random() * pseudonimos.length)];

    await dmzg.sendMessage(from, {
        text: `✨ Seu novo pseudônimo é:\n\n*${pseudonimo}*`,
        mentions: [sender]
    });
}
break;


case 'tirarprint': {
    // Primeiro manda uma mensagem como se estivesse capturando
    const loading = await dmzg.sendMessage(from, {
        text: `⏳ Capturando print...`
    });

    // Aguarda 2 segundos
    await sleep(300);

    // Edita a mensagem para "print salvo"
    await dmzg.sendMessage(from, {
        text: `✅ Screenshot capturada com sucesso!\n\nArquivo salvo em seu celular mestre! ☁️`,
        edit: loading.key
    });
}
break;






case 'formarcasal2': {
    if (!isGroup) return reply('❗ Esse comando só pode ser usado em grupos!');

    const metadata = await dmzg.groupMetadata(from); // Pega o metadata do grupo
    const membros = metadata.participants.map(p => p.id).filter(id => id.endsWith('@s.whatsapp.net'));

    if (membros.length < 2) return reply('❗ Tem pouca gente no grupo pra formar um casal!');

    let pessoa1 = membros[Math.floor(Math.random() * membros.length)];
    let pessoa2;

    do {
        pessoa2 = membros[Math.floor(Math.random() * membros.length)];
    } while (pessoa1 === pessoa2); // garantir que são diferentes

    await dmzg.sendMessage(from, {
        text: `❤️Casal do grupo é *com certeza* e *sem sombras de dúvidas* :\n\n🔥@${pessoa1.split('@')[0]} + 😘@${pessoa2.split('@')[0]} \nNão tô mentindo, já hackeei esses dois trocando fotinhas😈`,
        mentions: [pessoa1, pessoa2]
    });
}
break;



case 'rankativos': 
case 'rankativo':   
if(!isGroup) return reply(enviar.msg.grupo)
var i3 = countMessage.map(i => i.groupId).indexOf(from)
var blue = countMessage[i3].numbers.map(i => i)
blue.sort((a, b) => ((a.figus == undefined ? a.figus = 0 : a.figus + a.messages + a.cmd_messages) < (b.figus == undefined ? b.figus = 0 : b.figus + b.cmd_messages + b.messages)) ? 0 : -1)
menc = [] 
blad = `*🏆 Rank dos mais ativos no grupo:* ${groupName}\n`
for ( i = 0; i < (blue.length < 5 ? blue.length : 5); i++) {
if (i != null) blad += `\n*🏅 ${i + 1}º Lugar:* @${blue[i].id.split('@')[0]}\n• Quantidade de mensagens encaminhadas: *${blue[i].messages}*\n• Quantidade de comandos executados pelo usuário(a): *${blue[i].cmd_messages}*\n• Usuário está conectado em um dispositivo: *${blue[i].aparelho}*\n• Figurinhas encaminhadas pelo usuário(a) no grupo: *${blue[i].figus}*\n`
menc.push(blue[i].id)
}
mentions(blad, menc, true)
break

case 'rankinativo':
case 'rankinativos':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
bule = [];
bule2 = []
mentioned_jid = []
for(cag of countMessage[ind].numbers){
bule2.push(cag.id)
if(cag.messages <= 1){bule.push(cag)}}
bule.sort((a, b) => ((a.messages + a.cmd_messages) < (b.cmd_messages + b.messages)) ? 0 : -1)
boardi = `🗑 *Rank dos mais inativos do grupo:* ${groupName}\n-\n`
if(bule.length == 0)boardi += '❌ Nenhum usuário inativo foi encontrado neste grupo.️'
for ( i = 0; i < (bule.length < 5 ? bule.length : 5); i++) {
if (i != null) boardi += `*🏅 ${i + 1}º Lugar:* @${bule[i].id.split('@')[0]}\n• Quantidade de mensagens enviadas pelo usuário(a): *${bule[i].messages}*\n• Quantidade de comandos executados pelo usuário(a): *${bule[i].cmd_messages}*\n• Figurinhas encaminhadas pelo usuário(a) no grupo: *${bule[i].aparelho}*\n\n`
mentioned_jid.push(bule[i].id)
} 
mentions(boardi, mentioned_jid, true)
break

case 'checkativo':
if(!isGroup) return reply(enviar.msg.grupo)
if(groupIdscount.indexOf(from) < 0) return reply('O bot não tem ainda dados sobre o grupo')
var ind = groupIdscount.indexOf(from)
if(!menc_os2 || menc_jid2[1]) return reply('Marque o @ de quem deseja puxar a atividade / Só pode um por vez..')
if(numbersIds.indexOf(menc_os2) >= 0) {
var indnum = numbersIds.indexOf(menc_os2)
var RSM_CN = countMessage[ind].numbers[indnum]
mentions(`Consulta individual da atividade do usuário @${menc_os2.split('@')[0]}\n–\n• Quantidade de mensagens enviadas pelo usuário(a): *${RSM_CN.messages}*\n• Quantidade de comandos executados pelo usuário(a): *${RSM_CN.cmd_messages}*\n• Usuário está conectado em um dispositivo: *${RSM_CN.aparelho}*\n• Figurinhas encaminhadas pelo usuário(a) no grupo: *${RSM_CN.figus}*\n–\n〘 *${groupName}* 〙`, [menc_os2], true)
} else {
mentions(`Não tenho nenhuma informação no grupo sobre o *@${menc_os2.split('@')[0]}*.`, [menc_os2], true)
}
break

case 'rankgay': case 'rankgays':
if(!isGroup) return reply(enviar.msg.grupo)
ABC = `🏳️‍🌈 *RANK DOS 5 MAIS GAYS DO GRUPO!*\n—\n`
TMGAYS = ["Esse aí gosta de cheirar banana até umas horas kakak", "Gosta de ser dominado e chicoteado.", "Viadinho gente boa, nada contra os veados.","Esse aí roda mais que roda de caminhão.", "Mapoa é você meu amor?", "Esse aí ainda tá no armário, a franga tá presa!", "Profissional na garganta profunda!", "Essa bicha é finíssima!", "Essa aí precisa sair do closet ainda!", "Vixi esse aí e vitaminado!", "Vixi um gay vulgo irene!", "Poc fechosa, amo tu mona!"]
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMGAYS[Math.floor(Math.random() * TMGAYS.length)]} )\n`
}
mencionarIMG(ABC, rnkgay)
break;

case 'rankgado': case 'rankgados':
if(!isGroup) return reply(enviar.msg.grupo)
ABC = `RANK DOS 5 MAIS GADO DO GRUPO 🐂🐃\n\n`
for (var i = 0; i < 5; i++) {
ABC += `${Math.floor(Math.random() * 100)}% @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`
}
mencionarIMG(ABC, rnkgado);
break;

case 'rankcorno': case 'rankcornos':
if(!isGroup) return reply(enviar.msg.grupo)
ABC = `🐂 *RANK DOS 5 MAIS CORNOS DO GRUPO!*\n—\n`
TMCRN = ["Familiar, leva até chifre com os parentes!", "Masoquista, leva chifre mas não larga a mulher!", "Atéu, leva chifre e não acredita!", "Político, só faz promessa e não cumpre o que fala!", "Esse é que leva chifres, vai embora e volta por causa das crianças.", "Xuxa, o que não larga a mulher por causa dos baixinhos.", "Famoso, aquele que por onde passa é reconhecido como tal.", "Inflação, a cada dia que passa o chifre aumenta."]
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMCRN[Math.floor(Math.random() * TMCRN.length)]} )\n`
}
mencionarIMG(ABC, rnkcorno);
break;



case 'rankgostosos': case 'rankgostoso':
if(!isGroup) return reply(enviar.msg.grupo)
ABC = `*RANK DOS 5 MAIS GOSTOSOS DO GRUPO* 😏🔥\n—\n`
TMGSTS = ["Você tá olhando para um semi Deus!", "Mds, me apaixonei! Passa o insta gatinho?", "Ei ei gatinhas, o gostosão do grupo chegou!", "Gostoso? É, pena que é homem galinha!", "Não sei se comparo esse gostoso com o Ares Ridalgo!", "Cruz credo, porque tu tá aqui? Tu é feio desgraça!"]
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMGSTS[Math.floor(Math.random() * TMGSTS.length)]} )\n`
}
mencionarIMG(ABC, rnkgostoso);
break;

case 'rankgostosas': case 'rankgostosa':
if(!isGroup) return reply(enviar.msg.grupo)
ABC = `*RANK DOS 5 MAIS GOSTOSAS DO GRUPO* 😏🔥\n—\n`
TMGSTS = ["Você tá olhando para um semi Deus!", "Mds, me apaixonei! Passa o insta gatinha?", "Ei ei gatinhos, a gostosona do grupo chegou!", "Gostosa? É, pena que a mulher é uma galinha!", "Não sei se comparo essa gostosa com o Atenas!", "Cruz credo, porque tu tá aqui? Tu é feia pra desgraça!"]
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMGSTS[Math.floor(Math.random() * TMGSTS.length)]} )\n`
}
mencionarIMG(ABC, rnkgostosa);
break;




case 'rankpau':
if(!isGroup) return reply(enviar.msg.grupo)
ABC = `*RANK DOS 5 PAU MAIOR DO GRUPO 📏*\n—\n`
TMPAU = ["Pequeno pra cact, se mata maluco", `Pequenininho chega ser até fofo`, `Menor que meu dedo mindinho pequeno demais`, `Até que dá sentir, tá na média`, `Até que é grandinho`, `Grande até!`, `Gigantesco igual meu braço`, `Enorme quase chega no útero`, `Grandão demais em, e uii`, `Vara de pegar manga, grande demais, como sai na rua assim??`, "Que grandão em, nasceu metade animal"]
for (var i = 0; i < 5; i++) {
ABC += `• *${i+1}°* @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMPAU[Math.floor(Math.random() * TMPAU.length)]} )\n`
}
mencionarIMG(ABC, rnkpau);
break;

case 'mencionar':
if (!q) return reply(`Você usou o comando de forma incorreta, use a correta: ${prefix}mencionar corno`)
if (!isGroup) return reply(`Esta brincadeira só funciona em grupos.`)
if(!isModobn) return reply(mess.warningMB(prefix))
d = []
teks = `Estou mencionando o *${q}* do grupo: `
for(i = 0; i < 1; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `@${groupMembers[r].id.split('@')[0]}`
d.push(groupMembers[r].id)
}
await mentions(teks, d, true)
break;

case 'jogodavelha':
if(!isGroup) return reply(enviar.msg.grupo)
if(!menc_jid2) return reply("Marque junto com o comando, o @ do usuário que deseja desafiar..")
joguinhodavelhajs.push(sender)
fs.writeFileSync('./database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.push(from)
fs.writeFileSync('./database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
if(fs.existsSync(`./arquivos/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
const matrix = boardnow._matrix;
const chatMove = `『 *🎮 Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸ 🕹️* 』\n—\n💢 Alguém está jogando o *jogo da velha* no momento! Por favor, aguarde o término da partida para iniciar a próxima.\n-\n• @${boardnow.X} VS @${boardnow.O}\n—\n• Sua vez: @${boardnow.turn == "X" ? boardnow.X : boardnow.O}\n-\n${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}\n${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}\n${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}`;
dmzg.sendMessage(from, {text: chatMove}, {quoted: sasah,
mentions: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net",
]});
return;
}
if(argss.length === 1)
return reply(`Jogue com alguém, para inicar a partida : ${prefix + command} @membro.`);
const boardnow = setGame(`${from}`);
console.log(colors.red(time, "red"), colors.magenta("[ JOGO DA VELHA ]"), colors.white(`Iniciado - Sessão: ${boardnow.session}`));
boardnow.status = false;
boardnow.X = sender.replace("@s.whatsapp.net", "");
boardnow.O = argss[1].replace("@", "");
var blabord = [`${boardnow.X}`, `${boardnow.O}`]
fs.writeFileSync(`./arquivos/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const strChat = `『 *📌 ᎬՏᏢᎬᎡᎪΝᎠϴ ϴ ϴᏢϴΝᎬΝͲᎬ ⚔️* 』\n—\n@${sender.replace("@s.whatsapp.net", "")} _está te desafiando para uma partida de jogo da velha..._\n_[ ${argss[1]} ] Use *『S』* para aceitar ou *『N』* para não aceitar..._\n—\nEm caso de problemas, marque algum administrador para resetar o jogo com o comando ${prefix}rv`;
b = [sender, menc_jid]
mentions(strChat, b, true)
break

case 'resetarvelha':
case 'resetavelha':  
case 'resetarv':
case 'resetav': 
case 'resetvelha':
case 'rv': 
if(!isJoguin && !isGroupAdmins) return reply(`Fale com quem iniciou o jogo, só ele pode resetar, ou então algum admin.`)
if(fs.existsSync("./arquivos/tictactoe/db/" + from + ".json")) {
DLT_FL("./arquivos/tictactoe/db/" + from + ".json");
reply(`Jogo da velha resetado com sucesso nesse grupo!`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
} else {
reply(`Não a nenhuma sessão em andamento...`);
}
break



//NOVOS COMANDOS//

case 'match': {
    if (!args.join(' ').includes(' e ')) {
        return dmzg.sendMessage(from, { text: '❗ Use no formato: sintonia Nome1 e Nome2' }, { quoted: info });
    }

    let [pessoa1, pessoa2] = args.join(' ').split(' e ').map(v => v.trim());
    if (!pessoa1 || !pessoa2) {
        return dmzg.sendMessage(from, { text: '❗ Informe dois nomes separados por "e".' }, { quoted: info });
    }

    let porcentagem = Math.floor(Math.random() * 101);
    let mensagem = '💔 Hmmm... tem poucas chances...';
    if (porcentagem >= 70) mensagem = '💘 Match forte! Vocês nasceram um pro outro!';
    else if (porcentagem >= 40) mensagem = '😊 Pode dar certo, vale a pena tentar!';
    
    let resposta = `❤️ *${pessoa1}* + *${pessoa2}* = *${porcentagem}%* de Match!\n\n${mensagem}`;
    await dmzg.sendMessage(from, { text: resposta }, { quoted: info });
}
break;


case 'nomeinvertido': {
    if (!args[0]) {
        return dmzg.sendMessage(from, { text: '❗ Envie um nome ou frase para inverter.\nEx: nomeinvertido ChatGPT' }, { quoted: info });
    }

    let textoOriginal = args.join(' ');
    let invertido = textoOriginal.split('').reverse().join('');
    await dmzg.sendMessage(from, { text: `🔁 *Texto invertido:*\n${invertido}` }, { quoted: info });
}
break;






  // Iniciar o jogo, sorteia letra e categorias
  case 'stop': {
  // ... outras validações
  const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const letra = letras[Math.floor(Math.random() * letras.length)];
  const categorias = ['Cidade', 'Comida', 'Animal', 'Cor', 'País', 'Nome', 'Fruta', 'Filme']; // suas categorias aqui

  stopGames[from] = {
    letra,
    categorias,
    respostas: {},
    iniciado: false
  };

  const texto = `🎮 *STOP / Adedanha - DMZG*\n\n🔤 Letra sorteada: *${letra}*\n\n✍️ Categorias:\n${categorias.map((c,i) => ` ${i+1}. ${c}`).join('\n')}\n\n🟢 Use *;stophelp* para ver como jogar.`;
  await dmzg.sendMessage(from, { text: texto }, { quoted: info });
}
break;

  // Explica como jogar
  case 'stophelp': {
    if (!stopGames[from]) return dmzg.sendMessage(from, { text: '❗ Nenhum jogo iniciado. Use ;stop para começar.' }, { quoted: info });

    const categorias = stopGames[from].categorias.map((c,i) => `${i+1}. ${c}`).join('\n');
    const texto = `📝 *Como jogar Adedanha - DMZG*\n\n` +
      `1️⃣ ADM usa *;stop* para iniciar.\n` +
      `2️⃣ ADM digita *;stopcomecar* para liberar as respostas.\n` +
      `3️⃣ Jogadores enviam respostas com:\n*;stoptabela resposta1, resposta2...*\n\n` +
      `⚠️ As respostas devem começar com a letra *${stopGames[from].letra}*.\n` +
      `⚠️ Ordem das categorias:\n${categorias}\n\n` +
      `📊 Pontuação:\n✅ Única: 10 pts\n🔁 Repetida: 5 pts\n⛔ Ausente ou fora da letra: 0 pts`;

    await dmzg.sendMessage(from, { text: texto }, { quoted: info });
  }
  break;

  // Libera os jogadores enviarem respostas
  case 'stopcomecar': {
    if (!isGroup) return dmzg.sendMessage(from, { text: '❗ Só em grupos.' }, { quoted: info });
    if (!isGroupAdmins) return dmzg.sendMessage(from, { text: '❗ Apenas ADM pode liberar as respostas.' }, { quoted: info });
    if (!stopGames[from]) return dmzg.sendMessage(from, { text: '❌ Nenhum jogo iniciado.' }, { quoted: info });

    stopGames[from].iniciado = true;
    await dmzg.sendMessage(from, { text: '✅ Agora os jogadores podem enviar suas respostas com *;stoptabela*.', }, { quoted: info });
  }
  break;

  // Jogador envia respostas
  case 'stoptabela': {
    if (!stopGames[from] || !stopGames[from].iniciado) return dmzg.sendMessage(from, { text: '🚫 O jogo ainda não começou. Aguarde o ADM usar ;stopcomecar.' }, { quoted: info });

    const respostas = args.join(' ').split(',').map(r => r.trim());
    const esperado = stopGames[from].categorias.length;
    if (respostas.length !== esperado) return dmzg.sendMessage(from, { text: `❗ Envie ${esperado} respostas, separadas por vírgula, na ordem correta.` }, { quoted: info });

    const letra = stopGames[from].letra.toLowerCase();
    // Validar se cada resposta começa com a letra sorteada (ignora se resposta vazia)
    for (let i = 0; i < respostas.length; i++) {
      if (respostas[i].length > 0 && respostas[i][0].toLowerCase() !== letra) {
        return dmzg.sendMessage(from, { text: `❌ Sua resposta "${respostas[i]}" não começa com a letra "${letra.toUpperCase()}"! Corrija e envie novamente.` }, { quoted: info });
      }
    }

    const senderID = info.sender || info.key?.participant || info.participant;
    stopGames[from].respostas[senderID] = respostas;

    console.log('📥 Jogador respondeu:', senderID);
    console.log('📄 Respostas recebidas:', respostas);
    console.log('📦 Respostas salvas até agora:', stopGames[from].respostas);

    await dmzg.sendMessage(from, { text: '✅ Respostas registradas com sucesso!' }, { quoted: info });
  }
  break;

  // Finaliza o jogo, calcula e mostra pontuação
  case 'stopfim': {
    if (!isGroup) return dmzg.sendMessage(from, { text: '❗ Só em grupos.' }, { quoted: info });
    if (!isGroupAdmins) return dmzg.sendMessage(from, { text: '❗ Apenas ADM pode finalizar o jogo.' }, { quoted: info });

    const game = stopGames[from];
    if (!game) return dmzg.sendMessage(from, { text: '🚫 Nenhum jogo ativo.' }, { quoted: info });

    const { respostas, categorias, letra } = game;
    if (Object.keys(respostas).length === 0) {
      delete stopGames[from];
      return dmzg.sendMessage(from, { text: '⚠️ Ninguém respondeu. Jogo encerrado.' }, { quoted: info });
    }

    // Organiza respostas por categoria (colunas)
    const tabelaPorCategoria = [];
    for (let i = 0; i < categorias.length; i++) {
      const coluna = [];
      for (let jogador in respostas) {
        const resp = (respostas[jogador][i] || '').toLowerCase();
        coluna.push(resp);
      }
      tabelaPorCategoria.push(coluna);
    }

    // Calcula pontuação
    const placar = {};
    for (let jogador in respostas) placar[jogador] = 0;

    for (let i = 0; i < categorias.length; i++) {
      const respostasColuna = tabelaPorCategoria[i];
      // Conta quantas vezes cada resposta apareceu
      const contagem = respostasColuna.reduce((acc, palavra) => {
        if (palavra && palavra.startsWith(letra.toLowerCase())) {
          acc[palavra] = (acc[palavra] || 0) + 1;
        }
        return acc;
      }, {});

      for (let j = 0; j < respostasColuna.length; j++) {
        const jogador = Object.keys(respostas)[j];
        const resposta = respostasColuna[j];

        if (!resposta || !resposta.startsWith(letra.toLowerCase())) continue;

        placar[jogador] += contagem[resposta] === 1 ? 10 : 5;
      }
    }

    // Monta o ranking
    let ranking = `🏁 *Resultado Final - Adedanha*\n\n`;
    const ordenado = Object.entries(placar).sort((a,b) => b[1] - a[1]);
    for (const [jid, pontos] of ordenado) {
      const nome = jid.split('@')[0];
      ranking += `👤 *${nome}*: ${pontos} pontos\n`;
    }

    delete stopGames[from];
    await dmzg.sendMessage(from, { text: ranking }, { quoted: info });
  }
  break;
  
  
  
  
  
  
  
  
  case 'linkcurto': 
  if (!q) {
    await reagir(from, '❗');
    await reply('🔗 Envie um link para encurtar.');
    return;
  }

  await reagir(from, '⏳');

  try {
    const { data } = await axios.get(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(q)}`);
    const shortLink = data;

    const botoes = [{
      name: "cta_copy",
      buttonParamsJson: JSON.stringify({
        display_text: "🔗 Copiar Link Curto",
        id: "linkcurto",
        copy_code: shortLink
      })
    }];

    await dmzg.relayMessage(from, {
      interactiveMessage: {
        body: { text: `🔗 *Link Encurtado:* ${shortLink}` },
        footer: { text: "✅ Clique abaixo para copiar o link" },
        nativeFlowMessage: {
          buttons: botoes,
          messageParamsJson: ""
        }
      }
    }, {});
    await reagir(from, '✅');

  } catch (err) {
    console.error("Erro ao encurtar link:", err);
    await reagir(from, '❌');
    await reply('❌ Erro ao encurtar o link. Verifique se o link está válido.');
  }

  break;

  
  
  
  
  
  

  
case 'fontstyle': 
  if (!q) {
    await reagir(from, '❗');
    await reply('✏️ Envie o texto para aplicar estilos diferentes.');
    return;
  }
  await reagir(from, '⏳');
  try {
    // Funções para estilos variados
    const styles = {
      normal: s => s,
      negrito: s => s.split('').map(c => {
        // Letras maiúsculas negrito matemático (A-Z)
        if (c >= 'A' && c <= 'Z') return String.fromCodePoint(c.charCodeAt(0) + 0x1D400 - 65);
        // Letras minúsculas negrito matemático (a-z)
        if (c >= 'a' && c <= 'z') return String.fromCodePoint(c.charCodeAt(0) + 0x1D41A - 97);
        return c;
      }).join(''),
      cursiva: s => s.split('').map(c => {
        if (c >= 'A' && c <= 'Z') return String.fromCodePoint(c.charCodeAt(0) + 0x1D49C - 65);
        if (c >= 'a' && c <= 'z') return String.fromCodePoint(c.charCodeAt(0) + 0x1D4B6 - 97);
        return c;
      }).join(''),
      bolha: s => s.split('').map(c => {
        // Letras maiúsculas com bolha (A-Z)
        if (c >= 'A' && c <= 'Z') return String.fromCodePoint(c.charCodeAt(0) - 65 + 0x1F150);
        // Letras minúsculas com bolha (a-z)
        if (c >= 'a' && c <= 'z') return String.fromCodePoint(c.charCodeAt(0) - 97 + 0x1F150);
        return c;
      }).join(''),
      dupla: s => s.split('').map(c => {
        // Letras maiúsculas dupla caixa (A-Z)
        if (c >= 'A' && c <= 'Z') return String.fromCodePoint(c.charCodeAt(0) + 0x1D538 - 65);
        // Letras minúsculas dupla caixa (a-z)
        if (c >= 'a' && c <= 'z') return String.fromCodePoint(c.charCodeAt(0) + 0x1D552 - 97);
        return c;
      }).join(''),
      pequenaCaps: s => s.split('').map(c => {
        // Letras minúsculas em versalete (small caps Unicode)
        if (c >= 'a' && c <= 'z') {
          const mapCaps = {
            a: 'ᴀ', b: 'ʙ', c: 'ᴄ', d: 'ᴅ', e: 'ᴇ', f: 'ꜰ', g: 'ɢ', h: 'ʜ', i: 'ɪ', j: 'ᴊ',
            k: 'ᴋ', l: 'ʟ', m: 'ᴍ', n: 'ɴ', o: 'ᴏ', p: 'ᴘ', q: 'ǫ', r: 'ʀ', s: 's', t: 'ᴛ',
            u: 'ᴜ', v: 'ᴠ', w: 'ᴡ', x: 'x', y: 'ʏ', z: 'ᴢ'
          };
          return mapCaps[c] || c;
        }
        return c;
      }).join(''),
      sublinhado: s => s.split('').map(c => c + '\u0332').join(''),
      tachado: s => s.split('').map(c => c + '\u0336').join(''),
      circundado: s => s.split('').map(c => c + '\u20DD').join(''),
      invertido: s => s.split('').reverse().join(''),
      espaco: s => s.split('').join(' '),
      mono: s => s.split('').map(c => {
        // Usa o bloco de caracteres monospace (exemplo básico)
        if (c >= 'A' && c <= 'Z') return String.fromCodePoint(c.charCodeAt(0) + 0x1D670 - 65);
        if (c >= 'a' && c <= 'z') return String.fromCodePoint(c.charCodeAt(0) + 0x1D68A - 97);
        return c;
      }).join(''),
      grifo: s => s.split('').map(c => c + '\u035F').join(''),
    };

    const textos = Object.entries(styles).map(([nome, fn]) => ({ nome, texto: fn(q) }));
    const lista = textos.map((t, i) => `*${i + 1}.* (${t.nome})\n${t.texto || q}`).join('\n—\n');

    const botoes = textos.map((t, i) => ({
      name: "cta_copy",
      buttonParamsJson: JSON.stringify({
        display_text: `✍️ ${t.nome}`,
        id: `fontstyle${i + 1}`,
        copy_code: t.texto || q
      })
    }));

    await dmzg.relayMessage(from, {
      interactiveMessage: {
        body: { text: `✍️ Estilos para o texto "${q}":\n\n${lista}` },
        footer: { text: "📋 Clique no botão para copiar o estilo desejado." },
        nativeFlowMessage: {
          buttons: botoes,
          messageParamsJson: ""
        }
      }
    }, {});
    await reagir(from, '✅');

  } catch (e) {
    console.error("Erro fontstyle:", e);
    await reagir(from, '❌');
    await reply('❌ Erro ao aplicar estilos no texto.');
  }
  break;

 
 
 

 
 
 
 
 case 'moldura': 
  if (!q) {
    await reagir(from, '❗');
    await reply('✏️ Envie o texto para criar uma moldura.');
    return;
  }
  await reagir(from, '⏳');
  try {
    const linhas = q.split('\n');
    const largura = Math.max(...linhas.map(l => l.length));
    const borda = '═'.repeat(largura + 4);

    let textoMoldurado = `╔${borda}╗\n`;
    for (const linha of linhas) {
      const espacos = ' '.repeat(largura - linha.length);
      textoMoldurado +=    `║  ${linha}${espacos}  ║\n`;
    }
    textoMoldurado += `╚${borda}╝`;

    const botoes = [{
      name: "cta_copy",
      buttonParamsJson: JSON.stringify({
        display_text: "📋 Copiar Moldura",
        id: "moldura",
        copy_code: textoMoldurado
      })
    }];

    await dmzg.relayMessage(from, {
      interactiveMessage: {
        body: { text: `🖼️ Texto com moldura:\n\n${textoMoldurado}` },
        footer: { text: "📋 Clique para copiar o texto com moldura." },
        nativeFlowMessage: {
          buttons: botoes,
          messageParamsJson: ""
        }
      }
    }, {});
    await reagir(from, '✅');
  } catch (e) {
    console.error("Erro moldura:", e);
    await reagir(from, '❌');
    await reply('❌ Erro ao criar moldura.');
  }
  break;



case 'linhadestaque': 
  await reagir(from, '⏳');

  const linhas = [
    // Limpas & Simples
    '━━━━━━━━━━━━━━━',
    '───────────────',
    '═══════ ⋆★⋆ ══════',
    '•─────⋅☾ ☽⋅─────•',
    '•─•─•─•─•─•─•─•─•',

    // Com estrelas e formas
    '✦━━━━━━༻༺━━━━━━✦',
    '❖━━━━━❖━━━━━❖',
    '✧･ﾟ: *✧･ﾟ:* 　　 *:･ﾟ✧*:･ﾟ✧',
    '╰☆☆╮╰☆☆╮╰☆☆╮',
    '⋆｡ﾟ☁︎｡⋆｡ ﾟ☾ ﾟ｡⋆',

    // Blocos e negrito
    '▂▃▅▇█▓▒░★░▒▓█▇▅▃▂',
    '█▓▒░⡷⠂VIBE⠐⢾░▒▓█',
    '▁▂▃▄▅▆▇█▓▒░░▒▓█▇▆▅▄▃▂▁',
    '╔══════════════╗',
    '╚══════════════╝',

    // Barras e separadores diagonais
    '≪━─━─━─━─◈─━─━─━─≫',
    '⟐⟐⟐⟐⟐⟐⟐⟐⟐⟐',
    '⫷⫷⫷⫷⫷⫷⫷⫷⫷⫷',
    '↫↫↫↫↫↫↫↫↫↫↫↫',
    '⋘━━━━━❀━━━━━⋙',

    // Softs e Tumblr vibes
    '˚₊· ͟͟͞͞➳❥₊˚୨୧⋆｡˚ ⋆',
    '♡﹒︶︶︶︶˚₊·୨୧',
    '˚₊· ͟͟͞͞➳❥˚₊·',
    '𓆩♡𓆪𓆩♡𓆪𓆩♡𓆪',
    '✿◕ ‿ ◕✿',

    // Góticas / Emo vibes
    '༒──────༒',
    '𖤐━━━━━━━━━━𖤐',
    '𓆩☠𓆪𓆩☠𓆪𓆩☠𓆪',
    '𓂀𓂃𓂂𓂀𓂃𓂂𓂀',
    '𖤓𖤐𖤓𖤐𖤓𖤐𖤓',

    // Emoticons e emojis
    '☁️ ⋆｡°✩ ⋆｡°✩ ⋆｡°✩',
    '🌙˚₊·͟͟͞͞➳❥⋆｡°✩',
    '✦⋆｡˚ ☁︎ ˚｡⋆୨୧˚',
    '⚡️⚡️⚡️⚡️⚡️⚡️⚡️',
    '✧*̥˚ ✩‧₊˚',

    // Temas de coração
    '❤︎━─━───────✧',
    '♡⸝⸝⸝⸝⸝⸝⸝⸝♡',
    '❥━━━━━━♡━━━━━━❥',
    '♡̷̷̷̷̷̷̷̷̷̷̷̷̷̷̷♡̷̷̷̷̷̷̷̷̷̷̷̷̷̷̷♡',
    '🖤╌╌╌╌╌╌╌╌╌╌╌╌🖤'
  ];

  const lista = linhas.map((l, i) => `*${i + 1}.* ${l}`).join('\n—\n');

  const pobotoes = linhas.map((linha, i) => ({
    name: "cta_copy",
    buttonParamsJson: JSON.stringify({
      display_text: `📏 Linha ${i + 1}`,
      id: `linha${i + 1}`,
      copy_code: linha
    })
  }));

  await dmzg.relayMessage(from, {
    interactiveMessage: {
      body: { text: `📏 *Linhas de Destaque/Separação:*\n\n${lista}` },
      footer: { text: "📋 Toque em um botão para copiar sua favorita." },
      nativeFlowMessage: {
        buttons: pobotoes,
        messageParamsJson: ""
      }
    }
  }, {});
  await reagir(from, '✅');
  break;

  
  
  case 'cpfgerar': 
  await reagir(from, '⏳');

  function gerarCPF() {
    const rand = () => Math.floor(Math.random() * 9);
    const n = Array.from({ length: 9 }, rand);
    const calcDV = (base) => {
      const sum = base.reduce((acc, num, idx) => acc + num * ((base.length + 1) - idx), 0);
      const resto = sum % 11;
      return resto < 2 ? 0 : 11 - resto;
    };
    n.push(calcDV(n));
    n.push(calcDV(n));
    return n.join('');
  }

  const cpf = gerarCPF().replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

  const pibotoes = [{
    name: "cta_copy",
    buttonParamsJson: JSON.stringify({
      display_text: "🧾 Copiar CPF",
      id: "cpfgerado",
      copy_code: cpf
    })
  }];

  await dmzg.relayMessage(from, {
    interactiveMessage: {
      body: { text: `🧾 CPF gerado:\n\n${cpf}` },
      footer: { text: "📋 Copie com o botão abaixo (válido, mas fake)." },
      nativeFlowMessage: {
        buttons: pibotoes,
        messageParamsJson: ""
      }
    }
  }, {});
  await reagir(from, '✅');
  break;


case 'hd': 
  try {
    const context = info.message?.extendedTextMessage?.contextInfo;
    if (!context) return reply('Responda a uma imagem com ;hd');

    const quotedMessage = context.quotedMessage;
    if (!quotedMessage) return reply('Responda a uma imagem com ;hd');

    const media = quotedMessage.imageMessage;
    if (!media) return reply('Só imagem é aceita.');

    const stream = await downloadContentFromMessage(media, 'image');
    let buffer = Buffer.from([]);

    for await (const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk]);
    }

    // Tente sem quoted primeiro:
    await dmzg.sendMessage(info.key.remoteJid, { image: buffer, caption: 'Imagem em HD' });
    // Depois pode tentar com quoted correto, como info ou info.message

    reply('Imagem enviada em HD!');
  } catch (e) {
    console.error(e);
    reply('Erro ao enviar imagem em HD.');
  }
  break;







case 'glitext': 
  if (!q) {
    await reagir(from, '🤙');
    await reply('✏️ Envie um texto para aplicar efeitos glitext.');
    return;
  }

  await reagir(from, '⏳');

  try {
    // Variações glitch/bugado/Zalgo
    const estilos = [
      {
        nome: 'Clássico (Zalgo)',
        texto: q.split('').map(c => c + '̷' + '͜' + '͞').join('')
      },
      {
        nome: 'Espinhos',
        texto: q.split('').map(c => c + '҉' + '҈').join('')
      },
      {
        nome: 'Rachado',
        texto: q.split('').map(c => c + '̸' + '̶' + '͟').join('')
      },
      {
        nome: 'Corrompido',
        texto: q.split('').map(c => c + '͠' + '͡' + '̽').join('')
      },
      {
        nome: 'Bug do Zap',
        texto: q.split('').map(c => c + '͏' + '͔' + '͕').join('')
      },
      {
        nome: 'Demônio',
        texto: q.split('').map(c => c + '̿' + '͒' + '̍').join('')
      },
      {
        nome: 'Explodido',
        texto: q.split('').map(c => c + '͛' + '̲' + '̤').join('')
      },
      {
        nome: 'Espaçado Maluco',
        texto: q.split('').join('͟͟͟͟͟͟͟')
      },
      {
        nome: 'Glitch Leve',
        texto: q.split('').map(c => c + '̵').join('')
      },
      {
        nome: 'Fragmentado',
        texto: q.split('').map(c => c + '͡' + '́' + '͘').join('')
      },
    ];

    const lista = estilos.map((e, i) => `*${i + 1}.* (${e.nome})\n${e.texto}`).join('\n—\n');

    const botoesGlitch = estilos.map((e, i) => ({
      name: "cta_copy",
      buttonParamsJson: JSON.stringify({
        display_text: `🧟 ${e.nome}`,
        id: `glitext${i + 1}`,
        copy_code: e.texto
      })
    }));

    await dmzg.relayMessage(from, {
      interactiveMessage: {
        body: { text: `🧟 *Modelos de Texto Glitch para:* “${q}”\n\n${lista}` },
        footer: { text: "📋 Toque para copiar o estilo bugado que quiser." },
        nativeFlowMessage: {
          buttons: botoesGlitch,
          messageParamsJson: ""
        }
      }
    }, {});
    await reagir(from, '✅');
  } catch (e) {
    console.error("Erro em glitext:", e);
    await reagir(from, '❌');
    await reply('❌ Erro ao aplicar glitext no texto.');
  }
  break;




///////////////NOVO COMANDO DE MATCH//////////////

// SISTEMA DE TINDER - CLIENTE: DMZG // Usa apenas um arquivo JSON: tinder.json const fs = require("fs"); const path = "./banco de dados/tinder.json";

case 'rgnome':
  if (!args[0]) return reply('Envie seu nome. Ex: rgnome João Silva');
  let nome = args.join(" ");
  salvarCadastro(sender, "nome", nome);
  atualizarStatusCadastro(sender, "nome");
  reply('✅ Nome registrado!\nAgora envie:\n*rgcidade* Nome da cidade');
  break;
  
  
case 'rgcidade':
  if (!args[0]) return reply('Envie sua cidade. Ex: rgcidade Salvador');
  let cidade = args.join(" ");
  salvarCadastro(sender, "cidade", cidade);
  atualizarStatusCadastro(sender, "cidade");
  reply('✅ Cidade registrada!\nAgora envie:\n*rgidade* Sua idade');
  break;
  
  
  case 'rgidade':
  if (!args[0]) return reply('Envie sua idade. Ex: rgidade 20');
  let idade = args[0];
  if (isNaN(idade)) return reply('Use apenas números para a idade.');
  salvarCadastro(sender, "idade", idade);
  atualizarStatusCadastro(sender, "idade");
  reply('✅ Idade registrada!\nAgora envie:\n*rghobby* Seus hobbies');
  break;
  
  
  case 'rghobby':
  if (!args[0]) return reply('Envie seus hobbies. Ex: rghobby música, futebol');
  let hobby = args.join(" ");
  salvarCadastro(sender, "hobby", hobby);
  atualizarStatusCadastro(sender, "hobby");
  reply('✅ Hobbies registrados!\nAgora envie:\n*rggenero* Seu gênero');
  break;
  
  
  case 'rggenero':
  if (!args[0]) return reply('Envie seu gênero. Ex: rggenero mulher');
  let genero = args.join(" ");
  salvarCadastro(sender, "genero", genero);
  atualizarStatusCadastro(sender, "genero");
  reply('✅ Gênero registrado!\nAgora envie:\n*rgfoto* com uma imagem marcada');
  break;
  


case 'takimatch': {
  const statusCadastro = JSON.parse(fs.readFileSync('./tinderStatus.json'));
  const dadosCadastro = JSON.parse(fs.readFileSync('./tinder.json'));
  const likes = JSON.parse(fs.readFileSync('./tinderLikes.json'));

  // Verifica se o usuário está com o cadastro completo
  if (!statusCadastro[sender] || Object.values(statusCadastro[sender]).includes(false)) {
    if (!statusCadastro[sender]) return reply("❌ Você ainda não iniciou seu cadastro.\nUse: *rgnome* Seu nome completo");
    if (!statusCadastro[sender].nome) return reply("❌ Use: *rgnome* Seu nome");
    if (!statusCadastro[sender].cidade) return reply("❌ Use: *rgcidade* Sua cidade");
    if (!statusCadastro[sender].idade) return reply("❌ Use: *rgidade* Sua idade");
    if (!statusCadastro[sender].hobby) return reply("❌ Use: *rghobby* Seus hobbies");
    if (!statusCadastro[sender].genero) return reply("❌ Use: *rggenero* Seu gênero");
    if (!statusCadastro[sender].foto) return reply("❌ Use: *rgfoto* e envie uma imagem marcada");
    break;
  }

  // Filtra os cadastrados que não são o remetente e estão com cadastro completo
  const cadastrados = Object.keys(statusCadastro).filter(n => n !== sender && Object.values(statusCadastro[n]).every(x => x));
  if (cadastrados.length === 0) return reply("❌ Nenhuma outra pessoa cadastrada ainda.");

  const sorteado = cadastrados[Math.floor(Math.random() * cadastrados.length)];
  const perfil = dadosCadastro[sorteado];
  const nomeSolicitante = dadosCadastro[sender].nome || "Você";

  // Contagem de curtidas
  const nomeSorteado = perfil.nome;
  const curtidas = likes[nomeSorteado]?.length || 0;

  // Caminho da imagem local salva com rgfoto
  const caminhoFoto = perfil.foto; // o caminho já está completo no JSON
  if (!fs.existsSync(caminhoFoto)) return reply("❌ A imagem do perfil dessa pessoa não foi encontrada.");

  const texto = `
💘 Olá *${nomeSolicitante}*, você parece que se daria muito bem com:

👤 Nome: *${perfil.nome}*
🎂 Idade: *${perfil.idade} anos*
🏙️ Cidade: *${perfil.cidade}*
🎯 Hobbies: *${perfil.hobby}*
⚧️ Gênero: *${perfil.genero}*
📞 Número: wa.me/${sorteado.replace(/[^0-9]/g, "")}
❤️ Curtidas recebidas: *${curtidas}*
`.trim();

  await dmzg.sendMessage(from, {
    image: fs.readFileSync(caminhoFoto),
    caption: texto
  }, { quoted: info });

  break;
}


case 'rgfoto':
  try {
    const quotedImg = info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage;
    if (!quotedImg) return reply('❌ Marque uma *imagem* com o comando *rgfoto*!');

    const { downloadMediaMessage } = require('@whiskeysockets/baileys');
    const buffer = await downloadMediaMessage(
      { message: { imageMessage: quotedImg } },
      "buffer"
    );

    const pasta = './tinderFotos';
    if (!fs.existsSync(pasta)) fs.mkdirSync(pasta);

    const caminho = `${pasta}/${sender.replace(/[^0-9]/g, "")}.jpg`;
    fs.writeFileSync(caminho, buffer);

    salvarCadastro(sender, "foto", caminho);
    atualizarStatusCadastro(sender, "foto");

    reply("✅ Foto registrada com sucesso!\nAgora use o comando:\n*takimatch*");
  } catch (e) {
    console.log("Erro na rgfoto:", e);
    reply("❌ Erro ao processar sua imagem. Tente novamente.");
  }
  break;





case "takicurtir":
  const nomeAlvo = args.join(" ").trim();

  if (!nomeAlvo) return reply("❌ Use assim:\n*" + prefix + "takicurtir Nome da Pessoa*");

  const dbTinder = JSON.parse(fs.readFileSync("./tinder.json"));
  const likes = JSON.parse(fs.readFileSync("./tinderLikes.json"));

  // verifica se o nome existe no banco
  let alvoNumero = Object.keys(dbTinder).find(k =>
    dbTinder[k].nome?.toLowerCase() === nomeAlvo.toLowerCase()
  );

  if (!alvoNumero) {
    return reply("❌ Nome não encontrado.\nA pessoa precisa ter se registrado com *rgnome*.");
  }

  // impede curtir a si mesmo
  if (alvoNumero === sender) {
    return reply("😅 Você não pode curtir a si mesmo, né?");
  }

  // inicializa se não tiver ainda
  if (!likes[nomeAlvo]) likes[nomeAlvo] = [];

  // impede curtida duplicada
  if (likes[nomeAlvo].includes(sender)) {
    return reply("❌ Você já curtiu essa pessoa.");
  }

  // registra a curtida
  likes[nomeAlvo].push(sender);
  fs.writeFileSync("./tinderLikes.json", JSON.stringify(likes, null, 2));

  reply(`💘 Você curtiu *${nomeAlvo}*!`);
  break;
  


case "rankingtakilove":
case "takiranklove": 
  const allLikes = JSON.parse(fs.readFileSync("./tinderLikes.json"));
  const allTinder = JSON.parse(fs.readFileSync("./tinder.json"));

  if (Object.keys(allLikes).length === 0) return reply("❌ Ninguém recebeu curtidas ainda.");

  const top = Object.entries(allLikes)
    .map(([nome, arr]) => ({ nome, total: arr.length }))
    .sort((a, b) => b.total - a.total)
    .slice(0, 5);

  let msg = "🏆 *Ranking TakiLove - Top 5*\n\n";
  for (let i = 0; i < top.length; i++) {
    msg += `*${i + 1}. ${top[i].nome}* — ❤️ ${top[i].total} curtida(s)\n`;
  }

  reply(msg);
  break;


case "meuslikes":
  const likesDb = JSON.parse(fs.readFileSync("./tinderLikes.json"));
  const usersDb = JSON.parse(fs.readFileSync("./tinder.json"));

  const meuNome = usersDb[sender]?.nome;
  if (!meuNome) return reply("❌ Você precisa se registrar com *rgnome* antes.");

  const curtidas = likesDb[meuNome];
  if (!curtidas || curtidas.length === 0) return reply("😢 Ninguém te curtiu ainda...");

  let nomes = curtidas.map(num => usersDb[num]?.nome || "Alguém misterioso");

  let textoLikes = `💌 *Você foi curtado por:*\n\n`;
  textoLikes += nomes.map(n => "❤️ " + n).join("\n");

  reply(textoLikes);
  break;
  
  
  case "takimatchreal":
  const likeDb = JSON.parse(fs.readFileSync("./tinderLikes.json"));
  const cadastro = JSON.parse(fs.readFileSync("./tinder.json"));

  const meu = cadastro[sender];
  if (!meu) return reply("❌ Faça o cadastro primeiro com *rgnome*");

  let meuNomeMatch = meu.nome;
  const pessoasQueMeCurtaram = Object.entries(likeDb)
    .filter(([_, quemCurtiu]) => quemCurtiu.includes(sender))
    .map(([nome]) => nome);

  const matches = pessoasQueMeCurtaram.filter(nome =>
    likeDb[meuNomeMatch]?.includes(
      Object.keys(cadastro).find(k => cadastro[k].nome === nome)
    )
  );

  if (matches.length === 0) return reply("💔 Ainda não tem match mútuo.");

  let msgMatch = "💞 *Você teve match com:*\n\n";
  matches.forEach(nome => {
    let numero = Object.keys(cadastro).find(k => cadastro[k].nome === nome);
    msgMatch += `❤️ ${nome} — wa.me/${numero.replace(/[^0-9]/g, "")}\n`;
  });

  reply(msgMatch);
  break;
  
  
 
//==========COMANDOS MIDIA ==========\\

case 'narrador':
try {
if (args.length < 1) return dmzg.sendMessage(from,{text: `Cade o texto?, digite algo Exemplo:\n${prefix}gtts PT Oi`}, {quoted: sasah})
const gtts = require('./arquivos/funcoes/gtts')(args[0])
if (args.length < 2) return dmzg.sendMessage(from, {text: 'Falta colocar o código do idioma!'}, {quoted: sasah})
dtt = body.slice(8)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
if(dtt.length > 200) return reply('Para reduzir spam o máximo de letras permitidas são 200!')
gtts.save(ranm, dtt, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
dmzg.sendMessage(from, {audio: fs.readFileSync(ranm), ptt:true, mimetype: "audio/mpeg"}, {quoted: sasah}).catch(e => {
return reply(mess.error())
})
DLT_FL(ranm)
DLT_FL(rano)
})
})
} catch {
return reply(mess.error())
}
break


case 'qrcode': {
  if (!q) return reply('Digite o texto ou URL para gerar um QR Code.')
  reply(`📷 Gerando QR Code para: *${q}*...`)

  const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(q)}`

  try {
    await dmzg.sendMessage(from, {
      image: { url: url },
      caption: `QR Code gerado para: ${q}`
    }, { quoted: info })

  } catch (e) {
    console.error(e)
    reply('Erro ao gerar o QR Code.')
  }
}
break





case 'figurinha': case 's': case 'stickergifp': case 'figura': case 'f': case 'anz': case 'st': case 'stk': case 'fgif':
(async function () {
    try {
        var legenda = q ? q?.split("/")[0] : `👤Solicitado Por:\n😒Bot:\nCriadordoBot:`;
        var autor = q ? q?.split("/")[1] : q?.split("/")[0] ? '' : `${pushname}\n${NomeDoBot}\n${NickDono}`;

        if (isMedia && info.message.imageMessage || isQuotedImage) {
            var encmedia = isQuotedImage 
                ? info.message.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage 
                : info.message.imageMessage;

            if (!encmedia || !encmedia.mimetype) {
                reply("Erro: Não foi possível encontrar a mídia.");
                return;
            }

            var rane = getRandom('.' + await getExtension(encmedia.mimetype));
            var buffimg = await getFileBuffer(encmedia, 'image');
            fs.writeFileSync(rane, buffimg);
            var rano = getRandom('.webp');

            exec(`ffmpeg -i ${rane} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
                if (err) {
                    reply("Erro ao converter a imagem.");
                    fs.unlinkSync(rane);
                    return;
                }
                fs.unlinkSync(rane);

                var json = {
                    "sticker-pack-name": legenda,
                    "sticker-pack-publisher": autor
                };
                var exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00]);
                var jsonBuff = Buffer.from(JSON.stringify(json), "utf-8");
                var exif = Buffer.concat([exifAttr, jsonBuff]);
                exif.writeUIntLE(jsonBuff.length, 14, 4);
                var nomemeta = `${Math.floor(Math.random() * (99999 - 11111 + 1) + 11111)}.temp.exif`;
                fs.writeFileSync(`./${nomemeta}`, exif);

                exec(`webpmux -set exif ${nomemeta} ${rano} -o ${rano}`, () => {
                    dmzg.sendMessage(from, { sticker: fs.readFileSync(rano) }, { quoted: sasah });
                    fs.unlinkSync(nomemeta);
                    fs.unlinkSync(rano);
                });
            });
        } else if (isMedia && info.message.videoMessage?.seconds < 11 || isQuotedVideo && info.message.extendedTextMessage?.contextInfo?.quotedMessage?.videoMessage?.seconds < 11) {
            var encmedia = isQuotedVideo 
                ? info.message.extendedTextMessage?.contextInfo?.quotedMessage?.videoMessage 
                : info.message.videoMessage;

            if (!encmedia || !encmedia.mimetype) {
                reply("Erro: Não foi possível encontrar a mídia.");
                return;
            }

            var rane = getRandom('.' + await getExtension(encmedia.mimetype));
            var buffimg = await getFileBuffer(encmedia, 'video');
            fs.writeFileSync(rane, buffimg);
            var rano = getRandom('.webp');

            exec(`ffmpeg -i ${rane} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
                if (err) {
                    reply("Erro ao converter o vídeo.");
                    fs.unlinkSync(rane);
                    return;
                }
                fs.unlinkSync(rane);

                var json = {
                    "sticker-pack-name": legenda,
                    "sticker-pack-publisher": autor
                };
                var exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00]);
                var jsonBuff = Buffer.from(JSON.stringify(json), "utf-8");
                var exif = Buffer.concat([exifAttr, jsonBuff]);
                exif.writeUIntLE(jsonBuff.length, 14, 4);
                var nomemeta = `${Math.floor(Math.random() * (99999 - 11111 + 1) + 11111)}.temp.exif`;
                fs.writeFileSync(`./${nomemeta}`, exif);

                exec(`webpmux -set exif ${nomemeta} ${rano} -o ${rano}`, () => {
                    dmzg.sendMessage(from, { sticker: fs.readFileSync(rano) }, { quoted: sasah });
                    fs.unlinkSync(nomemeta);
                    fs.unlinkSync(rano);
                });
            });
        } else {
            reply("Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos.");
        }
    } catch (e) {
        console.log(e);
        reply("Hmm deu erro");
    }
})();
break;//DarkkMzGty_ofc

case 'toimg':
if(!isQuotedSticker) return reply('Por favor, *mencione um sticker* para executar o comando.')
try {
reply(enviar.espere)
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
dmzg.sendMessage(from, {image: buff}, {quoted: sasah}).catch(e => {
console.log(e);
reply('Ocorreu um erro ao converter o *sticker para imagem.*')
})
} catch {
reply(mess.error())
}
break


case 'videocontrario':
case 'reversevid':
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) { 
reply(enviar.espere)
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
DLT_FL(media)
if(err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
dmzg.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: sasah})
DLT_FL(ran)
})
} else {
reply("Marque um vídeo..")
}
break 

case 'videolento':
case 'slowvid':  
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) {
reply(enviar.espere) 
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
DLT_FL(media)
if(err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
dmzg.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: sasah })
DLT_FL(ran)
})
} else {
reply("Marque um vídeo..")
}
break

case 'videorapido':
case 'fastvid':  
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) {
reply(enviar.espere)
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
DLT_FL(media)
if(err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
dmzg.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: sasah })
DLT_FL(ran)
})	
} else {
reply("Marque o vídeo..")
}
break

case 'vozgrossa':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
dmzg.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: sasah})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break


case 'menino':
case 'vozmenino':  
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
dmzg.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: sasah})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break  

case 'pramp3':
if((isMedia && !info.message.imageMessage || isQuotedVideo)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.videoMessage
reply(enviar.espere)
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane 
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => { 
DLT_FL(media)
if(err) return reply('Ocorreu uma falha ao fazer a conversão do vídeo para mp3.')
buffer = fs.readFileSync(ran)
dmzg.sendMessage(from, {audio: buffer, mimetype: 'audio/mpeg'}, {quoted: sasah})
DLT_FL(ran)
})
} else {
reply("Marque o vídeo para transformar em áudio por favor..")
}
break



case 'bass2': 
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
dmzg.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: sasah})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'estourar': 
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=90:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
dmzg.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: sasah})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'afinar':
case 'audiorapido':  
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro')
hah = fs.readFileSync(ran)
dmzg.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: sasah})
DLT_FL(ran)
})
} else {
reply("Marque o áudio...")
}
break

case 'esquilo':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
dmzg.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: sasah})
DLT_FL(ran)
})
} else {
reply("Marque o áudio...")
}
break


case 'audiolento': 
case 'slow':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
dmzg.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: sasah})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break


/*case 'togif':
if(!isQuotedSticker) return reply('Marque a figurinha animada!')
try {
if((isMedia && !info.message.videoMessage || isQuotedSticker) && !q.length <= 1) {
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
reply('Aguarde, estou convertendo a figurinha para o formato gif.')
a = await webp_mp4(buff)
dmzg.sendMessage(from, {video: {url: a}, gifPlayback: true, fileName: `stick.gif`}, {quoted: sasah}).catch(e => {
reply("Erro ao realizar o envio do sticker!") 
})
DLT_FL(buff)
}
} catch {
reply(mess.error())
}
break*/






// AQUI É ONDE ESTÃO OS COMANDOS DE RPG//






//========================================\\

default:

//=====================================\\

if(isGroup && isBotGroupAdmins && !isGroupAdmins) {
if(isAntiCtt || Antiloc || isAnticatalogo) {
if(type === 'contactMessage' || type === 'contactsArrayMessage' || type === 'locationMessage' || type === 'productMessage') {
if(isGroupAdmins) return dmzg.sendMessage(from, {text: mess.antisRandomMessage()}, {quoted: info})
if(IS_DELETE) {
setTimeout(() => {
dmzg.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return
dmzg.groupParticipantsUpdate(from, [sender], 'remove')
clear = `🗑${"\n".repeat(255)}🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪᴅᴀ* ✅`
dmzg.sendMessage(from, {text: clear, contextInfo : { forwardingScore: 500, isForwarded:true}})
dmzg.sendMessage(from, {text: 'Reporte aos adminstradores do grupo sobre o ocorrido.', mentions: groupAdmins})
}}}

if(isGroup && isAntiFlood && !SoDono && !isPremium && !isnit && isBotGroupAdmins && !isGroupAdmins && !isBot) { 
if(isLimitec == null){
var limitefl = limitefll.limitefl
} else {
var limitefl = isLimitec
}
if(budy.length >= limitefl){
setTimeout( () => {
return reply(mess.charactersAnti())
console.log(colors.red('Deram spam de caracteres..'))
}, 100)
setTimeout(async () => {
if(IS_DELETE) {
setTimeout(() => {
dmzg.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
dmzg.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}
}

//INICIO DE COMANDOS SEM PREFIXO
switch(testat){
}

const EnvAudio_SMP = async (direcao, nome1, nome2, nome3, nome4, nome5) => {
bla = [nome1, nome2, nome3, nome4, nome5]
for ( i of bla) {
if(i == undefined) return  
if(messagesC.includes(i)) {
dmzg.sendMessage(from, {audio: {url: direcao}, mimetype: "audio/mpeg", ptt:true})
}}}

const EnvAudio2_SMP = async (direcao, nome1, nome2, nome3, nome4, nome5) => {
bla = [nome1, nome2, nome3, nome4, nome5]
for ( i of bla) {
if(i == undefined) return  
if(messagesC.includes(i)) {
dmzg.sendMessage(from, {audio: {url: direcao}, mimetype: "audio/mpeg", ptt:true})
}}}

const EnvTXT_SMP = async (texto, nome1, nome2, nome3, nome4, nome5) => {
bla = [nome1, nome2, nome3, nome4, nome5]
for ( i of bla) {
if(i == undefined) return  
if(messagesC.includes(i)) {
dmzg.sendMessage(from, {text: texto})
}}}

const EnvAudio2_GTTS = async (lingua, texto, txt1, txt2, txt3, txt4, txt5) => {
bla = [txt1, txt2, txt3, txt4, txt5]
for ( i of bla) {
if(i == undefined) return
if(budy2.includes(i)) {
var gtt = require('./arquivos/funcoes/gtts')(lingua)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
gtt.save(ranm, texto, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
DLT_FL(ranm)
buffer = fs.readFileSync(rano)
dmzg.sendMessage(from, {audio: buffer, ptt:true}, {quoted: sasah})
DLT_FL(rano)
})
})
}}}

if(JSON.stringify(music).includes(from)) {
AB = music.map(i => i.groupId).indexOf(from)
if(JSON.stringify(music[AB].usus).includes(sender)) {
BC = music[AB].usus.map(i => i.id).indexOf(sender)
if(budy2.toLowerCase().replace("á", "a") === `audio` && isGroup) {
reagir(from, "✅️")
link = music[AB].usus[BC].urlAudio.replace("#dmzgKey#", API_KEY_BRONXYS)
music[AB].usus.splice(BC, 1)
fs.writeFileSync("./database/data/music.json", JSON.stringify(music, null, 2))
try {
dmzg.sendMessage(from, {audio: {url: link}, mimetype: "audio/mpeg"}, {contextInfo: {participant: sender, remoteJid: from}}).catch(e => {reply(mess.error())})
} catch (e) {
reply(mess.error())
}
}
if(budy2.toLowerCase().replace("í", "i") === `video` && isGroup) {
reagir(from, "✅️")
link = music[AB].usus[BC].urlVideo.replace("#dmzgKey#", API_KEY_BRONXYS)
music[AB].usus.splice(BC, 1)
fs.writeFileSync("./database/data/music.json", JSON.stringify(music, null, 2))
try {
dmzg.sendMessage(from, {video: {url: link}, mimetype: "video/mp4"}, {contextInfo: {participant: sender, remoteJid: from}}).catch(e => {
reply(mess.error())})
} catch (e) {
reply(mess.error())
}}
if(budy2.toLowerCase() === `doc` && isGroup) {
reagir(from, "✅️")
link = music[AB].usus[BC].urlAudio.replace("#dmzgKey#", API_KEY_BRONXYS)
nome = music[AB].usus[BC].title
music[AB].usus.splice(BC, 1)
fs.writeFileSync("./database/data/music.json", JSON.stringify(music, null, 2))
try {
dmzg.sendMessage(from, {document: {url: link}, fileName: nome+'.mp3', mimetype: "audio/mpeg"}, {contextInfo: {participant: sender, remoteJid: from}}).catch(e => {
reply(mess.error())})
} catch (e) {
reply(mess.error())
}}}}

var hora_sla = moment.tz('America/Sao_Paulo').format('HH:mm:ss');



if(budy2 === "d" && !isBanchat && !isBotoff) {
if(!isGroup) return reply(reply.msg.grupo)
if(!isGroupAdmins && !isPremium) return reply("[ ❗ ] Só ADM ou VIP ❌")
if(!isBotGroupAdmins) return reply(reply.msg.Badmin)
if(!menc_prt) return reply("Marque a mensagem do usuário que deseja apagar, do bot ou de alguém..")
dmzg.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: menc_prt}})
setTimeout(async() => {
dmzg.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 1000)
}

if(budy2 === "abrirgp" && !isBanchat && !isBotoff) {
if(!isGroup) return
if(!isGroupAdmins) return
if(!isBotGroupAdmins) return
if(groupMetadata.announce == false) return
reagir(from, "🔓")
dmzg.groupSettingUpdate(from, 'not_announcement')
reply(`*GRUPO ABERTO COM SUCESSO* ✅`)
}


if(budy2 === "fechargp" && !isBanchat && !isBotoff) {
if(!isGroup) return
if(!isGroupAdmins) return
if(!isBotGroupAdmins) return
if(groupMetadata.announce == true) return
reagir(from, "🔒")
dmzg.groupSettingUpdate(from, 'announcement')
reply(`*GRUPO FECHADO COM SUCESSO* ❌`)
}








if (budy2 === "linkgp" && !isBanchat && !isBotoff) {
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
linkgc = await dmzg.groupInviteCode(from)
reply('https://chat.whatsapp.com/'+linkgc)
}

if (budy2 === "criador" && !isBanchat && !isBotoff) {
    reply("Meu dono é conhecido como DarkkMzGty, ele anda meio ocupado no momento, mas se quiser deixar um recado , o número dele está abaixo:\nwa.me/553171917951")
}


if (budy2 === "regras" && !isBanchat && !isBotoff) {
    if (!isGroup) return reply("Esse comando só funciona em grupo.")
    reply("📌 *Regras do grupo:*\n1. Sem spam\n2. Respeito\n3. Proibido conteúdo +18\n4. ADM manda")
}







if (budy2.trim().toLowerCase() === "prefixo" && !isBanchat && !isBotoff) {
    await dmzg.sendMessage(from, {
        text: `┏════════════════════┓
┃→ Opa ${pushname}, bão? 
┃→ Meu prefixo é: *${prefix}*
┃→ Clque embaixo pra ver os Cmds
┗════ Takira Bot Oficial ════┛`,
        footer: NomeDoBot,
        buttons: [
            {
                buttonId: prefix + "menu",
                buttonText: { displayText: "MENU" }
            }
        ],
        headerType: 1, // 1 = mensagem de texto
        viewOnce: true
    }, { quoted: info });
}









if (!isCmd && !isBanchat && !isBotoff && budy2.toLowerCase().startsWith("tocar ")) {
  const nomeMusica = budy2.slice(6).trim(); // Remove "tocar " da frase

  if (!nomeMusica) return reply("Digite o nome da música após 'tocar'.");

  reply('🔎 Buscando música...');

  try {
    const res = await fetchJson(`https://nodz-apis.com.br/api/downloads/playaudio?query=${encodeURIComponent(nomeMusica)}&apiKey=SUAKEY`);
    const r = res?.resultado;
    if (!res.status || !r?.audio) return reply('❌ Música não encontrada.');

    await dmzg.sendMessage(from, {
      image: { url: r.imagem },
      caption: `
🎵 *Música Encontrada:*

📌 *Título:* ${r.titulo}
👤 *Autor:* ${r.autor}
⏱️ *Duração:* ${r.tempo}
👁️ *Visualizações:* ${r.views}
🔗 *Link:* ${r.url}`
    }, { quoted: info });

    await dmzg.sendMessage(from, {
      audio: { url: r.audio },
      mimetype: 'audio/mpeg'
    }, { quoted: info });

  } catch (e) {
    console.error('Erro ao buscar música:', e);
    reply('❌ Erro ao processar sua música.');
  }
}





if (
  !isCmd &&
  !isBanchat &&
  (budy2.toLowerCase() === 'ativar' || budy2.toLowerCase() === 'desativar') &&
  SoDono // só o dono pode fazer isso
) {
  const comando = budy2.toLowerCase();

  if (comando === 'desativar') {
    if (!isBotoff) {
      nescessario.botoff = true;
      setNes(nescessario);
      reply('🛑 Bot desativado para membros. Somente o dono pode usar agora.');
    } else {
      reply('🚫 O bot já está desativado.');
    }
  }

  if (comando === 'ativar') {
    if (isBotoff) {
      nescessario.botoff = false;
      setNes(nescessario);
      reply('✅ Bot ativado. Todos os comandos estão liberados novamente.');
    } else {
      reply('🔄 O bot já estava ativado.');
    }
  }
}








if (budy2.toLowerCase() === 'ping' && !isBanchat && !isBotoff) {
  function runtime(seconds) {
    let h = Math.floor(seconds / 3600);
    let m = Math.floor((seconds % 3600) / 60);
    let s = Math.floor(seconds % 60);
    return `${h}h ${m}m ${s}s`;
  }

  const fs = require('fs');
  const path = require('path');
  const indexPath = './index.js';
  const pingImgPath = path.join(__dirname, 'media', 'ping.jpg'); // <-- coloque sua imagem em ./media/ping.jpg

  let totalCommands = 0;
  if (fs.existsSync(indexPath)) {
    const content = fs.readFileSync(indexPath, 'utf8');
    totalCommands = (content.match(/case '/g) || []).length;
  }

  const currentTime = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
  const uptime = process.uptime();
  const responseTime = (Date.now() / 1000) - info.messageTimestamp;

  const texto = `
╭━━⌈ 𝗣𝗜𝗡𝗚 𝗧𝗔𝗞𝗜𝗥𝗔 𝗕𝗢𝗧 ⌋━━╮
🟢 *Ping:* ${responseTime.toFixed(3)}s
🕛 *Horas:* ${currentTime}
📈 *Online há:* ${runtime(uptime)}
🧩 *Total de cmds:* 461
💻 *Rodando em:* Termux
╰━━━━━━━━━━━━━━━━━━╯
  `.trim();

  if (!fs.existsSync(pingImgPath)) {
    return reply("Imagem de ping não encontrada! Salve em: `./media/ping.jpg`");
  }

  await dmzg.sendMessage(from, {
    image: fs.readFileSync(pingImgPath),
    caption: texto,
    quoted: info,
    mentions: [sender]
  });
}












if (
  ['modoaluguel', 'aluguel', 'modorent'].some(cmd => budy2.toLowerCase().startsWith(cmd)) &&
  !isBotoff && !isBanchat
) {
  if (!isGroup) return reply(enviar.msg.grupo);
  if (!SoDono) return reply(enviar.msg.donomt);

  const partes = budy2.trim().split(/\s+/); // separa por espaço
  const comando = partes[0].toLowerCase();
  const valor = partes[1];

  if (!valor || (valor !== '1' && valor !== '0')) {
    return reply('1 para ativar, 0 para desativar este recurso.');
  }

  const ativar = valor === '1';

  if (ativar) {
    if (isModoAluguel) return reply('O modo aluguel já está ativado neste grupo.');
    dataGp[0].aluguel = true;
    setGp(dataGp);
    return reply('✅ Ativou com sucesso o recurso de modo aluguel no grupo...');
  } else {
    if (!isModoAluguel) return reply('O modo aluguel não está ativo no grupo atualmente.');
    dataGp[0].aluguel = false;
    setGp(dataGp);
    return reply('❌ Modo aluguel desativado, _agora o grupo pode usar meus comandos sem restrições._');
  }
}



// Comando sem prefixo para bangp e unbangp
if (budy2.toLowerCase() === 'bangp' || budy2.toLowerCase() === 'unbangp') {
    if (!isGroup) return reply(enviar.msg.grupo);
    if (!SoDono) return reply(enviar.msg.donosmt);

    if (budy2.toLowerCase() === 'bangp') {
        if (isBanchat) return reply(`Este grupo já está banido.`);
        dataGp[0].bangp = true;
        setGp(dataGp);
        return reply(`Grupo banido com sucesso`);
    } else {
        if (!isBanchat) return reply(`Este grupo não está mais banido.`);
        dataGp[0].bangp = false;
        setGp(dataGp);
        return reply(`Grupo desbanido...`);
    }
}


// AUTO TIKTOK E YOUTUBE COM BASE NA VARIÁVEL automidia
if (
  automidia &&
  typeof body === 'string' &&
  !body.startsWith(prefix)
) {
  if (body.includes('vm.tiktok.com')) {
    try {
      await reagir(from, "⌛");

      const res = await axios.get("https://nodz-apis.com.br/api/downloads/tiktok/dl", {
        params: {
          url: body.trim(),
          apiKey: NODZ_KEY
        }
      });

      const resultado = res.data.resultado;

      await dmzg.sendMessage(from, {
        video: { url: resultado.wmplay },
        mimetype: 'video/mp4'
      }, { quoted: info });

      await delay(3000);

      await dmzg.sendMessage(from, {
        audio: { url: resultado.music },
        mimetype: 'audio/mpeg'
      }, { quoted: info });

    } catch (e) {
      console.error(e);
      await reagir(from, "❌");
      reply('❌ Erro ao baixar o TikTok automaticamente.');
    }
    return;
  }
}








if (budy2.trim().toLowerCase() === "menu" && !isBanchat && !isBotoff) {
    const hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

    await dmzg.sendMessage(from, {
        image: fs.readFileSync('./media/menu.jpg'), // <- Caminho local da imagem
        caption: ` 
╭━❄️TODOS MENU❄️━╮
|❄️${prefix}Menumidia 
|❄️${prefix}Download 
|❄️${prefix}Menuinfo
|❄️${prefix}cmdmembros
|❄️${prefix}menuadm
|❄️${prefix}menuadm2
|❄️${prefix}brincadeiras
|❄️${prefix}brincadeiras2
|❄️${prefix}menudono
|❄️${prefix}menudono2
|❄️${prefix}menunotprefix
❄️${prefix}menu
╰━━━━━━━━━━━━━━━━╯`,
        footer: NomeDoBot,
        buttons: [
            {
                buttonId: prefix + "menu",
                buttonText: { displayText: "Menu Diverso" }
            },
            {
                buttonId: prefix + "ping",
                buttonText: { displayText: "Ping" }
            },
            {
                buttonId: prefix + "criador",
                buttonText: { displayText: "Criador" }
            }
        ],
        headerType: 4, // Tipo 4 = imagem
        viewOnce: true
    }, { quoted: info });
}

if(budy2 === "ban" && !isBanchat && !isBotoff) {
if (!isGroupAdmins) return reply(Res_SoAdm)

                    if (!isBotGroupAdmins) return reply(Res_BotADM)

                    try {

                        if (!menc_os2 || menc_jid2[1]) return reply("Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário...")

                        if (!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Este usuário já foi removido do grupo ou saiu.")

                        if (botNumber.includes(menc_os2)) return reply('Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você')

                        if (JSON.stringify(numerodono).indexOf(menc_os2) >= 0) return reply('Não posso remover meu dono 🤧')

                        dmzg.sendMessage(from, { text: `@${menc_os2.split("@")[0]} Foi [ REMOVIDO(A) COM SUCESSO ] - (Por motivos justos.) -`, mentions: [menc_os2] })

        dmzg.groupParticipantsUpdate(from, [menc_os2], "remove")

   } catch (e) {

       console.log(e)

   }

   }


if(messagesC.includes('exec')) {
if(!SoDono && !isnit && !issupre && !ischyt) return
try{
paramsQuoted = info.message.extendedTextMessage.contextInfo.quotedMessage.conversation || info.message.extendedTextMessage.contextInfo.quotedMessage.extendedTextMessage.text;	
return eval(`${paramsQuoted}`)
console.log(`[EXEC]~> ${paramsQuoted}`)
}catch(e){
reply(e)
}
}

//=========[--ANTI PALAVRÃO --]==========\\

if(isGroup && isPalavrao && isBotGroupAdmins && !SoDono && !isGroupAdmins) {
 if(dataGp[0].antipalavrao.palavras.some(i => budy2.includes(i.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")))) {
setTimeout(() => {
if(!JSON.stringify(groupMembers).includes(sender)) return
dmzg.groupParticipantsUpdate(from, [sender], 'remove')
setTimeout(() => {
dmzg.sendMessage(from, {delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}, 2000)
dmzg.sendMessage(from, {text: mess.permissionDenied_rUser()})
}
}

 //===============(SIMIH-1)===============\\
    
if (isGroup && isSimi && budy != undefined) {
if(type == 'imageMessage') return 
if(type == 'audioMessage') return 
if(type == 'stickerMessage') return   
if(info.key.fromMe) return 
muehe = await simih(budy)
dmzg.sendMessage(from, {text: muehe}, {quoted: info}).catch(e => {
reply("Não entendi! Por favor, me explique!") 
})
}


if (isSimi2 && !isCmd && isGroup) {
if (type == 'conversation' || type == 'extendedTextMessage') {
if (info.key.fromMe) return
if (type == 'extendedTextMessage' && prefix.includes(info.message.extendedTextMessage.contextInfo.quotedMessage.conversation[0])) return
insert(type, info)
const sami = await response(budy)
if (sami) dmzg.sendMessage(from, {text: sami}, {quoted: info})
}
}

//========================================\\

hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

if(isCmd) {
reply(`
┏═════════════════┓
┃→ Opa ${pushname},bão? 
┃→ O comando não existe
┃→ Use _${prefix}menu_  
┗━━━━━═════════━━═┛`)
}
}
}
}




const nmrdn = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`


msgupsrt().catch(async(e) => {
if(JSON.stringify(e).includes(API_KEY_BRONXYS)) {
return console.log("A api caiu ou não foi possivel executar esta ação.")
} else if(String(e).includes("Erro: aborted")) {
file = require.resolve("./connect.js")  
delete require.cache[file]
require(file)
} else {
return console.log(e)
}
})

}
}
}

//===== [Início - Área de Atualizações] =====\\
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file);
console.log(colors.red(`Alterações salvas - '${__filename}'`));
delete require.cache[file]
require(file)
})

//===== [Fim - Área de Atualizações] =====\\

iniciardmzg().catch(async(e) => {return console.log(colors.red(`• ERROR: `+e))})