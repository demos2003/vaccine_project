import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import config from '../config';

const CreatePatient = () => {
  const [Popup, setPopup] = useState(false);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  // const [dosage_remaining, setDosage_remaining] = useState("");
  const [viral_level, setViral_level] = useState("");
  const handleCreate = async (e) => {
    e.preventDefault();
    const res = await axios.post(`${config.testURL}/create`, {
      name,
      age,
      gender,
      viral_level,

    });
    res.data
      && window.location.reload();

  };
  return (
    <div>
      <button onClick={() => setPopup(true)} className="add_btn">Create Patient</button>
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
              <input
                type="text" placeholder="Name" className='form-control mb-3'
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text" placeholder="Age" className='form-control mb-3'
                onChange={(e) => setAge(e.target.value)}
              />

              {/* <div className="form-check">
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
              </div> */}
              <input
                type="text" placeholder="Gender" className='form-control mb-3'
                onChange={(e) => setGender(e.target.value)}
              />
              <input
                type="text" placeholder="Dosage Remaining" className='form-control mb-3'
                // onChange={(e) => setDosage_remaining(e.target.value)}
              />
              <input
                type="text" placeholder="Viral Level Remaining" className='form-control mb-3'
                onChange={(e) => setViral_level(e.target.value)}
              />
              <button type='submit' onClick={handleCreate} className="addUserbtn2">Add Patient</button>
            </form>
          </div>
        </div>
      }


    </div>
  )
}

export default CreatePatient