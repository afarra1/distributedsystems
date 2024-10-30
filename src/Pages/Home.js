import React, { useState } from 'react'
import './stylesheets/Home.css'
import BillNye from '../assets/imgs/billNye.png';
import DoctorImg from '../assets/imgs/doctors.png';
import Icon1 from '../assets/icons/Icon1.svg';
import Icon2 from '../assets/icons/Icon2.svg';
import Icon3 from '../assets/icons/Icon3.svg';
import Icon4 from '../assets/icons/Icon4.svg';
import Doctor1 from '../assets/doctors/doctor1.png';
import { FaSearch, FaRegCalendarCheck, FaPhone, FaPlay, FaAmbulance  } from 'react-icons/fa'; // Import specific icons
import { PiMicroscope } from "react-icons/pi";
import { BsPaperclip, BsFillQuestionSquareFill  } from "react-icons/bs";

const HomeService = ({ Icon, getText, getSub }) => {
    return (
        <div id='SingleService'>
            {Icon && <Icon className='homeicon' />} {/* Render the icon component */}
            <h4>{getText}</h4>
        </div>
    )
}

const MeetDoctor = ({ doctorImg, doctorName, doctorSpec, doctorRating }) => {
    return (
        <div id='meetdoctor'>
            <div id='meetdocimgwrap'>
                <img src={doctorImg} />
            </div>
            <h3>Dr. Robert Henry</h3>
            <h4>Cardiologist</h4>
        </div>
    )
}

const FloatingText = ({ Icon, maintext, subtext, right, top, width, SecondIcon, isRight = false}) => {
    return (
        <div className='floatingtext' style={{ right: right, top: top, width:width }} id= {isRight ? 'justifyingfloat' : ''}>
            {Icon && <Icon className='floatingIcon' />} {/* Render the icon component */}
            <div className='floatingtextwrapper'>
                <h3>{maintext}</h3>
                <h4 id='subtext'>{subtext}</h4>
            </div>
            {SecondIcon && <SecondIcon className='floatingIcon' id = {isRight ? 'rightIconStyle' : ''}/>} {/* Render the icon component */}
        </div>
    );
};

const SearchDoctor = () => {
    const [isAvailable, setIsAvailable] = useState(false);

    const handleToggle = () => {
        setIsAvailable(prevState => !prevState);
    };

    return (
        <div id='floatingsearch'>
            <h4>Find a doctor</h4>
            <div id='floatingInputs'>
                <input id='textInput' type='text' placeholder='Name of Doctor' />
                <input id='textInput' type='text' placeholder='Speciality' />
                <h4 className='normal'>Availability</h4>
                <label className='toggleSwitch'>
                    <input type='checkbox' checked={isAvailable} onChange={handleToggle} />
                    <span className='slider'></span>
                </label>

                <button onClick={() => console.log("Searching...")}>Search</button>
            </div>
        </div>
    );
};



export default function Home() {
    return (
        <div id='Home'>

            <div id='HomeWrapper'>
                <div id='HomeLeft'>
                    <div>
                        <h1>We care <br /> <span>about your health</span></h1>
                        <h4>
                            Good health is the state of mental, physical and social well being and it does not just mean absence of diseases.
                        </h4>
                        <div className='bookWrapper'>
                        <button className='BookanAppoint'>Book an appointment</button>
                        <div className='PlayWrapper'>
                        <a className='PlayButton'>
                            <FaPlay color='white' enableBackground={true}/>
                        </a>
                        </div>
                        <h4>Watch videos</h4>
                        </div>
                    </div>

                    <SearchDoctor />

                </div>
                <div id='HomeRight'>
                    <div id='circleHome'>
                        <div id='circleHomeWhite'>
                            <div id='circleHome2'>
                                <img src={DoctorImg} />
                            </div>
                        </div>
                        <FloatingText Icon={FaSearch} maintext={"Well Qualified doctors"} subtext={"Treat with care"} />
                        <FloatingText top={"50%"} Icon={FaRegCalendarCheck} maintext={"Book an appointment"} subtext={"Online appointment"} />
                        <FloatingText isRight = {true} right={5} width={'12.5svw'} top={"50%"} SecondIcon={FaPhone} maintext={"Contact no."} subtext={"+20100000050"} />

                    </div>
                </div>
            </div>

            <div className='HomeServiceWrapper'>
                <h1>Our Medical Services</h1>
                <h4>
                    We are dedicated to serve you<br />
                    best medical services
                </h4>
                <div className='servicehomewrapper'>
                    <HomeService getImg={Icon1} getText={"Well equipped lab"} Icon={PiMicroscope} />
                    <HomeService getImg={Icon2} getText={"Emergency Ambulance"} Icon={FaAmbulance}  />
                    <HomeService getImg={Icon3} getText={"Online Appointment"} Icon={BsPaperclip} />
                    <HomeService getImg={Icon4} getText={"Call Center"} Icon={BsFillQuestionSquareFill} />
                </div>
            </div>

            <div className='HomeServiceWrapper'>
                <h1>Meet our Doctors</h1>
                <h4>Well qualifiied doctors are ready to serve you</h4>
                <div className='servicehomewrapper' id='HomeServiceWrap'>
                    <MeetDoctor doctorImg={Doctor1} />
                    <MeetDoctor doctorImg={Doctor1} />
                    <MeetDoctor doctorImg={Doctor1} />
                    <MeetDoctor doctorImg={Doctor1} />
                </div>
            </div>

        </div>
    )
}