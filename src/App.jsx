import { useEffect, useState } from 'react'
import './App.css'
import Repos from './Repos';
import RepoInfo from './RepoInfo.jsx'
import { Routes, Route } from 'react-router-dom';
import ReposList from './ReposList.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<ReposList/>}/>
        <Route path='/repo/:id' element={<RepoInfo/>}></Route>
      </Routes>
    </>
  )
}

export default App
