import React from 'react';
import './MyToggleButton.css'; // We'll create this CSS file next

const MyToggleButton = () => {
    return (
        <label className="container">
            <input defaultChecked={false} type="checkbox" />
            <svg
                viewBox="0 0 384 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
                className="play"
            >
                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
            </svg>
            <svg
                viewBox="0 0 320 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
                className="pause"
            >
                <path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z" />
            </svg>
        </label>
    );
};

export default MyToggleButton;
