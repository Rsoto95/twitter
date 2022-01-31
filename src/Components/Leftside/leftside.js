import react from 'react'
import './leftside.css'
import twitterIcon from "../../Images/twitter-icon-white.png"
import homeIcon from "../../Images/Bold-Home-Icon-png-hd.png"
import hashtag from "../../Images/hashtag.png"


export function Leftside(){
    return(
        <section className='leftside-container'>
        <nav className='left-side-navigation'>
        <div className='left-side-twitter-icon'>
        <img src={twitterIcon}/>
        </div>
        <div className="home-container">
            <img src={homeIcon}/>
            <h4>Home</h4>
        </div>

        <div className="explorer-container">
            <img src={hashtag}/>
            <h4>Explore</h4>
        </div>

        <div className="notification-container">
            <img src={homeIcon}/>
            <h4>Notifications</h4>
        </div>

        <div className="messages-container">
            <img src={homeIcon}/>
            <h4>Messages</h4>
        </div>

        <div className="saved-container">
            <img src={homeIcon}/>
            <h4>Saved</h4>
        </div>

        <div className="list-container">
            <img src={homeIcon}/>
            <h4>List</h4>
        </div>

        <div className="profile-container">
            <img src={homeIcon}/>
            <h4>Profile</h4>
        </div>

        <div className="more-options-container">
            <img src={homeIcon}/>
            <h4>More Options</h4>
        </div>

        <div className="tweet-container">
            <button>Tweet</button>
        </div>
  

        </nav>

    </section>
        )
}