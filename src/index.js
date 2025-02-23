import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Layout from './components/Layout'
import Search from './pages/Search';
import PDFManager from './pages/PDFManager';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index  element={<Search />}/>
          <Route path='/pdfManager' element={<PDFManager />}/>
          <Route />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);