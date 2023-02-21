import {useState, useEffect} from 'react'
import Mensaje from './Mensaje'
import CerrarSVG from '../img/cerrar.svg'

export const Modal = ({setModal, animarModal, setAnimarModal, guardarGasto, gastoEditar}) => {

    const [ mensaje, setMensaje] = useState(false)
    const [ nombre, setNombre ] = useState("")
    const [ cantidad, setCantidad ] = useState("")
    const [ categoria, setCategoria ] = useState("")
    const [ fecha, setFecha ] = useState("")
    const [ id, setId ] = useState("")
 
    useEffect(() => {
        if(Object.keys(gastoEditar).length > 0 ) {
            setId(gastoEditar.id)
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
            setFecha(gastoEditar.fecha)
        }
    }, [])

    const cerrarModal = () => {
        setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
        }, 500);
    }

    const handleSubmit = e => {
        e.preventDefault()

        if([nombre, cantidad, categoria].includes("")){
            setMensaje("Todos los campos son obligatorios")

            setTimeout(() => {
                setMensaje("")
            }, 3000);

            return
        }

        guardarGasto({id, nombre, cantidad, categoria, fecha})
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
        <form className={`formulario ${animarModal ? "animar" : ""} `} onSubmit={handleSubmit}>
            <legend>{gastoEditar.nombre ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
            <div className="campo">
                <label htmlFor="nombre">Nombre gasto</label>
                <input type="text" id="nombre" placeholder='Agrega el nombre del campo' value={nombre} onChange={e => setNombre(e.target.value)}/>
            </div>

            <div className="campo">
                <label htmlFor="cantidad">Cantidad gastada</label>
                <input type="text" id="cantidad" placeholder='Agrega la cantidad del gasto' value={cantidad} onChange={e => setCantidad(Number(e.target.value))}/>
            </div>

            <div className="campo">
                <label htmlFor="categoria">Categoría del gasto</label>
                <select id="categoria" value={categoria} onChange={e => setCategoria(e.target.value)}>
                    <option value="">-- Seleccione --</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="gastos">Gastos varios</option>
                    <option value="ocio">Ocio</option>
                    <option value="salud">Salud</option>
                    <option value="suscripciones">Suscripciones</option>
                </select>
            </div>
            <input type="submit" value={gastoEditar.nombre ? 'Finalizar edición de gasto' : 'Registrar Gasto'} />
        </form>
    </div>
  )
}

export default Modal