import React from 'react';
import { FlatList } from 'react-native';
import {
    ParentText,
    ParentView,
  }
    from './styles';

const ListScreen = () => {
    const heros = [
        { hero: 'Gambit', team: '- X-Men' },
        { hero: 'Silver Surfer', team: '- The Defenders' },
        { hero: 'Grey Hulk', team: '- The New Fantastic Four' },
        { hero: 'Thor', team: '- The Avengers' },
        { hero: 'Banshee', team: '- Generation X' },
        { hero: 'Moonknight', team: '- Secret Avengers' },
        { hero: 'Adam Warlock', team: '- Infinity Watch' },
        { hero: 'Luke Cage', team: '- Heros for Hire' },
        { hero: 'Havok', team: '- Astonishing X-Men' },
    ]

    return (
        <FlatList 
        keyExtractor={( hero ) => hero.hero}
        data={heros} 
        renderItem={({ item }) => {
            return (
                <ParentView>
                    <ParentText>
                        {item.hero} - Team {item.team}
                    </ParentText>
                </ParentView>
            );
        }}
        />

    );
};


export default ListScreen;