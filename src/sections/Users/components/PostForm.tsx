import React from 'react';
import useForm from '../../../utils/useForm';
import Input from '../../../components/Input';
import TextArea from '../../../components/TextArea';
import Button from '../../../components/Button';
import { Post, User } from '../../../types';
import { createPost, editPost } from '../../../api/postApi';
import { useTypedDispatch } from '../../../utils/redux';

interface PostFormProps {
	closeModal: () => void;
	userId: User['id'];
	isCreate?: boolean;
	post?: Post;
}

const PostForm: React.FC<PostFormProps> = ({ closeModal, userId, isCreate, post }) => {
	const dispatch = useTypedDispatch();

	const onSubmit = (data: any) => {
		if (isCreate) {
			dispatch(createPost(userId, data));
		} else if (post) {
			dispatch(editPost(userId, post.id, { ...post, ...data }));
		}

		closeModal();
	};

	const [formData, handleChange, handleSubmit] = useForm(onSubmit);

	const onCancel = () => {
		closeModal();
	};

	const defaultTitle = isCreate || !post ? '' : post.title;
	const defaultBody = isCreate || !post ? '' : post.body;

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className="vertical-container">
					<Input
						name="title"
						placeholder="Title"
						value={(formData as any).title ?? defaultTitle}
						setValue={handleChange}
						maxlength={200}
					/>

					<TextArea
						name="body"
						placeholder="Body"
						value={(formData as any).body ?? defaultBody}
						setValue={handleChange}
						maxlength={1000}
					/>

					<div className="horizontal-container">
						<Button design="secondary" onClick={() => onCancel()}>
							Cancel
						</Button>
						<Button type="submit">{isCreate ? 'Create post' : 'Save changes'}</Button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default PostForm;
