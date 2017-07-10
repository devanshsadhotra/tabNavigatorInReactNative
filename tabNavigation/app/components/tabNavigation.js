import React, { Component } from 'react';
import {TabNavigator} from 'react-navigation';
import {AppRegistry,
  Text,
  View
} from 'react-native';
import Pride from './moments'
class RecentChats extends React.Component{
    render(){
        return <Text> List of Recent Chats </Text>
    }
}
class AllContacts extends React.Component{
    render(){
        return <Text> List of Contacts </Text>
    }
}
class PrivateMessage extends React.Component{
    render(){
        return <Text> List of Contacts </Text>
    }
}
class Moments extends React.Component{
    render(){
        return <View>
            <Pride/>
        </View>
    }
}
const MainScreenNavigator =TabNavigator({
    Recent: {screen: RecentChats},
    All: { screen: AllContacts },
    Moments: { screen: Moments},
    "Private Message":{screen: PrivateMessage}
});
AppRegistry.registerComponent('tabNavigation', () => MainScreenNavigator);
