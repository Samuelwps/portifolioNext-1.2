import {Container} from "./styled"
import {IoClose} from "react-icons/io5"

interface HeaderMob {
  menuIsVisible: boolean,
  setIsMenuVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export function HeaderMob({menuIsVisible, setIsMenuVisible}: HeaderMob){
  return(
    <Container isVisible={menuIsVisible} onClick={() => setIsMenuVisible(false)}>
    <IoClose size={45} onClick={() => setIsMenuVisible(false)} className="IoClose"/>
    <nav>
    <a href="/#about" onClick={() => setIsMenuVisible(false)} >About</a>
    <a href="/#works" onClick={() => setIsMenuVisible(false)} >Works</a>
    <a href="/#contact" onClick={() => setIsMenuVisible(false)} >Contact</a>
    <a href="https://drive.google.com/drive/folders/1b2ZqhIa0Fy1WXgugUwF9N3_3bDtKCpQz?usp=sharing" target="_blank">Resume</a>
    </nav>
    </Container>
    )
  }
