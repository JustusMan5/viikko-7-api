import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import type { Skill } from '../types/hiscoreTypes';

type Props = {
    skills: Skill[];
}

export default function HiscoreList({ skills }: Props) {
    return (
        <FlatList
            data={skills}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View style={styles.row}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.level}>Level: {item.level}</Text>
                    <Text style={styles.xp}>XP: {item.xp}</Text>
                </View>
            )}
        />
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    name: {
        fontWeight: 'bold',
    },
    level: {
        marginLeft: 10,
    },
    xp: {
        marginLeft: 10,
    },
});
