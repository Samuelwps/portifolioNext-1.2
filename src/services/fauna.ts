import {Client} from "faunadb"

export const fauna = new Client({
  secret: process.env.NEXT_APP_FAUNA_KEY,
})
