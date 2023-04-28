import { ButtonGit } from "./styled"
import { FaGithub } from 'react-icons/fa'

export function GitButton({link}){
  return(
    <ButtonGit href={link} target="_blank">
      <div>
      <FaGithub id="faGithub"/>
      </div>
      View repository
    </ButtonGit>
    )
  }
