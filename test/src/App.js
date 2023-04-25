import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loading from "./Loading/Loading"
import Signup from './Pages/Signup';
import VerifyEmail from './Pages/VerifyEmail';
import UserEdit from './Pages/UserEdit';

import CreateEvent from './Pages/CreateEvent';
import ResetPassword from './Pages/ResetPassword'
import NotFound from './Pages/NotFound'
import Login from './Pages/Login'
const UserDashboard = lazy(() => new Promise(resolve => setTimeout(() => resolve(import('./user/UserDashboard')), 1000)));



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<div><Loading /></div>}>
          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/VerifyEmail" element={<VerifyEmail />} />
            <Route path="/UserEdit" element={<UserEdit />} />
            <Route path="/UserDashboard" element={<UserDashboard />} />
            <Route path="/CreateEvent" element={<CreateEvent />} />
            <Route path="/" element={<UserDashboard />} />
            <Route path="/ResetPassword" element={<ResetPassword />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;