import {ButtonContainer} from './styles.jsx'
import PropTypes from 'prop-types';

export default function Button({label , onClick}) {
 return (  
        <ButtonContainer onClick={onClick}>
            {label}
        </ButtonContainer>
 );
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};