import React from 'react';
import TableRow from './TableRow';
import { Plain } from '../../types';
import './Table.css';

export interface Column<T> {
	name: string;
	dataIndex: string;
	render?: (value: Plain, row: T) => React.ReactNode;
}
export interface Row {
	[key: string]: Plain;
}
interface TableProps<T> {
	columns: Column<T>[];
	data: T[];
	rowKey: string;
	noDataText?: string;
}

const Table = <T extends object>(props: TableProps<T>) => {
	const { columns, data, rowKey, noDataText } = props;

	if (data.length === 0)
		return (
			<div className="table-component">
				<div className="no-data-placeholder">{typeof noDataText === 'string' ? noDataText : 'No data'}</div>
			</div>
		);

	return (
		<div className="table-component">
			<table className="table">
				<thead className="table__header">
					<TableRow columns={columns} type="header" />
				</thead>
				<tbody className="table__body">
					{data.map((row, index) => (
						<TableRow
							columns={columns}
							type="body"
							row={row}
							key={`${(row as any)[rowKey] ?? index}`}
							rowKey={`${(row as any)[rowKey] ?? index}`}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
