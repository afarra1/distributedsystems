import React from 'react'
import './stylesheets/Dashboard.css'


const DashboardBox = ({ children, width, height, id }) => {
  return (
    <div className='dashboardboxcomponent' id={id} style={{ width: width, height: height }}>
      {children}
    </div>
  )
}

export default function Dashboard() {
  let name = "Robert Henry"
  return (
    <div className='DashboardWrapper'>
      <h3>Welcome Dr. {name}</h3>
      <div className='DashboardRow' style={{marginTop:'1.25%'}}>
        <DashboardBox id={"smallbox"} width={250} height={83.33}></DashboardBox>
        <DashboardBox id={"smallbox"} width={250} height={83.33}></DashboardBox>
      </div>
      <div className='DashboardRow'>
        <DashboardBox id={"smallbox"} width={'calc(500px + 2.5%)'} height={250}></DashboardBox>
        <DashboardBox id={"smallbox"} width={450} height={250}></DashboardBox>
      </div>
      <div className='DashboardRow'>
        <DashboardBox id={"smallbox"} width={'calc(500px + 2.5%)'} height={250}></DashboardBox>
        <DashboardBox id={"smallbox"} width={450} height={250}></DashboardBox>
      </div>

    </div>
  )
}