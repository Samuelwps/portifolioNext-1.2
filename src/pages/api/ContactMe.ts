const faunadb = require("faunadb")
import { query as q } from "faunadb"

import { toast } from 'react-toastify';
import { NextApiRequest, NextApiResponse } from 'next';


export default async(req:NextApiRequest, res:NextApiResponse) =>{
  const {email,name,message} = req.body

  const client = new faunadb.Client({secret: process.env.FAUNADB_KEY})
  try{
      req.headers["https://samuelribeiro.vercel.app"]
      await client.query(q.Create(q.Collection("contact"), {data: {name:name,email:email, message:message}}))
      res.status(200).json({})
      return true
    } catch {
      res.setHeader("Allow", "POST")
      res.status(405).end("Method not allowed")
      return false
    }
}
