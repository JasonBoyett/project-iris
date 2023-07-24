import { useRef, useState } from "react";
import { api } from "~/utils/api";
import useInterval from '../hooks/useInterval'
import { User } from "@prisma/client";
import { useIsVisible } from "~/hooks/useIsVisible";
import { SpeedQuestion } from "@prisma/client";

type QuestionViewProps = {
  speedQuestion: SpeedQuestion,
  user: User,
  doneSignal: () => void
}
const QuestionView = ({ speedQuestion , user , doneSignal }: QuestionViewProps) => {
  const formattedQuestion = speedQuestion.passage.split(' ')
  const [currentWord, setCurrentWord] = useState(formattedQuestion[0])
  const isVisivle = true
  const [itteration, setItteration] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useIsVisible(ref)

  useInterval(() => {
    if (isVisivle) setItteration(prev => prev + 1)
    if (itteration >= formattedQuestion.length){ 
      doneSignal()
    }
    setCurrentWord(formattedQuestion[itteration])
  }, 60_000 / user.CurrentWpm)
  return (
    <>
    <div>
      <p className=' font-medum sm:text-3xl'>{currentWord}</p>
    </div>
    </>
  );
};

const AnswerView = ({ speedQuestion }: { speedQuestion: SpeedQuestion}) => {
  const [correctOrNot, setCorrectOrNot] = useState(<><div><p/></div></>)
  enum Answers {
    A = 'A',
    B = 'B',
    C = 'C',
    D = 'D',
  }

  const selectAnswer = (answer: Answers) => {
    if (answer === speedQuestion.correctAnswer.toUpperCase()) {
      setCorrectOrNot(<><div><p className=' font-medum sm:text-xl text-green-500'>Correct! 🤩</p></div></>)
    }
    else setCorrectOrNot(<><div><p className=' font-medum sm:text-xl text-red-700'>Incorrect 😭</p></div></>)
  }

  return (
    <>
      <div>
          {correctOrNot}
        <div className='flex items-center p-5'>
          <p className=' font-medum sm:text-lg text-white'>{speedQuestion.question}</p>
        </div>
        <div className='flex items-center p-5'>
          <button
            className=' font-medum sm:text-xl flex items-center justify-center text-fuchsia-600 bg-slate-500 rounded-md w-14 h-12 p-5' 
            onClick={() => selectAnswer(Answers.A)}
          >
            A)
          </button>
          <p className=" font-medum sm:text-lg text-white px-5">{speedQuestion.answerA}</p>
        </div>
        <div className="flex items-center p-5">
          <button
            className=' font-medum sm:text-xl flex items-center justify-center text-fuchsia-600 bg-slate-500 rounded-md w-14 h-12 p-5' 
            onClick={() => selectAnswer(Answers.B)}
          >
            B)
          </button>
          <p className=' font-medum sm:text-lg text-white px-5'>{speedQuestion.answerB}</p>
        </div>
        <div className='flex items-center p-5'>
          <button
            className=' font-medum sm:text-xl flex items-center justify-center text-fuchsia-600 bg-slate-500 rounded-md w-14 h-12 p-5' 
            onClick={() => selectAnswer(Answers.C)}
          >
            C)
          </button>
          <p className=' font-medum sm:text-lg text-white px-5'>{speedQuestion.answerC}</p>
        </div>
        <div className='flex items-center p-5'>
          <button
            className=' font-medum sm:text-xl flex items-center justify-center text-fuchsia-600 bg-slate-500 rounded-md w-14 h-12 p-5' 
            onClick={() => selectAnswer(Answers.D)}
          >
            D)
          </button>
          <p className=' font-medum sm:text-lg text-white px-5'>{speedQuestion.answerD}</p>
        </div>
      </div>
    </>
  );
};

const SpeedTest = ({ user, speedQuestion }: { user: User, speedQuestion: SpeedQuestion }) => {
  const [isAnswerTime, setIsAnswerTime] = useState(false)
  return (
    <>
      {
        isAnswerTime
          ? <AnswerView speedQuestion={speedQuestion} />
          : <QuestionView 
              user={user} 
              speedQuestion={speedQuestion}
              doneSignal={() => setIsAnswerTime(true)}
              />
      }
    </>
  );
};
export default SpeedTest;

