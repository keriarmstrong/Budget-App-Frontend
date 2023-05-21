import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { Form, Col, Row, Button, Container } from 'react-bootstrap';

const API = process.env.REACT_APP_API_URL;
const unique_id = uuid();

export default function EditTransactionForm() {

  const navigate = useNavigate();
  let { id } = useParams();
  const [transaction, setTransaction] = useState({
    id: unique_id,
    item_name: "",
    amount: 0,
    type: "",
    date: "",
    from: "",
    category: ""
  })
  function handleTextChange(e) {
    setTransaction({ ...transaction, [e.target.id]: [e.target.value] })
  };

  useEffect(() => {
    axios
      .get(`${API}/budget/${id}`)
      .then((res) => {
        setTransaction(res.data)
      })
      .catch((err) => console.log(err))
  }, [id]);

  function updateTransaction() {
    axios
      .put(`${API}/budget/${id}`, transaction)
      .then((res) => {
        setTransaction(res.data);
        navigate(`/budget/${id}`)
      })
      .catch((err) => console.log(err))
  };

  function handleSubmit(e) {
    e.preventDefault();
    updateTransaction();
  };

  return (
    <Container fluid="md">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Row>
            <Col sm={2}>
              <Form.Label>Date</Form.Label>
            </Col>
            <Col sm={6}>
              <Form.Control onChange={handleTextChange} id='date' type='date' value={transaction.date} placeholder='mm-dd-yyyy' />
            </Col>
          </Row>
          <br />
          <Row>
            <Col sm={2}>
              <Form.Label >Name</Form.Label>
            </Col>
            <Col sm={6}>
              <Form.Control onChange={handleTextChange} id='item_name' type='text' value={transaction.item_name} placeholder='name' />
            </Col>
          </Row>
          <br />
          <Row>
            <Col sm={2}>
              <Form.Label>Type</Form.Label>
            </Col>
            <Col sm={6}>

              <select class="form-select" id="type" onChange={handleTextChange}>
                <option value="" disabled selected>Select an option</option>
                <option value="debit">debit</option>
                <option value="credit">credit</option>
              </select>

            </Col>
            {/* <input onChange={handleTextChange} id='type' type='text' value={transaction.item_name} placeholder='name' /> */}
          </Row>
          <br />
          <Row>
            <Col sm={2}>
              <Form.Label>Amount</Form.Label>
            </Col>
            <Col sm={6}>
              <div class="input-group">
                <div class="input-group-text">$</div>
                <input class='form-control' onChange={handleTextChange} id='amount' type='number' value={transaction.amount} placeholder='amount' />
              </div>
            </Col>
          </Row>
          <br />
          <Row>
            <Col sm={2}>
              <Form.Label>From</Form.Label>
            </Col>
            <Col sm={6}>
              <Form.Control onChange={handleTextChange} id='from' type='text' value={transaction.from} placeholder='from' />
            </Col>
          </Row>
          <br />
          <Row>
            <Col sm={2}>
              <Form.Label>Category</Form.Label>
            </Col>
            <Col sm={6}>
              <Form.Control onChange={handleTextChange} id='category' type='text' value={transaction.category} placeholder='from' />
            </Col>
          </Row>
          <br />
          <Row className="justify-content-center">
            <Col sm={2}>
              <Link to={`/budget/${id}`}>
                <Button variant="outline-dark">Cancel</Button>
              </Link>
            </Col>
            <Col sm={6}>
              <Button variant="outline-dark" type="submit">Submit</Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </Container>
  )
}
