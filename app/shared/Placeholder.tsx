import { useAuthentication } from '@/domain/contexts/authenticationContext';
import Label from '@/presentation/atoms/Label';
import React from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function Placeholder() {
  const { profile, signOut } = useAuthentication();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Detalles del Objeto</Text>
        
        {Object.entries({...profile}).map(([key, value]) => (
          <View key={key} style={styles.row}>
            <Text style={styles.label}>{key.toUpperCase()}:</Text>
            <Text style={styles.value}>{value}</Text>
          </View>
        ))}
        <Pressable style={{backgroundColor: 'red'}} onPress={signOut}>
          <Label>Sign out</Label>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Sombra para Android
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  label: {
    fontWeight: '600',
    color: '#666',
    fontSize: 14,
  },
  value: {
    color: '#000',
    fontSize: 14,
    fontWeight: '400',
  },
});
