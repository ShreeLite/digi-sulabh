import React from 'react'
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import ComplaintPage from './pages/ComplaintPage'
import FeedbackPage from './pages/FeedbackPage'
import CleanerPage from './pages/CleanerPage'
import FindPage from './pages/FindPage'
import ScanPage from './pages/ScanPage'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './pages/HomePage'

const App = () => {
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route path='/'element={<HomePage/>}/>
     <Route path='/feedback' element={<FeedbackPage/>}/>
     <Route path='/complaint' element={<ComplaintPage/>}/>
     <Route path='/find' element={<FindPage/>}/>
     <Route path='/scan' element={<ScanPage/>}/>
     <Route path='/cleaner' element={<CleanerPage/>}/>
      </Route>
  )
)


  return <RouterProvider router={router}/>
}

export default App