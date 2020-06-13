import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const TrendingScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>This is the TrendingScreen</Text>
        </View>
    )
}

export default TrendingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
