import React from 'react';
import "./works.scss";
import Scroll from "./../scroll/Scroll.jsx";

export default function Works() {
  return (
    <div id="works">
      <div className='container'>
      <div class="box"> <div className="box1"><a href="https://github.com/alinacrk" target="_blank"> My GitHub</a></div>
      </div>
      <div class="box"> <a className='a1' target="_blank" href="https://opensea.io/MIk_crk/created?search[sortAscending]=false&search[sortBy]=BEST_BID"> Opensea NFT</a>    
    </div>
    <div className='scroll1'>
      <a href="#contact">
          <Scroll/>
        </a></div>
      </div>
      
      </div> 
   
  )
}
