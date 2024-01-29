import React from 'react'

import { Text, View, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native'

import SignInWithOAuth from '../components/SignInWithOAuth'
import SignUpWithOAuth from '../components/SignUpWithOAuth'

const styles = StyleSheet.create({
  switcher: {
    zIndex: 100,
    position: 'absolute',
    top: -5,
    left: 20,
    padding: 10,
  },
  switcherText: {
    color: 'white',
    fontSize: 30,
    textDecorationLine: 'underline',
  },
})

export const SignInSignUpScreen = () => {
  const [isSignIn, setIsSignIn] = React.useState(true)
  return (
    <SafeAreaView className='bg-[#2e026d] bg-gradient-to-b from-[#2e026d] to-[#15162c]'>
      <View
        className='min-h-screen'
      >
      <TouchableOpacity
        style={styles.switcher}
        onPress={() => {
          console.log('pressed')
          setIsSignIn(!isSignIn)
        }}
      >
        <Text style={styles.switcherText}>
          {
            isSignIn ? 'Sign Up' : 'Sign In'
          }
        </Text>
      </TouchableOpacity>
      <View className='h-full w-full p-4'>
        {
          isSignIn ? (
            <SignInWithOAuth />
          ) : (
            <SignUpWithOAuth />
          )
        }
      </View>
      </View>
    </SafeAreaView>
  )
}
