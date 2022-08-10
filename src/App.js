import {BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import PatientData from './Views/PatientData';
import PatientDetails from './Views/PatientDetails';
import Login from './Views/Login';
import "bootstrap/dist/css/bootstrap.css"
import { Context } from './compnents/context/Context';
import { useContext } from 'react';

function App() {
  const {user} = useContext(Context)
  return (

  <div className="App">
    <BrowserRouter>
   <Routes>
         
          <Route path="/patient" element={<PatientData/>}/>
          <Route path="/details" element={<PatientDetails/>}/>
          <Route path="/" element={<Login/>}/>

            
          {/* <Route path="/" element ={<Dash/>} /> */}
          
        </Routes>
        </BrowserRouter>
    </div>
  );
}




// function Patient(){
//   return<PatientData/>
// }

// function Details(){
//   return<PatientDetails/>
// }

// function Log(){
//   return<Login/>
// }

export default App;

