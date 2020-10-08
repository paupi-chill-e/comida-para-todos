import React, { Fragment,useState } from 'react';
import './styles/modal-salon.css';

const ModalSalon2 = (props) => {
    const [showMsalon, setShowMsalon] = useState(false);
	setShowMsalon(true);

	const closeModalSalon = () => {
		setShowMsalon(false);
	  }

    return (
        <Fragment>
            <div className="modal-salon">
                <div className="modal-contentS">
                    <p className="modal-textS">Pedido Entregado</p>
                    <div>
                        <button onClick={props.close} className="btn-modalS"> OK </button>
                    
                    </div>
                </div>
             
            </div>
        </Fragment>
    )
}

export default ModalSalon2;