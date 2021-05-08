import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export const AddColumnModal = ({colShow: initColShow, handleColClose, addColumn}) => {

    const [colShow, setColumnShow] = useState(initColShow);
    const [validated, setValidated] = useState(false);

    const toggleModal = () => {
        setValidated(false);
        setColumnShow(initColShow);
    }

    useEffect(toggleModal, [initColShow]);

    const addNewColumn = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const newCol = form.get('column');
        setValidated(true);
        addColumn(newCol);
    }

    return (
        <Modal
            show={colShow}
            onHide={handleColClose}
            backdrop="static"
            keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>New Column</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form validated={validated} onSubmit={addNewColumn}>
                <Form.Group controlId="description">
                    <Form.Label>Column name</Form.Label>
                    <Form.Control name="column" required type="text" placeholder="Enter column name" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add
		        </Button>
            </Form>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
    )
}

export default AddColumnModal;