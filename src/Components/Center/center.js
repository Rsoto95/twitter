import React from "react";
import "./center.css";
import profileImage from "../../Images/Game4.jpg";
import { useState } from "react";

export function Center() {
  const [tweet, setTweet] = useState("No tweets yet...");
  const [tweetText, setTweetText] = useState("");

  const tweets = () => {



    let tuit = (
      <div className="tuit">
        <img src={profileImage} />
        <div className="tuit-container">
          <div className="tuit-container-name">Roberto Soto</div>
          <div className="tuit-container-text">{tweetText}</div>
        </div>
      </div>
    );

    if (tweetText === "") {
      return;
    }

    switch (tweet) {
      case "No tweets yet...":
        setTweet([<div>{tuit}</div>]);
        setTweetText("");
        break;
      default:
        setTweet([<div>{tuit}</div>, ...tweet]);
        setTweetText("");
        break;
    }
  };

  return (
    <div className="center-container">
      <div className="top-section">Inicio</div>
      <section className="tweet-box">
        <div className="profile-image-center">
          <img src={profileImage} />
        </div>
        <div className="text-box">
          <textarea
            type="text"
            placeholder="What's Happening?"
            value={tweetText}
            onChange={(e) => {
              

              switch (e.target.value.length) {
                default:
                  setTweetText(e.target.value);
                  break;
              }
            }}
          ></textarea>
        </div>

        <div className="tweet-button-center">
          <div onClick={tweets}>Tweet</div>
        </div>
      </section>
      <section className="tweets-section">
        
        <div className="placeholder-tweet">{tweet}</div>
      </section>
    </div>
  );
}
