
import './App.css';
import { NextUIProvider } from "@nextui-org/react";
import Nav from './Components/UI Components/Nav';
import { Route, Routes } from 'react-router';
import Home from './Components/Pages/Home';
import Kiara from './Components/Pages/Kiara';
import TombstoneStuff from './Components/Pages/Tombstone Stuff/TombstoneStuff';
import TombstoneInquiries from './Components/Pages/Tombstone Stuff/TombstoneInquiries';
import Academy from './Components/Pages/Academy/Academy';
import Travis from './Components/Pages/Travis';
import Quizzer from './Components/Pages/Academy/Quizzer/Quizzer';
import Quizzes from './Components/Pages/Academy/Quizzer/Quizzes';
import SchoolJournal from './Components/Pages/Academy/SchoolJournal';
import NewJournal from './Components/Pages/Academy/NewJournal';
import JournalDetails from './Components/Pages/Academy/JournalDetails';
import Customers from './Components/Pages/Tombstone Stuff/Customers';
import NewCustomer from './Components/Pages/Tombstone Stuff/NewCustomer';
import Budget from './Components/Pages/Budget';

function App() {
  return (
    <div  className="dark App">
      <NextUIProvider>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Kiara' element={<Kiara />} />
          <Route path='/Travis' element={<Travis />} />
          <Route path='/budget' element={<Budget />} />
          <Route path='/tombstone' element={<TombstoneStuff />} />
          <Route path='/tombstone/inquiries' element={<TombstoneInquiries />} />
          <Route path='/tombstone/customers' element={<Customers />} />
          <Route path='/tombstone/customers/new' element={<NewCustomer />} />
          <Route path='/academy' element={<Academy />} />
          <Route path='/academy/journal' element={<SchoolJournal />} />
          <Route path='/academy/journal/new' element={<NewJournal />} />
          <Route path='/academy/journal/:id' element={<JournalDetails />} />
          <Route path='/academy/quizzes' element={<Quizzes />} />
          <Route path='/academy/quizzer' element={<Quizzer />} />
        </Routes>
      </NextUIProvider>
    </div>
  );
}

export default App;
