import React, { useState } from 'react';
import EducationSection from './components/EducationComponent';
import ExperienceSection from './components/ExperienceComponent';
import ContactSection from './components/ContactComponent';
import PrintProvider, { NoPrint, Print } from 'react-easy-print';
import uniqid from 'uniqid';
import { Container, Button } from 'react-bootstrap';



const App = () =>{

	const [experience, setExperience] = useState([]);
	const [education, setEducation] = useState([]);	
    
    const handleClick = (section) => {
        if (section === experience) {
            setExperience((prevExperience) => {return [...prevExperience, {id: uniqid()}]});
        }
        else {
            setEducation((prevEducation) => {return [...prevEducation, {id: uniqid()}]});
        }
    };

    const handleDelete = (section, key) => {
        if (section === experience) {
            setExperience((prevExperience) => {
				return prevExperience.filter((item) => item.id !== key);
			});
        }
        else {
            setEducation((prevEducation) => {
				return prevEducation.filter((item) => item.id !== key);
			});
        }
    };

	const educationList = education.map((item) => {
		return (
			<EducationSection
				key={item.id}
				id={item.id}
				handleDelete={handleDelete}
			/>
		);
	});

	const experienceList = experience.map((item) => {
		return (
			<ExperienceSection
				key={item.id}
				id={item.id}
				handleDelete={handleDelete}
			/>
		);
	});

    return(
		<div>
			<PrintProvider>
				<NoPrint>
					<Container>
						<h1 className='title'>CV-App with React</h1>
						<Print>
							<h2 className='subTitle'>Contact Information</h2>
							<ContactSection />
						</Print>
						<div>
							<Print>
								<h2 className='subTitle'>Professional Experience</h2>
								{experienceList}
							</Print>
							<Button
								className='addBtn'
								onClick={() => handleClick(experience)}
								>
							</Button>
						</div>
						<div>
							<Print>
								<h2 className='subTitle'>Education</h2>
								{educationList}
							</Print>
							<Button
								className='addBtn'
								onClick={() => handleClick(education)}
                                >
							</Button>
						</div>
						<Button
							onClick={() => {
								window.print();
							}}
							className='addBtn'>
							Print
						</Button>
					</Container>
				</NoPrint>
			</PrintProvider>
		</div>
	);
}

export default App;