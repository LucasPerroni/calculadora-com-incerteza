import { BrowserRouter, Routes, Route } from "react-router-dom"

import MainPage from "./MainPage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<h1>This page doesn't exist...</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
