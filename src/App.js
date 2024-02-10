
import './App.css';
import { NextUIProvider } from "@nextui-org/react";
import Nav from './Components/UI Components/Nav';
import { Route, Routes } from 'react-router';
import Home from './Components/Pages/Home';
import Kiara from './Components/Pages/Kiara';

function App() {
  return (
    <div className="App">
      <NextUIProvider>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Kiara' element={<Kiara />} />
        </Routes>
      </NextUIProvider>
    </div>
  );
}

export default App;
