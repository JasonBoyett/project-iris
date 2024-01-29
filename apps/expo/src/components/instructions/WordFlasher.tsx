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
          Follow the highlighted word with your eyes. This exercise is meant to
          help improve your ability to scan and focus as you read. Do not
          actively attempt to read the words, just follow the highlighter. In
          order to get the most out of this exercise, try to stay relaxed and
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
          Sigue la palabra resaltada con tus ojos. Este ejercicio está destinado
          a ayude a mejorar su capacidad para escanear y concentrarse mientras
          lee. no activamente Intente leer las palabras, simplemente siga el
          resaltador. Para obtener Para aprovechar al máximo este ejercicio,
          trate de mantenerse relajado y concentrado. El El ejercicio solo se
          contará como completado si no navegas de la página. La página se
          alejará automáticamente y se contará. como completo después de un
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
          Segui con lo sguardo la parola evidenziata. Questo esercizio è pensato
          per aiuta a migliorare la tua capacità di scansione e concentrazione
          mentre leggi. Non attivamente tentare di leggere le parole, basta
          seguire l&apos;evidenziatore. Per ottenere Per ottenere il massimo da
          questo esercizio, cerca di rimanere rilassato e concentrato. IL
          l&apos;esercizio verrà conteggiato come completato solo se non esci
          dall&apos;attività dalla pagina. La pagina verrà automaticamente
          allontanata e verrà conteggiata come completo dopo un minuto.
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
          Folgen Sie dem markierten Wort mit Ihren Augen. Diese Übung soll dazu
          dienen Helfen Sie dabei, Ihre Fähigkeit zu scannen und sich beim Lesen
          zu konzentrieren. Nicht aktiv Versuchen Sie, die Wörter zu lesen,
          folgen Sie einfach der Hervorhebung. Um zu bekommen Um das Beste aus
          dieser Übung herauszuholen, versuchen Sie, entspannt und konzentriert
          zu bleiben. Der Die Übung gilt nur dann als abgeschlossen, wenn Sie
          nicht wegnavigieren von der Seite. Die Seite wird automatisch
          wegnavigiert und gezählt als abgeschlossen nach einer Minute.
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
