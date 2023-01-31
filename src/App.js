import React from 'react';
import EducationSection from './components/EducationComponent';
import ExpirienceSection from './components/ExperienceComponent';
import ContactSection from './components/ContactComponent';
import PrintProvider, { NoPrint, Print } from 'react-easy-print';



const App = () =>{
    
    const handleClick = (section) => {
        if (section === '') {
            //add new professional experience section
			
        }
        else {
            //add new education credentials section
        }
    };

    const handleDelete = (section, key) => {
        if (section === ''){
            //delete professional experience section
        }
        else {
            //delete education credentials section
        }
    };

    return(
		<div>
			<PrintProvider>
				<NoPrint>
					<main>
						<h1 className='title'>CV-App with React</h1>
						<Print>
							<h2 className='subTitle'>Contact Information</h2>
							<GeneralSection />
						</Print>
						<div>
							<Print>
								<h2 className='subTitle'>Professional Experience</h2>
								{/* */}
							</Print>
							<button
								className='addBtn'
								// onClick={/* */}
                                >
							</button>
						</div>
						<div>
							<Print>
								<h2 className='subTitle'>Education</h2>
								{/*  */}
							</Print>
							<button
								className='addBtn'
								// onClick={/* */}
                                >
							</button>
						</div>
						<button
							onClick={() => {
								window.print();
							}}
							className='addBtn'>
							Print
						</button>
					</main>
				</NoPrint>
			</PrintProvider>
		</div>
	);

}

export default App;