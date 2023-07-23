import "./App.css";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Footer from "./compoents/Footer";
import Navbar from "./compoents/Navbar";
import SecondPage from "./compoents/SecondPage";
import TopPage from "./compoents/TopPage";
import Info from './compoents/Info';
import Counselling from "./compoents/Counselling";
import Activities from "./compoents/Activities";
import Social from "./compoents/Social";
import ActivityReg from "./compoents/ActivityReg";
import CounsellorReg from "./compoents/CounsellorReg";
import Login from "./compoents/Login";
function App() {
  return (
    <div className="App">
      <Router>
        <TopPage />
        <Navbar/>
      <Routes>
        <Route exact path="/" element={ <SecondPage />}></Route>
        <Route exact path="/info" element={ <Info />}></Route>
        <Route exact path="/counselling" element={ <Counselling/>}></Route>
        <Route exact path="/activity" element={ <Activities/>}></Route>
        <Route exact path="/activity/register" element={<ActivityReg/>}/>
        <Route exact path="/counsellor/register" element={<CounsellorReg/>}/>
        <Route exact path="/Login" element={<Login/>}/>
      </Routes>
      <Social/>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
