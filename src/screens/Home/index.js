import React from 'react'
import {
    View, Text, StyleSheet,
    StatusBar, FlatList,
    Image, Dimensions,
    TouchableOpacity,
} from 'react-native'
import HeaderComponent from './HeaderComponent';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Dummy DATA
import DUMMY_DATA from '../../model/DUMMY_DATA.json';

const HomeScreen = (props) => {

    const renderVideoList = ({ item, index }) => (
        <TouchableOpacity activeOpacity={0.7} style={styles.itemContainer} key={item.videoId} onPress={() => console.log(item)}>
            <View style={styles.listItemContainer}>
                <Image style={{ height: 190, width: '100%' }} resizeMode="cover" source={require('../../../assets/image.png')} />
                <View style={styles.descriptionContainer}>
                    <View style={styles.channelIcon}>
                        <Text style={{ fontWeight: "900", color: "#000", fontSize: 30 }}>D</Text>
                    </View>
                    <View style={{ width: '82%' }}>
                        <View style={styles.videoTitleContainer}>
                            <Text style={styles.videoTitle}> {item.videoTitle} </Text>
                        </View>
                        <View style={styles.channelContainer}>
                            <Text style={styles.channelText}> {item.channelName} </Text>
                            <Text style={styles.channelText}> {item.views} </Text>
                            <Text style={styles.channelText}> . </Text>
                            <Text style={styles.channelText}> {item.uploadedAt} </Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'flex-start', alignItems: "center" }}>
                        <MaterialCommunityIcons name="dots-vertical" size={22} color="#808080" />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )

    const dataNotFound = () => {
        return (<View><Text> Data Not Available</Text></View>)
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#b80404" />
            <FlatList
                data={DUMMY_DATA}
                ListHeaderComponent={HeaderComponent}
                keyExtractor={(item) => item.videoId}
                renderItem={renderVideoList}
                ListEmptyComponent={dataNotFound}
                getItemLayout={(data, index) => {
                    return { length: 10, offset: 10 * index, index }
                }}
            />
        </View>
    )
}

export default HomeScreen

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    itemContainer: {
        width: DEVICE_WIDTH,
        height: 260,
        marginTop: 2
    },
    listItemContainer: {
        width: '100%',
        height: 260,
        borderRadius: 5,
        marginVertical: 1
    },
    descriptionContainer: {
        flexDirection: 'row',
        marginTop: 6,
    },
    channelIcon: {
        width: 35,
        height: 35,
        borderRadius: 50,
        backgroundColor: "#fff",
        marginRight: 4,
        alignItems: "center",
        justifyContent: "center"
    },
    videoTitleContainer: {
        paddingVertical: 2,
    },
    videoTitle: {
        fontSize: 14,
        fontWeight: "700",
        color: "#101010",
        textAlign: "left",
    },
    channelContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    channelText: {
        fontSize: 12,
        color: "#000",
        fontWeight: "200",
    }
})
