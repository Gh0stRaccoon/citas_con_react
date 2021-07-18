const Pet_card = (props) => {
	const { petName, petOwner, symptoms, date, time, id } = props.petInfo;
	const { deleteAppointment } = props;
	

	return (
		<div className="pet_card">
			<h3 className="pet_card__petname">{petName}</h3>
			<p className="pet_card__petowner">{petOwner}</p>
			<p className="pet_card__description">{symptoms}</p>
			<div className="pet_card__date">
				<p>{date}</p>
				<p>{time}</p>
			</div>
			<button onClick={() => deleteAppointment(id)}>
				Eliminar
			</button>
		</div>
	);
};

export default Pet_card;
