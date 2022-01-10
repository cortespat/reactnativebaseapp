import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

const ExampleScreen = () => {
    useEffect(() => {
        console.log('Inside useEffect');
    }, []);

    return(
        <>
            <View>
                <Text>This is an example screen</Text>
            </View>
        </>
    )
};

export default ExampleScreen;