import * as React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Image } from 'react-native';

const LowerMenu = ({ navigation }) => {
    return (
        <View style={styles.lowerTab}>
            <View style={styles.iconContainer}>
                <TouchableHighlight
                    onPress={() => navigation.navigate('profile')}
                >
                    <Image source={require('../assets/images/touch.png')} style={{ width: 40, height: 40 }} />
                </TouchableHighlight>
            </View>
            <View style={styles.iconContainer}>
                <TouchableHighlight
                    onPress={() => navigation.navigate('guidedMeditationSelect')}
                >
                    <Image source={require('../assets/images/touch.png')} style={{ width: 40, height: 40 }} />
                </TouchableHighlight>
            </View>
            <View style={styles.iconContainer}>
                <TouchableHighlight
                    onPress={() => navigation.navigate('welcomeScreen')}
                >
                    <Image source={require('../assets/images/touch.png')} style={{ width: 40, height: 40 }} />
                </TouchableHighlight>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    lowerTab: {
        flex: 1,
        backgroundColor: 'powderblue',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
});

export default LowerMenu;