import React, { Component } from 'react';

import Input from 'app/components/Input/Input';
import Button from 'app/components/Button/Button';
import { fetchData } from 'app/api/BaseAPI';

import './Form.scss';

class Form extends Component {
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
        fetchData(this.state.query)
            .then(data => console.log(data))
            .catch(error => console.log(error));
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

export default Form;
