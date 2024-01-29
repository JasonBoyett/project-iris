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
          Focus on the dot in the center of the grid. After you press one of the
          buttons below the grid the dots will briefly turn into letters.
          <Text className='font-bold'>
            While focusing on the dot in the center of the grid, use your
            pirpheral vision to see if the yellow letters are either all the
            same or different.
          </Text>
          If they are all the same press the &#34;✓&#34; button, if they are
          different press &#34;⛔&#34;. Once the game starts you will have 1
          minute to answer as many times as you can. Press either button to
          start.
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
          Concéntrate en el punto en el centro de la cuadrícula. Después de
          presionar uno de los botones a continuación En la cuadrícula, los
          puntos se convertirán brevemente en letras. Mientras te concentras en
          el punto en el centro de la cuadrícula, usa tu visión periférica. para
          ver si las letras amarillas son todas iguales o diferentes. Si son
          todos iguales presione el &#34;✓&#34; botón, si son diferentes
          presione &#34;⛔&#34;. Una vez que comience el juego tendrás 1 minuto
          para responder tantas veces como puedas. Presione cualquiera de los
          botones para comenzar.
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
          Concentrati sul punto al centro della griglia. Dopo aver premuto uno
          dei pulsanti sottostanti sulla griglia i punti si trasformeranno
          brevemente in lettere. Mentre ti concentri sul punto al centro della
          griglia, usa la visione periferica per vedere se le lettere gialle
          sono tutte uguali o diverse. Se sono tutti uguali premere il tasto
          &#34;✓&#34; pulsante, se sono diversi premere &#34;⛔&#34;. Una volta
          avviato il gioco avrai 1 minuto per rispondere quante più volte
          possibile. Premere uno dei pulsanti per iniziare.
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
          Konzentrieren Sie sich auf den Punkt in der Mitte des Rasters. Nachdem
          Sie eine der Tasten unten gedrückt haben Im Raster verwandeln sich die
          Punkte kurzzeitig in Buchstaben. Konzentrieren Sie sich dabei auf den
          Punkt in der Mitte des Rasters und nutzen Sie dabei Ihre periphere
          Sicht Um zu sehen, dass die gelben Buchstaben entweder alle gleich
          oder unterschiedlich sind. Wenn sie alle gleich sind, drücken Sie die
          Taste &#34;✓&#34; Taste, wenn sie unterschiedlich sind, drücken Sie
          &#34;⛔&#34;. Sobald das Spiel beginnt, haben Sie 1 Minute Zeit, so
          oft wie möglich zu antworten. Drücken Sie zum Starten eine der beiden
          Tasten.
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
