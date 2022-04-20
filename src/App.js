import './App.css';
import Navigation from './Components/Navigation/Navigation';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Donation from './Components/Donation/Donation';
import Login from './Components/Login/Login';
import MyEvents from './Components/MyEvents/MyEvents';
import Body from './Components/Body/Body';
import SecondaryNav from './Components/SecondaryNav/SecondaryNav';
import Admin from './Components/Admin/Admin';
import EventDetails from './Components/EventDetails/EventDetails';
import { createContext, useState } from 'react';
import PrivetRoute from './Components/PrivetRoute';



export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="App">

      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

        <Router>
          <Routes>

            <Route path='/' element={<><Navigation /> <Body />  </>}> </Route>

            <Route path='/donation' element={<> <SecondaryNav /> <Donation /> </>}>  </Route>
            <Route path='/login' element={<Login />}>  </Route>
            <Route path='/events' element={<> <SecondaryNav /><MyEvents /> </>}>  </Route>
            <Route element={<PrivetRoute></PrivetRoute>}>
              <Route path='/admin' element={<Admin />}>  </Route>
            </Route>
            <Route path='eventDetail/:eventId' element={<> <Navigation /> <EventDetails /> </>}> </Route>


          </Routes>
        </Router>

      </UserContext.Provider>


    </div>
  );
}

export default App;
