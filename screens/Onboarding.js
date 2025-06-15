// screens/OnboardingScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function OnboardingScreen({ onComplete }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleFinish = async () => {
  if (!name || !email) return alert("Enter all fields");

  await AsyncStorage.setItem('user', JSON.stringify({ firstName: name, email }));
  await AsyncStorage.setItem('hasOnboarded', 'true');
  onComplete(); // navigate to Profile
};

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to the App</Text>

      <TextInput
        style={styles.input}
        placeholder="Your Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Your Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Button title="Finish Onboarding" onPress={handleFinish} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 32,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 16,
    borderRadius: 8,
  },
});
