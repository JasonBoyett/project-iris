import type { NavigationProp } from '@react-navigation/native'
import { TrainingScreen } from './components/Train'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { TRPCProvider } from './utils/trpc'

import { HomeScreen } from './screens/home'
import SignOutScreen from './screens/signout'
import { SignInSignUpScreen } from './screens/auth'
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo'
import { tokenCache } from './utils/cache'
import Constants from 'expo-constants'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import SettingsScreen from './screens/Settings'

export type ScreenNames = [
  'Home',
  'Iris',
  'SpeedTest',
  'Train',
  'SignOut',
  'Settings'
]
export type StackParamList = Record<ScreenNames[number], undefined>
export type StackNavigation = NavigationProp<StackParamList>

const Stack = createNativeStackNavigator<StackParamList>()
const Drawer = createDrawerNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Iris'}
        component={HomeScreen}
        options={{ 
          headerShown: true, 
        }}
      />
      <Stack.Screen
        name='Train'
        component={TrainingScreen}
        options={{ 
          title: 'Training', 
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  )
}

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: 180,
        },
        drawerActiveTintColor: '#2e026d', 
      }}
    >
      <Drawer.Screen name='Home' component={HomeStack} />
      <Stack.Screen 
        name='Settings' 
        component={SettingsScreen} 
        options={{ 
          title: 'Settings',
          headerShown: true,
        }}
      /> 
      <Stack.Screen
        name='SignOut'
        component={SignOutScreen}
        options={{ title: 'Sign Out' }}
      />
    </Drawer.Navigator >
  )
}

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
              <DrawerNavigator />
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
