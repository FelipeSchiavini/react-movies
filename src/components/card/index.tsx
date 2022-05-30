import { H3, H4 } from "../../styles/globalutils/headers"
import { CardContainer, Image, CardTitle } from "./card.style"
import { Text } from "../../styles/globalutils/text"
import Rate from "../../styles/globalutils/rating/rating.component";


export const Card:React.FunctionComponent<{title: string; link:string;}> = ({title, link}) => { 
    return (
        <>
        <CardContainer>
            <CardTitle>{title}</CardTitle>
            <Image src ={link} alt="banana"/>
            {/* TODO: FIX LAYOUT AND ADD PLUS ICON  */}
            <Rate isAvaliable = {true} note={3} />
        </CardContainer>
       
        </>
    )
}

export default Card