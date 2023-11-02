import Api from './Api';
import { Dispatch } from '../store';
import { userSlice } from '../store/reducers/userReducer';
import { User } from '../types';
import showNotification from '../components/Notification';

export const loadUsers = () => async (dispatch: Dispatch) => {
	const { loadingUsers, usersLoadedWithError, usersLoadedWithSuccess } = userSlice.actions;

	try {
		dispatch(loadingUsers());

		const users = await Api.get('https://jsonplaceholder.typicode.com/users');

		dispatch(usersLoadedWithSuccess(users));
	} catch (error) {
		if (error instanceof Error) {
			dispatch(usersLoadedWithError(error.message));
			showNotification(error.message);
		}
	}
};

export const loadUser = (userId: User['id']) => async (dispatch: Dispatch) => {
	const { loadingUsers, usersLoadedWithError, userLoadedWithSuccess } = userSlice.actions;

	try {
		dispatch(loadingUsers());

		const user = await Api.get(`https://jsonplaceholder.typicode.com/users/${userId}`);

		dispatch(userLoadedWithSuccess(user));
	} catch (error) {
		if (error instanceof Error) {
			dispatch(usersLoadedWithError(error.message));
			showNotification(error.message);
		}
	}
};
