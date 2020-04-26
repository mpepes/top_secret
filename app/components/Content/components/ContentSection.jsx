import React from 'react';
import PropTypes from 'prop-types';

import DataProvider from 'app/constants/DataProvider';
import GifRenderer from 'app/components/Content/components/GifRenderer';
import ImageRenderer from 'app/components/Content/components/ImageRenderer';

const renderers = {
    [DataProvider.GIPHY]: GifRenderer,
    [DataProvider.PIXABAY]: ImageRenderer,
};

const ContentSection = ({
    data,
    label,
}) => {
    const Renderer = renderers[label];
    const {
        pagination,
        items,
    } = data;
    const totalCount = pagination.total;
    const displayInfo = `displaying ${items.length} of ${totalCount}`;

    return (
        <div className="content-section">
            <div className="section-title">{`${label}: ${displayInfo}`}</div>
            <div className="items-container">
                {items.map(item => (
                    <Renderer
                        key={item.id}
                        {...item}
                    />
                ))}
            </div>
        </div>
    );
};

ContentSection.propTypes = {
    label: PropTypes.string.isRequired,
    data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ContentSection;
