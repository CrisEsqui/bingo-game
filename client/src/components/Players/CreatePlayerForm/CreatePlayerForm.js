import React from 'react'
import './CreatePlayerForm.css'

const CreatePlayerForm = ({ handleChange, handleSubmit, errors, players }) => {

    const validateIdNumber = (value) => {

        const pattern = /^\d{9}$/;

        if (value.trim() === '') {

            return 'Campo requerido';
        }
        else if (!pattern.test(value)) {
            return 'El número de cédula debe constar de 9 caracteres numéricos.';
        }
        else if (players.find(player => player.id_number === value)) {
            return 'Ese número de cédula ya existe';
        }

        return null;
    }

    const validateFirstName = (value) => {

        if (value.trim() === '') {

            return 'Campo requerido.';
        }

        return null;
    }

    const validateLastName = (value) => {

        if (value.trim() === '') {

            return 'Campo requerido.';
        }

        return null;
    }

    const validateMail = (value) => {

        const pattern = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/

        if (value.trim() === '') {

            return 'Campo requerido.';
        }
        else if (!pattern.test(value)) {
            return 'Correo inválido.';
        } 
        else if (players.find(player => player.mail === value)) {
            return 'Ese correo electrónico ya está registrado.';
        }

        return null;
    }


    return (
        <form className='create-player-form' onSubmit={handleSubmit}>
            <div>
                <label htmlFor=''>
                    Cédula
                    <input 
                        type='text'
                        name='id_number'
                        id='id_number'
                        onChange={(e) => handleChange(e, validateIdNumber)}
                        placeholder='Digite su cédula'
                    />
                    {errors.id_number && <p className='error-message'>{errors.id_number}</p>}
                </label>
            </div>
            <div>
                <label htmlFor=''>
                    Nombre
                    <input 
                        type='text'
                        name='first_name'
                        id='first_name'
                        onChange={(e) => handleChange(e, validateFirstName)}
                        placeholder='Digite su nombre'
                    />
                    {errors.first_name && <p className='error-message'>{errors.first_name}</p>}
                </label>
            </div>
            <div>
                <label htmlFor=''>
                    Apellido
                    <input 
                        type='text'
                        name='last_name'
                        id='last_name'
                        onChange={(e) => handleChange(e, validateLastName)}
                        placeholder='Digite su apellido'
                    />
                    {errors.last_name && <p className='error-message'>{errors.last_name}</p>}
                </label>
            </div>
            <div>
                <label htmlFor=''>
                    Correo electrónico
                    <input 
                        type='text'
                        name='mail'
                        id='mail'
                        onChange={(e) => handleChange(e, validateMail)}
                        placeholder='Digite su correo electrónico'
                    />
                    {errors.mail && <p className='error-message'>{errors.mail}</p>}
                </label>
            </div>
        </form>
    )
}

export default CreatePlayerForm