const faunadb = require("faunadb")
import { query as q } from "faunadb"

import { NextApiRequest, NextApiResponse } from 'next';

const express = require("express")
const app = express()



const client = new faunadb.Client({secret: process.env.NEXT_APP_FAUNA_KEY})

app.post("/api/contactme", async (req:NextApiRequest, res:NextApiResponse) => {
  const {email,name,message} = req.body
  res.setHeader("Access-Control-Allow-Origin", "*")
  await client.query(q.Create(q.Collection("contact"), {data: {name:"certo"}}))
  res.status(200).json({})
})
