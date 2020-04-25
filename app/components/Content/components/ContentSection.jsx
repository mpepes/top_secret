import React from 'react';

const ContentSection = ({
    data,
    label,
}) => {
    return (
        <div className="content-section">
            <div>{label}</div>
            <div>{data.length}</div>
        </div>
    );
};

export default ContentSection;
