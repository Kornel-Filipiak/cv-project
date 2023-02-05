import React, { useState } from 'react';
import { Print, NoPrint } from 'react-easy-print';
import TextSection from './TextComponent';
import { Button, Form } from 'react-bootstrap';

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
				<Form onSubmit={handleEdit} >
					<Form.Group className="mb-3" controlId="formBasicCompanyName">
						<Form.Label>
							<p>Company Name:</p>
							<Form.Control
								type='text'
								placeholder='Company Name'
								name='companyName'
								onChange={handleChange}
								value={companyName}
								required
							/>
						</Form.Label>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicPosition">
						<Form.Label>
							<p>Position Title:</p>
							<Form.Control
								type='text'
								placeholder='Position Title'
								name='position'
								onChange={handleChange}
								value={position}
								required
							/>
						</Form.Label>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicDate">
						<Form.Label>
							<p>From:</p>
							<Form.Control
								type='date'
								name='from'
								placeholder='From'
								onChange={handleChange}
								value={startDate}
								required
							/>
						</Form.Label>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicDate">
						<Form.Label>
							<p>To:</p>
							<Form.Control
								type='date'
								name='to'
								placeholder='To'
								onChange={handleChange}
								value={endDate}
								required
							/>
						</Form.Label>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicTasks">
						<Form.Label>Tasks</Form.Label>
						<Form.Control 
							as="textarea" 
							rows={5}
							name='tasks'
							className='tasks'
							placeholder='Main Tasks'
							onChange={handleChange}
							value={text}
							required
							/>
					</Form.Group>
						<Button className='formBtn'>Save</Button>
						<Button
							className='formBtn'
							type='button'
							onClick={() => handleDelete(props.id)}
							>
							Delete
						</Button>
				</Form>
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