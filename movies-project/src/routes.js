import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Filme from './pages/Filme'
import Favoritos from './pages/Favoritos'

import Erro from './pages/Erro'

import Header from './components/Header'


function RouteApp() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/filme/:id" element={<Filme />} />
                    <Route path="/favoritos" element={<Favoritos />} />


                    <Route path="*" element={<Erro />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default RouteApp;