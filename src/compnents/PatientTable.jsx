import React from 'react'
import { Table } from './Table'

const PatientTable = ({ patients }) => {
  return (
    <div>
       <table className="table table-striped table-width table-width2">
        <thead>
          <tr>
            <th scope="col">Reg ID</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
            <th scope="col">Dosage Collected</th>
            <th scope="col">Dosage Remaining</th>
            {/* <th scope="col">Viral Level</th> */}
          </tr>
        </thead>
        {/* <tbody>
          <tr>
            <th scope="row">ABC1234657</th>
            <td>Ugo Justice</td>
            <td>19</td>
            <td>M</td>
            <td>20</td>
            <td>20</td>
            <td>80</td>
          </tr>
         
        </tbody> */}
      </table>
      {patients.map((p) => (
        <Table patient={p}/>
      ))} 
   
    </div>
  )
}

export default PatientTable
