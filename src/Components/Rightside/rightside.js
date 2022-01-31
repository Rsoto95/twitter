import React from "react";
import "./rightside.css";

export function Rightside() {
  return (
    <section className="rightside-container">
      <div className="search-input">
        <input placeholder="Search on Twitter" />
      </div>

      <section className="trend">
        <div className="trending-for-you">
          <h2>Trending for you</h2>
        </div>

        <div className="trending-for-you-box">
          <div  >Entretenimiento Tendencia</div>
          <div className='bold-h4'>Eren</div>
          <div >Entretenimiento Tendencia</div>
        </div>

        <div className="trending-for-you-box">
          <div  >Entretenimiento Tendencia</div>
          <div className='bold-h4'>Demon Slayer</div>
          <div >Entretenimiento Tendencia</div>
        </div>

        <div className="trending-for-you-box">
          <div  >Deportes Tendencia</div>
          <div className='bold-h4'>Messi</div>
          <div >Entretenimiento Tendencia</div>
        </div>

        <div className="trending-for-you-box">
          <div > Tendencia en Honduras</div>
          <div className='bold-h4'>Unah</div>
          <div >Entretenimiento Tendencia</div>
        </div>
        </section>


        <section className="trend">
        <div className="trending-for-you">
          <h2>Who to follow?</h2>
        </div>

        <div className="trending-for-you-box">
          <div  >Entretenimiento Tendencia</div>
          <div className='bold-h4'>Eren</div>
          <div >Entretenimiento Tendencia</div>
        </div>

        <div className="trending-for-you-box">
          <div  >Entretenimiento Tendencia</div>
          <div className='bold-h4'>Demon Slayer</div>
          <div >Entretenimiento Tendencia</div>
        </div>

        <div className="trending-for-you-box">
          <div  >Deportes Tendencia</div>
          <div className='bold-h4'>Messi</div>
          <div >Entretenimiento Tendencia</div>
        </div>

        <div className="trending-for-you-box">
          <div > Tendencia en Honduras</div>
          <div className='bold-h4'>Unah</div>
          <div >Entretenimiento Tendencia</div>
        </div>
        </section>


    </section>
  );
}
