import Api from './Api';
import { Dispatch } from '../store';
import { postSlice } from '../store/reducers/postReducer';
import { Post, User } from '../types';
import showNotification from '../components/Notification';

export const loadPosts = (userId: User['id']) => async (dispatch: Dispatch) => {
	const { loadingPosts, postsLoadedWithError, postsLoadedWithSuccess } = postSlice.actions;

	try {
		dispatch(loadingPosts());

		const posts = await Api.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

		dispatch(postsLoadedWithSuccess({ userId, posts }));
	} catch (error) {
		if (error instanceof Error) {
			dispatch(postsLoadedWithError(error.message));
			showNotification(error.message);
		}
	}
};

export const createPost =
	(userId: User['id'], post: { title: Post['title']; body: Post['body'] }) => async (dispatch: Dispatch) => {
		const { loadingPosts, postsLoadedWithError, addPost } = postSlice.actions;

		try {
			dispatch(loadingPosts());

			// const newPost = await Api.post('https://jsonplaceholder.typicode.com/posts', post); // jsonplaceholder возвращает новый id === 101

			dispatch(addPost({ userId, post: { ...post, userId, id: Date.now() } }));
			showNotification('New post created');
		} catch (error) {
			if (error instanceof Error) {
				dispatch(postsLoadedWithError(error.message));
				showNotification(error.message);
			}
		}
	};

export const editPost =
	(userId: User['id'], postId: Post['id'], post: { title: Post['title']; body: Post['body'] }) =>
	async (dispatch: Dispatch) => {
		const { loadingPosts, postsLoadedWithError, editPost } = postSlice.actions;

		try {
			dispatch(loadingPosts());

			// const editedPost = await Api.put(`https://jsonplaceholder.typicode.com/posts/${postId}`, post); // jsonplaceholder возвращает id поста

			dispatch(editPost({ userId, post: { ...post, userId, id: postId } }));
			showNotification('Post saved');
		} catch (error) {
			if (error instanceof Error) {
				dispatch(postsLoadedWithError(error.message));
				showNotification(error.message);
			}
		}
	};
