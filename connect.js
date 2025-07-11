const { 'default': makeWASocket, useMultiFileAuthState, makeInMemoryStore, DisconnectReason, WAGroupMetadata, relayWAMessage,	MediaPathMap, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, fetchLatestBaileysVersion, MessageRetryMap, extractGroupMetadata, generateWAMessageFromContent, proto, otherOpts, makeCacheableSignalKeyStore } = require('@whiskeysockets/baileys');

const { fs, Boom, axios, crypto, util, P, linkfy, request, cheerio, ms, exec, moment, time, hora, date, getBuffer, fetchJson, getBase64, upload, banner2, banner3, colors, getGroupAdmins } = require('./exports.js');

const { menu, anotacao, menudono, adms, menulogos, efeitos, menuprem, brincadeiras, infodono, alteradores, destrava, destrava2, tabela, conselhob, palavrasc, ban, joguinhodavelhajs, joguinhodavelhajs2, nescessario, setting, logoslink, premium, countMessage, sendVideoAsSticker, sendImageAsSticker, sendVideoAsSticker2, sendImageAsSticker2, sotoy, daily, comandos, limitefll, antispam, anotar, getRandom, NodeCache,insert, response } = require('./exports.js');

const { NomeDoBot, NickDono, numerodono , prefix, } = require("./settings/settings.json");


var { fundo1, fundo2 } = require("./settings/links_img.json");

const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms))};

function DLT_FL(file) {
try { fs.unlinkSync(file) } catch (error) {}
}

const kontol_info2 = console.info;
console.info = function() { 
if(!util.format(...arguments).includes("Closing session: SessionEntry")){ 
return kontol_info2(...arguments); 
}};

const kontol_info1 = console.info;
console.info = function() { 
if(!util.format(...arguments).includes("Removing old closed session: SessionEntry {}")){
return kontol_info1(...arguments);
}};

const msgRetryCounterCache = new NodeCache();

const readline = require("readline");

const pairingCode = process.argv.includes("sim");
const rl = readline.createInterface({input: process.stdin, output: process.stdout,});
const question = (text) => new Promise((resolve) => rl.question(text, resolve));

async function iniciardmzg() {
var folderUserAuth = "./database/qr-code";

const { state, saveCreds } = await useMultiFileAuthState(folderUserAuth);

const { version, isLatest } = await fetchLatestBaileysVersion();

const dmzg = makeWASocket({
  version,
  auth: state,
  syncFullHistory: true,
  printQRInTerminal: !pairingCode,
  qrTimeout: 180000,
  logger: P({ level: 'silent' }),
  browser: ['Ubuntu', 'Edge', '110.0.1587.56'],
  msgRetryCounterCache,
  connectTimeoutMs: 60000,
  defaultQueryTimeoutMs: 0,
  keepAliveIntervalMs: 10000,
  emitOwnEvents: true,
  fireInitQueries: true,
  generateHighQualityLinkPreview: true,
  syncFullHistory: true,
  markOnlineOnConnect: true,
  patchMessageBeforeSending: (message) => {
  const requiresPatch = !!(message.buttonsMessage || message.listMessage);
    if (requiresPatch) {
      message = {
        viewOnceMessage: {
         message: {messageContextInfo: {
          deviceListMetadataVersion: 2,
          deviceListMetadata: 
          {},
       }, 
       ...message}}}}
   return message;
}
});

const PhoneNumber = require('awesome-phonenumber')

if (pairingCode && !dmzg.authState.creds.registered) {
try {
let number = await question(`${colors.red("Agora você vai precisar colar seu número aqui ou digitar, precisa do número todo até o 55 ou código do país")}${colors.cyan("\n• Clica na tela e em (paste) para colar o número: ")}`);
number = number.replace(/[^0-9]/g, "");
let code = await dmzg.requestPairingCode(number);
code = code?.match(/.{1,4}/g)?.join("-") || code;
console.log(`${colors.cyan("Aqui seu código:\n    ")}` + colors.white(code));
rl.close();
} catch(error) {
console.error('Falha mano\n', error)
}
}

dmzg.ev.process(async(events) => {
if(events["group-participants.update"]){
try {
var sab2 = events["group-participants.update"];
if(!fs.existsSync(`./database/grupos/activation_gp/${sab2.id}.json`)) return
var jsonGp = JSON.parse(fs.readFileSync(`./database/grupos/activation_gp/${sab2.id}.json`));

if(sab2.participants[0].startsWith(dmzg.user.id.split(':')[0])) return;

try { var grpmdt = await dmzg.groupMetadata(sab2.id) } catch (e) { return }

const isGroup2 = grpmdt.id.endsWith('@g.us');

try {
var GroupMetadata_ = isGroup2 ? await dmzg.groupMetadata(sab2.id): ""} catch (e) {return}

const membros_ = isGroup2 ? GroupMetadata_.participants : '';
const groupAdmins_ = isGroup2 ? getGroupAdmins(membros_) : '';

if(sab2.action == 'add'){
num = sab2.participants[0];
if(nescessario.listanegraG.includes(num)){
await dmzg.sendMessage(GroupMetadata_.id,{text: 'Takira..'});
dmzg.groupParticipantsUpdate(GroupMetadata_.id, [sab2.participants[0]], 'remove');
return;
}}
if(sab2.action == 'remove'){
num = sab2.participants[0];
}
if(sab2.action == 'add' && jsonGp[0].listanegra.includes(sab2.participants[0])){
await dmzg.sendMessage(GroupMetadata_.id,{text: 'Takira...'});
dmzg.groupParticipantsUpdate(GroupMetadata_.id, [sab2.participants[0]], 'remove');
}
if(jsonGp[0].antifake && sab2.action === 'add' && !sab2.participants[0].startsWith(55)){
if(jsonGp[0].legenda_estrangeiro != "0") {
await dmzg.sendMessage(GroupMetadata_.id, {text: jsonGp[0].legenda_estrangeiro});
}
setTimeout(async() => {
dmzg.groupParticipantsUpdate(GroupMetadata_.id, [sab2.participants[0]], 'remove');
}, 1000);
}


if(!jsonGp[0].wellcome[1].bemvindo2 && !jsonGp[0].wellcome[0].bemvindo1) return;
try {
var mdata_2 = isGroup2 ? await dmzg.groupMetadata(sab2.id): "";
} catch (e) {
return;
}
const isWelcomed = jsonGp[0].wellcome[0].legendabv != null ? true : false;
const isByed = jsonGp[0].wellcome[0].legendasaiu != 0 ? true : false;
const isWelcomed2 = jsonGp[0].wellcome[1].legendabv != null ? true : false;
const isByed2 = jsonGp[0].wellcome[1].legendasaiu != 0 ? true : false;
const groupDesc = await mdata_2.desc;
if(jsonGp[0].antifake == true && !sab2.participants[0].startsWith(55)) return;
if(jsonGp[0].wellcome[0].bemvindo1 == true){


try {
ppimg = await dmzg.profilePictureUrl(sab2.participants[0]);
} catch(e) {
ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg';
}
try {
ppgp = await dmzg.profilePictureUrl(mdata_2.id);
} catch(e) {
ppgp = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg';
}
shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`);

if(sab2.action === 'add') {

if(isWelcomed) {
teks = jsonGp[0].wellcome[0].legendabv
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', '@'+sab2.participants[0].split('@')[0])
.replace('#numerobot#', dmzg.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc);
} else {
teks = welcome(sab2.participants[0].split('@')[0], mdata_2.subject);
}
let buff = await getBuffer(ppimg);
ran = getRandom('.jpg');
await fs.writeFileSync(ran, buff);
let ranBV = [
`Takira`];
dmzg.sendMessage(mdata_2.id, { image: { url: `&username=${NomeDoBot}`}, 
caption: teks,
mentions: sab2.participants});
DLT_FL(ran);
} else if(sab2.action === 'remove') {
mem = sab2.participants[0];
try {
ppimg = await dmzg.profilePictureUrl(`${mem.split('@')[0]}@c.us`);
} catch (e){
ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg';
}

if(isByed) {
teks = jsonGp[0].wellcome[0].legendasaiu
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', pushname)
.replace('#numerobot#', dmzg.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc);
} else {
teks = bye(pushname);
}

let buff = await getBuffer(ppimg)
ran = getRandom('.jpg')
fs.writeFileSync(ran, buff)
const ranSI = [
`das `];
dmzg.sendMessage(mdata_2.id, { image: { url: ``}, 
caption: teks,
mentions: sab2.participants});
DLT_FL(ran);
}
}
  
if(jsonGp[0].wellcome[1].bemvindo2 == true){
if(sab2.action === 'add') {
if(isWelcomed2) {
teks = jsonGp[0].wellcome[1].legendabv
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', sab2.participants[0].split('@')[0])
.replace('#numerobot#', dmzg.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc)
} else {
teks = welcome2(sab2.participants[0].split('@')[0], mdata_2.subject)
}
dmzg.sendMessage(mdata_2.id, {text: teks, mentions: sab2.participants})
} else if(sab2.action === 'remove') {
var mem = sab2.participants[0]

if(isByed2) {
teks = jsonGp[0].wellcome[1].legendasaiu
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', mem.split('@')[0])
.replace('#numerobot#', dmzg.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc)
} else {
teks = bye2(mem.split('@')[0])
}
dmzg.sendMessage(mdata_2.id, {
    image: { url: ppimg },
    caption: teks,
    mentions: sab2.participants
  });
DLT_FL(ran)
}
}
} catch (e) {
console.log(e)
}
}

if(events["messages.upsert"]) {
var upsert = events["messages.upsert"]
require("./index.js")(upsert, dmzg)
}

if(events["connection.update"]) {
const update = events["connection.update"]; 
var { connection, lastDisconnect, qr, isNewLogin, receivedPendingNotifications } = update  
if(qr) {
  console.log(colors.green("Tire foto do qr code com outro celular e com o que vc quer usar o bot vc acessa pelo whatsapp em dispositivos conectados.."))
}  

const shouldReconnect = new Boom(lastDisconnect?.error)?.output.statusCode

switch (connection) {
case 'close':
if(shouldReconnect) {
if(shouldReconnect == 428) {
console.log(colors.yellow("[Error: 428] - Conexão fechou, vou tentar de novo, se der merda é por que a sua Net tá muito lenta..."));
} else if(shouldReconnect == 401) {
exec("cd database && rm -rf qr-code")
console.log(colors.red("A autenticação com WhatsApp Web falhou! Por favor, reinicie e realize a autenticação novamente."))
} else if(shouldReconnect == 515) {
console.log(colors.gray("\nA autenticação foi bem sucedida! Restart necessário para estabilizar a conexão."))
} else if(shouldReconnect == 440) {
console.log(colors.gray("Ta ocorrendo um erro , se vc tentar ligar e acontecer mais 2 ou 3 vezes , creio que haja um outro bot ligado no seu número..."))
} else if(shouldReconnect == 503) {
console.log(colors.grey("Ocorreu um erro desconhecido ao executar o bot novamente ou sua primeira inicialização."));
} else if(shouldReconnect == 502) {
console.log(colors.grey("internet  querendo cair..."))
} else if(shouldReconnect == 408) {
console.log(colors.gray(" Conexão fraca..."))
} else {
console.log(colors.yellow(`A conexão com o zap fechou pois: ${lastDisconnect?.error}`))
};
iniciardmzg();
}
break;

case 'connecting':
console.log(colors.yellow(`Estou conectando em 1,2,3... - ${date} ${time}`))
break;

case 'open':
console.log(banner3.string)   
console.log(banner2.string)  
console.log(colors.green(`❄️❄️Takira Bot-V1.0 Já conseguiu conectar...❄️❄️\n`))
await dmzg.sendPresenceUpdate("available")
await dmzg.updateProfileStatus(`Olá meu nome é ${NomeDoBot}  Esse é meu prefix(${prefix})`)
break;

default:
break
}}

if(events["creds.update"]) {await saveCreds()};
require("./index.js")(dmzg, folderUserAuth);
})}

iniciardmzg().catch(async(e) => {console.log(colors.red("• ERROR: "+e))})