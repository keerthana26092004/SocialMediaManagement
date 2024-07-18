import React, {useEffect} from 'react'
import john from './images/people/john.jpg'
import link from './images/link.svg'
import "./styles/graph.css"
import progress from './something_copy.js';
import "./styles/something.css"

function Graph() {
    useEffect(() => {
        const masterProgress = document.getElementById('masterProgress');
        
        progress(75, masterProgress, "Male", "#FBEEAA");
        progress(66, masterProgress, "Female", "#D5D3F9");
        progress(52, masterProgress, "Other", "#A091EC");
      }, []);
  return (
    <div className='graph-cont'>
        <h2 className='name'>Demographics Overview</h2>
        <div className="sep"></div>
        <div className="graph-box">
        {/* <div class="master" id="masterProgress" style={{height: "300px"}}></div> */}
        </div>
        <div className="sep"></div>
        <div className="followers-cont">
            <h2>Recent Followers</h2>
            <div className="followers">
                <img src={john} alt="" className='profile'/>
                <h3>John</h3>
                <img src={link} alt="" className='link'/>
                <h5>@johndesigns</h5>
            </div>
            <div className="followers">
                <img src={john} alt="" className='profile'/>
                <h3>John</h3>
                <img src={link} alt="" className='link'/>
                <h5>@johndesigns</h5>
            </div>
            <div className="followers">
                <img src={john} alt="" className='profile'/>
                <h3>John</h3>
                <img src={link} alt="" className='link'/>
                <h5>@johndesigns</h5>
            </div>
        </div>
    </div>
  )
}

export default Graph;