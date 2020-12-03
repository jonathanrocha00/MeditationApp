import React from 'react';
import { StyleSheet, View, Button, Text, Image, TouchableHighlight } from 'react-native';
import LowerMenu from '../components/LowerMenu';

const guidedMeditationSelect = ({ navigation }) => {

    const audios = [
        {
            title: '1997',
            archive: require('../assets/music/1997.mp3'),
            duration: 190793,
            icon: require('../assets/images/lotus.png'),
            iconSize: 80,
            container: [styles.meditationContainerBig, styles.blue5],
            iconContainer: styles.meditationIconContainerBig
        },
        {
            title: 'La La Land',
            archive: require('../assets/music/Land.mp3'),
            duration: 198629,
            icon: require('../assets/images/enlightenment.png'),
            iconSize: 40,
            container: [styles.meditationContainer, styles.blue4],
            iconContainer: styles.meditationIconContainer
        },
        {
            title: '1997',
            archive: '../assets/music/1997.mp3',
            duration: 190793,
            icon: require('../assets/images/meditate.png'),
            iconSize: 40,
            container: [styles.meditationContainer, styles.blue3],
            iconContainer: styles.meditationIconContainer
        },
        {
            title: '1997',
            archive: '../assets/music/1997.mp3',
            duration: 190793,
            icon: require('../assets/images/head.png'),
            iconSize: 43,
            container: [styles.meditationContainer, styles.blue2],
            iconContainer: styles.meditationIconContainer
        },
        {
            title: '1997',
            archive: '../assets/music/1997.mp3',
            duration: 190793,
            icon: require('../assets/images/smile.png'),
            iconSize: 35,
            container: [styles.meditationContainer, styles.blue1],
            iconContainer: styles.meditationIconContainer
        }
    ];

    const renderRegularMeditations = () => {
        return (
            <>
                {audios.map(audio =>
                    <View style={audio.container}>
                        <TouchableHighlight
                            onPress={() => navigation.navigate('guidedMeditation', { title: audio.title, archive: audio.archive, duration: audio.duration, icon: audio.icon })}
                        >
                            <View style={audio.iconContainer}>

                                <Image source={audio.icon} style={{ width: audio.iconSize, height: audio.iconSize }} />
                            </View>
                        </TouchableHighlight>
                    </View>
                )}
            </>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                {renderRegularMeditations()}
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
        justifyContent: 'center',
        alignItems: 'center'
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
