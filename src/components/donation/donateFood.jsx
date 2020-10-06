import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import './styles/donateFood.css'

function DonateFood() {
	const { register, errors, handleSubmit } = useForm()

	const [formFood, setFormFood] = useState([]);

	const enviarDatos = (data, event) => {
		console.log(data)
		console.log("oli")

		setFormFood([...formFood, data])
		event.preventDefault();
		event.target.reset();
		//lo de firebase aca?
	}

	return (
		<Fragment>
			<div>
				<h1><span>¿Cómo funciona?</span></h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni cumque, amet officia,
					obcaecati est architecto soluta accusamus enim repudiandae modi</p>
				<h1><span>¿Cómo puedo ayudar?</span></h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Dignissimos impedit ab esse mollitia tempora, minus ratione assumenda placeat aut odit.
					Nobis corporis sapiente asperiores deserunt soluta totam culpa aut! Quidem!</p>
			</div>
			<form onSubmit={handleSubmit(enviarDatos)}>

					<p>Nombre completo</p>
					<input
						name="nombre"
						ref={
							register({
								required: { value: true, message: 'Ingrese su nombre' }
							})
						}
						placeholder="Ej. Juan Pérez"
					/>
					<span>
						{errors?.nombre?.message}
					</span>
		
				<div>
					<p>¿Cómo nos referimos a ti?</p>
					<select
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
					<span>
						{errors?.sexo?.message}
					</span>
				</div>
				<div>
					<p>Déjanos tu correo</p>
					<input
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
				<span>
						{errors?.email?.message}
					</span>
				<div>
					<p>Número de contacto</p>
					<input
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
					<span>
						{errors?.numero?.message}
					</span>
				</div>
				<div>
					<p>¿En qué comuna te encuentras?</p>
					<select
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
				<div>
					<p><input 
					name="helpFood" 
					type="checkbox" 
					value="yes"
					ref={register}
					/> Quiero ayudar donando alimentos a la despensa. </p>
					<p><input 
					name="DonarFood" 
					type="checkbox" 
					value="yes"
					ref={register}
					/> ¿Con qué Empresa Amiga agendaste tu pedido?</p>
				</div>
				<div>
					<input
						name="m2"
						ref={
							register({
								required: { value: true, message: 'Ingrese cantidad de m2' },
							})
						}
						placeholder="Ej 6m2 o 2x3m"
					/>
					<span>
						{errors?.m2?.message}
					</span>
				</div>
				<div>
					<p>¿El espacio está en su casa o barrio? Cuéntanos todos los detalles que puedas</p>
					<input
						name="detalle"
						ref={
							register({
								required: { value: true, message: 'Ingresa los detalles' },
							})
						}
						placeholder="Ej. Tengo un espacio de 1m de ancho y 7 de largo en la vereda afuera de mi entrada"
					/>
					<span>
						{errors?.detalle?.message}
					</span>
				</div>
				<button type="submit">ENVIAR FORMULARIO</button>
			</form>
		</Fragment>
	);
}

export default DonateFood;