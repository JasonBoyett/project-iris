import {
  SafeAreaView,
  Text,
  View,
  Pressable,
  TextInput,
  TouchableOpacity,
  Modal,
} from 'react-native'
import { useLayoutEffect, useState } from 'react'
import { useNavigation, type ParamListBase } from '@react-navigation/native'
import { type StackNavigation } from '../_app'
import { type DrawerNavigationProp } from '@react-navigation/drawer'
import { FontAwesome5 } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { trpc } from '../utils/trpc'
import { Picker } from '@react-native-picker/picker'
import { type Color, type User, colorList, type Language } from '@acme/types'
import { Formik } from 'formik'
import useUserStore from '../stores/userStore'

const prettyLanguages = {
  english: 'English',
  spanish: 'Spanish',
  italian: 'Italian',
  german: 'German',
}

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
  currentWpm: 230,
  language: 'english',
  isStudySubject: true,
}

const setup = (user: User | undefined): FormValues => {
  if (!user) return emptyData
  return {
    firstName: user.firstName,
    lastName: user.lastName,
    highlightColor: user.highlightColor ?? 'GREY',
    currentWpm: user.currentWpm,
    language: user.language,
    isStudySubject: user.isStudySubject,
  }
}

const SettingsScreen = () => {

  const drawerNav = useNavigation<DrawerNavigationProp<ParamListBase>>()
  const [modalVisible, setModalVisible] = useState(false)
  const nav = useNavigation<StackNavigation>()
  const user = trpc.user.get.useQuery().data
  const { mutate: updateUser } = trpc.user.set.useMutation()
  const store = useUserStore()

  const LanguagePicker = Picker<Language>
  const MyForm = Formik<FormValues>

  const LanguageModal = (props: {
    visible: boolean,
    selected: Language,
    onClose: () => void,
    callBack: (lang: Language) => void
  }) => {
    return (
      <Modal
        className='bg-white'
        animationType="slide"
        transparent={true}
        visible={props.visible}
        onRequestClose={props.onClose}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 22,
          backgroundColor: '#64748b',
        }}
       >
      <View
        className='flex flex-col items-center justify-center gap-4 min-h-full'
      >
      <View
        className='flex flex-row items-center justify-center gap-4 w-2/3 h-2/3 bg-white rounded-lg'
      >
        <LanguagePicker
          style={{
            flex: 1,
          }}
          selectedValue={props.selected}
          onValueChange={(itemValue) => props.callBack(itemValue)}
        >
          <LanguagePicker.Item color='blak' label="English" value="english" />
          <LanguagePicker.Item color='black' label="Spanish" value="spanish" />
          <LanguagePicker.Item color='black' label="Italian" value="italian" />
          <LanguagePicker.Item color='black' label="German" value="german" />

        </LanguagePicker>
      </View>
      <TouchableOpacity
        className='bg-white/10 rounded-full w-1/2 items-center justify-center p-2'
        onPress={props.onClose}
      >
          <Text 
            className='text-white text-3xl text-center'
          >
            Close
          </Text>
      </TouchableOpacity>
        </View>
      </Modal>
    )
  }

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
    <View
      className='bg-[#2e026d] bg-gradient-to-b from-[#2e026d] to-[#15162c] min-h-screen'
    >
      <MyForm
        initialValues={setup(user)}
        onSubmit={(values) => {
          if ( values.firstName.trim() === '' || values.lastName.trim() === '') {
            alert('Please do not leave any fields blank.')
            return
          } 
          else{
          updateUser({
            currentWpm: values.currentWpm,
            firstName: values.firstName,
            lastName: values.lastName,
            language: values.language,
            highlightColor: values.highlightColor,
          })
          store.setUser({
            ...store.user as User,
            currentWpm: values.currentWpm,
            firstName: values.firstName,
            lastName: values.lastName,
            language: values.language,
            highlightColor: values.highlightColor,
          })
          nav.navigate('Home')
          }
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
            <TouchableOpacity
              className='bg-white/10 rounded-full w-1/2 items-center justify-center p-2'
              onPress={() => setModalVisible(true)}
            >
              <Text
                className='text-white text-3xl text-center'
              >
                {prettyLanguages[formikProps.values.language]}
              </Text>
            </TouchableOpacity>
            <LanguageModal 
              visible={modalVisible}
              selected={formikProps.values.language}
              onClose={() => setModalVisible(false)}
              callBack={(lang) => formikProps.setFieldValue('language', lang)} 
            />
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
      </MyForm>
      <View className='flex items-center justify-center min-h-screen'>
      </View>
    </View>

  )
}
export default SettingsScreen
