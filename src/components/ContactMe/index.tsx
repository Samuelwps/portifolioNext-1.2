import {
    Container, Message, TextMessage,
    IniciarProjeto, MessageData, ContainerMessage,
    DivMessageButton
} from "./styled"

import {useStore} from "../state"

import { useRef, useEffect, useState} from "react"

import CircularProgress from "@mui/material/CircularProgress"

export function ContactMe(){
  const node1 = useRef()
  const node2 = useRef()
  const node3 = useRef()

  const [InputName, setInputName] = useState("")
  const [InputEmail, setInputEmail] = useState("")
  const [AreaTextMessage, setAreaTextMessage] = useState("")

  const call = useStore(state => state.call)
  const setCall = useStore(state => state.setCall)

  const name = useStore(state => state.name)
  const setName = useStore(state => state.setName)

  const email = useStore(state => state.email)
  const setEmail = useStore(state => state.setEmail)

  const message = useStore(state => state.message)
  const setMessage = useStore(state => state.setMessage)

  function Call(){
    useEffect(() => {

    async function apiCall () {
      const res = await fetch("/api/contactme", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({ name:name, email:email, message:message})
      })
      setCall(false)
      setInputName("")
      setInputEmail("")
      setAreaTextMessage("")
    }
    apiCall()
    },[])

    return(
      <DivMessageButton onClick={submited}>
        <CircularProgress style={{color: "white", }}/>
      </DivMessageButton>
    )
  }

  const submited = () =>{
    setCall(true)
    setName(node1.current.value)
    setEmail(node2.current.value)
    setMessage(node3.current.value)
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
                        ref={node1}
                        />
                        <input type="text"
                        ref={node2}
                        value={InputEmail}
                        placeholder="Email"
                        onChange={(e) => setInputEmail(e.target.value)}
                        />
                        <textarea
                        value={AreaTextMessage}
                        placeholder="Message"
                        ref={node3}
                        onChange={(e) => setAreaTextMessage(e.target.value)}
                        />

                        {call ? <Call/> :
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
