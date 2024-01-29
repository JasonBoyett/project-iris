import React from 'react'

import { View, SafeAreaView, TouchableOpacity, Text } from 'react-native'

import SignUpWithOAuth from '../components/SignUpWithOAuth'

export const SignInSignUpScreen = () => {
  return (
    <SafeAreaView className='bg-[#2e026d] bg-gradient-to-b from-[#2e026d] to-[#15162c]'>
      <View>
        <TouchableOpacity>
          <Text>
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
      <View className='h-full w-full p-4'>
        <SignUpWithOAuth />
      </View>
    </SafeAreaView>
  )
}
