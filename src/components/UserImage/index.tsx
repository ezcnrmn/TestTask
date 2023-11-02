import React from 'react';
import userIcon from '../../assets/icons/user-icon.svg';
import './UserImage.css';

interface UserImage {
	size: number;
	round?: boolean;
	color?: string;
}
const UserImage: React.FC<UserImage> = ({ size, round, color }) => {
	const imgSize = size / 2;

	return (
		<span
			className={`user-image ${round ? 'user-image--round' : ''}`}
			style={{ width: size, height: size, backgroundColor: color }}
		>
			<img className="user-image__img" src={userIcon} alt="User photo" style={{ width: imgSize }} />
		</span>
	);
};

export default UserImage;
