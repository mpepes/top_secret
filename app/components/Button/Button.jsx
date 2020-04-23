import React from 'react';
import PropsTypes from 'prop-types';

const Button = ({
    onClick,
    children,
    disabled,
    type,
    className,
}) => (
    <button
        onClick={onClick}
        disabled={disabled}
        type={type}
        className={className}
    >
        {children}
    </button>
);

Button.propTypes = {
    onClick: PropsTypes.func.isRequired,
    children: PropsTypes.oneOfType([
        PropsTypes.string,
        PropsTypes.node,
    ]).isRequired,
    disabled: PropsTypes.bool,
    type: PropsTypes.string,
    className: PropsTypes.string,
};

Button.defaultProps = {
    disabled: false,
    type: 'button',
    className: '',
};

export default Button;
