
import Home from '../screens/HomeScreen'
import Profile from '../screens/ProfileScreen'
import {createBottomTabNavigator,createStackNavigator, createAppContainer} from 'react-navigation'

const TabNav = createBottomTabNavigator(
    {
      home: {
        screen: Home,
        navigationOptions: {
          title: 'Home4',
          headerTitle: 'Home5',
          tabBarLabel: 'Home5',
        }
      },
      profile: {
        screen: Profile,
        navigationOptions: {
          tabBarLabel: 'Profile',
        }
      }
    },
    {
      tabBarPosition: 'bottom',
      animationEnabled: false,
      swipeEnabled: false,
    }
  );
  
  TabNav.navigationOptions = ({ navigation }) => {
    let { routeName } = navigation.state.routes[navigation.state.index];
    let title;
    if (routeName === 'home') {
      title = 'Home1';
    } else if (routeName === 'profile') {
      title = 'Profile';
    }
    return {
      title,
    };
  };
  
  const MainNavigator = createStackNavigator({
    // Splash: {screen: Splash, navigationOptions:{ header: null, title: 'Splash'}},
    // Login: {screen: Login, navigationOptions:{ header: null, title: 'Login'}},
    // Home: {screen: Home, navigationOptions:{ title: 'Home'}}
    Root: {
      screen: TabNav
    }
  });
  
  export default  createAppContainer(MainNavigator);