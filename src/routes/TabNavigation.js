import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importing Screens
import HomeScreen from '../screens/Home';
import ExploreScreen from '../screens/Trending';
import SubscriptionScreen from '../screens/Subscription';
import InboxScreen from '../screens/Inbox'
import LibrarieScreen from '../screens/Library'

const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigation = () => {
    return(
        <Tabs.Navigator initialRouteName="home" >
            <Tabs.Screen name="home" component={HomeScreen} />
            <Tabs.Screen name="explore" component={ExploreScreen} />
            <Tabs.Screen name="subscription" component={SubscriptionScreen} />
            <Tabs.Screen name="inbox" component={InboxScreen} />
            <Tabs.Screen name="library" component={LibrarieScreen} />
        </Tabs.Navigator>
    )
}

const Routes = () => {
    return(
        <NavigationContainer>
            <TabNavigation/>
        </NavigationContainer>
    )
}