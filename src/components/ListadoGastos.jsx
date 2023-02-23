import Gasto
 from "./Gasto"
const ListadoGastos = ({gastos, setGastoEditar, eliminarGasto, filtro, gastosFiltrados}) => {
    return (
        <div className="listado-gastos contenedor">

            {
                filtro ? (
                    <>
                    <h2>{gastosFiltrados.length ? "Gastos" : "Categoría sin registros"}</h2>
                    {
                        gastosFiltrados.map( gasto => (
                            <Gasto
                                key={gasto.id}
                                gasto={gasto}
                                setGastoEditar={setGastoEditar}
                                eliminarGasto={eliminarGasto}
                            />
                        ))
                    }
                    </>
                ) : (
                    <>
                    <h2>{gastos.length ? "Gastos" : "Aún no hay gastos registrados"}</h2>
                    {
                        gastos.map( gasto => (
                            <Gasto
                                key={gasto.id}
                                gasto={gasto}
                                setGastoEditar={setGastoEditar}
                                eliminarGasto={eliminarGasto}
                            />
                        ))
                    }
                    </>
                )
            }
        </div>
    )
}

export default ListadoGastos