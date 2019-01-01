import React from 'react'
import {Text} from 'react-native'
import styled from 'styled-components'
const Container = styled.View `
alignItems: center
`
const PrimaryText = styled.Text`

`
const SecondaryText = styled.Text`
color: grey
fontSize:10
`

export default VaricalTexts = ({topText,bottomText})=>{
     return (
             <Container>
                 <PrimaryText>{topText}</PrimaryText>
                 <SecondaryText>{bottomText}</SecondaryText>
             </Container>
     )
}