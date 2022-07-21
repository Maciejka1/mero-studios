import {BrowserRouter as Router} from 'react-router-dom'
import Nav from './components/templates/nav/nav'
import Footer from './components/templates/footer/footer'
import FramerRoutes from './components/routes'
import './app.css'
function App() {
  return (
    <Router>
      <Nav />
        <FramerRoutes></FramerRoutes>
      <Footer />
    </Router>
  );
}

export default App;
