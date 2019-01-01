import React, { Component } from "react";
import { 
    StyleSheet,
    View,
    ScrollView,
    
} from "react-native";
import { Container, Content, Icon, Header,Text, Thumbnail} from 'native-base'
import Profile from '../component/profile'

import {FeedCard }from '../component/feedCard'
//import Icon  from '../component/icon'
import styled from 'styled-components'
const StoryContainer = styled.View `
    height: 100
    `
const StoryTitleHolder = styled.View `
    flex: 1
    flexDirection: row
    justifyContent: space-between
    alignItems: center
    paddingHorizontal: 10
    paddingTop: 4
    `
const StoryThumbnail = styled(Thumbnail)`

    marginHorizontal: 4
    borderWidth: 2
    borderColor: pink
    `
const ScreenContainer = styled(Container)`
    flex: 1
    backgroundColor: ${props=>props.theme.backgroundColor}
    padding: 0
    margin:0
`
const PlayIcon = styled(Icon)`
color: ${props=>props.color? props.color: props.theme.secondaryIconColor}
fontSize: ${props=>props.size? props.size:24}
`

class HomeScreen extends Component {
    modal = ()=>{
        const{navigation}=this.props
        navigation.setParams({kark:'klark'});
        navigation.navigate({routeName:'Modal',params:{daniel:'dani'}});
    }
    render() {
        const {theme,navigation} = this.props
        console.log('navigation', navigation);
        
        return (
            <ScreenContainer >   
                <Content>
                <StoryContainer>
                    <StoryTitleHolder>
                        <Text style={{ fontWeight: 'bold',fontSize:11}}>ዜና መዋል</Text>
                        <View style={{ flexDirection:'row', alignItems:'center'}}>
                            <PlayIcon  name="md-play" size={14}></PlayIcon>
                            <Text style={{paddingLeft: 4, fontWeight: 'bold',fontSize:11}}>ሁሉን ልይ</Text>
                        </View>
                    </StoryTitleHolder>
                    <View style={{flex: 3, justifyContent:'center'}}>
                    <ScrollView horizontal={true} 
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{alignItems:'center'}}>
                        <Profile
                        url={'https://scontent.fcph1-1.fna.fbcdn.net/v/t31.0-8/10714346_10204388586091278_2627193193540173491_o.jpg?_nc_cat=102&_nc_ht=scontent.fcph1-1.fna&oh=e78dfb9e7f89800c277986d3e8bf57d6&oe=5C8B8EC9'}
                        name="ባሻ ዳንኤል">
                        </Profile>
                        <Profile
                            url={'https://scontent.fcph1-1.fna.fbcdn.net/v/t1.0-1/c170.50.621.621a/s320x320/1231286_553610721372366_2051337744_n.jpg?_nc_cat=111&_nc_ht=scontent.fcph1-1.fna&oh=966e4f4b0919920e95ca2525dfcf9f78&oe=5CC46094'}
                            name="ሊቀ መኩዋስ">
                        </Profile>
                        <Profile
                            url={'https://scontent.fcph1-1.fna.fbcdn.net/v/t1.0-9/39864464_10212706168709263_9059456134716325888_n.jpg?_nc_cat=105&_nc_ht=scontent.fcph1-1.fna&oh=890965a53f8ef1ba27abdc7776c190aa&oe=5CC40BED'}
                            name="መምሬ ኤንዲ">
                        </Profile>
                        <Profile
                            url={'https://scontent.fcph1-1.fna.fbcdn.net/v/t1.0-1/c147.0.320.320a/p320x320/48361245_717831881935615_3432461361005723648_n.jpg?_nc_cat=106&_nc_ht=scontent.fcph1-1.fna&oh=7742341df3d5724c3cc3051c743f0487&oe=5CD65F2D'}
                            name="ዶፍትር እልልታ">
                        </Profile>
                        <Profile
                            url={'https://fillmurray.com/200/300'}
                            name="ልጅ ዳዊት">
                        </Profile>
                        <Profile
                            url={'https://images.unsplash.com/photo-1542834759-0864dbb73938?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'}
                            name="በሻህ ጎንጥ">
                        </Profile>
                        <Profile
                            source={{uri:'https://images.unsplash.com/photo-1542834759-0864dbb73938?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'}}
                            name="እመት ስንዱ">
                        </Profile>
                        <Profile
                            source={{uri:'https://images.unsplash.com/photo-1542834759-0864dbb73938?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'}}
                            name="ልጅ ዳዊት">
                        </Profile>
                        <Profile
                            source={{uri:'https://images.unsplash.com/photo-1542834759-0864dbb73938?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'}}
                            name="አልጋ ወራሽ">
                        </Profile>
                        <Profile
                            source={{uri:'https://images.unsplash.com/photo-1542834759-0864dbb73938?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'}}
                            name="ወሪት ዘመናይ">
                        </Profile>
                        <Profile
                            source={{uri:'https://images.unsplash.com/photo-1542834759-0864dbb73938?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'}}
                            name="ዶፍትር እልልታ">
                        </Profile>
                    </ScrollView>
                    </View>
                </StoryContainer>
                    <FeedCard onPress={this.modal}likes={'፪፻፩'}/>
                    <FeedCard likes={41}/>
                    <FeedCard likes={21}/>
                    <FeedCard likes={7}/> 
                </Content>
            </ScreenContainer>
        );          
    }
}
export default HomeScreen

