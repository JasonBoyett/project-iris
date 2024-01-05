import type { NavigationProp } from '@react-navigation/native'
import { TrainingScreen } from './components/Train'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { TRPCProvider } from './utils/trpc'

import { HomeScreen } from './screens/home'
import { SignInSignUpScreen } from './screens/signin'
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo'
import { tokenCache } from './utils/cache'
import Constants from 'expo-constants'
import { NavigationContainer } from '@react-navigation/native'
import { TestScreen } from './components/speedtest'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export type ScreenNames = ['Home', 'SpeedTest', 'Train']
export type StackParamList = Record<ScreenNames[number], undefined>
export type StackNavigation = NavigationProp<StackParamList>

const Stack = createNativeStackNavigator<StackParamList>()

export const App = () => {
  return (
    <NavigationContainer>
      <ClerkProvider
        publishableKey={Constants.expoConfig?.extra?.CLERK_PUBLISHABLE_KEY}
        tokenCache={tokenCache}
      >
        <SignedIn>
          <TRPCProvider>
            <SafeAreaProvider>
              <Stack.Navigator>
                <Stack.Screen
                  name={'Home'}
                  component={HomeScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name='Train'
                  component={TrainingScreen}
                  options={{ title: 'Training' }}
                />
                <Stack.Screen
                  name='SpeedTest'
                  component={TestScreen}
                  options={{ title: 'Speed Test' }}
                />
              </Stack.Navigator>
            </SafeAreaProvider>
          </TRPCProvider>
        </SignedIn>
        <SignedOut>
          <SignInSignUpScreen />
        </SignedOut>
      </ClerkProvider>
    </NavigationContainer>
  )
}
