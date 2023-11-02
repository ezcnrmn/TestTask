import React from 'react';
import { UseFormCompatible } from '../../utils/useForm';
import './Input.css';

interface InputProps extends UseFormCompatible<string> {
	prefix?: React.ReactNode;
	[key: string]: unknown;
}
const Input: React.FC<InputProps> = ({ name, value, setValue, prefix, ...props }) => {
	return (
		<label className="input">
			{prefix ? <span className="input__prefix">{prefix}</span> : null}
			<input
				className="input__field"
				name={name}
				value={value}
				onChange={(event) => setValue({ name: name, value: event.target.value })}
				type="text"
				{...props}
			/>
		</label>
	);
};

export default Input;
