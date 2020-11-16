import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import welcomeScreen from './src/views/welcomeScreen';
import guidedMeditationSelect from './src/views/guidedMeditationSelect';
import profile from './src/views/profile';

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="welcomeScreen">
                <Stack.Screen name="welcomeScreen" component={welcomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="guidedMeditationSelect" component={guidedMeditationSelect} options={{ headerShown: false }}/>
                <Stack.Screen name="profile" component={profile} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;