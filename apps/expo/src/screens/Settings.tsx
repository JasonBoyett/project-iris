import { 
  SafeAreaView, 
  Text, 
  View, 
  Pressable, 
  TextInput, 
  TouchableOpacity, 
} from 'react-native'
import { useLayoutEffect } from 'react'
import { useNavigation, type ParamListBase } from '@react-navigation/native'
import { type StackNavigation } from '../_app'
import { type DrawerNavigationProp } from '@react-navigation/drawer'
import { FontAwesome5 } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { trpc } from '../utils/trpc'
import { Picker } from '@react-native-picker/picker'
import { type Color, type User, colorList, type Language } from '@acme/types'
import { Formik } from 'formik'

const colors = {
  BLUE: 'bg-[#96adfc]',
  BLUE_GREY: 'bg-[#dbe1f1]',
  GREEN: 'bg-[#a8f29a]',
  GREY: 'bg-[#d8d3d6]',
  ORANGE: 'bg-[#eddd6e]',
  PEACH: 'bg-[#edd1b0]',
  PURPLE: 'bg-[#b987dc]',
  RED: 'bg-[#e0a6aa]',
  TURQUOISE: 'bg-[#a5f7e1]',
  YELLOW: 'bg-[#F8fd89]',
}

const ColorButton = (props: { current: Color, color: Color, onPress: (color: Color) => void }) => {
  return (
    <TouchableOpacity
      className={[
        'bg-white/10 rounded-full ml-1 mr-1 mt-6',
        'w-16 h-16 items-center justify-center p-2',
        `${colors[props.color]}`
      ].join(' ')}
      onPress={() => props.onPress(props.color)}
    >
      <Text>
        {
          (props.current ?? 'GREY') === props.color
            ? <FontAwesome5 name="check" size={24} color="white" />
            : null
        }
      </Text>
    </TouchableOpacity>
  )
}


type FormValues = {
  firstName: string,
  lastName: string,
  highlightColor: Color,
  currentWpm: number,
  language: Language,
  isStudySubject: boolean,
}

const emptyData: FormValues = {
  firstName: '',
  lastName: '',
  highlightColor: 'GREY',
  currentWpm: 0,
  language: 'english',
  isStudySubject: true,
}

const setup = (user: User | undefined) => {
  if (!user) return emptyData
  return {
    firstName: user.firstName,
    lastName: user.lastName,
    highlightColor: user.highlightColor,
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

  const LanguagePicker = Picker<Language>

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
          updateUser({
            currentWpm: values.currentWpm,
            firstName: values.firstName,
            lastName: values.lastName,
            language: values.language,
            highlightColor: values.highlightColor,
          })
        }}
      >
        {(formikProps) => (
          <View
            className='flex flex-col items-center justify-center gap-4'
          >
            <View
              className='flex flex-row items-center justify-center gap-4'
            >
              <Text
                className='text-white text-3xl text-bold text-center'
              >
                First Name:
              </Text>
              <TextInput
                className='text-white text-3xl text-center bg-white/10 rounded-full w-56 items-center justify-center p-2'
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
                className='text-white text-3xl text-bold text-center'
              >
                Last Name:
              </Text>
              <TextInput
                className='text-white text-3xl text-center bg-white/10 rounded-full w-56 items-center justify-center p-2'
                onChangeText={formikProps.handleChange('lastName')}
                onBlur={formikProps.handleBlur('lastName')}
                placeholder={formikProps.values.lastName}
                value={formikProps.values.lastName}
              />
            </View>
            <View
              className='flex flex-row items-center justify-center gap-2'
            >
              <Text
                className='text-white text-3xl text-center'
              >
                Scroll Speed:
              </Text>
              <View
                className='bg-white/10 rounded-full w-28 items-center justify-center p-2'
              >
                <Text
                  className='text-white text-3xl text-center'
                >
                  {formikProps.values.currentWpm}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  if (
                    formikProps.values.currentWpm >= (user?.maxWpm ?? 500)
                    && !user?.isAdmin
                  ) return
                  formikProps.setFieldValue(
                  'currentWpm',
                  formikProps.values.currentWpm + 10
                )
                }}
                className='bg-white/10 rounded-full items-center justify-center p-2'
              >
                <AntDesign name="caretup" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  if (formikProps.values.currentWpm <= 0) return
                  formikProps.setFieldValue(
                  'currentWpm',
                  formikProps.values.currentWpm - 10
                )
                }}
                className='bg-white/10 rounded-full items-center justify-center p-2'
              >
                <AntDesign name="caretdown" size={24} color="white" />
              </TouchableOpacity>
            </View>
            <View
              className='flex flex-row items-center justify-center gap-4'
            >
              <LanguagePicker
                style={{ 
                  flex: 1,
                }}
                selectedValue={formikProps.values.language}
                onValueChange={(itemValue) => formikProps.setFieldValue('language', itemValue)}
              >
                <LanguagePicker.Item color='white' label="English" value="english" />
                <LanguagePicker.Item color='white' label="Spanish" value="spanish" />
                <LanguagePicker.Item color='white' label="Italian" value="italian" />
                <LanguagePicker.Item color='white' label="German" value="german" />

              </LanguagePicker>
            </View>
            <View
              className='items-center justify-center gap-4'
            >
              <Text
                className='text-white text-3xl text-center'
              >
                Highlight Color:
              </Text>
              <View>
                <View
                  className='flex flex-row items-center justify-center gap-4'
                >
                  <ColorButton
                    current={formikProps.values.highlightColor ?? 'GREY'}
                    color={colorList[0] as Color}
                    onPress={(color) => formikProps.setFieldValue('highlightColor', color)}
                  />
                  <ColorButton
                    current={formikProps.values.highlightColor ?? 'GREY'}
                    color={colorList[1] as Color}
                    onPress={(color) => formikProps.setFieldValue('highlightColor', color)}
                  />
                  <ColorButton
                    current={formikProps.values.highlightColor ?? 'GREY'}
                    color={colorList[2] as Color}
                    onPress={(color) => formikProps.setFieldValue('highlightColor', color)}
                  />
                  <ColorButton
                    current={formikProps.values.highlightColor ?? 'GREY'}
                    color={colorList[3] as Color}
                    onPress={(color) => formikProps.setFieldValue('highlightColor', color)}
                  />
                  <ColorButton
                    current={formikProps.values.highlightColor ?? 'GREY'}
                    color={colorList[4] as Color}
                    onPress={(color) => formikProps.setFieldValue('highlightColor', color)}
                  />
                </View>
                <View
                  className='flex flex-row items-center justify-center gap-4'
                >
                  <ColorButton
                    current={formikProps.values.highlightColor ?? 'GREY'}
                    color={colorList[5] as Color}
                    onPress={(color) => formikProps.setFieldValue('highlightColor', color)}
                  />
                  <ColorButton
                    current={formikProps.values.highlightColor ?? 'GREY'}
                    color={colorList[6] as Color}
                    onPress={(color) => formikProps.setFieldValue('highlightColor', color)}
                  />
                  <ColorButton
                    current={formikProps.values.highlightColor ?? 'GREY'}
                    color={colorList[7] as Color}
                    onPress={(color) => formikProps.setFieldValue('highlightColor', color)}
                  />
                  <ColorButton
                    current={formikProps.values.highlightColor ?? 'GREY'}
                    color={colorList[8] as Color}
                    onPress={(color) => formikProps.setFieldValue('highlightColor', color)}
                  />
                  <ColorButton
                    current={formikProps.values.highlightColor ?? 'GREY'}
                    color={colorList[9] as Color}
                    onPress={(color) => formikProps.setFieldValue('highlightColor', color)}
                  />
                </View>
              </View>
            </View>
            <TouchableOpacity
              className='bg-white/10 rounded-full w-1/2 items-center justify-center p-2'
              onPress={() => formikProps.submitForm()}
            >
              <Text
                className='text-white text-3xl text-center'
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
