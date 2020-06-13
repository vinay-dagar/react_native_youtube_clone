import React from 'react'
import { StyleSheet, View, Dimensions, TouchableWithoutFeedback, Image, Text } from 'react-native'
import { MaterialIcons, Fontisto } from '@expo/vector-icons';

const HeaderComponent = () => {
    return (
        <View style={styles.headerContainer} >
            <View style={styles.header}>
                <View style={styles.logoContainer}>
                    <Image style={styles.iconStyle} resizeMode="contain" source={require('../../../assets/youtube.png')} />
                    <Text style={{ fontSize: 20, fontWeight: "700" }}>YouTube</Text>
                </View>
                <View style={styles.iconContainer}>
                    <MaterialIcons name="videocam" size={30} color="#5c5c5c" />
                    <Fontisto name="search" size={20} color="#5c5c5c" />
                    <TouchableWithoutFeedback onPress={() => console.log('settings')} >
                        <View style={styles.imageContainer}></View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </View>
    )
}

export default HeaderComponent

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    headerContainer: {
        width: DEVICE_WIDTH,
        height: 50,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: "center"
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        width: '100%'
    },
    iconStyle: {
        width: '20%',
        height: 30
    },
    logoContainer: {
        flexDirection: 'row',
        width: 180,
        height: '100%',
        alignItems: "center"
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '45%',
        paddingRight: 10
    },
    imageContainer: {
        borderRadius: 50,
        backgroundColor: "#5c5c5c",
        width: 25,
        height: 25
    }
})
