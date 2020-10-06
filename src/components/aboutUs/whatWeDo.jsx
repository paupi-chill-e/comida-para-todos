import React from 'react';
import './styles/whatWeDo.css';
import photo from '../../img/cat.jpg';


function WhatWeDo() {
	return (
		<div className='sectionWhatWeDo'>
			<h1 className='titleWhatWedo'>Qué hacemos</h1>
			<p className='text'>Lorem ipsum dolor sit amet consectetur adipiscing elit, dignissim sagittis faucibus enim rutrum odio vestibulum, cursus natoque mauris mi potenti libero.</p>
			<div className='containerScheme'>
				<img className='scheme' src={photo}/>
			</div>
		</div>

	);
}

export default WhatWeDo;