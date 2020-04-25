import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
    getData,
    getSearchQuery,
} from 'app/modules/Data/selectors';
import ContentSection from 'app/components/Content/components/ContentSection';
import DataProvider from 'app/constants/DataProvider';

import './ContentContainer.scss';

const ContentContainer = ({
    data,
    searchQuery,
}) => {
    if (!Object.keys(data).length) return null;

    const {
        giphy,
        pixabay,
    } = data;

    const sections = [
        {
            label: DataProvider.GIPHY,
            data: giphy,
        },
        {
            label: DataProvider.PIXABAY,
            data: pixabay,
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

ContentContainer.defaultProps = {
    data: {},
    searchQuery: '',
};

const mapStateToProps = state => ({
    data: getData(state),
    searchQuery: getSearchQuery(state),
});

export default connect(mapStateToProps)(ContentContainer);
