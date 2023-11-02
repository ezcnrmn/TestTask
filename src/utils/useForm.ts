import { useState } from 'react';
import { Plain } from '../types';

type HandleChangeType<T> = (value: { name: string; value: T }) => void;
type HandleSubmitType = (event: React.FormEvent<HTMLFormElement>) => void;

type ReturnType = [object, HandleChangeType<Plain>, HandleSubmitType];

const useForm = (onSubmit: (data: object) => void): ReturnType => {
	const [data, setData] = useState<object>({});

	const handleChange: HandleChangeType<Plain> = ({ name, value }) => {
		setData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit: HandleSubmitType = (event) => {
		event.preventDefault();
		onSubmit(data);
	};

	return [data, handleChange, handleSubmit];
};

export interface UseFormCompatible<T> {
	name: string;
	value: T;
	setValue: HandleChangeType<T>;
}

export default useForm;
