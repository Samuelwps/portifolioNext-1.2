const faunadb = require("faunadb")
import { query as q } from "faunadb"

import { NextApiRequest, NextApiResponse } from 'next';


export default async(req:NextApiRequest, res:NextApiResponse) =>{
  const client = new faunadb.Client({secret: process.env.NEXT_APP_FAUNA_KEY})
  await client.query(q.Create(q.Collection("contact"), {data: {name:"TESTEEEEKRL"}}))
}
