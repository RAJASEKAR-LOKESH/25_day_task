
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Todo from './components/Todo'
import Edit from './components/Edit'




function App() {

  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Edit/:id' element={<Edit/>}/>
    <Route path='/Home' element={<Home/>}/>
    </Routes>
      
    </>
  )
}

export default App
