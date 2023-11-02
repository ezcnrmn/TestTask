import React, { useEffect } from 'react';
import Table from '../../../components/Table';
import Modal from '../../../components/Modal';
import { WithModalProps, withModal } from '../../../components/Modal/withModal';
import editLogo from '../../../assets/icons/icon-edit.svg';
import { useTypedDispatch, useTypedSelector } from '../../../utils/redux';
import { User } from '../../../types';
import { loadPosts } from '../../../api/postApi';
import PostForm from './PostForm';
import Loading from '../../../components/Loading';

interface PostsProps extends WithModalProps {
	userId: User['id'];
}
const Posts = withModal((props: PostsProps) => {
	const { userId, setModal, closeModal, showModal } = props;

	const { postsByUser, loading } = useTypedSelector((state) => state.posts);
	const dispatch = useTypedDispatch();

	const posts = postsByUser[userId];

	useEffect(() => {
		if (!posts) dispatch(loadPosts(userId));
	}, []);

	if (loading)
		return (
			<div className="posts">
				<Loading />
			</div>
		);

	return (
		<div className="posts">
			<Table
				columns={[
					{ name: 'Title', dataIndex: 'title' },
					{ name: 'Body', dataIndex: 'body' },
					{
						name: 'Action',
						dataIndex: '',
						render: (_, row) => (
							<a
								onClick={(event: React.MouseEvent) => {
									event.preventDefault();
									setModal(
										<Modal
											closeModal={closeModal}
											title="Edit post"
											content={<PostForm userId={userId} closeModal={closeModal} post={row} />}
										/>,
									);
									showModal();
								}}
							>
								<div className="action-column">
									<img src={editLogo} alt="" />
									<span>Edit</span>
								</div>
							</a>
						),
					},
				]}
				data={posts ?? []}
				rowKey="id"
				noDataText="NO POSTS"
			/>
		</div>
	);
});

export default Posts;
