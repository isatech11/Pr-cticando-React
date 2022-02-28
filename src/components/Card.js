import React from 'react'
import Sonic from '../img/sonic.jpg'
import Chica from "../img/chica.jpg"
import '../style/Card.css'

function Card (props) {
return(
    <React.Fragment>
      <div className='Bigbox'>
        <div>
            <img className='img1' src={Sonic} alt= "muñeco"/>
        </div> 
        <div>
            <h1 className='title'>{props.titulo}</h1>
        </div>
        <div className='smallbox'>
            <img className='img2' src={Chica} alt= "chica"/>
            <small className='letra'>{props.descripcion}</small>
        </div>
      </div>

    </React.Fragment>

)

}

export default Card;