import React from 'react'
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import { MaterialIcons, Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importing Screens
import HomeScreen from '../screens/Home';
import ExploreScreen from '../screens/Trending';
import SubscriptionScreen from '../screens/Subscription';
import InboxScreen from '../screens/Inbox'
import LibrarieScreen from '../screens/Library'

// Extra Screens
import SettingScreen from '../screens/SettingsScreen'
import SearchScreen from '../screens/SearchScreen'
import UploadScreen from '../screens/UploadsScreen'

// HeaderComponent
import HeaderComponent from './HeaderComponent';

const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigation = () => {
    return (
        <Tabs.Navigator tabBarOptions={{ activeTintColor: "#ff1919", inactiveTintColor: "#5c5c5c" }} initialRouteName="home" >
            <Tabs.Screen
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => <Entypo name="home" size={24} color={color} />
                }}
                name="home"
                component={HomeScreen}
            />
            <Tabs.Screen
                name="explore"
                options={{
                    title: 'Explore',
                    unmountOnBlur: true,
                    tabBarIcon: ({ color }) => <Ionicons name="md-compass" size={24} color={color} />
                }}
                component={ExploreScreen}
            />
            <Tabs.Screen
                name="subscription"
                options={{
                    title: 'Subscriptions',
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons name="youtube-subscription" size={24} color={color} />
                }}
                component={SubscriptionScreen}
            />
            <Tabs.Screen
                name="inbox"
                options={{
                    title: 'Inbox',
                    tabBarIcon: ({ color }) => <Ionicons name="md-mail" size={24} color={color} />
                }}
                component={InboxScreen}
            />
            <Tabs.Screen
                name="library"
                options={{
                    title: "Library",
                    tabBarIcon: ({ color }) => <MaterialIcons name="video-library" size={24} color={color} />
                }}
                component={LibrarieScreen}
            />
        </Tabs.Navigator>
    )
}

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                header: (props) => (
                    <View>
                        <HeaderComponent {...props} />
                    </View>
                )
            }} initialRouteName="home">
                <Stack.Screen name="home" component={TabNavigation} />
                <Stack.Screen options={{headerShown: false}} name="upload" component={UploadScreen} />
                <Stack.Screen options={{headerShown: false}} name="search" component={SearchScreen} />
                <Stack.Screen options={{headerShown: false}} name="setting" component={SettingScreen} />
            </Stack.Navigator>
            {/* <TabNavigation /> */}
        </NavigationContainer>
    )
}

export default Routes;
