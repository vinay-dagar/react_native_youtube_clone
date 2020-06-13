import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const LibraryScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>This is the LibraryScreen</Text>
        </View>
    )
}

export default LibraryScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
