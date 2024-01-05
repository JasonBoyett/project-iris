import { type SingletonRouter, useRouter } from 'next/router'
import { useState } from 'react'
import { useClerk } from '@clerk/nextjs'
import { motion } from 'framer-motion'
import {
  IoArrowForwardCircleOutline,
  IoArrowBackCircleOutline,
} from 'react-icons/io5'
import { navigate } from '@acme/helpers'

export default function Sidebar() {
  const [showing, setShowing] = useState<boolean>(false)
  const router = useRouter()
  const clerk = useClerk()

  function SideBarItem({
    content,
    onClick,
  }: {
    content: string
    onClick: VoidFunction
  }) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        onClick={onClick}
        className={[
          'flex w-full items-center justify-center py-2',
          'cursor-pointer text-xl text-white md:text-2xl',
          `${showing ? 'visible' : 'invisible'}`,
        ].join(' ')}
      >
        {showing ? content : ''}
      </motion.div>
    )
  }

  return (
    <div className='min-h-fit'>
      {/*this is the shadow that covers the page when the sidebar is open*/}
      <div
        className={[
          'absolute top-0 min-h-full w-full bg-black/60',
          `${showing ? 'left-0' : '-left-[150vw]'} duration-300`,
        ].join(' ')}
        onClick={
          showing ? () => setShowing(!showing) : () => setShowing(showing)
        }
      />
      {/*this is the sidebar itself*/}
      <div
        className={`absolute top-0 left-0 min-h-full bg-slate-600 ${
          showing ? 'w-28 md:w-1/12' : 'w-2 md:w-4'
        } duration-300`}
      >
        <div
          className={[
            'flex items-center justify-center',
            'cursor-pointer text-2xl text-white md:text-3xl',
            'h-8 w-8 rounded-r-full bg-slate-600',
            'absolute top-4 -right-5 md:-right-4',
          ].join(' ')}
          onClick={() => setShowing(!showing)}
        >
          {showing ? (
            <IoArrowBackCircleOutline className='text-white' />
          ) : (
            <IoArrowForwardCircleOutline className='text-white' />
          )}
        </div>
        <div className='grid grid-cols-1 gap-2'>
          <SideBarItem
            content='Home'
            onClick={() => {
              router.push('/nav').catch(err => console.log(err))
            }}
          />
          <SideBarItem
            content='Settings'
            onClick={() => {
              router.push('/settings').catch(err => console.log(err))
            }}
          />
          <SideBarItem
            content='Logout'
            onClick={() => {
              clerk.signOut().catch(err => console.log(err))
              navigate(router as SingletonRouter, '/')
            }}
          />
        </div>
      </div>
    </div>
  )
}
