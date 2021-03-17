import React, {  useState } from 'react';
import { StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import 
    { 
        BoxView,
        ButtonText,
        ButtonView,
        BackgroundView,
    } 
    from './styles';

const ColorScreen = () => {
    const [colors, setColors] = useState([]);
    return <BackgroundView>
        <ButtonView>
            <TouchableOpacity
                onPress={() =>{
                setColors([...colors, randomRgb()])
            }}>
                <ButtonText>
                    Press me for a color!
                </ButtonText>
            </TouchableOpacity> 
        </ButtonView>

        <FlatList 
            style={{ flexDirection: 'column' }}
            numColumns={4}
            keyExtractor={item => item}
            data={colors}
            renderItem={({ item }) => {
                return <BoxView style={{ backgroundColor: item }} />
            }}
        />
    </BackgroundView>
};

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;