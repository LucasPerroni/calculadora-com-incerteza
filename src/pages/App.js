import { BrowserRouter, Routes, Route } from "react-router-dom"

import MainPage from "./MainPage"
import Exponentiation from "./ExponentiationPage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/exponentiation" element={<Exponentiation />} />
        <Route path="*" element={<h1>This page doesn't exist...</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
