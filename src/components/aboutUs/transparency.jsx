import React from 'react';
import './styles/transparency.css';
import graphic from '../../img/foto.jpeg';

function Transparency() {
	return (
		<div className='sectionTransparency'>
			<h1 className='title'>Transparencia</h1>
			<div className='containerTransparency'>
				<img src={graphic} className='graphic'/>
			</div>
		</div>
	);
}

export default Transparency;