import { type NextPage } from 'next'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Head from 'next/head'
// import Link from 'next/link'
import { api } from '~/utils/api'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { EvensAndOdds } from '~/componants/evensandodds'
import type { EvenOddProps } from '~/componants/evensandodds'

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Speed Read</title>
      </Head>
      <Router>
        <main>
          <Routes>
            <Route
              path='/evennumbers2'
              element={
                <EvensAndOdds
                  segFigs={4}
                  evens={6}
                  cols={5}
                  rows={6}
                />
              }
            />
          </Routes>
        </main>
      </Router>
      <Link to='/evennumbers2'>Even Numbers</Link>
    </>
  )
}
export default Page
