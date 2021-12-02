import MessageHandler from '../../Handlers/MessageHandler'

import BaseCommand from '../../lib/BaseCommand'

import WAClient from '../../lib/WAClient'

import { ISimplifiedMessage } from '../../typings'

import axios from 'axios'

export default class Command extends BaseCommand {

    constructor(client: WAClient, handler: MessageHandler) {

        super(client, handler, {

            command: 'safejoke',

            description: 'Will send you random safe joke.',

            aliases: ['sjoke'],

            category: 'fun',

            usage: `${client.config.prefix}safejoke`

        })

    }

    run = async (M: ISimplifiedMessage): Promise<void> => {

        await axios

            .get(`https://v2.jokeapi.dev/joke/Any?safe-mode`)

            .then((response) => {

                // console.log(response);

                const text = `🎀 *Category* : ${response.data.category}\n📛 *Joke* : ${response.data.setup}\n🎗️ *Delivery* : ${response.data.delivery}`

                M.reply(text)

            })

            .catch((err) => {

                M.reply(`✖ An error occured
            }}
       }
}
