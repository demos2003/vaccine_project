import React from "react";

import { Link } from "react-router-dom";


export const Table = ({ patient }) => {
  // console.log(patient);
  return (
    <div className="table-holder1">
      <table className="table  table-width fixed">
        <tbody>
          <tr>
            {/* <th scope="row">ABC1234657\</th> */}
            <td>{patient.regNo}</td>
            <td> <Link to={`/details?Name=${patient.name}&Age=${patient.age}&Gender=${patient.gender}&Dcoll=${patient.dosage_collected}&Drem=${patient.dosage_remaining}&ID=${patient.id}`}>{patient.name}
            </Link>
            </td>
            <td>{patient.age}</td>
            <td>{patient.gender}</td>
            <td>{patient.dosage_collected}</td>
            <td>{patient.dosage_remaining}</td>
            {/* <td>{patient.viral_level}</td> */}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
