import type { User } from "@acme/types";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  type AnimatableNumericValue
} from "react-native";

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    maxHeight: '90%',
    alignItems: 'center',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    borderRadius: 10,
  },
  paragraphContainer: {
    maxHeight: '70%',
    borderRadius: 20,
    flex: 1,
    backgroundColor: 'white',
    marginBottom: 10,
  },
  container: {
    flex: 1,
    height: 96,
  },
  scrollView: {
  },
  text: {
    fontSize: 25,
    padding: 10,
  },
  textButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2);',
    borderRadius: '50%' as unknown as AnimatableNumericValue,
  },
  buttonText: {
    padding: 10,
    paddingHorizontal: 30,
    fontSize: 50,
    color: 'white',
  },
})

const Paragraph = (props: { user: User }) => {
  if (props.user.language === 'english')
    return (
      <ScrollView
        style={styles.scrollView}
      >
        <Text
          style={styles.text}
        >
          After a short countdown you will be shown a series of numbers. The
          numbers will remain on screen for a short period of time and then
          disappear. Once they disappear use the buttons on screen to enter the
          numbers you saw and then press &#34;✓&#34;. You will have 1 minute to
          answer as many times as you can.
        </Text>
      </ScrollView>
    )
  // all of the following are grabbed from google translate and may not be accurate
  // if you speak any of these languages and can correct them, please do so.
  // TODO get proper translations
  else if (props.user.language === 'spanish')
    return (
      <ScrollView
        style={styles.scrollView}
      >
        <Text
          style={styles.text}
        >
          Después de una breve cuenta regresiva se le mostrará una serie de
          números. Los números permanecen en la pantalla por un corto período de
          tiempo y luego desaparecen. Una vez que ellos desaparecer use los
          botones en la pantalla para ingresar los números que vio y luego
          presione &#34;✓&#34;. Tendrás 1 minuto para responder tantas veces
          como puedas.
        </Text>
      </ScrollView>
    )
  else if (props.user.language === 'italian')
    return (
      <ScrollView
        style={styles.scrollView}
      >
        <Text
          style={styles.text}
        >
          Dopo un breve conto alla rovescia ti verranno mostrati una serie di
          numeri. I numeri lo faranno rimangono sullo schermo per un breve
          periodo di tempo e poi scompaiono. Una volta loro scomparire
          utilizzare i pulsanti sullo schermo per inserire i numeri visualizzati
          e quindi premere &#34;✓&#34;. Avrai 1 minuto per rispondere quante più
          volte possibile.
        </Text>
      </ScrollView>
    )
  else if (props.user.language === 'german')
    return (
      <ScrollView
        style={styles.scrollView}
      >
        <Text
          style={styles.text}
        >
          Nach einem kurzen Countdown wird Ihnen eine Zahlenreihe angezeigt. Die
          Zahlen werden bleiben für kurze Zeit auf dem Bildschirm und
          verschwinden dann. Sobald sie Verschwinden Verwenden Sie die Tasten
          auf dem Bildschirm, um die angezeigten Zahlen einzugeben, und drücken
          Sie dann &#34;✓&#34;. Sie haben 1 Minute Zeit, so oft wie möglich zu
          antworten.
        </Text>
      </ScrollView>
    )
  else return (
    <View>
      <Text>
        Language not supported
      </Text>
    </View>
  )
}

const Instructions = (props: { user: User, callback: VoidFunction }) => {
  return (
    <View
      style={styles.outerContainer}
    >
      <View
        style={styles.innerContainer}
      >
        <View
          style={styles.paragraphContainer}
        >
          <Paragraph user={props.user} />
        </View>
        <TouchableOpacity
          style={styles.textButton}
          onPress={props.callback}
        >
          <Text
            style={styles.buttonText}
          >
            Start
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default Instructions
