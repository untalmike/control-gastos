import {useState} from 'react'
import CerrarSVG from '../img/cerrar.svg'

export const Modal = ({setModal, animarModal, setAnimarModal}) => {
    const cerrarModal = () => {
        setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
        }, timeout);
    }

  return (
    <div className='modal'>
        <div className='cerrar-modal'>
            <img 
                src={CerrarSVG}
                alt='Cerrar Modal'
                onClick={cerrarModal}
            />
        </div>
        <form className={`formulario ${animarModal ? "animar" : ""} `}>
            <legend>Nuevo Gasto</legend>

            <div className="campo">
                <label htmlFor="nombre">Nombre gasto</label>
                <input type="text" id="nombre" placeholder='Agrega el nombre del campo'/>
            </div>

            <div className="campo">
                <label htmlFor="cantidad">Cantidad gastada</label>
                <input type="number" id="cantidad" placeholder='Agrega la cantidad del gasto'/>
            </div>

            <div className="campo">
                <label htmlFor="categoria">Categoría del gasto</label>
                <select id="categoria">
                    <option value="">-- Seleccione --</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="comida">Casa</option>
                    <option value="gastos varios">Gastos varios</option>
                    <option value="ocio">Ocio</option>
                    <option value="salud">Salud</option>
                    <option value="suscripciones">Suscripciones</option>
                </select>
            </div>
            <input type="submit" value="Registrar Gasto" />
        </form>
    </div>
  )
}

export default Modal