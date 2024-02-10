
import './App.css';
import { NextUIProvider } from "@nextui-org/react";
import Nav from './Components/UI Components/Nav';
import { Route, Routes } from 'react-router';
import Home from './Components/Pages/Home';
import Kiara from './Components/Pages/Kiara';
import Tombstone from './Components/Pages/Tombstone';

function App() {
  return (
    <div  className="dark App">
      <NextUIProvider>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Kiara' element={<Kiara />} />
          <Route path='/tombstone' element={<Tombstone />} />
        </Routes>
      </NextUIProvider>
    </div>
  );
}

export default App;
