import React from 'react'

import Card from 'react-bootstrap/Card';


function Cards(props) {
  
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img src={props.imgsrc}variant="top" className='img-fluid' />
      <Card.Body>
        <Card.Text><span className='fw-bold text-decoration-none'>Item Name:</span>{props.title}</Card.Text>
        <p className='border fw-bold border-danger rounded-pill text-danger bg-warning'>{props.sellerName}</p>
        <Card.Text>
       <span className='fw-bold'>Description:</span> {props.description}
        </Card.Text>
        <Card.Text>
        <span className='fw-bold'>Price:</span>{props.price}$ 
        </Card.Text>
        <button className='btn btn-success justify-center ms-2'>Add to cart</button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Cards