import { NoPrint } from 'react-easy-print';

const TextSection = (props) => {
    if(props.firstName === '' || props.lastName === '' || props.email === '' || props.phone === ''){
        return (
            <div className='textSection'>
                <NoPrint>
                    <span className='editBtn' onClick={props.handleEdit}>
                        <i className='fas fa-edit'></i>
                    </span>
                </NoPrint>
                <p>{props.text}</p>
            </div>
        );
    }
    else if (props.companyName === '' || props.position === '' || props.startDate === '' || props.endDate === ''){
        return (
            <div className='textSection'>
                <NoPrint>
                    <span className='editBtn' onClick={props.handleEdit}>
                        <i className='fas fa-edit'></i>
                    </span>
                </NoPrint>
                <p>{props.text}</p>
            </div>
        );
    }
    else {
        return (
            <div className='textSection'>
                <NoPrint>
                    <span className='editBtn' onClick={props.handleEdit}>
                        <i className='fas fa-edit'></i>
                    </span>
                </NoPrint>
                <p>{props.text}</p>
            </div>
        );
    }
};

export default TextSection;