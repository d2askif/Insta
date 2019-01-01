import React, { Component } from "react";
import { 
    Text,
    StyleSheet,
    
} from "react-native";
import {Card, CardItem, Left, Right,Thumbnail,Icon,Body, Button} from 'native-base';
import styled from 'styled-components'
import {ButtonBase} from '../component/Button'
import ProfilePicture from '../component/profilePicture'

const Post = styled.Text`
color: black
text-align: justify
`
const Username = styled.Text `
color: black
`
const Date = styled.Text `
color: grey
`
const Image = styled.Image `
height: 200
flex: 1
width: null
`

const ButtonIcon = styled(Icon) `
color: ${props=>props.color || props.theme.secondaryIconColor}
fontSize: ${props=>props.size? props.size:24}

`

export class FeedCard extends Component {
    render() {
        const {likes,onPress} = this.props
        return (
            <Card cardItemPadding={0}>
                <CardItem>
                        <Left>
                            <ProfilePicture
                            source={{uri:'https://scontent.fcph1-1.fna.fbcdn.net/v/t31.0-8/10714346_10204388586091278_2627193193540173491_o.jpg?_nc_cat=102&_nc_ht=scontent.fcph1-1.fna&oh=e78dfb9e7f89800c277986d3e8bf57d6&oe=5C8B8EC9'}}>
                            </ProfilePicture>
                            <Body>
                                <Username>ባሻ ዳንኤል</Username>
                                <Date note>ተሳስ ፱ ፳፻፲</Date>
                            </Body>
                            <Right>
                        <Button transparent>
                            <ButtonIcon name="md-more"></ButtonIcon>
                        </Button>
                    </Right>
                        </Left>                      
                </CardItem>
                <CardItem style={{margin:0}} cardBody>
                    <Image
                    source={{uri:"https://source.unsplash.com/random/1600x900"}}
                    >
                    </Image>
                </CardItem>
                <CardItem style={{height:40}}>
                    <Left>
                    <ButtonBase transparent onPress={onPress}>
                        <ButtonIcon  name="heart"></ButtonIcon>
                    </ButtonBase>
                    <Button transparent>
                        <ButtonIcon  name="ios-chatbubbles"></ButtonIcon>
                    </Button>
                    <Button transparent>
                        <ButtonIcon name="ios-send"></ButtonIcon>
                    </Button>
                    </Left>
                    <Right>
                        <Button transparent>
                            <ButtonIcon name="bookmark"></ButtonIcon>
                        </Button>
                    </Right>
                </CardItem>
                <CardItem>
                    <Text>{likes} <Text style={{fontSize:11,color:'grey'}}>ፈንዳቂዎች</Text></Text>
                </CardItem>
                <CardItem>
                    <Body>
                        <Post>
                            Anim ex exercitation aliqua excepteur sunt sunt esse sunt minim. Commodo dolor incididunt veniam eiusmod. Minim minim ex commodo amet enim eu laborum proident sunt consequat incididunt mollit deserunt. Commodo quis laborum reprehenderit fugiat. Ut ut Lorem in deserunt ex ex dolor. Occaecat nulla velit id labore ullamco adipisicing ipsum Lorem elit esse.
                        </Post>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    profileImg: {
        borderRadius: 75
    }
});