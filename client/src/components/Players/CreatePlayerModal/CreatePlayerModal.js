import { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import CreatePlayerForm from '../CreatePlayerForm/CreatePlayerForm';
import axios from 'axios';

const CreatePlayerModal = ({ show, onHide, players }) => {

    const defaultFormData = { id_number: '', first_name: '', last_name: '', mail: '' }
    const defaultErrors = { id_number: '', first_name: '', last_name: '', mail: '' }
    const [formData, setFormData] = useState(defaultFormData);
    const [errors, setErrors] = useState(defaultErrors);
    const [submitDisabled, setSubmitDisabled] = useState(true);

    // Handle changes on the inputs of the form
    const handleChange = (e, validateField) => {
        const { name, value } = e.target;
        let currentErrors = { ...errors }

        // Validate the field changed
        const error = validateField(value);

        if (error == null) {
            delete currentErrors[name];
            setFormData({ ...formData, [name]: value });
        }
        else {
            currentErrors = { ...currentErrors, [name]: error };
        }

        setErrors(currentErrors);
    }

    const handleSubmit = async () => {

        if (Object.keys(errors).length > 0) {
            return;
        }


        try {
            await axios.post('http://localhost:3001/player', formData);


            // Set all the states to their default values
            setFormData(defaultFormData);
            setErrors(defaultErrors);
            setSubmitDisabled(true);

            // Hide the modal
            onHide()

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0) {
            setSubmitDisabled(false)
        }
    }, [errors]);


    return (
        <Modal className="create-player-modal" show={show} onHide={onHide}>

            <Modal.Header closeButton>
                <Modal.Title>
                    Crear nuevo jugador
                </Modal.Title>
            </Modal.Header>

            <Modal.Body className='body-create-player-form'>

                <CreatePlayerForm
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    players={players}
                />

            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={onHide}>Cancelar</Button>

                <Button variant='primary' type='submit' disabled={submitDisabled} onClick={handleSubmit}>Crear jugador</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreatePlayerModal