import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import './styles/donateTalent.css'

function DonateTalent(){
    const {register, errors, handleSubmit } = useForm();
    const [formTalent, setFormTalent] = useState([]);
    

    const datos = (data, e) => {
		console.log(data);
		setFormTalent([...formTalent, data]);
        e.preventDefault();
        e.target.reset();
    }

    return(
       <Fragment>
          <div className='sectionTitleText'>
				<h1 className='title'><span>¿Cómo funciona?</span></h1>
				<p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni cumque, amet officia,
					obcaecati est architecto soluta accusamus enim repudiandae modi</p>
				<br/>
				<h1 className='title'><span>¿Cómo puedo ayudar?</span></h1>
				<p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Dignissimos impedit ab esse mollitia tempora, minus ratione assumenda placeat aut odit.
					Nobis corporis sapiente asperiores deserunt soluta totam culpa aut! Quidem!</p>
			</div>
            <form className='formTalentSection' onSubmit={handleSubmit(datos)}>
                <div>
                    <p className='titleForms'>Nombre completo</p>
                    <input placeholder='Ej. Juan Perez'
                    className='inputsFormTalent'
                    name='nombreCompleto'
                    ref={
                        register({
                        required:{
                            value:true,
                            message: 'Ingrese su nombre'
                        }
                    })
                    }
                    />
                    <span className='erorsText'>
                        {errors?.nombreCompleto?.message}
                    </span>
                </div>
                <div>
                    <p className='titleForms'>¿Cómo nos referimos a ti?</p>
                    <select name='genero'
                     className='selectFormTalent'
                     ref={
                        register({
                            required: { 
                                value: true, 
                                message: 'Ingrese su identificación' 
                            }
                        })
                    }>
						<option>Mujer</option>
						<option>Hombre</option>
						<option>Sin género</option>
				    </select>
                    <span className='erorsText'>
						{errors?.genero?.message}
					</span>
                </div>
                <div>
                    <p className='titleForms'>Déjanos tu correo</p>
                    <input placeholder='Ej. juanpereza@gmail.com'
                    className='inputsFormTalent'
                    name='correo'
                    ref={
                        register({
                            required: { 
                                value: true,
                                message: 'Ingrese su correo electrónico'
                            }
                        })}
                        />
                    <span className='erorsText'>
                        {errors?.correo?.message}
                    </span>
                </div>
                <div>
                    <p className='titleForms'>Número de contacto</p>
                    <input placeholder='+569 XXXX XXXX'
                    className='inputsFormTalent'
                    name='telefono'
                    ref={
                        register({
                            required: {
                                value:true,
                                message: 'Ingrese su número telefónico'
                            },
							maxLength: {
                                value:12,  
                                message: 'Ingrese un número válido'
                            },
							minLength: {
                                value:12,  
                                message: 'Ingrese un número válido'
                            }
                        })
                    }/>
                    <span className='erorsText'>
                        {errors?.telefono?.message}
                    </span>
                </div>
                <div>
                    <p className='titleForms'>¿En qué comuna te encuentras?</p>
				    <select className='selectFormTalent'
                    name='comuna'
                    ref={
                        register({
                            required: { 
                                value: true, 
                                message: 'Ingrese su comuna'
                             },
                        })
                    }>
					    <option>Springfield</option>
					    <option>P.Sherman calle wallabi</option>
				    </select>
                </div>
                <div>
                    <p className='titleForms'>¿Qué talento te gustaría ejercer en pos de nuestros beneficiarios?</p>
                    <textarea
                    placeholder='Ej. Soy diseñador y me gustaría desarrollar logos para los emprendedores de la red'
                    className='inputTextFormTalent'
                    name='talento'
                    ref={register}/>
                </div>
                <div>
                    <p className='titleForms'>¿Cúal es tu disponibilidad horaria?</p>
                    <input type='text' 
                    placeholder='Ej. Lunes y Miércoles desde las 16hrs'
                    className='inputsFormTalent'
                    name='horario'
                    ref={register}/>
                </div>
                <div>
                    <p className='titleForms'>Coméntanos cualquier detalle que consideres necesario</p>
                    <textarea
                    placeholder='Ej. Necesitaré conversar con los emprendedores para crear un logo acorde a su negocio'
                    className='inputTextFormTalent'
                    name='detalles'
                    ref={register}/>
                </div>
                <button className='btnSubmitForm' type="submit">ENVIAR FORMULARIO</button>
            </form>
       </Fragment>
    );
}

export default DonateTalent;