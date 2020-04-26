import React from 'react';

const ImageRenderer = props => {
    const {
        previewURL,
        tags,
    } = props;

    return (
        <img className="item item-image" src={previewURL} alt={tags} />
    );
};

export default ImageRenderer;
