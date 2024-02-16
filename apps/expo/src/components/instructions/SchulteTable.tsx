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
          Each box in the table will contain a number. The goal of this exercise
          is to click the boxes from lowest number to highest number. Keep your
          eyes focused on the box at the center of the table. Your eyes will
          naturally wander but try to Keep your eyes focused on the center box.
          As you practice your focus will improve and you will begin to use your
          peripheral vision to see the numbers in the other boxes.
          As you improve at this exercise the tables will get larger. Starting
          with a 3x3 table, then a 5x5 table, and finally a 7x7 table.
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
          Cada casilla de la tabla contendrá un número. El objetivo de este ejercicio
          es hacer clic en las casillas desde el número más
          bajo hasta el número más alto. Mantener su
          Sus ojos se centraron en la caja en el centro de la mesa. Tus ojos lo harán
          deambula naturalmente,
          pero trata de mantener tus ojos enfocados en el cuadro central.
          A medida que practiques, tu concentración mejorará y comenzarás a utilizar tu
          Visión periférica para ver los números en los otros cuadros.
          A medida que vayas mejorando en este ejercicio,
          las tablas se harán más grandes. A partir de
          con una mesa de 3x3, luego una mesa de 5x5 y finalmente una mesa de 7x7.
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
          Ogni casella nella tabella conterrà un numero. L&apos;obiettivo di questo esercizio
          consiste nel fare clic sulle caselle dal numero più basso al numero più alto.
          Tieni il tuo
          gli occhi puntati sulla scatola al centro del tavolo. I tuoi occhi lo faranno
          vaga con naturalezza ma cerca di tenere gli occhi concentrati sul riquadro centrale.
          Man mano che ti eserciti,
          la tua concentrazione migliorerà e inizierai a utilizzare il tuo
          visione periferica per vedere i numeri nelle altre caselle.
          Man mano che migliorerai in questo esercizio,
          le tabelle diventeranno più grandi. Di partenza
          con una tabella 3x3, poi una tabella 5x5 e infine una tabella 7x7.
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
          Jedes Feld in der Tabelle enthält eine Nummer. Das Ziel dieser Übung
          besteht darin, die Kästchen von der niedrigsten bis zur höchsten Zahl anzuklicken.
          Halten Sie Ihren
          Der Blick richtete sich auf die Kiste in der Mitte des Tisches.
          Deine Augen werden es tun
          Wandern Sie natürlich umher, aber versuchen Sie,
          Ihren Blick auf das mittlere Feld zu richten.
          Während Sie üben, wird sich Ihr Fokus verbessern und Sie werden beginnen,
          Ihre Fähigkeiten zu nutzen
          periphere Sicht, um die Zahlen in den anderen Kästchen zu sehen.
          Wenn Sie diese Übung verbessern, werden die Tische größer. Beginnend
          mit einem 3x3-Tisch, dann einem 5x5-Tisch und schließlich einem 7x7-Tisch.
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
