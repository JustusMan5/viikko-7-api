import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from './components/SearchBar';
import HiscoreList from './components/HiscoreList';
import { FetchHiscores } from './hooks/fetchApi';
import type { hiscoresResponse } from './types/hiscoreTypes';

export default function App() {
  const [hiscores, setHiscores] = useState<hiscoresResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (username: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await FetchHiscores(username);
      setHiscores(data);
    } catch (err) {
      setError((err as Error).message);
      setHiscores(null);
    } finally {
      setLoading(false);
    }
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <SearchBar onSearch={handleSearch} />
        {loading && <Text>Loading...</Text>}
        {error && <Text style={{ color: 'red' }}>{error}</Text>}
        {hiscores && <HiscoreList skills={hiscores.skills} />}
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
