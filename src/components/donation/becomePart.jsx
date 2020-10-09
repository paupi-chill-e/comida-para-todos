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
			<p className='text'>En Comida para todos queremos llevar almuerzos nutritivos a comunidades vulnerables, pero más aún<strong> queremos otorgar herramientas y crear redes</strong> que les permitan proteger su propia seguridad alimentaria en el futuro.</p>
			<BtnModal showModal={openModalPre} />
            
			{showModalPre === false ? null : <ModalDonation close={closeModalPre} />}
			
			<p className='textCenter'><strong>¡Cocinemos juntos un rico almuerzo solidario con calidad nutricional garantizada!</strong></p>
        
		
		
		</div>
	);
}

export default BecomePart;