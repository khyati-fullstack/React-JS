import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProdutDiasplay from './ProductDiasplay'
import ProductDetails from './ProductDetails'


export default function Router() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ProdutDiasplay/>}></Route>
                <Route path='/product/:id' element={<ProductDetails/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
