import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import DetailsScreen from './src/views/Details';

function HomeScreen({ navigation }) {
    return (
        <View style={styles.home}>
            <LinearGradient
                // Background Linear Gradient
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

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Details" component={DetailsScreen} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;

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
