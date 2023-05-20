import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Card, Button, Row, Col, Container } from 'react-bootstrap'
const API = process.env.REACT_APP_API_URL;

export default function TransactionDetails() {
    let navigate = useNavigate();
    let { id } = useParams();
    const [transaction, setTransaction] = useState([])



    useEffect(() => {

        axios
            .get(`${API}/budget/${id}`)
            .then((res) => setTransaction(res.data))
            .catch((err) => console.log(err))
    }, [id])

    function handleDelete() {
        axios
            .delete(`${API}/budget/${id}`)
            .then(() => {
                navigate('/budget')
            })
            .catch((err) => console.log(err)
            )
    };

    return (
        <Container>
        <Card className="mb-3">
            <Card.Img src="" alt="mountains"/>
            <Card.Body>
                <br />
            <Row>
            <Col sm="3 offset-3"><strong>Date</strong></Col>
            <Col sm="4"><p>{transaction.date}</p></Col>
            </Row>
            <Row>
            <Col sm="3 offset-3"><strong>Type</strong></Col>
            <Col sm="4"><p>{transaction.type}</p></Col>
            </Row>
            <Row>
            <Col sm="3 offset-3"><strong>Item</strong></Col>
            <Col sm="4"><p>{transaction.item_name}</p></Col>
            </Row>
            <Row>
            <Col sm="3 offset-3"><strong>Amount</strong></Col>
            <Col sm="4"><p><strong>$</strong> {transaction.amount}</p></Col>
            </Row>
            <Row>
            <Col sm="3 offset-3"><strong>Category</strong></Col>
            <Col sm="4"><p>{transaction.category}</p></Col>
            </Row>
            <Row>
            <Col sm="3 offset-3"d><strong>Vendor</strong></Col>
            <Col sm="4"><p>{transaction.from}</p></Col>
            </Row>
            <br />
            <Row>
                <Col sm="2 offset-3"><Link to={`/budget/${id}/edit`}>
                    <Button variant="outline-dark">Edit</Button>
                </Link>
                </Col>
                <Col sm="2 offset-1">
                <Button variant="outline-dark" onClick={handleDelete}>Delete</Button>
                </Col>
            </Row>
            </Card.Body>
        </Card>
        </Container>
    )
}
