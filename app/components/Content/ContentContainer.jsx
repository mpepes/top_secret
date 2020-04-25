import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
    getData,
    getSearchQuery,
} from 'app/modules/Data/selectors';
import ContentSection from 'app/components/Content/components/ContentSection';

import './ContentContainer.scss';

const ContentContainer = ({
    data,
    searchQuery,
}) => {
    if (!data) return null;

    const {
        giphyData,
        pixabayData,
    } = data;

    const sections = [
        {
            label: 'Giphy',
            data: giphyData,
        },
        {
            label: 'Pixabay',
            data: pixabayData,
        },
    ];

    const renderContent = () => (
        sections.map(({ label, data: sectionData }) => (
            <ContentSection
                key={label}
                data={sectionData}
                label={label}
            />
        ))
    );

    return (
        <>
            <h3>{`Results for query: ${searchQuery}`}</h3>
            <div className="content-container">
                {renderContent()}
            </div>
        </>
    );
};

ContentContainer.propTypes = {
    // when we have final structure we can go with PropTypes.shape here
    data: PropTypes.objectOf(PropTypes.any),
    searchQuery: PropTypes.string,
};

const mapStateToProps = state => ({
    data: getData(state),
    searchQuery: getSearchQuery(state),
});

export default connect(mapStateToProps)(ContentContainer);
