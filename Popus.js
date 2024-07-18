// Subscription.js

import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import './styles/modal.css';

export default function Subscription() {
  const [email, setEmail] = useState('');

  return (
    <Popup trigger={<p>Subscription</p>} modal nested>
      {(close) => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="header">Subscribe to Our Newsletter</div>
          <div className="content">
            <p>
              Stay updated with our latest news and promotions. Enter your email
              address below to subscribe:
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="actions">
            <button
              className="button"
              onClick={() => {
                console.log('Subscribe clicked with email:', email);
                close();
              }}
            >
              Subscribe
            </button>
            <button className="button" onClick={close}>
              Close
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
}
