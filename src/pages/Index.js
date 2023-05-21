import React from 'react'
import AllTransactions from '../components/AllTransactions'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Container, Row, Col } from 'react-bootstrap'



export default function Index({subtotal}) {

  // const [color, setColor] = useState('')
  // const textColor = (subtotal)=> {
  // if (subtotal > 500){
  //   setColor('green')
  // } else if (subtotal <0){
  //   setColor('red')
  // }else{
  //   setColor('blue')
  // }
  // };

  

  return (
    <div className='index'>
      <h2>All Transactions</h2>
        <br />
        <br />
        <Container>
        <Card>
          <Card.Body>
        <AllTransactions />
        <Row>
          <Col sm="4 offset-8">
        <h4>Subtotal: {subtotal}</h4>
        </Col>
        </Row>
        </Card.Body>
        </Card>
        
        </Container>
        </div> 
  )
}
