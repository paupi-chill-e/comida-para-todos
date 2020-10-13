import React, { Fragment } from "react";
import Inst from "../../img/inst.png";
import Insttwo from "../../img/insttwo.png";
import "./styles/activitySectionF.css";
import Instagram from '../../img/instagram.png'
const ActivitySectionF = () => {
  return (
      <Fragment>
    <div className='textActivitySection'>
    <strong>Actividad Resiente</strong>

    </div>
    <div className="containerActivitySection">
    {/* instagram renderizado de ultimas img directo de la ap redirige y se actualiza cada 24 horas de forma automatica con la ultima informacion  */}
         {/* <iframe class="instagram-media-instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CGN_2tcHIk4/embed/?cr=1&amp;v=12&amp;wp=746&amp;rd=http%3A%2F%2Flocalhost%3A3000&amp;rp=%2FDonaciones#%7B%22ci%22%3A0%2C%22os%22%3A1508.6749999900348%2C%22ls%22%3A665.4649999982212%2C%22le%22%3A667.650000017602%7D ;"></iframe>  */}
        
        
        {/*instagram renderizado de ultimas imgs directo de la ap redirige,publica,likes  */}          
        <iframe className="renderautomatic" src="https://www.instagram.com/p/CGQbzXknyKD/embed/?cr=1&amp;v=12&amp;wp=746&amp;rd=http%3A%2F%2Flocalhost%3A3000&amp;rp=%2F#%7B%22ci%22%3A0%2C%22os%22%3A3179.215000000113%2C%22ls%22%3A1943.739999999707%2C%22le%22%3A1954.5149999999012%7D;"></iframe>
        <div className="Embed " data-ios-link="media?id=2418555277157540483&amp;utm_source=ig_embed&amp;ig_mid=21A3D8C6-3C06-48BB-A4D1-FA9BE06D3EB4" data-permalink="https://www.instagram.com/p/CGQbzXknyKD/?utm_source=ig_embed&amp;ig_mid=21A3D8C6-3C06-48BB-A4D1-FA9BE06D3EB4" data-log-event="bodyClick" data-media-type="GraphSidecar" data-media-id="2418555277157540483" data-owner-id="34668351621">
  
 
        </div>
       

       
      
    </div>
 
    </Fragment>
  );
};

export default ActivitySectionF;
