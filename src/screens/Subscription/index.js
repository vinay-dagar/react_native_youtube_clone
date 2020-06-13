import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const SubscriptionScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>THis is the SubscriptionScreen</Text>
        </View>
    )
}

export default SubscriptionScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
