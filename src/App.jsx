import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header/Header'
import { MainComponent } from './components/MainComponent/MainComponent'
import { Footer } from './components/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppWrapperComponent } from './components/AppWrapper/AppWrapperComponent'
import { Page } from './components/Page/Page'
import { Product } from './components/Product/Product'
import { SingleProduct } from './components/Product/SingleProduct'
import  { Home } from './components/Home/Home'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<AppWrapperComponent />}>
            <Route index element={<Home />} />
            <Route path='/page' element={
              <Page title={"Contact"}
                description={"Lorem impsum description"} 
              />
              } 
            />
          <Route path='/about' element={<Page />} />
          <Route path='/product' element={<Product />} />
              <Route path='/prouct/:id' element={<SingleProduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
