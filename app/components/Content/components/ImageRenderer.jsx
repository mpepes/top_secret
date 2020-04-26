import React from 'react';

const ImageRenderer = props => {
    const {
        previewURL,
        tags,
    } = props;

    return (
        <img src={previewURL} alt={tags} />
    );
};

export default ImageRenderer;
