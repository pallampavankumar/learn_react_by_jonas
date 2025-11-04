import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import Product from './pages/product.jsx'
import Pricing from './pages/pricing.jsx'
import PageNotFound from './pages/PageNotFound.jsx'  // new
import AppLayout from './pages/AppLayout.jsx'
import "./index.css"
function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/product' element={<Product />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='*' element={<PageNotFound />} />
        <Route path='/app' element={<AppLayout />} />
      </Routes>
    {/* <PageNav/> */}
    </BrowserRouter>
  )
}

export default App
