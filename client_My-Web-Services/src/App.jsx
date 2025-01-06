import './App.css';
import {HashRouter,Route,Routes} from 'react-router-dom'
import { NavBar_Desktop } from './views/navBar/components/navBar_Desktop/navBar_Desktop';
import { Home } from './imports/imports';

function App() {

  return (
    <HashRouter>
      <NavBar_Desktop/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </HashRouter>
  )
}

export default App
