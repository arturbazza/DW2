// código do arquivo mensagem.jsx

import React from 'react';

const Mensagem = ({ type, status, content }) => {
    const getMessageClasses = () => {
        let classes = 'message';

        if (type === 'sent') {
            classes += ' sent';
        } else if (type === 'received') {
            classes += ' received';
        }

        if (status === 'viewed') {
            classes += ' viewed';
        } else {
            classes += ' not-viewed';
        }

        return classes;
    };

    return (
        <li className={getMessageClasses()}>
            <button className="options">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                </svg>
            </button>
            {type === 'sent' && <span className={`visualized ${status === 'viewed' ? 'yes' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M374.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 178.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l80 80c12.5 12.5 32.8 12.5 45.3 0l160-160zm96 128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 402.7 86.6 297.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l256-256z" />
                </svg>
            </span>}
            <p>{content}</p>
        </li>
    );
};

export default Mensagem;
