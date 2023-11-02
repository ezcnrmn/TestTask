import React from 'react';
import { Column } from './index';
import TableCell from './TableCell';

export type Segment = 'header' | 'body';

interface TableRowProps {
	columns: Column<any>[];
	type: Segment;
	row?: any;
	rowKey?: string;
}
const TableRow: React.FC<TableRowProps> = ({ columns, row, rowKey, type }) => {
	return (
		<tr>
			{type === 'body' && row
				? columns.map((column) => (
						<TableCell type={type} key={`${rowKey}__${column.dataIndex}`}>
							{typeof column.render === 'function' ? column.render(row[column.dataIndex], row) : row[column.dataIndex]}
						</TableCell>
				  ))
				: columns.map((column) => (
						<TableCell type={type} key={column.dataIndex}>
							{column.name}
						</TableCell>
				  ))}
		</tr>
	);
};

export default TableRow;
