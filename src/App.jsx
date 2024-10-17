import React from 'react'
import Main from './component/Main'
import { Route, Routes } from 'react-router-dom'
import Details from './component/Details'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path = "/details" element={<Details/>} />
      </Routes>
    </>
  )
}

export default App


