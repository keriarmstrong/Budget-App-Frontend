import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { Form, Button, Col, Row, Container } from "react-bootstrap"

const API = process.env.REACT_APP_API_URL;
const unique_id = uuid();


export default function NewTransaction() {


    const navigate = useNavigate();
    const [details, setDetails] = useState({
        id: unique_id,
        item_name: "",
        type: "",
        amount: 0,
        date: "",
        from: "",
        category: ""
    });

    function addTransaction() {
        let newTrans = details
        axios
            .post(`${API}/budget`, newTrans)
            .then(() => {
                navigate('/budget');
            }).catch((err) => console.log(err))
    }

    function handleSubmit(e) {
        e.preventDefault();
        addTransaction()
    }

    function handleTextChange(e) {
        setDetails({ ...details, [e.target.id]: e.target.value })
    }

    return (
        // <div className='newTransFormContainer'>
        <Container fluid="md">

            <Form onSubmit={handleSubmit}>
                <Form.Group >
                    <Row className="mb-2 text-start">
                        <Col sm={2}>
                            <Form.Label>Date</Form.Label>
                        </Col>
                        <Col sm={6}>
                            <Form.Control onChange={handleTextChange} id='date' type='date' name='date' value={details.date} />
                        </Col>
                    </Row>
                    <Row className="mb-2 text-start">
                        <Col sm={2}>
                            <Form.Label>Name</Form.Label>
                        </Col>
                        <Col sm={6}>
                            <Form.Control onChange={handleTextChange} id='item_name' type='text' value={details.item_name} placeholder='Enter Transaction' />
                        </Col>
                    </Row>
                    <Row className="mb-2 text-start">
                        <Col sm="2">
                            <Form.Label>Type</Form.Label>
                        </Col>
                        <Col sm={6}>
                            <select class="form-select" id="type" onChange={handleTextChange}>
                                <option value="" disabled selected>Select an option</option>
                                <option value="debit">debit</option>
                                <option value="credit">credit</option>
                            </select>
                        </Col>
                    </Row >
                    {/* <input className='form_input' onChange={handleTextChange} id='item_name' type='text' value={details.item_name} placeholder='name' /> */}
                    <Row className="mb-2 text-start">
                        <Col sm={2}>
                            <Form.Label>Amount</Form.Label>
                        </Col>
                        <Col sm={6}>
                            <div class="input-group">
                                <div class="input-group-text">$</div>
                                <input class='form-control' onChange={handleTextChange} id='amount' type='number' value={details.amount} placeholder='Enter Amount' />
                            </div>
                        </Col>

                    </Row>
                    <Row className="mb-2 text-start">
                        <Col sm={2}>
                            <label class='form-label'>From</label>
                        </Col>
                        <Col sm={6}>
                            <input className='form-control' onChange={handleTextChange} id='from' type='text' value={details.from} placeholder='Enter Vendor Name' />
                        </Col>
                    </Row>
                    <Row className="mb-2 text-start">
                        <Col sm={2}>
                            <label class='form-label'>Category</label>
                        </Col>
                        <Col sm={6}>
                            <input class='form-control' onChange={handleTextChange} id='category' type='text' value={details.category} placeholder='from' />
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col sm={2}>
                            <Link to={`/budget`}>
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
