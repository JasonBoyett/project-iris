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
          You will be asked a series of questions to test your reading
          comprehension at different speeds.
          <Text className='font-bold'>
            Remember to read the passage and answer the question based solely on
            the information provided.
          </Text>
          Some questions may contain information that is different from reality.
          You will be asked a total of 10 questions and if you can answer 8 of
          them correctly your maximum reading speed will be increased. Your
          maximum speed will not be decreased if you fail to answer 8 questions
          correctly. This test is designed for you to take once a week to
          evaluate and set your progress. Remember to try to remain relaxed and
          focused while taking this test.
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
          Se le harán una serie de preguntas para evaluar su comprensión lectora
          a diferentes velocidades. Recuerde leer el pasaje y responder la
          pregunta basándose únicamente en la información proporcionada. Algunas
          preguntas pueden contener información diferente a la realidad. Se te
          harán un total de 10 preguntas y si puedes responder correctamente 8
          de ellas, tu velocidad máxima de lectura aumentará. Su velocidad
          máxima no disminuirá si no responde correctamente 8 preguntas. Esta
          prueba está diseñada para que usted la realice una vez por semana para
          evaluar y establecer su progreso. Recuerde intentar permanecer
          relajado y concentrado mientras realiza esta prueba.
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
          Ti verranno poste una serie di domande per testare la tua comprensione
          della lettura a diverse velocità. Ricordati di leggere il passaggio e
          di rispondere alla domanda basandoti esclusivamente sulle informazioni
          fornite. Alcune domande potrebbero contenere informazioni diverse
          dalla realtà. Ti verranno poste un totale di 10 domande e se riesci a
          rispondere correttamente ad 8 di esse la tua velocità massima di
          lettura aumenterà. La tua velocità massima non verrà ridotta se non
          rispondi correttamente a 8 domande. Questo test è progettato per
          essere svolto una volta alla settimana per valutare e definire i tuoi
          progressi. Ricordati di cercare di rimanere rilassato e concentrato
          mentre fai questo test.
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
          Ihnen werden eine Reihe von Fragen gestellt, um Ihr Leseverständnis in
          verschiedenen Geschwindigkeiten zu testen. Denken Sie daran, die
          Passage zu lesen und die Frage ausschließlich auf der Grundlage der
          bereitgestellten Informationen zu beantworten. Einige Fragen können
          Informationen enthalten, die von der Realität abweichen. Ihnen werden
          insgesamt 10 Fragen gestellt und wenn Sie 8 davon richtig beantworten
          können, erhöht sich Ihre maximale Lesegeschwindigkeit. Ihre
          Höchstgeschwindigkeit wird nicht verringert, wenn Sie 8 Fragen nicht
          richtig beantworten. Dieser Test ist so konzipiert, dass Sie ihn
          einmal pro Woche absolvieren können, um Ihre Fortschritte zu bewerten
          und festzulegen. Denken Sie daran, bei diesem Test entspannt und
          konzentriert zu bleiben.
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
