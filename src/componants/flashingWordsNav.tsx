import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import LoadingSpinner from "./loadingspinner"

const MINUTE_IN_MILLISECONDS = 60_000

const StartButton = ({ option }: { option: string }) => {
  const [time, setTime] = useState(false)
  const router = useRouter()

  const navigate = () => {
    switch (option) {
      case '4by1':
        router.replace('/exercises/flashfourbyone').catch((err) => console.log(err))
        break
      case '1by2':
        router.replace('/exercises/flashonebytwo').catch((err) => console.log(err))
        break
      case '2by2':
        router.replace('/exercises/flashtwobytwo').catch((err) => console.log(err))
        break
      case '1by1':
        router.replace('/exercises/flashonebyone').catch((err) => console.log(err))
        break
      case '2by1':
        router.replace('/exercises/flashtwobyone').catch((err) => console.log(err))
        break
      default: router.replace('/nav').catch((err) => console.log(err))
    }
  }

  useEffect(() => {
    setTimeout(() => setTime(true), MINUTE_IN_MILLISECONDS / 2)
  }, [])

  return time
    ? <button
      className="text-white md:text-5xl text-4xl bg-white/10 flex items-center justify-center rounded-full md:w-40 w-60 p-4 h-16 hover:bg-white/20"
      onClick={() => navigate()}
    >
      Start</button>
    : <LoadingSpinner />
}
export default StartButton
