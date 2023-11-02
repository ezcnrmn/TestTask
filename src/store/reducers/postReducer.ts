import { Post, User } from '../../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PostState {
	postsByUser: { [userId: Post['userId']]: Post[] };
	loading: boolean;
	errors: string[];
}

const initialState: PostState = {
	postsByUser: {},
	loading: false,
	errors: [],
};

export const postSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		loadingPosts(state) {
			state.loading = true;
		},
		postsLoadedWithSuccess(state, action: PayloadAction<{ userId: User['id']; posts: Post[] }>) {
			const { posts, userId } = action.payload;

			state.postsByUser[userId] = posts;
			state.loading = false;
		},

		postsLoadedWithError(state, action: PayloadAction<string>) {
			state.errors.push(action.payload);
			state.loading = false;
		},

		// без api, только фронт
		addPost(state, action: PayloadAction<{ userId: User['id']; post: Post }>) {
			const { post, userId } = action.payload;

			state.postsByUser[userId].push(post);
			state.loading = false;
		},
		editPost(state, action: PayloadAction<{ userId: User['id']; post: Post }>) {
			const { post: editedPost, userId } = action.payload;

			const index = state.postsByUser[userId].findIndex((post) => post.id === editedPost.id);

			state.postsByUser[userId][index] = editedPost;
			state.loading = false;
		},
	},
});

export default postSlice.reducer;
