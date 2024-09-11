import React from "react"
import styled from "styled-components";

const StyledTextArea = styled.textarea`
  width: 50%;
  height: 150px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  text-align: centre;
  font-size: 30px;
  max-width: 90%;
  color: AC5293;
`;

const StyledButton = styled.button`
background-color: #FFF8DC;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid #bffcff;
border-radius: 3px;
width: 10em;
margin-left: auto;
margin-right: auto;
color: #ac5293;
font-family: "Smooch Sans", sans-serif;
font-weight: 700;

&:hover {
  background-color: #e5c6ff;
}
`;

const StyledView = styled.div`
  background-color: #FFF8DC;
  padding: 10px;
  font-size: 30px;
  color: #ac5293;
  margin: 25px;
  display: flex;
  flex-direction: column;
  overflow: clip;
  text-align: center;
  border-radius: 5px;
  width: 400px;
`;

export const RandomGroups =()=>{
    const [names, updateNames] = React.useState("")
    const [namesArray, updateNamesArray] = React.useState(["Student 1, Student 2, Student 3, ..."])
    const [groupSize, updateGroupSize] = React.useState(4)

    const handleNameChange = (event : any)=>{
        updateNames(event.target.value)
        console.log(names)
    }

    const sortGroups = ()=>{
        const splitNames = names.split(",")
        splitNames.sort(()=>Math.random()-0.5)
        const groups = []
        let groupNumber = 0
        for (let i = 0; i <splitNames.length; i+=groupSize){
            groupNumber +=1
            const group = `Group ${groupNumber} : ${splitNames.slice(i, i+groupSize).join(', ')}`
            groups.push(group)
        }
        console.log(groups)
        updateNamesArray(groups)
    }

    const adjustGroupSize = (amount :number)=>{
        updateGroupSize((prevGroupSize)=> Math.max(prevGroupSize+amount, 2))
    }   

    const groupCards = namesArray.map((groups)=>{
    return<StyledView>{groups}</StyledView>})

    return(<>
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'centre'}}>
        <h1>Enter names below here seperated by a comma</h1>
        <StyledTextArea
        value={names}
        onChange={handleNameChange}
        />
        <br></br>
        <div style={{display: 'flex', 
            alignItems: 'center',
            margin: 'auto'}}>
            <h2 style={{padding: '10px'}}>Group size: </h2>
            <h2 style={{padding: '10px'}}>{groupSize}</h2>
                <StyledButton 
                    onClick = {()=>{adjustGroupSize(-1)}} 
                    style={{width: '50px', marginLeft: '10px'}}>
                -
                </StyledButton>
                <StyledButton 
                    onClick = {()=>{adjustGroupSize(1)}} 
                    style={{width: '50px', marginLeft: '10px'}}>
                +
                </StyledButton>

        </div>
        <br></br>
        <StyledButton onClick = {sortGroups}><h1>Sort Groups</h1></StyledButton>
        <div style ={{display: 'flex'}}>{groupCards}</div>
        </div>

        </>
    )
}