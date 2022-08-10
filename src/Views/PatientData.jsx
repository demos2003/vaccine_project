import React from 'react'
import "./patientdata.css"
import PageTitle from '../compnents/PageTitle'
import { useState, useEffect } from 'react'
import axios from "axios"
import config from '../config'
import { Table } from '../compnents/Table'
import PatientTable from '../compnents/PatientTable'
import CreatePatient from '../compnents/CreatePatient'

const PatientData = () => {
  const [patients, setPatients] = useState([]);
  useEffect(() => {
    const fetchPatients = async () => {
      const res = await axios.get(`${config.testURL}/patient/detail`);
      setPatients(res.data);
    };
    fetchPatients();
  }, []);
  // console.log(patients);

  // const [user, setUser] = useState([]);
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const res = await axios.get(`${config.testURL}/login`);
  //     setUser(res.data);
  //   };
  //   fetchUser();
  // }, []);
  // console.log(user)


  // console.log(patients)
  
  return (
    <div className="backgroundimg">
      {/* <div className='bod'> */}
      <PageTitle />
      {/* <button onClick={() => setPopup(true)} className="add_btn">Create Patient</button>
      {
        Popup && <div className='popup2'>
          <div className='popup2-inner popup2-length'>
            <h4 className='stf2'>Add Patient</h4>
            <div style={{ float: "left", width: "36%" }} className="line">
              <hr />
            </div>
            <div style={{ float: "right", width: "36%" }}>
              <hr />
            </div>
            <form className='addUser_form'>
              <input type="text" placeholder="Name" className='form-control mb-3' />
              <input type="text" placeholder="Age" className='form-control mb-3' />
              <div className="form-check">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                <label className="form-check-label" for="exampleRadios1">
                  Male
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                <label className="form-check-label" for="exampleRadios2">
                  Female
                </label>
              </div>
              <input type="text" placeholder="Dosage Collected" className='form-control mb-3' />
              <input type="text" placeholder="Dosage Remaining" className='form-control mb-3' />
              <input type="text" placeholder="Viral Level Remaining" className='form-control mb-3' />
              <button onClick={() => { setPopup(false); }} className="addUserbtn2">Add Patient</button>
            </form>
          </div>
        </div>
      } */}
      <CreatePatient/>
      

      {/* <table className="table table-striped table-width table-width2">
        <thead>
          <tr>
            <th scope="col">Reg ID</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
            <th scope="col">Dosage Collected</th>
            <th scope="col">Dosage Remaining</th>
            <th scope="col">Viral Level</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">ABC1234657</th>
            <td>Ugo Justice</td>
            <td>19</td>
            <td>M</td>
            <td>20</td>
            <td>20</td>
            <td>80</td>
          </tr>
         
        </tbody>
      </table>
    */}

      {patients.map((p) =>
        (<PatientTable patients={p} />))}


    </div>

  )
}

export default PatientData