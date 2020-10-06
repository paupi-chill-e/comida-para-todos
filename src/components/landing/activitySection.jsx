import React, { Fragment } from "react";
import Inst from "../../img/inst.png";
import Insttwo from "../../img/insttwo.png";
import "./styles/activitySectionF.css";

const ActivitySectionF = () => {
  return (
      <Fragment>
    <div className='textActivitySection'>
    <strong>NUESTROS COLABORADORES</strong>
    </div>
    <div className="containerActivitySection">
     
      <a href="https://www.instagram.com/p/CF-5Fmxn8rE/" target="_blank">
        <button className='btnhref'>
          <img className="imgActivity" src={Inst} alt="" />
        </button>
      </a>

      <a href="https://www.instagram.com/p/CF7rqcLnuV7/" target="_blank">
        <button className='btnhref'>
          <img className="imgActivity" src={Insttwo} alt="" />
        </button>
      </a>
    </div>
    </Fragment>
  );
};

export default ActivitySectionF;
