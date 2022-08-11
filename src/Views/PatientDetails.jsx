import React from 'react'
import "./patientdetail.css"
import { useState } from 'react'
import Popup from '../compnents/Popup'
import { Audio, TailSpin } from 'react-loader-spinner'
import { AiFillCheckCircle } from 'react-icons/ai'
import { ImCancelCircle } from 'react-icons/im'
import config from '../config';
import axios from 'react'





const PatientDetails = () => {
    const [dosage, setDoage] = useState("");

    const handleAdd = async (e) => {
        e.preventDefault();
        const res = await axios.put(`${config.testURL}/dosage/${id}`, {
            viral_level: num,
            dosage_collected: dosage,

        });
        res.data
            && window.location.reload();

    };
    const [num, setNumber] = useState(0);
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
    const [Modal, SetModal] = useState(false);
    const [timer, setTimer] = useState(false)

    const Loader = () => {
        return (
            <div>

                <TailSpin color="#ff3259" height={80} width={700} />
                <h4 style={{ textAlign: "center", marginTop: "40px" }}>Running System Test....</h4>
            </div>
        )
    }
    const Result = () => {
        return (
            <div className='test_complete'>
                <button onClick={() => SetModal(false)} className="systest_close"><ImCancelCircle className='close_icon' /></button>
                <AiFillCheckCircle className='complete_icon' />
                <h4>System Test Successful</h4>
            </div>
        )
    }
    const openTimer = () => {
        setTimer((prev) => !prev);
        let myTimeout = setTimeout(() => setTimer(false), 5000);
    }

    const getDosage = (num1) => {

        if (num1 < 30) {
            setDoage("10 ml")
        } else if (num1 >= 30 && num <= 60) {
            setDoage("20 ml")
        } else {
            setDoage("30 ml")
        }

    }

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const Nm = urlParams.get('Name')
    const AG = urlParams.get('Age')
    const GD = urlParams.get('Gender')
    const DC = urlParams.get('Dcoll')
    const DR = urlParams.get('Drem')
    const id = urlParams.get('ID')
    return (
        <div>
            <div className='top'>
                {/* <h2  style={{textAlign:"center", color:"white"}} className='page_title'>Ugo Justice</h2> */}
                <button className='add_btn' onClick={() => { SetModal(true); openTimer(false); }}>Run System test</button>
                {Modal && <div className='popup2'>
                    <div className='popup2-inner'>
                        {
                            !timer ? Result() : Loader()
                        }

                    </div>
                </div>

                }

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
                        <h5>NAME: {Nm}</h5>
                        <h5>AGE: {AG}</h5>
                        <h5>GENDER: {GD}</h5>
                        <h5>DOSAGE COLLECTED: {DC}</h5>
                        <h5>DOSAGE REMAINING: {DR}</h5>

                    </div>

                    <div className='img_holder'>
                        <div>
                            <img src="/images/ilustration.png" className='ilustration_size' alt="" />
                        </div>
                        <div>
                            <button className='btn test_btn' onClick={() => { SetActive(true); getDosage(num) }}>Submit Test</button>
                            {
                                Active && <div className='popup2'>
                                    <div className='popup2-inner'>
                                        <h4>CURRENT VIRAL LEVEL : <span >

                                            {num}
                                        </span></h4>
                                        <h4>DOSAGE REQUIRED : <span>{dosage}</span></h4>
                                        <button onClick={() => { SetActive(false); myFunction(); handleAdd(); }} className="add_btn2">Trigger Needle</button>
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
