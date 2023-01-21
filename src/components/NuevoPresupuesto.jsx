import { useState } from 'react'
import Mensaje from "./Mensaje"

const NuevoPresupuesto = ({ presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto }) => {
    const [mensaje, setMensaje] = useState(false)
     
    const handlePresupuesto = (e) => {
        e.preventDefault()


        if(!presupuesto || presupuesto < 0){
            setMensaje("El presupuesto no es válido")

            setTimeout(() => {
                setMensaje("")
            }, 5000);
            return
        }

        
        setMensaje("")
        setIsValidPresupuesto(true)
    }
    return (
        <div className="contenedor-presupuesto contendor sombra">
            <form onSubmit={handlePresupuesto} className="formulario">
                
                <div className="campo">
                    <label htmlFor="">Definir Presupuesto</label>
                    <input 
                        className="nuevo-presupuesto"    
                        type="number"
                        placeholder="Añade nuevo presupuesto"
                        value={ presupuesto }
                        onChange={e => setPresupuesto(Number(e.target.value))}
                        id="presupuesto"
                    />
                </div>
                <input type="submit" value="Añadir" />
                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
            </form>
        </div>
    )
}

export default NuevoPresupuesto