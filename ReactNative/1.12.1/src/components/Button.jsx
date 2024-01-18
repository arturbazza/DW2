import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, icon }) => (
    <button type="button" onClick={onClick}>
        <icon />
    </button>
);

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    icon: PropTypes.string.isRequired,
};

export default Button;