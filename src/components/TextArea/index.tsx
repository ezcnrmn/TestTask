import React from 'react';
import { UseFormCompatible } from '../../utils/useForm';
import './TextArea.css';

interface TextAreaProps extends UseFormCompatible<string> {
	[key: string]: unknown;
}
const TextArea: React.FC<TextAreaProps> = ({ name, value, setValue, ...props }) => {
	return (
		<textarea
			className="textarea"
			rows={10}
			name={name}
			value={value}
			onChange={(event) => setValue({ name: name, value: event.target.value })}
			{...props}
		/>
	);
};

export default TextArea;
