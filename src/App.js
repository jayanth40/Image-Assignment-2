
import './App.css';
import Home from './Home';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Mountain from './Mountain';
import Birds from './Birds';
import Food from './Food';
import Beaches from './Beaches';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    
    <Route path='/' element={<Home/>}/>
    <Route path='/mountain' element={<Mountain/>}/>
    <Route path='/birds' element={<Birds/>}/>
    <Route path='/foods' element={<Food/>}/>
    <Route path='/beaches' element={<Beaches/>}/>
    
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
