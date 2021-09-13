import React, { useState } from 'react';
import { Col, Form, InputGroup, Row, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import './Register.css';
import states from '../utils/states';
import { reducerAction } from '../actions';
import TableOfRegister from '../components/TableOfRegister';
import toast, { Toaster } from 'react-hot-toast';
import ModalEdit from '../components/ModalEdit';

function Register({ reducerAction, editSwitch }) {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [id, setId] = useState(0);
  const notify = () => toast.success('Register sucess');

  const objOfForm = {
    id,
    fName,
    lName,
    city,
    state,
  };

  const handleClick = (objOfForm) => {
    setId(id + 1);
    reducerAction(objOfForm);
    setFName('');
    setLName('');
    setCity('');
    setState('Select a state');
    notify();
  };

    return (
      <section className="register">
        <Form>
          <Toaster position="top-right" />
        <ModalEdit />
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                value={fName}
                onChange={({ target }) => setFName(target.value)}
                required
                type="text"
                placeholder="First name"
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                value={lName}
                onChange={({ target }) => setLName(target.value)}
                required
                type="text"
                placeholder="Last name"
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>City</Form.Label>
              <Form.Control
                value={city}
                type="text"
                placeholder="City"
                onChange={({ target }) => setCity(target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom04">
              <Form.Label>State</Form.Label>
              <Form.Select
                value={state}
                aria-label="Default select example"
                onChange={({ target }) => setState(target.value)}
              >
                <option>Select a state</option>
                {states.map(({ nome }) => (
                  <option>{nome}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Row>
          <Button onClick={() => handleClick(objOfForm)} type="button">
            Register
          </Button>
        </Form>
        <div className="tableOfRegister">
          <TableOfRegister />
        </div>
      </section>
    );
  } 


const mapDispatchToProps = { reducerAction };

const mapStateToProps = (state) => ({
  editSwitch: state.registerReducer.editSwitch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
