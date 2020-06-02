import React from 'react'
import { Card, Button } from 'react-bootstrap'



const CartaPronostico = ({ temperaturaMin, temperaturaMax, sensacionT, clima, srcImg, dia, onclick = () => { } }) => {

    return (

        <Card className="border" style={{ width: '10rem', backgroundColor: 'lightblue' }}>
            <Card.Img variant="top" src={`http://openweathermap.org/img/wn/${srcImg}@2x.png`} />
            <Card.Body>
                {<Card.Title>{dia}</Card.Title>}
                <div className="temperatura">
                    <h6>Temperatura:</h6>
                    <p>min:{temperaturaMin}º</p> <p>max:{temperaturaMax}º</p>
                </div>
                <div>
                    <h6>Clima:</h6>
                    <p>{clima}</p>
                </div>
                <Button variant="primary" onClick={onclick} >ver más</Button>
            </Card.Body>
        </Card>
    )

}

export default CartaPronostico