import {Client} from "faunadb"

import { toast } from 'react-toastify';

export const fauna = new Client({
  secret: process.env.NEXT_APP_FAUNA_KEY || "default-key",
})

import { query as q } from "faunadb"

export async function Feste(
  contact: {Name:string, Email:string, Message:string},
  setInputName:React.Dispatch<React.SetStateAction<string>>,
  setInputEmail:React.Dispatch<React.SetStateAction<string>>,
  setAreaTextMessage:React.Dispatch<React.SetStateAction<string>>
)
{
  if(contact.Name === "" || contact.Email === ""|| contact.Message === ""){
    if(contact.Name === ""){
      toast.error("Escreva seu nome")
    }
    if(contact.Email === ""){
      toast.error("Escreva seu Email")
    }
    if(contact.Message === ""){
      toast.error("Escreva sua mensagem")
    }

  } else{
      try{
      await fauna.query(
        q.Create(
          q.Collection("contact"),
          {data : {contact}}
        )
      )
      setInputName("")
      setInputEmail("")
      setAreaTextMessage("")
      toast.success("Mensagem enviada com sucesso")
      return true
    } catch {
      return false
    }
  }
}
