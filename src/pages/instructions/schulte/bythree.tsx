import type { NextPage } from 'next'
import Head from 'next/head'
import { Beginner, Intermediate, Ideal } from '~/components/schultedraw'

export default function ByThree() {
  return (
    <>
      <center>
        <div className='text-white justify-left text-2xl min-h-screen'>
          Beginner:
          <Beginner />
          Intermediate:
          <Intermediate />
          Ideal:
          <Ideal />
        </div>
      </center>
    </>
  )
}
