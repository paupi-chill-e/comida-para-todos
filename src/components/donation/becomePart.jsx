import React,{useState}from "react";
import './styles/becomePart.css';
import ModalDonation from "./modalDonation";
import BtnModal from './btnModal'

function BecomePart() {

	
	const [showModalPre, setShowModalPre] = useState(false)


    const openModalPre = () => {
        setShowModalPre(true);
    }

    const closeModalPre = () => {
        setShowModalPre(false);
    }

 

	return (
		
		<div className='sectionBecomePart'>
			<h1 className='title'>¡HAZTE PARTE!</h1>
			<p className='text'>Lorem ipsum dolor sit amet consectetur adipiscing elit, dignissim sagittis faucibus enim rutrum odio vestibulum, cursus natoque mauris mi potenti libero. dona una vez o hazte socio.</p>
			<p><strong>Ayúdanos a cocinar un almuerzo solidario de 400gr con calidad nutricional garantizada.</strong></p>
			
			<BtnModal showModal={openModalPre} />
            
			{showModalPre === false ? null : <ModalDonation close={closeModalPre} />}
			
        
		
		
		</div>
	);
}

export default BecomePart;