import React from 'react';

const Prodcard = ({ platform, followerCount, demographic }) => {
  return (
    <div className="card">
      <div className="platform">{platform}</div>
      <div className="follow-count">
        <h1>{followerCount}</h1>
        <h5>followers</h5>
      </div>
      <div className="growth">
        <img src="" alt="" />
        +4.38% growth
      </div>
    </div>
  );
};

export default Prodcard;
