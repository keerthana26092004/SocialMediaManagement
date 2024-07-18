import React, { useState, useEffect } from 'react';
import john from './images/people/john.jpg';
import nora from './images/people/nora.jpg';
import sindre from './images/people/sindre.jpg';
import andrea from './images/people/andrea.jpg';
import link from './images/link.svg';
import greph from './images/graph.svg'
import "./styles/graph.css";
import progress from './something_copy';
import "./styles/something.css"

function Graph() {
    useEffect(() => {
        const masterProgress = document.getElementById('masterProgress');  
        // progress(75, masterProgress, "Male", "#FBEEAA");
        // progress(66, masterProgress, "Female", "#D5D3F9");
        // progress(52, masterProgress, "Other", "#A091EC");


        // progress(73, masterProgress, "Male", "#D5D3F9", true, 1,"black");
        // progress(43, masterProgress, "Female", "#FBEEAA", true, 1,"black");
        // progress(12, masterProgress, "Others", "#A091EC", true, 1,"black");
      }, []);
  return (
    <div className='graph-cont'>
      <h2 className='name'>Demographics Overview</h2>
      <div className="sep"></div>
      <div className="graph-box">
        {/* <div className="master" id="masterProgress" style={{ height: '150px' }}></div> */}
        <img src={greph} alt="" style={{height: "80%"}}/>
      </div>
      <div className="sep"></div>
      <div className="followers-cont">
        <h2>Recent Followers</h2>
        <div className="followers">
          <img src={nora} alt="" className='profile' />
          <h3>Nelly</h3>
          <img src={link} alt="" className='link' />
          <h5>@nellynate</h5>
        </div>
        <div className="followers">
          <img src={sindre} alt="" className='profile' />
          <h3>Nolan</h3>
          <img src={link} alt="" className='link' />
          <h5>@nolanphil</h5>
        </div>
        <div className="followers">
          <img src={andrea} alt="" className='profile' />
          <h3>Bella</h3>
          <img src={link} alt="" className='link' />
          <h5>@Bellastark</h5>
        </div>
      </div>
    </div>
  );
}

export default Graph;
