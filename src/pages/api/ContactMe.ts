const faunadb = require("faunadb")
import { query as q } from "faunadb"

import { NextApiRequest, NextApiResponse } from 'next';


export default async(req:NextApiRequest, res:NextApiResponse) =>{
  const {email,name,message} = req.body

  const client = new faunadb.Client({secret: process.env.NEXT_APP_FAUNA_KEY})
  if(req.method === "POST" ){
      await client.query(q.Create(q.Collection("contact"), {data: {name:name,email:email, message:message}}))
      res.status(200).json({})
    } else {
      res.setHeader("Allow", "POST")
      res.status(405).end("Method not allowed")
    }
}
