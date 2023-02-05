import { NoPrint } from 'react-easy-print';
import { Container } from 'react-bootstrap';

const TextSection = (props) => {
    if(props.firstName === '' || props.lastName === '' || props.email === '' || props.phone === ''){
        return (
            <Container className='textSection'>
                <NoPrint>
                    <span className='editBtn' onClick={props.handleEdit}>
                        <i className='fas fa-edit'></i>
                    </span>
                </NoPrint>
                <p>{props.text}</p>
            </Container>
        );
    }
    else if (props.companyName === '' || props.position === '' || props.startDate === '' || props.endDate === ''){
        return (
            <Container className='textSection'>
                <NoPrint>
                    <span className='editBtn' onClick={props.handleEdit}>
                        <i className='fas fa-edit'></i>
                    </span>
                </NoPrint>
                <p>{props.text}</p>
            </Container>
        );
    }
    else {
        return (
            <Container className='textSection'>
                <NoPrint>
                    <span className='editBtn' onClick={props.handleEdit}>
                        <i className='fas fa-edit'></i>
                    </span>
                </NoPrint>
                <p>{props.text}</p>
            </Container>
        );
    }
};

export default TextSection;