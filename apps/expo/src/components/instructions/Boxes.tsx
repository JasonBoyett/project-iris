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
          As each box appears on the screen move your eyes to the center of the
          box. Do not actively attempt to read the words at the corners of the
          box. This exercise is meant to help improve your peripheral vision.
          In order to get the most out of this exercise, try to stay relaxed and
          focused. The exercise will only be counted as completed if you do not
          navigate away from the page. The page will automatically navigate away
          and be counted as complete after one minute.
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
          A medida que aparece cada cuadro en la pantalla, mueva los ojos hacia
          el centro del cuadro. caja. No intente activamente leer las palabras
          en las esquinas del caja. Este ejercicio está destinado a ayudar a
          mejorar su visión periférica. En Para aprovechar al máximo este
          ejercicio, trate de mantenerse relajado y enfocado. El ejercicio sólo
          se contará como completado si no navegar fuera de la página. La página
          se alejará automáticamente y se considerará completo después de un
          minuto.
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
          Quando ogni riquadro appare sullo schermo, sposta gli occhi al centro
          del riquadro scatola. Non tentare attivamente di leggere le parole
          agli angoli del scatola. Questo esercizio ha lo scopo di aiutarti a
          migliorare la tua visione periferica. In Per ottenere il massimo da
          questo esercizio, cerca di rimanere rilassato e focalizzata.
          L&apos;esercizio verrà conteggiato come completato solo se non lo fai
          allontanarsi dalla pagina. La pagina verrà automaticamente allontanata
          e verrà conteggiato come completato dopo un minuto.
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
          Wenn jedes Kästchen auf dem Bildschirm erscheint, bewegen Sie Ihren
          Blick in die Mitte des Kästchens Kasten. Versuchen Sie nicht aktiv,
          die Wörter an den Ecken des zu lesen Kasten. Diese Übung soll dazu
          beitragen, Ihr peripheres Sehvermögen zu verbessern. In Um das Beste
          aus dieser Übung herauszuholen, versuchen Sie, entspannt zu bleiben
          konzentriert. Nur wenn Sie dies nicht tun, gilt die Übung als
          abgeschlossen Navigieren Sie von der Seite weg. Die Seite navigiert
          automatisch weg und gelten nach einer Minute als abgeschlossen.
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
