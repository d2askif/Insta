import ProfilePicture from './profilePicture'
import React, { Component } from "react";
import styled from 'styled-components'
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

const Container = styled.View `
alignItems: center
`
const Picture = styled(ProfilePicture)`
height: 52
width: 52
borderRadius: 26
marginHorizontal: 6
borderWidth: 2
borderColor: pink
`
const DispalyName = styled.Text`
paddingTop:2
fontSize: 10
color: grey
`

class Profile extends Component {
    render() {
        const {name,url}= this.props
        return (
            <Container >
                 <Picture
                    source={{uri:url}}>
                </Picture>
                <DispalyName>{name}</DispalyName>
            </Container>
        );
    }
}
export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});