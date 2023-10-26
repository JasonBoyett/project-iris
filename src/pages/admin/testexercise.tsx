import { useRouter } from "next/router"
import Sidebar from "~/componants/sidebar"

export default function Page() {
  const router = useRouter()

  function nav(path: string) {
    router.push(path).catch(err => console.log(err))
  }

  function NavButton({ path, text }: { path: string, text: string }) {
    return (
      <button onClick={() => nav(path)}
        className='flex bg-white/20 rounded-full items-center p-4 h-12 py-2 text-white text-2xl md:text-4xl font-normal'
      >
        {text}
      </button>
    )
  }

  return (
    <>
      <div className='min-h-screen items-center justify-center'>
        <Sidebar />
        <div className='flex flex-col items-center justify-center min-h-screen py-2 gap-2'>
          <NavButton path='/exercises/speedtest' text='Speed Test' />
          <NavButton path='/exercises/cubebythree' text='Cube by 3' />
          <NavButton path='/exercises/cubebytwo' text='Cube by 2' />
          <NavButton path='/exercises/evennumbers' text='Even Numbers' />
          <NavButton path='/exercises/flashfourbyone' text='Flash 4 by 1' />
          <NavButton path='/exercises/flashonebyone' text='Flash 1 by 1' />
          <NavButton path='/exercises/flashonebytwo' text='Flash 1 by 2' />
          <NavButton path='/exercises/flashtwobytwo' text='Flash 2 by 2' />
          <NavButton path='/exercises/flashtwobyone' text='Flash 2 by 1' />
          <NavButton path='/exercises/numbermatcher' text='Number Match' />
          <NavButton path='/exercises/schulteby3' text='Schulte Table by 3' />
          <NavButton path='/exercises/schulteby5' text='Schulte Table by 5' />
          <NavButton path='/exercises/schulteby7' text='Schulte Table by 7' />
          <NavButton path='/exercises/lettermatcher' text='Matching Letters Game' />
        </div>
      </div>
    </>
  )
}
