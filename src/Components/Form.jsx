import { useState } from "react";
import {v4 as uuid} from 'uuid';

const Form = (props) => {

    const {addAppointment, appointments} = props;

    const [form, updateForm] = useState({
        petName: '',
        petOwner: '',
        date: '',
        time: '',
        symptoms: ''
    });

    const [error, setError] = useState(false)

    const handleState = e => {
        updateForm({...form,
            [e.target.name]: e.target.value
        })
    }

    const {petName, petOwner, date, time, symptoms} = form;

    const validate = e => {
        e.preventDefault()

        if(petName.trim() === '' || petOwner.trim() === '' || date.trim() === ''
            || time.trim() === '' || symptoms.trim() === ''){
                setError(true);
                return
            }
        setError(false);
        sendToState(e);
    }

    const sendToState = e => {
        form.id = uuid();
        addAppointment([...appointments, form])
        updateForm({
            petName: '',
            petOwner: '',
            date: '',
            time: '',
            symptoms: ''
        })
    }

    return (
        <div>
            <h2 className="form_title">Crear Cita</h2>
            { error 
            ? <p className="error_message">Rellena todos los datos</p>
            : null
            }
            <form
                onSubmit={validate}
                >
                <label htmlFor="petName">Nombre Mascota</label>
                <input 
                    type="text"
                    name="petName"
                    className="form-item"
                    onChange={handleState}
                    value={petName}
                    />
                <label htmlFor="petOwner">Nombre Dueño</label>
                <input 
                    type="text"
                    name="petOwner"
                    className="form-item"
                    onChange={handleState}
                    value={petOwner}
                    />
                <label htmlFor="date">Fecha</label>
                <input 
                    type="date"
                    name="date"
                    className="form-item"
                    onChange={handleState}
                    value={date}
                    />
                <label htmlFor="time">Hora</label>
                <input 
                    type="time"
                    name="time"
                    className="form-item"
                    onChange={handleState}
                    value={time}
                    />
                <label htmlFor="symptoms">Síntomas</label>
                <textarea
                    name="symptoms"
                    className="form-item"
                    onChange={handleState}
                    value={symptoms}
                    >
                </textarea>
                <button 
                    type='submit'
                    className='form-item'
                    > Agregar Cita</button>
            </form>
        </div>
    );
}
 
export default Form;