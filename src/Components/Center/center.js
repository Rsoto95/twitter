import React from "react";
import "./center.css";
import profileImage from "../../Images/Game4.jpg";

export function Center() {
  return (
    <div className="center-container">
      <div className="top-section">Inicio</div>
      <section className="tweet-box">
        <div className="profile-image-center">
          <img src={profileImage} />
        </div>
        <div className="text-box">
          <textarea type="text" placeholder="What's Happening?"></textarea>
        </div>

        <div className='tweet-button-center'>
            <div>Tweet</div>
        </div>
      </section>
    </div>
  );
}
