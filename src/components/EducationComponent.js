import React from 'react';
import { NoPrint, Print } from 'react-easy-print';
import TextSection from './TextComponent';

const EducationSection = (props) => {

    const [education, setEducation] = useState({
        schoolName: '',
        study: '',
        from: '',
        to: '',
    });

    const [editMode, setEditMode] = useState(false);

    const handleChange = (e) => {
		const { name, value } = e.target;
        setEducation((prevEducation) => {
            return {
                ...prevEducation,
                [name]: value,
            };
        });
	};

    const handleEdit = (e) => {
        e.preventDefault();
        setEditMode(true);
    };

    const { schoolName, study, from, to } = education;
    const { text, handleDelete } = props;

    if (editMode) {
        return (
            <NoPrint>
                <Print printOnly>
                    <p className='warning'>Fill in the form.</p>
                </Print>
                <section>
                    <form 
                        className='section' 
                        action='' 
                        onSubmit={handleEdit}
                        >
                        <label htmlFor='schoolName'>
                            <p>School Name:</p>
                            <input
                                type='text'
                                placeholder='School Name'
                                name='schoolName'
                                id='schoolName'
                                onChange={handleChange}
                                value={schoolName}
                                required
                            />
                        </label>
                        <label>
                            <p>Field of Study:</p>
                            <input
                                type='text'
                                placeholder='Field of Study'
                                name='study'
                                onChange={handleChange}
                                value={study}
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
                                value={from}
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
                                value={to}
                                required
                            />
                        </label>
                        <button className='formBtn'>Save</button>
                        <button
                            className='formBtn'
                            type='button'
                            onClick={() => handleDelete('education', props.id)}
                            >
                            Delete
                        </button>
                    </form>
                </section>
            </NoPrint>
        );
    } else {
        return (
            <section>
                <TextSection text={text} />
                <button
                    className='formBtn'
                    type='button'
                    onClick={handleEdit}
                    >
                    Edit
                </button>
            </section>
        );
    }
};

export default EducationSection;

