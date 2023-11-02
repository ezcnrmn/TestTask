import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Page from '../../components/Page';
import Button from '../../components/Button';
import Table from '../../components/Table';
import UserImage from '../../components/UserImage';
import { useTypedDispatch, useTypedSelector } from '../../utils/redux';
import { loadUsers } from '../../api/userApi';
import { SEARCH_PARAM } from '../../utils/consts';
import { getQueryParam } from '../../utils/queryParam';
import { formatPhoneNumber } from '../../utils/formatPhoneNumber';

const Users: React.FC = () => {
	const [searchParams] = useSearchParams();
	const searchQuery = getQueryParam(searchParams.toString(), SEARCH_PARAM);

	const { users, loading } = useTypedSelector((state) => state.users);
	const dispatch = useTypedDispatch();

	useEffect(() => {
		dispatch(loadUsers());
	}, []);

	// сортировка на фронте, т.к. jsonplaceholder находит только при полном совпадении
	const filteredUsers = searchQuery
		? (users ?? []).filter(
				(user) =>
					user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
					user.username.toLowerCase().includes(searchQuery.toLowerCase()),
		  )
		: users;

	return (
		<Page
			headerLeft={<h2>Users list</h2>}
			headerRight={<Button design="secondary">Export as .xls</Button>}
			loading={loading}
		>
			<Table
				rowKey="id"
				columns={[
					{
						name: 'User name',
						dataIndex: 'username',
						render: (value, row) => (
							<Link to={`${row.id}`}>
								<span className="horizontal-container">
									<UserImage size={24} round color="#EBEBEB" />
									<span>{value}</span>
								</span>
							</Link>
						),
					},
					{ name: 'Email', dataIndex: 'email' },
					{
						name: 'Phone number',
						dataIndex: 'phone',
						render: (value) => formatPhoneNumber(value as string),
					},
					{ name: 'Website', dataIndex: 'website' },
				]}
				data={filteredUsers}
				noDataText="NO USERS"
			/>
		</Page>
	);
};

export default Users;
