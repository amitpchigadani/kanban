import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './AddCardModal.css';
import Attachment from './Attachment';

export const AddCardModal = ({ cardShow: initCardShow, handleCardClose, addCard, columns }) => {

    const [colDropDownItems, setColDropDownItems] = useState([]);
    const [cardShow, setCardShow] = useState(initCardShow);
    const [validated, setValidated] = useState(false);
    let attachments = 'none';

    const toggleModal = () => {
        setValidated(false);
        setCardShow(initCardShow);
        const cols = [];
        columns.forEach((col, i) => {
            cols.push(<option key={i} eventkey={col.name}>{col.name}</option>);
        });
        setColDropDownItems(cols);
    };

    useEffect(toggleModal, [initCardShow, columns]);

    const addNewCard = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const newCard = {
            title: form.get('title'),
            description: form.get('description'),
            storyPoint: form.get('points'),
            columnName: form.get('column'),
            attachment: attachments
        };
        const d = new Date();
        newCard.lastUpdated = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate();
        setValidated(true);
        addCard(newCard);
    };

    const onFileSelected = (files) => {
        attachments = files.length > 0 ? files.map(file => file.name).join(', ') : 'none';
    }

    return (
        <Modal
            show={cardShow}
            backdrop="static"
            keyboard={false}
            onHide={handleCardClose}>
            <Modal.Header closeButton>
                <Modal.Title>New Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form validated={validated} onSubmit={addNewCard}>
                    <Form.Group controlId="title" name="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control name="title" required type="text" placeholder="Enter title" />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control name="description" required as="textarea" rows={5} />
                    </Form.Group>
                    <Form.Group controlId="column">
                        <Form.Label>Column</Form.Label>
                        <Form.Control name="column" required as="select" defaultValue="Select Column">
                            {colDropDownItems}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="points">
                        <Form.Label>Story Points</Form.Label>
                        <Form.Control name="points" required type="number" placeholder="Enter story points" />
                    </Form.Group>

                    <Form.Group controlId="attachment">
                        <Attachment onFileSelected={onFileSelected}/>
                    </Form.Group>
                    <Button variant="secondary" onClick={handleCardClose}>
                        Close
                    </Button>
                    <Button type="submit" className="btn-add" variant="primary">
                        Add
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
    )
}

export default AddCardModal;