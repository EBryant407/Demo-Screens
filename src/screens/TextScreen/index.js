import React, { useState } from 'react';
import { Text, StyleSheet, TextInput } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';
import {
    ParentView,
    PromptText,
    RequirementText,
    ScreenBackground,
}
    from './styles';


const TextScreen = () => {
    const [password, setPassword] = useState('');
    return (
        <ScreenBackground
            source={require('../../../assets/key.jpg')}
        >
            <ParentView>
                <PromptText>
                    Enter Password:
            </PromptText>
                <TextInput
                    style={styles.input}
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={password}
                    onChangeText={(newValue) => setPassword(newValue)}
                />
                {password.length < 4 ?
                    <RequirementText>
                        Password must be atleast 4 characters
            </RequirementText> : null}
            </ParentView>
        </ScreenBackground>
    )
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'red',
        borderWidth: 1,
    }
});

export default TextScreen;