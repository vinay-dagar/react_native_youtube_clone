import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const InboxScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>This is the InboxScreen</Text>
        </View>
    )
}

export default InboxScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
