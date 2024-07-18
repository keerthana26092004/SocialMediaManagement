import React from 'react'
import { ReactDOM } from 'react'
import Sidebar from './Sidebar'
import Stats from './Stats'
import Graph from './Graph'



const Dashboard = () => {
  return (
    <div className='dash'>
        <Sidebar/>
        <Stats/>
        <Graph/>
        
    </div>
  )
}

export default Dashboard;


