import React, { Component } from 'react';

import Input from 'app/components/Input/Input';
import Button from 'app/components/Button/Button';

import './Form.scss';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: '',
        };

        this.onChange = e => {
            this.setState({ query: e.target.value });
        };

        this.onKeyPress = e => {
            if (e.key === 'Enter') {
                this.handleSubmit();
            }
        };

        this.clearQuery = () => this.setState({ query: '' });

        this.handleSubmit = () => {
            // api call
        };

        this.inputRef = React.createRef();
    }

    componentDidMount() {
        this.inputRef.current.focus();
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
