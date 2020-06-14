import React from 'react'
import { StyleSheet, View, Dimensions, Text, ScrollView } from 'react-native'

const ListHeaderComponent = ({ navigation }) => {

    const navBarItems = [
        { title: 'All', value: 'all' },
        { title: 'Sports', value: 'sports' },
        { title: 'Fashion', value: 'fashion' },
        { title: 'Gaming', value: 'gaming' },
        { title: 'Universe', value: 'universe' },
        { title: 'Comedy', value: 'comedy' },
        { title: 'Entertainment', value: 'entertainment' },
        { title: 'Action', value: 'action' },
        { title: 'Programming', value: 'programming' },
        { title: 'JavaScript', value: 'javaScript' },
        { title: 'Coding', value: 'coding' },
        { title: 'Python', value: 'python' },
    ];

    return (
        <View style={styles.headerContainer}>
            <View style={styles.header}>
                <ScrollView
                    showsHorizontalScrollIndicator={true}
                    pagingEnabled={false}
                    horizontal={true}
                    scrollEventThrottle={20}
                    contentContainerStyle={styles.contentContainer}
                    decelerationRate="normal"
                    scrollEnabled={true}
                    overScrollMode="auto"
                >
                    {
                        navBarItems.map(n => (
                            <View style={styles.textContainer} key={n.value}>
                                <Text style={styles.scrollText}> {n.title} </Text>
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
        </View>
    )
}

export default ListHeaderComponent

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    headerContainer: {
        height: 50,
        width: DEVICE_WIDTH,
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        flexGrow: 1,
        overflow: "scroll",
        padding: 10,
        backgroundColor: "#fff",
        borderTopColor: "#eee",
        borderTopWidth: 1.5
    },
    contentContainer: {
        justifyContent: 'center',
        alignItems: "center"
    },
    textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 38,
        padding: 5,
        borderRadius: 58,
        backgroundColor: "#b3b3b3",
        marginHorizontal: 3
    },
    scrollText: {
        color: "#fff",
        fontSize: 15,
        fontWeight: "600"
    }
})
