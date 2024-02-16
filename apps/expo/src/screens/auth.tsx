import React from 'react'

import { Text, View, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native'

import SignInWithOAuth from '../components/SignInWithOAuth'
import SignUpWithOAuth from '../components/SignUpWithOAuth'


export const SignInSignUpScreen = () => {
  const [isSignIn, setIsSignIn] = React.useState(true)
  const styles = StyleSheet.create({
    block: {
      height: 200,
      width: 150,
      position: 'absolute',
      top: isSignIn ? 70 : 30 ,
      left: isSignIn ? 50 : 38,
      borderRadius: 10,
      backgroundColor: 'blue',
    },
    switcher: {
      zIndex: 100,
      position: 'absolute',
      top: isSignIn ? 75 : 35,
      left: isSignIn ? 75 : 70,
    },
    switcherText: {
      color: 'white',
      fontSize: 30,
      textDecorationLine: 'underline',
    },
  })
  return (
    <SafeAreaView className='bg-[#2e026d] bg-gradient-to-b from-[#2e026d] to-[#15162c]'>
      <View
        className='min-h-screen'
      >
        <View style={styles.block} />
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
