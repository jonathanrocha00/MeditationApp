import * as React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Image } from 'react-native';
import LowerMenu from '../components/LowerMenu';

const profile = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.home}>
                <Text> Profile </Text>
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
    home: {
        flex: 9,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    lowerTab: {
        flex: 1,
        backgroundColor: 'powderblue',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
});

export default profile;