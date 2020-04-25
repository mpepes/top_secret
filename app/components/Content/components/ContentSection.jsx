import React from 'react';
import PropTypes from 'prop-types';

const ContentSection = ({
    data,
    label,
}) => {
    const {
        pagination,
        items,
    } = data;
    const totalCount = pagination.total;
    const displayInfo = `Displaying: ${items.length} of ${totalCount}`;

    return (
        <div className="content-section">
            <div>{label}</div>
            <div>{displayInfo}</div>
        </div>
    );
};

ContentSection.propTypes = {
    label: PropTypes.string.isRequired,
    data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ContentSection;
