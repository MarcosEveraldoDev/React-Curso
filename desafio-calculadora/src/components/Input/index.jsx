import PropTypes from "prop-types";
import { InputContainer } from "./styles";

export default function Input({ value }) {
    return (
        <InputContainer>
            <input disabled value={value} />
        </InputContainer>
    );
}
Input.propTypes = {
    value: PropTypes.string.isRequired,
};
