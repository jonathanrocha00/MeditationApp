import React from 'react';
import { StyleSheet, View, Button, Text, Image, TouchableHighlight } from 'react-native';
import LowerMenu from '../components/LowerMenu';

const guidedMeditationSelect = ({ navigation }) => {

    const audios = [
        {
            title: '1997',
            archive: require('../assets/music/1997.mp3')
        },
        {
            title: 'La La Land',
            archive: require('../assets/music/Land.mp3')
        },
        {
            title: 'Bla bla',
            archive: '../assets/music/1997.mp3'
        },
        {
            title: 'Me mata por favor',
            archive: '../assets/music/1997.mp3'
        },
        {
            title: 'Nunca te pedi nada',
            archive: '../assets/music/1997.mp3'
        },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <View style={[styles.meditationContainerBig, styles.blue5]}>
                    <View style={styles.meditationIconContainerBig}>
                        <TouchableHighlight
                            onPress={() => navigation.navigate('guidedMeditation', { title: audios[0].title, archive: audios[0].archive })}
                        >
                            <Image source={require('../assets/images/meditation.png')} style={{ width: 40, height: 40 }} />
                        </TouchableHighlight>
                    </View>
                    <Text> {audios[0].title} </Text>
                </View>
                <View style={[styles.meditationContainer, styles.blue4]}>
                    <View style={styles.meditationIconContainer}>
                        <TouchableHighlight
                            onPress={() => navigation.navigate('guidedMeditation', { title: audios[1].title, archive: audios[1].archive })}
                        >
                            <Image source={require('../assets/images/meditation.png')} style={{ width: 40, height: 40 }} />
                        </TouchableHighlight>
                    </View>
                    <Text> {audios[1].title} </Text>
                </View>
                <View style={[styles.meditationContainer, styles.blue3]}>
                    <View style={styles.meditationIconContainer}>
                        <TouchableHighlight
                            onPress={() => navigation.navigate('guidedMeditation', { title: audios[2].title, archive: audios[2].archive })}
                        >
                            <Image source={require('../assets/images/meditation.png')} style={{ width: 40, height: 40 }} />
                        </TouchableHighlight>
                    </View>
                    <Text> {audios[2].title} </Text>
                </View>
                <View style={[styles.meditationContainer, styles.blue2]}>
                    <View style={styles.meditationIconContainer}>
                        <TouchableHighlight
                            onPress={() => navigation.navigate('guidedMeditation', { title: audios[3].title, archive: audios[3].archive })}
                        >
                            <Image source={require('../assets/images/meditation.png')} style={{ width: 40, height: 40 }} />
                        </TouchableHighlight>
                    </View>
                    <Text> {audios[3].title} </Text>
                </View>
                <View style={[styles.meditationContainer, styles.blue1]}>
                    <View style={styles.meditationIconContainer}>
                        <TouchableHighlight
                            onPress={() => navigation.navigate('guidedMeditation', { title: audios[4].title, archive: audios[4].archive })}
                        >
                            <Image source={require('../assets/images/meditation.png')} style={{ width: 40, height: 40 }} />
                        </TouchableHighlight>
                    </View>
                    <Text> {audios[4].title} </Text>
                </View>
            </View>
            <LowerMenu
                navigation={navigation}
            />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        flex: 9,
        backgroundColor: 'skyblue',
    },
    lowerTab: {
        flex: 1,
        backgroundColor: 'powderblue',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    iconContainer: {
        flex: 1,
        alignItems: 'center',
    },
    meditationContainer: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    meditationContainerBig: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    meditationIconContainer: {
        height: 70,
        width: 70,
        backgroundColor: 'white',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    meditationIconContainerBig: {
        height: 120,
        width: 120,
        backgroundColor: 'white',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    blue1: {
        backgroundColor: '#CCE2FB',
    },
    blue2: {
        backgroundColor: '#8BB6F3',
    },
    blue3: {
        backgroundColor: '#79A4EA',
    },
    blue4: {
        backgroundColor: '#6990E7',
    },
    blue5: {
        backgroundColor: '#5774D8',
    },
});

export default guidedMeditationSelect;
