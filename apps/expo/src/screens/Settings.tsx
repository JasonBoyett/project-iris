import { SafeAreaView, Text, View, Pressable, TextInput, Button, TouchableOpacity, TextInputProps } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation, type ParamListBase } from '@react-navigation/native'
import { type StackNavigation } from '../_app'
import { type DrawerNavigationProp } from '@react-navigation/drawer'
import { FontAwesome5 } from '@expo/vector-icons'
import { trpc } from '../utils/trpc'
import { Color, User } from '@acme/types'
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from 'formik'

const emptyData = {
  firstName: '',
  lastName: '',
  highlightColor: 'GREY' as Color,
  currentWpm: 0,
  language: 'enlish',
  isStudySubject: true,
}

const setup = (user: User | undefined) => {
  if (!user) return emptyData
  return {
    firstName: user.firstName,
    lastName: user.lastName,
    highlightColor: user.highlightColor as Color,
    currentWpm: user.currentWpm,
    language: user.language,
    isStudySubject: user.isStudySubject,
  }
}

const SettingsScreen = () => {

  const drawerNav = useNavigation<DrawerNavigationProp<ParamListBase>>()
  const nav = useNavigation<StackNavigation>()
  const user = trpc.user.get.useQuery().data
  const { mutate: updateUser } = trpc.user.set.useMutation()

  useLayoutEffect(() => {
    nav.setOptions({
      headerLeft: () => (
        <Pressable
          style={{ marginLeft: 10 }}
          onPress={() => drawerNav.toggleDrawer()}
        >
          <FontAwesome5 name="grip-lines" size={30} color="black" />
        </Pressable>
      ),
    })
  }, [])

  return (
    <SafeAreaView
      className='bg-[#2e026d] bg-gradient-to-b from-[#2e026d] to-[#15162c] min-h-screen'
    >
      <Formik
        initialValues={setup(user)}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {(formikProps) => (
          <View
            className='flex flex-col items-center justify-center min-h-screen gap-4'
          >
            <View
              className='flex flex-row items-center justify-center gap-4'
            >
            <Text
              className='text-white text-2xl text-center'
            >
              First Name:
            </Text>
            <TextInput
              className='text-white text-2xl text-center bg-white/10 rounded-md w-1/3 items-center justify-center p-2'
              onChangeText={formikProps.handleChange('firstName')}
              onBlur={formikProps.handleBlur('firstName')}
              placeholder={formikProps.values.firstName}
              value={formikProps.values.firstName}
            />
            </View>
            <View
              className='flex flex-row items-center justify-center gap-4'
            >
            <Text
              className='text-white text-2xl text-center'
            >
              Last Name:
            </Text>
            <TextInput
              className='text-white text-2xl text-center bg-white/10 rounded-md w-1/3 items-center justify-center p-2'
              onChangeText={formikProps.handleChange('lastName')}
              onBlur={formikProps.handleBlur('lastName')}
              placeholder={formikProps.values.lastName}
              value={formikProps.values.lastName}
            />
            </View>
            <TouchableOpacity
              className='bg-white/10 rounded-md w-1/2 items-center justify-center p-2'
              onPress={() => formikProps.submitForm()}
            >
            <Text
                className='text-white text-2xl text-center'
              >
              Submit
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
      <View className='flex items-center justify-center min-h-screen'>
      </View>
    </SafeAreaView>

  )
}
export default SettingsScreen
