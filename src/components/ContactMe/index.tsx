import {
  Container, Message, TextMessage,
  IniciarProjeto, MessageData, ContainerMessage,
  DivMessageButton
} from "./styled"

import { useRef, useEffect, useState} from "react"

import CircularProgress from "@mui/material/CircularProgress"
import { toast } from 'react-toastify';

export function ContactMe(){

  const [call, setCall] = useState(false)
  const [InputName, setInputName] = useState("")
  const [InputEmail, setInputEmail] = useState("")
  const [AreaTextMessage, setAreaTextMessage] = useState("")

  function Call(){
    if(InputName === ""){
      toast.error("name")
    }else{
      useEffect(() => {
      async function apiCall () {
        const res = await fetch("/api/contactme", {
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body: JSON.stringify({ name:InputName, email:InputEmail, message:AreaTextMessage})
        })
        setCall(false)
        setInputName("")
        setInputEmail("")
        setAreaTextMessage("")
      }
      apiCall()
      },[])
    }
    return(
      <DivMessageButton onClick={submited}>
        <CircularProgress style={{color: "white", }}/>
      </DivMessageButton>
    )
  }

  const submited = () =>{
    setCall(true)
  }

    return(
        <Container id="contact">
            <ContainerMessage>
                <TextMessage>
                    <IniciarProjeto>
                        <div/>
                        <h4>Iniciar projeto</h4>
                    </IniciarProjeto>
                    <h1>Vamos começar?</h1>
                    <p>Conte-me sobre seu projeto<br/>Vou responder em breve</p>
                </TextMessage>

                <Message>
                    <MessageData>
                        <input type="text"
                        value={InputName}
                        onChange={(e) => setInputName(e.target.value)}
                        placeholder="Nome"
                        />
                        <input type="text"
                        value={InputEmail}
                        placeholder="Email"
                        onChange={(e) => setInputEmail(e.target.value)}
                        />
                        <textarea
                        value={AreaTextMessage}
                        placeholder="Message"
                        onChange={(e) => setAreaTextMessage(e.target.value)}
                        />

                        {
                        call ?
                        <Call/>
                        :
                        <DivMessageButton onClick={submited}>
                          Enviar mensagem
                        </DivMessageButton>
                        }

                    </MessageData>
                </Message>
            </ContainerMessage>
        </Container>
    )
}
