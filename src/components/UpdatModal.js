import React, {useState} from 'react';
import {Pencil} from 'react-bootstrap-icons';
import {
  Button, Form, FormGroup,
  Input, Label, Modal, ModalBody,
  ModalFooter, ModalHeader, UncontrolledAlert
} from 'reactstrap';
import backend from '../api/backend';

const UpdatModal = ({record, refreshVehicles}) => {
  const [updateModal, setUpdateModal] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [make, setMake] = useState(record.make ? record.make : '');
  const [vehicleModel, setVehicleModel] = useState(record.vehicleModel ? record.vehicleModel : '');
  const [year, setYear] = useState(record.year ? record.year : '');
  const [price, setPrice] = useState(record.price ? record.price : '');
  const [status, setStatus] = useState(record.status ? true : false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newVehicle = {
      make, vehicleModel, year, price
    }

    try {
      const {data} = await backend.put(`/vehicle/${record._id}`, newVehicle);
      setMessage(data.message);
      console.log(data);
      refreshVehicles();
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  }

  const markSold = async () => {
    try {
      const updateVehicle = {
        ...record,
        status: !record.status
      }
      const {data} = await backend.put(`/vehicle/${record._id}`, updateVehicle);
      setStatus(s => !s);
      setMessage(data.message);
      console.log(data);
      refreshVehicles();
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  }

  return (
    <>

      <Button size="sm" outline color="info" onClick={setUpdateModal}>
        <Pencil />
      </Button>
      <Modal isOpen={updateModal}>
        <Form onSubmit={handleSubmit}>
          <ModalHeader toggle={() => setUpdateModal(a => !a)}>Update Vehcile</ModalHeader>
          <ModalBody>
            {message && <UncontrolledAlert color='success'>{message}</UncontrolledAlert>}
            {error && <UncontrolledAlert color='danger'>{error}</UncontrolledAlert>}
            <FormGroup>
              <Label for="make">Make</Label>
              <Input type="text" name="make" id="make" value={make} onChange={({target}) => setMake(target.value)} placeholder="Vehicle Make" />
            </FormGroup>
            <FormGroup>
              <Label for="model">Model</Label>
              <Input type="text" name="model" id="model" value={vehicleModel} onChange={({target}) => setVehicleModel(target.value)} placeholder="Vehicle model" />
            </FormGroup>
            <FormGroup>
              <Label for="year">Year</Label>
              <Input type="text" name="year" id="year" value={year} onChange={({target}) => setYear(target.value)} placeholder="Vehicle year" />
            </FormGroup>
            <FormGroup>
              <Label for="price">Price</Label>
              <Input type="text" name="price" id="price" value={price} onChange={({target}) => setPrice(target.value)} placeholder="Vehicle price" />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit">Submit</Button>{' '}
            <Button color="secondary" disabled={status} onClick={markSold}>Mark Sold</Button>
          </ModalFooter>
        </Form>
      </Modal>
    </>
  )
}

export default UpdatModal
