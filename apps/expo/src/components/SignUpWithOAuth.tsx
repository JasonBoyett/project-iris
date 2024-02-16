import { useOAuth, useSignUp } from '@clerk/clerk-expo'
import React from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  type StyleProp,
  type ViewStyle,
  type AnimatableNumericValue,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
import { useWarmUpBrowser } from '../hooks/useWarmUpBrowser'
import { Formik } from 'formik'
import { AntDesign, FontAwesome5 } from '@expo/vector-icons'

const SignUpWithOAuth = () => {
  useWarmUpBrowser()

  const { startOAuthFlow: discordFlow } = useOAuth({ strategy: 'oauth_discord' })
  const { startOAuthFlow: githubFlow } = useOAuth({ strategy: 'oauth_github' })
  const { signUp, setActive, isLoaded } = useSignUp();

  const styles = StyleSheet.create({
    header: {
      fontSize: 50,
      color: 'black',
    },
    baseContainer: {
      flex: 1,
      justifyContent: 'center',
      itemsAlign: 'center',
      height: '100%',
    },
    centerContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      maxHeight: '85%' as unknown as AnimatableNumericValue,
      borderRadius: '25%' as unknown as AnimatableNumericValue,
    },
    feildText: {
      marginTop: 10,
      color: 'black',
      fontSize: 30,
    },
    oAuthContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      itemsAlign: 'center',
      alignItems: 'center',
      marginTop: 20,
      marginHorizontal: 10,
    },
    oAuthButtonContainer: {
      flex: 1,
      flexDirection: 'row',
      height: 100,
      width: '50%',
      justifyContent: 'center',
      itemsAlign: 'center',
    },
    oAuthButton: {
      height: 100,
      width: '50%',
    },
    entryFeild: {
      minHeight: '10%' as unknown as AnimatableNumericValue,
      minWidth: '80%' as unknown as AnimatableNumericValue,
      borderRadius: '25%' as unknown as AnimatableNumericValue,
      fontSize: 20,
      padding: 10,
      borderColor: 'black',
      borderWidth: 1,
    },
    signInButton: {
      marginTop: 10,
      minHeight: '10%' as unknown as AnimatableNumericValue,
      minWidth: '70%' as unknown as AnimatableNumericValue,
      borderRadius: '25%' as unknown as AnimatableNumericValue,
      borderColor: 'black',
      borderWidth: 1,
      backgroundColor: '#4c1d95',
      justifyContent: 'center',
      alignItems: 'center',
    },
    sighInText: {
      color: 'white',
      fontSize: 50,
    },
    line: {
      marginTop: 10,
      height: 1,
      width: '80%',
      backgroundColor: 'black',
      marginHorizontal: 10,
    },
    lineText: {
      color: 'black',
      fontSize: 20,
    },
    lineContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
      marginHorizontal: 10,
    },
  })

  const DismissKeyboard = ({ children }: any) => (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
    > 
      {children}
    </TouchableWithoutFeedback>
  )

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

  const onSignInPress = async (email: string, password: string) => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.create({
        emailAddress: email,
        password,
      });
      await setActive({ session: completeSignUp.createdSessionId }).then((result) => {
        console.log(result)
      })
      .catch((err) => {
        console.log(err)
      })
    } catch (err: any) {
      alert('Unable to sign up \n' + (err.message ?? ''))
    }
  };

  return (
    <DismissKeyboard>      
      <View style={styles.baseContainer as StyleProp<ViewStyle>}>
      <Formik
        initialValues={{ email: '', password: '', confirmPassword: '' }}
        onSubmit={(values) => {
          if (values.password !== values.confirmPassword) {
            alert('Passwords do not match')
            return
          }
          onSignInPress(values.email, values.password)
        }}
      >
        {(formikProps) => (
          <View style={styles.centerContainer as StyleProp<ViewStyle>}>
            <View>
              <Text style={styles.header}>
                Sign up
              </Text>
            </View>
            <View>
              <Text style={styles.feildText}>
                Email address
              </Text>
              <TextInput
                style={styles.entryFeild}
                onChangeText={formikProps.handleChange('email')}
              />
            </View>
            <View>
              <Text style={styles.feildText}>
                Password
              </Text>
              <TextInput
                style={styles.entryFeild}
                onChangeText={formikProps.handleChange('password')}
                secureTextEntry={true}
              />
            </View>
            <View>
              <Text style={styles.feildText}>
                Confirm Password
              </Text>
              <TextInput
                style={styles.entryFeild}
                onChangeText={formikProps.handleChange('confirmPassword')}
                secureTextEntry={true}
              />
            </View>
            <TouchableOpacity
              style={styles.signInButton as StyleProp<ViewStyle>}
              onPress={() => onSignInPress(
                formikProps.values.email,
                formikProps.values.password
              )}
            >
              <Text style={styles.sighInText}>
                Continue
              </Text>
            </TouchableOpacity>
            <View style={styles.lineContainer as StyleProp<ViewStyle>}>
              <View style={styles.line as StyleProp<ViewStyle>} />
              <Text>
                Or
              </Text>
              <View style={styles.line as StyleProp<ViewStyle>} />
            </View>
            <View style={styles.oAuthContainer as StyleProp<ViewStyle>}>
              <View
                style={styles.oAuthButtonContainer as StyleProp<ViewStyle>}
              >
                <TouchableOpacity
                  onPress={handleSignInWithGitHubPress}
                  style={styles.oAuthButton as StyleProp<ViewStyle>}
                >
                  <AntDesign
                    name='github'
                    size={90}
                    color='black'
                  />
                </TouchableOpacity>
              </View>
              <View
                style={styles.oAuthButtonContainer as StyleProp<ViewStyle>}
              >
                <TouchableOpacity
                  onPress={handleSignInWithDiscordPress}
                  style={styles.oAuthButton as StyleProp<ViewStyle>}
                >
                  <FontAwesome5
                    name='discord'
                    size={105}
                    color='black'
                  />
                </TouchableOpacity>
              </View>

            </View>
          </View>
        )}
      </Formik>
      </View>
    </DismissKeyboard>
  )
}

export default SignUpWithOAuth
