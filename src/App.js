import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Signup2 from './component/Signup2';
import Singup from './component/Singup';

function App() {
  return (
    <div className="App">
       <div>
      <BrowserRouter>
      <Routes>
      <Route  path='/' element={<Home/>}></Route>
      <Route  path='/signup' element={<Signup2/>}></Route>
      <Route  path='/login' element={<Singup/>}></Route> 
      </Routes>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
