import React from 'react';
import { NoPrint, Print } from 'react-easy-print';

const EducationSection = (props) => {
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
        <section>
            <form 
                className='section' 
                action='' 
                // onSubmit={/* */}
                >
                <label htmlFor='schoolName'>
                    <p>School Name:</p>
                    <input
                        type='text'
                        placeholder='School Name'
                        name='schoolName'
                        id='schoolName'
                        // onChange={/* */}
                        // value={/* */}
                        required
                    />
                </label>
                <label>
                    <p>Title of Study:</p>
                    <input
                        type='text'
                        placeholder='Title of study'
                        name='study'
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
                        // onChange={handleChange}
                        // value={to}
                        required
                    />
                </label>
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

export default EducationSection;

