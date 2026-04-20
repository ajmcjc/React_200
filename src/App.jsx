import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Courses from './Pages/Courses'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Login from './Pages/Login'
import Register from './Pages/Register'
import AdminDashboard from './Dashboard/AdminDashboard'
import StudentDashboard from './Dashboard/StudentDashboard'
import Update from './Pages/Update'

function App() {
 
  return (
    <>
      {/* <h1>JSON DB PROJECT</h1> */}
         <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/courses' element={<Courses/>}></Route>
          <Route path='/admindashboard' element={<AdminDashboard/>}></Route>
          <Route path='/studentdashboard' element={<StudentDashboard/>}></Route>
          <Route path='/update/:id' element={<Update/>}></Route>
        </Routes>
      </BrowserRouter>

      <Footer/>
    </>
  )
}

export default App
