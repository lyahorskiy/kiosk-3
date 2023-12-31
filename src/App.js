import { Routes, Route } from 'react-router-dom'
import { createContext, useState } from 'react'

import './scss/app.scss'
import Header from './components/Header'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Cart from './pages/Cart'

export const SearchContext = createContext('')
function App() {
  const [searchValue, setSearchValue] = useState('')

  console.log(searchValue, 'Input chenged')
  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </SearchContext.Provider>
  )
}

export default App
