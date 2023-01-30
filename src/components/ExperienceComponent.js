import React, { useState } from 'react';
import { Print, NoPrint } from 'react-easy-print';

const ExperienceSection = (props) => {
    const handleChange = (e) => {
		const { name, value } = e.target;
        //update the the field name value
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //submit form
    };

    return (
		<NoPrint>
			<Print printOnly>
				<p className='warning'>Fill in the form.</p>
			</Print>
			<section>
				<form 
                    action='' 
                    className='section xpSection' 
                    // onSubmit={/* */}
                    >
					<label>
						<p>Company Name:</p>
						<input
							type='text'
							placeholder='Company Name'
							name='companyName'
							// onChange={/* */}
							// value={/* */}
							required
						/>
					</label>

					<label>
						<p>Position Title:</p>
						<input
							type='text'
							placeholder='Position Title'
							name='position'
							// onChange={/* */}
							// value={/* */}
							required
						/>
					</label>

					<label>
						<p>From:</p>
						<input
							type='date'
							name='from'
							placeholder='From'
							// onChange={/* */}
							// value={/* */}
							required
						/>
					</label>

					<label>
						<p>To:</p>
						<input
							type='date'
							name='to'
							placeholder='To'
							// onChange={/* */}
							// value={/* */}
							required
						/>
					</label>
					<textarea
						name='tasks'
						className='tasks'
						placeholder='Main Tasks'
							// onChange={/* */}
							// value={/* */}
						required
					/>
					<button className='formBtn'>Save</button>
					<button
						className='formBtn'
						type='button'
						// onClick={/* */}
                        >
						Delete
					</button>
				</form>
			</section>
		</NoPrint>
	);
};

export default ExperienceSection;