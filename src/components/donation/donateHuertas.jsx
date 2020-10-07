import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import './styles/donateHuertas.css'
import {firebase} from '../../firebase'

function DonateHuertas() {
	const db = firebase.firestore()
	const { register, errors, handleSubmit } = useForm()

	const [formHuerta, setFormHuerta] = useState([]);

	const enviarDatos =  (data, event) => {
			setFormHuerta([...formHuerta, data])
			event.preventDefault();
			event.target.reset();
			console.log(data)
			db.collection("Huertas").doc(data.nombreCompleto).set({
				data
			})	
	}

	return (
		<Fragment>
			<div className='sectionTitleText'>
				<h1 className='title'><span>¿Cómo funciona?</span></h1>
				<p className='text'>Queremos aprovechar los espacios en desuso, de tu patio, casa, comunidad, la casa de tu awela, todos, donalooooos</p>
				<br />
				<h1 className='title'><span>¿Cómo puedo ayudar?</span></h1>
				<p className='text'>Usaremos los espacios que tengas disponibles para gestionar huertas urbanas, que se mantengan con permacultura y de manera comunitaria.</p>
			</div>
			<form className='formHuertasSection' onSubmit={handleSubmit(enviarDatos)}>
				<p className='titleForms'>Nombre completo</p>
				<input
					className='inputsFormHuertas'
					name="nombreCompleto"
					ref={
						register({
							required: { value: true, message: 'Ingrese su nombre' }
						})
					}
					placeholder="Ej. Juan Pérez"
				/>
				<span className='erorsText'>
					{errors?.nombreCompleto?.message}
				</span>
				<div>
					<p className='titleForms'>¿Cómo nos referimos a ti?</p>
					<select
						className='selectFormHuertas'
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
					<span className='erorsText'>
						{errors?.genero?.message}
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
					{errors?.correo?.message}
				</span>
				<div>
					<p className='erorsText'>Número de contacto</p>
					<input
						className='inputsFormHuertas'
						name="numeroTelefonico"
						ref={
							register({
								required: { value: true, message: 'Ingrese su número telefónico' },
								maxLength: { value: 12, message: 'Ingrese un número válido' },
								minLength: { value: 12, message: 'Ingrese un número válido' },
							})
						}
						placeholder="+569XXXXXXXX"
					/>
					<span className='erorsText'>
						{errors?.numeroTelefonico?.message}
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
					<span className='erorsText'>
						{errors?.comuna?.message}
					</span>
				</div>
				<div className='textandCheckbox'>
					<p className='titleFormsCheckbox'><input
						className='formCheckbox'
						name="ayudarHuerta"
						type="checkbox"
						value={true}
						ref={register}
					/> Quiero ayudar en la mantención de huertas comunitarias. </p>
					<p className='titleFormsCheckbox'><input
						className='formCheckbox'
						name="donarHuerta"
						type="checkbox"
						value={true}
						ref={register}
					/> Quiero donar espacio para comenzar una huerta comunitaria </p>
				</div>
				<div>
					<p className='titleForms'>¿Cuántos m2 tiene el espacio?</p>
					<input
						className='inputsFormHuertas'
						name="tamanoTerreno"
						ref={
							register({
								required: { value: true, message: 'Ingrese cantidad de m2' },
							})
						}
						placeholder="Ej 6m2 o 2x3m"
					/>
					<span className='erorsText'>
						{errors?.tamanoTerreno?.message}
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