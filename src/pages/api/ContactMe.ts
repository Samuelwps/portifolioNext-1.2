import { query as q } from "faunadb"

import {fauna} from "../../services/fauna"

import { toast } from 'react-toastify';


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
