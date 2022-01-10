import React from 'react';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import MainNavigator from './src/navigation/MainNavigator';

const App = () => {
    const navigationRef = useNavigationContainerRef(); 

    return (
        <SafeAreaProvider>
            <NavigationContainer ref={navigationRef}>
                <MainNavigator />
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default App;
