import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import './styles/donateTalent.css';
import { firebase } from '../../firebase';
import banner from '../../img/Landing/Donar/talento.jpg'

function DonateTalent() {
  const { register, errors, handleSubmit } = useForm();
  const [formTalent, setFormTalent] = useState([]);
  const db = firebase.firestore();


  const datos = (data, e) => {
    setFormTalent([...formTalent, data]);
    e.preventDefault();
    e.target.reset();
    db.collection("Talento").doc(data.nombreCompleto).set({
      data
    })
  };

  return (
    <Fragment>
      <div className='sectionTitleTextTalent'>
        <div className='containerBannerFormTalent'>
          <img src={banner} alt="" className='bannerForm' />
        </div>
        <h2 className='marginTopFormTalent'>¿Cómo funciona?</h2>
        <p className='textTalent'>Cuéntanos a qué te dedicas o cuál es tu pasión, buscaremos la manera de que puedas ejercerlo al servicio de las comunidades que apoyamos.</p>
        <br />
        <h2 className='marginTopFormTalent2'>¿Cómo puedo ayudar?</h2>
        <p className='textTalent'>Desde realizar la contabilidad para una pyme, hasta hacer un show de stand-up en un comedor solidario de la red <strong>¡Dinos cuál es tu talento!</strong></p>
      </div>
      <form className='formTalentSection' onSubmit={handleSubmit(datos)}>
        <div>
          <p className='titleFormsTalent'>Nombre completo</p>
          <input placeholder='Ej. Juan Perez Abarca'
            className='inputsFormTalent'
            name='nombreCompleto'
            ref={
              register({
                required: {
                  value: true,
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
          <p className='titleFormsTalent'>Déjanos tu correo</p>
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
          <p className='titleFormsTalent'>Número de contacto</p>
          <input placeholder='+569 XXXX XXXX'
            className='inputsFormTalent'
            name='numeroTelefonico'
            ref={
              register({
                required: {
                  value: true,
                  message: 'Ingrese su número telefónico'
                },
                maxLength: {
                  value: 12,
                  message: 'Ingrese un número válido'
                },
                minLength: {
                  value: 12,
                  message: 'Ingrese un número válido'
                }
              })
            } />
          <span className='erorsText'>
            {errors?.numeroTelefonico?.message}
          </span>
        </div>
        <div>
          <p className='titleFormsTalent
          '>Selecciona tu región</p>
          <select
            className='selectFormTalent
            '
            name="region"
            ref={
              register({
                required: { value: true, message: 'Ingrese su region' }
              })
            }
          >
            <option>I Región de Tarapacá</option>
            <option>II Región de Antofagasta</option>
            <option>III Región de Atacama</option>
            <option>IV Región de Coquimbo</option>
            <option>V Región de Valparaíso</option>
            <option>VI Región del Libertador General Bernardo O’Higgins</option>
            <option>VII Región del Maule</option>
            <option>VIII Región del Biobío</option>
            <option>IX Región de La Araucanía</option>
            <option>X Región de Los Lagos</option>
            <option>XI Región Aysén del General Carlos Ibáñez del Campo</option>
            <option>XII Región de Magallanes y Antártica Chilena</option>
            <option selected>Región Metropolitana de Santiago</option>
            <option>XIV Región de Los Ríos</option>
            <option>XV Región de Arica y Parinacota</option>
            <option>XVI Región de Ñuble</option>
          </select>
          <span className='erorsText'>
            {errors?.region?.message}
          </span>
        </div>
        <div>
          <p className='titleFormsTalent
          '>¿En qué comuna te encuentras?</p>
          <input
            className='inputsFormTalent
            '
            name="comuna"
            ref={
              register({
                required: { value: true, message: 'Ingrese comuna' },
              })
            }
            placeholder="Ingrese su comuna"
          />
          <span className='erorsText'>
            {errors?.comuna?.message}
          </span>
        </div>
        <div>
          <p className='titleFormsTalent'>¿Qué talento te gustaría ejercer en pos de nuestros beneficiarios?</p>
          <textarea
            placeholder='Ej. Soy diseñador y me gustaría desarrollar logos para los emprendedores de la red'
            className='inputTextFormTalent'
            name='talento'
            ref={
              register({
                required: {
                  value: true,
                  message: 'Ingrese su talento'
                }
              })
            }
          />
          <span className='erorsText'>
            {errors?.talento?.message}
          </span>
        </div>
        <div>
          <p className='titleFormsTalent'>¿Cúal es tu disponibilidad horaria?</p>
          <input type='text'
            placeholder='Ej. Lunes y Miércoles desde las 16hrs'
            className='inputsFormTalent'
            name='horario'
            ref={
              register({
                required: {
                  value: true,
                  message: 'Ingrese su disponabilidad horaria'
                }
              })
            }
          />
          <span className='erorsText'>
            {errors?.horario?.message}
          </span>
        </div>
        <div>
          <p className='titleFormsTalent'>Coméntanos cualquier detalle que consideres necesario</p>
          <textarea
            placeholder='Ej. Necesitaré conversar con los emprendedores para crear un logo acorde a su negocio'
            className='inputTextFormTalent'
            name='detalle'
            ref={
              register({
                required: {
                  value: true,
                  message: 'Ingrese los detalles'
                }
              })
            }
          />
          <span className='erorsText'>
            {errors?.detalle?.message}
          </span>
        </div>
        <button className=' btnTalent' type="submit">ENVIAR FORMULARIO</button>
      </form>
    </Fragment>
  );
}

export default DonateTalent;