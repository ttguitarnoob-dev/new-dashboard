
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
import Budget from './Components/Pages/Budgety Thing/Budget';
import ViewBudget from './Components/Pages/Budgety Thing/ViewBudget';
import NewBudget from './Components/Pages/Budgety Thing/NewBudget';
import CustomerDetails from './Components/Pages/Tombstone Stuff/CustomerDetails';
import CloseJob from './Components/Pages/Tombstone Stuff/CloseJob';
import ImageUpload from './Components/UI Components/ImageUpload';
import KiaraBday from './Components/Pages/KiaraBday';
import GamePlanHome from './Components/Game Planner/GamePlanHome';

function App() {
  return (
    <div  className="dark App">
      <NextUIProvider>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Kiara' element={<Kiara />} />
          <Route path='/normalkiara' element={<Kiara />} />
          <Route path='/Travis' element={<Travis />} />
          <Route path='/budget' element={<Budget />} />
          <Route path='/budget/:id' element={<ViewBudget />} />
          <Route path='/budget/new' element={<NewBudget />} />
          <Route path='/tombstone' element={<TombstoneStuff />} />
          <Route path='/tombstone/inquiries' element={<TombstoneInquiries />} />
          <Route path='/tombstone/customers' element={<Customers />} />
          <Route path='/tombstone/customers/:id' element={<CustomerDetails />} />
          <Route path='/tombstone/customers/new' element={<NewCustomer />} />
          <Route path='/academy' element={<Academy />} />
          <Route path='/academy/journal' element={<SchoolJournal />} />
          <Route path='/academy/journal/new' element={<NewJournal />} />
          <Route path='/academy/journal/:id' element={<JournalDetails />} />
          <Route path='/academy/quizzes' element={<Quizzes />} />
          <Route path='/academy/quizzer' element={<Quizzer />} />
          <Route path='/pooo' element={<ImageUpload />} />
          <Route path='/game-planner' element={<GamePlanHome />} />
        </Routes>
      </NextUIProvider>
    </div>
  );
}

export default App;
