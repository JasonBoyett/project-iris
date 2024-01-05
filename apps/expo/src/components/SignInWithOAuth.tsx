import { useOAuth } from '@clerk/clerk-expo'
import React from 'react'
import { Button, View } from 'react-native'
import { useWarmUpBrowser } from '../hooks/useWarmUpBrowser'

const SignInWithOAuth = () => {
  useWarmUpBrowser()

  const { startOAuthFlow: discordFlow } = useOAuth({ strategy: 'oauth_discord' })
  const { startOAuthFlow: githubFlow } = useOAuth({ strategy: 'oauth_github' })

  const handleSignInWithDiscordPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await discordFlow()
      if (createdSessionId) {
        setActive?.({ session: createdSessionId })
      } else {
        // Modify this code to use signIn or signUp to set this missing requirements you set in your dashboard.
        throw new Error(
          'There are unmet requirements, modifiy this else to handle them',
        )
      }
    } catch (err) {
      console.log(JSON.stringify(err, null, 2))
      console.log('error signing in', err)
    }
  }, [])

  const handleSignInWithGitHubPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await githubFlow()
      if (createdSessionId) {
        setActive?.({ session: createdSessionId })
      } else {
        throw new Error('There are unmet requirements, modifiy this else to handle them')
      }
    } catch (err) {
      console.log(JSON.stringify(err, null, 2))
      console.log('error signing in', err)
    }
  }, [])

  return (
    <View className='gap-2'>
      <View className='rounded-lg border-2 border-gray-500 p-4'>
        <Button
          title='Sign in with Discord'
          onPress={handleSignInWithDiscordPress}
        />
      </View>
      <View className='rounded-lg border-2 border-gray-500 p-4'>
        <Button
          title='Sign in with GitHub'
          onPress={handleSignInWithGitHubPress}
        />
      </View>
    </View>
  )
}

export default SignInWithOAuth
