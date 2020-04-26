import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { DataProvider } from 'app/constants/DataProvider';
import GifRenderer from 'app/components/Content/components/GifRenderer';
import ImageRenderer from 'app/components/Content/components/ImageRenderer';
import Button from 'app/components/Button/Button';
import DataActions from 'app/modules/Data/actions';

const renderers = {
    [DataProvider.GIPHY]: GifRenderer,
    [DataProvider.PIXABAY]: ImageRenderer,
};

const ContentSection = ({
    data,
    label,
    fetchAdditionalData,
}) => {
    const Renderer = renderers[label];
    const {
        pagination,
        items,
    } = data;
    const totalCount = pagination.total;
    const itemsCount = items.length;
    const displayInfo = `displaying ${itemsCount} of ${totalCount}`;
    const onClick = () => fetchAdditionalData(label);

    return (
        <div className="content-section">
            <div className="section-title">
                <span>{`${label}: ${displayInfo}`}</span>
                {label === DataProvider.PIXABAY && (
                    <Button
                        onClick={onClick}
                        disabled={itemsCount >= totalCount}
                    >
                        Load more
                    </Button>
                )}
            </div>
            <div className="items-container">
                {items.map(item => (
                    <Renderer
                        key={item.id}
                        { ...item }
                    />
                ))}
            </div>
        </div>
    );
};

ContentSection.propTypes = {
    label: PropTypes.string.isRequired,
    data: PropTypes.objectOf(PropTypes.any).isRequired,
    fetchAdditionalData: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
    fetchAdditionalData: DataActions.fetchAdditionalData,
};

export default connect(null, mapDispatchToProps)(ContentSection);
