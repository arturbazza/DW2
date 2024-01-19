import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, icon: Icon, color }) => (
    <button type="button" onClick={onClick}>
        <Icon color={color} />
    </button>
);

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    icon: PropTypes.elementType.isRequired,
    color: PropTypes.string.isRequired,
};

export default Button;
