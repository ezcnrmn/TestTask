import React from 'react';
import './Header.css';

interface HeaderProps {
	title: string;
	children?: React.ReactNode;
}
const Header: React.FC<HeaderProps> = ({ title, children }) => (
	<header className="header">
		<h1 className="header__title">{title}</h1>
		<div className="header__content">{children}</div>
	</header>
);

export default Header;
