import * as React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Image } from 'react-native';

const LowerMenu = ({ navigation }) => {
    return (
        <View style={styles.lowerTab}>
            <View style={styles.iconContainer}>
                {/* <TouchableHighlight
                    onPress={() => navigation.navigate('profile')}
                >
                    <Image source={require('../assets/images/profile.png')} style={{ width: 40, height: 40 }} />
                </TouchableHighlight> */}
            </View>
            <View style={styles.iconContainer}>
                <TouchableHighlight
                    onPress={() => navigation.navigate('guidedMeditationSelect')}
                >
                    <Image source={require('../assets/images/meditate.png')} style={{ width: 40, height: 40 }} />
                </TouchableHighlight>
            </View>
            <View style={styles.iconContainer}>
                <TouchableHighlight
                    onPress={() => navigation.navigate('freeMeditation')}
                >
                    <Image source={require('../assets/images/timer.png')} style={{ width: 50, height: 50 }} />
                </TouchableHighlight>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    lowerTab: {
        flex: 1,
        backgroundColor: '#d9b3ff',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    iconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default LowerMenu;