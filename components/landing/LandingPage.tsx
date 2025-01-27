'use client'
import { useRouter } from 'next/navigation'

import * as React from 'react'

import Hero from './Hero'

export default function LandingPage() {
  const router = useRouter()

  function checkAuth() {
    // a temp(imaginary function) to check auth
    console.log('checking auth ....')
  }

  function handleLogin() {
    window.location.href = 'http://localhost:8080/auth/google/start'
  }

  function handleMedicalTourism() {
    checkAuth()
    router.push('/medical/main')
  }

  function handleMICE() {
    checkAuth()
    router.push('/mice/main')
  }

  function handleDestinationWedding() {
    checkAuth()
    router.push('destination/main')
  }

  // this is a temp landing page
  // we need to check auth after pressing these buttons if the user is not authed we can't proceed

  return (
    <>
      <main className="flex flex-col items-center justify-center">
        <div className="container">
          <Hero />
        </div>
      </main>

      {/* For Daksh: Moving buttons to bottom of page for experimentation*/}
      <div>
        <button onClick={handleMedicalTourism} className="primary-button m-3">
          Medical Tourism
        </button>
        <button onClick={handleMICE} className="primary-button m-3">
          MICE
        </button>
        <button
          onClick={handleDestinationWedding}
          className="primary-button m-3"
        >
          Destination Weddings
        </button>
        <button onClick={handleLogin} className="primary-button m-3">
          Log In With Google
        </button>
      </div>
    </>
  )
}
