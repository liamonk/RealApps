import React from "react"
import { StyledButton, StyledTextArea } from "../question-generator/CardStyles"
import { GroupCards } from "./GroupsCards"

export const RandomGroups =()=>{
    const [names, updateNames] = React.useState("")
    const [namesArray, updateNamesArray] = React.useState([""])
    
    const handleNameChange = (event : any)=>{
        updateNames(event.target.value)
        console.log(names)
    }

    const sortGroups = ()=>{
        const splitNames = names.split(",")
        splitNames.sort(()=>Math.random()-0.5)
        updateNamesArray(splitNames)
    }

    return(<>
    <div>
        <p>Enter names below here seperated by a comma</p>
        <StyledTextArea
        value={names}
        onChange={handleNameChange}
        />
        <br></br>
        <StyledButton onClick = {sortGroups}>Sort Groups</StyledButton>
        <GroupCards names={namesArray}/>
        {namesArray}
        </div>

        </>
    )
}