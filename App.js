import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnboardingScreen from './screens/OnboardingScreen';
import HomeScreen from './screens/HomeScreen';
import Profile from './screens/Profile';

const Stack = createNativeStackNavigator();

export default function App() {
  // This state simulates onboarding completion or authentication
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {hasCompletedOnboarding ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={Profile} />
          </>
        ) : (
          <Stack.Screen name="Onboarding">
            {props => (
              <OnboardingScreen
                {...props}
                onComplete={() => setHasCompletedOnboarding(true)}
              />
            )}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
