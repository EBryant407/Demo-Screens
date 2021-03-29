import styled from 'styled-components';

export const ParentView = styled.View`
    align-self: center;
    margin-top: 200px;
`;

export const PromptText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    font-style: italic;
    color: red;
`;

export const RequirementText = styled.Text`
    font-style: italic;
    color: red;
`;

export const ScreenBackground = styled.ImageBackground.attrs(() => ({ resizeMode: 'cover' }))`
    flex: 1;
`;