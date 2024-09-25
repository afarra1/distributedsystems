import React from 'react'
import './stylesheets/Home.css'
import BillNye from '../assets/imgs/billNye.png';
import Icon1 from '../assets/imgs/icon1.png';

const HomeService =({getImg, getText, getSub})=>{
    return(
        <div id='SingleService'>
            <img src= {getImg}/>
            <h3>{getText}</h3>
            <h4>{getSub}</h4>
        </div>
    )
}

export default function Home() {
  return (
    <div id='Home'>
    <div id='HomeWrapper'>
        <div id='HomeLeft'>
            <div id='h1Wrapper'>
            <h1 style={{fontWeight:800}}>NEW GIZA Clinic</h1>
            </div>
            <h3>
            At NGU, your health and well-being are our top priorities. With a team of highly skilled medical professionals, we provide comprehensive, personalized care that you can trust.
            </h3>
        </div>
        <div id='HomeRight'>
            <div id='ImageWrapper'>
            <img src={BillNye}/>
            </div>
        </div>
    </div>
        <div id='HomeServiceWrapper'>
            <HomeService getImg = {Icon1} getText={"PlaceholderText"} getSub={"PlaceholderText"}/>
            <HomeService getImg = {Icon1} getText={"PlaceholderText"} getSub={"PlaceholderText"}/>
            <HomeService getImg = {Icon1} getText={"PlaceholderText"} getSub={"PlaceholderText"}/>
            <HomeService getImg = {Icon1} getText={"PlaceholderText"} getSub={"PlaceholderText"}/>

        </div>
    </div>
  )
}