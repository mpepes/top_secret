import React from 'react';

const GifRenderer = props => {
    const {
        title,
        images,
    } = props;

    return (
        <video className="item item-gif" alt={title} src={images.fixed_height.mp4} autoPlay loop />
    );
};

export default GifRenderer;
