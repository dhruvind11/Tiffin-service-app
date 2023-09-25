import React from 'react'
import { useDispatchCart, useCart } from './ContextReducer'
import Card from 'react-bootstrap/Card';


function Cards(props) {
  
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img src={props.imgsrc}variant="top" className='img-fluid' />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
        <Card.Text>
        {props.text2} 
        </Card.Text>
        <button className='btn btn-success justify-center ms-2'>Add to cart</button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Cards