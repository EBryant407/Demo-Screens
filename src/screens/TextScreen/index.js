import React, { useState } from 'react';
import { Text, StyleSheet, TextInput } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';
import {
    ParentView,
    PromptText,
    RequirementText,
  }
    from './styles';


const TextScreen = () => {
    const [password, setPassword] = useState('');
    return (
        <ParentView>
            <PromptText>
                Enter Password:
            </PromptText>
            <TextInput 
            style={styles.input} 
            autoCapitalize='none'
            autoCorrect={false}
            value={password}
            onChangeText={(newValue) => setPassword(newValue) }
            />
            {password.length < 4 ? 
            <RequirementText>
                Password must be atleast 4 characters
            </RequirementText> : null }
        </ParentView>
    )
};

const styles= StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
    }
});

export default TextScreen;