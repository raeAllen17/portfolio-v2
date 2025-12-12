import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from '@/pages/Home'
import { NotFound } from '@/pages/NotFound'

function App() {

  return (
    <>
      <BrowserRouter basename='/portfolio-v2'>
        <Routes>
          <Route index element={<HomePage />} />
          {/* <Route path='*' element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
