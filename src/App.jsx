import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AppProvider } from './context/AppContext';
import HomePage from "./pages/HomePage"
import SignInPage from "./pages/SignInPage"
import SignUpPage from "./pages/SignUpPage"

export default function App() {
  return (
    <PagesContainer>
      <BrowserRouter>
        <AppProvider>
          <Routes>
            <Route path="/signIn" element={<SignInPage />} />
            <Route path="/signUp" element={<SignUpPage />} />
            <Route path="/Home" element={<HomePage />} />
          </Routes>
        </AppProvider>
      </BrowserRouter>
    </PagesContainer>
  )
}
