const Stateless = (props) => {
    
    return ( <div>
        <div>
            <div>
                
                <h1 className='titlefunc'>Componente De Funcion con Props mediante un archivo json</h1>
                <h1>Escuadron:{props.nameSquad}</h1>
                <h2>ciudad: {props.Town}</h2>
                <h2>fecha: {props.Date}</h2>

            </div>
        </div>
    </div> );
}
 
export default Stateless;