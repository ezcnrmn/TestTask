import React from 'react';
import './Page.css';
import Loading from '../Loading';

const headerSpacesClasses = {
	big: 'page__header--big-space',
	medium: 'page__header--medium-space',
	small: 'page__header--small-space',
} as const;

interface PageProps {
	headerLeft?: React.ReactNode;
	headerRight?: React.ReactNode;
	headerSpace?: keyof typeof headerSpacesClasses;
	children?: React.ReactNode;
	loading?: boolean;
}
const Page: React.FC<PageProps> = ({ headerLeft, headerRight, children, headerSpace = 'big', loading }) => {
	return (
		<section className="page">
			<header className={`page__header ${headerSpacesClasses[headerSpace]}`}>
				<div className="page__header-left">{headerLeft}</div>
				<div className="page__header-right">{headerRight}</div>
			</header>
			<div>{loading ? <Loading /> : children}</div>
		</section>
	);
};

export default Page;
