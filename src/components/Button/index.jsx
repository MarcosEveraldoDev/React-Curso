import PropTypes from "prop-types";
import { ButtonContainer } from "./styles";

export default function Button({ children , onClick}) {
  return <ButtonContainer onClick= {onClick}>{children}</ButtonContainer>;
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
};
