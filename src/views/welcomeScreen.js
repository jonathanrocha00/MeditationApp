import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const welcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.home}>
            <LinearGradient
                colors={['#d9b3ff', 'transparent']}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    height: 600,
                }}
            />
            <Text style={styles.homeTitle}>
                Bem vinda de volta
            </Text>

            <Text style={styles.homeQuote}>
                "Você é uma estrela de luz. Você merece ser feliz!"
            </Text>

            <Button
                title="Relaxar"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#66ccff',
        padding: 40
    },
    homeTitle: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 50
    },
    homeQuote: {
        color: 'white',
        fontSize: 16,
        fontStyle: 'italic',
        marginBottom: 100
    },
    textInput: {
        padding: 10,
        width: 300,
        margin: 10,
        borderWidth: 1,
        borderColor: 'grey',
    },
    person: {
        marginTop: 20,
        padding: 20,
        fontSize: 20,
        backgroundColor: 'grey',
    },
});

export default welcomeScreen;