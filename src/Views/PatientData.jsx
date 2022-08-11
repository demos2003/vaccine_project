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

  
  return (
    <div className="backgroundimg">
      <PageTitle />
      <CreatePatient/>
       {patients.map((p) =>
        (<PatientTable patients={p} />))}


    </div>

  )
}

export default PatientData