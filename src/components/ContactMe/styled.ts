import styled from "styled-components"

export const Container = styled.div`
    max-width:1440px;

    margin:0 auto;

    padding:2rem;

    border-top: 1px solid var(--gray-800);
`

export const ContainerMessage = styled.div`
    max-width: 1040px;
    min-height: 20rem;


    margin:0 auto;

    display:flex;
    justify-content:center;
    justify-content:space-between;
    align-items:center;

    padding:2rem;

    @media screen and (max-width:940px){
        flex-direction:column;
        min-height: 25rem;
    }
`

export const Message = styled.div`
    display:flex;   

    margin:1rem;
`

export const MessageData = styled.div`
    background: var(--background-input);
    border-radius: 2px;


    min-width:30rem;

    min-height:30rem;

    padding:1.3rem;

    display:flex;
    align-items:center;
    justify-content:center;
    justify-content:space-around;
    flex-direction:column;
    
    border-radius: 8px;

    input{
        width:100%;
        
        padding:1.2rem;

        font-size: 1.2rem;

        color:white;

        border-radius: 5px;

        border:none;
        outline: none;
        background:var(--background);
    }

    input:focus{
        border:1px solid var(--yellow-500);
    }

    textarea{
        width:100%;
        height:10rem;

        color:white;

        padding:1.2rem;

        font-size: 1.3rem;

        border-radius: 5px;
        border:none;
        background:var(--background);

        resize:none;
        outline:none;
    }

    textarea:focus{
        border:1px solid var(--yellow-500);
    }
`

export const DivMessageButton = styled.div`
    width: 100%;

    display:flex;
    justify-content:right;
    align-items: right;

    button{
        color:white;
        cursor:pointer;
        background:var(--yellow-500);
        padding:0.7rem;
        border:none;
        border-radius: 2px;

        letter-spacing: 1px;
        font-size:1.2rem;
        font-weight: 100;
    }
`

export const TextMessage = styled.div`
    max-height: 15rem;

    margin:1rem;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    text-align: center;

    
`

export const IniciarProjeto = styled.div`
    display:flex;
    align-items: center;
    justify-content:center;

    div{
        margin-right:0.5rem;

        width:2.3rem;
        height:2px;

        background: var(--yellow-500);
    }

`