// screens/Profile.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaskedTextInput } from 'react-native-mask-text';
import * as ImagePicker from 'expo-image-picker';

const pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    quality: 1,
  });

  if (!result.canceled) {
    setAvatar(result.assets[0].uri);
  }
};
const saveProfile = async () => {
  const profile = {
    firstName,
    lastName,
    email,
    phone,
    avatar,
    promo,
    updates,
  };
  await AsyncStorage.setItem('user', JSON.stringify(profile));
  alert("Changes saved!");
};
const handleLogout = async () => {
  await AsyncStorage.clear();
  navigation.reset({
    index: 0,
    routes: [{ name: 'Onboarding' }],
  });
};
<MaskedTextInput
  mask="(999) 999-9999"
  keyboardType="numeric"
  value={phone}
  onChangeText={(text, rawText) => setPhone(rawText)}
  placeholder="(123) 456-7890"
/>

export default function Profile() {
    
  useEffect(() => {
    const loadData = async () => {
      try {
        const stored = await AsyncStorage.getItem('user');
        if (stored) {
          const { firstName, email } = JSON.parse(stored);
          setFirstName(firstName || '');
          setEmail(email || '');
        }
      } catch (error) {
        console.error('Error loading user data:', error);
      }
    };

    loadData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});
