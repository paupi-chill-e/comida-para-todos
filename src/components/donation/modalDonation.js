
import React, { Fragment } from 'react';
import './modalDonacion.css'

const ModalDonacion = (props) => {
    const [showM, setShowM] = useState(false);
    return (
        <Fragment>
            <div className="modalk">
                <div className="modal-contentk">
                    <p className="modal-textk">Pedido Terminado</p>
                    <div>
                        <button onClick={props.close} className="btn-modalk"> OK </button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ModalDonacion;

