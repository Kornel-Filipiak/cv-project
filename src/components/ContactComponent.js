import React, { useState } from 'react';
import { NoPrint, Print } from 'react-easy-print';
import TextSection from './TextComponent';

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
			<section className='contactSection'>
				<form 
                    className='section' 
                    action='' 
                    onSubmit={handleEdit}
                    >
					<label>
						<p>First Name:</p>
						<input
							type='text'
							placeholder='First Name'
							name='firstName'
							onChange={handleChange}
							value={firstName}
							required
						/>
					</label>

					<label>
						<p>Last Name:</p>
						<input
							type='text'
							placeholder='Last Name'
							name='lastName'
							onChange={handleChange}
							value={lastName}
							required
						/>
					</label>

					<label>
						<p>Email:</p>
						<input
							type='email'
							placeholder='example@gmail.com'
							name='email'
							onChange={handleChange}
							value={email}
							required
						/>
					</label>
					<label>
						<p>Phone Number:</p>
						<input
							type='tel'
							name='phone'
							placeholder='123-456-7890'
							onChange={handleChange}
							value={phone}
							required
						/>
					</label>
					<button className='formBtn generalBtn' type='submit'>
						Save
					</button>
				</form>
			</section>
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
