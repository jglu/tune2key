import React from 'react';

import './DownloadButton.css'

const DownloadButton = ({inputFilename}) => {

    const removeExtension = (filename) => {
        if (!filename || typeof filename !== 'string') {
            return;
        }
        return filename.replace(/\.[^/.]+$/, '');
      }

    const downloadFile = async () => {
        const filename = removeExtension(inputFilename);
        const url = `http://127.0.0.1:5000/download/${filename}.pdf`;
        await fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.blob();
                }
                throw new Error('File not found');
            })
            .then(blob => {
                const downloadUrl = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = downloadUrl;
                a.download = filename;
                document.body.appendChild(a);
                a.click();
                a.remove();
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <button className="download-button"
            onClick={() => downloadFile()}
        >
            Download
        </button>
    );
}

export default DownloadButton;

