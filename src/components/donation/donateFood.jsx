import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import './styles/donateFood.css';
import {firebase} from '../../firebase';


function DonateFood ()  {
	const db = firebase.firestore()
	const { register, errors, handleSubmit } = useForm();

	const [formFood, setFormFood] = useState([]);

	const enviarDatos = (data, event) => {
		setFormFood([...formFood, data])
		event.preventDefault();
		event.target.reset();
		console.log(data)
		db.collection("Despensa").doc(data.nombreCompleto).set({data})	
	};

	return (
		<Fragment>
			<div className='sectionTitleText'>
				<h1 className='title'><span>¿Cómo funciona?</span></h1>
				<p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni cumque, amet officia,
					obcaecati est architecto soluta accusamus enim repudiandae modi</p>
				<h1><span className='title'>¿Cómo puedo ayudar?</span></h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Dignissimos impedit ab esse mollitia tempora, minus ratione assumenda placeat aut odit.
					Nobis corporis sapiente asperiores deserunt soluta totam culpa aut! Quidem!</p>
			</div>
			<form className='formHuertasSection' onSubmit={handleSubmit(enviarDatos)}>

					<p className='titleForms'>Nombre completo</p>
					<input className='inputsFormHuertas'
						name="nombreCompleto"
						ref={
							register({
								required: { value: true, message: 'Ingrese su nombre' }
							})
						}
						placeholder="Ej. Juan Pérez"
					/>
					<span className='errorsText'>
						{errors?.nombreCompleto?.message}
					</span>
		
				<div>
					<p className='titleForms'>¿Cómo nos referimos a ti?</p>
					<select className='selectFormHuertas'
						name="genero"
						ref={
							register({
								required: { value: true, message: 'Ingrese su identificación' }
							})
						}
					>
						<option>Mujer</option>
						<option>Hombre</option>
						<option>Sin género</option>
					</select>
					<span  className='erorsText'>
						{errors?.genero?.message}
					</span>
				</div>
				<div>
					<p className='titleForms'>Déjanos tu correo</p>
					<input className='inputsFormHuertas'
						name="correo"
						type="email"
						ref={
							register({
								required: { value: true, message: 'Ingrese su correo electronico' }
							})
						}
						placeholder="Ej. juanperez@mail.com"
					/>
				</div>
				<span className='errorsText'>
						{errors?.correo?.message}
					</span>
				<div>
					<p className='errorsText'>Número de contacto</p>
					
					<input className='inputsFormHuertas'
						name="numeroTelefonico"
						ref={
							register({
								required: { value: true, message: 'Ingrese su número telefónico' },
								maxLength: {value:12,  message: 'Ingrese un número válido'},
								minLength: {value:12,  message: 'Ingrese un número válido'},
							})
						}
						placeholder="+569XXXXXXXX"
					/>
					<p className='errorsText'>Número de contacto</p>
					<span className='errorsText'>
						{errors?.numeroTelefonico?.message}
					</span>
				</div>
				<div>
					<p className='titleForms'>¿En qué comuna te encuentras?</p>
					<select 	className='selectFormHuertas'
						name="comuna"
						ref={
							register({
								required: { value: true, message: 'Ingrese su comuna' },
							})
						}
					>
						<option>Springfield</option>
						<option>P.Sherman calle wallabi</option>
					</select>
					<span className='errorsText'>
						{errors?.comuna?.message}
					</span>
				</div>
				<div className='textandCheckbox'>
					<p  className='titleFormsCheckbox'><input 
					name="helpFood" 
					type="checkbox" 
					value={true}
					ref={register}
					/> Quiero hacer una colecta en mi comunidad y trasladar los alimentos </p>
					<p className='titleFormsCheckbox'><input className='formCheckbox'
					name="DonarFood" 
					type="checkbox" 
					value={true}
					ref={register}
					/> Quiero donar alimentos para ser trasladados por Empresas Amigas </p>
				</div>
				<div>
				<p className='titleFormsCheckbox'>¿Con qué Empresa Amiga agendaste tu pedido?</p>
					<select className='selectFormHuertas'
						name="empresa"
						ref={
							register({
								required: { value: true, message: 'Ingrese la empresa' },
							})
						}
					>
						<option>Restaurant Don Gollo</option>
						<option>Repartos Willy Wonka</option>
					</select>
					<span className='errorsText'>
						{errors?.empresa?.message}
					</span>
				</div>
				<div>
					<p className='titleFormsCheckbox'>Ingresa tu número de pedido </p>
					<input className='inputsFormHuertas'
						name="numeroPedido"
						ref={
							register({
								required: { value: true, message: 'Ingrese numero de pedido' },
							})
						}
						placeholder="Ej #00123456"
					/>
					<span className='errorsText'>
						{errors?.numeroPedido?.message}
					</span>
				</div>
				<div>
					<p className='titleFormsCheckbox'>Describe los alimentos y cantidades a donar para asegurarles un lugar dentro del transporte</p>
					<input className='inputsFormHuertas'
						name="detalle"
						ref={
							register({
								required: { value: true, message: 'Ingresa los detalles' },
							})
						}
						placeholder="Ej. 2 kilos de papas, 3 paquetes de fideos, 2 lechugas costinas."
					/>
					<span className='errorsText'>
						{errors?.detalle?.message}
					</span>
				</div>
				<button  className='btnSubmitForm'type="submit">ENVIAR FORMULARIO</button>
			</form>
		</Fragment>
	);
}

export default DonateFood;