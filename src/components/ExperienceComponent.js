import React, { useState } from 'react';
import { Print, NoPrint } from 'react-easy-print';
import TextSection from './TextComponent';

const ExperienceSection = (props) => {

	const [experience, setExperience] = useState({
		companyName: '',
		position: '',
		startDate: '',
		endDate: '',
	});

	const [editMode, setEditMode] = useState(false);

    const handleChange = (e) => {
		const { name, value } = e.target;
		setExperience((prevExperience) => {
			return {
				...prevExperience,
				[name]: value,
			};
		});
	};

	const handleEdit = (e) => {
		e.preventDefault();
		setEditMode(true);
	};

	const { companyName, position, startDate, endDate } = experience;
	const { text, handleDelete } = props;

	if (editMode) {
		return (
			<NoPrint>
				<Print printOnly>
					<p className='warning'>Fill in the form.</p>
				</Print>
				<section>
					<form 
						action='' 
						className='section xpSection' 
						onSubmit={handleEdit}
						>
						<label>
							<p>Company Name:</p>
							<input
								type='text'
								placeholder='Company Name'
								name='companyName'
								onChange={handleChange}
								value={companyName}
								required
							/>
						</label>

						<label>
							<p>Position Title:</p>
							<input
								type='text'
								placeholder='Position Title'
								name='position'
								onChange={handleChange}
								value={position}
								required
							/>
						</label>

						<label>
							<p>From:</p>
							<input
								type='date'
								name='from'
								placeholder='From'
								onChange={handleChange}
								value={startDate}
								required
							/>
						</label>

						<label>
							<p>To:</p>
							<input
								type='date'
								name='to'
								placeholder='To'
								onChange={handleChange}
								value={endDate}
								required
							/>
						</label>
						<textarea
							name='tasks'
							className='tasks'
							placeholder='Main Tasks'
							onChange={handleChange}
							value={text}
							required
						/>
						<button className='formBtn'>Save</button>
						<button
							className='formBtn'
							type='button'
							onClick={() => handleDelete(props.id)}
							>
							Delete
						</button>
					</form>
				</section>
			</NoPrint>
		);
	} else {
		return (
			<Print>
				<section>
					<TextSection
						companyName={companyName}
						position={position}
						startDate={startDate}
						endDate={endDate}
						text={text}
						handleEdit={handleEdit}
						handleDelete={handleDelete}
						id={props.id}
					/>
				</section>
			</Print>
		);
	}
};

export default ExperienceSection;