
import React from 'react'
import {createBottomTabNavigator,createStackNavigator, createAppContainer} from 'react-navigation'
import HomeScreen from './HomeScreen'
import SearchScreen from './SearchScreen'
import LikeScreen from './LikeScreen'
import ProfileScreen from './ProfileScreen'
import AddmediaScreen from './AddmediaScreen'
import {Header, Item, Input, Icon, Button} from 'native-base'
import {View,Text} from 'react-native'

/* export default class MainScreen extends React.Component{
    /* static navigationOptions = ({navigation,navigationOptions, screenProps}) =>{
        return {
            headerLeft:<Icon name="camera"  style={{paddingLeft: 10}}></Icon>,
            title: 'Main screen',
            headerRight: <Icon name="send" style={{paddingRight: 10}}></Icon>
        }
    } */
   /* render() {
        return (
            <AppContainer/>
        )

        
    }
} 
*/
/* √ headerLeft:<Icon name="camera"  style={{paddingLeft: 10,color:'red'}}></Icon>,
            title: 'Home screen',
            headerRight: <Icon name="send" style={{paddingRight: 10}}></Icon> */
const TabNavigator = createBottomTabNavigator({
    ወንጭፍ:{
        screen: HomeScreen,
        navigationOptions:{
            tabBarIcon:({tintColor})=> <Icon name="send" style={{color:tintColor}}></Icon>,         
        }
    },
    Search:{
        screen: SearchScreen,
        navigationOptions:{
            tabBarIcon:({tintColor})=> <Icon name="search" style={{color:tintColor}}></Icon>
        }
    },
    Like:{
        screen: LikeScreen,
        navigationOptions:{
            tabBarIcon:({tintColor})=> <Icon name="thumbs-up" style={{color:tintColor}}></Icon>
        }
    },
    Addmedia: {
        screen: AddmediaScreen,
        navigationOptions:{
            title: 'Home',
            tabBarIcon:({tintColor})=> <Icon name="ios-add-circle-outline" style={{color:tintColor}}></Icon>
            
        }
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions:{
            tabBarIcon:({tintColor})=> <Icon name="ios-person" style={{color:tintColor}}></Icon>
            
        }
    }
},{
    tabBarOptions: {
        activeTintColor: 'black',
        inactiveTintColor: 'grey',
        showLabel: false
    }
});
    
TabNavigator.navigationOptions = ({ navigation }) => {
    console.log(navigation);
    
    const { routeName } = navigation.state.routes[navigation.state.index];
    
    // You can do whatever you like here to pick the title based on the route name
    const headerTitle = routeName;
    if(routeName==="Profile")
    {
        
        
            
            
    
        return {
            headerTitle: "ባሻ ዳንኤል",
            headerLeft:<Icon name="camera"  style={{paddingLeft: 10}}></Icon>,
            headerRight: <Icon name="send" style={{paddingRight: 10}}></Icon>,
        } 
    }
    if(routeName=='Search') {
    
    return {
       
        header: (props)=>{
                console.log('HeaderProp',props);
               return ( <Header searchBar rounded>
                            <Item>
                                <Icon name="ios-search" />
                                <Input placeholder="Search" />
                                <Icon name="ios-people" />
                            </Item>
                            <Button transparent onPress={()=>alert('search')}>
                                <Text>Search</Text>
                            </Button>
                         </Header>)
        }
        
        

    };
}
else {
       return {
        headerTitle: headerTitle=="ወንጭፍ"?"ወንጭፍ": null,
        headerLeft:<Icon name="camera"  style={{paddingLeft: 10}}></Icon>,
        headerRight: <Icon name="send" style={{paddingRight: 10}}></Icon>,
    } 
}
    };

    const AppNavigator = createStackNavigator({
    Main: {
        screen: TabNavigator
    },
    Modal: {
        screen: LikeScreen
    }
    },{
        mode: 'modal',
       //headerMode: 'none',
      });
   export default createAppContainer(AppNavigator)
