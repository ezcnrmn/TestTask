import React, { useState } from 'react';
import './Modal.css';

export interface WithModalProps {
	showModal: () => void;
	closeModal: () => void;
	setModal: (modal: React.ReactNode) => void;
}
export const withModal = <T extends WithModalProps>(WrappedComponent: React.ComponentType<T>) => {
	const ComponentWithModal = (props: Omit<T, keyof WithModalProps>) => {
		const [isVisible, setIsVisible] = useState(false);
		const [modal, setModal] = useState<React.ReactNode>();

		const modalProps = {
			showModal: () => setIsVisible(true),
			closeModal: () => setIsVisible(false),
			setModal: (modal: React.ReactNode) => setModal(modal),
		};

		return (
			<>
				<WrappedComponent {...modalProps} {...(props as T)} />
				{isVisible && modal ? <div className="modal-curtain">{modal}</div> : null}
			</>
		);
	};

	return ComponentWithModal;
};

// ---------------------------------------------------------------------------------

// type useModalReturnType = {
// 	visible: boolean;
// 	showModal: () => void;
// 	closeModal: () => void;
// };
// type useModalProps = {
// 	defaultVisible?: boolean;
// };
// const useModal = ({ defaultVisible = false }: useModalProps = {}): useModalReturnType => {
// 	const [visible, setVisible] = useState(defaultVisible);

// 	const showModal = useCallback(() => setVisible(true), [visible]);
// 	const closeModal = useCallback(() => setVisible(false), [visible]);

// 	return {
// 		visible,
// 		showModal,
// 		closeModal,
// 	};
// };

// export default useModal;
