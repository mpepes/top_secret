import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getErrorStatus } from 'app/modules/Error/selectors';

const ErrorBoundary = ({
    isError,
    children,
}) => {
    if (isError) {
        return <div>Custom error page</div>;
    }

    return children;
};

ErrorBoundary.propTypes = {
    isError: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
};

const mapStateToProps = state => ({
    isError: getErrorStatus(state),
});

export default connect(mapStateToProps)(ErrorBoundary);
