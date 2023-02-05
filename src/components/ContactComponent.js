import React, { useState } from 'react';
import { NoPrint, Print } from 'react-easy-print';
import TextSection from './TextComponent';
import { Button, Form } from 'react-bootstrap';

const ContactSection = () => {

	const [contact, setContact] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
	});

	const [editMode, setEditMode] = useState(false);

    const handleChange = (e) => {
		const { name, value } = e.target;
		setContact((prevContact) => {
			return {
				...prevContact,
				[name]: value,
			};
		});
	};

	const handleEdit = () => {
		e.preventDefault();
		setEditMode(true);
	};

	const { firstName, lastName, email, phone } = contact;

	if (editMode) {		

    return (
		<NoPrint>
			<Print printOnly>
				<p className='warning'>Fill in the form.</p>
			</Print>
			<Form onSubmit={handleEdit}>
				<Form.Group className="mb-3" controlId="formBasicFirstName">
					<Form.Label>
						<p>First Name:</p>
						<Form.Control
							type='text'
							placeholder='First Name'
							name='firstName'
							onChange={handleChange}
							value={firstName}
							required
						/>
					</Form.Label>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicLastName">
					<Form.Label>
						<p>Last Name:</p>
						<Form.Control
							type='text'
							placeholder='Last Name'
							name='lastName'
							onChange={handleChange}
							value={lastName}
							required
						/>
					</Form.Label>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>
						<p>Email:</p>
						<Form.Control
							type='email'
							placeholder='example@gmail.com'
							name='email'
							onChange={handleChange}
							value={email}
							required
						/>
					</Form.Label>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicPhone">
					<Form.Label>
						<p>Phone Number:</p>
						<Form.Control
							type='tel'
							name='phone'
							placeholder='123-456-7890'
							onChange={handleChange}
							value={phone}
							required
						/>
					</Form.Label>
				</Form.Group>
					<Button className='formBtn generalBtn' type='submit'>
						Save
					</Button>
			</Form>
		</NoPrint>
	);
	} else {
		return (
			<TextSection
				text={`${firstName} ${lastName} | ${email} | ${phone}`}
				handleEdit={handleEdit}
			/>
		);
	};
};

export default ContactSection;
