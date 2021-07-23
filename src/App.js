import Header from './Components/Header';
import Container from './Components/Container';
import Grid from './Components/Grid';
import Form from './Components/Form';
import PetCard from './Components/Pet_card';
import { useEffect, useState } from 'react';

function App() {
  
  let initAppointments = JSON.parse(localStorage.getItem('appointments'));
  if(!initAppointments){
    initAppointments = [];
  }

  const [appointments, addAppointment] = useState(initAppointments);

  useEffect(() => {
    if(initAppointments){
      localStorage.setItem('appointments', JSON.stringify(appointments));
    } else {
      localStorage.setItem('appointments', JSON.stringify([]));
    }
  }, [appointments, initAppointments]);

  const deleteAppointment = id => {
		const newAppointments = appointments.filter(appointment => appointment.id !== id)
		addAppointment(newAppointments)
	}

  return (
    <div className="App">
      <Header />
      <main>
        <Container>
          <Grid direction="row" margin="4" gap="3">
            <Form addAppointment={addAppointment} appointments={appointments}/>
            <Grid direction="column" gap="2">
              { 
              appointments.length === 0 
              ? <h2 className='form_title'>¡Agrega una cita!</h2>
              : appointments.map(pet => (
                  <PetCard petInfo={pet} key={pet.id} deleteAppointment={deleteAppointment} />
                ))
              }
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default App;
