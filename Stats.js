import React, { useEffect, useState } from 'react';
import Prodcard from './Prodcard';
import { TwitterTweetEmbed } from 'react-twitter-embed';

const Stats = () => {
  const [data, setData] = useState([]);
  const User = "User";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/endpoint/get-data');
        const result = await response.json();
        
        if (result.status === 200) {
          setData(result.data);
        } else {
          console.error('Error fetching data:', result.message);
        }
      } catch (error) {
        alert("Error fetching data");
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='stats'>
      <div className="greet">
        <h1>Hello, {User}!</h1>
      </div>
      <div className="sep"></div>
      <div className="cardholder">
        {data.map((item, index) => (
          <div key={index} className={`card${index + 1}`}>
            <Prodcard
              platform={item.platform}
              followerCount={item.follower_count}
              demographic={item.demographic}
            />
          </div>
        ))}
      </div>
      <div className="recents">
        <h2>Recent Posts and Performance</h2>
        <div className='tweets'>
          <TwitterTweetEmbed
            tweetId="1141039841993355264"
            options={{ conversation: 'none' }}
          />
          <TwitterTweetEmbed
            tweetId="1766215314151460911"
            options={{ conversation: 'none' }}
          />
          <TwitterTweetEmbed
            tweetId="1766110363928408465"
            options={{ conversation: 'none' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Stats;
