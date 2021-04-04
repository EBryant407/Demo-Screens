import React, { useState } from 'react';
import { TextInput } from 'react-native';
import {
    ParentView,
    PromptText,
    RequirementText,
    ScreenBackground,
    InputView,
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
                <InputView>
                    <TextInput
                        autoCapitalize='none'
                        autoCorrect={false}
                        value={password}
                        onChangeText={(newValue) => setPassword(newValue)}
                    />
                </InputView>
                {password.length < 4 ?
                    <RequirementText>
                        Password must be atleast 4 characters
            </RequirementText> : null}
            </ParentView>
        </ScreenBackground>
    )
};



export default TextScreen;