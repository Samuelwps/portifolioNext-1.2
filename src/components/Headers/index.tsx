import {useState} from "react"
import { HeaderMob } from "../HeaderModAndDesk/HeaderMob";
import { HeaderDesk } from "../HeaderModAndDesk/HeaderDesk";
import {Container} from "./styled"

export function Headers(){
    const [menuIsVisible, setIsMenuVisible] = useState(false)

    return(
        <Container>
        <HeaderMob
        menuIsVisible={menuIsVisible}
        setIsMenuVisible={setIsMenuVisible}
        />
        <HeaderDesk
        menuIsVisible={menuIsVisible}
        setIsMenuVisible={setIsMenuVisible}
        />
        </Container>
    );
}
