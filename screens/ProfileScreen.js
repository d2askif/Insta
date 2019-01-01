import React, { Component } from "react";
import { 
    Image,
    View,
    Text,
    Dimensions,
    StyleSheet
} from "react-native";

import Profile from '../component/profilePicture'
import VaricalTexts from '../component/verticalTexts'
import {Content,Right,Left,Body,Button, Thumbnail} from 'native-base'
import Icon from '../component/icon'
import styled from 'styled-components'
import verticalTexts from "../component/verticalTexts";


const Images = ['https://images.unsplash.com/photo-1505148359496-35d8d1ec9645?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
'https://images.unsplash.com/photo-1535915391461-a7b9de3e9365?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
'https://images.unsplash.com/photo-1518079261695-3bb046445378?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
'https://images.unsplash.com/photo-1518079328701-ec615360d0f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
'https://images.unsplash.com/photo-1545917958-c5dce6c24633?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
'https://images.unsplash.com/photo-1518079562269-53db1e4433b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
'https://images.unsplash.com/photo-1512654458600-cf5387bd9428?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
'https://images.unsplash.com/photo-1516533075015-a3838414c3ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
'https://images.unsplash.com/photo-1483671174579-bab2a5293389?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
'https://images.unsplash.com/photo-1508914127305-fa5114b81b3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
'https://images.unsplash.com/photo-1506255499158-ab32fe9c57c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1506&q=80',
'https://images.unsplash.com/photo-1513153090511-22df4c6ad14e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1529608757696-e18a2c0d0d4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'

]

const Posts = styled(verticalTexts)`
`
const Followers = styled(verticalTexts)`
`
const Following = styled(verticalTexts)`
`
const width= Dimensions.get('window').width
class ProfileScreen extends Component {
    renderImage =()=>{
        Images.map((image,index)=>{
            return (<View key={index} style={[{width:40},{height:40}]} >
                <Image
                source={{uri:image}}
                style={{flex:1}}>

                </Image>
                </View>)
        })
       
    }
    render() {
        return (
            <Content>
                <View style={{flex:1, flexDirection:'row',paddingTop:10,marginRight:4}}>
                    <View style={{flex:1,alignItems:'center',paddingRight:4}}>
                        <Thumbnail
                                source={{uri:'https://scontent.fcph1-1.fna.fbcdn.net/v/t31.0-8/10714346_10204388586091278_2627193193540173491_o.jpg?_nc_cat=102&_nc_ht=scontent.fcph1-1.fna&oh=e78dfb9e7f89800c277986d3e8bf57d6&oe=5C8B8EC9'}}
                                style={{width:75,height:75,borderRadius:37.5}} >
                        </Thumbnail>
                    </View>
                    <View style={{flex:3}}>
                        <View style={{ flex:2, flexDirection:'row',justifyContent:'space-around', marginBottom:4}}>
                            <Posts topText={'፳፯'} bottomText="መዋል"></Posts>
                            <Followers topText={'፪፻፲፱'} bottomText="አሽቃባጮች"></Followers>
                            <Following topText={'፫፻'} bottomText="አይነ ቁራ"></Following>
                        </View>
                        <View style={{flex:1, flexDirection:'row', justifyContent:'space-around'}}>
                            <Button block dark transparent bordered
                            style={{flex:5,height:30,borderColor:'grey', marginRight:8}}
                            >
                                    <Text style={{fontSize:11}}>ሀተታ ቀይር</Text>
                            </Button>  
                            <Button  dark transparent bordered
                                style={{flex:1,height:30,borderColor:'grey',alignItems:'center',justifyContent:'center'}}>
                                    <Icon name="ios-settings" size={24}></Icon>
                            </Button>
                        </View>
                    </View>
                </View>
            <View style={{padding:10}}>
                <Text>ባሻ ዳንኤል</Text>
                <View style={{flexDirection:'row',paddingTop:4}}>
                    <Text style={{flexDirection:'row', fontSize:11,}} >አስኩዋላ የቆጠርሁ | </Text>
                    <Text style={{flexDirection:'row', fontSize:11,}}>ኮምቢተር አሰላላሳይ</Text>
                </View>
                <Text style={{color:'#1DA1F2',flexDirection:'row', fontSize:12,}}>www.ቆብ-ቀዶ-ሰፊ.com</Text>
            </View>
            <View style={{justifyContent:'space-between',flex:1,flexDirection:'row', borderTopWidth:1,borderTopColor:"#eae5e5"}}>
                <Button transparent >
                    <Icon name="md-apps" color="#1DA1F2"></Icon>
                </Button>
                <Button transparent >
                    <Icon name="ios-list" color="grey"></Icon>
                </Button>
                <Button transparent >
                    <Icon name="ios-people" color="grey"></Icon>
                </Button>
                <Button transparent >
                    <Icon name="ios-bookmark" color="grey"></Icon>
                </Button>
            </View>
            <View style={{flex:1, flexDirection:'row',flexWrap:'wrap'}}>
            {
        Images.map((image,index)=>{
            return (<View key={index} style={{width:(width)/3,height:(width)/3,paddingLeft:index % 3 !==0?2:0,paddingBottom:2}} >
                <Image
                source={{uri:image}}
                style={{flex:1}}>

                </Image>
                </View>)
        })}
            </View>
            </Content>
        );
    }
}
export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});