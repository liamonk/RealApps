import { Card } from "../countdown/Card"


export const GroupCards = (props : any)=>{
    const namesArray = props.namesArray || []
    const nameElements = namesArray.map((names : string)=>{
        return <p>{names}</p>
    })
    return(
        <>
        {nameElements}
        </>
    )
} 