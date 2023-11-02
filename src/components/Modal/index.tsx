import React from 'react';
import Button from '../Button';
import crossIcon from '../../assets/icons/close-icon.svg';
import './Modal.css';

interface ModalProps {
	title?: string;
	content: React.ReactNode;
	closeModal: () => void;
	showCancelButton?: boolean;
	onSubmit?: () => void;
}
const Modal: React.FC<ModalProps> = ({ title, content, closeModal, showCancelButton, onSubmit }) => {
	const cancelButton = showCancelButton ? (
		<Button design="secondary" onClick={closeModal}>
			Cancel
		</Button>
	) : null;

	const submitButton = onSubmit ? (
		<Button type="submit" onClick={onSubmit}>
			Submit
		</Button>
	) : null;

	return (
		<section className="modal">
			<header className="modal__header">
				<h3 className="modal__title">{title}</h3>
				<input className="modal__cross" onClick={closeModal} type="image" src={crossIcon} alt="Close" />
			</header>

			<div className="modal__content">{content}</div>

			{cancelButton || submitButton ? (
				<footer className="modal__footer horizontal-container">
					{cancelButton}
					{submitButton}
				</footer>
			) : null}
		</section>
	);
};

export default Modal;
