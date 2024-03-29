import NuevoPresupuesto from "./NuevoPresupuesto";
import ControlPresupuesto from "./ControlPresupuesto";

const Header = ({ gastos, setGastos, presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto}) => {
    return (
        <div>
            <header>
                <h1>Planificador de Gastos</h1>
                {isValidPresupuesto ? (
                    <ControlPresupuesto
                        gastos={gastos}
                        setGastos={setGastos}
                        presupuesto={presupuesto}
                        setPresupuesto={setPresupuesto}
                        setIsValidPresupuesto={setIsValidPresupuesto}
                    />
                ) : (
                    <NuevoPresupuesto
                        presupuesto = {presupuesto}
                        setPresupuesto = {setPresupuesto}
                        setIsValidPresupuesto={setIsValidPresupuesto}
                    />
                )}
            </header>
        </div>
    )
}

export default Header