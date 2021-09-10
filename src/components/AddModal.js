import React, {useState} from 'react'
import {
  Button, Modal, ModalBody, ModalFooter,
  ModalHeader, Form, FormGroup, Label, Input, UncontrolledAlert
} from 'reactstrap'
import backend from '../api/backend';

const AddModal = ({refreshVehicles}) => {
  const [addModal, setAddModal] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [make, setMake] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [year, setYear] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newVehicle = {
      make, vehicleModel, year, price
    }

    try {
      const {data} = await backend.post('/vehicle', newVehicle);
      setMessage(data.message);
      refreshVehicles(data);
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  }

  return (
    <>
      <Button color="primary" className="btn btn-primary ms-3" onClick={() => setAddModal(a => !a)}>Add New Vehicle</Button>
      <Modal isOpen={addModal}>
        <Form onSubmit={handleSubmit}>
          <ModalHeader toggle={() => setAddModal(a => !a)}>Add Vehicle</ModalHeader>
          <ModalBody>
            {message && <UncontrolledAlert color='success'>{message}</UncontrolledAlert>}
            {error && <UncontrolledAlert color='danger'>{error}</UncontrolledAlert>}
            <FormGroup>
              <Label for="make">Make</Label>
              <Input type="text" name="make" id="make" onChange={({target}) => setMake(target.value)} placeholder="Vehicle Make" />
            </FormGroup>
            <FormGroup>
              <Label for="model">Model</Label>
              <Input type="text" name="model" id="model" onChange={({target}) => setVehicleModel(target.value)} placeholder="Vehicle model" />
            </FormGroup>
            <FormGroup>
              <Label for="year">Year</Label>
              <Input type="text" name="year" id="year" onChange={({target}) => setYear(target.value)} placeholder="Vehicle year" />
            </FormGroup>
            <FormGroup>
              <Label for="price">Price</Label>
              <Input type="text" name="price" id="price" onChange={({target}) => setPrice(target.value)} placeholder="Vehicle price" />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit">Submit</Button>{' '}
            <Button color="secondary" onClick={() => setAddModal(a => !a)}>Cancel</Button>
          </ModalFooter>
        </Form>
      </Modal>
    </>
  )
}

export default AddModal
