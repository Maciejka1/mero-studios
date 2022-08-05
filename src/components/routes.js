import Contact from './pages/contact/contact'
import Main from './pages/main/main'
import Error from './templates/404'
import { Route, Routes, useLocation } from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'

export default function FramerRoutes(){
    const location = useLocation()
    return(
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Main/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='*' element={<Error/>} />
        </Routes>
    </AnimatePresence>
    )
}