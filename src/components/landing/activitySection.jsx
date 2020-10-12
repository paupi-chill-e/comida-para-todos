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
         <iframe class="instagram-media-instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CGN_2tcHIk4/embed/?cr=1&amp;v=12&amp;wp=746&amp;rd=http%3A%2F%2Flocalhost%3A3000&amp;rp=%2FDonaciones#%7B%22ci%22%3A0%2C%22os%22%3A1508.6749999900348%2C%22ls%22%3A665.4649999982212%2C%22le%22%3A667.650000017602%7D ;"></iframe> 
        
        
        {/*instagram renderizado de ultimas imgs directo de la ap redirige,publica,likes  */}          
{/* <iframe className='renderautomatic' src="https://www.powr.io/instagram-feed/u/c349a139_1602450916#platform=embed" ></iframe> */}
      
  
       
      
    </div>
    <div className="text-center hid btn btn-primary btn-xs design_2 js-hide-if-pos">

</div>
    </Fragment>
  );
};

export default ActivitySectionF;
