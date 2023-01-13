import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from './src/pages/Home'
import { Checkout } from "./src/pages/Checkout";
import { Layouts } from "./src/layouts";
import { Sucess } from "./src/pages/Sucess";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layouts/>}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/sucess" element={<Sucess />} />
      </Route>

    </Routes>
  )
}