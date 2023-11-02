import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './sections/Layout';
import Users from './sections/Users';
import UserPage from './sections/Users/components/UserPage';
import './styles/app.css';

const App: React.FC = () => {
	return (
		<Routes>
			<Route path="" element={<Layout />}>
				<Route index element={<Users />} />
				<Route path=":id" element={<UserPage />} />
			</Route>
		</Routes>
	);
};

export default App;
