import React from 'react';
import './Attachment.css';

export const Attachment = ({onFileSelected}) => {

    const onFileChange = event => {
        let files =  Array.from(event.target.files);
        onFileSelected(files);
    };

    return (
        <div>
            <div>
                <input type="file" multiple onChange={onFileChange} />
            </div>
        </div>
    );
}

export default Attachment;
