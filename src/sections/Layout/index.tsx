import React from 'react';
import Header from '../../components/Header';
import Input from '../../components/Input';
import { Outlet, useSearchParams, useLocation } from 'react-router-dom';
import { getQueryParam, setQueryParam } from '../../utils/queryParam';
import { SEARCH_PARAM } from '../../utils/consts';
import './Layout.css';

const Layout: React.FC = () => {
	const location = useLocation();
	const [searchParams, setSearchParams] = useSearchParams();

	const searchQuery = getQueryParam(searchParams.toString(), SEARCH_PARAM);

	return (
		<>
			<Header title="Test Assignment">
				<div className="search-field">
					<Input
						disabled={location.pathname.length > 1} // блокирование поля для страниц пользователей
						value={searchQuery ?? ''}
						setValue={({ value }) => {
							setSearchParams(setQueryParam(location.search, SEARCH_PARAM, value));
						}}
						placeholder="Search"
						name={SEARCH_PARAM}
					/>
				</div>
			</Header>

			<main className="main">
				<Outlet />
			</main>
		</>
	);
};

export default Layout;
