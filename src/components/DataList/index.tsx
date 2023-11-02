import React from 'react';
import { Plain } from '../../types';
import './DataList.css';

interface DataListProps {
	data: { [key: string]: Plain };
}
const DataList: React.FC<DataListProps> = ({ data }) => {
	return (
		<dl className="data-list">
			{Object.entries(data).map(([key, value]) => (
				<div className="data-list__item" key={key}>
					<dt className="data-list__title">{key}</dt>
					<dd className="data-list__description">{value}</dd>
				</div>
			))}
		</dl>
	);
};

export default DataList;
