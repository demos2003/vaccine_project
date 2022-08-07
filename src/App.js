import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import PatientData from './Views/PatientData';
import PatientDetails from './Views/PatientDetails';
import "bootstrap/dist/css/bootstrap.css"

function App() {
  return (
    <div className="App">
     <Router>
  <div className="App">
   <Routes>
         
          <Route path="/" element={<Patient/>}/>
          <Route path="/details" element={<Details/>}/>

            
          {/* <Route path="/" element ={<Dash/>} /> */}
          
        </Routes>
    </div>
    </Router>
    </div>
  );
}




function Patient(){
  return<PatientData/>
}

function Details(){
  return<PatientDetails/>
}

export default App;

