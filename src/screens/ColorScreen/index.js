import React, {  useState } from 'react';
import { View, StyleSheet, Button, FlatList } from 'react-native';
import 
    { 
        BoxView,

    } 
    from './styles';

const ColorScreen = () => {
    const [colors, setColors] = useState([]);
    return <View>
        <Button title= 'Press me for a color!'
        onPress={() =>{
            setColors([...colors, randomRgb()])
        }}/>

        <FlatList 
            style={{ flexDirection: 'column' }}
            numColumns={5}
            keyExtractor={item => item}
            data={colors}
            renderItem={({ item }) => {
                return <BoxView style={{ backgroundColor: item }} />
            }}
        />
    </View>
};

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;