const faunadb = require("faunadb")
import { query as q } from "faunadb"

import { NextApiRequest, NextApiResponse } from 'next';


export default async(req:NextApiRequest, res:NextApiResponse) =>{
  const {email,name,message} = req.body

  const client = new faunadb.Client({secret: "fnAExRWcSEACUG0CcdZlZMAGhCEp3JSlpWVhTmf9"})
  try{
      await client.query(q.Create(q.Collection("contact"), {data: {name:name,email:email, message:message}}))
      res.status(200).json({})
    } catch {
      res.setHeader("Allow", "POST")
      res.status(405).end("Method not allowed")
    }
}
