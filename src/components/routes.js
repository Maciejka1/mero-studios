
import Main from './pages/main/main'
import { Route, Routes, useLocation } from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'

export default function FramerRoutes(){
    const location = useLocation()
    return(
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Main/>} />
        </Routes>
    </AnimatePresence>
    )
}