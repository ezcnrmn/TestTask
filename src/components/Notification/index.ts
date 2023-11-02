import crossIcon from '../../assets/icons/close-icon-white.svg';
import './Notification.css';

const CONTAINER_ID = 'notification-container';

const createNotification = (title: string) => {
	const notification = document.createElement('div');
	notification.classList.add('notification');

	const titleNode = document.createElement('h6');
	titleNode.classList.add('notification__title');
	titleNode.appendChild(document.createTextNode(title));

	const closeNode = document.createElement('input');
	closeNode.type = 'image';
	closeNode.src = crossIcon;
	closeNode.alt = 'Close';
	closeNode.classList.add('notification__close');

	const removeHandler = () => {
		closeNode.removeEventListener('click', removeHandler);
		notification.remove();
	};
	closeNode.addEventListener('click', removeHandler);

	notification.appendChild(titleNode);
	notification.appendChild(closeNode);

	return notification;
};

const showNotification = (title: string, duration: number = 5000) => {
	const notificationNode = createNotification(title);

	let container = document.getElementById(CONTAINER_ID);

	if (!container) {
		container = document.createElement('div');
		container.id = CONTAINER_ID;
		container.classList.add(CONTAINER_ID, 'vertical-container');
		document.body.appendChild(container);
	}

	container.appendChild(notificationNode);

	if (duration > 0) {
		setTimeout(() => {
			notificationNode.remove();
		}, duration);
	}
};

export default showNotification;
