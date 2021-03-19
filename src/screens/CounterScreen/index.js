import React, { useReducer } from 'react';
import { Button } from 'react-native';
import {
    CountText,
    TextView,
    ParentView,
    TitleText,
}
    from './styles';

const reducer = (state, action) => {

    switch (action.type) {
        case 'increment':
          return { ...state, count: state.count + action.payload };
        case 'decrement':
            return { ...state, count: state.count - action.payload };
        default:
            return state;
    }
};

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 })

    return (
        <ParentView>
            <TitleText>
                Welcome to my Counter!
            </TitleText>
            <Button 
                title='Increase' 
                onPress={() => {
                    dispatch({ type: 'increment', payload: 1 })
            }} />
            <Button 
                title='Decrease' 
                onPress={() => {
                    dispatch({ type: 'decrement', payload: 1 })
            }} />
            <TextView>
                <CountText>
                    Current Count: {state.count}
                </CountText>
            </TextView>
    </ParentView>
    )
};

export default CounterScreen;