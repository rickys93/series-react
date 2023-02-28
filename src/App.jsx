import React from 'react'
import * as Pages from './pages'
import { Route, Routes } from 'react-router-dom'
import { Header } from './components'
import './App.css'

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route path="/" element={<Pages.Home />}/>
                    <Route path="/shows" element={<Pages.Shows />}/>
                    <Route path="/shows/:id" element={<Pages.Show />}/>
                    <Route path="/search" element={<Pages.Search />}/>
                    <Route path="*" element={<Pages.NotFound />}/>
                </Route>
            </Routes>
        </>
  )
}

export default App