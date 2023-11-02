import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Page from '../../../components/Page';
import Button from '../../../components/Button';
import DataList from '../../../components/DataList';
import UserImage from '../../../components/UserImage';
import Modal from '../../../components/Modal';
import { withModal } from '../../../components/Modal/withModal';
import PostForm from './PostForm';
import { useTypedDispatch, useTypedSelector } from '../../../utils/redux';
import { loadUser } from '../../../api/userApi';
import Posts from './Posts';
import { formatPhoneNumber } from '../../../utils/formatPhoneNumber';
import '../Users.css';

const UserPage: React.FC = withModal(({ showModal, closeModal, setModal }) => {
	const navigate = useNavigate();
	const location = useLocation();

	const { usersById, loading } = useTypedSelector((state) => state.users);
	const dispatch = useTypedDispatch();

	const userId = +location.pathname.substring(1);
	const user = usersById[userId];

	useEffect(() => {
		if (!user) dispatch(loadUser(userId));
	}, []);

	if (!user)
		return (
			<Page
				headerLeft={
					<Button design="secondary" prefix="<" onClick={() => navigate(-1)}>
						Back
					</Button>
				}
				loading={loading}
			>
				<h2>User is not exist</h2>
			</Page>
		);

	return (
		<Page
			headerLeft={
				<Button design="secondary" prefix="<" onClick={() => navigate(-1)}>
					Back
				</Button>
			}
			headerRight={
				<div className="horizontal-container">
					<Button design="secondary">Export as .xls</Button>
					<Button
						onClick={() => {
							setModal(
								<Modal
									closeModal={closeModal}
									title="Create post"
									content={<PostForm userId={userId} closeModal={closeModal} isCreate />}
								/>,
							);
							showModal();
						}}
					>
						Create post
					</Button>
				</div>
			}
			loading={loading}
		>
			<div className="user-info">
				<div className="user-info__user-image">
					<UserImage size={170} />
				</div>
				<Page headerLeft={<h2>{user.username}</h2>} headerSpace="medium">
					<DataList data={{ Email: user.email, Phone: formatPhoneNumber(user.phone), Website: user.website }} />
				</Page>
			</div>

			<Posts userId={userId} />
		</Page>
	);
});

export default UserPage;
