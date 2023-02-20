import NuevoPresupuesto from "./NuevoPresupuesto";
import ControlPresupuesto from "./ControlPresupuesto";

const Header = ({ gastos, presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto}) => {
    return (
        <div>
            <header>
                <h1>Planificador de Gastos</h1>
                {isValidPresupuesto ? (
                    <ControlPresupuesto
                        gastos={gastos}
                        presupuesto={presupuesto}
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