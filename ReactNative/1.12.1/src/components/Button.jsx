import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as SVG } from "../assets/react.svg";

const Button = ({ onClick, icon }) => (
    <button type="button" onClick={onClick}>
        <SVG name={icon} />
    </button>
);

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    icon: PropTypes.string.isRequired,
};

export default Button;