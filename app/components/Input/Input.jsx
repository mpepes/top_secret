import React from 'react';
import PropTypes from 'prop-types';

import './Input.scss';

const Input = ({
    name,
    onChange,
    value,
    type,
    placeholder,
    inputRef,
    onKeyPress,
}) => (
    <input
        name={name}
        ref={inputRef}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        type={type}
        className="input"
        onKeyPress={onKeyPress}
    />
);

Input.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    inputRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    ]),
    onKeyPress: PropTypes.func,
};

Input.defaultProps = {
    type: 'text',
    placeholder: 'Type what are you looking for',
    inputRef: () => {},
    onKeyPress: () => {},
};

export default Input;
