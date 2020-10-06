import React, { Fragment } from "react";
import fotoprueba from "../../img/foto.jpeg";
import './styles/motivationSectionF.css'

const motivationSectionF = () => {
  return (
    <Fragment>
      <div className="textMotivacionSection">
        <strong>NUESTRA MOTIVACION</strong>
      </div>
      <div className="containerMotivation">
        <div className="eachMotivation">
          <img className="imgDonate" src={fotoprueba} alt="" />
          <div className="descriptionMotivation">
            <p>
              Gestionamos <strong>almuerzos nutritivos</strong> para quienes más
              lo necesitan{" "}
            </p>
          </div>
        </div>

        <div className="eachMotivation">
          <img className="imgDonate" src={fotoprueba} alt="" />
          <div className="descriptionMotivation">
            <p>
              {" "}
              Fomentamos <strong>empleo</strong> en restaurantes y sectores
              productivos vulnerables
            </p>
          </div>
        </div>

        <div className="eachMotivation">
          <img className="imgDonate" src={fotoprueba} alt="" />
          <div className="descriptionMotivation">
            <p>
              {" "}
              <strong>Educamos</strong> sobre nutrición y gastronomía a
              comunidades locales
            </p>
          </div>
        </div>

        <div className="eachMotivation">
          <img className="imgDonate" src={fotoprueba} alt="" />
          <div className="descriptionMotivation">
            <p>
              {" "}
              Forjamos redes que apoyen el fortalecimiento de la{" "}
              <strong>comunidad</strong>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default motivationSectionF;
