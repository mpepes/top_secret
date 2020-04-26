import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Input from 'app/components/Input/Input';
import Button from 'app/components/Button/Button';
import DataActions from 'app/modules/Data/actions';

import './SearchInput.scss';

class SearchInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: '',
        };

        this.inputRef = React.createRef();

        this.onKeyPress = this.onKeyPress.bind(this);
        this.clearQuery = this.clearQuery.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.inputRef.current.focus();
    }

    onKeyPress(e) {
        if (e.key === 'Enter') {
            this.handleSubmit();
        }
    }

    onChange(e) {
        this.setState({ query: e.target.value });
    }

    clearQuery() {
        this.setState({ query: '' });
    }

    handleSubmit() {
        this.props.fetchData(this.state.query);
    }

    render() {
        const { query } = this.state;

        return (
            <>
                <div className="input-container">
                    <Input
                        name="search"
                        onChange={this.onChange}
                        onKeyPress={this.onKeyPress}
                        value={query}
                        inputRef={this.inputRef}
                    />
                    {query && (
                        <Button
                            onClick={this.clearQuery}
                            className="clear-query--button"
                        >
                            x
                        </Button>
                    )}
                </div>
                <Button
                    onClick={this.handleSubmit}
                    disabled={query === ''}
                >
                    Search
                </Button>
            </>
        );
    }
}

SearchInput.propTypes = {
    fetchData: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
    fetchData: DataActions.fetchData,
};

export default connect(null, mapDispatchToProps)(SearchInput);
