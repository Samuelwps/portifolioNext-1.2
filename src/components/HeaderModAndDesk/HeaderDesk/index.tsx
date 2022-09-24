import {Container, Ullist} from "./styled"

import {AiOutlineMenu} from "react-icons/ai"
interface HeaderMob {
    menuIsVisible: boolean,
    setIsMenuVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export function HeaderDesk({menuIsVisible, setIsMenuVisible}: HeaderMob){
    return(
        <>
        <Container>
            <div onClick={() => setIsMenuVisible(true)}>Menu <AiOutlineMenu className="Menu_icon"/></div>
            <Ullist id="nav">
                <li><a href="/#about">ABOUT</a></li>
                <li><a href="/#works">WORKS</a></li>
            </Ullist>
            <Ullist id="nav">
                <li><a href="/#contact">CONTACT</a></li>
                <li><a href="https://drive.google.com/drive/folders/1b2ZqhIa0Fy1WXgugUwF9N3_3bDtKCpQz?usp=sharing" target="_blank">RESUME</a></li>
            </Ullist>
        </Container>
        </>
    );
}
