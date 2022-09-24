import {
    Container, Message, TextMessage,
    IniciarProjeto, MessageData, ContainerMessage,
    DivMessageButton
} from "./styled"


import { Feste } from "../../services/fauna"
import { useState } from "react"

export function ContactMe(){
    const [InputName, setInputName] = useState("")
    const [InputEmail, setInputEmail] = useState("")
    const [AreaTextMessage, setAreaTextMessage] = useState("")

    const contact = {
        Name:InputName,
        Email: InputEmail,
        Message: AreaTextMessage
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
                        <input type="text" value={InputName}
                        placeholder="Nome"
                        onChange={(e) => setInputName(e.target.value)}
                        />
                        <input type="email" value={InputEmail}
                        placeholder="Email"
                        onChange={(e) => setInputEmail(e.target.value)}
                        />

                        <textarea 
                        value={AreaTextMessage}
                        placeholder="Message"
                        onChange={(e) => setAreaTextMessage(e.target.value)}
                        />

                        <DivMessageButton>
                            <button type="submit" onClick={() => Feste(contact, setInputName, setInputEmail, setAreaTextMessage)}>
                                Enviar mensagem
                            </button>
                        </DivMessageButton>
                    </MessageData>
                </Message>
            </ContainerMessage>
        </Container>
    )
}