import { User } from '../../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
	users: User[];
	usersById: { [id: string]: User };
	loading: boolean;
	errors: string[];
}

const initialState: UserState = {
	users: [],
	usersById: {},
	loading: false,
	errors: [],
};

export const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		loadingUsers(state) {
			state.loading = true;
		},
		usersLoadedWithSuccess(state, action: PayloadAction<User[]>) {
			state.users = action.payload;
			state.loading = false;
		},

		userLoadedWithSuccess(state, action: PayloadAction<User>) {
			const user = action.payload;

			state.usersById[user.id] = user;
			state.loading = false;
		},

		usersLoadedWithError(state, action: PayloadAction<string>) {
			state.errors.push(action.payload);
			state.loading = false;
		},
	},
});

export default userSlice.reducer;
