
import './App.css';
import { NextUIProvider } from "@nextui-org/react";
import Nav from './Components/UI Components/Nav';
import { Route, Routes } from 'react-router';
import Home from './Components/Pages/Home';
import Kiara from './Components/Pages/Kiara';
import TombstoneStuff from './Components/Pages/TombstoneStuff';
import TombstoneInquiries from './Components/Pages/TombstoneInquiries';
import Academy from './Components/Pages/Academy/Academy';
import Travis from './Components/Pages/Travis';
import Quizzer from './Components/Pages/Academy/Quizzer/Quizzer';
import Quizzes from './Components/Pages/Academy/Quizzer/Quizzes';

function App() {
  return (
    <div  className="dark App">
      <NextUIProvider>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Kiara' element={<Kiara />} />
          <Route path='/Travis' element={<Travis />} />
          <Route path='/tombstone' element={<TombstoneStuff />} />
          <Route path='/tombstone/inquiries' element={<TombstoneInquiries />} />
          <Route path='/academy' element={<Academy />} />
          <Route path='/academy/quizzes' element={<Quizzes />} />
          <Route path='/academy/quizzer' element={<Quizzer />} />
        </Routes>
      </NextUIProvider>
    </div>
  );
}

export default App;
