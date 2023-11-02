import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import postReducer from './reducers/postReducer';

const rootReducer = combineReducers({
	users: userReducer,
	posts: postReducer,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		devTools: false,
	});
};

export type RootState = ReturnType<typeof rootReducer>;
export type Store = ReturnType<typeof setupStore>;
export type Dispatch = Store['dispatch'];
