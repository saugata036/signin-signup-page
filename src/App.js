import SignupPage from './components/SignupPage';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Navebar from './components/Navebar';
import './App.css';
import Home from './components/Home';
import Notification from './components/Notification';
function App() {
  return (
   <Router>
         <div className='App'>
         <Navebar/>
         <Routes>
            {/*Home*/}
            <Route path="/">
          <Route index element={<Login/>} />
          <Route path="/login" element={<Login/>} />
          </Route>
           {/*signup*/}
          <Route path="/signupPage" element={<SignupPage/>}/>
         
            {/*Login*/}
          <Route path="/home" element={<Home/>} />
          {/*Notification*/}

          <Route path="/notification" element={<Notification/>} />

        </Routes>  
         </div>
   </Router>
  );
}

export default App;
