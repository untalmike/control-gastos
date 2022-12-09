const NuevoPresupuesto = ({ presupuesto, setPresupuesto }) => {
    return (
        <div className="contenedor-presupuesto contendor sombra">
            <form className="formulario">
                <div className="campo">
                    <label htmlFor="">Definir Presupuesto</label>
                    <input 
                        className="nuevo-presupuesto"    
                        type="text"
                        placeholder="Añade nuevo presupuesto"
                        value={ presupuesto }
                        onChange={e => setPresupuesto(e.target.value)}
                    />
                </div>
                <input type="submit" value="Añadir" />
            </form>
        </div>
    )
}

export default NuevoPresupuesto