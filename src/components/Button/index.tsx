import React from 'react';
import './Button.css';

interface ButtonProps {
	design?: 'primary' | 'secondary';
	prefix?: React.ReactNode;
	children: React.ReactNode;
	[key: string]: unknown;
}
const Button: React.FC<ButtonProps> = ({ design = 'primary', children, prefix, ...props }) => {
	return (
		<button className={`button${design === 'primary' ? '' : ' button--' + design}`} {...props}>
			{prefix && <span className="button__prefix">{prefix}</span>}
			{children}
		</button>
	);
};

export default Button;
