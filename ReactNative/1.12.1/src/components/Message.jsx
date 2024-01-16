import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Message.css';
import { ReactComponent as SVG } from "../assets/react.svg";

const Message = ({
    message, remetente, visualizado, onClick,
}) => {
    const messageClasses = classNames('message', {
        'message--sent': remetente,
        'message--received': !remetente,
        'message--visualized': visualizado,
    });

    return (
        <div className={messageClasses} onClick={onClick}>
            <p>{message}</p>
            <div className="message__options">
                <SVG name="more-horizontal" />
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