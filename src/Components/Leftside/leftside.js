import react from "react";
import "./leftside.css";
import twitterIcon from "../../Images/twitter-icon-white.png";
import homeIcon from "../../Images/Bold-Home-Icon-png-hd.png";
import hashtag from "../../Images/hashtag.png";
import bell from "../../Images/notifications.png";
import messages from "../../Images/messages.png";
import saved from "../../Images/saved.png";
import list from "../../Images/list.png";
import profile from "../../Images/profile.png";
import moreOptions from "../../Images/more-options.png";

export function Leftside() {
  return (
    <section className="leftside-container">
        <nav className="left-side-navigation">
          <div className="left-side-twitter-icon">
            <img src={twitterIcon} />
          </div>
          <div className="home-container">
            <img src={homeIcon} />
            <h4>Home</h4>
          </div>

          <div className="explorer-container">
            <img src={hashtag} />
            <h4>Explore</h4>
          </div>

          <div className="notification-container">
            <img src={bell} />
            <h4>Notifications</h4>
          </div>

          <div className="messages-container">
            <img src={messages} />
            <h4>Messages</h4>
          </div>

          <div className="saved-container">
            <img src={saved} />
            <h4>Saved</h4>
          </div>

          <div className="list-container">
            <img src={list} />
            <h4>List</h4>
          </div>

          <div className="profile-container">
            <img src={profile} />
            <h4>Profile</h4>
          </div>

          <div className="more-options-container">
            <img src={moreOptions} />
            <h4>More Options</h4>
          </div>
        </nav>

        <div className="tweet-container">
          <div>Tweet</div>
        </div>
    </section>
  );
}
