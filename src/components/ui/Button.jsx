import React from 'react';

const Button = props => {
  return (
    <button
      type={props.type || 'button'}
      onClick={props.onClick}
      disabled={props.disabled}
      className={`btn ${
        props.variant === 'primary'
          ? 'btn-primary'
          : props.variant === 'secondary'
          ? 'btn-secondary'
          : 'btn-ghost'
      } ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
