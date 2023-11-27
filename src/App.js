import React from 'react'
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import DisplayBuses from './Components/DisplayBuses';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import BasicAccordion from './Components/SeatView';
import ProfilePage from './Components/ProfilePage';
import { useSelector} from 'react-redux';

function App() {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  console.log(isAuthenticated);

  return (
    <Router>
      <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/displayBuses" element={<DisplayBuses />}>
            </Route>
            <Route path="/signup" element={<SignUp />}>
            </Route>
            <Route path="/login" element={<SignIn />}>
            </Route>
            <Route path="/BasicAccordian" element={<BasicAccordion />}>
            </Route>
            <Route
            path="/profile"
            element={isAuthenticated ? <ProfilePage /> : <Navigate to="/login" />}
            />
          </Routes>
      </div>
    </Router>
  )
}
export default App;
