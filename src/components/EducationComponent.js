import React from 'react';
import { NoPrint, Print } from 'react-easy-print';
import TextSection from './TextComponent';
import { Button, Container, Form } from 'react-bootstrap';

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
                <Form onSubmit={handleEdit}>
                        <Form.Label htmlFor='schoolName'>
                            <p>School Name:</p>
                            <Form.Control
                                type='text'
                                placeholder='School Name'
                                name='schoolName'
                                id='schoolName'
                                onChange={handleChange}
                                value={schoolName}
                                required
                            />
                        </Form.Label>
                        <Form.Label>
                            <p>Field of Study:</p>
                            <Form.Control
                                type='text'
                                placeholder='Field of Study'
                                name='study'
                                onChange={handleChange}
                                value={study}
                                required
                            />
                        </Form.Label>
                        <Form.Label>
                            <p>From:</p>
                            <Form.Control
                                type='date'
                                name='from'
                                placeholder='From'
                                onChange={handleChange}
                                value={from}
                                required
                            />
                        </Form.Label>

                        <Form.Label>
                            <p>To:</p>
                            <Form.Control
                                type='date'
                                name='to'
                                placeholder='To'
                                onChange={handleChange}
                                value={to}
                                required
                            />
                        </Form.Label>
                        <Button className='formBtn'>Save</Button>
                        <Button
                            className='formBtn'
                            type='button'
                            onClick={() => handleDelete('education', props.id)}
                            >
                            Delete
                        </Button>
                </Form>
            </NoPrint>
        );
    } else {
        return (
            <Container>
                <TextSection text={text} />
                <Button
                    className='formBtn'
                    type='button'
                    onClick={handleEdit}
                    >
                    Edit
                </Button>
            </Container>
        );
    }
};

export default EducationSection;

