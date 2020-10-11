import React from 'react';
import './styles/whatWeDo.css';
import scheme from '../../img/AboutUs/scheme.png';


function WhatWeDo() {
	return (
		<div className='sectionWhatWeDo'>
			<h1 className='titleWhatWedo'>QUÉ HACEMOS</h1>
			<p className='text'>Con tu donación ponemos en marcha un sistema donde todas las partes interactúan, creando una red de apoyo que permite generar empleo y recursos, para favorecer un modelo circular que pueda auto-sustentarse.</p>
			<div className='containerScheme'>
				<img className='scheme' src={scheme}/>
			</div>
			<p className='text'>Los restaurantes colaboradores de nuestra red reciben tu aporte para pagar personal extra y comprar insumos a pequeños productores, así cocinan y empacan los almuerzos, que serán llevados a comedores solidarios por transportistas que han estado detenidos a causa de la pandemia.Los comedores reciben comida lista para calentar y servir, alimentando a los sectores vulnerables de la población.
Además, los restaurantes apadrinan comedores para capacitar la comunidad, lo que junto con nuestro voluntariado de acción directa permite dar herramientas y redes de apoyo para que dichas comunidades sigan surgiendo.</p>
		</div>

	);
}

export default WhatWeDo;