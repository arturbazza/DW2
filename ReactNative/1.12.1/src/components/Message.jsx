import React from 'react';
import PropTypes from 'prop-types';
import './Message.css';
import SVG from "../assets/react";

const Message = ({
    message, remetente, visualizado, onClick,
}) => {
    const iconColor = remetente ? '#00a884' : (visualizado ? '#00a884' : '#f5f5f5');

    return (
        <div className={`message ${remetente ? 'message--sent' : 'message--received'}`} onClick={onClick}>
            <p>{message}</p>
            <div className="message__options">
                <SVG name="more-horizontal" color={iconColor} />
            </div>
        </div>
    );
};

Message.propTypes = {
    message: PropTypes.string.isRequired,
    remetente: PropTypes.bool.isRequired,
    visualizado: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Message;
