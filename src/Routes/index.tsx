import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "../pages/DashBoard";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";


const Router = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <SignIn /> } />
        <Route path='/signup' element={ <SignUp /> } />
        <Route path='/dashboard' element={ <DashBoard /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default Router