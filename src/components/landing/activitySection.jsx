import React, { Fragment, useState } from "react";
import colab from './data.json';
import "./styles/activitySectionF.css";

const ActivitySectionF = () => {
  const [Colab] = useState(colab);
  return (
      <Fragment>
    <div className='textActivitySection'>
    <strong>NUESTROS COLABORADORES</strong>
    </div>
    <div className="containerActivitySection">
      {Colab.map((item) =>
        <div className='eachColab' key={item.id}>
          <img className='imgActivity' src={item.img} alt='ayuda'/>
        </div>
      )}
    </div>
    </Fragment>
  );
};

export default ActivitySectionF;
