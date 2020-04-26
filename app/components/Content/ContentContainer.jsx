import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
    getData,
    getSearchQuery,
} from 'app/modules/Data/selectors';
import ContentSection from 'app/components/Content/components/ContentSection';
import { DataProvider } from 'app/constants/DataProvider';
import Loader from 'app/components/Loader/Loader';
import { getIsLoadingStatus } from 'app/modules/Loading/selectors';

import './ContentContainer.scss';

const ContentContainer = ({
    data,
    searchQuery,
    isLoading,
}) => {
    if (!Object.keys(data).length && !isLoading) return null;

    if (isLoading) return <Loader />;

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
            <h3 className="results-info">{`Results for query: ${searchQuery}`}</h3>
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
    isLoading: PropTypes.bool.isRequired,
};

ContentContainer.defaultProps = {
    data: {},
    searchQuery: '',
};

const mapStateToProps = state => ({
    data: getData(state),
    searchQuery: getSearchQuery(state),
    isLoading: getIsLoadingStatus(state),
});

export default connect(mapStateToProps)(ContentContainer);
