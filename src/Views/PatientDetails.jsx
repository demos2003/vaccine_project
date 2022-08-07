import React from 'react'
import "./patientdetail.css"

const PatientDetails = () => {
    return (
        <div>
            <div className='top'>
                {/* <h2  style={{textAlign:"center", color:"white"}} className='page_title'>Ugo Justice</h2> */}
            </div>
            <div className='detail_card'>
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

                        <div class="form-group v_level">
                            <label for="exampleFormControlSelect1"><h5> VIRAL LEVEL: </h5></label>
                            <select class="form-control select_lenght" id="exampleFormControlSelect1">
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
                            <button className='btn test_btn'>Submit Test</button>
                        </div>


                    </div>
                </div>



            </div>

        </div>
    )
}

export default PatientDetails
