import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import welcomeScreen from './src/views/welcomeScreen';
import guidedMeditationSelect from './src/views/guidedMeditationSelect';
import profile from './src/views/profile';
import freeMeditation from './src/views/freeMeditation';
import guidedMeditation from './src/views/guidedMeditation';

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="welcomeScreen">
                <Stack.Screen name="welcomeScreen" component={welcomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="guidedMeditationSelect" component={guidedMeditationSelect} options={{ headerShown: false }}/>
                <Stack.Screen name="profile" component={profile} options={{ headerShown: false }}/>
                <Stack.Screen name="freeMeditation" component={freeMeditation} options={{ headerShown: false }}/>
                <Stack.Screen name="guidedMeditation" component={guidedMeditation} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;