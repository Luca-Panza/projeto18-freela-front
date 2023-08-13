import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AppProvider } from './context/AppContext';
import SignInPage from "./pages/SignInPage/SignInPage"
import SignUpPage from "./pages/SignUpPage/SignUpPage"
import HomePage from "./pages/HomePage/HomePage"
//import MyPlants from "./pages/MyPlants/MyPlants"
//import AddPlant from "./pages/AddPlant/AddPlant"

export default function App() {
  return (
      <BrowserRouter>
        <AppProvider>
          <Routes>
            <Route path="/" element={<SignInPage />} />
            <Route path="/SignUp" element={<SignUpPage />} />
            <Route path="/Home" element={<HomePage />} />
            {/*<Route path="/MyPlants" element={<MyPlants />} />*/}
            {/*<Route path="/AddPlant" element={<AddPlant />} />*/}
          </Routes>
        </AppProvider>
      </BrowserRouter>
  )
}
