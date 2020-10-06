import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import './styles/donateHuertas.css'

function DonateHuertas() {
	const { register, errors, handleSubmit } = useForm()

	const [formHuerta, setFormHuerta] = useState([]);

	const enviarDatos = (data, event) => {
		console.log(data)
		setFormHuerta([...formHuerta, data])
		event.preventDefault();
		event.target.reset();
		//lo de firebase aca?
	}

	return (
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
			<form className='formHuertasSection' onSubmit={handleSubmit(enviarDatos)}>
					<p className='titleForms'>Nombre completo</p>
					<input
						className='inputsFormHuertas'
						name="nombre"
						ref={
							register({
								required: { value: true, message: 'Ingrese su nombre' }
							})
						}
						placeholder="Ej. Juan Pérez"
					/>
					<span className='erorsText'>
						{errors?.nombre?.message}
					</span>
				<div>
					<p className='titleForms'>¿Cómo nos referimos a ti?</p>
					<select
					    className='selectFormHuertas'
						name="sexo"
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
					<span className='erorsText'>
						{errors?.sexo?.message}
					</span>
				</div>
				<div>
					<p className='titleForms'>Déjanos tu correo</p>
					<input
						className='inputsFormHuertas'
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
				<span className='erorsText'>
						{errors?.email?.message}
					</span>
				<div>
					<p className='titleForms'>Número de contacto</p>
					<input
						className='inputsFormHuertas'
						name="numero"
						ref={
							register({
								required: { value: true, message: 'Ingrese su número telefónico' },
								maxLength: {value:12,  message: 'Ingrese un número válido'},
								minLength: {value:12,  message: 'Ingrese un número válido'},
							})
						}
						placeholder="+569XXXXXXXX"
					/>
					<span className='erorsText'>
						{errors?.numero?.message}
					</span>
				</div>
				<div>
					<p className='titleForms'>¿En qué comuna te encuentras?</p>
					<select
						className='selectFormHuertas'
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
				</div>
				<div className='textandCheckbox'>
					<p className='titleFormsCheckbox'><input 
					className='formCheckbox'
					name="ayudarHuerta" 
					type="checkbox" 
					value="yes"
					ref={register}
					/> Quiero ayudar en la mantención de huertas comunitarias. </p>
					<p className='titleFormsCheckbox'><input 
					className='formCheckbox'
					name="DonarHuerta" 
					type="checkbox" 
					value="yes"
					ref={register}
					/> Quiero donar espacio para comenzar una huerta comunitaria </p>
				</div>
				<div>
					<p className='titleForms'>¿Cuántos m2 tiene el espacio?</p>
					<input
						className='inputsFormHuertas'
						name="m2"
						ref={
							register({
								required: { value: true, message: 'Ingrese cantidad de m2' },
							})
						}
						placeholder="Ej 6m2 o 2x3m"
					/>
					<span className='erorsText'>
						{errors?.m2?.message}
					</span>
				</div>
				<div>
					<p className='titleForms'>¿El espacio está en su casa o barrio? Cuéntanos todos los detalles que puedas</p>
					<textarea
						className='textareaSection'
						name="detalle"
						ref={
							register({
								required: { value: true, message: 'Ingresa los detalles' },
							})
						}
						placeholder="Ej. Tengo un espacio de 1m de ancho y 7 de largo en la vereda afuera de mi entrada"
					/>
					<span className='erorsText'>
						{errors?.detalle?.message}
					</span>
				</div>
				<button className='btnSubmitForm' type="submit">ENVIAR FORMULARIO</button>
			</form>
		</Fragment>
	);
}

export default DonateHuertas;