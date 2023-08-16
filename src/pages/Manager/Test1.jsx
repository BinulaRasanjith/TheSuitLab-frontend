import React, { useState } from 'react';
import Dropzone from 'react-dropzone';

function ImageUploader() {
    const [files, setFiles] = useState([]);

    const handleDrop = (acceptedFiles) => {
        setFiles(acceptedFiles);
    };

    return (
        <div>
            <Dropzone onDrop={handleDrop} accept="image/*">
                {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps()} className="dropzone">
                        <input {...getInputProps()} />
                        <p>Drag and drop an image here, or click to select one</p>
                    </div>
                )}
            </Dropzone>
            {files.map(file => (
                <div key={file.name}>
                    <img src={URL.createObjectURL(file)} alt={file.name} />
                </div>
            ))}
        </div>
    );
}

export default ImageUploader;
