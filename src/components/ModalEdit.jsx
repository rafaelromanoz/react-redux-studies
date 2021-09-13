import React, { useState } from 'react';
import { closeModal, saveChangesEdit } from '../actions';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import states from '../utils/states';

function ModalEdit({ sw, closeModal, saveChangesEdit }) {
  const handleClose = () => {
    setId(id + 1);
    closeModal();
    saveChangesEdit(objOfForm, id);
  };
  const handleShow = () => closeModal();

  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [id, setId] = useState(0);

  const objOfForm = {
    fName,
    lName,
    city,
    state,
  };

  return (
    <>
      <Modal show={sw} onHide={handleShow}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-4">
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  value={fName}
                  onChange={({ target }) => setFName(target.value)}
                  required
                  type="text"
                  placeholder="First name"
                />
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  value={lName}
                  onChange={({ target }) => setLName(target.value)}
                  required
                  type="text"
                  placeholder="First name"
                />
              </Form.Group>
            </Row>
            <Row className="md-2">
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>City</Form.Label>
                <Form.Control
                  value={city}
                  onChange={({ target }) => setCity(target.value)}
                  required
                  type="text"
                  placeholder="First name"
                />
              </Form.Group>
              <Form.Group as={Col} md="5" controlId="validationCustom01">
                <Form.Label>Select a state</Form.Label>
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
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const mapStateToProps = (state) => ({
  sw: state.registerReducer.editSwitch,
});

const mapDispatchToProps = { closeModal, saveChangesEdit };

export default connect(mapStateToProps, mapDispatchToProps)(ModalEdit);
