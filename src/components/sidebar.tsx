import { useRouter } from 'next/router'
import { useState } from 'react'
import { useClerk } from "@clerk/clerk-react"
import { motion } from 'framer-motion'
import { 
  IoArrowForwardCircleOutline,
  IoArrowBackCircleOutline
} from "react-icons/io5"

export default function Sidebar() {
  const [showing, setShowing] = useState<boolean>(false)
  const router = useRouter()
  const { signOut } = useClerk()

  function SideBarItem({ content, onClick }: { content: string, onClick: VoidFunction }) {
    return (
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.3, delay: 0.2}}
        onClick={onClick}
        className={[
          "w-full items-center py-2 justify-center flex",
          "cursor-pointer text-white md:text-2xl text-xl",
          `${showing ? 'visible' : 'invisible'}`,
        ].join(' ')}
      >
        {
          showing
            ? content
            : ''
        }
      </motion.div>
    )
  }

  return (
    <div className='min-h-fit'>
      {/*this is the shadow that covers the page when the sidebar is open*/}
      <div
        className={[
          'absolute top-0 bg-black/60 w-full min-h-full',
          `${showing ? 'left-0' : '-left-[150vw]'} duration-300`,
        ].join(' ')}
        onClick={
          showing
            ? () => setShowing(!showing)
            : () => setShowing(showing)
        }
      />
      {/*this is the sidebar itself*/}
      <div
        className={`absolute top-0 left-0 min-h-full bg-slate-600 ${showing ? 'md:w-1/12 w-28' : 'md:w-4 w-2'} duration-300`}
      >
        <div
          className={[
            'flex justify-center items-center',
            'cursor-pointer text-white md:text-3xl text-2xl',
            'bg-slate-600 w-8 h-8 rounded-r-full',
            'absolute top-4 md:-right-4 -right-5',
          ].join(' ')}
          onClick={() => setShowing(!showing)}
        >
          {
            showing
              ? <IoArrowBackCircleOutline className='text-white'/>
              : <IoArrowForwardCircleOutline className='text-white'/>
          }
        </div>
        <div className='grid grid-cols-1 gap-2'>
          <SideBarItem
            content='Home'
            onClick={
              () => {
                router.push('/nav').catch(err => console.log(err))
              }
            } />
          <SideBarItem
            content='Settings'
            onClick={
              () => {
                router.push('/settings').catch(err => console.log(err))
              }
            } />
          <SideBarItem
            content='Logout'
            onClick={
              () => {
                signOut(() => {
                  router.push('/').catch(err => console.log(err))
                }).catch(err => console.log(err))
              }
            } />
        </div>
      </div>
    </div>
  )
}

