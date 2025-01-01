import PropTypes from "prop-types";
import { InputContainer } from "./styles.jsx";

export default function Input({ value, onChange }) {
  return (
    <InputContainer>
      <input value={value} onChange={onChange} />
    </InputContainer>
  );
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

