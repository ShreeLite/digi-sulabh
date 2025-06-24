import React from 'react'
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import ComplaintPage from './pages/ComplaintPage'
import FeedbackPage from './pages/FeedbackPage'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
     <Route path='/feedback' element={<FeedbackPage/>}/>
     <Route path='/complaint' element={<ComplaintPage/>}/>
      </Route>
  )
)


  return <RouterProvider router={router}/>
}

export default App