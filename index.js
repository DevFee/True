import { Client, IntentsBitField, MessageActivityType } from "discord.js";
import * as dotenv from "dotenv"
dotenv.config()

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
})
const PREFIX = "-";
let classificacao = [

]

class Perfil{
    constructor(pp1, pp2){
        this.money = pp1
        this.name = pp2
    }
}

client.on("messageCreate", (message) => {
    if(message.author.bot) return
    if(message.content == `${PREFIX}cd`){
        message.reply("")
    }
})

client.on('ready', (e) =>{
    console.log(`${e.user.tag} esta online!`)
})

client.login(process.env.TOKEN)