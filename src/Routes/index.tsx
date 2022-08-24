import { Routes, Route, BrowserRouter } from "react-router-dom";
import { RequireAuth } from "../Context/RequireAuth";


import DashBoard from "../pages/DashBoard";
import NotFoundPage from "../pages/NotFound";
import SignIn from "../pages/SignIn";


const Router = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <SignIn /> } />
        <Route path='/dashboard' element={<RequireAuth><DashBoard /></RequireAuth>} />
        <Route path='/*' element={ <NotFoundPage /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default Router