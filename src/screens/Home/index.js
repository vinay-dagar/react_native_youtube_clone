import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import HeaderComponent from './HeaderComponent';

const HomeScreen = (props) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#b80404" />
            <HeaderComponent {...props} />
            <Text> This is the home Screen of youtube Clone </Text>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    }
})
