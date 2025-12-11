import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

type Props = {
    defaultValue?: string;
    onSearch: (username: string) => void;
}

export default function SearchBar({ defaultValue = '', onSearch }: Props) {
    const [username, setUsername] = useState(defaultValue);

    const handlePress = () => {
        onSearch(username);
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter username"
                value={username}
                onChangeText={setUsername}
            />
            <Button title="Search" onPress={handlePress} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center',
    },
    input: {
        flex: 1,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
    },
});