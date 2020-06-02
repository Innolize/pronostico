import React, { useState, useEffect } from 'react';
import CartaPronostico from './CartaPronostico';
import obtenerDatos from '../manejadorDatosPronostico.js'
import { convertirFecha } from '../utilidades.js'

const Pronostico = () => {
    debugger
    const [data, setData] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            const data = await obtenerDatos()
            setData(data);
        }
        fetchData()
    }, []);
    console.log(data)

    return (
        <div className="d-flex" >
            <div className="d-flex" style={{ margin: "auto" }} >
                {data &&
                    data.daily.map((dia, i) =>
                        <CartaPronostico
                            key={i}
                            dia={convertirFecha(dia.dt)}
                            temperaturaMin={dia.temp.min}
                            temperaturaMax={dia.temp.max}
                            clima={dia.weather[0].description}
                            srcImg={dia.weather[0].icon}
                            onclick={(e) => console.log(e.target)}
                        />
                    )
                }
            </div>
        </div >
    )
}

export default Pronostico