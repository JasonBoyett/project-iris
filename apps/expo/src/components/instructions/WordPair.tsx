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
          <Text className='font-bold'>
            Each cell will contain two words. In five of the cells the words
            will be slightly different and the remaining cells contain matching
            words. Click on all of the cells that contain two different words.
          </Text>
          {'\n'}
          There is no time limit, though your time will be recorded to track
          your progression. So try to go as quickly as you can while remaining
          accurate. This exercise is designed to help you improve your ability
          to focus and your perception. Try to stay relaxed and focused while
          you are doing this exercise. It is up to you how you want to approach
          this exercise. But we recommend that you either search the table row
          by row or column by column.
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
          Cada celda contendrá dos palabras. En cinco de las celdas las palabras
          estarán ligeramente diferentes y las celdas restantes contienen
          palabras coincidentes. Haga clic en todas las celdas que contengan dos
          palabras diferentes. No hay límite de tiempo, aunque su tiempo se
          registrará para realizar un seguimiento de su progresión. así que
          intenta ir lo más rápido que puedas mientras permaneces preciso. Este
          ejercicio está diseñado para ayudarle a mejorar su capacidad para
          enfoque y tu percepción. Intenta mantenerte relajado y concentrado
          mientras estás haciendo este ejercicio. Depende de usted cómo quiere
          abordar esto ejercicio. Pero le recomendamos que busque en la tabla
          fila por fila o columna por columna.
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
          Ogni cella conterrà due parole. In cinque celle ci saranno le parole
          leggermente diverso e le celle rimanenti contengono parole
          corrispondenti. Fare clic su tutte le celle che contengono due parole
          diverse. Non c&apos;è limite di tempo, anche se il tuo tempo verrà
          registrato per tenere traccia del tuo progressione. quindi prova ad
          andare il più velocemente possibile rimanendo accurato. Questo
          esercizio è progettato per aiutarti a migliorare la tua capacità di
          concentrazione e la tua percezione. Cerca di rimanere rilassato e
          concentrato mentre lo sei facendo questo esercizio. Dipende da te come
          vuoi affrontare questo problema esercizio. Ma ti consigliamo di
          cercare nella tabella riga per riga o colonna per colonna.
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
          Jede Zelle enthält zwei Wörter. In fünf der Zellen stehen die Wörter
          etwas anders und die restlichen Zellen enthalten übereinstimmende
          Wörter. Klicken Sie auf alle Zellen, die zwei verschiedene Wörter
          enthalten. Es gibt keine zeitliche Begrenzung, Ihre Zeit wird jedoch
          aufgezeichnet, um Ihre Zeit zu verfolgen Fortschreiten. Versuchen Sie
          also, so schnell wie möglich zu gehen, während Sie bleiben genau.
          Diese Übung soll Ihnen dabei helfen, Ihre Fähigkeiten zu verbessern
          Fokus und Ihre Wahrnehmung. Versuchen Sie dabei entspannt und
          konzentriert zu bleiben diese Übung machen. Es liegt an Ihnen, wie Sie
          dies angehen möchten Übung. Wir empfehlen Ihnen jedoch, die Tabelle
          entweder zeilenweise zu durchsuchen oder Spalte für Spalte.
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
