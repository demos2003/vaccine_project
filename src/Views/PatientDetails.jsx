import React from 'react'
import "./patientdetail.css"
import { useState } from 'react'
import Popup from '../compnents/Popup'

const PatientDetails = () => {
    const [num, setNumber] = useState(0);
    var [dosage, setDosage] = useState(0);
    const myFunction = () => {
        alert('Test has been completed');
    }
    const randNumber = (max, min) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const handleClick = () => {
        setNumber(randNumber(1, 100));
    }
    const [Active, SetActive] = useState(false);






    return (
        <div>
            <div className='top'>
                {/* <h2  style={{textAlign:"center", color:"white"}} className='page_title'>Ugo Justice</h2> */}
            </div>
            <div className='detail_card' onLoad={handleClick}>
                <h4 className='stf'>Patient Details</h4>
                <div style={{ float: "left", width: "36%" }} className="line">
                    <hr />
                </div>
                <div style={{ float: "right", width: "36%" }}>
                    <hr />
                </div>
                <div className='detailCard_holder'>
                    <div className='text_info'>
                        <br></br>
                        <br></br>
                        <h5>NAME: UGO JUSTICE</h5>
                        <h5>AGE: 20</h5>
                        <h5>GENDER: M</h5>
                        <h5>DOSAGE COLLECTED: 20</h5>
                        <h5>DOSAGE REMAINING: 20</h5>

                        <div className="form-group v_level">
                            <label for="exampleFormControlSelect1"><h5> VIRAL LEVEL: </h5></label>
                            <select className="form-control select_lenght" id="exampleFormControlSelect1">
                                <option>10</option>
                                <option>20</option>
                                <option>30</option>
                                <option>40</option>
                                <option>50</option>
                                <option>60</option>
                                <option>70</option>
                                <option>80</option>
                                <option>90</option>
                                <option>100</option>
                            </select>
                        </div>
                    </div>

                    <div className='img_holder'>
                        <div>
                            <img src="/images/ilustration.png" className='ilustration_size' alt="" />
                        </div>
                        <div>
                            <button className='btn test_btn' onClick={() => { SetActive(true); }}>Submit Test</button>
                            {
                                Active && <div className='popup2'>
                                    <div className='popup2-inner'>
                                        <h4>CURRENT VIRAL LEVEL : <span>{num}</span></h4>
                                        <h4>DOSAGE REQUIRED : <span>{(() => {
                                            if (num < 30) {
                                                return (
                                                    20
                                                )
                                            } else if (num >= 30 && num <= 60) {
                                                return (
                                                    21
                                                )
                                            } else {
                                                return (
                                                    22
                                                )
                                            }
                                        })()}</span></h4>
                                        <button onClick={() => { SetActive(false); myFunction(); }} className="add_btn2">Trigger Needle</button>
                                    </div>
                                </div>
                            }

                        </div>


                    </div>
                </div>



            </div>

        </div>
    )
}

export default PatientDetails
