const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: France_King,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function FLASH_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_France_King = France_King({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_France_King.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_France_King.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_France_King.ev.on('creds.update', saveCreds)
            Pair_Code_By_France_King.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_France_King.sendMessage(Pair_Code_By_France_King.user.id, { text: '' + b64data });

               let FLASH_MD_TEXT = `
*_IBRAHIM-TECH JUST LOGGED IN_*
*_Made With Ibrahim_*
*_Session online_*
______________________________________
╔════◇
║ *『 IBRAHIM TECH LATEST AI 』*
║ _Deploy your bot now to enjoy the commands._
╰═════════════⊷
╔═════◇
║  『••• OWNER INFO•••』
║❒ *Instagram:* _https://www.instagram.com/ibrahim_tech_official?igsh=MWt3bXY1NnVkNWd6Mg==_
║❒ *Owner:* _https://wa.me/message/74F2PC4JA4F3P1_
║❒ *Repo:* _https://github.com/ibrahimaitech/_
║❒ *WaGroup:* _https://chat.whatsapp.com/JE3gJsV15ly9ViU6lgw0GD_
║❒ *WaChannel:* _https://chat.whatsapp.com/JE3gJsV15ly9ViU6lgw0GD_
║❒ *YouTube:* _https://www.youtube.com/@ibrahimaitech_
╰═════════════⊷ 
_____________________________________

_Don't Forget To Give a Star To My Repo_`
 await Pair_Code_By_France_King.sendMessage(Pair_Code_By_France_King.user.id,{text:FLASH_MD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_France_King.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    FLASH_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service is Currently Unavailable"});
         }
        }
    }
    return await FLASH_MD_PAIR_CODE()
});
module.exports = router
