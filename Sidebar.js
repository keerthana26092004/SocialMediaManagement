import React, { useState } from "react";
import logo from './images/logo-white.svg';
import dashboard from './images/dashboard.svg';
import stats from './images/Pressure.svg';
import subscription from './images/Chat_plus.svg';
import settings from './images/Setting_line.svg';
import signout from './images/Sign_out_squre.svg';
import statss from './images/stats.jpg';


import "./styles/modal.css"
import Subscription from "./Popus";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <a href="/home">
          <img src={logo} alt="" height={"60px"} />
        </a>
      </div>
      <div className="line"></div>
      <div className="nav">
        <div className="group">
          <img src={dashboard} alt="Alt Text" />
          <a href="/home">Home</a>
        </div>
        <div className="group">
          <img src={stats} alt="Alt Text" />
          <Popup trigger={<p>Stats</p>} position="right center" modal>
            <img src={statss} alt="" height={"590px"}/>
          </Popup>
        </div>
        <div className="group">
          <img src={subscription} alt="Alt Text"/>
          <Popup trigger={<Subscription/>} position="right center" modal>
          </Popup>
        </div>
        <div className="group">
          <img src={settings} alt="Alt Text" />
          <a href="/settings">Settings</a>
        </div>
        <div className="group">
          <img src={signout} alt="Alt Text" />
          <a href="/home">Logout</a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
