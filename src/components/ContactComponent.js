import React from 'react';
import { NoPrint, Print } from 'react-easy-print';

const ContactSection = () => {
    const handleChange = (e) => {
		const { name, value } = e.target;
        //update the the field name value
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		//submit form
	};

    return (
		<NoPrint>
			<Print printOnly>
				<p className='warning'>Fill in the form.</p>
			</Print>
			<section className='contactSection'>
				<form 
                    className='section' 
                    action='' 
                    // onSubmit={/* */}
                    >
					<label>
						<p>First Name:</p>
						<input
							type='text'
							placeholder='First Name'
							name='firstName'
							// onChange={/* */}
							// value={/* */}
							required
						/>
					</label>

					<label>
						<p>Last Name:</p>
						<input
							type='text'
							placeholder='Last Name'
							name='lastName'
							// onChange={/* */}
							// value={/* */}
							required
						/>
					</label>

					<label>
						<p>Email:</p>
						<input
							type='email'
							placeholder='example@gmail.com'
							name='email'
							// onChange={/* */}
							// value={/* */}
							required
						/>
					</label>
					<label>
						<p>Phone Number:</p>
						<input
							type='tel'
							name='phone'
							placeholder='123-456-7890'
							// onChange={/* */}
							// value={/* */}
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
};

export default ContactSection;
